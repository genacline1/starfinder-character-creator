import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FEATS, FEAT_TYPES, getFeatsForLevel } from './featsData';
import { CLASSES, SKILLS, getTotalLevel, calculateBAB } from './starfinderData';
import { SPELL_SCHOOLS } from './spellsData';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Award, Plus, X, ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function FeatSelector({ classes, selectedFeats = [], onFeatsChange, existingFeats = [], abilityScores = {} }) {
  const [filterType, setFilterType] = useState('all');
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const [showChoiceDialog, setShowChoiceDialog] = useState(false);
  const [selectedFeatForChoice, setSelectedFeatForChoice] = useState(null);
  const [featChoice, setFeatChoice] = useState('');
  const [secondChoice, setSecondChoice] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [overrideConfirmation, setOverrideConfirmation] = useState(null);

  const characterLevel = getTotalLevel(classes);
  const availableFeats = getFeatsForLevel(characterLevel);
  const selectedFeatsCount = selectedFeats.length;

  const handleFeatSelect = (feat) => {
    const { canSelect, reason, unmetPrereqs } = canSelectFeat(feat);
    
    // If already selected, deselect
    if (selectedFeats.some(f => f.id === feat.id)) {
      onFeatsChange(selectedFeats.filter(f => f.id !== feat.id));
      return;
    }

    // If already owned and can't take multiple times, block
    if (isFeatAlreadyOwned(feat.id) && !feat.canTakeMultipleTimes) return;

    // If max feats reached, block
    if (selectedFeatsCount >= availableFeats) return;

    // If prerequisites not met, show confirmation dialog
    if (!canSelect && reason === 'Prerequisites not met') {
      setOverrideConfirmation({ feat, unmetPrereqs });
      return;
    }

    // Otherwise proceed normally
    if (feat.requiresChoice) {
      setSelectedFeatForChoice(feat);
      setFeatChoice('');
      setSecondChoice('');
      setShowChoiceDialog(true);
    } else {
      onFeatsChange([...selectedFeats, { id: feat.id }]);
    }
  };

  const confirmOverride = () => {
    const feat = overrideConfirmation.feat;
    if (feat.requiresChoice) {
      setSelectedFeatForChoice(feat);
      setFeatChoice('');
      setSecondChoice('');
      setShowChoiceDialog(true);
    } else {
      onFeatsChange([...selectedFeats, { id: feat.id }]);
    }
    setOverrideConfirmation(null);
  };

  const addFeatWithChoice = () => {
    if (!selectedFeatForChoice || !featChoice) return;
    
    const featData = {
      id: selectedFeatForChoice.id,
      choice: featChoice
    };

    if (selectedFeatForChoice.choiceType === 'two_skills' && secondChoice) {
      featData.secondChoice = secondChoice;
    }

    onFeatsChange([...selectedFeats, featData]);
    setShowChoiceDialog(false);
    setSelectedFeatForChoice(null);
    setFeatChoice('');
    setSecondChoice('');
  };

  const removeFeat = (index) => {
    const newFeats = [...selectedFeats];
    newFeats.splice(index, 1);
    onFeatsChange(newFeats);
  };

  const isFeatSelected = (featId) => {
    return selectedFeats.some(f => f.id === featId);
  };

  const isFeatAlreadyOwned = (featId) => {
    return existingFeats.some(f => f.id === featId);
  };

  const canSelectFeat = (feat) => {
    // If feat is already selected in this session, can't select again
    if (isFeatSelected(feat.id)) return { canSelect: true, reason: '' }; // Already selected, for display
    
    // If feat is already owned and can't be taken multiple times
    if (isFeatAlreadyOwned(feat.id) && !feat.canTakeMultipleTimes) {
      return { canSelect: false, reason: 'Character already has this feat' };
    }

    // If we've reached the max number of feats
    if (selectedFeatsCount >= availableFeats) {
      return { canSelect: false, reason: 'Maximum feats reached' };
    }

    // Check if prerequisites are met
    const prereqCheck = getUnmetPrerequisites(feat);
    if (prereqCheck.length > 0) {
      return { canSelect: false, reason: 'Prerequisites not met', unmetPrereqs: prereqCheck };
    }

    return { canSelect: true, reason: '' };
  };

  const getUnmetPrerequisites = (feat) => {
    if (!feat.prerequisites || feat.prerequisites.length === 0) return [];

    const totalLevel = getTotalLevel(classes);
    const bab = calculateBAB(classes);
    const knownFeats = [...existingFeats, ...selectedFeats];
    const unmet = [];

    const abilityAbbreviations = {
      'str': 'strength',
      'dex': 'dexterity',
      'con': 'constitution',
      'int': 'intelligence',
      'wis': 'wisdom',
      'cha': 'charisma'
    };

    for (const prereq of feat.prerequisites) {
      const prereqLower = prereq.toLowerCase();

      // Check character level
      if (prereqLower.includes('character level')) {
        const match = prereq.match(/(\d+)/);
        if (match) {
          const requiredLevel = parseInt(match[1]);
          if (totalLevel < requiredLevel) {
            unmet.push(`Character level ${requiredLevel} (current: ${totalLevel})`);
            continue;
          }
        }
      }

      // Check base attack bonus
      if (prereqLower.includes('base attack bonus')) {
        const match = prereq.match(/\+(\d+)/);
        if (match) {
          const requiredBAB = parseInt(match[1]);
          if (bab < requiredBAB) {
            unmet.push(`Base attack bonus +${requiredBAB} (current: +${bab})`);
            continue;
          }
        }
      }

      // Check base save bonuses
      if (prereqLower.includes('base reflex save bonus')) {
        const match = prereq.match(/\+(\d+)/);
        if (match) {
          const requiredBonus = parseInt(match[1]);
          const reflexBase = classes.reduce((total, cls) => {
            const classData = CLASSES.find(c => c.id === cls.classId);
            if (!classData) return total;
            const level = cls.level;
            // Good save: 2 + level/2, Poor save: level/3
            // Full BAB classes have poor reflex
            if (classData.bab === 'Full') {
              return total + Math.floor(level / 3);
            } else {
              return total + Math.floor(level / 3);
            }
          }, 0);
          if (reflexBase < requiredBonus) {
            unmet.push(`Base Reflex save bonus +${requiredBonus} (current: +${reflexBase})`);
            continue;
          }
        }
      }

      if (prereqLower.includes('base fortitude save bonus')) {
        const match = prereq.match(/\+(\d+)/);
        if (match) {
          const requiredBonus = parseInt(match[1]);
          const fortBase = classes.reduce((total, cls) => {
            const classData = CLASSES.find(c => c.id === cls.classId);
            if (!classData) return total;
            const level = cls.level;
            if (classData.bab === 'Full') {
              return total + 2 + Math.floor(level / 2);
            } else {
              return total + Math.floor(level / 3);
            }
          }, 0);
          if (fortBase < requiredBonus) {
            unmet.push(`Base Fortitude save bonus +${requiredBonus} (current: +${fortBase})`);
            continue;
          }
        }
      }

      if (prereqLower.includes('base will save bonus')) {
        const match = prereq.match(/\+(\d+)/);
        if (match) {
          const requiredBonus = parseInt(match[1]);
          const willBase = classes.reduce((total, cls) => {
            const classData = CLASSES.find(c => c.id === cls.classId);
            if (!classData) return total;
            const level = cls.level;
            if (classData.bab === 'Full') {
              return total + Math.floor(level / 3);
            } else {
              return total + 2 + Math.floor(level / 2);
            }
          }, 0);
          if (willBase < requiredBonus) {
            unmet.push(`Base Will save bonus +${requiredBonus} (current: +${willBase})`);
            continue;
          }
        }
      }

      // Check ability scores (including abbreviations)
      const abilities = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
      let abilityChecked = false;
      
      // First check abbreviations
      for (const [abbr, fullName] of Object.entries(abilityAbbreviations)) {
        if (prereqLower.includes(abbr)) {
          const match = prereq.match(/(\d+)/);
          if (match) {
            const requiredScore = parseInt(match[1]);
            const currentScore = abilityScores[fullName] || 10;
            if (currentScore < requiredScore) {
              const abilityName = fullName.charAt(0).toUpperCase() + fullName.slice(1);
              unmet.push(`${abilityName} ${requiredScore} (current: ${currentScore})`);
              abilityChecked = true;
              break;
            }
          }
        }
      }
      
      // Then check full names if not already checked
      if (!abilityChecked) {
        for (const ability of abilities) {
          if (prereqLower.includes(ability)) {
            const match = prereq.match(/(\d+)/);
            if (match) {
              const requiredScore = parseInt(match[1]);
              const currentScore = abilityScores[ability] || 10;
              if (currentScore < requiredScore) {
                const abilityName = ability.charAt(0).toUpperCase() + ability.slice(1);
                unmet.push(`${abilityName} ${requiredScore} (current: ${currentScore})`);
                abilityChecked = true;
                break;
              }
            }
          }
        }
      }
      if (abilityChecked) continue;

      // Check for "X or more combat feats"
      const combatFeatsMatch = prereq.match(/(\w+)\s+or\s+more\s+combat\s+feats/i);
      if (combatFeatsMatch) {
        const requiredCount = combatFeatsMatch[1].toLowerCase() === 'three' ? 3 : parseInt(combatFeatsMatch[1]) || 0;
        const combatFeatsCount = knownFeats.filter(f => {
          const featData = FEATS.find(ft => ft.id === f.id);
          return featData && featData.type === 'combat';
        }).length;
        
        if (combatFeatsCount < requiredCount) {
          unmet.push(`${requiredCount} or more combat feats (current: ${combatFeatsCount})`);
          continue;
        }
      }

      // Check for skill ranks
      const skillMatch = prereq.match(/([A-Za-z\s]+)\s+(\d+)\s+ranks?/i);
      if (skillMatch) {
        unmet.push(prereq + ' (cannot verify)');
        continue;
      }

      // Check for spellcasting ability
      if (prereqLower.includes('ability to cast spells')) {
        const hasSpellcasting = classes.some(cls => {
          const classData = CLASSES.find(c => c.id === cls.classId);
          return classData && (classData.name === 'Mystic' || classData.name === 'Technomancer' || 
                               classData.name === 'Witchwarper' || classData.name === 'Precog');
        });
        if (!hasSpellcasting) {
          unmet.push('Ability to cast spells');
          continue;
        }
      }

      // Check for specific spell level casting
      const spellLevelMatch = prereq.match(/ability to cast (\d+)(?:st|nd|rd|th)-level spells/i);
      if (spellLevelMatch) {
        const requiredLevel = parseInt(spellLevelMatch[1]);
        const casterLevel = classes.reduce((max, cls) => {
          const classData = CLASSES.find(c => c.id === cls.classId);
          if (classData && (classData.name === 'Mystic' || classData.name === 'Technomancer' || 
                           classData.name === 'Witchwarper' || classData.name === 'Precog')) {
            return Math.max(max, cls.level);
          }
          return max;
        }, 0);

        // Spell level availability: 1st at CL1, 2nd at CL4, 3rd at CL6, 4th at CL10, 5th at CL14, 6th at CL16
        const canCastLevel = (level) => {
          if (level === 0) return casterLevel >= 1;
          if (level === 1) return casterLevel >= 1;
          if (level === 2) return casterLevel >= 4;
          if (level === 3) return casterLevel >= 6;
          if (level === 4) return casterLevel >= 10;
          if (level === 5) return casterLevel >= 14;
          if (level === 6) return casterLevel >= 16;
          return false;
        };

        if (!canCastLevel(requiredLevel)) {
          unmet.push(`Ability to cast ${requiredLevel}${requiredLevel === 1 ? 'st' : requiredLevel === 2 ? 'nd' : requiredLevel === 3 ? 'rd' : 'th'}-level spells (caster level: ${casterLevel})`);
          continue;
        }
      }

      // Check for caster level requirements
      if (prereqLower.includes('caster level')) {
        const clMatch = prereq.match(/caster level (\d+)(?:st|nd|rd|th)?/i);
        if (clMatch) {
          const requiredCL = parseInt(clMatch[1]);
          const casterLevel = classes.reduce((max, cls) => {
            const classData = CLASSES.find(c => c.id === cls.classId);
            if (classData && (classData.name === 'Mystic' || classData.name === 'Technomancer' || 
                             classData.name === 'Witchwarper' || classData.name === 'Precog')) {
              return Math.max(max, cls.level);
            }
            return max;
          }, 0);

          if (casterLevel < requiredCL) {
            unmet.push(`Caster level ${requiredCL} (current: ${casterLevel})`);
            continue;
          }
        }
      }

      // Check for other feats - need to check if any feat name is mentioned
      const otherFeatMentioned = FEATS.find(f => prereqLower.includes(f.name.toLowerCase()));
      if (otherFeatMentioned) {
        const hasFeat = knownFeats.some(f => f.id === otherFeatMentioned.id);
        if (!hasFeat) {
          unmet.push(otherFeatMentioned.name);
          continue;
        }
      }

      // Check for proficiency requirements
      if (prereqLower.includes('proficiency')) {
        unmet.push(prereq + ' (cannot verify)');
        continue;
      }

      // Check for racial traits
      if (prereqLower.includes('racial trait') || prereqLower.includes('racial') || prereqLower.includes('species trait') || prereqLower.includes('construct type') || prereqLower.includes('constructed')) {
        unmet.push(prereq + ' (cannot verify)');
        continue;
      }

      // Check for physical traits
      if (prereqLower.includes('arms') || prereqLower.includes('fly speed') || prereqLower.includes('swim speed')) {
        unmet.push(prereq + ' (cannot verify)');
        continue;
      }
    }

    return unmet;
  };

  const meetsPrerequisites = (feat) => {
    return getUnmetPrerequisites(feat).length === 0;
  };

  const filteredFeats = FEATS.filter(feat => {
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesName = feat.name.toLowerCase().includes(query);
      const matchesDescription = feat.description?.toLowerCase().includes(query);
      const matchesBenefit = feat.benefit?.toLowerCase().includes(query);
      if (!matchesName && !matchesDescription && !matchesBenefit) return false;
    }

    // Type filter
    if (filterType !== 'all' && feat.type !== filterType) return false;

    // Available only filter - hide feats where prerequisites are NOT met
    if (showAvailableOnly && !meetsPrerequisites(feat)) {
      return false;
    }

    return true;
  });

  return (
    <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-light text-white mb-2">Choose Your Feats</h2>
          <p className="text-cyan-300/60 text-sm">Select feats to customize your character</p>
        </div>

        {/* Feats Available */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-white">Feats Available</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className={`text-3xl font-bold ${selectedFeatsCount >= availableFeats ? 'text-green-400' : 'text-cyan-400'}`}>
                {selectedFeatsCount} / {availableFeats}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Level {characterLevel} characters can select {availableFeats} feat{availableFeats !== 1 ? 's' : ''}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Selected Feats */}
        {selectedFeats.length > 0 && (
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-white">Selected Feats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {selectedFeats.map((selectedFeat, idx) => {
                  const feat = FEATS.find(f => f.id === selectedFeat.id);
                  if (!feat) return null;
                  
                  return (
                    <div key={idx} className="flex items-center justify-between bg-purple-900/20 rounded-lg p-3 border border-purple-500/30">
                      <div className="flex-1">
                        <div className="font-medium text-purple-300">
                          {feat.name}
                          {selectedFeat.choice && (
                            <span className="text-xs text-slate-400 ml-2">
                              ({selectedFeat.choice}{selectedFeat.secondChoice ? `, ${selectedFeat.secondChoice}` : ''})
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-400 mt-1">{feat.benefit}</div>
                      </div>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => removeFeat(idx)}
                        className="h-7 w-7 text-slate-400 hover:text-red-400"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Search Bar */}
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Search feats..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-slate-800/60 border-slate-600 text-white placeholder:text-slate-500"
          />
        </div>

        {/* Filters */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader className="pb-3 cursor-pointer" onClick={() => setFiltersExpanded(!filtersExpanded)}>
            <CardTitle className="text-base text-white flex items-center gap-2">
              <Filter className="w-4 h-4 text-amber-400" />
              Filters
              {filtersExpanded ? 
                <ChevronUp className="w-4 h-4 ml-auto text-slate-400" /> : 
                <ChevronDown className="w-4 h-4 ml-auto text-slate-400" />
              }
            </CardTitle>
          </CardHeader>
          {filtersExpanded && (
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-slate-400 mb-2">Feat Type</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant={filterType === 'all' ? 'default' : 'outline'}
                      className={`cursor-pointer ${filterType === 'all' ? 'bg-amber-500' : ''}`}
                      onClick={() => setFilterType('all')}
                    >
                      All Types
                    </Badge>
                    {FEAT_TYPES.map(type => (
                      <Badge
                        key={type}
                        variant={filterType === type ? 'default' : 'outline'}
                        className={`cursor-pointer capitalize ${filterType === type ? 'bg-amber-500' : ''}`}
                        onClick={() => setFilterType(type)}
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 mb-2">Availability</div>
                  <div className="flex gap-2">
                    <Badge
                      variant={!showAvailableOnly ? 'default' : 'outline'}
                      className={`cursor-pointer ${!showAvailableOnly ? 'bg-cyan-500' : ''}`}
                      onClick={() => setShowAvailableOnly(false)}
                    >
                      All Feats
                    </Badge>
                    <Badge
                      variant={showAvailableOnly ? 'default' : 'outline'}
                      className={`cursor-pointer ${showAvailableOnly ? 'bg-green-500' : ''}`}
                      onClick={() => setShowAvailableOnly(true)}
                    >
                      Available Only
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Feats List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredFeats.map(feat => {
            const isSelected = isFeatSelected(feat.id);
            const isOwned = isFeatAlreadyOwned(feat.id);
            const { canSelect: canSelectThisFeat, reason, unmetPrereqs } = canSelectFeat(feat);
            const hasPrereqs = feat.prerequisites && feat.prerequisites.length > 0;
            const meetsPrereqs = meetsPrerequisites(feat);

            return (
              <motion.div
                key={feat.id}
                whileHover={{ scale: (canSelectThisFeat || isSelected) ? 1.01 : 1 }}
                onClick={() => handleFeatSelect(feat)}
                className={`
                  rounded-lg p-4 border transition-all
                  ${isSelected 
                    ? 'bg-amber-500/10 border-amber-400/50 cursor-pointer' 
                    : isOwned && !feat.canTakeMultipleTimes
                      ? 'bg-slate-800/20 border-slate-700/30 opacity-40 cursor-not-allowed'
                    : canSelectThisFeat
                      ? 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600/50 cursor-pointer'
                      : 'bg-slate-800/20 border-red-900/30 opacity-60 cursor-not-allowed'
                  }
                `}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h4 className={`font-medium ${isSelected ? 'text-amber-300' : canSelectThisFeat ? 'text-white' : 'text-slate-500'}`}>
                      {feat.name}
                    </h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <Badge variant="outline" className="text-xs border-cyan-500/50 text-cyan-400 capitalize">
                        {feat.type}
                      </Badge>
                      {isOwned && !isSelected && !feat.canTakeMultipleTimes && (
                        <Badge variant="outline" className="text-xs border-slate-500/50 text-slate-400">
                          Already owned
                        </Badge>
                      )}
                      {!canSelectThisFeat && !isSelected && reason === 'Maximum feats reached' && (
                        <Badge variant="outline" className="text-xs border-amber-500/50 text-amber-400">
                          Max feats
                        </Badge>
                      )}
                    </div>
                  </div>
                  {isSelected && <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />}
                </div>
                
                {hasPrereqs && (
                  <div className="mb-2">
                    <div className={`text-xs font-semibold mb-1 ${meetsPrereqs ? 'text-green-400' : 'text-red-400'}`}>
                      Prerequisites:
                    </div>
                    {meetsPrereqs ? (
                      <div className="text-xs text-green-300">
                        {feat.prerequisites.join(', ')}
                      </div>
                    ) : (
                      <div className="space-y-1">
                        {unmetPrereqs && unmetPrereqs.map((prereq, idx) => (
                          <div key={idx} className="text-xs text-red-300 flex items-start gap-1">
                            <span className="text-red-400">✗</span>
                            <span>{prereq}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                <p className={`text-sm ${canSelectThisFeat || isSelected ? 'text-slate-400' : 'text-slate-500'}`}>
                  {feat.benefit}
                </p>

                {!canSelectThisFeat && !isSelected && reason && reason !== 'Prerequisites not met' && (
                  <div className="mt-2 text-xs text-amber-400 italic">
                    {reason}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Override Confirmation Dialog */}
        <Dialog open={overrideConfirmation !== null} onOpenChange={(open) => !open && setOverrideConfirmation(null)}>
          <DialogContent className="bg-slate-900 border-slate-700">
            <DialogHeader>
              <DialogTitle className="text-white">Override Prerequisites?</DialogTitle>
              <DialogDescription className="text-slate-400">
                This feat has unmet prerequisites. Are you sure you want to select it anyway?
              </DialogDescription>
            </DialogHeader>
            {overrideConfirmation && (
              <div className="space-y-3">
                <div className="p-3 bg-slate-800/50 rounded-lg">
                  <div className="font-medium text-white mb-2">{overrideConfirmation.feat.name}</div>
                  <div className="text-sm text-slate-400">{overrideConfirmation.feat.benefit}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-red-400">Missing Prerequisites:</div>
                  {overrideConfirmation.unmetPrereqs.map((prereq, idx) => (
                    <div key={idx} className="text-xs text-red-300 flex items-start gap-1 pl-2">
                      <span className="text-red-400">✗</span>
                      <span>{prereq}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setOverrideConfirmation(null)} className="bg-slate-800 border-slate-700">
                Cancel
              </Button>
              <Button onClick={confirmOverride} className="bg-amber-500 hover:bg-amber-600">
                Select Anyway
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Choice Dialog */}
        <Dialog open={showChoiceDialog} onOpenChange={setShowChoiceDialog}>
          <DialogContent className="bg-slate-900 border-slate-700">
            <DialogHeader>
              <DialogTitle className="text-white">{selectedFeatForChoice?.name}</DialogTitle>
              <DialogDescription className="text-slate-400">
                {selectedFeatForChoice?.description}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              {selectedFeatForChoice?.choiceType === 'weapon' && (
                <div>
                  <Label className="text-slate-300">Select Weapon Type</Label>
                  <Select value={featChoice} onValueChange={setFeatChoice}>
                    <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                      <SelectValue placeholder="Choose weapon type..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic_melee">Basic Melee Weapons</SelectItem>
                      <SelectItem value="advanced_melee">Advanced Melee Weapons</SelectItem>
                      <SelectItem value="small_arms">Small Arms</SelectItem>
                      <SelectItem value="longarms">Longarms</SelectItem>
                      <SelectItem value="heavy_weapons">Heavy Weapons</SelectItem>
                      <SelectItem value="sniper_weapons">Sniper Weapons</SelectItem>
                      <SelectItem value="grenades">Grenades</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {selectedFeatForChoice?.choiceType === 'combat_maneuver' && (
                <div>
                  <Label className="text-slate-300">Select Combat Maneuver</Label>
                  <Select value={featChoice} onValueChange={setFeatChoice}>
                    <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                      <SelectValue placeholder="Choose combat maneuver..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bull_rush">Bull Rush</SelectItem>
                      <SelectItem value="dirty_trick">Dirty Trick</SelectItem>
                      <SelectItem value="disarm">Disarm</SelectItem>
                      <SelectItem value="grapple">Grapple</SelectItem>
                      <SelectItem value="reposition">Reposition</SelectItem>
                      <SelectItem value="sunder">Sunder</SelectItem>
                      <SelectItem value="trip">Trip</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {selectedFeatForChoice?.choiceType === 'energy_type' && (
                <div>
                  <Label className="text-slate-300">Select Energy Type</Label>
                  <Select value={featChoice} onValueChange={setFeatChoice}>
                    <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                      <SelectValue placeholder="Choose energy type..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="acid">Acid</SelectItem>
                      <SelectItem value="cold">Cold</SelectItem>
                      <SelectItem value="electricity">Electricity</SelectItem>
                      <SelectItem value="fire">Fire</SelectItem>
                      <SelectItem value="sonic">Sonic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              
              {selectedFeatForChoice?.choiceType === 'skill' && (
                <div>
                  <Label className="text-slate-300">Select Skill</Label>
                  <Select value={featChoice} onValueChange={setFeatChoice}>
                    <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                      <SelectValue placeholder="Choose a skill..." />
                    </SelectTrigger>
                    <SelectContent>
                      {SKILLS.map(skill => (
                        <SelectItem key={skill.name} value={skill.name}>
                          {skill.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              
              {selectedFeatForChoice?.choiceType === 'two_skills' && (
                <>
                  <div>
                    <Label className="text-slate-300">First Skill</Label>
                    <Select value={featChoice} onValueChange={setFeatChoice}>
                      <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                        <SelectValue placeholder="Choose first skill..." />
                      </SelectTrigger>
                      <SelectContent>
                        {SKILLS.map(skill => (
                          <SelectItem key={skill.name} value={skill.name}>
                            {skill.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-slate-300">Second Skill</Label>
                    <Select value={secondChoice} onValueChange={setSecondChoice}>
                      <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                        <SelectValue placeholder="Choose second skill..." />
                      </SelectTrigger>
                      <SelectContent>
                        {SKILLS.filter(s => s.name !== featChoice).map(skill => (
                          <SelectItem key={skill.name} value={skill.name}>
                            {skill.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
              
              {selectedFeatForChoice?.choiceType === 'spell_school' && (
                <div>
                  <Label className="text-slate-300">Select Spell School</Label>
                  <Select value={featChoice} onValueChange={setFeatChoice}>
                    <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                      <SelectValue placeholder="Choose a school..." />
                    </SelectTrigger>
                    <SelectContent>
                      {SPELL_SCHOOLS.map(school => (
                        <SelectItem key={school} value={school}>
                          {school}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowChoiceDialog(false)} className="bg-slate-800 border-slate-700">
                Cancel
              </Button>
              <Button 
                onClick={addFeatWithChoice} 
                disabled={
                  !featChoice || 
                  (selectedFeatForChoice?.choiceType === 'two_skills' && !secondChoice)
                } 
                className="bg-amber-500 hover:bg-amber-600"
              >
                Add Feat
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
  );
}