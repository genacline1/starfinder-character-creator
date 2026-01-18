// Centralized logic for calculating situational modifiers from all sources
import { getFeatById } from './featsData';
import { getClassById } from './starfinderData';

export function getSituationalModifiers(character, context = {}) {
  const modifiers = {
    skills: {}, // { skillName: [{ source, condition, effect, description }] }
    saves: {
      fortitude: [],
      reflex: [],
      will: []
    },
    ac: [],
    attacks: [],
    initiative: [],
    spells: [],
    other: []
  };

  const feats = character.feats || [];
  const classes = character.classes || [];
  const race = character.race;
  const theme = character.theme;
  const selectedClass = classes[0] ? getClassById(classes[0].classId) : null;

  // Process feats for situational modifiers
  feats.forEach(feat => {
    const featData = getFeatById(feat.id);
    if (!featData) return;

    switch (feat.id) {
      case 'point_blank_shot':
        modifiers.attacks.push({
          source: 'Point-Blank Shot (feat)',
          condition: 'Target within 30 feet',
          effect: '+1 attack, +1 damage',
          description: 'Applies to ranged attacks only'
        });
        break;
      
      case 'deadly_aim':
        modifiers.attacks.push({
          source: 'Deadly Aim (feat)',
          condition: 'Activated as full-round action',
          effect: '-2 attack, +4 damage',
          description: 'Applies to ranged attacks only'
        });
        break;
      
      case 'mobility':
        modifiers.ac.push({
          source: 'Mobility (feat)',
          condition: 'When moving through threatened squares',
          effect: '+4 AC',
          description: 'Against attacks of opportunity from movement'
        });
        break;
      
      case 'far_shot':
        modifiers.attacks.push({
          source: 'Far Shot (feat)',
          condition: 'Always active',
          effect: 'Halve range penalties',
          description: 'Reduce attack penalties from range by 50%'
        });
        break;
      
      case 'weapon_focus':
        if (feat.choice) {
          modifiers.attacks.push({
            source: `Weapon Focus (feat)`,
            condition: `Using ${feat.choice}`,
            effect: '+1 attack',
            description: 'Applies only to specified weapon type'
          });
        }
        break;
      
      case 'weapon_specialization':
        if (feat.choice) {
          modifiers.attacks.push({
            source: `Weapon Specialization (feat)`,
            condition: `Using ${feat.choice}`,
            effect: '+2 damage',
            description: 'Applies only to specified weapon type'
          });
        }
        break;
      
      case 'cleave':
        modifiers.attacks.push({
          source: 'Cleave (feat)',
          condition: 'First melee attack hits',
          effect: 'Extra attack vs adjacent foe',
          description: 'Additional melee attack if first one hits'
        });
        break;
      
      case 'shot_on_the_run':
        modifiers.attacks.push({
          source: 'Shot on the Run (feat)',
          condition: 'During movement',
          effect: 'Ranged attack anywhere in move',
          description: 'Make ranged attack at any point during movement'
        });
        break;
      
      case 'stand_still':
        modifiers.attacks.push({
          source: 'Stand Still (feat)',
          condition: 'Adjacent creature moves',
          effect: 'Reaction to stop movement',
          description: 'Use reaction to stop adjacent creature from moving'
        });
        break;
      
      case 'step_up':
        modifiers.attacks.push({
          source: 'Step Up (feat)',
          condition: 'Adjacent foe moves',
          effect: '5-ft step as reaction',
          description: 'Take 5-foot step as reaction to follow moving foe'
        });
        break;
      
      case 'spell_focus':
        if (feat.choice) {
          modifiers.spells.push({
            source: `Spell Focus (feat)`,
            condition: `${feat.choice} school spells`,
            effect: '+1 DC',
            description: 'Increase spell save DCs for chosen school'
          });
        }
        break;
      
      case 'spell_penetration':
        modifiers.spells.push({
          source: 'Spell Penetration (feat)',
          condition: 'Overcoming spell resistance',
          effect: '+2 caster level check',
          description: 'Helps bypass spell resistance'
        });
        break;
      
      case 'nimble_moves':
        if (!modifiers.skills['Acrobatics']) modifiers.skills['Acrobatics'] = [];
        modifiers.skills['Acrobatics'].push({
          source: 'Nimble Moves (feat)',
          condition: 'Moving through difficult terrain',
          effect: 'Ignore 20 ft',
          description: 'First 20 feet of difficult terrain doesn\'t slow you'
        });
        break;
      
      case 'close_combat':
        modifiers.ac.push({
          source: 'Close Combat (feat)',
          condition: 'In melee combat',
          effect: '+2 AC vs ranged',
          description: 'Bonus against ranged attacks while threatening a foe'
        });
        break;
      
      case 'combat_casting':
        modifiers.saves.fortitude.push({
          source: 'Combat Casting (feat)',
          condition: 'When casting spells',
          effect: '+2 AC, +2 saves',
          description: 'Against attacks of opportunity triggered by spellcasting'
        });
        modifiers.ac.push({
          source: 'Combat Casting (feat)',
          condition: 'When casting spells',
          effect: '+2 AC',
          description: 'Against attacks of opportunity triggered by spellcasting'
        });
        break;
      
      case 'dive_for_cover':
        modifiers.saves.reflex.push({
          source: 'Dive for Cover (feat)',
          condition: 'Drop prone as reaction',
          effect: '+4 Reflex',
          description: 'Against area attacks when dropping prone'
        });
        break;
      
      case 'sidestep':
        modifiers.other.push({
          source: 'Sidestep (feat)',
          condition: 'Foe misses melee attack',
          effect: 'Guarded step as reaction',
          description: 'Take 5-foot step after being missed'
        });
        break;
      
      case 'spring_attack':
        modifiers.attacks.push({
          source: 'Spring Attack (feat)',
          condition: 'Full action',
          effect: 'Move before & after attack',
          description: 'Move, attack, then move again'
        });
        break;
      
      case 'coordinated_shot':
        modifiers.attacks.push({
          source: 'Coordinated Shot (feat)',
          condition: 'Ally threatens target',
          effect: '+1 ranged attack',
          description: 'Allies gain bonus to ranged attacks vs foes you threaten'
        });
        break;
      
      case 'bodyguard':
        modifiers.ac.push({
          source: 'Bodyguard (feat)',
          condition: 'Adjacent ally attacked',
          effect: '+2 AC to ally (reaction)',
          description: 'Grant AC bonus to adjacent ally as reaction'
        });
        break;
      
      case 'deflect_projectiles':
        modifiers.ac.push({
          source: 'Deflect Projectiles (feat)',
          condition: 'Using melee weapon',
          effect: 'Deflect ranged attacks',
          description: 'Use melee weapon to deflect incoming ranged attacks'
        });
        break;
      
      case 'lunge':
        modifiers.attacks.push({
          source: 'Lunge (feat)',
          condition: 'Activated',
          effect: '+5 ft reach, -2 AC',
          description: 'Trade AC for increased melee reach'
        });
        break;
    }
  });

  // Process theme modifiers
  if (theme?.situationalModifiers) {
    theme.situationalModifiers.forEach(mod => {
      if (mod.type === 'skill' && mod.skill) {
        if (!modifiers.skills[mod.skill]) modifiers.skills[mod.skill] = [];
        modifiers.skills[mod.skill].push({
          source: `${theme.name} (theme)`,
          condition: mod.condition,
          effect: mod.effect,
          description: mod.description
        });
      }
    });
  }

  // Process racial modifiers
  if (race?.situationalModifiers) {
    race.situationalModifiers.forEach(mod => {
      if (mod.type === 'skill' && mod.skill) {
        if (!modifiers.skills[mod.skill]) modifiers.skills[mod.skill] = [];
        modifiers.skills[mod.skill].push({
          source: `${race.name} (racial)`,
          condition: mod.condition,
          effect: mod.effect,
          description: mod.description
        });
      } else if (mod.type === 'save') {
        const saveType = mod.saveType || 'fortitude';
        modifiers.saves[saveType].push({
          source: `${race.name} (racial)`,
          condition: mod.condition,
          effect: mod.effect,
          description: mod.description
        });
      }
    });
  }

  // Process class features for situational modifiers
  if (selectedClass) {
    // Add class-specific situational modifiers based on abilities
    const className = selectedClass.name.toLowerCase();
    
    // Soldier - fighting style modifiers
    if (className === 'soldier' && character.selectedClass?.classSpecificChoices?.fighting_style) {
      const style = character.selectedClass.classSpecificChoices.fighting_style;
      
      if (style === 'arcane_assailant') {
        modifiers.attacks.push({
          source: 'Arcane Assailant (fighting style)',
          condition: 'Using hybrid weapons',
          effect: '+1 attack',
          description: 'Bonus to attack rolls with hybrid weapons'
        });
      } else if (style === 'armor_storm') {
        modifiers.ac.push({
          source: 'Armor Storm (fighting style)',
          condition: 'Wearing heavy armor',
          effect: 'Enhanced AC',
          description: 'Gain improved AC bonuses from heavy armor'
        });
      } else if (style === 'blitz') {
        modifiers.attacks.push({
          source: 'Blitz (fighting style)',
          condition: 'After moving',
          effect: 'Full attack options',
          description: 'Make full attack after moving'
        });
      } else if (style === 'bombard') {
        modifiers.attacks.push({
          source: 'Bombard (fighting style)',
          condition: 'Using heavy/explosive weapons',
          effect: '+1 damage per die',
          description: 'Bonus damage with heavy and explosive weapons'
        });
      } else if (style === 'guard') {
        modifiers.ac.push({
          source: 'Guard (fighting style)',
          condition: 'Guarding ally',
          effect: 'AC bonus to ally',
          description: 'Grant AC bonuses to allies you protect'
        });
      } else if (style === 'hit_and_run') {
        modifiers.attacks.push({
          source: 'Hit and Run (fighting style)',
          condition: 'After moving',
          effect: 'Attack then move',
          description: 'Move before and after attacking'
        });
      } else if (style === 'sharpshoot') {
        modifiers.attacks.push({
          source: 'Sharpshoot (fighting style)',
          condition: 'Using ranged weapons',
          effect: 'Reduce cover penalties',
          description: 'Enemies don\'t gain cover bonuses from soft cover'
        });
      }
    }

    // Operative - edge bonuses
    if (className === 'operative') {
      const edge = Math.floor(getTotalLevel(classes) / 2) + 1;
      modifiers.skills['Acrobatics']?.push({
        source: 'Operative\'s Edge',
        condition: 'Always active',
        effect: `+${edge}`,
        description: 'Insight bonus to operative specialization skills'
      });
    }

    // Envoy - skill bonuses
    if (className === 'envoy') {
      modifiers.skills['Diplomacy'] = modifiers.skills['Diplomacy'] || [];
      modifiers.skills['Diplomacy'].push({
        source: 'Envoy Expertise',
        condition: 'Always active',
        effect: '+1d6',
        description: 'Roll 1d6 and add to Diplomacy checks'
      });
    }
  }

  return modifiers;
}

// Helper to get total level
function getTotalLevel(classes) {
  if (!classes || classes.length === 0) return 1;
  return classes.reduce((sum, c) => sum + (c.level || 0), 0);
}