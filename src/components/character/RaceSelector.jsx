import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { RACES, ABILITY_ABBREVIATIONS } from './starfinderData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Zap, MoveRight, BookMarked, ChevronLeft, ChevronDown, ChevronUp } from 'lucide-react';
import RaceFilters from './RaceFilters';

export default function RaceSelector({ selectedRace, onSelect, selectedSubrace, onSubraceSelect }) {
  const [filters, setFilters] = useState({
    sources: [],
    sizes: [],
    positiveAbilities: [],
    negativeAbility: null
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [detailView, setDetailView] = useState(null);
  const [selectedAlternateTraits, setSelectedAlternateTraits] = useState([]);
  const [raceSpecificChoices, setRaceSpecificChoices] = useState({});
  const [confirmedView, setConfirmedView] = useState(false);
  const [expandedTrait, setExpandedTrait] = useState(null);

  // If returning with selectedRace, show confirmed view
  React.useEffect(() => {
    if (selectedRace && !detailView) {
      setDetailView(selectedRace);
      setSelectedAlternateTraits(selectedRace.selectedAlternateTraits || []);
      setRaceSpecificChoices(selectedRace.raceSpecificChoices || {});
      setConfirmedView(true);
    }
  }, []);

  const normalizeSource = (source) => {
    if (!source || source === 'Core') return source;
    if (source.startsWith('AP')) return 'Adventure Paths/Modules';
    if (source === 'Module') return 'Adventure Paths/Modules';
    return source;
  };

  const matchesAbilityFilter = (race) => {
    // If no ability filters, show all
    if (filters.positiveAbilities.length === 0 && !filters.negativeAbility) {
      return true;
    }

    // Check positive abilities
    if (filters.positiveAbilities.length > 0) {
      const hasAllPositives = filters.positiveAbilities.every(ability => {
        // Check if race has this as a positive mod
        if (race.abilityMods[ability] && race.abilityMods[ability] > 0) return true;
        // Check for "any" bonus
        if (race.abilityMods.any) return true;
        // Check subraces if they exist
        if (race?.subraces) {
          return race.subraces.some(subrace => 
            (subrace.abilityMods[ability] && subrace.abilityMods[ability] > 0) ||
            subrace.abilityMods.any
          );
        }
        return false;
      });
      
      if (!hasAllPositives) return false;
    }

    // Check negative ability
    if (filters.negativeAbility) {
      const hasNegative = 
        (race.abilityMods[filters.negativeAbility] && race.abilityMods[filters.negativeAbility] < 0) ||
        (race?.subraces && race.subraces.some(subrace => 
          subrace.abilityMods[filters.negativeAbility] && 
          subrace.abilityMods[filters.negativeAbility] < 0
        ));
      
      if (!hasNegative) return false;
    }

    return true;
  };

  const filteredRaces = useMemo(() => {
    return RACES.filter(race => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = race.name.toLowerCase().includes(query);
        const matchesDescription = race.description?.toLowerCase().includes(query);
        const matchesTraits = race.traits?.some(t => t.toLowerCase().includes(query));
        if (!matchesName && !matchesDescription && !matchesTraits) return false;
      }

      // Source filter
      if (filters.sources.length > 0) {
        const raceSource = normalizeSource(race.source);
        if (!filters.sources.includes(raceSource)) return false;
      }

      // Size filter
      if (filters.sizes.length > 0) {
        if (!filters.sizes.includes(race.size)) return false;
      }

      // Ability score filter
      if (!matchesAbilityFilter(race)) return false;

      return true;
    });
  }, [filters, searchQuery]);

  const clearFilters = () => {
    setFilters({
      sources: [],
      sizes: [],
      positiveAbilities: [],
      negativeAbility: null
    });
  };

  const openDetailView = (race) => {
    setDetailView(race);
    setSelectedAlternateTraits([]);
    setRaceSpecificChoices({});
  };

  const confirmRaceSelection = () => {
    const raceData = {
      ...detailView,
      selectedAlternateTraits,
      raceSpecificChoices
    };
    onSelect(raceData);
    setConfirmedView(true);
  };

  const cancelDetailView = () => {
    setDetailView(null);
    setSelectedAlternateTraits([]);
    setRaceSpecificChoices({});
    setConfirmedView(false);
  };

  const backToRaceGrid = () => {
    setDetailView(null);
    setConfirmedView(false);
    setSelectedAlternateTraits([]);
    setRaceSpecificChoices({});
    onSelect(null);
    onSubraceSelect(null);
  };

  const toggleAlternateTrait = (traitId) => {
    if (selectedAlternateTraits.includes(traitId)) {
      setSelectedAlternateTraits(selectedAlternateTraits.filter(id => id !== traitId));
    } else {
      setSelectedAlternateTraits([...selectedAlternateTraits, traitId]);
    }
  };

  // Confirmed Race Summary View
  if (detailView && confirmedView) {
    const selectedChoice = detailView.raceChoices 
      ? detailView.raceChoices.options.find(opt => opt.id === raceSpecificChoices[detailView.raceChoices.id])
      : null;

    return (
      <div className="space-y-6">
        <Button
          variant="ghost"
          onClick={backToRaceGrid}
          className="text-slate-400 hover:text-white mb-4"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Race Selection
        </Button>

        <div className="text-center mb-6">
          <h2 className="text-4xl font-light text-white mb-2">{detailView.name}</h2>
          {selectedSubrace && (
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50 mb-2">
              {selectedSubrace.name}
            </Badge>
          )}
          <p className="text-cyan-300/60 text-sm">{detailView.source}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">Physical Characteristics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-slate-700/30 rounded">
                <span className="text-slate-400">Size</span>
                <span className="text-white font-medium">{detailView.size}</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-700/30 rounded">
                <span className="text-slate-400">Speed</span>
                <span className="text-white font-medium">{detailView.speed} ft.</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-700/30 rounded">
                <span className="text-slate-400">Hit Points</span>
                <span className="text-white font-medium">{detailView.hp} HP</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">Ability Modifiers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {selectedChoice ? (
                  <>
                    <div className="text-xs text-amber-300 mb-2">Selected: {selectedChoice.name}</div>
                    {Object.entries(selectedChoice.abilityMods).map(([ability, mod]) => (
                      <div key={ability} className="flex justify-between items-center p-2 bg-slate-700/30 rounded">
                        <span className="text-slate-400 uppercase">{ABILITY_ABBREVIATIONS[ability]}</span>
                        <Badge className={mod > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                          {mod > 0 ? '+' : ''}{mod}
                        </Badge>
                      </div>
                    ))}
                  </>
                ) : (
                  Object.entries(detailView.abilityMods).map(([ability, mod]) => (
                    <div key={ability} className="flex justify-between items-center p-2 bg-slate-700/30 rounded">
                      <span className="text-slate-400 uppercase">
                        {ability === 'any' ? 'Any Ability' : ABILITY_ABBREVIATIONS[ability]}
                      </span>
                      <Badge className={mod > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                        {ability === 'any' ? '+2' : `${mod > 0 ? '+' : ''}${mod}`}
                      </Badge>
                    </div>
                  ))
                )}
                {selectedSubrace && Object.entries(selectedSubrace.abilityMods || {}).map(([ability, mod]) => (
                  <div key={`sub-${ability}`} className="flex justify-between items-center p-2 bg-purple-700/20 rounded border border-purple-500/30">
                    <span className="text-slate-400 uppercase">{ABILITY_ABBREVIATIONS[ability]}</span>
                    <Badge className={mod > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                      {mod > 0 ? '+' : ''}{mod} (subrace)
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white">Racial Traits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {detailView.traits.map(trait => {
                const isReplaced = selectedAlternateTraits.some(altId => {
                  const altTrait = detailView.alternateTraits?.find(at => at.id === altId);
                  if (!altTrait) return false;
                  return Array.isArray(altTrait.replaces) 
                    ? altTrait.replaces.includes(trait)
                    : altTrait.replaces === trait;
                });

                if (isReplaced) return null;

                const traitData = detailView.traitDescriptions?.[trait];
                const isExpanded = expandedTrait === trait;

                return (
                  <div key={trait} className="border border-slate-600/50 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedTrait(isExpanded ? null : trait)}
                      className="w-full p-3 bg-slate-700/30 hover:bg-slate-700/50 transition-colors text-left flex items-center justify-between"
                    >
                      <div className="font-medium text-cyan-300">{trait}</div>
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </button>
                    {isExpanded && traitData && (
                      <div className="p-3 bg-slate-800/50 text-sm text-slate-300 border-t border-slate-600/50">
                        {traitData}
                      </div>
                    )}
                  </div>
                );
              })}
              
              {selectedAlternateTraits.length > 0 && detailView.alternateTraits && (
                <>
                  <div className="text-sm text-amber-400 mt-4 mb-2 font-medium">Alternate Traits (Selected)</div>
                  {selectedAlternateTraits.map(traitId => {
                    const trait = detailView.alternateTraits.find(at => at.id === traitId);
                    return trait && (
                      <div key={traitId} className="p-3 bg-amber-900/20 rounded-lg border border-amber-500/30">
                        <div className="font-medium text-amber-300 mb-1">{trait.name}</div>
                        <div className="text-xs text-slate-400">{trait.description}</div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white text-xl">About {detailView.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 leading-relaxed mb-4">{detailView.description}</p>
            {detailView.lore && (
              <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
                {detailView.lore.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
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
          Back to Races
        </Button>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-light text-white mb-2">{detailView.name}</h2>
          <p className="text-cyan-300/60 text-sm">{detailView.source}</p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white">Racial Traits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-slate-400 mb-1">Size</div>
                <div className="text-white">{detailView.size}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">Speed</div>
                <div className="text-white">{detailView.speed} ft.</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">Hit Points</div>
                <div className="text-white">{detailView.hp} HP</div>
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400 mb-2">Ability Modifiers</div>
              <div className="flex flex-wrap gap-2">
                {Object.entries(detailView.abilityMods || {}).map(([ability, mod]) => (
                  <Badge key={ability} className={mod > 0 ? 'bg-green-500/20 text-green-400' : 'border-red-500/50 text-red-400'}>
                    {ability === 'any' ? 'Any +2' : `${ABILITY_ABBREVIATIONS[ability]} ${mod > 0 ? '+' : ''}${mod}`}
                  </Badge>
                ))}
              </div>
            </div>

            {detailView.traits && (
              <div>
                <div className="text-xs text-slate-400 mb-2">Traits</div>
                <div className="space-y-2">
                  {detailView.traits.map(trait => (
                    <div key={trait} className="bg-slate-700/30 rounded p-2">
                      <div className="font-medium text-cyan-300 text-sm mb-1">{trait}</div>
                      {detailView.traitDescriptions?.[trait] && (
                        <div className="text-xs text-slate-400">{detailView.traitDescriptions[trait]}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <div className="text-sm text-slate-300">{detailView.description}</div>
            </div>
          </CardContent>
        </Card>

        {/* Race-Specific Choices (like Vesk alternate ability adjustments) */}
        {detailView.raceChoices && (
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">{detailView.raceChoices.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-400 mb-3">{detailView.raceChoices.description}</p>
              <div className="space-y-3">
                {detailView.raceChoices.options.map((option, idx) => {
                  const isSelected = raceSpecificChoices[detailView.raceChoices.id] === option.id;
                  return (
                    <motion.div
                      key={option.id}
                      whileHover={{ scale: 1.01 }}
                      onClick={() => setRaceSpecificChoices({ ...raceSpecificChoices, [detailView.raceChoices.id]: option.id })}
                      className={`
                        rounded-lg p-3 border transition-all cursor-pointer
                        ${isSelected
                          ? 'bg-amber-500/10 border-amber-400/50'
                          : 'bg-slate-700/30 border-slate-600/50 hover:border-slate-500/50'
                        }
                      `}
                    >
                      <div className="font-medium text-white mb-1">{option.name}</div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {Object.entries(option.abilityMods || {}).map(([ability, mod]) => (
                          <Badge key={ability} className={mod > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                            {ABILITY_ABBREVIATIONS[ability]} {mod > 0 ? '+' : ''}{mod}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-slate-400">{option.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Alternate Racial Traits */}
        {detailView.alternateTraits && detailView.alternateTraits.length > 0 && (
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">Alternate Racial Traits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-slate-400 mb-3">
                You can replace standard racial traits with these alternates
              </p>
              <div className="space-y-2">
                {detailView.alternateTraits.map((trait) => {
                  const isSelected = selectedAlternateTraits.includes(trait.id);
                  return (
                    <motion.div
                      key={trait.id}
                      whileHover={{ scale: 1.01 }}
                      onClick={() => toggleAlternateTrait(trait.id)}
                      className={`
                        rounded-lg p-3 border transition-all cursor-pointer
                        ${isSelected
                          ? 'bg-cyan-500/10 border-cyan-400/50'
                          : 'bg-slate-700/30 border-slate-600/50 hover:border-slate-500/50'
                        }
                      `}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <div className="font-medium text-white">{trait.name}</div>
                        {isSelected && (
                          <Badge className="bg-cyan-500 text-white">Selected</Badge>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mb-2">{trait.description}</p>
                      {trait.replaces && (
                        <p className="text-xs text-red-400">
                          Replaces: {Array.isArray(trait.replaces) ? trait.replaces.join(', ') : trait.replaces}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {detailView?.subraces && (
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">Choose Subrace</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                {detailView.subraces.map(subrace => (
                  <motion.div
                    key={subrace.name}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => onSubraceSelect(subrace)}
                    className={`
                      rounded-lg p-4 border transition-all cursor-pointer
                      ${selectedSubrace?.name === subrace.name
                        ? 'bg-purple-500/10 border-purple-400/50'
                        : 'bg-slate-700/30 border-slate-600/50 hover:border-slate-500/50'
                      }
                    `}
                  >
                    <h4 className="font-medium text-white mb-2">{subrace.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(subrace.abilityMods || {}).map(([ability, mod]) => (
                        <Badge key={ability} className={mod > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                          {ABILITY_ABBREVIATIONS[ability]} {mod > 0 ? '+' : ''}{mod}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={cancelDetailView} className="bg-slate-800 border-slate-700">
            Cancel
          </Button>
          <Button 
            onClick={confirmRaceSelection}
            disabled={
              (detailView?.subraces && !selectedSubrace) ||
              (detailView?.raceChoices && !raceSpecificChoices[detailView.raceChoices.id])
            }
            className="bg-cyan-500 hover:bg-cyan-600"
          >
            Confirm Selection
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-white mb-2">Choose Your Race</h2>
        <p className="text-cyan-300/60 text-sm">Select a species from the Pact Worlds and beyond</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search races..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-slate-800/60 border-slate-600 text-white placeholder:text-slate-500"
        />
      </div>

      <RaceFilters 
        filters={filters}
        onFilterChange={setFilters}
        onClearFilters={clearFilters}
      />

      {filteredRaces.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg">No races match your filters</p>
          <p className="text-slate-500 text-sm mt-2">Try adjusting your filter criteria</p>
        </div>
      ) : (
        <div className="text-sm text-slate-500 mb-2">
          Showing {filteredRaces.length} of {RACES.length} races
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto pr-2">
        {filteredRaces.map((race) => {
          const isSelected = selectedRace?.name === race.name;
          
          return (
            <motion.div
              key={race.name}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openDetailView(race)}
              className={`
                relative cursor-pointer rounded-xl p-5 border transition-all duration-300
                ${isSelected 
                  ? 'bg-cyan-500/10 border-cyan-400/50 shadow-lg shadow-cyan-500/20' 
                  : 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/60'
                }
              `}
            >
              {isSelected && (
                <motion.div
                  layoutId="raceGlow"
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10"
                />
              )}
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className={`text-lg font-medium ${isSelected ? 'text-cyan-300' : 'text-white'}`}>
                      {race.name}
                    </h3>
                    {race.source && (
                      <Badge 
                        variant="outline" 
                        className={`text-xs flex items-center gap-1 ${
                          normalizeSource(race.source) === 'Adventure Paths/Modules'
                            ? 'border-orange-500/50 text-orange-400'
                            : race.source !== 'Core'
                              ? 'border-amber-500/50 text-amber-400'
                              : 'border-slate-500/50 text-slate-400'
                        }`}
                      >
                        {normalizeSource(race.source) === 'Adventure Paths/Modules' && <BookMarked className="w-3 h-3" />}
                        {normalizeSource(race.source)}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Heart className="w-3 h-3 text-red-400" />
                    <span>{race.hp} HP</span>
                  </div>
                </div>
                
                <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                  {race.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {Object.entries(race.abilityMods).map(([ability, mod]) => (
                    <Badge 
                      key={ability}
                      variant="outline"
                      className={`text-xs ${mod > 0 ? 'border-green-500/50 text-green-400' : 'border-red-500/50 text-red-400'}`}
                    >
                      {ability === 'any' ? 'Any +2' : `${ABILITY_ABBREVIATIONS[ability]} ${mod > 0 ? '+' : ''}${mod}`}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1">
                  {race.traits.slice(0, 3).map((trait) => (
                    <span key={trait} className="text-xs text-purple-300/70 bg-purple-500/10 px-2 py-0.5 rounded">
                      {trait}
                    </span>
                  ))}
                  {race.traits.length > 3 && (
                    <span className="text-xs text-slate-500">+{race.traits.length - 3} more</span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Subrace Selection */}
      {selectedRace?.subraces && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-5 bg-slate-800/60 rounded-xl border border-purple-500/30"
        >
          <h3 className="text-lg font-medium text-purple-300 mb-4 flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Choose {selectedRace.name} Subtype
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedRace.subraces.map((subrace) => {
              const isSubSelected = selectedSubrace?.name === subrace.name;
              return (
                <motion.div
                  key={subrace.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSubraceSelect(subrace)}
                  className={`
                    cursor-pointer rounded-lg p-4 border transition-all
                    ${isSubSelected 
                      ? 'bg-purple-500/20 border-purple-400/50' 
                      : 'bg-slate-700/40 border-slate-600/50 hover:border-slate-500/50'
                    }
                  `}
                >
                  <h4 className={`font-medium mb-2 ${isSubSelected ? 'text-purple-300' : 'text-white'}`}>
                    {subrace.name}
                  </h4>
                  <div className="flex gap-2">
                    {Object.entries(subrace.abilityMods).map(([ability, mod]) => (
                      <Badge 
                        key={ability}
                        variant="outline"
                        className={`text-xs ${mod > 0 ? 'border-green-500/50 text-green-400' : 'border-red-500/50 text-red-400'}`}
                      >
                        {ABILITY_ABBREVIATIONS[ability]} {mod > 0 ? '+' : ''}{mod}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}