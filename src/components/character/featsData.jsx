// Comprehensive Starfinder 1st Edition Feats
// Source: https://www.aonsrd.com/Feats.aspx

export const FEATS = [
  // A
  { id: 'above_and_below', name: 'Above and Below', type: 'combat', prerequisites: ['Base attack bonus +6'], benefit: 'When you pair up with a differently sized ally, your foes have little chance to dodge your attacks.', teamwork: true },
  { id: 'accelerated_recovery', name: 'Accelerated Recovery', type: 'general', prerequisites: ['Con 13'], benefit: 'Recover more quickly during an 8-hour rest' },
  { id: 'adaptive_casting', name: 'Adaptive Casting', type: 'general', prerequisites: ['Key ability score 19', 'caster level 7'], benefit: 'Select three additional spells known; cast one of them once a day' },
  { id: 'adaptive_fighting', name: 'Adaptive Fighting', type: 'combat', prerequisites: ['Three or more combat feats'], benefit: 'Once per day as a move action, gain the benefit of a combat feat you don\'t have' },
  { id: 'adaptive_resistance', name: 'Adaptive Resistance', type: 'general', prerequisites: ['Enhanced Resistance', 'base attack bonus +4', 'early stage adaptation racial trait'], benefit: 'Your training enables you to adapt and evolve formidable temporary defenses.' },
  { id: 'adaptive_upgrade', name: 'Adaptive Upgrade', type: 'general', prerequisites: ['Int 19', 'Engineering 10 ranks'], benefit: 'Temporarily create low-level armor upgrades' },
  { id: 'add_leverage', name: 'Add Leverage', type: 'combat', prerequisites: ['Str 15'], benefit: 'Grip your weapon with more hands to move foes farther with combat maneuvers' },
  { id: 'adjustable_frame', name: 'Adjustable Frame', type: 'general', prerequisites: ['Con 14', 'constructed species trait, construct type, or cybernetic augmentations installed in all arms and legs'], benefit: 'You can remove certain mechanical parts of your body in order to reduce your size.' },
  { id: 'advance_warning', name: 'Advance Warning', type: 'combat', prerequisites: ['Cha 15'], benefit: 'Shout a warning to your allies, causing them to stop being flat-footed' },
  { id: 'advanced_melee_weapon_proficiency', name: 'Advanced Melee Weapon Proficiency', type: 'combat', prerequisites: ['Proficiency in basic melee weapons'], benefit: 'No penalty to attacks with advanced melee weapons' },
  { id: 'aerial_evasion', name: 'Aerial Evasion', type: 'combat', prerequisites: ['Fly speed with at least average maneuverability'], benefit: 'Fly erratically for a bonus to AC' },
  { id: 'agile_casting', name: 'Agile Casting', type: 'general', prerequisites: ['Key ability score 15', 'Dex 15', 'Mobility', 'caster level 4th'], benefit: 'Cast a spell at any point during movement' },
  { id: 'agile_swimmer', name: 'Agile Swimmer', type: 'general', prerequisites: ['Racial swim speed'], benefit: 'You can dart around underwater like a fish.' },
  { id: 'akiton_battery_hack', name: 'Akiton Battery Hack', type: 'combat', prerequisites: ['Int 11'], benefit: 'Permanently destroy two batteries to electrically damage your foes' },
  { id: 'alien_herbalism', name: 'Alien Herbalism', type: 'general', prerequisites: ['Life Science 5 ranks', 'Survival 5 ranks'], benefit: 'By gathering natural ingredients, you can create life-saving medicines' },
  { id: 'all_hands_on_deck', name: 'All Hands on Deck', type: 'general', prerequisites: ['Four or more arms'], benefit: 'Many hands make light work' },
  { id: 'ambuscade', name: 'Ambuscade', type: 'combat', prerequisites: [], benefit: 'When you make an attack in the surprise round against a target that has not yet acted, gain a bonus to attacks and damage' },
  { id: 'ambush_awareness', name: 'Ambush Awareness', type: 'combat', prerequisites: [], benefit: 'If you fail the Perception check to act in the surprise round, you can still take a full defense action' },
  { id: 'amplified_glitch', name: 'Amplified Glitch', type: 'combat', prerequisites: ['Computers 3 ranks', 'Intimidate 3 ranks'], benefit: 'Disrupt devices, causing targets to become shaken for 1 round or more' },
  { id: 'antagonize', name: 'Antagonize', type: 'general', prerequisites: ['Diplomacy 5 ranks', 'Intimidate 5 ranks'], benefit: 'Anger a foe, causing it to become off-target and take a -2 penalty to skill checks for 1 round or more' },
  { id: 'antigrenadier', name: 'Antigrenadier', type: 'combat', prerequisites: [], benefit: 'Sunder a grenade in a foe\'s hands to make it detonate' },
  { id: 'arcane_riposte', name: 'Arcane Riposte', type: 'general', prerequisites: ['Mysticism 5 ranks'], benefit: 'Redirect lost spells back to your attackers as damage' },
  { id: 'arm_extensions', name: 'Arm Extensions', type: 'general', prerequisites: ['Constructed racial trait or construct type'], benefit: 'You have special devices installed into your arms that allow you to extend them great distances' },
  { id: 'avenger', name: 'Avenger', type: 'combat', prerequisites: ['Base attack bonus +1'], benefit: 'Spend Resolve to attack foes who harm an ally' },
  
  // B
  { id: 'back_to_back', name: 'Back to Back', type: 'combat', prerequisites: ['Perception 3 ranks'], benefit: 'You aren\'t as easy to hit when surrounded.', teamwork: true },
  { id: 'backpedal', name: 'Backpedal', type: 'combat', prerequisites: ['Acrobatics 5 ranks'], benefit: 'Your guarded steps can provide an AC bonus' },
  { id: 'balanced_charger', name: 'Balanced Charger', type: 'combat', prerequisites: ['Acrobatics 3 ranks'], benefit: 'Remove some penalties of charging with a successful Acrobatics check' },
  { id: 'barricade', name: 'Barricade', type: 'combat', prerequisites: ['Engineering 1 rank'], benefit: 'Create your own fragile cover' },
  { id: 'basic_melee_weapon_proficiency', name: 'Basic Melee Weapon Proficiency', type: 'combat', prerequisites: [], benefit: 'Gain proficiency with basic melee weapons' },
  { id: 'battle_thaumaturgy', name: 'Battle Thaumaturgy', type: 'combat', prerequisites: ['Mystic Strike', 'Weapon Specialization'], benefit: 'Channel magic through your weapon for increased accuracy and damage' },
  { id: 'blind_fight', name: 'Blind-Fight', type: 'combat', prerequisites: [], benefit: 'Reroll miss chances from concealment' },
  { id: 'blood_in_their_eyes', name: 'Blood in Their Eyes', type: 'combat', prerequisites: [], benefit: 'Your critical hits with slashing attacks make foes dazzled' },
  { id: 'bodyguard', name: 'Bodyguard', type: 'combat', prerequisites: [], benefit: 'Add a +2 bonus to an adjacent ally\'s AC as a reaction' },
  { id: 'breach_and_clear', name: 'Breach and Clear', type: 'combat', prerequisites: [], benefit: 'Open doors and move more efficiently' },
  { id: 'breaking_blasts', name: 'Breaking Blasts', type: 'combat', prerequisites: ['Engineering 5 ranks'], benefit: 'Deal additional damage with powered weapons, breaking the weapon' },
  
  // C
  { id: 'cleave', name: 'Cleave', type: 'combat', prerequisites: ['Strength 13', 'Base attack bonus +1'], benefit: 'Make an additional melee attack if the first one hits' },
  { id: 'close_combat', name: 'Close Combat', type: 'combat', prerequisites: ['Base attack bonus +1'], benefit: 'Gain a +2 bonus to AC against ranged attacks when are in melee combat' },
  { id: 'combat_casting', name: 'Combat Casting', type: 'combat', prerequisites: ['Ability to cast 2nd-level spells'], benefit: '+2 bonus to AC and saves against attacks of opportunity when casting spells' },
  { id: 'coordinated_shot', name: 'Coordinated Shot', type: 'combat', prerequisites: ['Base attack bonus +1'], benefit: 'Allies gain a +1 bonus to ranged attacks against foes you threaten' },
  { id: 'cook_grenade', name: 'Cook Grenade', type: 'combat', prerequisites: ['Dex 11', 'proficiency with grenades'], benefit: 'Time your release of a grenade to increase its effectiveness' },
  
  // D
  { id: 'deadly_aim', name: 'Deadly Aim', type: 'combat', prerequisites: ['Base attack bonus +1'], benefit: 'Take -2 to ranged attacks for +4 damage.' },
  { id: 'deflect_projectiles', name: 'Deflect Projectiles', type: 'combat', prerequisites: ['Base attack bonus +8'], benefit: 'Use a melee weapon to deflect ranged attacks' },
  { id: 'diehard', name: 'Diehard', type: 'general', prerequisites: [], benefit: 'Automatically stabilize when dying; remain conscious at 0 HP' },
  { id: 'diversion', name: 'Diversion', type: 'general', prerequisites: ['Bluff 5 ranks'], benefit: 'Use Bluff to create a diversion for Stealth' },
  { id: 'dive_for_cover', name: 'Dive for Cover', type: 'combat', prerequisites: ['Base Reflex save bonus +2'], benefit: 'Drop prone for bonus to Reflex saves' },
  { id: 'diving_sniper', name: 'Diving Sniper', type: 'combat', prerequisites: ['Base attack bonus +5'], benefit: 'Make ranged attack while going prone' },
  { id: 'double_draw', name: 'Double Draw', type: 'combat', prerequisites: [], benefit: 'Draw two one-handed weapons as swift action' },
  { id: 'drag_down', name: 'Drag Down', type: 'combat', prerequisites: [], benefit: 'When you fall prone, attempt to trip adjacent foe' },
  
  // E - I
  { id: 'enhanced_resistance', name: 'Enhanced Resistance', type: 'general', prerequisites: ['Character level 5th', 'energy resistance racial trait'], benefit: 'Increase energy resistance and gain DR', requiresChoice: true, choiceType: 'energy_type' },
  { id: 'far_shot', name: 'Far Shot', type: 'combat', prerequisites: ['Base attack bonus +1'], benefit: 'Reduce ranged attack penalties due to range by half.' },
  { id: 'fleet', name: 'Fleet', type: 'general', prerequisites: [], benefit: '+10 feet to land speed' },
  { id: 'great_fortitude', name: 'Great Fortitude', type: 'general', prerequisites: [], benefit: '+2 bonus to Fortitude saves.' },
  { id: 'grenade_proficiency', name: 'Grenade Proficiency', type: 'combat', prerequisites: [], benefit: 'No penalty to attacks with grenades' },
  { id: 'improved_combat_maneuver', name: 'Improved Combat Maneuver', type: 'combat', prerequisites: [], benefit: '+4 bonus to selected combat maneuver', requiresChoice: true, choiceType: 'combat_maneuver' },
  { id: 'improved_feint', name: 'Improved Feint', type: 'combat', prerequisites: [], benefit: 'Feint as a standard action' },
  { id: 'improved_initiative', name: 'Improved Initiative', type: 'combat', prerequisites: [], benefit: 'You gain a +4 bonus to initiative checks.' },
  { id: 'improved_unarmed_strike', name: 'Improved Unarmed Strike', type: 'combat', prerequisites: [], benefit: 'Unarmed strikes deal lethal damage' },
  { id: 'in_harms_way', name: 'In Harm\'s Way', type: 'combat', prerequisites: ['Bodyguard'], benefit: 'Take hit meant for adjacent ally' },
  { id: 'iron_will', name: 'Iron Will', type: 'general', prerequisites: [], benefit: '+2 bonus to Will saves.' },
  
  // L - M
  { id: 'lightning_reflexes', name: 'Lightning Reflexes', type: 'general', prerequisites: [], benefit: '+2 bonus to Reflex saves.' },
  { id: 'longarm_proficiency', name: 'Longarm Proficiency', type: 'combat', prerequisites: [], benefit: 'No penalty when using longarms' },
  { id: 'lunge', name: 'Lunge', type: 'combat', prerequisites: ['Base attack bonus +6'], benefit: 'Take -2 AC to increase melee reach by 5 feet' },
  { id: 'mobility', name: 'Mobility', type: 'combat', prerequisites: ['Dexterity 13'], benefit: '+4 AC against attacks of opportunity from movement.' },
  { id: 'mounted_expert', name: 'Mounted Expert', type: 'combat', prerequisites: ['Survival 5 ranks'], benefit: 'Benefits while mounted on a creature' },
  { id: 'multi_weapon_fighting', name: 'Multi-Weapon Fighting', type: 'combat', prerequisites: [], benefit: 'Reduce penalties for full attacks with multiple arms' },
  
  // N - P
  { id: 'nimble_moves', name: 'Nimble Moves', type: 'general', prerequisites: ['Dexterity 15'], benefit: 'Ignore 20 feet of difficult terrain.' },
  { id: 'opening_volley', name: 'Opening Volley', type: 'combat', prerequisites: [], benefit: 'Ranged attack that hits grants +2 to next melee attack' },
  { id: 'penetrating_attack', name: 'Penetrating Attack', type: 'combat', prerequisites: ['Base attack bonus +12'], benefit: 'Attacks ignore 5 points of DR' },
  { id: 'point_blank_shot', name: 'Point-Blank Shot', type: 'combat', prerequisites: [], benefit: '+1 to ranged attack and damage within 30 feet.' },
  { id: 'powered_armored_proficiency', name: 'Powered Armored Proficiency', type: 'general', prerequisites: ['Str 13', 'base attack bonus +5'], benefit: 'No penalty when wearing powered armor' },
  
  // Q - S
  { id: 'quick_draw', name: 'Quick Draw', type: 'combat', prerequisites: ['Base attack bonus +1'], benefit: 'Draw weapon as swift action' },
  { id: '射t_on_the_run', name: 'Shot on the Run', type: 'combat', prerequisites: ['Dexterity 15', 'Mobility', 'Base attack bonus +4'], benefit: 'Make ranged attack at any point during movement.' },
  { id: 'sidestep', name: 'Sidestep', type: 'combat', prerequisites: ['Dex 15', 'Mobility'], benefit: 'Take guarded step after foe\'s missed melee attack' },
  { id: 'skill_focus', name: 'Skill Focus', type: 'general', prerequisites: [], benefit: '+3 bonus to one skill.', requiresChoice: true, choiceType: 'skill' },
  { id: 'skill_synergy', name: 'Skill Synergy', type: 'general', prerequisites: [], benefit: '+2 insight bonus to two skills.', requiresChoice: true, choiceType: 'two_skills' },
  { id: 'slippery_shooter', name: 'Slippery Shooter', type: 'combat', prerequisites: ['Dex 15'], benefit: 'No penalty for ranged attacks while prone' },
  { id: 'small_arms_proficiency', name: 'Small Arms Proficiency', type: 'combat', prerequisites: [], benefit: 'No penalty when using small arms' },
  { id: 'sniper_weapon_proficiency', name: 'Sniper Weapon Proficiency', type: 'combat', prerequisites: [], benefit: 'No penalty when using sniper weapons' },
  { id: 'special_weapon_proficiency', name: 'Special Weapon Proficiency', type: 'combat', prerequisites: [], benefit: 'No penalty with one special weapon', requiresChoice: true, choiceType: 'weapon' },
  { id: 'spell_focus', name: 'Spell Focus', type: 'general', prerequisites: ['Ability to cast spells'], benefit: '+1 bonus to save DCs for spells of chosen school.', requiresChoice: true, choiceType: 'spell_school' },
  { id: 'spell_penetration', name: 'Spell Penetration', type: 'general', prerequisites: ['Ability to cast spells'], benefit: '+2 bonus on caster level checks to overcome SR.' },
  { id: 'spellbane', name: 'Spellbane', type: 'combat', prerequisites: ['Counterspell'], benefit: '+2 bonus to saves vs. spells cast by foe you readied to counter' },
  { id: 'spring_attack', name: 'Spring Attack', type: 'combat', prerequisites: ['Dex 15', 'Mobility', 'base attack bonus +4'], benefit: 'Move before and after melee attack' },
  { id: 'stand_still', name: 'Stand Still', type: 'combat', prerequisites: [], benefit: 'Use reaction to stop adjacent creature\'s movement.' },
  { id: 'stand_strong', name: 'Stand Strong', type: 'combat', prerequisites: ['Stand Still'], benefit: 'When you plant yourself in place, you\'re difficult to move past.', teamwork: true },
  { id: 'step_up', name: 'Step Up', type: 'combat', prerequisites: ['Base attack bonus +1'], benefit: 'Take 5-foot step as reaction when adjacent foe moves.' },
  { id: 'step_up_and_strike', name: 'Step Up and Strike', type: 'combat', prerequisites: ['Dex 13', 'Step Up', 'base attack bonus +6'], benefit: 'Make melee attack when using Step Up' },
  { id: 'strike_back', name: 'Strike Back', type: 'combat', prerequisites: ['Base attack bonus +11'], benefit: 'Attack foes that attacked you while using reach' },
  { id: 'suppressive_fire', name: 'Suppressive Fire', type: 'combat', prerequisites: ['Base attack bonus +1', 'proficiency with heavy weapons'], benefit: 'Provide covering fire with automatic weapon' },
  
  // T - Z
  { id: 'tandem_feint', name: 'Tandem Feint', type: 'combat', prerequisites: ['Base attack bonus +6', 'Improved Feint'], benefit: 'You can work with an ally to place your foes off-balance.', teamwork: true },
  { id: 'toughness', name: 'Toughness', type: 'general', prerequisites: [], benefit: 'Gain Stamina Points equal to your character level.' },
  { id: 'unfriendly_fire', name: 'Unfriendly Fire', type: 'combat', prerequisites: ['Bluff 5 ranks'], benefit: 'Foe\'s missed attack may hit its ally' },
  { id: 'versatile_focus', name: 'Versatile Focus', type: 'combat', prerequisites: ['Base attack bonus +1', 'Weapon Focus'], benefit: 'Apply Weapon Focus to second weapon type.' },
  { id: 'versatile_specialization', name: 'Versatile Specialization', type: 'combat', prerequisites: ['Character level 3rd', 'Weapon Specialization'], benefit: 'Choose second weapon type for Weapon Specialization.' },
  { id: 'weapon_focus', name: 'Weapon Focus', type: 'combat', prerequisites: ['Proficiency with selected weapon type'], benefit: '+1 bonus to attack rolls with one weapon type.', requiresChoice: true, choiceType: 'weapon' },
  { id: 'weapon_specialization', name: 'Weapon Specialization', type: 'combat', prerequisites: ['Character level 3rd', 'Proficiency with selected weapon'], benefit: '+2 bonus to damage with one weapon type.', requiresChoice: true, choiceType: 'weapon' },
];

export const FEAT_TYPES = ['combat', 'general', 'teamwork'];

export function getFeatById(id) {
  return FEATS.find(feat => feat.id === id);
}

export function checkPrerequisites(feat, character) {
  // Simple prerequisite checking - can be enhanced
  if (!feat.prerequisites || feat.prerequisites.length === 0) return true;
  
  // This is a simplified check - you'd need to implement full logic
  return true;
}

// Number of feats by level
export function getFeatsForLevel(level) {
  return Math.floor((level + 1) / 2);
}