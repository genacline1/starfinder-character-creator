import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ABILITY_NAMES, ABILITY_ABBREVIATIONS, calculateModifier } from './starfinderData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus, RotateCcw, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Level 1 Character Creation Point Pool
// NOTE: This is ONLY for initial character creation at level 1
// Leveling up uses a different system (ability score increases at specific levels)
const LEVEL_1_POINT_POOL = 10;

export default function AbilityScoreAllocator({ 
  abilityScores, 
  onScoresChange, 
  race, 
  subrace,
  theme,
  selectedClass,
  humanBonus,
  onHumanBonusChange,
  themelessBonus,
  onThemelessBonusChange,
  isConfirmed = false,
  onConfirm,
  onEdit
}) {
  // Initialize baseScores - start with 0 points invested
  const [baseScores, setBaseScores] = useState(() => {
    // Always start with base 10 for all abilities
    return {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10
    };
  });

  // Helper functions to calculate modifiers
  function calculateRacialMod(ability, race, subrace, humanBonus) {
    let mod = 0;
    
    // Handle race-specific choices (like Vesk alternate ability adjustments)
    const raceChoice = race?.raceChoices && race?.raceSpecificChoices?.[race.raceChoices.id];
    if (raceChoice) {
      const selectedOption = race.raceChoices.options.find(opt => opt.id === raceChoice);
      if (selectedOption?.abilityMods?.[ability]) {
        mod += selectedOption.abilityMods[ability];
      }
    } else if (race?.abilityMods) {
      // Standard ability mods
      if (race.abilityMods[ability]) {
        mod += race.abilityMods[ability];
      }
      // Handle "any" ability bonus (like Human)
      if (race.abilityMods.any && humanBonus === ability) {
        mod += 2;
      }
    }
    
    // Add subrace modifiers
    if (subrace?.abilityMods?.[ability]) {
      mod += subrace.abilityMods[ability];
    }
    
    return mod;
  }

  function calculateThemeMod(ability, theme, themelessBonus) {
    if (!theme) return 0;
    if (theme.abilityBoost === ability) return 1;
    if (theme.name === 'Themeless' && themelessBonus === ability) return 1;
    return 0;
  }

  // Calculate racial modifiers
  const getRacialMod = (ability) => {
    return calculateRacialMod(ability, race, subrace, humanBonus);
  };

  // Calculate theme modifier
  const getThemeMod = (ability) => {
    return calculateThemeMod(ability, theme, themelessBonus);
  };

  // Calculate total score
  const getTotalScore = (ability) => {
    return baseScores[ability] + getRacialMod(ability) + getThemeMod(ability);
  };

  // Calculate points spent (simple 1-for-1, each point above 10 costs 1)
  const getPointsSpent = () => {
    return ABILITY_NAMES.reduce((total, ability) => {
      const score = baseScores[ability];
      return total + Math.max(0, score - 10);
    }, 0);
  };

  const pointsRemaining = LEVEL_1_POINT_POOL - getPointsSpent();

  // Update parent when scores change
  useEffect(() => {
    const finalScores = {};
    ABILITY_NAMES.forEach(ability => {
      finalScores[ability] = getTotalScore(ability);
    });
    onScoresChange(finalScores);
  }, [baseScores, race, subrace, theme, humanBonus, themelessBonus]);

  // Reset human bonus if race changes and no longer has "any" ability mod
  useEffect(() => {
    if (humanBonus && !race?.abilityMods?.any) {
      onHumanBonusChange(null);
    }
  }, [race]);

  // When human bonus changes, adjust base scores if they would exceed 18
  useEffect(() => {
    if (humanBonus) {
      const totalScore = getTotalScore(humanBonus);
      if (totalScore > 18) {
        const excessPoints = totalScore - 18;
        setBaseScores(prev => ({
          ...prev,
          [humanBonus]: Math.max(10, prev[humanBonus] - excessPoints)
        }));
      }
    }
  }, [humanBonus]);

  // Same for themeless bonus
  useEffect(() => {
    if (themelessBonus && theme?.name !== 'Themeless') {
      onThemelessBonusChange(null);
    }
  }, [theme]);

  useEffect(() => {
    if (themelessBonus) {
      const totalScore = getTotalScore(themelessBonus);
      if (totalScore > 18) {
        const excessPoints = totalScore - 18;
        setBaseScores(prev => ({
          ...prev,
          [themelessBonus]: Math.max(10, prev[themelessBonus] - excessPoints)
        }));
      }
    }
  }, [themelessBonus]);

  const incrementScore = (ability) => {
    if (isConfirmed) return;
    const currentScore = baseScores[ability];
    const totalScore = getTotalScore(ability);
    // Can't exceed 18 after all modifiers
    if (totalScore >= 18) return;
    // Need at least 1 point remaining
    if (pointsRemaining < 1) return;
    
    setBaseScores(prev => ({ ...prev, [ability]: currentScore + 1 }));
  };

  const decrementScore = (ability) => {
    if (isConfirmed) return;
    const currentScore = baseScores[ability];
    if (currentScore <= 10) return;
    setBaseScores(prev => ({ ...prev, [ability]: currentScore - 1 }));
  };

  const resetScores = () => {
    setBaseScores({
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10
    });
    if (onEdit) onEdit();
  };

  const getAbilityDescription = (ability) => {
    const descriptions = {
      strength: "Physical power and martial prowess. Affects athletics and melee damage.",
      dexterity: "Agility, AC (how hard you are to hit), and skills around being sneaky or agile. Determines hit bonus with ranged weapons.",
      constitution: "Durability. Affects hit points and saves against many effects.",
      intelligence: "Book smarts. Affects skills (particularly ones requiring training) and can be a spellcasting modifier. Determines extra languages and skill ranks per level.",
      wisdom: "Common sense and awareness. Affects perception, survival, and for some characters may affect spellcasting abilities.",
      charisma: "Ability to get what you want through coercion or persuasion. Can be a spellcasting/ability modifier."
    };
    return descriptions[ability];
  };

  return (
    <TooltipProvider>
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-light text-white mb-2">Allocate Ability Scores</h2>
          <p className="text-cyan-300/60 text-sm">Level 1: Spend 10 points to increase your scores (1 point = +1 to any score, max 18)</p>
        </div>

        {/* Points Remaining */}
        <div className="flex justify-center mb-6">
          <div className={`
            px-6 py-3 rounded-full border-2 transition-colors
            ${pointsRemaining > 0 
              ? 'bg-cyan-500/10 border-cyan-400/50 text-cyan-300' 
              : pointsRemaining === 0 
                ? 'bg-green-500/10 border-green-400/50 text-green-300'
                : 'bg-red-500/10 border-red-400/50 text-red-300'
            }
          `}>
            <span className="text-2xl font-bold">{pointsRemaining}</span>
            <span className="text-sm ml-2 opacity-70">points remaining</span>
          </div>
        </div>

        {/* Human Bonus Selection */}
        {race?.abilityMods?.any && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-amber-500/10 border border-amber-400/30 rounded-xl p-4 mb-6"
          >
            <h3 className="text-amber-300 font-medium mb-3 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Human Ability Bonus (+2 to any)
            </h3>
            <div className="flex flex-wrap gap-2">
              {ABILITY_NAMES.map(ability => (
                <Button
                  key={ability}
                  size="sm"
                  variant={humanBonus === ability ? "default" : "outline"}
                  onClick={() => onHumanBonusChange(ability)}
                  className={humanBonus === ability ? 'bg-amber-500 hover:bg-amber-600' : ''}
                >
                  {ABILITY_ABBREVIATIONS[ability]}
                </Button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Themeless Bonus Selection */}
        {theme?.name === 'Themeless' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-purple-500/10 border border-purple-400/30 rounded-xl p-4 mb-6"
          >
            <h3 className="text-purple-300 font-medium mb-3 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Themeless Ability Bonus (+1 to any)
            </h3>
            <div className="flex flex-wrap gap-2">
              {ABILITY_NAMES.map(ability => (
                <Button
                  key={ability}
                  size="sm"
                  variant={themelessBonus === ability ? "default" : "outline"}
                  onClick={() => onThemelessBonusChange(ability)}
                  className={themelessBonus === ability ? 'bg-purple-500 hover:bg-purple-600' : ''}
                >
                  {ABILITY_ABBREVIATIONS[ability]}
                </Button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Ability Score Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ABILITY_NAMES.map(ability => {
            const baseScore = baseScores[ability];
            const racialMod = getRacialMod(ability);
            const themeMod = getThemeMod(ability);
            const totalScore = getTotalScore(ability);
            const modifier = calculateModifier(totalScore);
            // Check if this is the selected key ability (from class choices) or default key ability
            const selectedKeyAbility = selectedClass?.classSpecificChoices?.key_ability;
            const isKeyAbility = selectedKeyAbility 
              ? selectedKeyAbility === ability 
              : (selectedClass?.keyAbility === ability || selectedClass?.secondaryKey === ability);

            return (
              <motion.div
                key={ability}
                whileHover={{ scale: 1.02 }}
                className={`
                  relative rounded-xl p-5 border transition-all
                  ${isKeyAbility 
                    ? 'bg-purple-500/10 border-purple-400/40' 
                    : 'bg-slate-800/40 border-slate-700/50'
                  }
                `}
              >
                {isKeyAbility && (
                  <Badge className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs">
                    Key
                  </Badge>
                )}

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium text-white capitalize">
                      {ability}
                    </h3>
                    <span className="text-xs text-slate-500">{ABILITY_ABBREVIATIONS[ability]}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {getAbilityDescription(ability)}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4 mb-4">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => decrementScore(ability)}
                    disabled={baseScore <= 10 || isConfirmed}
                    className="h-10 w-10 rounded-full"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>

                  <div className="text-center min-w-[80px]">
                    <div className="text-3xl font-bold text-white">{totalScore}</div>
                    <div className={`text-lg ${modifier >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {modifier >= 0 ? '+' : ''}{modifier}
                    </div>
                  </div>

                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => incrementScore(ability)}
                    disabled={totalScore >= 18 || pointsRemaining < 1 || isConfirmed}
                    className="h-10 w-10 rounded-full"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex justify-center gap-2 text-xs">
                  <span className="text-slate-500">Base: {baseScore}</span>
                  {racialMod !== 0 && (
                    <span className={racialMod > 0 ? 'text-green-400' : 'text-red-400'}>
                      Race: {racialMod > 0 ? '+' : ''}{racialMod}
                    </span>
                  )}
                  {themeMod !== 0 && (
                    <span className="text-amber-400">
                      Theme: +{themeMod}
                    </span>
                  )}
                </div>

                <div className="text-center text-xs text-slate-500 mt-2">
                  Points spent: {Math.max(0, baseScore - 10)}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center gap-3 mt-6">
          <Button
            variant="outline"
            onClick={resetScores}
            className="text-slate-400 hover:text-white"
            disabled={isConfirmed}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset Scores
          </Button>

          {isConfirmed ? (
            <Button
              onClick={onEdit}
              variant="outline"
              className="bg-amber-500/20 border-amber-500/50 text-amber-300 hover:bg-amber-500/30"
            >
              Edit Scores
            </Button>
          ) : (
            <Button
              onClick={onConfirm}
              disabled={pointsRemaining !== 0}
              className="bg-green-500 hover:bg-green-600"
            >
              Confirm Scores
            </Button>
          )}
        </div>
        </div>
        </TooltipProvider>
        );
        }