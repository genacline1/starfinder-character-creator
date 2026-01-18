import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowUp, Sparkles, BookOpen, Brain, Zap, AlertCircle, History, Edit2, ChevronDown, Award } from 'lucide-react';
import { CLASSES, ABILITY_NAMES, ABILITY_ABBREVIATIONS, calculateModifier, getTotalLevel } from './starfinderData';
import { getClassAbilityOptions } from './classAbilitiesData';
import { getFeatById } from './featsData';
import SkillAllocator from './SkillAllocator';
import FeatSelector from './FeatSelector';
import SpellSelector from './SpellSelector';
import ClassAbilitySelector from './ClassAbilitySelector';

export default function LevelUpManager({ character, onCharacterUpdate }) {
  const [selectedClassId, setSelectedClassId] = useState(null);
  const [abilityIncreases, setAbilityIncreases] = useState([]);
  const [newSkills, setNewSkills] = useState({});
  const [newFeats, setNewFeats] = useState([]);
  const [newClassAbilities, setNewClassAbilities] = useState([]);
  const [showAbilityIncrease, setShowAbilityIncrease] = useState(false);
  const [showSkillAllocation, setShowSkillAllocation] = useState(false);
  const [showFeatSelection, setShowFeatSelection] = useState(false);
  const [showSpellSelection, setShowSpellSelection] = useState(false);
  const [showClassAbilities, setShowClassAbilities] = useState(false);
  const [showClassFeatures, setShowClassFeatures] = useState(false);

  // Auto-expand sections that require input when class is selected
  React.useEffect(() => {
    if (selectedClassId) {
      const intMod = calculateModifier(character.abilityScores?.intelligence || 10);
      const baseSkillPoints = selectedClass?.skillRanksPerLevel || 4;
      const expectedSkillPoints = Math.max(1, baseSkillPoints + intMod);
      const skillPointsSpent = Object.values(newSkills).reduce((sum, ranks) => sum + ranks, 0);
      
      // Expand sections that require input
      if (getsAbilityIncrease && abilityIncreases.length !== 4) {
        setShowAbilityIncrease(true);
      }
      if (skillPointsSpent !== expectedSkillPoints) {
        setShowSkillAllocation(true);
      }
      if (getsFeat && newFeats.length === 0) {
        setShowFeatSelection(true);
      }
      if (needsClassAbility && newClassAbilities.length === 0) {
        setShowClassAbilities(true);
      }
    }
  }, [selectedClassId, abilityIncreases.length, newSkills, newFeats.length, newClassAbilities.length]);
  const [reviewLevel, setReviewLevel] = useState(null);
  const [editingLevel, setEditingLevel] = useState(null);
  const [editAbilityIncreases, setEditAbilityIncreases] = useState([]);
  const [editSkills, setEditSkills] = useState({});
  const [editFeats, setEditFeats] = useState([]);
  const [editClassAbilities, setEditClassAbilities] = useState([]);

  const currentLevel = getTotalLevel(character.classes);
  const newLevel = currentLevel + 1;

  // Check if we get ability increase at new level
  const getsAbilityIncrease = newLevel % 5 === 0;
  
  // Check if we get a feat at new level
  const getsFeat = newLevel % 2 === 1; // Odd levels get feats

  // Check if we get class-specific abilities at new level
  const selectedClass = selectedClassId ? CLASSES.find(c => c.id === selectedClassId) : null;
  const classAbilityOptions = selectedClassId ? getClassAbilityOptions(selectedClassId, newLevel) : null;
  const needsClassAbility = classAbilityOptions !== null;

  const availableClasses = character.classes.length > 0 
    ? character.classes.map(c => ({ id: c.classId, ...CLASSES.find(cls => cls.id === c.classId) }))
    : [];

  const canLevelUp = () => {
    if (!selectedClassId) return { valid: false, message: 'Please select a class to level up' };
    
    // Calculate expected skill points for this level
    const intMod = calculateModifier(character.abilityScores?.intelligence || 10);
    const baseSkillPoints = selectedClass?.skillRanksPerLevel || 4;
    const expectedSkillPoints = Math.max(1, baseSkillPoints + intMod);
    const skillPointsSpent = Object.values(newSkills).reduce((sum, ranks) => sum + ranks, 0);
    
    if (skillPointsSpent !== expectedSkillPoints) {
      return { 
        valid: false, 
        message: `Please allocate all skill ranks (${skillPointsSpent}/${expectedSkillPoints} allocated)` 
      };
    }
    
    if (getsAbilityIncrease && abilityIncreases.length !== 4) return { valid: false, message: `Please choose 4 ability scores to increase (${abilityIncreases.length}/4 selected)` };
    if (getsFeat && newFeats.length === 0) return { valid: false, message: 'Please select a feat for this level' };
    if (needsClassAbility && newClassAbilities.length === 0) return { valid: false, message: `Please select a ${classAbilityOptions.displayName}` };
    return { valid: true, message: '' };
  };

  const levelUpValidation = canLevelUp();

  const handleLevelUp = () => {
    if (!levelUpValidation.valid) return;

    // Update character with new level
    const updatedClasses = character.classes.map(c => 
      c.classId === selectedClassId 
        ? { ...c, level: c.level + 1 }
        : c
    );

    // If leveling a new class (multiclassing)
    if (!character.classes.find(c => c.classId === selectedClassId)) {
      updatedClasses.push({ classId: selectedClassId, level: 1 });
    }

    // Apply ability score increases
    let updatedAbilityScores = { ...character.ability_scores || character.abilityScores };
    if (getsAbilityIncrease && abilityIncreases.length === 4) {
      abilityIncreases.forEach(ability => {
        const currentScore = updatedAbilityScores[ability] || 10;
        // If 17+, increase by 1; if 16 or lower, increase by 2
        const increase = currentScore >= 17 ? 1 : 2;
        updatedAbilityScores[ability] = currentScore + increase;
      });
    }

    // Merge new skills
    const updatedSkills = { ...character.skills };
    Object.keys(newSkills).forEach(skill => {
      updatedSkills[skill] = (updatedSkills[skill] || 0) + newSkills[skill];
    });

    // Add new feats
    const updatedFeats = [...(character.feats || []), ...newFeats];

    // Add new class abilities
    const classAbilitiesKey = `${selectedClassId}_abilities`;
    const updatedClassAbilities = [...(character[classAbilitiesKey] || []), ...newClassAbilities];

    // Store level history
    const levelHistory = character.levelHistory || [];
    levelHistory.push({
      level: newLevel,
      classId: selectedClassId,
      abilityIncreases: getsAbilityIncrease ? abilityIncreases : null,
      skills: newSkills,
      feats: newFeats,
      classAbilities: newClassAbilities,
      spells: character.knownSpells || []
    });

    const updatedCharacter = {
      ...character,
      classes: updatedClasses,
      abilityScores: updatedAbilityScores,
      skills: updatedSkills,
      feats: updatedFeats,
      levelHistory
    };

    // Add class-specific abilities to character
    if (newClassAbilities.length > 0) {
      updatedCharacter[classAbilitiesKey] = updatedClassAbilities;
    }

    onCharacterUpdate(updatedCharacter);

    // Reset state
    setSelectedClassId(null);
    setAbilityIncreases([]);
    setNewSkills({});
    setNewFeats([]);
    setNewClassAbilities([]);
    setShowAbilityIncrease(false);
    setShowSkillAllocation(false);
    setShowFeatSelection(false);
    setShowSpellSelection(false);
    setShowClassAbilities(false);
    setShowClassFeatures(false);
  };

  const handleEditLevel = (levelData) => {
    // Update the level history with edited data
    const updatedHistory = character.levelHistory.map(l => 
      l.level === levelData.level ? {
        ...levelData,
        abilityIncreases: editAbilityIncreases.length > 0 ? editAbilityIncreases : levelData.abilityIncreases,
        skills: editSkills,
        feats: editFeats.length > 0 ? editFeats : levelData.feats,
        classAbilities: editClassAbilities.length > 0 ? editClassAbilities : levelData.classAbilities
      } : l
    );

    // Recalculate character stats from level history
    const baseAbilityScores = { ...character.abilityScores };
    const baseSkills = {};
    const allFeats = [];
    
    // Apply all level history changes
    updatedHistory.forEach(level => {
      // Apply ability increases
      if (level.abilityIncreases) {
        level.abilityIncreases.forEach(ability => {
          const currentScore = baseAbilityScores[ability] || 10;
          const increase = currentScore >= 17 ? 1 : 2;
          baseAbilityScores[ability] = currentScore + increase;
        });
      }
      
      // Apply skills
      Object.entries(level.skills || {}).forEach(([skill, ranks]) => {
        baseSkills[skill] = (baseSkills[skill] || 0) + ranks;
      });
      
      // Apply feats
      if (level.feats) {
        allFeats.push(...level.feats);
      }
    });

    onCharacterUpdate({
      ...character,
      abilityScores: baseAbilityScores,
      skills: baseSkills,
      feats: allFeats,
      levelHistory: updatedHistory
    });
    
    setEditingLevel(null);
    setReviewLevel(null);
    setEditAbilityIncreases([]);
    setEditSkills({});
    setEditFeats([]);
    setEditClassAbilities([]);
  };

  const levelHistory = character.levelHistory || [];

  return (
    <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-light text-white mb-2">Level Up</h2>
          <p className="text-cyan-300/60 text-sm">Advance your character to level {newLevel}</p>
        </div>

        {/* Level History Review */}
        {levelHistory.length > 0 && (
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <History className="w-5 h-5 text-amber-400" />
                Level History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={reviewLevel?.toString()} onValueChange={(val) => setReviewLevel(parseInt(val))}>
                <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white mb-4">
                  <SelectValue placeholder="Review previous level selections..." />
                </SelectTrigger>
                <SelectContent>
                  {levelHistory.map(entry => (
                    <SelectItem key={entry.level} value={entry.level.toString()}>
                      Level {entry.level} - {CLASSES.find(c => c.id === entry.classId)?.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {reviewLevel && (() => {
                const levelData = levelHistory.find(l => l.level === reviewLevel);
                if (!levelData) return null;
                const levelClass = CLASSES.find(c => c.id === levelData.classId);
                const isEditing = editingLevel === reviewLevel;

                // Initialize edit states when starting to edit
                React.useEffect(() => {
                  if (isEditing && editSkills && Object.keys(editSkills).length === 0) {
                    setEditAbilityIncreases(levelData.abilityIncreases || []);
                    setEditSkills(levelData.skills || {});
                    setEditFeats(levelData.feats || []);
                    setEditClassAbilities(levelData.classAbilities || []);
                  }
                }, [isEditing]);

                const getsAbilityIncrease = levelData.level % 5 === 0;
                const getsFeat = levelData.level % 2 === 1;

                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-slate-900/50 rounded-lg p-4 space-y-4"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium text-white">Level {levelData.level} Selections</h3>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          if (isEditing) {
                            setEditAbilityIncreases([]);
                            setEditSkills({});
                            setEditFeats([]);
                            setEditClassAbilities([]);
                          }
                          setEditingLevel(isEditing ? null : reviewLevel);
                        }}
                        className="border-amber-500/50 text-amber-400 hover:bg-amber-500/20"
                      >
                        <Edit2 className="w-4 h-4 mr-2" />
                        {isEditing ? 'Cancel Edit' : 'Edit'}
                      </Button>
                    </div>

                    {!isEditing ? (
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Class Leveled:</span>
                          <span className="text-white">{levelClass?.name}</span>
                        </div>

                        {levelData.abilityIncreases && (
                          <div>
                            <span className="text-slate-400">Ability Increases:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {levelData.abilityIncreases.map(ability => (
                                <Badge key={ability} className="bg-purple-500/20 text-purple-300 capitalize">
                                  {ability}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {Object.keys(levelData.skills || {}).length > 0 && (
                          <div>
                            <span className="text-slate-400">Skills Allocated:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {Object.entries(levelData.skills).map(([skill, ranks]) => (
                                <Badge key={skill} className="bg-cyan-500/20 text-cyan-300">
                                  {skill} +{ranks}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {levelData.feats && levelData.feats.length > 0 && (
                          <div>
                            <span className="text-slate-400">Feats Selected:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {levelData.feats.map((feat, idx) => {
                                const featData = getFeatById(feat.id);
                                return (
                                  <Badge key={idx} className="bg-amber-500/20 text-amber-300">
                                    {featData?.name || feat.id}
                                    {feat.choice && ` (${feat.choice})`}
                                    {feat.secondChoice && `, ${feat.secondChoice}`}
                                  </Badge>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {levelData.classAbilities && levelData.classAbilities.length > 0 && (
                          <div>
                            <span className="text-slate-400">Class Abilities Selected:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {levelData.classAbilities.map((ability, idx) => (
                                <Badge key={idx} className="bg-purple-500/20 text-purple-300">
                                  {ability.name || ability.id}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="bg-slate-800/50 rounded-lg p-3 text-sm text-white">
                          <div className="flex justify-between mb-1">
                            <span className="text-slate-400">Class Leveled:</span>
                            <span>{levelClass?.name}</span>
                          </div>
                        </div>

                        {/* Edit Ability Increases */}
                        {getsAbilityIncrease && (
                          <div className="bg-slate-800/50 rounded-lg p-4">
                            <h4 className="text-white font-medium mb-3">Ability Score Increases ({editAbilityIncreases.length}/4)</h4>
                            <p className="text-sm text-slate-400 mb-3">
                              Choose 4 ability scores to increase. Scores of 17+ increase by 1, scores of 16 or lower increase by 2.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                              {ABILITY_NAMES.map(ability => {
                                const isSelected = editAbilityIncreases.includes(ability);
                                const toggleAbility = () => {
                                  if (isSelected) {
                                    setEditAbilityIncreases(editAbilityIncreases.filter(a => a !== ability));
                                  } else if (editAbilityIncreases.length < 4) {
                                    setEditAbilityIncreases([...editAbilityIncreases, ability]);
                                  }
                                };

                                return (
                                  <Button
                                    key={ability}
                                    variant={isSelected ? "default" : "outline"}
                                    onClick={toggleAbility}
                                    disabled={!isSelected && editAbilityIncreases.length >= 4}
                                    className={isSelected ? 'bg-purple-500 hover:bg-purple-600' : ''}
                                  >
                                    <div className="text-left w-full capitalize">{ability}</div>
                                  </Button>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Edit Skills */}
                        <div className="bg-slate-800/50 rounded-lg p-4">
                          <h4 className="text-white font-medium mb-3">Reallocate Skill Ranks</h4>
                          <SkillAllocator
                            skills={editSkills}
                            onSkillsChange={setEditSkills}
                            selectedClass={levelClass}
                            abilityScores={character.abilityScores}
                            theme={character.theme}
                            totalLevel={1}
                            existingSkills={{}}
                            characterLevel={levelData.level}
                          />
                        </div>

                        {/* Edit Feats */}
                        {getsFeat && (
                          <div className="bg-slate-800/50 rounded-lg p-4">
                            <h4 className="text-white font-medium mb-3">Select Feat</h4>
                            <FeatSelector
                              classes={[{ classId: levelClass.id, level: levelData.level }]}
                              selectedFeats={editFeats}
                              onFeatsChange={setEditFeats}
                              existingFeats={[]}
                              abilityScores={character.abilityScores}
                            />
                          </div>
                        )}

                        <div className="pt-4 border-t border-slate-700">
                          <p className="text-xs text-amber-400 mb-3">
                            Changes will recalculate your character stats from this level forward.
                          </p>
                          <Button
                            onClick={() => handleEditLevel(levelData)}
                            className="bg-amber-500 hover:bg-amber-600 text-white w-full"
                          >
                            Save Changes
                          </Button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })()}
            </CardContent>
          </Card>
        )}

        {/* Current Status */}
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Brain className="w-5 h-5 text-cyan-400" />
            Current Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Current Level</span>
            <Badge className="bg-cyan-500/20 text-cyan-300">{currentLevel}</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Classes</span>
            <div className="flex gap-2">
              {character.classes.map(c => {
                const cls = CLASSES.find(cl => cl.id === c.classId);
                return (
                  <Badge key={c.classId} variant="outline" className="border-purple-500/50 text-purple-300">
                    {cls?.name} {c.level}
                  </Badge>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

        {/* Class Selection */}
        <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <ArrowUp className="w-5 h-5 text-green-400" />
            Choose Class to Level
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={selectedClassId} onValueChange={setSelectedClassId}>
            <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
              <SelectValue placeholder="Select a class..." />
            </SelectTrigger>
            <SelectContent>
              {availableClasses.map(cls => (
                <SelectItem key={cls.id} value={cls.id}>
                  {cls.name} (Current: {character.classes.find(c => c.classId === cls.id)?.level || 0})
                </SelectItem>
              ))}
              <SelectItem value="new" disabled>
                <span className="text-slate-500">+ Add New Class (Multiclass)</span>
              </SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

        {/* Level Up Benefits */}
        {selectedClass && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <Card className="bg-green-900/20 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-green-300 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Level {newLevel} Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-slate-300">+{selectedClass.hp} HP, +{selectedClass.stamina} Stamina</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-300">+{selectedClass.skillRanksPerLevel} skill ranks (+ Int modifier)</span>
              </div>
              {getsAbilityIncrease && (
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-400" />
                  <span className="text-slate-300">+1 to any ability score</span>
                </div>
              )}
              {getsFeat && (
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-slate-300">Choose 1 new feat</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Ability Score Increase */}
          {getsAbilityIncrease && (
            <Card className={`bg-slate-800/50 ${abilityIncreases.length !== 4 ? 'border-amber-500/50' : 'border-slate-700/50'}`}>
              <CardHeader className="cursor-pointer" onClick={() => setShowAbilityIncrease(!showAbilityIncrease)}>
                <CardTitle className="text-white flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-400" />
                    Ability Score Increases ({abilityIncreases.length}/4)
                    {abilityIncreases.length !== 4 && <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/50 text-xs ml-2">Required</Badge>}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${showAbilityIncrease ? 'rotate-180' : ''}`} />
                </CardTitle>
              </CardHeader>
              {showAbilityIncrease && (
                <CardContent>
                  <p className="text-sm text-slate-400 mb-3">
                    Choose 4 ability scores to increase. Scores of 17+ increase by 1, scores of 16 or lower increase by 2.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {ABILITY_NAMES.map(ability => {
                      const currentScore = character.ability_scores?.[ability] || character.abilityScores?.[ability] || 10;
                      const isSelected = abilityIncreases.includes(ability);
                      const increase = currentScore >= 17 ? 1 : 2;
                      const newScore = currentScore + increase;
                      
                      const toggleAbility = () => {
                        if (isSelected) {
                          setAbilityIncreases(abilityIncreases.filter(a => a !== ability));
                        } else if (abilityIncreases.length < 4) {
                          setAbilityIncreases([...abilityIncreases, ability]);
                        }
                      };

                      return (
                        <Button
                          key={ability}
                          variant={isSelected ? "default" : "outline"}
                          onClick={toggleAbility}
                          disabled={!isSelected && abilityIncreases.length >= 4}
                          className={isSelected ? 'bg-purple-500 hover:bg-purple-600' : ''}
                        >
                          <div className="text-left w-full">
                            <div className="font-medium capitalize">{ability}</div>
                            <div className="text-xs opacity-70">
                              {currentScore} → {newScore} (+{increase})
                            </div>
                          </div>
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              )}
            </Card>
          )}

          {/* Class Features - Preview Only */}
          <Card className="bg-purple-900/20 border-purple-500/30">
            <CardHeader className="cursor-pointer" onClick={() => setShowClassFeatures(!showClassFeatures)}>
              <CardTitle className="text-purple-300 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Class Features Preview
                  <Badge variant="outline" className="text-xs border-purple-500/30 text-purple-400 ml-2">Preview</Badge>
                </span>
                <ChevronDown className={`w-5 h-5 text-purple-400 transition-transform ${showClassFeatures ? 'rotate-180' : ''}`} />
              </CardTitle>
            </CardHeader>
            {showClassFeatures && (
              <CardContent>
              <div className="space-y-2">
                {selectedClass.classAbilities
                  ?.filter(ability => ability.level === newLevel || (ability.level === 1 && newLevel === 1))
                  .map((ability, idx) => (
                    <div key={idx} className="bg-slate-800/50 rounded-lg p-3">
                      <h4 className="font-medium text-purple-300 mb-1">{ability.name}</h4>
                      <p className="text-sm text-slate-400">{ability.description}</p>
                    </div>
                  ))}
                {selectedClass.classAbilities?.filter(ability => ability.level === newLevel).length === 0 && (
                  <p className="text-sm text-slate-400 text-center">No new class features at this level</p>
                )}
              </div>
              </CardContent>
            )}
          </Card>

          {/* Skill Allocation */}
          <Card className={`bg-slate-800/50 ${(() => {
            const intMod = calculateModifier(character.abilityScores?.intelligence || 10);
            const baseSkillPoints = selectedClass?.skillRanksPerLevel || 4;
            const expectedSkillPoints = Math.max(1, baseSkillPoints + intMod);
            const skillPointsSpent = Object.values(newSkills).reduce((sum, ranks) => sum + ranks, 0);
            return skillPointsSpent !== expectedSkillPoints ? 'border-amber-500/50' : 'border-slate-700/50';
          })()}`}>
            <CardHeader className="cursor-pointer" onClick={() => setShowSkillAllocation(!showSkillAllocation)}>
              <CardTitle className="text-white flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                  Allocate New Skill Ranks
                  {(() => {
                    const intMod = calculateModifier(character.abilityScores?.intelligence || 10);
                    const baseSkillPoints = selectedClass?.skillRanksPerLevel || 4;
                    const expectedSkillPoints = Math.max(1, baseSkillPoints + intMod);
                    const skillPointsSpent = Object.values(newSkills).reduce((sum, ranks) => sum + ranks, 0);
                    return skillPointsSpent !== expectedSkillPoints && <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/50 text-xs ml-2">Required</Badge>;
                  })()}
                </span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${showSkillAllocation ? 'rotate-180' : ''}`} />
              </CardTitle>
            </CardHeader>
            {showSkillAllocation && (
              <CardContent>
                <SkillAllocator
                  skills={newSkills}
                  onSkillsChange={setNewSkills}
                  selectedClass={selectedClass}
                  abilityScores={character.abilityScores}
                  theme={character.theme}
                  totalLevel={1}
                  existingSkills={character.skills}
                  characterLevel={newLevel}
                />
              </CardContent>
            )}
          </Card>

          {/* Class Ability Selection */}
          {needsClassAbility && (
            <Card className={`bg-slate-800/50 ${newClassAbilities.length === 0 ? 'border-amber-500/50' : 'border-slate-700/50'}`}>
              <CardHeader className="cursor-pointer" onClick={() => setShowClassAbilities(!showClassAbilities)}>
                <CardTitle className="text-white flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    Select {classAbilityOptions.displayName}
                    {newClassAbilities.length === 0 && <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/50 text-xs ml-2">Required</Badge>}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${showClassAbilities ? 'rotate-180' : ''}`} />
                </CardTitle>
              </CardHeader>
              {showClassAbilities && (
                <CardContent>
                <ClassAbilitySelector
                  abilityType={classAbilityOptions.abilityType}
                  displayName={classAbilityOptions.displayName}
                  options={classAbilityOptions.options}
                  selectedAbilities={newClassAbilities}
                  onAbilitiesChange={setNewClassAbilities}
                  existingAbilities={character[`${selectedClassId}_abilities`] || []}
                  maxSelections={1}
                />
                </CardContent>
              )}
            </Card>
          )}

          {/* Feat Selection */}
          {getsFeat && (
            <Card className={`bg-slate-800/50 ${newFeats.length === 0 ? 'border-amber-500/50' : 'border-slate-700/50'}`}>
              <CardHeader className="cursor-pointer" onClick={() => setShowFeatSelection(!showFeatSelection)}>
                <CardTitle className="text-white flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    Select New Feat
                    {newFeats.length === 0 && <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/50 text-xs ml-2">Required</Badge>}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${showFeatSelection ? 'rotate-180' : ''}`} />
                </CardTitle>
              </CardHeader>
              {showFeatSelection && (
                <CardContent>
                  <FeatSelector
                    classes={[{ classId: selectedClass.id, level: newLevel }]}
                    selectedFeats={newFeats}
                    onFeatsChange={setNewFeats}
                    existingFeats={character.feats || []}
                    abilityScores={character.ability_scores || character.abilityScores || {}}
                  />
                </CardContent>
              )}
            </Card>
          )}

          {/* Spell Selection for Spellcasters - Optional */}
          {(selectedClass.name === 'Mystic' || selectedClass.name === 'Technomancer') && (
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader className="cursor-pointer" onClick={() => setShowSpellSelection(!showSpellSelection)}>
                <CardTitle className="text-white flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    Update Spells
                    <Badge variant="outline" className="text-xs border-slate-500/30 text-slate-400 ml-2">Optional</Badge>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${showSpellSelection ? 'rotate-180' : ''}`} />
                </CardTitle>
              </CardHeader>
              {showSpellSelection && (
                <CardContent>
                  <p className="text-sm text-slate-400 mb-3">You may learn new spells based on your new level</p>
                  <SpellSelector
                    selectedClass={selectedClass}
                    classes={[{ classId: selectedClass.id, level: newLevel }]}
                    knownSpells={character.knownSpells || []}
                    onSpellsChange={(spells) => {
                      onCharacterUpdate({ ...character, knownSpells: spells });
                    }}
                  />
                </CardContent>
              )}
            </Card>
          )}

          {/* Confirm Level Up */}
          <Card className={`${levelUpValidation.valid ? 'bg-green-900/20 border-green-500/30' : 'bg-amber-900/20 border-amber-500/30'}`}>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-3">
                {!levelUpValidation.valid ? (
                  <>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-amber-300">Required Selections Missing</p>
                        <p className="text-xs text-amber-400 mt-1">{levelUpValidation.message}</p>
                      </div>
                    </div>
                    <Button
                      onClick={handleLevelUp}
                      disabled={true}
                      className="bg-slate-600 text-slate-400 cursor-not-allowed px-8"
                      size="lg"
                    >
                      Complete Required Selections
                    </Button>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-green-300 text-center">All required selections complete!</p>
                    <Button
                      onClick={handleLevelUp}
                      className="bg-green-500 hover:bg-green-600 text-white px-8"
                      size="lg"
                    >
                      <ArrowUp className="w-5 h-5 mr-2" />
                      Confirm Level Up to {newLevel}
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
          </motion.div>
        )}
      </div>
  );
}