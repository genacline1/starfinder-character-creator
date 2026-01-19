import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CLASSES, ABILITY_ABBREVIATIONS } from './starfinderData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Zap, BookOpen, Sword, Shield, ChevronLeft, ChevronDown, ChevronUp } from 'lucide-react';

export default function ClassSelector({ selectedClass, onSelect }) {
  const [detailView, setDetailView] = useState(null);
  const [confirmedView, setConfirmedView] = useState(false);
  const [classSpecificChoices, setClassSpecificChoices] = useState({});
  const [expandedAbility, setExpandedAbility] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedLevels, setExpandedLevels] = useState({ 1: true });
  const [expandedAbilities, setExpandedAbilities] = useState({});

  // If returning with selectedClass, show confirmed view
  React.useEffect(() => {
    if (selectedClass && !detailView) {
      setDetailView(selectedClass);
      setClassSpecificChoices(selectedClass.classSpecificChoices || {});
      setConfirmedView(true);
    }
  }, []);

  const openDetailView = (cls) => {
    setDetailView(cls);
    setClassSpecificChoices({});
  };

  const confirmClassSelection = () => {
    // Don't pass the entire class data object - just the ID and choices
    const classSelection = {
      id: detailView.id,
      name: detailView.name,
      classSpecificChoices
    };
    onSelect(classSelection);
    setConfirmedView(true);
  };

  const cancelDetailView = () => {
    setDetailView(null);
    setClassSpecificChoices({});
    setConfirmedView(false);
  };

  const backToClassGrid = () => {
    setDetailView(null);
    setConfirmedView(false);
    setClassSpecificChoices({});
    onSelect(null);
  };

  // Confirmed Class Summary View
  if (detailView && confirmedView) {
    const selectedChoice = detailView.classChoices 
      ? (detailView.classChoices.multipleChoices 
          ? null // Will display multiple choices separately
          : detailView.classChoices.options?.find(opt => opt.id === classSpecificChoices[detailView.classChoices.id]))
      : null;

    return (
      <div className="space-y-6">
        <Button
          variant="ghost"
          onClick={backToClassGrid}
          className="text-slate-400 hover:text-white mb-4"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Class Selection
        </Button>

        <div className="text-center mb-6">
          <h2 className="text-4xl font-light text-white mb-2">{detailView.name}</h2>
          <p className="text-cyan-300/60 text-sm">{detailView.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">Class Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-slate-700/30 rounded">
                <span className="text-slate-400">Key Ability</span>
                <Badge className="bg-purple-500/20 text-purple-300">
                  {detailView.keyAbility?.toUpperCase()}
                  {detailView.secondaryKey && ` or ${detailView.secondaryKey.toUpperCase()}`}
                </Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-700/30 rounded">
                <span className="text-slate-400">Hit Points</span>
                <span className="text-white font-medium">{detailView.hp} HP/level</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-700/30 rounded">
                <span className="text-slate-400">Stamina Points</span>
                <span className="text-white font-medium">{detailView.stamina} + Con/level</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-700/30 rounded">
                <span className="text-slate-400">Skill Ranks</span>
                <span className="text-white font-medium">{detailView.skillRanksPerLevelBase} + Int/level</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">Proficiencies & Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="text-xs text-slate-400 mb-2">Weapon & Armor Proficiencies</div>
                <div className="flex flex-wrap gap-1">
                  {detailView.proficiencies?.map(prof => (
                    <Badge key={prof} variant="outline" className="text-xs border-amber-500/30 text-amber-300">
                      {prof}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-2">Class Skills</div>
                <div className="flex flex-wrap gap-1">
                  {detailView.classSkills?.slice(0, 6).map(skill => (
                    <Badge key={skill} variant="outline" className="text-xs border-cyan-500/30 text-cyan-300">
                      {skill}
                    </Badge>
                  ))}
                  {detailView.classSkills?.length > 6 && (
                    <span className="text-xs text-slate-500">+{detailView.classSkills.length - 6} more</span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {detailView.classChoices && (
          <Card className="bg-amber-900/20 border-amber-500/30">
            <CardHeader>
              <CardTitle className="text-amber-300">{detailView.classChoices.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {detailView.classChoices.multipleChoices ? (
                <div className="space-y-4">
                  {detailView.classChoices.multipleChoices.map((choiceGroup) => {
                    const selected = choiceGroup.options.find(opt => opt.id === classSpecificChoices[choiceGroup.id]);
                    return selected && (
                      <div key={choiceGroup.id}>
                        <div className="text-xs text-amber-400 mb-1">{choiceGroup.title}</div>
                        <div className="font-medium text-white mb-1">{selected.name}</div>
                        <p className="text-sm text-slate-400">{selected.description}</p>
                      </div>
                    );
                  })}
                </div>
              ) : selectedChoice ? (
                <>
                  <div className="font-medium text-white mb-2">{selectedChoice.name}</div>
                  <p className="text-sm text-slate-400">{selectedChoice.description}</p>
                </>
              ) : null}
            </CardContent>
          </Card>
        )}

        {detailView.classAbilities && (
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">Class Features</CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                // Group abilities by level
                const abilitiesByLevel = detailView.classAbilities.reduce((acc, ability) => {
                  const level = ability.level || 1;
                  if (!acc[level]) acc[level] = [];
                  acc[level].push(ability);
                  return acc;
                }, {});

                const sortedLevels = Object.keys(abilitiesByLevel).sort((a, b) => parseInt(a) - parseInt(b));

                return (
                  <div className="space-y-3">
                    {sortedLevels.map(level => {
                      const levelNum = parseInt(level);
                      const isExpanded = expandedLevels[levelNum];
                      const isLevel1 = levelNum === 1;
                      
                      return (
                        <div key={level} className={`border rounded-lg overflow-hidden ${isLevel1 ? 'border-green-500/30 bg-green-900/10' : 'border-slate-600/50'}`}>
                          <button
                            onClick={() => setExpandedLevels(prev => ({ ...prev, [levelNum]: !prev[levelNum] }))}
                            className={`w-full p-3 transition-colors text-left flex items-center justify-between ${
                              isLevel1 ? 'bg-green-900/20 hover:bg-green-900/30' : 'bg-slate-700/30 hover:bg-slate-700/50'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className={`font-semibold ${isLevel1 ? 'text-green-300' : 'text-white'}`}>
                                Level {level}
                              </span>
                              <Badge className={`text-xs ${isLevel1 ? 'bg-green-500/20 text-green-300 border-green-500/30' : 'bg-slate-600/50 text-slate-300'}`}>
                                {abilitiesByLevel[level].length} {abilitiesByLevel[level].length === 1 ? 'feature' : 'features'}
                              </Badge>
                            </div>
                            {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                          </button>
                          {isExpanded && (
                            <div className="p-3 bg-slate-800/50 border-t border-slate-600/50 space-y-2">
                              {abilitiesByLevel[level].map((ability, idx) => {
                                const abilityKey = `${level}-${idx}`;
                                const abilityExpanded = expandedAbilities[abilityKey] || false;
                                const requiresChoice = ability.choice || ability.alternates;
                                const isAlternate = ability.isAlternate;
                                const replaces = ability.replaces;
                                
                                return (
                                  <div key={idx} className={`border rounded-lg overflow-hidden ${
                                    requiresChoice ? 'border-amber-500/40' : isAlternate ? 'border-purple-500/40' : 'border-slate-600/30'
                                  }`}>
                                    <button
                                      onClick={() => setExpandedAbilities(prev => ({ ...prev, [abilityKey]: !prev[abilityKey] }))}
                                      className={`w-full p-2 transition-colors text-left flex items-center justify-between ${
                                        requiresChoice ? 'bg-amber-900/20 hover:bg-amber-900/30' : 
                                        isAlternate ? 'bg-purple-900/20 hover:bg-purple-900/30' :
                                        'bg-slate-700/20 hover:bg-slate-700/40'
                                      }`}
                                    >
                                      <div className="flex items-center gap-2 flex-1">
                                        <div className={`font-medium text-sm ${
                                          requiresChoice ? 'text-amber-300' : 
                                          isAlternate ? 'text-purple-300' :
                                          isLevel1 ? 'text-green-300' : 'text-cyan-300'
                                        }`}>
                                          {ability.name}
                                        </div>
                                        {requiresChoice && (
                                          <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-[10px] px-1 py-0">
                                            CHOICE
                                          </Badge>
                                        )}
                                        {isAlternate && (
                                          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-[10px] px-1 py-0">
                                            ALTERNATE
                                          </Badge>
                                        )}
                                        {!isLevel1 && (
                                          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-[10px] px-1 py-0">
                                            FUTURE
                                          </Badge>
                                        )}
                                      </div>
                                      {abilityExpanded ? <ChevronUp className="w-3 h-3 text-slate-400" /> : <ChevronDown className="w-3 h-3 text-slate-400" />}
                                    </button>
                                    {abilityExpanded && (
                                      <div className="p-2 bg-slate-800/30 text-xs text-slate-300 border-t border-slate-600/30 space-y-1">
                                        <div>{ability.description}</div>
                                        {replaces && (
                                          <div className="text-purple-300 italic">
                                            Replaces: {replaces}
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })()}
            </CardContent>
          </Card>
        )}

        {detailView.lore && (
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white text-xl">About {detailView.name}s</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
                {detailView.lore.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  // Detail View (Selection Mode)
  if (detailView) {
    return (
      <div className="space-y-6">
        <Button
          variant="ghost"
          onClick={cancelDetailView}
          className="text-slate-400 hover:text-white mb-4"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Classes
        </Button>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-light text-white mb-2">{detailView.name}</h2>
          <p className="text-cyan-300/60 text-sm">Detailed class information</p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white">Class Statistics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <div className="text-xs text-slate-400 mb-1">Key Ability</div>
                <Badge className="bg-purple-500/20 text-purple-300">
                  {detailView.keyAbility?.toUpperCase()}
                  {detailView.secondaryKey && ` or ${detailView.secondaryKey.toUpperCase()}`}
                </Badge>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">Hit Points</div>
                <div className="text-white">{detailView.hp} HP/level</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">Stamina Points</div>
                <div className="text-white">{detailView.stamina} + Con/level</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">Skill Ranks</div>
                <div className="text-white">{detailView.skillRanksPerLevelBase} + Int/level</div>
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400 mb-2">Class Skills</div>
              <div className="flex flex-wrap gap-1">
                {detailView.classSkills?.map(skill => (
                  <Badge key={skill} variant="outline" className="text-xs border-cyan-500/30 text-cyan-300">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400 mb-2">Proficiencies</div>
              <div className="flex flex-wrap gap-1">
                {detailView.proficiencies?.map(prof => (
                  <Badge key={prof} variant="outline" className="text-xs border-amber-500/30 text-amber-300">
                    {prof}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {detailView.classAbilities && (
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">Class Features</CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                const abilitiesByLevel = detailView.classAbilities.reduce((acc, ability) => {
                  const level = ability.level || 1;
                  if (!acc[level]) acc[level] = [];
                  acc[level].push(ability);
                  return acc;
                }, {});

                const sortedLevels = Object.keys(abilitiesByLevel).sort((a, b) => parseInt(a) - parseInt(b));

                return (
                  <div className="space-y-3">
                    {sortedLevels.map(level => {
                      const levelNum = parseInt(level);
                      const isExpanded = expandedLevels[levelNum];
                      const isLevel1 = levelNum === 1;
                      
                      return (
                        <div key={level} className={`border rounded-lg overflow-hidden ${isLevel1 ? 'border-green-500/30 bg-green-900/10' : 'border-slate-600/50'}`}>
                          <button
                            onClick={() => setExpandedLevels(prev => ({ ...prev, [levelNum]: !prev[levelNum] }))}
                            className={`w-full p-3 transition-colors text-left flex items-center justify-between ${
                              isLevel1 ? 'bg-green-900/20 hover:bg-green-900/30' : 'bg-slate-700/30 hover:bg-slate-700/50'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className={`font-semibold ${isLevel1 ? 'text-green-300' : 'text-white'}`}>
                                Level {level}
                              </span>
                              <Badge className={`text-xs ${isLevel1 ? 'bg-green-500/20 text-green-300 border-green-500/30' : 'bg-slate-600/50 text-slate-300'}`}>
                                {abilitiesByLevel[level].length} {abilitiesByLevel[level].length === 1 ? 'feature' : 'features'}
                              </Badge>
                            </div>
                            {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                          </button>
                          {isExpanded && (
                            <div className="p-3 bg-slate-800/50 border-t border-slate-600/50 space-y-2">
                              {abilitiesByLevel[level].map((ability, idx) => {
                                const abilityKey = `detail-${level}-${idx}`;
                                const abilityExpanded = expandedAbilities[abilityKey] || false;
                                
                                return (
                                  <div key={idx} className="border rounded-lg overflow-hidden border-slate-600/30">
                                    <button
                                      onClick={() => setExpandedAbilities(prev => ({ ...prev, [abilityKey]: !prev[abilityKey] }))}
                                      className="w-full p-2 transition-colors text-left flex items-center justify-between bg-slate-700/20 hover:bg-slate-700/40"
                                    >
                                      <div className="font-medium text-sm text-cyan-300">
                                        {ability.name}
                                      </div>
                                      {abilityExpanded ? <ChevronUp className="w-3 h-3 text-slate-400" /> : <ChevronDown className="w-3 h-3 text-slate-400" />}
                                    </button>
                                    {abilityExpanded && (
                                      <div className="p-2 bg-slate-800/30 text-xs text-slate-300 border-t border-slate-600/30">
                                        {ability.description}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })()}
            </CardContent>
          </Card>
        )}

        {detailView.classChoices && (
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">{detailView.classChoices.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-400 mb-3">{detailView.classChoices.description}</p>

              {detailView.classChoices.multipleChoices ? (
                <div className="space-y-6">
                  {detailView.classChoices.multipleChoices.map((choiceGroup) => (
                    <div key={choiceGroup.id}>
                      <h4 className="text-white font-medium mb-2">{choiceGroup.title}</h4>
                      <p className="text-xs text-slate-400 mb-3">{choiceGroup.description}</p>
                      <div className="space-y-2">
                        {choiceGroup.options.map((option) => {
                          const isSelected = classSpecificChoices[choiceGroup.id] === option.id;
                          return (
                            <motion.div
                              key={option.id}
                              whileHover={{ scale: 1.01 }}
                              onClick={() => setClassSpecificChoices({ ...classSpecificChoices, [choiceGroup.id]: option.id })}
                              className={`
                                rounded-lg p-3 border transition-all cursor-pointer
                                ${isSelected
                                  ? 'bg-amber-500/10 border-amber-400/50'
                                  : 'bg-slate-700/30 border-slate-600/50 hover:border-slate-500/50'
                                }
                              `}
                            >
                              <div className="font-medium text-white mb-1">{option.name}</div>
                              <p className="text-xs text-slate-400">{option.description}</p>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {detailView.classChoices.options.map((option) => {
                    const isSelected = classSpecificChoices[detailView.classChoices.id] === option.id;
                    return (
                      <motion.div
                        key={option.id}
                        whileHover={{ scale: 1.01 }}
                        onClick={() => setClassSpecificChoices({ ...classSpecificChoices, [detailView.classChoices.id]: option.id })}
                        className={`
                          rounded-lg p-3 border transition-all cursor-pointer
                          ${isSelected
                            ? 'bg-amber-500/10 border-amber-400/50'
                            : 'bg-slate-700/30 border-slate-600/50 hover:border-slate-500/50'
                          }
                        `}
                      >
                        <div className="font-medium text-white mb-1">{option.name}</div>
                        <p className="text-xs text-slate-400">{option.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={cancelDetailView} className="bg-slate-800 border-slate-700">
            Cancel
          </Button>
          <Button 
            onClick={confirmClassSelection}
            disabled={detailView.classChoices && (
              detailView.classChoices.multipleChoices
                ? detailView.classChoices.multipleChoices.some(choice => !classSpecificChoices[choice.id])
                : !classSpecificChoices[detailView.classChoices.id]
            )}
            className="bg-cyan-500 hover:bg-cyan-600"
          >
            Confirm Selection
          </Button>
        </div>
      </div>
    );
  }
  const getClassIcon = (className) => {
    const icons = {
      'Envoy': '🎭',
      'Mechanic': '⚙️',
      'Mystic': '✨',
      'Operative': '🗡️',
      'Solarian': '☀️',
      'Soldier': '🛡️',
      'Technomancer': '💻',
      'Biohacker': '🧬',
      'Vanguard': '🌌',
      'Witchwarper': '🔮',
      'Nanocyte': '🦾',
      'Precog': '👁️'
    };
    return icons[className] || '⭐';
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-white mb-2">Choose Your Class</h2>
        <p className="text-cyan-300/60 text-sm">Your profession and abilities in combat</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search classes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-slate-800/60 border-slate-600 text-white placeholder:text-slate-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {CLASSES.filter(cls => {
          if (!searchQuery) return true;
          const query = searchQuery.toLowerCase();
          return cls.name.toLowerCase().includes(query) || 
                 cls.description.toLowerCase().includes(query) ||
                 cls.keyAbility?.toLowerCase().includes(query);
        }).map((cls) => {
          const isSelected = selectedClass?.name === cls.name;
          
          return (
            <motion.div
              key={cls.name}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => openDetailView(cls)}
              className={`
                relative cursor-pointer rounded-xl p-5 border transition-all duration-300
                ${isSelected 
                  ? 'bg-purple-500/10 border-purple-400/50 shadow-lg shadow-purple-500/20' 
                  : 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/60'
                }
              `}
            >
              {isSelected && (
                <motion.div
                  layoutId="classGlow"
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                />
              )}
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{getClassIcon(cls.name)}</span>
                    <div>
                      <h3 className={`text-lg font-medium ${isSelected ? 'text-purple-300' : 'text-white'}`}>
                        {cls.name}
                      </h3>
                      <span className="text-xs text-slate-500">
                        Key: {ABILITY_ABBREVIATIONS[cls.keyAbility]}
                        {cls.secondaryKey && ` or ${ABILITY_ABBREVIATIONS[cls.secondaryKey]}`}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-slate-400 mb-4">
                  {cls.description}
                </p>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-slate-900/50 rounded-lg p-2 text-center">
                    <div className="flex items-center justify-center gap-1 text-red-400 mb-1">
                      <Heart className="w-3 h-3" />
                      <span className="text-xs">HP</span>
                    </div>
                    <span className="text-white font-medium">{cls.hp}</span>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-2 text-center">
                    <div className="flex items-center justify-center gap-1 text-green-400 mb-1">
                      <Zap className="w-3 h-3" />
                      <span className="text-xs">SP</span>
                    </div>
                    <span className="text-white font-medium">{cls.stamina}</span>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-2 text-center">
                    <div className="flex items-center justify-center gap-1 text-cyan-400 mb-1">
                      <BookOpen className="w-3 h-3" />
                      <span className="text-xs">Skills</span>
                    </div>
                    <span className="text-white font-medium">{cls.skillRanksPerLevelBase}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {cls.proficiencies.map((prof) => (
                    <span key={prof} className="text-xs text-slate-400 bg-slate-700/50 px-2 py-0.5 rounded">
                      {prof}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}