// Comprehensive Class-specific ability options for selection during level-up
// Source: https://www.aonsrd.com/

export const MECHANIC_TRICKS = [
  { id: 'armor_expert', name: 'Armor Expert', description: 'You can don or remove armor in half the time. At 5th level, spend 1 RP for temporary proficiency with heavy/powered armor for hours equal to half your level.' },
  { id: 'combat_boost', name: 'Combat Boost', description: 'Your AI increases your combat capabilities. Gain a bonus combat feat (exocortex only).' },
  { id: 'distracting_hack', name: 'Distracting Hack', description: 'Hack a computer within 30 feet to distract a foe. Functions as feint using Computers instead of Bluff.' },
  { id: 'energy_shield', name: 'Energy Shield', description: 'Activate an energy shield providing temporary HP equal to Int mod + mechanic level for 1 minute per level.' },
  { id: 'hack_directory', name: 'Hack Directory', description: 'Take 20 on Computers checks to hack systems.' },
  { id: 'neural_shunt', name: 'Neural Shunt', description: 'Hack a computer as part of move action to gain access.' },
  { id: 'overcharge', name: 'Overcharge', description: 'Overcharge and attack with a ranged energy or powered weapon dealing extra damage.' },
  { id: 'overload_weapon', name: 'Overload Weapon', description: 'As a move action, use a battery to power a melee weapon, giving it +2 to damage and powered property.' },
  { id: 'quick_patch', name: 'Quick Patch', description: 'As a standard action, restore Hit Points to your drone or an adjacent construct/object.' },
  { id: 'quick_repair', name: 'Quick Repair', description: 'Halve the time to repair items or constructs (minimum 1 round).' },
  { id: 'repair_drone', name: 'Repair Drone', description: 'Repair your drone as a standard action, restoring HP equal to twice your mechanic level (drone only).' },
  { id: 'visual_data_processor', name: 'Visual Data Processor', description: 'Your AI helps you process visual data. Gain darkvision 60 ft. or increase existing darkvision by 60 ft.' },
  { id: 'drone_meld', name: 'Drone Meld', description: 'Merge your drone into your body, gaining one of its mods as a personal benefit (drone only).' },
  { id: 'holographic_projector', name: 'Holographic Projector', description: 'Your custom rig can project holograms for distraction or communication.' },
  { id: 'invisibility_bypass_processor', name: 'Invisibility Bypass Processor', description: 'You gain blindsight 60 ft., but only to notice invisible creatures (exocortex only).' },
  { id: 'scoutbot', name: 'Scoutbot', description: 'You build a tiny drone that can scout ahead and share data with you (drone only).' },
];

export const OPERATIVE_EXPLOITS = [
  { id: 'alien_archive', name: 'Alien Archive', description: 'Double operative\'s edge when identifying creatures. Gain +2 to trick attacks against identified creatures.' },
  { id: 'bleeding_shot', name: 'Bleeding Shot', description: 'Your trick attack causes 1d6 bleed damage.' },
  { id: 'certainty', name: 'Certainty', description: 'Spend 1 RP to reroll one of your specialization\'s associated skill checks.' },
  { id: 'cloaking_field', name: 'Cloaking Field', description: 'Become invisible as a standard action for 1 round per operative level (usable once per day).' },
  { id: 'combat_trick', name: 'Combat Trick', description: 'Gain a bonus combat feat.' },
  { id: 'concealed_weaponry', name: 'Concealed Weaponry', description: 'Double operative\'s edge to hide small objects. Draw hidden weapons as quickly as normal weapons.' },
  { id: 'debilitating_sniper', name: 'Debilitating Sniper', description: 'You can use trick attack with sniper weapons.' },
  { id: 'efficient_forager', name: 'Efficient Forager', description: 'Use Survival for Life Science to identify creatures. Forage at full speed and provide for extra creatures.' },
  { id: 'field_treatment', name: 'Field Treatment', description: 'Treat deadly wounds with Medicine in half the time (min 1 minute). Can use Med kits to grant temp HP.' },
  { id: 'holographic_clone', name: 'Holographic Clone', description: 'Create holographic duplicates of yourself that enemies can waste attacks on.' },
  { id: 'improved_quick_movement', name: 'Improved Quick Movement', description: 'Your quick movement bonus increases by 10 feet.' },
  { id: 'jack_of_all_trades', name: 'Jack of All Trades', description: 'Use all skills untrained and gain +2 to untrained skill checks.' },
  { id: 'knee_shot', name: 'Knee Shot', description: 'Your trick attack reduces target\'s speed by 10 feet for 1d4 rounds.' },
  { id: 'nightvision', name: 'Nightvision', description: 'Gain darkvision 60 ft. or increase existing darkvision by 60 ft.' },
  { id: 'quick_disguise', name: 'Quick Disguise', description: 'Change disguise as full action or 1d3 minutes for elaborate disguise.' },
  { id: 'uncanny_mobility', name: 'Uncanny Mobility', description: 'When using trick attack, your movement doesn\'t provoke attacks of opportunity from your target.' },
  { id: 'uncanny_pilot', name: 'Uncanny Pilot', description: 'Your operative\'s edge applies to Piloting checks. Can take 10/20 with Piloting in starship combat.' },
  { id: 'versatile_movement', name: 'Versatile Movement', description: 'Gain a climb or swim speed equal to half your land speed.' },
];

export const ENVOY_IMPROVISATIONS = [
  { id: 'a_few_more_steps', name: 'A Few More Steps!', description: 'As a reaction, when ally drops to 0 HP, they stay conscious but nauseated until end of next turn. At 6th level, they become staggered instead.' },
  { id: 'brace_yourselves', name: 'Brace Yourselves', description: 'As move action, you and allies gain +1 morale to AC when adjacent to ally vs one enemy. At 6th, spend 1 RP for all enemies within 60 ft.' },
  { id: 'clever_feint', name: 'Clever Feint', description: 'Feint as move action with Bluff against enemy within 60 feet. Make them flat-footed against you; on success, flat-footed vs allies too. At 6th, spend 1 RP to treat fail as success.' },
  { id: 'coordinated_reload', name: 'Coordinated Reload', description: 'As move action, grant ally a move action to reload/draw weapon. You can also reload/draw as part of this. Adjacent ally can use your ammo.' },
  { id: 'dispiriting_taunt', name: 'Dispiriting Taunt', description: 'Taunt enemy with Intimidate. On fail, they\'re off-target; on success, shaken until end of next turn. At 6th, spend 1 RP to treat fail as success.' },
  { id: 'dont_quit', name: 'Don\'t Quit', description: 'Ally ignores one condition until start of your next turn. At 6th, more conditions. At 12th, spend 1 RP to remove it.' },
  { id: 'expanded_attunement', name: 'Expanded Attunement', description: 'Use beneficial mind-affecting improvisations on constructs, robots, and undead.' },
  { id: 'get_em', name: 'Get \'Em', description: 'As move action, designate a foe. Allies gain +1 morale bonus to attacks against that target.' },
  { id: 'inspiring_boost', name: 'Inspiring Boost', description: 'As standard action, restore SP to an ally within 30 feet equal to 2d8 + Cha mod.' },
  { id: 'not_in_the_face', name: 'Not in the Face', description: 'As move action, grant ally within 60 ft +2 to AC vs next attack. At 6th, can affect all allies and spend 1 RP for +4.' },
  { id: 'universal_expression', name: 'Universal Expression', description: 'Convey basic ideas and emotions to any creature regardless of language.' },
  { id: 'watch_out', name: 'Watch Out', description: 'As reaction, shout warning to ally about to be attacked, granting +4 to AC vs that attack.' },
  { id: 'draw_fire', name: 'Draw Fire', description: 'As move action, you become focus of enemy\'s ire. Foes take -2 to attacks vs allies, you take -2 to AC.' },
  { id: 'hurry', name: 'Hurry', description: 'As standard action, grant ally an extra standard action they can use before your next turn.' },
  { id: 'watch_your_step', name: 'Watch Your Step', description: 'As move action, designate 10-ft square. Allies don\'t trigger traps in that square.' },
  { id: 'quick_inspiring_boost', name: 'Quick Inspiring Boost', description: 'Use inspiring boost as move action instead of standard (requires Inspiring Boost).' },
];

export const TECHNOMANCER_MAGIC_HACKS = [
  { id: 'empowered_weapon', name: 'Empowered Weapon', description: 'As move action, expend spell slot to enhance weapon. Gain bonus to attacks equal to spell level, +1d6 damage per spell level.' },
  { id: 'energize_spell', name: 'Energize Spell', description: 'Once per day as move action, use battery (20 charges per spell level) to cast spell without using spell slot.' },
  { id: 'fabricate_tech', name: 'Fabricate Tech', description: 'Create temporary technological items from raw energy by expending spell slots.' },
  { id: 'harmful_spells', name: 'Harmful Spells', description: 'Your offensive spells deal +1 damage per die rolled (max +10 at 20th level).' },
  { id: 'quick_scan', name: 'Quick Scan', description: 'Use spell cache to scan technological items more quickly. Identify tech as standard action instead of full round.' },
  { id: 'robot_influence', name: 'Robot Influence', description: 'Mind-affecting spells can affect robots and technological constructs (Will negates).' },
  { id: 'spell_countermeasures', name: 'Spell Countermeasures', description: 'Use custom rig to gain +2 to saves vs technologist or hybrid tech and vs spells targeting tech.' },
  { id: 'tech_countermeasures', name: 'Tech Countermeasures', description: '+2 insight bonus to saves vs tech and hybrid items.' },
  { id: 'charging_jolt', name: 'Charging Jolt', description: 'As standard action, touch battery/power cell to recharge 10 charges per caster level (once per day per battery).' },
  { id: 'spell_grenade', name: 'Spell Grenade', description: 'Expend 2 spell slots to cast area spell as grenade with extended range and radius.' },
  { id: 'selective_targeting', name: 'Selective Targeting', description: 'Exclude targets equal to spell level from area spells you cast.' },
  { id: 'countertech', name: 'Countertech', description: 'As reaction, expend spell slot to disrupt tech weapon attack against you, halving damage on success.' },
  { id: 'debug_spell', name: 'Debug Spell', description: 'When you cast spell that fails due to spell resistance, regain spell slot (once per day).' },
  { id: 'eternal_spell', name: 'Eternal Spell', description: 'Choose one 1st-level spell. Cast it at will as spell-like ability.' },
  { id: 'flash_teleport', name: 'Flash Teleport', description: 'Teleport short distance as part of move action (exocortex only).' },
];

export const SOLARIAN_REVELATIONS = [
  { id: 'black_hole', name: 'Black Hole', type: 'graviton', zenith: true, description: 'When fully graviton-attuned, pull creatures within 20 ft closer (Fort negates). Become unattuned after use.' },
  { id: 'supernova', name: 'Supernova', type: 'photon', zenith: true, description: 'When fully photon-attuned, explode dealing 1d6 fire + 1d6 per level to all within 10 ft (Reflex half). Become unattuned after use.' },
  { id: 'dark_matter', name: 'Dark Matter', type: 'graviton', description: 'Increase your reach by 5 feet when making melee attacks while graviton-attuned.' },
  { id: 'defy_gravity', name: 'Defy Gravity', type: 'graviton', description: 'Gain fly speed equal to land speed (average maneuverability) while graviton-attuned.' },
  { id: 'flare', name: 'Flare', type: 'photon', description: 'As standard action, create burst of light to dazzle creatures within 5 feet (Fort negates).' },
  { id: 'gravity_anchor', name: 'Gravity Anchor', type: 'graviton', description: 'Become harder to move. Gain +4 to AC vs bull rush, reposition, trip. Increase by +1 per 6 levels.' },
  { id: 'gravity_boost', name: 'Gravity Boost', type: 'graviton', description: 'Increase/reduce apparent weight. Gain bonuses to jumping or reduce falling damage.' },
  { id: 'gravity_hold', name: 'Gravity Hold', type: 'graviton', description: 'As standard action, attempt to hold creature in place with gravitational force (Fort negates).' },
  { id: 'plasma_sheath', name: 'Plasma Sheath', type: 'photon', description: 'Creatures hitting you with natural weapons/unarmed strikes take 1d4 fire damage (increases with level).' },
  { id: 'radiation', name: 'Radiation', type: 'photon', description: 'As standard action, emit harmful radiation. Creatures within 5 ft become sickened (Fort negates).' },
  { id: 'stellar_rush', name: 'Stellar Rush', type: 'photon', description: 'Gain +10 ft speed when photon-attuned. Can charge without penalties.' },
  { id: 'blazing_orbit', name: 'Blazing Orbit', type: 'photon', description: 'Move action to orbit target, dealing fire damage and potentially setting them on fire.' },
  { id: 'crush', name: 'Crush', type: 'graviton', description: 'As standard action, increase gravity on target, dealing bludgeoning damage (Fort half).' },
  { id: 'corona', name: 'Corona', type: 'photon', description: 'Shed bright light. When photon-attuned, allies in light gain +1 morale bonus to saves vs fear.' },
  { id: 'glow_of_life', name: 'Glow of Life', type: 'photon', description: 'When photon-attuned, you and allies within 10 ft gain fast healing 1.' },
  { id: 'gravity_surge', name: 'Gravity Surge', type: 'graviton', description: 'As full action, fly your speed and make melee attack with +4 bonus (requires Defy Gravity).' },
];

export const NANOCYTE_KNACKS = [
  { id: 'cloud_coating', name: 'Cloud Coating', description: 'Coat 5-ft square with nanites as standard action, affecting creatures that enter.' },
  { id: 'elusive_nanites', name: 'Elusive Nanites', description: 'Nanites anticipate attacks. Gain +1 enhancement bonus to AC.' },
  { id: 'extended_range', name: 'Extended Range', description: 'Increase gear array range increment by 20 feet.' },
  { id: 'frenzied_nanites', name: 'Frenzied Nanites', description: 'Nanites attack with abandon. Gain +1 bonus to damage with gear array.' },
  { id: 'hyper_nanites', name: 'Hyper Nanites', description: 'Nanites move faster. Increase speed by 10 feet.' },
  { id: 'recursive_nanites', name: 'Recursive Nanites', description: 'Nanites repair themselves. Gain fast healing 1 (increases with level).' },
  { id: 'resistant_nanites', name: 'Resistant Nanites', description: 'Gain energy resistance 5 to chosen energy type.' },
  { id: 'shielding_nanites', name: 'Shielding Nanites', description: 'Nanites form protective barrier. Gain DR 1/— (increases with level).' },
  { id: 'vampiric_nanites', name: 'Vampiric Nanites', description: 'When damaging living creature with gear array, gain temp HP equal to Con mod.' },
];

export const NANOCYTE_PRIMARY_FACULTIES = [
  { id: 'obliteration', name: 'Obliteration', description: 'Nanites excel at destructive combat. Gear array gains +2 damage and you gain weapon specialization with it. Construct your nanites to optimize damage output.' },
  { id: 'regeneration', name: 'Regeneration', description: 'Nanites focus on self-repair and durability. Gain fast healing 3 (increases with level). Your nanites prioritize keeping you alive and functional.' },
  { id: 'redirection', name: 'Redirection', description: 'Nanites redirect incoming attacks. When hit, you can spend 1 RP to gain DR 5/— against that attack (increases). Nanites form reactive barriers.' },
  { id: 'augmentation', name: 'Augmentation', description: 'Nanites enhance your physical form. Gain +2 enhancement bonus to Strength or Dexterity. At 7th level, gain bonus to both. Nanites integrate with your biology.' },
];

export const BIOHACKER_THEOREMS = [
  { id: 'bleeding_biohack', name: 'Bleeding Biohack', description: 'Inhibitor causes 1d6 bleed damage (scales with level).' },
  { id: 'energetic_biohack', name: 'Energetic Biohack', description: 'Booster grants resistance 5 to one energy type (scales with level).' },
  { id: 'hampering_biohack', name: 'Hampering Biohack', description: 'Inhibitor reduces target speed by 10 feet.' },
  { id: 'quick_change', name: 'Quick Change', description: 'Change readied biohacks more quickly as move action.' },
  { id: 'treat_condition', name: 'Treat Condition', description: 'Booster suppresses shaken, sickened, or fatigued for 10 min per level.' },
  { id: 'toxin_adaptation', name: 'Toxin Adaptation', description: 'Booster grants +2 to saves vs poisons/diseases for 10 min per level.' },
  { id: 'painful_injection', name: 'Painful Injection', description: 'Inhibitor causes target to become sickened for 1 round (Fort negates).' },
  { id: 'counteract_biohack', name: 'Counteract Biohack', description: 'Use booster to attempt to end ongoing effect on ally.' },
];

export const SOLDIER_GEAR_BOOSTS = [
  { id: 'armored_advantage', name: 'Armored Advantage', description: 'Gain +1 to KAC while wearing armor.' },
  { id: 'brutal_blast', name: 'Brutal Blast', description: 'Increase damage of grenades and explosive weapons by +1 per die.' },
  { id: 'combat_stamina', name: 'Combat Stamina', description: 'Recover 1 Stamina Point when you score a critical hit.' },
  { id: 'flash_freeze', name: 'Flash Freeze', description: 'When you deal cold damage, target is entangled (Reflex negates).' },
  { id: 'hammer_fist', name: 'Hammer Fist', description: 'Your unarmed strikes deal 1d6 damage and are not archaic.' },
  { id: 'melee_striker', name: 'Melee Striker', description: '+1 insight bonus to melee attack rolls.' },
  { id: 'powered_armor_jock', name: 'Powered Armor Jock', description: 'Reduce armor check penalty by 1 when wearing powered armor.' },
  { id: 'ray_accuracy', name: 'Ray Accuracy', description: 'No penalty when making ranged attacks in melee.' },
  { id: 'sonic_resonance', name: 'Sonic Resonance', description: 'When you deal sonic damage, target is deafened (Fort negates).' },
  { id: 'anchoring_arcana', name: 'Anchoring Arcana', description: 'Affected by beneficial spells for +1 round per 3 soldier levels.' },
];

export const ENVOY_EXPERTISE_TALENTS = [
  { id: 'altered_bearing', name: 'Altered Bearing', description: 'Add 1d6 insight bonus to Disguise checks. At 9th level, 1d8+1.' },
  { id: 'convincing_liar', name: 'Convincing Liar', description: 'Reduce DC of Bluff checks to lie by 5.' },
  { id: 'cultural_savant', name: 'Cultural Savant', description: 'Add 1d6 insight bonus to Culture checks. At 9th level, 1d8+1.' },
  { id: 'quick_dispiriting_taunt', name: 'Quick Dispiriting Taunt', description: 'Use dispiriting taunt as move action (requires Dispiriting Taunt).' },
  { id: 'skill_focus', name: 'Skill Focus', description: 'Choose skill. Add 3 to skill checks with that skill.' },
  { id: 'surgeon', name: 'Surgeon', description: 'Add 1d6 insight bonus to Medicine checks to treat deadly wounds. At 9th level, 1d8+1.' },
  { id: 'expert_trainer', name: 'Expert Trainer', description: 'Reduce training time for skills or languages by half.' },
  { id: 'inspired_medic', name: 'Inspired Medic', description: 'Allies you treat with Medicine heal +50% HP.' },
];

export const VANGUARD_DISCIPLINES = [
  { id: 'agile_bodyguard', name: 'Agile Bodyguard', description: 'Use Acrobatics instead of Athletics for bodyguard combat maneuver.' },
  { id: 'antagonize', name: 'Antagonize', description: 'As move action, antagonize foe within 30 ft to focus attacks on you.' },
  { id: 'draw_fire', name: 'Draw Fire', description: 'Draw fire from enemies, causing them to attack you instead of allies.' },
  { id: 'entropic_strike_boost', name: 'Entropic Strike Boost', description: 'Your entropic strike deals +1d4 additional damage (scales with level).' },
  { id: 'reactive_armor', name: 'Reactive Armor', description: 'When hit by melee, spend Entropy Points to add to AC against that attack.' },
  { id: 'uncanny_agility', name: 'Uncanny Agility', description: 'Gain +2 to Reflex saves and can\'t be caught flat-footed.' },
  { id: 'inured_to_pain', name: 'Inured to Pain', description: 'When taking HP damage, you can spend 1 Entropy Point to gain DR 1/— vs that attack (scales).' },
  { id: 'momentum', name: 'Momentum', description: 'When you charge, you can turn up to 90 degrees during movement.' },
];

export const WITCHWARPER_PARADIGM_SHIFTS = [
  { id: 'charming_veneer', name: 'Charming Veneer', description: 'Draw on alternate reality for +2 to Diplomacy. At 8th, can reroll failed Diplomacy (1/day).' },
  { id: 'destructive_resistance', name: 'Destructive Resistance', description: 'Pull defensive energy from alternate realities. Gain resistance 5 to one energy type (increases).' },
  { id: 'eldritch_secret', name: 'Eldritch Secret', description: 'Learn spell from another spellcasting class\'s list.' },
  { id: 'phase_shot', name: 'Phase Shot', description: 'Ranged attacks briefly phase out, ignoring cover and concealment.' },
  { id: 'reality_stutter', name: 'Reality Stutter', description: 'Cause time to stutter, giving extra move action (1/day, costs 1 RP).' },
  { id: 'substitute_mind', name: 'Substitute Mind', description: 'Use mental faculties of alternate you. Gain +2 to Will saves.' },
  { id: 'build_to_last', name: 'Build to Last', description: 'Infinite worlds ability grants temp HP equal to 2× witchwarper level instead of 1×.' },
  { id: 'resistant_aegis', name: 'Resistant Aegis', description: 'When granting resistance with infinite worlds, grant resistance to two energy types instead of one.' },
];

export const PRECOG_PARADOXES = [
  { id: 'cascade_option', name: 'Cascade Option', description: 'When ally fails skill check, grant reroll by revealing alternate timeline (costs 1 RP).' },
  { id: 'déjà_vu', name: 'Déjà Vu', description: 'Cause enemy to repeat action (Will negates). Costs 1 RP.' },
  { id: 'fragmented_past', name: 'Fragmented Past', description: 'Draw on training from alternate timelines. Temp proficiency in skill or weapon for 10 min (costs 1 RP).' },
  { id: 'temporal_aggression', name: 'Temporal Aggression', description: 'Accelerate time for yourself, gaining extra attack as part of full attack (costs 1 RP, 1/day).' },
  { id: 'time_slip', name: 'Time Slip', description: 'Briefly slip out of time, becoming incorporeal for 1 round (costs 1 RP, 1/day).' },
  { id: 'uncanny_dodge', name: 'Uncanny Dodge', description: 'Glimpse attack before it happens. Gain +2 insight to AC (costs 1 RP as reaction).' },
  { id: 'looping_strikes', name: 'Looping Strikes', description: 'When you miss with attack, you can reroll (1/day).' },
  { id: 'prescient_defense', name: 'Prescient Defense', description: 'Add Wisdom mod to AC as insight bonus.' },
];

export const MYSTIC_CONNECTION_POWERS = {
  akashic: [
    { id: 'akashic_knowledge', name: 'Akashic Knowledge', level: 1, description: 'Access Akashic Record. Gain insight bonus equal to mystic level on skill checks (1/day per skill).' },
    { id: 'memory_meld', name: 'Memory Meld', level: 3, description: 'Share memories and knowledge with allies telepathically.' },
    { id: 'peer_into_the_future', name: 'Peer into the Future', level: 6, description: 'Gain limited precognitive abilities. Roll d20 for ally\'s check (1/day).' }
  ],
  empath: [
    { id: 'empathy', name: 'Empathy', level: 1, description: 'Sense emotions of creatures within 60 ft. Gain +2 insight to Perception and Sense Motive vs them.' },
    { id: 'greater_mindlink', name: 'Greater Mindlink', level: 3, description: 'Use mindlink on up to 6 creatures at once.' },
    { id: 'empathic_mastery', name: 'Empathic Mastery', level: 6, description: 'Share emotions with others. Suppress fear/emotion effects in 30 ft radius.' }
  ],
  healer: [
    { id: 'healing_touch', name: 'Healing Touch', level: 1, description: 'Heal 1d8 + mystic level HP with touch (3/day + Wis mod).' },
    { id: 'lifelink', name: 'Lifelink', level: 3, description: 'Link with allies to share damage and healing.' },
    { id: 'remove_affliction', name: 'Remove Affliction', level: 6, description: 'Cure diseases, poisons, curses (Mysticism check vs DC).' }
  ],
  mindbreaker: [
    { id: 'mental_anguish', name: 'Mental Anguish', level: 1, description: 'Cause mental pain. Deal +1d4 damage with mind-affecting spells (increases).' },
    { id: 'backlash', name: 'Backlash', level: 3, description: 'When damaged, reflect 1d6 + mystic level mental damage to attacker.' },
    { id: 'sow_doubt', name: 'Sow Doubt', level: 6, description: 'Fill enemy mind with doubt. Target shaken, can\'t take reactions (Will negates).' }
  ],
  overlord: [
    { id: 'empowered_weapon', name: 'Empowered Weapon', level: 1, description: 'Empower weapon with psychic energy. Grant ally +1 insight to attacks for 1 round.' },
    { id: 'forced_amity', name: 'Forced Amity', level: 3, description: 'Force creatures to become friendly (Will negates).' },
    { id: 'greater_forced_amity', name: 'Greater Forced Amity', level: 6, description: 'Forced amity affects more creatures and lasts longer.' }
  ],
  star_shaman: [
    { id: 'starlight_form', name: 'Starlight Form', level: 1, description: 'Gain cold resistance 5 and emit light like torch.' },
    { id: 'walk_the_void', name: 'Walk the Void', level: 3, description: 'Survive in vacuum. Gain +1 to AC and Reflex in zero-g.' },
    { id: 'meteor_form', name: 'Meteor Form', level: 6, description: 'Transform into meteor to ram enemies for 3d6 + 1.5× mystic level damage.' }
  ],
  xenodruid: [
    { id: 'speak_with_animals', name: 'Speak with Animals', level: 1, description: 'Speak with and understand animals at will.' },
    { id: 'animal_adaptation', name: 'Animal Adaptation', level: 3, description: 'Gain animal features: climb 20 ft, swim 20 ft, or low-light vision for 10 min per level.' },
    { id: 'beast_form', name: 'Beast Form', level: 6, description: 'Transform into animal using polymorph (3/day, 1 min per level).' }
  ]
};

// Helper function to get available options for a class at a specific level
export function getClassAbilityOptions(classId, level, characterData = {}) {
  const abilitySchedule = {
    mechanic: { 
      ability: 'mechanic_trick',
      levels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      options: MECHANIC_TRICKS
    },
    operative: {
      ability: 'operative_exploit',
      levels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      options: OPERATIVE_EXPLOITS
    },
    nanocyte: {
      ability: 'nanocyte_knack',
      levels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      options: NANOCYTE_KNACKS
    },
    solarian: {
      ability: 'stellar_revelation',
      levels: [1, 2, 4, 6, 9, 10, 12, 14, 17, 18, 20],
      options: SOLARIAN_REVELATIONS
    },
    envoy: {
      ability: 'envoy_improvisation',
      levels: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      options: ENVOY_IMPROVISATIONS
    },
    biohacker: {
      ability: 'biohacker_theorem',
      levels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      options: BIOHACKER_THEOREMS
    },
    vanguard: {
      ability: 'vanguard_discipline',
      levels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      options: VANGUARD_DISCIPLINES
    },
    witchwarper: {
      ability: 'paradigm_shift',
      levels: [1, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      options: WITCHWARPER_PARADIGM_SHIFTS
    },
    precog: {
      ability: 'focal_paradox',
      levels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      options: PRECOG_PARADOXES
    },
    technomancer: {
      ability: 'magic_hack',
      levels: [1, 2, 5, 8, 11, 14, 17, 20],
      options: TECHNOMANCER_MAGIC_HACKS
    },
    soldier: {
      ability: 'gear_boost',
      levels: [3, 7, 11, 15, 19],
      options: SOLDIER_GEAR_BOOSTS
    }
  };

  // Special handling for Nanocyte Primary Faculty (gained at level 1)
  if (classId === 'nanocyte' && level === 1) {
    return {
      abilityType: 'primary_faculty',
      options: NANOCYTE_PRIMARY_FACULTIES,
      displayName: 'Primary Faculty'
    };
  }

  // Special handling for Envoy expertise talents (gained at levels 5, 9, 13, 17)
  if (classId === 'envoy' && [5, 9, 13, 17].includes(level)) {
    return {
      abilityType: 'expertise_talent',
      options: ENVOY_EXPERTISE_TALENTS,
      displayName: 'Expertise Talent'
    };
  }

  const schedule = abilitySchedule[classId];
  if (!schedule) return null;

  if (!schedule.levels.includes(level)) return null;

  return {
    abilityType: schedule.ability,
    options: schedule.options,
    displayName: schedule.ability.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  };
}