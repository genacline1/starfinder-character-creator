// Class-specific subclass/specialization options
// Source: https://www.aonsrd.com/

// Biohacker Fields of Study (selected at 1st level)
export const BIOHACKER_FIELDS = [
  { id: 'anesthesiology', name: 'Anesthesiology', description: 'Reduce sensation and pain. Booster: DR 1/— + stacks with one source, +2 vs pain. Inhibitor: Nonlethal damage + fatigued.' },
  { id: 'cybermedicine', name: 'Cybermedicine', description: 'Integrate biology and technology. Booster: +50% healing received. Inhibitor: Fort save or no HP restoration.' },
  { id: 'efficiency', name: 'Efficiency', description: 'Maximize energy output. Booster: 25% chance not to expend Resolve Point. Inhibitor: -2 to Reflex saves.' },
  { id: 'genetics', name: 'Genetics', description: 'Inherited characteristics. Booster: Blindsense (sound) 60 ft or Blind-Fight. Inhibitor: +50% damage from chosen energy type.' },
  { id: 'hypermycology', name: 'Hypermycology', description: 'Fungi study. Booster: Temp HP equal to level + regenerate remaining at end. Inhibitor: -2 AC and saves vs disease.' },
  { id: 'immunology', name: 'Immunology', description: 'Immune systems. Booster: +4 vs disease/poison, reduce DC of afflictions. Inhibitor: Reduce resistances and bonuses vs afflictions.' },
  { id: 'neurochemistry', name: 'Neurochemistry', description: 'Brain chemistry. Booster: +2 to Will saves. Inhibitor: -1 to Will saves (stacks).' },
  { id: 'pharmacology', name: 'Pharmacology', description: 'Drugs and compounds. Booster: Additional use of helpful drug. Inhibitor: Extend harmful drug duration by 50%.' },
  { id: 'proteomics', name: 'Proteomics', description: 'Protein structures. Booster: +1 to attack rolls. Inhibitor: -2 to attack rolls.' },
  { id: 'psychotropics', name: 'Psychotropics', description: 'Mind-altering substances. Booster: +1d4 insight bonus to Int/Wis/Cha skills. Inhibitor: Confused for 1 round (Will negates).' },
  { id: 'thaumatology', name: 'Thaumatology', description: 'Magical phenomena. Booster: +1 caster level and SR +2. Inhibitor: -1 caster level and -2 vs SR checks.' },
  { id: 'toxicology', name: 'Toxicology', description: 'Poisons and toxins. Booster: Poison resistance 5. Inhibitor: Save vs poison or take ongoing poison damage.' },
];

// Operative Specializations
export const OPERATIVE_SPECIALIZATIONS = [
  { id: 'bandit', name: 'Bandit', skills: ['Intimidate', 'Sense Motive'], description: 'Cultivate menacing persona to coerce targets. Can use Intimidate for trick attacks.' },
  { id: 'bully', name: 'Bully', skills: ['Athletics', 'Intimidate'], description: 'Close combat specialist. Trick attack damage treats 1s and 2s as 3s against frightened/prone targets.' },
  { id: 'daredevil', name: 'Daredevil', skills: ['Acrobatics', 'Athletics'], description: 'Missions requiring courage and athleticism. Can use Acrobatics for trick attacks.' },
  { id: 'detective', name: 'Detective', skills: ['Culture', 'Sense Motive'], description: 'Read people and make deductions. Can use Sense Motive +4 for trick attacks.' },
  { id: 'diplomat', name: 'Diplomat', skills: ['Culture', 'Diplomacy'], description: 'Expert negotiator. Use Diplomacy for trick attacks, bonus decreases each use.' },
  { id: 'explorer', name: 'Explorer', skills: ['Culture', 'Survival'], description: 'Navigate unknown territories. Gain bonuses in unfamiliar environments.' },
  { id: 'ghost', name: 'Ghost', skills: ['Acrobatics', 'Stealth'], description: 'Master of stealth and infiltration. Enhanced abilities when unseen.' },
  { id: 'hacker', name: 'Hacker', skills: ['Computers', 'Engineering'], description: 'Digital infiltration specialist. Reduced hack times and improved success.' },
  { id: 'spy', name: 'Spy', skills: ['Bluff', 'Disguise'], description: 'Master of deception. Enhanced disguise and false identity abilities.' },
  { id: 'thief', name: 'Thief', skills: ['Perception', 'Sleight of Hand'], description: 'Light fingers and keen eyes. Enhanced stealing and perception abilities.' },
];

// Soldier Fighting Styles  
export const SOLDIER_FIGHTING_STYLES = [
  { id: 'ambusher', name: 'Ambusher', description: 'Focus on stealth, tactical positioning, and superior reflexes. Requires Stealth as class skill.' },
  { id: 'arcane_assailant', name: 'Arcane Assailant', description: 'Supplement combat with magic powers. Use runes to augment weapons and call on legendary powers.' },
  { id: 'archer', name: 'Archer', description: 'Master of bow warfare. Prove obstacles can be overcome with ancient weapons.' },
  { id: 'armor_storm', name: 'Armor Storm', description: 'Use armor as a weapon. Maximize damage of armor-based weapons while withstanding fire.' },
  { id: 'blitz', name: 'Blitz', description: 'Speed and aggression for melee combat. Increased speed, better at melee than enemies.' },
  { id: 'bombard', name: 'Bombard', description: 'Attack multiple targets with grenades. Use launchers, missiles, and heavy weapons at higher levels.' },
  { id: 'bullet_rain', name: 'Bullet Rain', description: 'Master of heavy weapons. Flamethrowers, machine guns, and suppressive fire.' },
  { id: 'guard', name: 'Guard', description: 'Protect allies and hold the line. Enhanced defensive abilities and area denial.' },
  { id: 'hit_and_run', name: 'Hit and Run', description: 'Mobile warfare specialist. Strike quickly and disengage before retaliation.' },
  { id: 'sharpshoot', name: 'Sharpshoot', description: 'Long-range precision. Enhanced accuracy and critical hits with ranged weapons.' },
];

// Envoy Expertise Talents (selected at 3rd, 7th, 11th, etc.)
export const ENVOY_EXPERTISE_TALENTS = [
  { id: 'additional_skill_expertise', name: 'Additional Skill Expertise', description: 'Choose another skill to use expertise with (up to 3 times).' },
  { id: 'altered_bearing', name: 'Altered Bearing', description: 'Quickly adjust appearance. Disguise minor details as move action (Disguise).' },
  { id: 'analyst', name: 'Analyst', description: 'Less likely to assign false motives. Don\'t infer false info even on failed Sense Motive (Sense Motive).' },
  { id: 'battlefield_medic', name: 'Battlefield Medic', description: 'Stop bleed/first aid and treat deadly wounds simultaneously (Medicine).' },
  { id: 'cautious_expertise', name: 'Cautious Expertise', description: 'When taking 20, roll expertise die twice and take better result.' },
  { id: 'convincing_liar', name: 'Convincing Liar', description: 'Roll expertise die after seeing result or reroll the check (Bluff).' },
  { id: 'cultural_savant', name: 'Cultural Savant', description: 'Recall knowledge about two topics with one check (Culture).' },
  { id: 'expert_attack', name: 'Expert Attack', description: 'Add expertise die to attack rolls with operative weapons.' },
  { id: 'inspired_medic', name: 'Inspired Medic', description: 'Grant temp HP when treating deadly wounds (Medicine).' },
  { id: 'rattling_presence', name: 'Rattling Presence', description: 'Demoralized foes are shaken for 1 extra round (Intimidate).' },
  { id: 'skilled_linguist', name: 'Skilled Linguist', description: 'Speak and understand any language after hearing it for 1 minute (Culture).' },
  { id: 'student_of_technology', name: 'Student of Technology', description: 'Reduce time to identify tech and recall knowledge (Engineering/Computers).' },
];

// Mystic Connections (selected at 1st level)
export const MYSTIC_CONNECTIONS = [
  { id: 'akashic', name: 'Akashic', description: 'Access universal knowledge from the Akashic Record. Skills: Culture, Mysticism.' },
  { id: 'empath', name: 'Empath', description: 'Sense and manipulate emotions. Skills: Perception, Sense Motive.' },
  { id: 'geneturge', name: 'Geneturge', description: 'Manipulate genetics and evolution. Skills: Life Science, Medicine.' },
  { id: 'healer', name: 'Healer', description: 'Mend wounds and cure ailments with divine power. Skills: Medicine, Mysticism.' },
  { id: 'melophile', name: 'Melophile', description: 'Channel power through music and sound. Skills: Culture, Profession (musician).' },
  { id: 'mindbreaker', name: 'Mindbreaker', description: 'Shatter minds and inflict mental anguish. Skills: Bluff, Intimidate.' },
  { id: 'overlord', name: 'Overlord', description: 'Dominate and control others\' actions. Skills: Diplomacy, Intimidate.' },
  { id: 'star_shaman', name: 'Star Shaman', description: 'Draw power from stars and void. Skills: Mysticism, Perception.' },
  { id: 'xenodruid', name: 'Xenodruid', description: 'Bond with alien creatures and ecosystems. Skills: Life Science, Survival.' },
];

// Technomancer Traditions (Magic Hacks can specialize in a tradition)
export const TECHNOMANCER_TRADITIONS = [
  { id: 'technomancy', name: 'Technomancy', description: 'Standard technomancer tradition blending magic and technology.' },
  { id: 'psychic_power', name: 'Psychic Power', description: 'Mental powers to manipulate technology and reality.' },
];

// Solarian Manifestations (selected at 1st level)
export const SOLARIAN_MANIFESTATIONS = [
  { id: 'solar_armor', name: 'Solar Armor', description: 'Manifest stellar power as protective armor. Grants AC bonus and special properties.' },
  { id: 'solar_weapon', name: 'Solar Weapon', description: 'Manifest stellar power as a melee weapon. Deals damage and has special properties.' },
  { id: 'solar_shield', name: 'Solar Shield', description: 'Manifest stellar power as shield. Provides AC and can bash.' },
];

// Vanguard Aspects (selected at 1st level)
export const VANGUARD_ASPECTS = [
  { id: 'boundary', name: 'Boundary', description: 'Shield allies and control battlefield. Emphasizes protection and positioning.' },
  { id: 'cascade', name: 'Cascade', description: 'Unleash stored entropy in devastating bursts. Focuses on damage dealing.' },
  { id: 'exergy', name: 'Exergy', description: 'Convert entropy to useful energy. Emphasizes sustainability and versatility.' },
  { id: 'inversion', name: 'Inversion', description: 'Reverse entropy effects on yourself and enemies. Focuses on debuffing foes.' },
  { id: 'metabolism', name: 'Metabolism', description: 'Use entropy to enhance bodily functions. Emphasizes personal enhancement.' },
];

// Nanocyte Faculties (selected at 1st level)
export const NANOCYTE_FACULTIES = [
  { id: 'absorption', name: 'Absorption', description: 'Body absorbs attacks. Nanites convert bullets, toxins, and magic into bursts of power.' },
  { id: 'discorporation', name: 'Discorporation', description: 'Nanites break down and reform your body. Extraordinary flexibility and amorphous form.' },
  { id: 'infestation', name: 'Infestation', description: 'Nanites burrow into foes, inflicting grievous injuries as they consume from the inside.' },
  { id: 'obliteration', name: 'Obliteration', description: 'Nanites tear apart enemies. Guide strikes for severe damage or explode to hurt multiple foes.' },
  { id: 'redirection', name: 'Redirection', description: 'Forceful nanites redirect attacks, move objects, and lend weapons devastating mass.' },
  { id: 'regeneration', name: 'Regeneration', description: 'Nanites swiftly knit flesh, stabilize life, and heal wounds for you and allies.' },
  { id: 'transmutation', name: 'Transmutation', description: 'Reconfigure cells on molecular scale to alter body composition and react to needs.' },
];

// Witchwarper Infinite Worlds (paradigm shifts at 1st level)  
export const WITCHWARPER_INFINITE_WORLDS = [
  { id: 'akashic', name: 'Akashic', description: 'Access alternate timelines and histories for knowledge.' },
  { id: 'dystopia', name: 'Dystopia', description: 'Pull from grim alternate realities to curse and debilitate.' },
  { id: 'harmony', name: 'Harmony', description: 'Pull from peaceful realities to heal and protect.' },
  { id: 'utopia', name: 'Utopia', description: 'Pull from idealized realities to enhance and improve.' },
];

// Precog Temporal Anomalies/Anchors (selected at 1st level)
export const PRECOG_ANCHORS = [
  { id: 'drift_crisis', name: 'Drift Crisis', description: 'Anchor in navigation through collapsing realities. Focus on mobility and escape.' },
  { id: 'fragmented_past', name: 'Fragmented Past', description: 'Anchor in shattered histories. Draw on alternate training and knowledge.' },
  { id: 'infinite_loop', name: 'Infinite Loop', description: 'Anchor in repeating moment. Retry actions and perfect techniques.' },
  { id: 'ruined_future', name: 'Ruined Future', description: 'Anchor in apocalyptic timeline. Gain survivor instincts and warnings.' },
  { id: 'unbound_time', name: 'Unbound Time', description: 'Anchor in fluid chronology. Manipulate action economy and initiative.' },
];

// Mechanic Styles (Exocortex vs Drone vs Experimental Prototype)
export const MECHANIC_STYLES = [
  { id: 'exocortex', name: 'Exocortex', description: 'Artificial processor enhances combat capabilities and grants tactical information.' },
  { id: 'drone', name: 'Drone', description: 'Build customizable robotic companion. Can be combat, hover, or stealth drone.' },
  { id: 'experimental_prototype', name: 'Experimental Prototype', description: 'Create experimental weaponized armor with unique modifications.' },
];

// Evolutionist Niches (selected at 1st level)
export const EVOLUTIONIST_NICHES = [
  { id: 'combat', name: 'Combat', description: 'Evolve for direct confrontation. Enhanced strength and natural weapons.' },
  { id: 'defense', name: 'Defense', description: 'Evolve defensive adaptations. Hardened hide, damage reduction.' },
  { id: 'mobility', name: 'Mobility', description: 'Evolve for speed and agility. Climb, swim, fly speeds.' },
  { id: 'perception', name: 'Perception', description: 'Evolve enhanced senses. Darkvision, blindsight, tremorsense.' },
  { id: 'skill', name: 'Skill', description: 'Evolve specialized appendages and organs for skill tasks.' },
];

// Helper function to get subclass options for a class
export function getSubclassOptions(classId) {
  const subclassMap = {
    biohacker: {
      type: 'field_of_study',
      name: 'Field of Study',
      options: BIOHACKER_FIELDS,
      level: 1
    },
    operative: {
      type: 'specialization',
      name: 'Specialization',
      options: OPERATIVE_SPECIALIZATIONS,
      level: 1
    },
    soldier: {
      type: 'fighting_style',
      name: 'Fighting Style',
      options: SOLDIER_FIGHTING_STYLES,
      level: 1
    },
    envoy: {
      type: 'expertise_talent',
      name: 'Expertise Talent',
      options: ENVOY_EXPERTISE_TALENTS,
      level: 3,
      repeating: true // Gets more at 7th, 11th, etc.
    },
    mystic: {
      type: 'connection',
      name: 'Connection',
      options: MYSTIC_CONNECTIONS,
      level: 1
    },
    technomancer: {
      type: 'tradition',
      name: 'Tradition',
      options: TECHNOMANCER_TRADITIONS,
      level: 1
    },
    solarian: {
      type: 'manifestation',
      name: 'Solar Manifestation',
      options: SOLARIAN_MANIFESTATIONS,
      level: 1
    },
    vanguard: {
      type: 'aspect',
      name: 'Vanguard Aspect',
      options: VANGUARD_ASPECTS,
      level: 1
    },
    nanocyte: {
      type: 'faculty',
      name: 'Faculty',
      options: NANOCYTE_FACULTIES,
      level: 1
    },
    witchwarper: {
      type: 'infinite_worlds',
      name: 'Infinite Worlds',
      options: WITCHWARPER_INFINITE_WORLDS,
      level: 1
    },
    precog: {
      type: 'anchor',
      name: 'Temporal Anchor',
      options: PRECOG_ANCHORS,
      level: 1
    },
    mechanic: {
      type: 'style',
      name: 'Mechanic Style',
      options: MECHANIC_STYLES,
      level: 1
    },
    evolutionist: {
      type: 'niche',
      name: 'Niche',
      options: EVOLUTIONIST_NICHES,
      level: 1
    }
  };

  return subclassMap[classId] || null;
}