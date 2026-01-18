import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SKILLS, ABILITY_NAMES, ABILITY_ABBREVIATIONS, calculateModifier, 
  getRaceById, getClassById, getThemeById,
  getTotalLevel, formatClassLevels, calculateBAB, calculateSavingThrows,
  calculateHP, calculateStamina, calculateResolve
} from './starfinderData';
import { getArmorById, formatWeaponDamage } from './equipmentData';
import { SPELLS } from './spellsData';
import { SKILL_ACTIONS } from './skillActionsData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Heart, Zap, Shield, Swords, Target, 
  Footprints, Eye, Brain, CheckCircle, Sword, Crosshair, AlertCircle, ChevronDown, ChevronUp, Sparkles, Info, HelpCircle
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CONDITIONS, calculateConditionEffects } from './conditionsData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { getFeatById } from './featsData';
import SituationalModifiers from './SituationalModifiers';
import { getSituationalModifiers } from './getSituationalModifiers';
import ClassMechanics from './ClassMechanics';
import EquipmentTracker from './EquipmentTracker';

export default function CharacterSheet({ character, race: propRace, onCharacterUpdate }) {
  const [armorDonned, setArmorDonned] = useState(character.armorDonned !== false);
  const [tempModifiers, setTempModifiers] = useState({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
  });
  const [showSpellAttackDialog, setShowSpellAttackDialog] = useState(false);
  const [selectedSpellForAttack, setSelectedSpellForAttack] = useState(null);
  
  // Calculate max values
  const race = propRace || character.race?.id ? character.race : (character.raceId ? getRaceById(character.raceId) : character.race);
  let classes = character.classes;
  if (!classes || classes.length === 0) {
    if (character.classId) {
      classes = [{ classId: character.classId, level: character.level || 1 }];
    } else if (character.selectedClass) {
      classes = [{ classId: character.selectedClass.id, level: 1 }];
    }
  }
  const maxHP = calculateHP(classes, race);
  const baseMaxStamina = calculateStamina(classes, character.abilityScores);
  const maxResolve = calculateResolve(classes, character.abilityScores);
  
  // Resource tracking state - initialize from character or defaults
  const [currentHP, setCurrentHP] = useState(character.currentHP ?? maxHP);
  const [currentStamina, setCurrentStamina] = useState(character.currentSP ?? baseMaxStamina);
  const [tempHP, setTempHP] = useState(0);
  const [tempStamina, setTempStamina] = useState(0);
  const [tempMaxHP, setTempMaxHP] = useState(0);
  const [tempMaxStamina, setTempMaxStamina] = useState(0);
  const [usedResolve, setUsedResolve] = useState(character.currentRP !== null && character.currentRP !== undefined ? (maxResolve - character.currentRP) : 0);
  const [damageInput, setDamageInput] = useState('');
  const [conditions, setConditions] = useState(character.activeConditions || []);
  const [conditionsExpanded, setConditionsExpanded] = useState(false);
  const [afflictions, setAfflictions] = useState([]);
  const [afflictionsExpanded, setAfflictionsExpanded] = useState(false);
  const [bulkWarningShown, setBulkWarningShown] = useState(false);
  const [resolveInfoOpen, setResolveInfoOpen] = useState(false);
  const [skillInfoOpen, setSkillInfoOpen] = useState(false);
  const [selectedSkillInfo, setSelectedSkillInfo] = useState(null);
  
  // Update parent whenever current resources or conditions change
  React.useEffect(() => {
    if (onCharacterUpdate) {
      onCharacterUpdate({
        ...character,
        currentHP,
        currentSP: currentStamina,
        currentRP: maxResolve - usedResolve,
        activeConditions: conditions
      });
    }
  }, [currentHP, currentStamina, usedResolve, conditions]);
  
  const afflictionTracks = {
    physical: ['Healthy', 'Latent', 'Weakened', 'Impaired', 'Debilitated', 'Bedridden', 'Comatose', 'Dead'],
    mental: ['Healthy', 'Latent', 'Weakened', 'Impaired', 'Befuddled', 'Deranged', 'Comatose', 'Dead'],
    poison: ['Healthy', 'Weakened', 'Impaired', 'Debilitated', 'Unconscious', 'Dead']
  };
  
  const afflictionEffects = {
    'Healthy': 'No effects',
    'Latent': 'No effects yet; if you fail your saving throw, you advance one step',
    'Weakened': '-2 penalty to AC, attack rolls, saving throws, ability checks, and skill checks',
    'Impaired': '-4 penalty to AC, attack rolls, saving throws, ability checks, and skill checks',
    'Debilitated': 'Take penalties as impaired, and your speed is reduced by half',
    'Befuddled': 'Take penalties as impaired, and can no longer cast spells',
    'Bedridden': 'You take penalties as impaired, your speed is reduced to 5 feet, and you cannot take standard or move actions',
    'Deranged': 'As bedridden, except you also cannot take swift actions',
    'Comatose': 'You are unconscious and cannot be woken',
    'Unconscious': 'You are unconscious and cannot be woken',
    'Dead': 'Dead'
  };
  const subrace = character.subrace;
  const theme = character.theme?.id ? character.theme : (character.themeId ? getThemeById(character.themeId) : character.theme);
  
  const selectedClass = classes && classes.length > 0 ? getClassById(classes[0].classId) : null;
  const totalLevel = getTotalLevel(classes);
  const classDisplay = formatClassLevels(classes);
  
  const { name, abilityScores, skills } = character;
  
  // Get armor
  const armor = character.armor?.id ? character.armor : (character.armorId ? getArmorById(character.armorId) : null);

  // Check armor proficiency
  const isArmorProficient = () => {
    if (!armor || !armorDonned) return true;
    if (!selectedClass) return true;
    const proficiencies = selectedClass.proficiencies || [];
    if (armor.type === 'light') return proficiencies.includes('Light Armor');
    if (armor.type === 'heavy') return proficiencies.includes('Heavy Armor');
    return false;
  };
  const armorProficient = isArmorProficient();
  const nonproficientPenalty = !armorProficient ? -4 : 0;

  const bab = calculateBAB(classes);
  const saves = calculateSavingThrows(classes, character.abilityScores);
  
  // Calculate feat bonuses and situational effects
  const calculateFeatEffects = () => {
    const feats = character.feats || [];
    const effects = {
      initiative: 0,
      fortitude: 0,
      reflex: 0,
      will: 0,
      stamina: 0,
      skills: {},
      situational: {
        saves: [],
        ac: [],
        attacks: [],
        skills: []
      }
    };

    feats.forEach(feat => {
      const featData = getFeatById(feat.id);
      if (!featData) return;

      switch (feat.id) {
        case 'improved_initiative':
          effects.initiative += 4;
          break;
        case 'great_fortitude':
          effects.fortitude += 2;
          break;
        case 'iron_will':
          effects.will += 2;
          break;
        case 'lightning_reflexes':
          effects.reflex += 2;
          break;
        case 'toughness':
          effects.stamina += totalLevel;
          break;
        case 'skill_focus':
          if (feat.choice) {
            effects.skills[feat.choice] = (effects.skills[feat.choice] || 0) + 3;
          }
          break;
        case 'skill_synergy':
          if (feat.choice) {
            effects.skills[feat.choice] = (effects.skills[feat.choice] || 0) + 2;
          }
          if (feat.secondChoice) {
            effects.skills[feat.secondChoice] = (effects.skills[feat.secondChoice] || 0) + 2;
          }
          break;
        case 'point_blank_shot':
          effects.situational.attacks.push('Point-Blank Shot: +1 to ranged attack and damage within 30 ft');
          break;
        case 'deadly_aim':
          effects.situational.attacks.push('Deadly Aim: -2 to ranged attacks for +4 damage');
          break;
        case 'mobility':
          effects.situational.ac.push('Mobility: +4 AC against attacks of opportunity from movement');
          break;
        case 'far_shot':
          effects.situational.attacks.push('Far Shot: Reduce range penalties by half');
          break;
        case 'weapon_focus':
          if (feat.choice) {
            effects.situational.attacks.push(`Weapon Focus (${feat.choice}): +1 to attack rolls`);
          }
          break;
        case 'weapon_specialization':
          if (feat.choice) {
            effects.situational.attacks.push(`Weapon Specialization (${feat.choice}): +2 to damage`);
          }
          break;
        case 'cleave':
          effects.situational.attacks.push('Cleave: Additional melee attack if first hits adjacent foe');
          break;
        case 'shot_on_the_run':
          effects.situational.attacks.push('Shot on the Run: Make ranged attack at any point during movement');
          break;
        case 'stand_still':
          effects.situational.attacks.push('Stand Still: Use reaction to stop adjacent creature\'s movement');
          break;
        case 'step_up':
          effects.situational.attacks.push('Step Up: Take 5-foot step as reaction when adjacent foe moves');
          break;
        case 'spell_focus':
          if (feat.choice) {
            effects.situational.attacks.push(`Spell Focus (${feat.choice}): +1 to spell save DCs`);
          }
          break;
        case 'spell_penetration':
          effects.situational.attacks.push('Spell Penetration: +2 to overcome spell resistance');
          break;
        case 'nimble_moves':
          effects.situational.skills.push('Nimble Moves: Ignore 20 ft of difficult terrain');
          break;
      }
    });

    return effects;
  };

  const featEffects = calculateFeatEffects();
  const maxStamina = baseMaxStamina + featEffects.stamina;
  const situationalMods = getSituationalModifiers(character);
  
  // Initialize currentStamina to maxStamina on first render if needed
  React.useEffect(() => {
    if (currentStamina < maxStamina && currentStamina === baseMaxStamina) {
      setCurrentStamina(maxStamina);
    }
  }, [maxStamina]);
  
  // Calculate bulk and apply encumbrance automatically
  const calculateTotalBulk = () => {
    let totalBulk = 0;
    if (armor?.bulk) {
      const armorBulk = armor.bulk;
      totalBulk += armorBulk === 'L' ? 0.1 : (armorBulk === '—' ? 0 : parseFloat(armorBulk));
    }
    (character.weapons || []).forEach(weapon => {
      const weaponBulk = weapon.bulk;
      totalBulk += weaponBulk === 'L' ? 0.1 : (weaponBulk === '—' ? 0 : parseFloat(weaponBulk));
    });
    return totalBulk;
  };
  
  const totalBulk = calculateTotalBulk();
  const strScore = abilityScores?.strength || 10;
  const maxBulk = strScore;
  const encumberedThreshold = strScore / 2;
  const isOverburdened = totalBulk > maxBulk;
  const isEncumbered = totalBulk > encumberedThreshold && !isOverburdened;
  
  // Auto-apply encumbrance conditions
  React.useEffect(() => {
    const hasEncumbered = conditions.includes('Encumbered');
    const hasOverburdened = conditions.includes('Overburdened');
    
    if (isOverburdened && !hasOverburdened) {
      setConditions(prev => [...prev.filter(c => c !== 'Encumbered'), 'Overburdened']);
      if (!bulkWarningShown) {
        setBulkWarningShown(true);
      }
    } else if (isEncumbered && !hasEncumbered && !hasOverburdened) {
      setConditions(prev => [...prev, 'Encumbered']);
      if (!bulkWarningShown) {
        setBulkWarningShown(true);
      }
    } else if (!isOverburdened && !isEncumbered) {
      setConditions(prev => prev.filter(c => c !== 'Encumbered' && c !== 'Overburdened'));
      setBulkWarningShown(false);
    } else if (isEncumbered && hasOverburdened && !isOverburdened) {
      setConditions(prev => [...prev.filter(c => c !== 'Overburdened'), 'Encumbered']);
    }
  }, [totalBulk, strScore]);
  
  // Calculate condition effects
  const conditionEffects = calculateConditionEffects(conditions);
  
  const toggleCondition = (conditionName) => {
    setConditions(prev => 
      prev.includes(conditionName) 
        ? prev.filter(c => c !== conditionName)
        : [...prev, conditionName]
    );
  };
  
  const toggleAffliction = (afflictionName) => {
    setAfflictions(prev => 
      prev.includes(afflictionName) 
        ? prev.filter(a => a !== afflictionName)
        : [...prev, afflictionName]
    );
  };
  
  const applyDamage = () => {
    const damage = parseInt(damageInput) || 0;
    if (damage <= 0) return;
    
    let remaining = damage;
    
    // First apply to temp stamina
    if (tempStamina > 0) {
      const staminaDamage = Math.min(tempStamina, remaining);
      setTempStamina(tempStamina - staminaDamage);
      remaining -= staminaDamage;
    }
    
    // Then to regular stamina
    if (remaining > 0 && currentStamina > 0) {
      const staminaDamage = Math.min(currentStamina, remaining);
      setCurrentStamina(currentStamina - staminaDamage);
      remaining -= staminaDamage;
    }
    
    // Then to temp HP
    if (remaining > 0 && tempHP > 0) {
      const hpDamage = Math.min(tempHP, remaining);
      setTempHP(tempHP - hpDamage);
      remaining -= hpDamage;
    }
    
    // Finally to regular HP
    if (remaining > 0) {
      setCurrentHP(Math.max(0, currentHP - remaining));
    }
    
    setDamageInput('');
  };
  
  const healStamina = (amount) => {
    const healAmount = parseInt(amount) || 0;
    if (healAmount <= 0) return;
    
    const effectiveMaxStamina = maxStamina + tempMaxStamina;
    setCurrentStamina(Math.min(currentStamina + healAmount, effectiveMaxStamina));
  };
  
  const healHP = (amount) => {
    const healAmount = parseInt(amount) || 0;
    if (healAmount <= 0) return;
    
    const effectiveMaxHP = maxHP + tempMaxHP;
    setCurrentHP(Math.min(currentHP + healAmount, effectiveMaxHP));
  };

  const getAbilityMod = (ability) => {
    const base = abilityScores?.[ability] || 10;
    const temp = tempModifiers[ability] || 0;
    return calculateModifier(base + temp);
  };
  
  const isClassSkill = (skillName) => {
    const classSkills = selectedClass?.classSkills || [];
    const themeSkills = theme?.skills || [];
    return [...classSkills, ...themeSkills].includes(skillName);
  };

  // Calculate combat stats with armor and conditions
  const dexMod = getAbilityMod('dexterity') + (conditionEffects.dexterity || 0);
  const maxDexBonus = Math.min(
    armor && armorDonned ? armor.maxDexBonus : 99,
    conditionEffects.maxDexBonus
  );
  const effectiveDexMod = conditionEffects.flatFooted ? 0 : Math.min(dexMod, maxDexBonus);
  const armorEACBonus = armor && armorDonned ? armor.eacBonus : 0;
  const armorKACBonus = armor && armorDonned ? armor.kacBonus : 0;
  const armorCheckPenalty = armor && armorDonned ? armor.armorCheckPenalty : 0;

  const getSkillBonus = (skill) => {
    const ranks = skills?.[skill.name] || 0;
    let abilityMod = getAbilityMod(skill.ability);
    
    // Apply condition effects to ability scores
    if (skill.ability === 'strength') abilityMod += (conditionEffects.strength || 0);
    if (skill.ability === 'dexterity') abilityMod += (conditionEffects.dexterity || 0);
    
    const classBonus = (ranks > 0 && isClassSkill(skill.name)) ? 3 : 0;

    // Apply armor check penalty to certain skills
    const armorPenaltySkills = ['Acrobatics', 'Athletics', 'Sleight of Hand', 'Stealth'];
    const penalty = armorPenaltySkills.includes(skill.name) ? armorCheckPenalty : 0;

    // Apply non-proficient penalty to Str/Dex skills
    const strDexSkills = ['Acrobatics', 'Athletics', 'Sleight of Hand', 'Stealth', 'Piloting'];
    const nonprofPenalty = strDexSkills.includes(skill.name) ? nonproficientPenalty : 0;
    
    // Apply condition penalties
    let conditionPenalty = conditionEffects.skillPenalty || 0;
    if (skill.name === 'Perception') conditionPenalty += (conditionEffects.perception || 0);
    if (skill.ability === 'strength' || skill.ability === 'dexterity') {
      conditionPenalty += (conditionEffects.strengthDexSkills || 0);
    }
    if (skill.ability === 'dexterity') {
      conditionPenalty += (conditionEffects.dexteritySkills || 0);
    }

    // Apply feat bonuses
    const featBonus = featEffects.skills[skill.name] || 0;

    return ranks + abilityMod + classBonus + penalty + nonprofPenalty + conditionPenalty + featBonus;
  };
  
  const eac = 10 + effectiveDexMod + armorEACBonus - (conditionEffects.acPenalty || 0);
  const kac = 10 + effectiveDexMod + armorKACBonus - (conditionEffects.acPenalty || 0);
  const initiative = dexMod + (conditionEffects.initiative || 0) + featEffects.initiative;
  
  const addSpellAsAttack = () => {
    if (!selectedSpellForAttack) return;
    const spell = SPELLS.find(s => s.id === selectedSpellForAttack);
    if (!spell) return;
    
    const spellAttacks = character.spellAttacks || [];
    spellAttacks.push({ spellId: spell.id });
    
    if (onCharacterUpdate) {
      onCharacterUpdate({ ...character, spellAttacks });
    }
    setShowSpellAttackDialog(false);
    setSelectedSpellForAttack(null);
  };
  
  const removeSpellAttack = (index) => {
    const spellAttacks = [...(character.spellAttacks || [])];
    spellAttacks.splice(index, 1);
    if (onCharacterUpdate) {
      onCharacterUpdate({ ...character, spellAttacks });
    }
  };
  
  const knownSpellsList = (character.knownSpells || [])
    .map(id => SPELLS.find(s => s.id === id))
    .filter(Boolean);



  const sections = {
    armor: armor && (
      <div className="bg-slate-800/60 rounded-xl p-5 border border-slate-700/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-cyan-400" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium text-white">{armor.name}</h3>
                {!armorProficient && armorDonned && (
                  <Badge variant="outline" className="text-xs border-amber-500/50 text-amber-400">
                    Not Proficient
                  </Badge>
                )}
              </div>
              <p className="text-xs text-slate-400">
                EAC +{armor.eacBonus} | KAC +{armor.kacBonus} | Max Dex +{armor.maxDexBonus}
                {armor.armorCheckPenalty !== 0 && ` | Check Penalty ${armor.armorCheckPenalty}`}
              </p>
              {!armorProficient && armorDonned && (
                <p className="text-xs text-red-400 mt-1">
                  -4 penalty to attacks and Str/Dex skill checks
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox 
              checked={armorDonned}
              onCheckedChange={setArmorDonned}
              id="armor-donned"
            />
            <label htmlFor="armor-donned" className="text-sm text-slate-400 cursor-pointer">
              Donned
            </label>
          </div>
        </div>
      </div>
    ),
    weapons: (character.weapons?.length > 0 || character.spellAttacks?.length > 0) && (
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg text-white flex items-center gap-2">
              <Swords className="w-5 h-5 text-red-400" />
              Attacks
            </CardTitle>
            {knownSpellsList.length > 0 && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowSpellAttackDialog(true)}
                className="text-purple-400 border-purple-500/50 hover:bg-purple-500/20"
              >
                <Sparkles className="w-3 h-3 mr-1" />
                Add Spell
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {character.weapons?.map((weapon, idx) => {
              const stats = formatWeaponDamage(weapon, weapon.type, character);
              const isMelee = weapon.type === 'melee';
              const rawAttackBonus = parseInt(stats.toHit);
              const attackBonus = rawAttackBonus + nonproficientPenalty;
              const formattedAttack = attackBonus >= 0 ? `+${attackBonus}` : `${attackBonus}`;

              const toHitBreakdown = isMelee 
                ? `BAB ${bab} + Str ${getAbilityMod('strength')}${nonproficientPenalty ? ` + Non-prof ${nonproficientPenalty}` : ''}`
                : `BAB ${bab} + Dex ${getAbilityMod('dexterity')}${nonproficientPenalty ? ` + Non-prof ${nonproficientPenalty}` : ''}`;

              const damageBreakdown = `${weapon.damage}${stats.damageBonus ? ` + Str ${stats.damageBonus}` : ''}`;

              return (
                <div key={idx} className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3">
                  {isMelee ? 
                    <Sword className="w-5 h-5 text-purple-400 flex-shrink-0" /> : 
                    <Crosshair className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  }
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-white mb-1">{weapon.name}</div>
                    <div className="flex items-center gap-3 text-sm">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-baseline gap-1 cursor-help">
                            <span className={`text-2xl font-bold ${nonproficientPenalty ? 'text-red-400' : 'text-green-400'}`}>
                              {formattedAttack}
                            </span>
                            <span className="text-xs text-slate-500">to hit</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-900 border-slate-700">
                          <p className="text-xs">{toHitBreakdown}</p>
                        </TooltipContent>
                      </Tooltip>
                      <Separator orientation="vertical" className="h-6 bg-slate-700" />
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-baseline gap-1 cursor-help">
                            <span className="text-2xl font-bold text-white">
                              {stats.damage}
                            </span>
                            {stats.damageBonus && (
                              <span className="text-lg font-bold text-green-400">{stats.damageBonus}</span>
                            )}
                            <span className="text-xs text-slate-500">damage</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-900 border-slate-700">
                          <p className="text-xs">{damageBreakdown}</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                  {weapon.critical && weapon.critical !== '—' && (
                    <Badge variant="outline" className="text-xs border-orange-500/50 text-orange-400 flex-shrink-0">
                      {weapon.critical}
                    </Badge>
                  )}
                </div>
              );
            })}

            {/* Spell Attacks */}
            {character.spellAttacks?.map((spellAttack, idx) => {
              const spell = SPELLS.find(s => s.id === spellAttack.spellId);
              if (!spell) return null;

              const keyAbility = selectedClass?.name.toLowerCase() === 'mystic' ? 'wisdom' : 'intelligence';
              const abilityMod = getAbilityMod(keyAbility);
              const spellAttackBonus = bab + abilityMod;
              const formattedAttack = spellAttackBonus >= 0 ? `+${spellAttackBonus}` : `${spellAttackBonus}`;
              const toHitBreakdown = `BAB ${bab} + ${keyAbility.charAt(0).toUpperCase() + keyAbility.slice(1)} ${abilityMod}`;

              return (
                <div key={`spell-${idx}`} className="flex items-center gap-3 bg-purple-900/20 rounded-lg p-3 border border-purple-500/30">
                  <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-purple-300 mb-1">{spell.name}</div>
                    <div className="flex items-center gap-3 text-sm flex-wrap">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-baseline gap-1 cursor-help">
                            <span className="text-2xl font-bold text-purple-400">
                              {formattedAttack}
                            </span>
                            <span className="text-xs text-slate-500">to hit</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-900 border-slate-700">
                          <p className="text-xs">{toHitBreakdown}</p>
                        </TooltipContent>
                      </Tooltip>
                      <Separator orientation="vertical" className="h-6 bg-slate-700" />
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-slate-400">Range: {spell.range}</span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-slate-400">Save: {spell.savingThrow}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => removeSpellAttack(idx)}
                    className="h-7 w-7 text-slate-400 hover:text-red-400"
                  >
                    <AlertCircle className="w-4 h-4" />
                  </Button>
                </div>
              );
            })}
          </div>
          <SituationalModifiers 
            modifiers={situationalMods.attacks} 
            title="Attack Modifiers (Situational)"
          />
          {situationalMods.spells.length > 0 && (
            <SituationalModifiers 
              modifiers={situationalMods.spells} 
              title="Spell Modifiers (Situational)"
            />
          )}
        </CardContent>
      </Card>
    ),
    abilities: (
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-white flex items-center gap-2">
            <Target className="w-4 h-4 text-cyan-400" />
            Ability Scores
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2 max-w-xs mx-auto">
            {ABILITY_NAMES.map(ability => {
              const baseScore = abilityScores?.[ability] || 10;
              const tempMod = tempModifiers[ability] || 0;
              const totalScore = baseScore + tempMod;
              const mod = calculateModifier(totalScore);
              const isKey = selectedClass?.keyAbility === ability;
              
              return (
                <div 
                  key={ability}
                  className={`
                    p-2 rounded-lg flex items-center justify-between
                    ${isKey ? 'bg-purple-500/20 border border-purple-500/30' : 'bg-slate-700/30'}
                  `}
                >
                  <div className="text-xs text-slate-400 uppercase font-medium w-12">
                    {ABILITY_ABBREVIATIONS[ability]}
                  </div>
                  <div className="flex items-center gap-2 flex-1 justify-center">
                    <span className="text-sm text-slate-400">{totalScore}</span>
                    <span className="text-slate-600">|</span>
                    <span className={`text-lg font-bold ${mod >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {mod >= 0 ? '+' : ''}{mod}
                    </span>
                  </div>
                  <input
                    type="number"
                    value={tempMod}
                    onChange={(e) => setTempModifiers(prev => ({
                      ...prev,
                      [ability]: parseInt(e.target.value) || 0
                    }))}
                    className="w-16 px-1 py-0.5 text-xs text-center bg-slate-900/50 border border-slate-600 rounded text-white"
                    placeholder="±"
                  />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    ),

    traits: (
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-white flex items-center gap-2">
            <Eye className="w-5 h-5 text-purple-400" />
            Traits & Proficiencies
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {race?.traits && (
            <div>
              <div className="text-xs text-slate-400 uppercase mb-2">Racial Traits</div>
              <div className="flex flex-wrap gap-1">
                {race.traits.map(trait => (
                  <Badge 
                    key={trait}
                    variant="outline"
                    className="text-xs border-cyan-500/30 text-cyan-300"
                  >
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {selectedClass?.proficiencies && (
            <div>
              <div className="text-xs text-slate-400 uppercase mb-2">Proficiencies</div>
              <div className="flex flex-wrap gap-1">
                {selectedClass.proficiencies.map(prof => (
                  <Badge 
                    key={prof}
                    variant="outline"
                    className="text-xs border-amber-500/30 text-amber-300"
                  >
                    {prof}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="text-xs text-slate-400 bg-slate-700/30 rounded-lg p-3">
            <strong className="text-amber-300">{theme?.name}:</strong>{' '}
            {theme?.themeKnowledge}
          </div>
          
          <SituationalModifiers 
            modifiers={situationalMods.ac} 
            title="AC Modifiers (Situational)"
          />
        </CardContent>
      </Card>
    ),
    skills: (
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg text-white">Skills</CardTitle>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="w-4 h-4 text-slate-400 cursor-help" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs bg-slate-900 border-slate-700">
                <div className="text-xs space-y-1">
                  <p className="font-semibold">Skills:</p>
                  <p>Click any skill to see actions and DCs.</p>
                  <p className="pt-1">Skill Bonus = Ranks + Ability Mod + Class Bonus + Misc</p>
                  <p className="pt-1 text-green-400">✓ = Class skill (+3 when trained)</p>
                  <p className="text-cyan-300">Highlighted = Has ranks</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            {SKILLS.map(skill => {
              const ranks = skills?.[skill.name] || 0;
              const bonus = getSkillBonus(skill);
              const isClass = isClassSkill(skill.name);
              const hasRanks = ranks > 0;

              return (
                <Tooltip key={skill.name}>
                  <TooltipTrigger asChild>
                    <div 
                      onClick={() => {
                        setSelectedSkillInfo(skill.name);
                        setSkillInfoOpen(true);
                      }}
                      className={`
                        p-2 rounded-lg flex items-center justify-between cursor-pointer hover:opacity-80 transition-opacity
                        ${hasRanks ? 'bg-cyan-500/10 border border-cyan-500/20' : 'bg-slate-700/20'}
                      `}
                    >
                      <div className="flex items-center gap-1.5">
                        {isClass && <CheckCircle className="w-3 h-3 text-green-400" />}
                        <span className={`text-sm ${hasRanks ? 'text-cyan-300' : 'text-slate-400'}`}>
                          {skill.name}
                        </span>
                        <HelpCircle className="w-3 h-3 text-slate-500" />
                      </div>
                      <span className={`text-sm font-medium ${bonus >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {bonus >= 0 ? '+' : ''}{bonus}
                      </span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-slate-900 border-slate-700">
                    <div className="text-xs space-y-1">
                      <p className="font-semibold">{skill.name} Calculation:</p>
                      <p>{ranks} ranks</p>
                      {(() => {
                        let abilityMod = getAbilityMod(skill.ability);
                        if (skill.ability === 'strength') abilityMod += (conditionEffects.strength || 0);
                        if (skill.ability === 'dexterity') abilityMod += (conditionEffects.dexterity || 0);
                        return <p>+ {abilityMod} ({skill.ability.substring(0, 3).toUpperCase()})</p>;
                      })()}
                      {ranks > 0 && isClass && <p>+ 3 (class skill)</p>}
                      {(() => {
                        const armorPenaltySkills = ['Acrobatics', 'Athletics', 'Sleight of Hand', 'Stealth'];
                        const penalty = armorPenaltySkills.includes(skill.name) ? armorCheckPenalty : 0;
                        if (penalty !== 0) return <p>{penalty} (armor check penalty)</p>;
                      })()}
                      {nonproficientPenalty !== 0 && ['Acrobatics', 'Athletics', 'Sleight of Hand', 'Stealth', 'Piloting'].includes(skill.name) && (
                        <p>{nonproficientPenalty} (non-proficient)</p>
                      )}
                      {featEffects.skills[skill.name] && <p>+ {featEffects.skills[skill.name]} (feats)</p>}
                      <p className="pt-1 border-t border-slate-600">= {bonus >= 0 ? '+' : ''}{bonus}</p>
                      <p className="pt-2 text-slate-400 italic">Click to see actions & DCs</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
          
          {/* Per-skill situational modifiers */}
          {SKILLS.map(skill => {
            const skillMods = situationalMods.skills[skill.name];
            if (!skillMods || skillMods.length === 0) return null;
            
            return (
              <div key={skill.name} className="mt-3 pt-3 border-t border-slate-700">
                <div className="text-xs text-cyan-300 font-semibold mb-2">{skill.name}</div>
                <SituationalModifiers 
                  modifiers={skillMods} 
                  title=""
                  defaultOpen={true}
                />
              </div>
            );
          })}
        </CardContent>
      </Card>
    )
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-white mb-2">Character Sheet</h2>
        <p className="text-cyan-300/60 text-sm">Your completed Starfinder character</p>
      </div>

      {/* Character Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-800/30 border-b border-slate-700/50 pb-4 mb-6"
      >
        <h1 className="text-xl font-medium text-white mb-2">{name || 'Unnamed Character'}</h1>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50 text-xs">
            {race?.name}{subrace ? ` (${subrace.name})` : ''}
          </Badge>
          <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/50 text-xs">
            {theme?.name}
          </Badge>
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50 text-xs">
            {classDisplay || 'No Class'}
          </Badge>
        </div>
      </motion.div>
      
      {/* Combat Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
      >
        {/* AC Section */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <CardTitle className="text-base text-white">Armor Class</CardTitle>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="w-4 h-4 text-slate-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs bg-slate-900 border-slate-700">
                  <p className="text-xs font-semibold mb-2">Armor Class (AC)</p>
                  <p className="text-xs text-slate-300 mb-2">Your defense against attacks. Higher is better.</p>
                  <div className="space-y-1 text-xs">
                    <p><strong>EAC:</strong> Energy Armor Class - defense vs lasers, plasma, etc.</p>
                    <p><strong>KAC:</strong> Kinetic Armor Class - defense vs physical attacks.</p>
                    <p><strong>vs CM:</strong> Combat Maneuver defense = KAC + 8</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="text-center cursor-help">
                    <div className="text-xs text-slate-400 mb-1">EAC</div>
                    <div className="text-2xl font-bold text-white">{eac}</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-slate-900 border-slate-700">
                  <div className="text-xs space-y-1">
                    <p className="font-semibold text-cyan-300">Energy Armor Class</p>
                    <p className="text-slate-400 text-[10px] mb-1">vs energy attacks (lasers, plasma, etc.)</p>
                    <div className="space-y-0.5">
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400">Base</span>
                        <span className="text-white">10</span>
                      </div>
                      {armorDonned && armor && (
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-400">Armor</span>
                          <span className="text-white">+{armorEACBonus}</span>
                        </div>
                      )}
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400">Dexterity{conditionEffects.flatFooted ? ' (flat-footed)' : ''}</span>
                        <span className="text-white">+{effectiveDexMod}</span>
                      </div>
                      {conditionEffects.acPenalty > 0 && (
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-400">Conditions</span>
                          <span className="text-red-400">-{conditionEffects.acPenalty}</span>
                        </div>
                      )}
                    </div>
                    <div className="pt-1 border-t border-slate-600 flex justify-between">
                      <span className="font-semibold text-slate-300">Total EAC</span>
                      <span className="font-bold text-cyan-400">{eac}</span>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="text-center cursor-help">
                    <div className="text-xs text-slate-400 mb-1">KAC</div>
                    <div className="text-2xl font-bold text-white">{kac}</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-slate-900 border-slate-700">
                  <div className="text-xs space-y-1">
                    <p className="font-semibold text-cyan-300">Kinetic Armor Class</p>
                    <p className="text-slate-400 text-[10px] mb-1">vs physical attacks (bullets, blades, etc.)</p>
                    <div className="space-y-0.5">
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400">Base</span>
                        <span className="text-white">10</span>
                      </div>
                      {armorDonned && armor && (
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-400">Armor</span>
                          <span className="text-white">+{armorKACBonus}</span>
                        </div>
                      )}
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400">Dexterity{conditionEffects.flatFooted ? ' (flat-footed)' : ''}</span>
                        <span className="text-white">+{effectiveDexMod}</span>
                      </div>
                      {conditionEffects.acPenalty > 0 && (
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-400">Conditions</span>
                          <span className="text-red-400">-{conditionEffects.acPenalty}</span>
                        </div>
                      )}
                    </div>
                    <div className="pt-1 border-t border-slate-600 flex justify-between">
                      <span className="font-semibold text-slate-300">Total KAC</span>
                      <span className="font-bold text-cyan-400">{kac}</span>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="text-center cursor-help">
                    <div className="text-xs text-slate-400 mb-1">vs CM</div>
                    <div className="text-2xl font-bold text-white">{kac + 8}</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-slate-900 border-slate-700">
                  <div className="text-xs space-y-1">
                    <p className="font-semibold text-cyan-300">vs Combat Maneuvers</p>
                    <p className="text-slate-400 text-[10px] mb-1">Defense vs grapple, trip, etc.</p>
                    <div className="space-y-0.5">
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400">KAC</span>
                        <span className="text-white">{kac}</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400">CM Bonus</span>
                        <span className="text-white">+8</span>
                      </div>
                    </div>
                    <div className="pt-1 border-t border-slate-600 flex justify-between">
                      <span className="font-semibold text-slate-300">Total vs CM</span>
                      <span className="font-bold text-cyan-400">{kac + 8}</span>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </CardContent>
        </Card>

        {/* Saves Section */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <CardTitle className="text-base text-white">Saving Throws</CardTitle>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="w-4 h-4 text-slate-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs bg-slate-900 border-slate-700">
                  <p className="text-xs font-semibold mb-2">Saving Throws</p>
                  <p className="text-xs text-slate-300 mb-2">Roll d20 + save bonus to resist harmful effects.</p>
                  <div className="space-y-1 text-xs">
                    <p><strong>Fortitude:</strong> Resist poison, disease, physical effects (CON)</p>
                    <p><strong>Reflex:</strong> Dodge area attacks, avoid traps (DEX)</p>
                    <p><strong>Will:</strong> Resist mental effects, illusions (WIS)</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-700/30 cursor-help">
                    <span className="text-sm text-slate-400">Fortitude</span>
                    <span className={`font-bold ${(saves.fortitude + featEffects.fortitude - (conditionEffects.savePenalty || 0)) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {(saves.fortitude + featEffects.fortitude - (conditionEffects.savePenalty || 0)) >= 0 ? '+' : ''}{saves.fortitude + featEffects.fortitude - (conditionEffects.savePenalty || 0)}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-slate-900 border-slate-700">
                  <div className="text-xs space-y-1">
                    <p className="font-semibold text-green-300">Fortitude Save</p>
                    <p className="text-slate-400 text-[10px] mb-1">vs poison, disease, physical effects</p>
                    <div className="space-y-0.5">
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400">Base + CON</span>
                        <span className="text-white">{saves.fortitude >= 0 ? '+' : ''}{saves.fortitude}</span>
                      </div>
                      {featEffects.fortitude > 0 && (
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-400">Feats</span>
                          <span className="text-purple-400">+{featEffects.fortitude}</span>
                        </div>
                      )}
                      {conditionEffects.savePenalty > 0 && (
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-400">Conditions</span>
                          <span className="text-red-400">-{conditionEffects.savePenalty}</span>
                        </div>
                      )}
                    </div>
                    <div className="pt-1 border-t border-slate-600 flex justify-between">
                      <span className="font-semibold text-slate-300">Total Save</span>
                      <span className="font-bold text-green-400">{saves.fortitude + featEffects.fortitude - (conditionEffects.savePenalty || 0) >= 0 ? '+' : ''}{saves.fortitude + featEffects.fortitude - (conditionEffects.savePenalty || 0)}</span>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-700/30 cursor-help">
                    <span className="text-sm text-slate-400">Reflex</span>
                    <span className={`font-bold ${(saves.reflex + featEffects.reflex - (conditionEffects.savePenalty || 0) - (conditionEffects.reflexPenalty || 0)) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {(saves.reflex + featEffects.reflex - (conditionEffects.savePenalty || 0) - (conditionEffects.reflexPenalty || 0)) >= 0 ? '+' : ''}{saves.reflex + featEffects.reflex - (conditionEffects.savePenalty || 0) - (conditionEffects.reflexPenalty || 0)}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-slate-900 border-slate-700">
                  <div className="text-xs space-y-1">
                    <p className="font-semibold text-green-300">Reflex Save</p>
                    <p className="text-slate-400 text-[10px] mb-1">vs area attacks, avoid traps</p>
                    <div className="space-y-0.5">
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400">Base + DEX</span>
                        <span className="text-white">{saves.reflex >= 0 ? '+' : ''}{saves.reflex}</span>
                      </div>
                      {featEffects.reflex > 0 && (
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-400">Feats</span>
                          <span className="text-purple-400">+{featEffects.reflex}</span>
                        </div>
                      )}
                      {conditionEffects.savePenalty > 0 && (
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-400">Conditions</span>
                          <span className="text-red-400">-{conditionEffects.savePenalty}</span>
                        </div>
                      )}
                      {conditionEffects.reflexPenalty > 0 && (
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-400">Reflex Penalty</span>
                          <span className="text-red-400">-{conditionEffects.reflexPenalty}</span>
                        </div>
                      )}
                    </div>
                    <div className="pt-1 border-t border-slate-600 flex justify-between">
                      <span className="font-semibold text-slate-300">Total Save</span>
                      <span className="font-bold text-green-400">{saves.reflex + featEffects.reflex - (conditionEffects.savePenalty || 0) - (conditionEffects.reflexPenalty || 0) >= 0 ? '+' : ''}{saves.reflex + featEffects.reflex - (conditionEffects.savePenalty || 0) - (conditionEffects.reflexPenalty || 0)}</span>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-700/30 cursor-help">
                    <span className="text-sm text-slate-400">Will</span>
                    <span className={`font-bold ${(saves.will + featEffects.will - (conditionEffects.savePenalty || 0)) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {(saves.will + featEffects.will - (conditionEffects.savePenalty || 0)) >= 0 ? '+' : ''}{saves.will + featEffects.will - (conditionEffects.savePenalty || 0)}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-slate-900 border-slate-700">
                  <div className="text-xs space-y-1">
                    <p className="font-semibold text-green-300">Will Save</p>
                    <p className="text-slate-400 text-[10px] mb-1">vs mental effects, illusions</p>
                    <div className="space-y-0.5">
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400">Base + WIS</span>
                        <span className="text-white">{saves.will >= 0 ? '+' : ''}{saves.will}</span>
                      </div>
                      {featEffects.will > 0 && (
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-400">Feats</span>
                          <span className="text-purple-400">+{featEffects.will}</span>
                        </div>
                      )}
                      {conditionEffects.savePenalty > 0 && (
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-400">Conditions</span>
                          <span className="text-red-400">-{conditionEffects.savePenalty}</span>
                        </div>
                      )}
                    </div>
                    <div className="pt-1 border-t border-slate-600 flex justify-between">
                      <span className="font-semibold text-slate-300">Total Save</span>
                      <span className="font-bold text-green-400">{saves.will + featEffects.will - (conditionEffects.savePenalty || 0) >= 0 ? '+' : ''}{saves.will + featEffects.will - (conditionEffects.savePenalty || 0)}</span>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
            <SituationalModifiers 
              modifiers={[
                ...situationalMods.saves.fortitude,
                ...situationalMods.saves.reflex,
                ...situationalMods.saves.will
              ]} 
              title="Save Modifiers (Situational)"
            />
          </CardContent>
        </Card>

        {/* Initiative & BAB */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-white">Combat Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-between cursor-help">
                    <span className="text-sm text-slate-400">Initiative</span>
                    <span className={`text-xl font-bold ${initiative >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {initiative >= 0 ? '+' : ''}{initiative}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-slate-900 border-slate-700">
                  <div className="text-xs space-y-1">
                    <p className="font-semibold text-amber-300">Initiative</p>
                    <p className="text-slate-400 text-[10px] mb-1">Roll d20 + modifier for turn order</p>
                    <div className="space-y-0.5">
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400">Dexterity</span>
                        <span className="text-white">{dexMod >= 0 ? '+' : ''}{dexMod}</span>
                      </div>
                      {conditionEffects.initiative && (
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-400">Conditions</span>
                          <span className="text-white">{conditionEffects.initiative >= 0 ? '+' : ''}{conditionEffects.initiative}</span>
                        </div>
                      )}
                      {featEffects.initiative > 0 && (
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-400">Feats</span>
                          <span className="text-purple-400">+{featEffects.initiative}</span>
                        </div>
                      )}
                    </div>
                    <div className="pt-1 border-t border-slate-600 flex justify-between">
                      <span className="font-semibold text-slate-300">Total Modifier</span>
                      <span className="font-bold text-amber-400">{initiative >= 0 ? '+' : ''}{initiative}</span>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
              <Separator className="bg-slate-700" />
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-between cursor-help">
                    <span className="text-sm text-slate-400">Base Attack Bonus</span>
                    <span className="text-xl font-bold text-white">+{bab}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-slate-900 border-slate-700">
                  <div className="text-xs space-y-1">
                    <p className="font-semibold text-red-300">Base Attack Bonus</p>
                    <p className="text-slate-400 text-[10px] mb-1">Added to all attack rolls</p>
                    <div className="space-y-0.5">
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400">From Classes</span>
                        <span className="text-white">+{bab}</span>
                      </div>
                    </div>
                    <div className="pt-1 border-t border-slate-600 flex justify-between">
                      <span className="font-semibold text-slate-300">Total BAB</span>
                      <span className="font-bold text-red-400">+{bab}</span>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
              <Separator className="bg-slate-700" />
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-between cursor-help">
                    <span className="text-sm text-slate-400">Speed</span>
                    <span className="text-xl font-bold text-white">
                      {(() => {
                        const baseSpeed = race?.speed || 30;
                        const armorSpeedPenalty = armor && armorDonned ? (armor.speedAdjustment || 0) : 0;

                        if (conditionEffects.speedOverride !== null) {
                          return `${conditionEffects.speedOverride} ft.`;
                        }

                        const totalSpeed = Math.max(5, baseSpeed + armorSpeedPenalty + (conditionEffects.speed || 0));
                        return `${totalSpeed} ft.`;
                      })()}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-slate-900 border-slate-700">
                  <div className="text-xs space-y-1">
                    <p className="font-semibold">Speed:</p>
                    <p>Movement distance per move action.</p>
                    {(() => {
                      const baseSpeed = race?.speed || 30;
                      const armorSpeedPenalty = armor && armorDonned ? (armor.speedAdjustment || 0) : 0;
                      return (
                        <>
                          <p className="pt-1">{baseSpeed} ft (base)</p>
                          {armorSpeedPenalty !== 0 && <p>{armorSpeedPenalty} ft (armor)</p>}
                          {conditionEffects.speed && <p>{conditionEffects.speed > 0 ? '+' : ''}{conditionEffects.speed} ft (conditions)</p>}
                          {conditionEffects.speedOverride !== null && <p className="text-red-400">Speed overridden by condition</p>}
                        </>
                      );
                    })()}
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Conditions & Afflictions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader className="pb-3 cursor-pointer" onClick={() => setConditionsExpanded(!conditionsExpanded)}>
            <CardTitle className="text-base text-white flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              Conditions
              {conditions.length > 0 && (
                <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/50">
                  {conditions.length}
                </Badge>
              )}
              {conditionsExpanded ? 
                <ChevronUp className="w-4 h-4 ml-auto text-slate-400" /> : 
                <ChevronDown className="w-4 h-4 ml-auto text-slate-400" />
              }
            </CardTitle>
          </CardHeader>
          {conditionsExpanded && (
            <CardContent>
              <TooltipProvider>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {CONDITIONS.map(condition => (
                    <Tooltip key={condition.name}>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => toggleCondition(condition.name)}
                          className={`
                            px-2 py-1.5 rounded text-xs font-medium transition-all
                            ${conditions.includes(condition.name)
                              ? 'bg-amber-500/20 border-2 border-amber-400/50 text-amber-300'
                              : 'bg-slate-700/30 border border-slate-600/50 text-slate-400 hover:border-slate-500 hover:text-slate-300'
                            }
                          `}
                        >
                          {condition.name}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs bg-slate-900 border-slate-700">
                        <p className="text-sm text-white font-medium mb-1">{condition.name}</p>
                        <p className="text-xs text-slate-300">{condition.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
            </CardContent>
          )}
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader className="pb-3 cursor-pointer" onClick={() => setAfflictionsExpanded(!afflictionsExpanded)}>
            <CardTitle className="text-base text-white flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400" />
              Disease/Poison
              {afflictions.length > 0 && (
                <Badge className="bg-red-500/20 text-red-300 border-red-500/50">
                  {afflictions.length}
                </Badge>
              )}
              {afflictionsExpanded ? 
                <ChevronUp className="w-4 h-4 ml-auto text-slate-400" /> : 
                <ChevronDown className="w-4 h-4 ml-auto text-slate-400" />
              }
            </CardTitle>
          </CardHeader>
          {afflictionsExpanded && (
            <CardContent>
              <TooltipProvider>
                <div className="space-y-3">
                {afflictions.map((affliction, idx) => {
                  const track = afflictionTracks[affliction.track || 'physical'];
                  return (
                    <div key={idx} className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <input
                          type="text"
                          value={affliction.name || ''}
                          onChange={(e) => {
                            const newAfflictions = [...afflictions];
                            newAfflictions[idx] = { ...affliction, name: e.target.value };
                            setAfflictions(newAfflictions);
                          }}
                          className="flex-1 bg-slate-900/50 border border-slate-600 rounded px-2 py-1 text-sm text-white"
                          placeholder="Disease/Poison name"
                        />
                        <button
                          onClick={() => setAfflictions(afflictions.filter((_, i) => i !== idx))}
                          className="text-red-400 hover:text-red-300"
                        >
                          ✕
                        </button>
                      </div>
                      <div className="mb-2">
                        <Select 
                          value={affliction.track || 'physical'} 
                          onValueChange={(value) => {
                            const newAfflictions = [...afflictions];
                            newAfflictions[idx] = { ...affliction, track: value, step: 0 };
                            setAfflictions(newAfflictions);
                          }}
                        >
                          <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white text-xs h-8">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="physical">Physical Disease</SelectItem>
                            <SelectItem value="mental">Mental Disease</SelectItem>
                            <SelectItem value="poison">Poison</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {track.map((step, stepIdx) => (
                          <Tooltip key={stepIdx}>
                            <TooltipTrigger asChild>
                              <button
                                onClick={() => {
                                  const newAfflictions = [...afflictions];
                                  newAfflictions[idx] = { ...affliction, step: stepIdx };
                                  setAfflictions(newAfflictions);
                                }}
                                className={`
                                  px-2 py-1 rounded text-xs transition-all
                                  ${(affliction.step || 0) === stepIdx
                                    ? 'bg-red-500/30 border-2 border-red-400 text-red-200 font-medium'
                                    : 'bg-slate-700/50 border border-slate-600 text-slate-400 hover:border-slate-500'
                                  }
                                `}
                              >
                                {step}
                              </button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-slate-900 border-slate-700">
                              <p className="text-xs text-slate-300">{afflictionEffects[step]}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    </div>
                  );
                })}
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setAfflictions([...afflictions, { name: '', track: 'physical', step: 0 }])}
                  className="w-full text-red-400 border-red-500/50 hover:bg-red-500/20"
                >
                  + Add Disease/Poison
                </Button>
              </div>
              </TooltipProvider>
            </CardContent>
          )}
        </Card>
      </motion.div>

      {/* Class Mechanics */}
      <ClassMechanics character={character} classes={classes} onUpdate={onCharacterUpdate} />

      {/* Resource Management */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {/* Stamina Points */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-green-400" />
              <CardTitle className="text-base text-white">Stamina Points</CardTitle>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="w-4 h-4 text-slate-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs bg-slate-900 border-slate-700">
                  <div className="text-xs space-y-1">
                    <p className="font-semibold text-green-300">Stamina Points</p>
                    <p className="text-slate-400 text-[10px] mb-1">Minor injuries and fatigue</p>
                    <div className="space-y-0.5">
                      {classes?.map((cls, idx) => {
                        const classData = getClassById(cls.classId);
                        const conMod = calculateModifier(abilityScores?.constitution || 10);
                        const classSP = cls.level * (classData?.stamina || 0) + cls.level * conMod;
                        return (
                          <div key={idx} className="flex justify-between gap-4">
                            <span className="text-slate-400">{classData?.name} {cls.level}</span>
                            <span className="text-white">{classSP}</span>
                          </div>
                        );
                      })}
                      {featEffects.stamina > 0 && (
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-400">Feats</span>
                          <span className="text-purple-400">+{featEffects.stamina}</span>
                        </div>
                      )}
                    </div>
                    <div className="pt-1 border-t border-slate-600 flex justify-between">
                      <span className="font-semibold text-slate-300">Max SP</span>
                      <span className="font-bold text-green-400">{maxStamina}</span>
                    </div>
                    <p className="pt-2 text-amber-300 text-[10px]">10 min rest + 1 RP = recover all SP</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-green-400">{currentStamina + tempStamina}</span>
                <span className="text-2xl text-slate-500">/ {maxStamina + tempMaxStamina}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <label className="text-xs text-slate-400 w-20">Temp</label>
                <input
                  type="number"
                  value={tempStamina}
                  onChange={(e) => setTempStamina(Math.max(0, parseInt(e.target.value) || 0))}
                  className="flex-1 px-2 py-1 text-xs bg-slate-900/50 border border-slate-600 rounded text-white"
                  placeholder="0"
                />
              </div>
              <div className="flex gap-2 items-center">
                <label className="text-xs text-slate-400 w-20">Max Increase</label>
                <input
                  type="number"
                  value={tempMaxStamina}
                  onChange={(e) => setTempMaxStamina(Math.max(0, parseInt(e.target.value) || 0))}
                  className="flex-1 px-2 py-1 text-xs bg-slate-900/50 border border-slate-600 rounded text-white"
                  placeholder="0"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hit Points */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-400" />
              <CardTitle className="text-base text-white">Hit Points</CardTitle>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="w-4 h-4 text-slate-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs bg-slate-900 border-slate-700">
                  <div className="text-xs space-y-1">
                    <p className="font-semibold text-red-300">Hit Points</p>
                    <p className="text-slate-400 text-[10px] mb-1">Actual health - 0 HP = dying</p>
                    <div className="space-y-0.5">
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400">Race</span>
                        <span className="text-white">{race?.hp || 0}</span>
                      </div>
                      {classes?.map((cls, idx) => {
                        const classData = getClassById(cls.classId);
                        const classHP = cls.level * (classData?.hp || 0);
                        return (
                          <div key={idx} className="flex justify-between gap-4">
                            <span className="text-slate-400">{classData?.name} {cls.level}</span>
                            <span className="text-white">{classHP}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="pt-1 border-t border-slate-600 flex justify-between">
                      <span className="font-semibold text-slate-300">Max HP</span>
                      <span className="font-bold text-red-400">{maxHP}</span>
                    </div>
                    <p className="pt-2 text-amber-300 text-[10px]">Requires spells, items, or long rest to heal</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-red-400">{currentHP + tempHP}</span>
                <span className="text-2xl text-slate-500">/ {maxHP + tempMaxHP}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <label className="text-xs text-slate-400 w-20">Temp</label>
                <input
                  type="number"
                  value={tempHP}
                  onChange={(e) => setTempHP(Math.max(0, parseInt(e.target.value) || 0))}
                  className="flex-1 px-2 py-1 text-xs bg-slate-900/50 border border-slate-600 rounded text-white"
                  placeholder="0"
                />
              </div>
              <div className="flex gap-2 items-center">
                <label className="text-xs text-slate-400 w-20">Max Increase</label>
                <input
                  type="number"
                  value={tempMaxHP}
                  onChange={(e) => setTempMaxHP(Math.max(0, parseInt(e.target.value) || 0))}
                  className="flex-1 px-2 py-1 text-xs bg-slate-900/50 border border-slate-600 rounded text-white"
                  placeholder="0"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resolve Points */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2 w-full">
              <Brain className="w-4 h-4 text-blue-400" />
              <CardTitle className="text-base text-white">Resolve Points</CardTitle>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="w-4 h-4 text-slate-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs bg-slate-900 border-slate-700">
                  <div className="text-xs space-y-1">
                    <p className="font-semibold text-blue-300">Resolve Points</p>
                    <p className="text-slate-400 text-[10px] mb-1">Determination and inner strength</p>
                    <div className="space-y-0.5">
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400">Half Character Level</span>
                        <span className="text-white">{Math.floor(totalLevel / 2)}</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400">Key Ability Mod</span>
                        <span className="text-white">{calculateModifier(abilityScores?.[selectedClass?.keyAbility || 'charisma'] || 10) >= 0 ? '+' : ''}{calculateModifier(abilityScores?.[selectedClass?.keyAbility || 'charisma'] || 10)}</span>
                      </div>
                    </div>
                    <div className="pt-1 border-t border-slate-600 flex justify-between">
                      <span className="font-semibold text-slate-300">Max RP</span>
                      <span className="font-bold text-blue-400">{maxResolve}</span>
                    </div>
                    <p className="pt-2 text-amber-300 text-[10px]">Click (i) for uses</p>
                  </div>
                </TooltipContent>
              </Tooltip>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setResolveInfoOpen(true)}
                className="h-6 w-6 text-slate-400 hover:text-cyan-400 ml-auto"
              >
                <Info className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Available</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-blue-400">{maxResolve - usedResolve}</span>
                <span className="text-sm text-slate-500">/ {maxResolve}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: maxResolve }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setUsedResolve(i < usedResolve ? i : i + 1)}
                  className={`w-8 h-8 rounded-lg border-2 transition-all ${
                    i < usedResolve
                      ? 'border-slate-600 bg-slate-700/50'
                      : 'border-blue-500/50 bg-blue-500/20 hover:bg-blue-500/30'
                  }`}
                >
                  {i < usedResolve ? '✓' : ''}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Damage/Heal Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4"
      >
        <div className="flex items-center gap-3">
          <input
            type="number"
            value={damageInput}
            onChange={(e) => setDamageInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && applyDamage()}
            className="flex-1 px-3 py-2 bg-slate-900/50 border border-slate-600 rounded text-white"
            placeholder="Amount..."
          />
          <button
            onClick={applyDamage}
            className="px-4 py-2 bg-red-500/20 border border-red-500/50 text-red-300 rounded hover:bg-red-500/30 transition-colors"
          >
            Take Damage
          </button>
          <button
            onClick={() => { healStamina(damageInput); setDamageInput(''); }}
            className="px-4 py-2 bg-green-500/20 border border-green-500/50 text-green-300 rounded hover:bg-green-500/30 transition-colors"
          >
            Heal Stamina
          </button>
          <button
            onClick={() => { healHP(damageInput); setDamageInput(''); }}
            className="px-4 py-2 bg-red-500/20 border border-red-500/50 text-red-300 rounded hover:bg-red-500/30 transition-colors"
          >
            Heal HP
          </button>
          <button
            onClick={() => {
              setCurrentHP(maxHP);
              setCurrentStamina(maxStamina);
              setTempHP(0);
              setTempStamina(0);
              setUsedResolve(0);
            }}
            className="px-4 py-2 bg-slate-600/50 border border-slate-500/50 text-slate-300 rounded hover:bg-slate-600/70 transition-colors text-sm"
          >
            Rest
          </button>
        </div>
      </motion.div>

      <div className="space-y-6">
        {/* Equipment Tracker */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <EquipmentTracker character={character} onUpdate={onCharacterUpdate} />
        </motion.div>
        
        {(character.weapons?.length > 0 || character.spellAttacks?.length > 0) && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
            {sections.weapons}
          </motion.div>
        )}
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"
        >
          <div className="space-y-6">
            {sections.abilities}
            {sections.traits}
          </div>
          {sections.skills}
        </motion.div>
      </div>

      {/* Bulk Warning Dialog */}
      <Dialog open={bulkWarningShown} onOpenChange={setBulkWarningShown}>
        <DialogContent className="bg-slate-900 border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-white flex items-center gap-2">
              <AlertCircle className={`w-5 h-5 ${isOverburdened ? 'text-red-400' : 'text-amber-400'}`} />
              {isOverburdened ? 'Overburdened!' : 'Encumbered!'}
            </DialogTitle>
            <DialogDescription className="text-slate-300">
              {isOverburdened ? (
                <>
                  <p className="mb-3">
                    You are carrying more than your Strength score allows ({totalBulk.toFixed(1)} / {maxBulk} bulk).
                  </p>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 space-y-2 text-sm">
                    <p className="text-red-300 font-medium">Overburdened Penalties:</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-400">
                      <li>Movement speed reduced to <strong className="text-red-400">5 feet</strong></li>
                      <li>Maximum Dexterity bonus to AC reduced to <strong className="text-red-400">+0</strong></li>
                      <li><strong className="text-red-400">-5 penalty</strong> to Strength and Dexterity-based checks</li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <p className="mb-3">
                    You are carrying more than half your Strength score ({totalBulk.toFixed(1)} / {encumberedThreshold} bulk).
                  </p>
                  <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-3 space-y-2 text-sm">
                    <p className="text-amber-300 font-medium">Encumbered Penalties:</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-400">
                      <li>Movement speed reduced by <strong className="text-amber-400">10 feet</strong></li>
                      <li>Maximum Dexterity bonus to AC reduced to <strong className="text-amber-400">+2</strong></li>
                      <li><strong className="text-amber-400">-5 penalty</strong> to Strength and Dexterity-based checks</li>
                    </ul>
                  </div>
                </>
              )}
              <p className="mt-3 text-xs text-slate-500">
                Note: If wearing armor, use the worse penalty for speed and skill checks. Penalties do not stack.
              </p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setBulkWarningShown(false)} className="bg-slate-700 hover:bg-slate-600">
              Understood
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Spell Attack Dialog */}
      <Dialog open={showSpellAttackDialog} onOpenChange={setShowSpellAttackDialog}>
        <DialogContent className="bg-slate-900 border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-white">Add Spell as Attack</DialogTitle>
            <DialogDescription className="text-slate-400">
              Choose a spell to add to your attack list
            </DialogDescription>
          </DialogHeader>
          <div>
            <Select value={selectedSpellForAttack} onValueChange={setSelectedSpellForAttack}>
              <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                <SelectValue placeholder="Select a spell..." />
              </SelectTrigger>
              <SelectContent>
                {knownSpellsList.map(spell => (
                  <SelectItem key={spell.id} value={spell.id}>
                    {spell.name} (Level {spell.level})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSpellAttackDialog(false)} className="bg-slate-800 border-slate-700">
              Cancel
            </Button>
            <Button onClick={addSpellAsAttack} className="bg-purple-500 hover:bg-purple-600">
              Add to Attacks
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Resolve Points Info Dialog */}
      <Dialog open={resolveInfoOpen} onOpenChange={setResolveInfoOpen}>
        <DialogContent className="bg-slate-900 border-slate-700 max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-white flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-400" />
              Resolve Points
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              Resolve Points represent your character's determination and inner strength.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-slate-300 text-sm">
            <div>
              <h4 className="font-semibold text-cyan-300 mb-2">What You Can Do With Resolve Points:</h4>
              <div className="space-y-3">
                <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                  <div className="font-medium text-white mb-1">Stabilize (0 RP)</div>
                  <p className="text-xs text-slate-400">If you are dying at the start of your turn, spend 1 RP to immediately stabilize at 0 HP.</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                  <div className="font-medium text-white mb-1">Stay in the Fight (1 RP)</div>
                  <p className="text-xs text-slate-400">If damage would reduce you to 0 HP, you can spend 1 RP as a reaction to immediately regain 1 HP and stay conscious.</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                  <div className="font-medium text-white mb-1">Recover Stamina Points (1 RP)</div>
                  <p className="text-xs text-slate-400">Spend 10 minutes resting and 1 RP to recover all your Stamina Points. You can do this once per 10-minute rest period.</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                  <div className="font-medium text-white mb-1">Class Features (Varies)</div>
                  <p className="text-xs text-slate-400">Many class features, spells, and abilities require spending Resolve Points. Check your class features and abilities.</p>
                </div>
              </div>
            </div>
            <Separator className="bg-slate-700" />
            <div>
              <h4 className="font-semibold text-cyan-300 mb-2">Regaining Resolve Points:</h4>
              <p className="text-xs">You regain all your Resolve Points after a full night's rest (8 hours). You cannot regain them any other way unless a specific ability says otherwise.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Skill Info Dialog */}
      <Dialog open={skillInfoOpen} onOpenChange={setSkillInfoOpen}>
        <DialogContent className="bg-slate-900 border-slate-700 max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedSkillInfo && SKILL_ACTIONS[selectedSkillInfo] && (() => {
            const skill = SKILLS.find(s => s.name === selectedSkillInfo);
            const ranks = skills?.[selectedSkillInfo] || 0;
            const bonus = getSkillBonus(skill);
            const isClass = isClassSkill(selectedSkillInfo);
            const skillMods = situationalMods.skills[selectedSkillInfo] || [];
            
            let abilityMod = getAbilityMod(skill.ability);
            if (skill.ability === 'strength') abilityMod += (conditionEffects.strength || 0);
            if (skill.ability === 'dexterity') abilityMod += (conditionEffects.dexterity || 0);
            
            const armorPenaltySkills = ['Acrobatics', 'Athletics', 'Sleight of Hand', 'Stealth'];
            const penalty = armorPenaltySkills.includes(skill.name) ? armorCheckPenalty : 0;
            const nonprofPenalty = ['Acrobatics', 'Athletics', 'Sleight of Hand', 'Stealth', 'Piloting'].includes(skill.name) ? nonproficientPenalty : 0;
            const featBonus = featEffects.skills[skill.name] || 0;
            
            return (
              <>
                <DialogHeader>
                  <DialogTitle className="text-white text-xl">{selectedSkillInfo}</DialogTitle>
                  <DialogDescription className="text-slate-400">
                    {SKILL_ACTIONS[selectedSkillInfo].description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4">
                  {/* Skill Bonus Calculation */}
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-cyan-500/30">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-cyan-300 text-sm">Your Skill Bonus</h4>
                      <span className={`text-2xl font-bold ${bonus >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {bonus >= 0 ? '+' : ''}{bonus}
                      </span>
                    </div>
                    <div className="space-y-1 text-xs text-slate-300">
                      <div className="flex justify-between">
                        <span>Ranks</span>
                        <span className="text-white">{ranks}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ability Modifier ({skill.ability.substring(0, 3).toUpperCase()})</span>
                        <span className="text-white">{abilityMod >= 0 ? '+' : ''}{abilityMod}</span>
                      </div>
                      {ranks > 0 && isClass && (
                        <div className="flex justify-between">
                          <span>Class Skill Bonus</span>
                          <span className="text-green-400">+3</span>
                        </div>
                      )}
                      {penalty !== 0 && (
                        <div className="flex justify-between">
                          <span>Armor Check Penalty</span>
                          <span className="text-red-400">{penalty}</span>
                        </div>
                      )}
                      {nonprofPenalty !== 0 && (
                        <div className="flex justify-between">
                          <span>Non-Proficient Penalty</span>
                          <span className="text-red-400">{nonprofPenalty}</span>
                        </div>
                      )}
                      {featBonus > 0 && (
                        <div className="flex justify-between">
                          <span>Feat Bonuses</span>
                          <span className="text-purple-400">+{featBonus}</span>
                        </div>
                      )}
                      <Separator className="bg-slate-700 my-2" />
                      <div className="flex justify-between font-semibold">
                        <span>Total Bonus</span>
                        <span className={bonus >= 0 ? 'text-green-400' : 'text-red-400'}>
                          {bonus >= 0 ? '+' : ''}{bonus}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Situational Modifiers */}
                  {skillMods.length > 0 && (
                    <div className="bg-amber-900/10 rounded-lg p-4 border border-amber-500/30">
                      <h4 className="font-semibold text-amber-300 text-sm mb-3 flex items-center gap-2">
                        <Info className="w-4 h-4" />
                        Situational Modifiers
                      </h4>
                      <div className="space-y-2">
                        {skillMods.map((mod, idx) => (
                          <div key={idx} className="bg-slate-800/30 rounded p-2 space-y-1">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1">
                                <div className="text-xs font-medium text-amber-200">{mod.source}</div>
                                {mod.condition && (
                                  <div className="text-xs text-slate-400 italic mt-0.5">{mod.condition}</div>
                                )}
                              </div>
                              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-[10px]">
                                {mod.effect}
                              </Badge>
                            </div>
                            {mod.description && (
                              <div className="text-xs text-slate-400">{mod.description}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Common Actions */}
                  <div>
                    <h4 className="font-semibold text-cyan-300 text-sm mb-3">Common Actions:</h4>
                    <div className="space-y-2">
                      {SKILL_ACTIONS[selectedSkillInfo].actions.map((action, idx) => (
                        <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-medium text-white">{action.name}</div>
                            <Badge variant="outline" className="text-xs border-purple-500/50 text-purple-300">
                              {action.actionType}
                            </Badge>
                          </div>
                          <div className="text-xs text-amber-400 mb-2">DC: {action.dc}</div>
                          <p className="text-sm text-slate-300">{action.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
      </div>
      );
      }