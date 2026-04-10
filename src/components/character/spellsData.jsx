// Starfinder 1st Edition Spells Data
// This is a subset of common spells - can be expanded

export const SPELLS = [
  // Level 0 (Cantrips)
  {
    id: 'daze',
    name: 'Daze',
    level: 0,
    school: 'Enchantment',
    castingTime: '1 standard action',
    range: 'close (25 ft. + 5 ft./2 levels)',
    target: 'one humanoid creature of CR 3 or lower',
    duration: '1 round',
    savingThrow: 'Will negates',
    spellResistance: true,
    description: 'This spell short-circuits the mind of a humanoid creature with a CR of 3 or lower so that it is dazed (unable to take actions, but taking no penalty to AC). Humanoids of CR 4 or higher are not affected. After a creature has been dazed by this spell, it is immune to it for 1 minute.',
    classes: ['mystic', 'technomancer']
  },
  {
    id: 'detect_magic',
    name: 'Detect Magic',
    level: 0,
    school: 'Divination',
    castingTime: '1 standard action',
    range: '60 ft.',
    duration: 'concentration, up to 1 min./level',
    savingThrow: 'none',
    spellResistance: false,
    description: 'Detect spells and magic items within 60 feet.',
    classes: ['mystic', 'technomancer']
  },
  {
    id: 'energy_ray',
    name: 'Energy Ray',
    level: 0,
    school: 'Evocation',
    castingTime: '1 standard action',
    range: 'close',
    duration: 'instantaneous',
    savingThrow: 'none',
    spellResistance: true,
    description: 'Ray deals 1d3 acid, cold, electricity, or fire damage.',
    classes: ['technomancer']
  },
  {
    id: 'ghost_sound',
    name: 'Ghost Sound',
    level: 0,
    school: 'Illusion',
    castingTime: '1 standard action',
    range: 'close',
    duration: '1 round/level',
    savingThrow: 'Will disbelief',
    spellResistance: false,
    description: 'Create minor illusion sounds.',
    classes: ['mystic', 'technomancer']
  },
  {
    id: 'stabilize',
    name: 'Stabilize',
    level: 0,
    school: 'Conjuration (Healing)',
    castingTime: '1 standard action',
    range: 'close',
    duration: 'instantaneous',
    savingThrow: 'Will negates (harmless)',
    spellResistance: true,
    description: 'Cause a dying creature to stabilize.',
    classes: ['mystic']
  },
  {
    id: 'telepathic_message',
    name: 'Telepathic Message',
    level: 0,
    school: 'Divination (mind-affecting)',
    castingTime: '1 standard action',
    range: 'close',
    duration: 'concentration',
    savingThrow: 'none',
    spellResistance: false,
    description: 'Send a short telepathic message and hear reply.',
    classes: ['mystic', 'technomancer']
  },

  // Level 1
  {
    id: 'charm_person',
    name: 'Charm Person',
    level: 1,
    school: 'Enchantment (charm, mind-affecting)',
    castingTime: '1 standard action',
    range: 'close',
    duration: '1 hour/level',
    savingThrow: 'Will negates',
    spellResistance: true,
    description: 'Make one humanoid creature believe that it is your ally.',
    classes: ['mystic']
  },
  {
    id: 'command',
    name: 'Command',
    level: 1,
    school: 'Enchantment (compulsion, language-dependent, mind-affecting)',
    castingTime: '1 standard action',
    range: 'close',
    duration: '1 round',
    savingThrow: 'Will negates',
    spellResistance: true,
    description: 'One creature obeys a select command for 1 round.',
    classes: ['mystic']
  },
  {
    id: 'grease',
    name: 'Grease',
    level: 1,
    school: 'Conjuration (creation)',
    castingTime: '1 standard action',
    range: 'close',
    duration: '1 min./level',
    savingThrow: 'Reflex negates',
    spellResistance: false,
    description: 'Make a 10-ft. square slippery.',
    classes: ['technomancer']
  },
  {
    id: 'identify',
    name: 'Identify',
    level: 1,
    school: 'Divination',
    castingTime: '1 standard action',
    range: '60 ft.',
    duration: 'instantaneous',
    savingThrow: 'none',
    spellResistance: false,
    description: 'Gain a +10 bonus to identify items.',
    classes: ['mystic', 'technomancer']
  },
  {
    id: 'magic_missile',
    name: 'Magic Missile',
    level: 1,
    school: 'Evocation (force)',
    castingTime: '1 standard action',
    range: 'medium',
    duration: 'instantaneous',
    savingThrow: 'none',
    spellResistance: true,
    description: 'Two missiles deal 1d4+1 force damage.',
    classes: ['technomancer']
  },
  {
    id: 'mystic_cure_1',
    name: 'Mystic Cure',
    level: 1,
    school: 'Conjuration (Healing)',
    castingTime: '1 standard action',
    range: 'touch',
    duration: 'instantaneous',
    savingThrow: 'Will half (harmless)',
    spellResistance: true,
    description: 'Heal 1d8 + your Wisdom modifier Hit Points.',
    classes: ['mystic']
  },
  {
    id: 'supercharge_weapon',
    name: 'Supercharge Weapon',
    level: 1,
    school: 'Transmutation',
    castingTime: '1 standard action',
    range: 'touch',
    duration: '1 round/level',
    savingThrow: 'Fortitude negates (harmless)',
    spellResistance: true,
    description: 'Add 1d6 damage to weapon damage for 1 attack per round.',
    classes: ['technomancer']
  },

  // Level 2
  {
    id: 'fog_cloud',
    name: 'Fog Cloud',
    level: 2,
    school: 'Conjuration (creation)',
    castingTime: '1 standard action',
    range: 'medium',
    duration: '10 min./level',
    savingThrow: 'none',
    spellResistance: false,
    description: 'Create heavy fog that obscures sight.',
    classes: ['mystic', 'technomancer']
  },
  {
    id: 'hold_person',
    name: 'Hold Person',
    level: 2,
    school: 'Enchantment (compulsion, mind-affecting)',
    castingTime: '1 standard action',
    range: 'close',
    duration: '1 round/level',
    savingThrow: 'Will negates',
    spellResistance: true,
    description: 'Paralyze one humanoid.',
    classes: ['mystic']
  },
  {
    id: 'invisibility',
    name: 'Invisibility',
    level: 2,
    school: 'Illusion',
    castingTime: '1 standard action',
    range: 'touch',
    duration: '1 min./level',
    savingThrow: 'Will negates (harmless)',
    spellResistance: true,
    description: 'Target is invisible for 1 min./level or until it attacks.',
    classes: ['technomancer']
  },
  {
    id: 'knock',
    name: 'Knock',
    level: 2,
    school: 'Transmutation',
    castingTime: '1 standard action',
    range: 'medium',
    duration: 'instantaneous',
    savingThrow: 'none',
    spellResistance: false,
    description: 'Opens locked or magically sealed door.',
    classes: ['technomancer']
  },
  {
    id: 'lesser_restoration',
    name: 'Lesser Restoration',
    level: 2,
    school: 'Conjuration (Healing)',
    castingTime: '1 standard action',
    range: 'touch',
    duration: 'instantaneous',
    savingThrow: 'Will negates (harmless)',
    spellResistance: true,
    description: 'Dispel magical ability penalty or cure 1d4 ability damage.',
    classes: ['mystic']
  },
  {
    id: 'spider_climb',
    name: 'Spider Climb',
    level: 2,
    school: 'Transmutation',
    castingTime: '1 standard action',
    range: 'touch',
    duration: '10 min./level',
    savingThrow: 'Will negates (harmless)',
    spellResistance: true,
    description: 'Grant ability to walk on walls and ceilings.',
    classes: ['mystic', 'technomancer']
  },

  // Level 3
  {
    id: 'dispel_magic',
    name: 'Dispel Magic',
    level: 3,
    school: 'Abjuration',
    castingTime: '1 standard action',
    range: 'medium',
    duration: 'instantaneous',
    savingThrow: 'none',
    spellResistance: false,
    description: 'Cancel one magical spell or effect.',
    classes: ['mystic', 'technomancer']
  },
  {
    id: 'fly',
    name: 'Fly',
    level: 3,
    school: 'Transmutation',
    castingTime: '1 standard action',
    range: 'touch',
    duration: '1 min./level',
    savingThrow: 'Will negates (harmless)',
    spellResistance: true,
    description: 'Target can fly at speed of 60 feet.',
    classes: ['mystic', 'technomancer']
  },
  {
    id: 'haste',
    name: 'Haste',
    level: 3,
    school: 'Transmutation',
    castingTime: '1 standard action',
    range: 'close',
    duration: '1 round/level',
    savingThrow: 'Fortitude negates (harmless)',
    spellResistance: true,
    description: 'One creature per level moves and acts faster.',
    classes: ['technomancer']
  },
  {
    id: 'tongues',
    name: 'Tongues',
    level: 3,
    school: 'Divination',
    castingTime: '1 standard action',
    range: 'touch',
    duration: '10 min./level',
    savingThrow: 'Will negates (harmless)',
    spellResistance: false,
    description: 'Target can speak and understand any language.',
    classes: ['mystic', 'technomancer']
  }
];

export const SPELL_SCHOOLS = [
  'Abjuration',
  'Conjuration',
  'Divination',
  'Enchantment',
  'Evocation',
  'Illusion',
  'Necromancy',
  'Transmutation'
];

export function getSpellsByClass(className) {
  const classKey = className.toLowerCase();
  return SPELLS.filter(spell => spell.classes.includes(classKey));
}

export function getSpellsByLevel(spells, level) {
  return spells.filter(spell => spell.level === level);
}

export function getSpellById(id) {
  return SPELLS.find(spell => spell.id === id);
}

// Spells known/per day based on class and level
export const SPELLS_KNOWN = {
  mystic: {
    1: { 0: 4, 1: 2 },
    2: { 0: 5, 1: 3 },
    3: { 0: 6, 1: 4 },
    4: { 0: 6, 1: 4, 2: 2 },
    5: { 0: 6, 1: 4, 2: 3 },
    6: { 0: 6, 1: 4, 2: 4 }
  },
  technomancer: {
    1: { 0: 4, 1: 2 },
    2: { 0: 5, 1: 3 },
    3: { 0: 6, 1: 4 },
    4: { 0: 6, 1: 4, 2: 2 },
    5: { 0: 6, 1: 4, 2: 3 },
    6: { 0: 6, 1: 4, 2: 4 }
  }
};

export const SPELLS_PER_DAY = {
  mystic: {
    1: { 1: 2 },
    2: { 1: 3 },
    3: { 1: 3 },
    4: { 1: 3, 2: 2 },
    5: { 1: 4, 2: 3 },
    6: { 1: 4, 2: 3 }
  },
  technomancer: {
    1: { 1: 2 },
    2: { 1: 3 },
    3: { 1: 3 },
    4: { 1: 3, 2: 2 },
    5: { 1: 4, 2: 3 },
    6: { 1: 4, 2: 3 }
  }
};

export function getSpellsKnownForLevel(className, characterLevel) {
  const classKey = className.toLowerCase();
  return SPELLS_KNOWN[classKey]?.[characterLevel] || {};
}

export function getSpellsPerDayForLevel(className, characterLevel) {
  const classKey = className.toLowerCase();
  return SPELLS_PER_DAY[classKey]?.[characterLevel] || {};
}