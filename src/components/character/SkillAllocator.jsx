import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SKILLS, ABILITY_ABBREVIATIONS, calculateModifier } from './starfinderData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus, RotateCcw, CheckCircle, Lock } from 'lucide-react';

export default function SkillAllocator({ 
  skills,
  onSkillsChange,
  selectedClass,
  abilityScores,
  theme,
  totalLevel = 1,
  existingSkills = {},
  characterLevel = 1
}) {
  // Initialize from props if available
  const [skillRanks, setSkillRanks] = useState(skills || {});

  // Sync with props when they change
  useEffect(() => {
    setSkillRanks(skills || {});
  }, [JSON.stringify(skills)]);

  // Calculate skill points available for THIS level only
    const intScore =
      abilityScores?.intelligence ??
      abilityScores?.int ??
      10;

    const intMod = calculateModifier(intScore);

    // IMPORTANT: use the standardized class field (no default "4")
    const baseSkillPoints = selectedClass?.skillRanksPerLevelBase ?? null;

    if (selectedClass && baseSkillPoints == null) {
      console.error("Class missing skillRanksPerLevelBase:", selectedClass);
    }

    const skillPointsPerLevel =
      baseSkillPoints == null ? 0 : Math.max(1, baseSkillPoints + intMod);

    const totalSkillPoints = skillPointsPerLevel * totalLevel;

  // Ability score key can differ depending on your model (int vs intelligence)
    const intScore =
      abilityScores?.intelligence ??
      abilityScores?.int ??
      10;
    const intMod = calculateModifier(intScore);
  // IMPORTANT: use the standardized class field (no default "4")
const baseSkillPoints = selectedClass?.skillRanksPerLevelBase ?? null;

if (selectedClass && baseSkillPoints == null) {
  console.error("Class missing skillRanksPerLevelBase:", selectedClass);
}

const skillPointsPerLevel =
  baseSkillPoints == null ? 0 : Math.max(1, baseSkillPoints + intMod);

const totalSkillPoints = skillPointsPerLevel * totalLevel;


  // Class field name can differ too; prefer explicit base value with a safe fallback
  const baseSkillPoints = selectedClass?.skillRanksPerLevelBase ?? null;

  // If no class selected (or class missing the field), don't lie with "4"
  const skillPointsPerLevel =
    baseSkillPoints == null ? 0 : Math.max(1, baseSkillPoints + intMod);
  const totalSkillPoints = skillPointsPerLevel * totalLevel;

  // Calculate points spent
  const pointsSpent = Object.values(skillRanks).reduce((sum, ranks) => sum + ranks, 0);
  const pointsRemaining = totalSkillPoints - pointsSpent;

  // Get class skills
  const classSkills = selectedClass?.classSkills || [];
  const themeSkills = theme?.skills || [];
  const allClassSkills = [...new Set([...classSkills, ...themeSkills])];

  // Update parent when skills change
  useEffect(() => {
    onSkillsChange(skillRanks);
  }, [skillRanks]);

  const isClassSkill = (skillName) => allClassSkills.includes(skillName);

  const incrementRank = (skillName) => {
    if (pointsRemaining <= 0) return;
    const currentRanks = skillRanks[skillName] || 0;
    const existingRanks = existingSkills[skillName] || 0;
    const totalRanks = existingRanks + currentRanks;
    // Max total ranks = character level
    if (totalRanks >= characterLevel) return;
    
    setSkillRanks(prev => ({ ...prev, [skillName]: currentRanks + 1 }));
  };

  const decrementRank = (skillName) => {
    const currentRanks = skillRanks[skillName] || 0;
    if (currentRanks <= 0) return;
    
    setSkillRanks(prev => ({ ...prev, [skillName]: currentRanks - 1 }));
  };

  const resetRanks = () => {
    setSkillRanks({});
  };

  const getTotalBonus = (skill) => {
    const newRanks = skillRanks[skill.name] || 0;
    const existingRanks = existingSkills[skill.name] || 0;
    const totalRanks = existingRanks + newRanks;
    const abilityMod = calculateModifier(abilityScores?.[skill.ability] || 10);
    const classBonus = (totalRanks > 0 && isClassSkill(skill.name)) ? 3 : 0;
    return totalRanks + abilityMod + classBonus;
  };

  const canUseSkill = (skill) => {
    if (!skill.trainedOnly) return true;
    const ranks = skillRanks[skill.name] || 0;
    return ranks > 0 || isClassSkill(skill.name);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <p className="text-cyan-300/60 text-sm">
          {baseSkillPoints == null
            ? "Select a class to determine skill points per level."
            : `${baseSkillPoints} ${intMod >= 0 ? "+" : ""}${intMod} INT = ${skillPointsPerLevel} skill points per level`}
          {baseSkillPoints != null && totalLevel > 1 && ` (Total: ${totalSkillPoints})`}
        </p>
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
          <span className="text-sm ml-2 opacity-70">skill points remaining</span>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {SKILLS.map(skill => {
          const newRanks = skillRanks[skill.name] || 0;
          const existingRanks = existingSkills[skill.name] || 0;
          const totalRanks = existingRanks + newRanks;
          const isClass = isClassSkill(skill.name);
          const totalBonus = getTotalBonus(skill);
          const usable = canUseSkill(skill);

          return (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.01 }}
              className={`
                relative rounded-lg p-4 border transition-all
                ${newRanks > 0 
                  ? 'bg-cyan-500/10 border-cyan-400/40' 
                  : existingRanks > 0
                    ? 'bg-green-500/10 border-green-400/40'
                  : isClass 
                    ? 'bg-slate-800/60 border-slate-600/50' 
                    : 'bg-slate-800/30 border-slate-700/30'
                }
                ${!usable ? 'opacity-50' : ''}
              `}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${totalRanks > 0 ? 'text-cyan-300' : 'text-white'}`}>
                        {skill.name}
                      </span>
                      {isClass && (
                        <CheckCircle className="w-3 h-3 text-green-400" />
                      )}
                      {skill.trainedOnly && !usable && (
                        <Lock className="w-3 h-3 text-red-400" />
                      )}
                    </div>
                    <span className="text-xs text-slate-500">
                      {ABILITY_ABBREVIATIONS[skill.ability]}
                      {skill.trainedOnly && " • Trained only"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right mr-2">
                    <div className={`text-lg font-bold ${totalBonus >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {totalBonus >= 0 ? '+' : ''}{totalBonus}
                    </div>
                    <div className="text-xs text-slate-400">
                      {existingRanks > 0 && newRanks > 0 ? (
                        <span>{existingRanks} + <span className="text-cyan-400">{newRanks}</span> ranks</span>
                      ) : totalRanks > 0 ? (
                        <span>{totalRanks} {totalRanks === 1 ? 'rank' : 'ranks'}</span>
                      ) : (
                        <span>0 ranks</span>
                      )}
                    </div>
                    {totalRanks > 0 && isClass && (
                      <span className="text-xs text-purple-400">+3 class</span>
                    )}
                  </div>

                  <div className="flex items-center gap-1">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => decrementRank(skill.name)}
                      disabled={newRanks <= 0}
                      className="h-10 w-10 rounded-full border-slate-600 hover:bg-red-500/20 hover:border-red-500/50"
                    >
                      <Minus className="w-5 h-5" />
                    </Button>
                    
                    <div className="w-10 text-center">
                      <span className="text-white font-bold text-lg">{newRanks}</span>
                    </div>

                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => incrementRank(skill.name)}
                      disabled={totalRanks >= characterLevel || pointsRemaining <= 0}
                      className="h-10 w-10 rounded-full border-slate-600 hover:bg-green-500/20 hover:border-green-500/50"
                    >
                      <Plus className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center mt-6">
        <Button
          variant="outline"
          onClick={resetRanks}
          className="text-slate-400 hover:text-white"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset Skills
        </Button>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 text-xs text-slate-500 mt-4 flex-wrap">
        <div className="flex items-center gap-1">
          <CheckCircle className="w-3 h-3 text-green-400" />
          <span>Class Skill (+3 when trained)</span>
        </div>
        <div className="flex items-center gap-1">
          <Lock className="w-3 h-3 text-red-400" />
          <span>Trained Only</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-cyan-400">*</span>
          <span>Max ranks per skill = your level</span>
        </div>
      </div>
    </div>
  );
}