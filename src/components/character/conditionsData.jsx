// Starfinder 1st Edition Conditions with mechanical effects
export const CONDITIONS = [
  { 
    name: 'Encumbered', 
    description: 'Reduce each movement speed by 10 feet, reduce max Dex bonus to AC to +2, and take a -5 penalty to Strength and Dexterity-based checks.',
    effects: {
      maxDexBonus: 2,
      strengthDexSkills: -5,
      speed: -10
    }
  },
  { 
    name: 'Overburdened', 
    description: 'Reduce each movement speed to 5 feet, reduce max Dex bonus to AC to +0, and take a -5 penalty to Strength and Dexterity-based checks.',
    effects: {
      maxDexBonus: 0,
      strengthDexSkills: -5,
      speedOverride: 5
    }
  },
  {
    name: 'Asleep',
    description: 'You are sleeping and helpless. You take a -10 penalty to Perception checks to notice things.',
    effects: {
      perception: -10,
      helpless: true
    }
  },
  {
    name: 'Bleeding',
    description: 'You take the listed amount of damage at the start of your turn. Bleeding can be stopped with a successful DC 15 Medicine check or any amount of healing.',
    effects: {}
  },
  {
    name: 'Blinded',
    description: 'You cannot see. You take a -4 penalty to Perception checks and most Strength- and Dexterity-based skill checks. All opponents have total concealment against you (50% miss chance). You must succeed at a DC 10 Acrobatics check to move faster than half speed or else fall prone.',
    effects: {
      acPenalty: 2,
      perception: -4,
      strengthDexSkills: -4
    }
  },
  {
    name: 'Broken',
    description: 'Items with the broken condition cannot be used for their normal function until repaired.',
    effects: {}
  },
  {
    name: 'Burning',
    description: 'You take the listed amount of fire damage each round. You can attempt a Reflex save (DC = 10 + amount of fire damage) to extinguish the flames.',
    effects: {}
  },
  {
    name: 'Confused',
    description: 'You treat all creatures as enemies and must roll randomly each round to determine your actions.',
    effects: {}
  },
  {
    name: 'Cowering',
    description: 'You are frozen in fear. You take a -2 penalty to AC and cannot take actions.',
    effects: {
      acPenalty: 2
    }
  },
  {
    name: 'Dazed',
    description: 'You can take no actions, but you can defend yourself normally. You take a -2 penalty to AC.',
    effects: {
      acPenalty: 2
    }
  },
  {
    name: 'Dazzled',
    description: 'You are unable to see well because of overstimulation of your eyes. You take a -1 penalty to attack rolls and sight-based Perception checks.',
    effects: {
      attackPenalty: 1,
      perception: -1
    }
  },
  {
    name: 'Deafened',
    description: 'You cannot hear. You take a -4 penalty to initiative checks and hearing-based Perception checks. You have a 20% chance to miscast spells with verbal components.',
    effects: {
      initiative: -4,
      perception: -4
    }
  },
  {
    name: 'Dying',
    description: 'You are unconscious and near death. You must stabilize or die. Each round you must attempt a DC 10 Constitution check; three consecutive failures mean death.',
    effects: {
      unconscious: true
    }
  },

  {
    name: 'Entangled',
    description: 'You are ensnared. You move at half speed and take a -2 penalty to AC, attack rolls, Reflex saves, initiative checks, and Dexterity-based skill and ability checks.',
    effects: {
      acPenalty: 2,
      attackPenalty: 2,
      reflexPenalty: 2,
      initiative: -2,
      dexteritySkills: -2
    }
  },
  {
    name: 'Exhausted',
    description: 'You move at half speed and take a -6 penalty to Strength and Dexterity. After 1 hour, you become fatigued instead.',
    effects: {
      strength: -6,
      dexterity: -6
    }
  },
  {
    name: 'Fascinated',
    description: 'You are entranced. While fascinated, you take a -4 penalty to skill checks made as reactions and Perception checks.',
    effects: {
      perception: -4
    }
  },
  {
    name: 'Fatigued',
    description: 'You cannot run or charge. You take a -2 penalty to Strength and Dexterity. After 8 hours of complete rest, you are no longer fatigued.',
    effects: {
      strength: -2,
      dexterity: -2
    }
  },
  {
    name: 'Flat-footed',
    description: 'You cannot use your Dexterity bonus to AC (if any). You cannot take reactions.',
    effects: {
      flatFooted: true
    }
  },
  {
    name: 'Frightened',
    description: 'You take a -2 penalty to attack rolls, saving throws, skill checks, and ability checks. If you can, you must flee from the source of your fear.',
    effects: {
      attackPenalty: 2,
      savePenalty: 2,
      skillPenalty: 2
    }
  },
  {
    name: 'Grappled',
    description: 'You cannot move or take actions with the move action descriptor. You take a -2 penalty to AC, attack rolls, Reflex saves, initiative checks, and Dexterity-based skill and ability checks, except for checks to escape the grapple.',
    effects: {
      acPenalty: 2,
      attackPenalty: 2,
      reflexPenalty: 2,
      initiative: -2,
      dexteritySkills: -2
    }
  },
  {
    name: 'Helpless',
    description: 'You are bound, sleeping, paralyzed, or otherwise completely at an opponent\'s mercy. You take a -4 penalty to AC against melee attacks and cannot apply your Dexterity bonus.',
    effects: {
      acPenalty: 4,
      flatFooted: true
    }
  },
  {
    name: 'Nauseated',
    description: 'You can only take a single move action per turn. You cannot take standard or full actions, or reactions.',
    effects: {}
  },
  {
    name: 'Off-kilter',
    description: 'You are disoriented and moving clumsily. You cannot take move actions except to right yourself. You take a -2 penalty to attack rolls and AC.',
    effects: {
      acPenalty: 2,
      attackPenalty: 2
    }
  },
  {
    name: 'Off-target',
    description: 'You take a -2 penalty to attack rolls.',
    effects: {
      attackPenalty: 2
    }
  },
  {
    name: 'Panicked',
    description: 'You drop everything and flee from the source of your fear as fast as possible. You take a -2 penalty to all saving throws, skill checks, and ability checks.',
    effects: {
      savePenalty: 2,
      skillPenalty: 2
    }
  },
  {
    name: 'Paralyzed',
    description: 'You are helpless and cannot move or take physical actions. You can take purely mental actions.',
    effects: {
      acPenalty: 4,
      flatFooted: true,
      helpless: true
    }
  },
  {
    name: 'Pinned',
    description: 'You are tightly bound and can take few actions. You cannot move and take a -4 penalty to AC. You cannot take reactions and can take only certain standard actions.',
    effects: {
      acPenalty: 4
    }
  },
  {
    name: 'Prone',
    description: 'You take a -4 penalty to melee attack rolls. You gain a +4 bonus to AC against ranged attacks but take a -4 penalty to AC against melee attacks.',
    effects: {
      attackPenalty: 4
    }
  },
  {
    name: 'Shaken',
    description: 'You take a -2 penalty to attack rolls, saving throws, skill checks, and ability checks.',
    effects: {
      attackPenalty: 2,
      savePenalty: 2,
      skillPenalty: 2
    }
  },
  {
    name: 'Sickened',
    description: 'You take a -2 penalty to attack rolls, weapon damage rolls, saving throws, skill checks, and ability checks.',
    effects: {
      attackPenalty: 2,
      savePenalty: 2,
      skillPenalty: 2
    }
  },
  {
    name: 'Staggered',
    description: 'You can take only a single move action or standard action each round (plus free and swift actions). You cannot take full actions.',
    effects: {}
  },
  {
    name: 'Stunned',
    description: 'You drop everything held, cannot take actions, and take a -2 penalty to AC.',
    effects: {
      acPenalty: 2
    }
  },
  {
    name: 'Unconscious',
    description: 'You are knocked out and helpless. You cannot use any Dexterity bonus to AC and take a -4 penalty to AC.',
    effects: {
      acPenalty: 4,
      flatFooted: true,
      helpless: true
    }
  }
];

export function getConditionByName(name) {
  return CONDITIONS.find(c => c.name === name);
}

export function calculateConditionEffects(activeConditions) {
  const effects = {
    acPenalty: 0,
    attackPenalty: 0,
    savePenalty: 0,
    reflexPenalty: 0,
    skillPenalty: 0,
    perception: 0,
    initiative: 0,
    strength: 0,
    dexterity: 0,
    strengthDexSkills: 0,
    dexteritySkills: 0,
    maxDexBonus: 99,
    flatFooted: false,
    helpless: false,
    unconscious: false,
    speed: 0,
    speedOverride: null
  };

  activeConditions.forEach(conditionName => {
    const condition = getConditionByName(conditionName);
    if (!condition) return;

    // Accumulate penalties
    if (condition.effects.acPenalty) effects.acPenalty += condition.effects.acPenalty;
    if (condition.effects.attackPenalty) effects.attackPenalty += condition.effects.attackPenalty;
    if (condition.effects.savePenalty) effects.savePenalty += condition.effects.savePenalty;
    if (condition.effects.reflexPenalty) effects.reflexPenalty += condition.effects.reflexPenalty;
    if (condition.effects.skillPenalty) effects.skillPenalty += condition.effects.skillPenalty;
    if (condition.effects.perception) effects.perception += condition.effects.perception;
    if (condition.effects.initiative) effects.initiative += condition.effects.initiative;
    if (condition.effects.strength) effects.strength += condition.effects.strength;
    if (condition.effects.dexterity) effects.dexterity += condition.effects.dexterity;
    if (condition.effects.strengthDexSkills) effects.strengthDexSkills += condition.effects.strengthDexSkills;
    if (condition.effects.dexteritySkills) effects.dexteritySkills += condition.effects.dexteritySkills;
    if (condition.effects.speed) effects.speed += condition.effects.speed;

    // Take the lowest max dex bonus
    if (condition.effects.maxDexBonus !== undefined) {
      effects.maxDexBonus = Math.min(effects.maxDexBonus, condition.effects.maxDexBonus);
    }
    
    // Speed override (Overburdened overrides all)
    if (condition.effects.speedOverride !== undefined) {
      effects.speedOverride = condition.effects.speedOverride;
    }

    // Boolean flags
    if (condition.effects.flatFooted) effects.flatFooted = true;
    if (condition.effects.helpless) effects.helpless = true;
    if (condition.effects.unconscious) effects.unconscious = true;
  });

  return effects;
}