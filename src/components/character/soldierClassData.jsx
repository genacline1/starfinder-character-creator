// Soldier Class Data for Starfinder 1e
// Source: Starfinder Core Rulebook

export const FIGHTING_STYLES = [
  {
    id: 'arcane_assailant',
    name: 'Arcane Assailant',
    description: 'You blend martial prowess with arcane power, integrating magic into your attacks.',
    techniques: [
      // Techniques to be added when provided
      // Level 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20
    ]
  },
  {
    id: 'armor_storm',
    name: 'Armor Storm',
    description: 'You specialize in powered armor and heavy firepower, becoming a walking battlefield.',
    techniques: [
      // Techniques to be added when provided
      // Level 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20
    ]
  },
  {
    id: 'blitz',
    name: 'Blitz',
    description: 'You focus on mobility and close-quarters aggression, striking before enemies can react.',
    techniques: [
      // Techniques to be added when provided
      // Level 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20
    ]
  },
  {
    id: 'bombard',
    name: 'Bombard',
    description: 'You dominate the battlefield with explosives and heavy weapons.',
    techniques: [
      // Techniques to be added when provided
      // Level 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20
    ]
  },
  {
    id: 'bullet_rain',
    name: 'Bullet Rain',
    description: 'You specialize in automatic and suppressive fire with ranged weapons.',
    techniques: [
      // Techniques to be added when provided
      // Level 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20
    ]
  },
  {
    id: 'close_combat',
    name: 'Close Combat',
    description: 'You are deadly in melee, using precision and brutality.',
    techniques: [
      // Techniques to be added when provided
      // Level 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20
    ]
  },
  {
    id: 'hit_and_run',
    name: 'Hit-and-Run',
    description: 'You strike swiftly and reposition constantly, excelling at skirmishing.',
    techniques: [
      // Techniques to be added when provided
      // Level 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20
    ]
  },
  {
    id: 'guard',
    name: 'Guard',
    description: 'You defend allies and control enemy movement.',
    techniques: [
      // Techniques to be added when provided
      // Level 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20
    ]
  },
  {
    id: 'sharpshoot',
    name: 'Sharpshooter',
    description: 'You excel at long-range precision and sniping.',
    techniques: [
      // Techniques to be added when provided
      // Level 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20
    ]
  },
  {
    id: 'shock_and_awe',
    name: 'Shock and Awe',
    description: 'You overwhelm enemies with devastating force and intimidation.',
    techniques: [
      // Techniques to be added when provided
      // Level 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20
    ]
  }
];

export const GEAR_BOOSTS = [
  {
    id: 'adaptive_fighting',
    name: 'Adaptive Fighting',
    description: 'Gain bonuses when switching between melee and ranged combat.',
    level: 2,
    prerequisites: []
  },
  {
    id: 'enhanced_resistance',
    name: 'Enhanced Resistance',
    description: 'Gain resistance to a selected energy type; selection required at time of taking this boost.',
    level: 2,
    prerequisites: [],
    requiresChoice: true,
    choiceType: 'energy_type',
    choiceOptions: ['acid', 'cold', 'electricity', 'fire', 'sonic']
  },
  {
    id: 'powered_armor_jockey',
    name: 'Powered Armor Jockey',
    description: 'Improve your effectiveness while wearing powered armor.',
    level: 2,
    prerequisites: []
  },
  {
    id: 'relentless',
    name: 'Relentless',
    description: 'Reduce penalties from being staggered or fatigued.',
    level: 2,
    prerequisites: []
  },
  {
    id: 'versatile_specialization',
    name: 'Versatile Specialization',
    description: 'Gain Weapon Specialization with additional weapon types.',
    level: 2,
    prerequisites: []
  }
  // Additional gear boosts to be added when full list is provided
];

export function getFightingStyleById(id) {
  return FIGHTING_STYLES.find(style => style.id === id);
}

export function getGearBoostById(id) {
  return GEAR_BOOSTS.find(boost => boost.id === id);
}

export function getAvailableGearBoosts(characterLevel) {
  return GEAR_BOOSTS.filter(boost => characterLevel >= boost.level);
}