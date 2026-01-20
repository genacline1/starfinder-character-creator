// Comprehensive Class-specific ability options for selection during level-up
// Source: https://www.aonsrd.com/

export const MECHANIC_TRICKS = [
  {
    id: 'armor_expert',
    name: 'Armor Expert',
    levelRequired: 2,
    shortDescription: 'Don or remove armor faster and gain bonuses when adjusting armor for different sizes.',
    fullDescription:
      'You are an expert in working with and adjusting armor of various types and sizes. You can don or remove armor in half the time normally required to do so. When adjusting armor for a different sized creature, you gain a +4 circumstance bonus to your Engineering check. Finally, at 5th level, you can spend 1 Resolve Point to gain temporary proficiency with a particular suit of heavy or powered armor. This proficiency lasts for a number of hours equal to your half your level.',
    source: { book: 'Starfinder Enhanced', page: 46 },
    pfsLegal: true,
  },
  {
    id: 'attentive_tampering',
    name: 'Attentive Tampering',
    levelRequired: 2,
    shortDescription: 'You leave no additional traces when disabling devices.',
    fullDescription:
      'You have a soft touch and naturally conceal signs of your tampering. Do not increase the DC of Engineering checks to hide your attempts to disable a device.',
    source: { book: 'Starfinder #25: The Chimera Mystery', page: 48 },
    pfsLegal: true,
  },
  {
    id: 'calibrate_speed',
    name: 'Calibrate Speed',
    levelRequired: 2,
    shortDescription: 'Improve or negate your experimental armor’s speed penalty.',
    fullDescription:
      'Your experimental armor prototype enables faster movement. Your experimental armor’s speed adjustment is increased by 5 feet (maximum 0 feet) while you’re wearing it. At 8th level, you instead ignore the armor’s speed adjustment. You must have an experimental armor prototype to select this mechanic trick.',
    source: { book: 'Galaxy Exploration Manual', page: 18 },
    pfsLegal: true,
    prerequisites: ['experimental_armor_prototype'],
  },
  {
    id: 'combat_boost',
    name: 'Combat Boost',
    levelRequired: 2,
    shortDescription: 'Gain a bonus combat feat through your exocortex.',
    fullDescription:
      'Your artificial intelligence increases your combat capabilities. You gain a bonus combat feat and must meet all of its prerequisites. You can take this trick multiple times to attain different combat feats. You must have an exocortex to learn this trick.',
    source: { book: 'Starfinder Enhanced', page: 46 },
    pfsLegal: true,
    repeatable: true,
    prerequisites: ['mechanic_trick_exocortex'],
  },
  {
    id: 'combat_maintenance',
    name: 'Combat Maintenance',
    levelRequired: 2,
    shortDescription: 'Temporarily increase an item’s hardness as a move action or reaction.',
    fullDescription:
      'As a move action, you can fortify an item you touch against attack. The item’s hardness increases by an amount equal to your mechanic level (to a maximum of double its normal hardness) for 1 round. If the item is one you are wearing or holding, you can use this ability as a purely defensive reaction to an attack against it.',
    source: { book: 'Starfinder Armory', page: 146 },
    pfsLegal: true,
  },
  {
    id: 'concealed_device',
    name: 'Concealed Device',
    levelRequired: 2,
    shortDescription: 'Hide technological items inside other devices.',
    fullDescription:
      'In a process that requires an hour of uninterrupted work, you can hide a non-consumable piece of technological gear inside a larger technological object (something of higher bulk). For instance, you can conceal a personal comm unit inside a pair of hoverskates or a detonator inside a basic medkit. The concealed item easily passes casual inspection, but someone using a scanner or performing a close inspection can discover it with a successful Perception check (DC = 10 + your total Engineering skill modifier – the concealed item’s bulk [minimum 1]). Both devices retain their normal functionality and require their own batteries, but if the concealed device requires a skill check to use, the user takes a –2 penalty to that skill check. You can’t conceal weapons or armor or conceal items in weapons or armor.\n\nStarting at 5th level, you can conceal the functional parts of a technological item or a ranged weapon inside a technological object of the same size, as long as that object is at least 1 bulk. For instance, you can conceal an azimuth laser pistol inside a large-enough musical instrument or a pulsecaster pistol inside a beacon. Concealing a weapon in this way imposes a –2 penalty to attack rolls with that weapon and reduces its range by half. This requires an additional hour of work and an amount of UPBs equal to 10% of the concealed item.\n\nIn either case, do not combine the bulk of the two devices; only the higher bulk counts toward a character’s bulk limit.',
    source: { book: 'Starfinder #25: The Chimera Mystery', page: 48 },
    pfsLegal: true,
  },
  {
    id: 'disabling_expert',
    name: 'Disabling Expert',
    levelRequired: 2,
    shortDescription: 'Disable devices faster using your exocortex.',
    fullDescription:
      'Your artificial intelligence enables you to attempt an Engineering check to disable a device on a lock or trap in half the normal time. If this would reduce the duration to less than 1 round, you can disable the device as a standard action. You must have an exocortex to learn this trick.',
    source: { book: 'Starfinder Enhanced', page: 46 },
    pfsLegal: true,
    prerequisites: ['mechanic_trick_exocortex'],
  },
  {
    id: 'disguise_weapon',
    name: 'Disguise Weapon',
    levelRequired: 2,
    shortDescription: 'Make weapons appear mundane and harder to detect.',
    fullDescription:
      'You are adept at making weapons look like devices of a different type. With 10 minutes of work, you can attempt an Engineering check versus a DC equal to 10 + 1-1/2 × the weapon’s level to disguise it as something mundane. If you are successful, you gain a +10 circumstance bonus to Disguise checks versus attempts to detect the true nature of the weapon.',
    source: { book: 'Starfinder Enhanced', page: 46 },
    pfsLegal: true,
  },
  {
    id: 'distracting_hack',
    name: 'Distracting Hack',
    levelRequired: 2,
    shortDescription: 'Use Computers to feint by hacking nearby systems.',
    fullDescription:
      'You can hack a computer within 30 feet of a foe to distract that foe, such as with a sudden noise or an image. You must be able to access the computer (whether it is your own computer or you are within range to access one manually or via remote hack). This functions as a feint action except that it uses your Computers skill instead of Bluff, so you can apply the benefits of Improved Feint and Greater Feint if you have them.',
    source: { book: 'Starfinder Core Rulebook', page: 71 },
    pfsLegal: true,
  },
  {
    id: 'electromagnetic_deflection',
    name: 'Electromagnetic Deflection',
    levelRequired: 2,
    shortDescription: 'Gain energy resistance while your energy shield is active.',
    fullDescription:
      'When you activate your energy shield, choose two of the following damage types: cold, electricity, or fire. While your shield is active, you gain resistance to the chosen damage types equal to half your mechanic level. You must have the energy shield mechanic trick to learn this trick.',
    source: { book: 'Alien Archive 4', page: 61 },
    pfsLegal: true,
    prerequisites: ['energy_shield'],
  },
  {
    id: 'energy_shield',
    name: 'Energy Shield',
    levelRequired: 2,
    shortDescription: 'Create a temporary energy shield using your custom rig.',
    fullDescription:
      'As a standard action, you can use your custom rig to activate an energy shield around yourself. This shield provides you with a number of temporary Hit Points equal to your Intelligence modifier plus your mechanic level. The shield remains active for 1 minute per mechanic level or until all of its temporary Hit Points are depleted, whichever comes first. Once used, you cannot use this ability again until you spend 1 Resolve Point to regain Stamina Points after a 10-minute rest; your shield automatically shuts off during this period of rest.',
    source: { book: 'Starfinder Core Rulebook', page: 71 },
    pfsLegal: true,
  },
  {
    id: 'exploration_routine',
    name: 'Exploration Routine',
    levelRequired: 2,
    shortDescription: 'Expand your drone’s feat options and grant it a bonus feat from a special list.',
    fullDescription:
      'You’ve installed routines in your drone that enable it to adventure efficiently through strange and alien worlds. Add the following to the list of feats your drone can select: Ambush Awareness, Climbing Master, Echolocation Attack, Memory Access, and Swimming Master. Additionally, your drone gains one of these feats as a bonus feat when you select this trick (it must meet the skill rank prerequisites for the feat). You must have a drone to select this mechanic trick.',
    source: { book: 'Galaxy Exploration Manual', page: 18 },
    pfsLegal: true,
    prerequisites: ['mechanic_trick_drone'],
  },
  {
    id: 'explosive_artist',
    name: 'Explosive Artist',
    levelRequired: 2,
    shortDescription: 'Gain a grenade-related feat and treat your mechanic BAB as your mechanic level to qualify.',
    fullDescription:
      'Choose one feat that includes proficiency with grenades as a prerequisite. You gain this feat as a bonus feat, and you can qualify for that feat as though your base attack bonus from your mechanic levels were equal to your mechanic level.',
    source: { book: 'Tech Revolution', page: 23 },
    pfsLegal: true,
  },
  {
    id: 'field_triage',
    name: 'Field Triage',
    levelRequired: 2,
    shortDescription: 'Spend Resolve and time to recover Hit Points using your exocortex.',
    fullDescription:
      'Your artificial intelligence aids you in providing emergency treatment for yourself. You can spend 1 Resolve Point and take 10 minutes to tend your wounds to recover a number of Hit Points equal to three times your mechanic level. You must have an exocortex to learn this trick.',
    source: { book: 'Starfinder Enhanced', page: 46 },
    pfsLegal: true,
    prerequisites: ['mechanic_trick_exocortex'],
  },
  {
    id: 'fusion_specialist',
    name: 'Fusion Specialist',
    levelRequired: 2,
    shortDescription: 'Apply fusion seals to weapons much faster.',
    fullDescription:
      'When you apply a fusion seal to a weapon, it functions after 1 round rather than the normal 10 minutes (or immediately if you also spend 1 Resolve Point).',
    source: { book: 'Galactic Magic', page: 23 },
    pfsLegal: true,
  },
  {
    id: 'hack_directory',
    name: 'Hack Directory',
    levelRequired: 2,
    shortDescription: 'On a failed hack, identify triggered countermeasures and try to prevent one.',
    fullDescription:
      'Whenever you attempt to hack a system and fail the check, you immediately become aware of any countermeasures that were activated due to your failure. You can then select one of these countermeasures and attempt another Computers check (with the same DC as the original). If you succeed at this second check, you can prevent that countermeasure from activating, as if you had not attempted to access the system at all. Any other countermeasures have their normal effect.',
    source: { book: 'Starfinder Core Rulebook', page: 71 },
    pfsLegal: true,
  },
  {
    id: 'hunk_of_junk',
    name: 'Hunk of Junk',
    levelRequired: 2,
    shortDescription: 'Feign being defunct junk to fool foes, with a check to maintain the ruse.',
    fullDescription:
      'You can appear to be a defunct piece of junk.As a move action, or as a reaction whenever you take damage, you can attempt to appear defunct. You immediately fall prone and attempt an Engineering check against each opponent who’s aware of you (DC = 10 + the opponent’s Sense Motive bonus, or 15 + 1-1/2 × the opponent’s CR, whichever is greater). Anyone you succeed against believes you’re useless mechanical junk and acts accordingly. An opponent who closely inspects you as a standard action can attempt an Engineering, Perception, or Sense Motive check at the same DC to uncover your deception. Maintaining this ruse is a full action each turn.\nThis trick can be taken only by characters who can be targeted by effects that only affect constructs, including those of the construct type and those with the constructed species trait.',
    source: { book: 'Interstellar Species', page: 127 },
    pfsLegal: true,
    prerequisites: ['mechanic_trick_exocortex'],
  },
  {
    id: 'implant_ghost',
    name: 'Implant Ghost',
    levelRequired: 2,
    shortDescription: 'Hack a creature’s cybernetics to secretly monitor an implant via your exocortex.',
    fullDescription:
      'As a standard action, you can attempt to hack into the cybernetics installed in a creature you can see within 60 feet with a Computers check (DC = 15 + 1-1/2 × the target’s CR). If you succeed, choose one of the target’s cybernetic implants; your exocortex forms a secret wireless link to that augmentation, allowing you to record what it experiences. You can see what a cybernetic eye sees, hear what a cybernetic ear hears, copy the data a datajack downloads, or track the movement of a cybernetic hand (potentially learning combinations or keystrokes). You can maintain this link until your target moves more than 500 feet from you, you fall unconscious or asleep, or you choose to end it (this takes no action). You must have an exocortex to learn this trick.',
    source: { book: 'Starfinder #25: The Chimera Mystery', page: 49 },
    pfsLegal: true,
    prerequisites: ['mechanic_trick_exocortex'],
  },
  {
    id: 'junkers_jury_rig',
    name: "Junker's Jury-Rig",
    levelRequired: 2,
    shortDescription: 'Dissect a suitable spell gem to permanently replicate its effect as an extraordinary ability.',
    fullDescription:
      "You're able to quickly cobble together scrap items into something wondrous. You can spend 24 hours dissecting a spell gem of any technomancer spell whose Targets entry lists \"at least 1 bulk of electronic material\" to device a means to produce that effect nonmagically. This process destroys the dissected spell gem, but after doing so you permanently gain the ability to spend 1 Resolve Point as a full action to produce an extraordinary effect identical to that spell, using your mechanic level as your caster level and your Intelligence as your key spellcasting Ability Score.",
    source: { book: 'Angels of the Drift #5', page: 28 },
    // You didn't mark this one "SFS Legal" in your paste, so defaulting to false to avoid accidentally over-marking.
    pfsLegal: false,
  },
  {
    id: 'lower_access',
    name: 'Lower Access',
    levelRequired: 2,
    shortDescription: 'Briefly reduce a computer’s hack DC and potentially avoid a countermeasure on failure.',
    fullDescription:
      'You can quickly note weaknesses in the internal security of a computer system you can touch. As a move action, you can reduce the DC to hack the computer by an amount equal to half of your Intelligence modifier until the end of your next turn. This can apply only once to a given computer. If you use this on a computer and fail a Computers check to access it, you can spend 1 Resolve Point as a reaction to avoid activating a single countermeasure of your choice. Any additional countermeasures activate normally.',
    source: { book: 'Starfinder Enhanced', page: 46 },
    pfsLegal: true,
  },
  {
    id: 'magic_scanner',
    name: 'Magic Scanner',
    levelRequired: 2,
    shortDescription: 'Use your custom rig to detect magic and identify magic/hybrid items with Computers.',
    fullDescription:
      'As a standard action, you attune your custom rig to detect the presence and nature of magical effects in the area, gaining the effects of the detect magic spell. You can use this to identify the properties and command words of magic and hybrid items, using Computers to identify magic in place of Mysticism.',
    source: { book: 'Galactic Magic', page: 23 },
    pfsLegal: true,
  },
  {
    id: 'magitech_officer',
    name: 'Magitech Officer',
    levelRequired: 2,
    shortDescription: 'Use Engineering in place of Mysticism for magic officer starship combat actions.',
    fullDescription:
      'When acting as a magic officer (Starfinder Character Operations Manual 148) during starship combat, you can use Engineering in place of Mysticism to resolve crew actions. You can perform magic officer crew actions as though you had a number of ranks in Mysticism equal to the number of ranks you have in Engineering.',
    source: { book: 'Galactic Magic', page: 23 },
    pfsLegal: true,
  },
  {
    id: 'natural_computer',
    name: 'Natural Computer',
    levelRequired: 2,
    shortDescription: 'Create a basic computer interface on a natural surface and surveil from it at range.',
    fullDescription:
      'With 1 minute of work, you can use your custom rig to create a basic computer interface on a natural unworked surface, such as on the ground, a tree, or a rock face. The interface requires a power source and uses 1 charge per hour. If you are a plant creature, this instead takes a standard action and does not require a power source. The interface is attuned to unmodified material of the type on which it is placed. You know the general direction and distance of attuned materials, and you can use the interface to surveil its surroundings at distance of up to 50 feet × your mechanic level. The surveillance square has ordinary vision but can see only out to 30 feet.',
    source: { book: 'Near Space', page: 129 },
    // Not marked "SFS Legal" in your paste, so defaulting to false to avoid accidental over-marking.
    pfsLegal: false,
  },
  {
    id: 'neural_shunt',
    name: 'Neural Shunt',
    levelRequired: 2,
    shortDescription: 'Once per day, shunt a failed mind-affecting save into your exocortex (disabling it temporarily).',
    fullDescription:
      'Once per day, as a reaction when you fail a saving throw against a mind-affecting effect, you can shunt that effect into your exocortex instead. When you do so, you are not affected by the mind-affecting effect, but for the normal duration of that effect, you lose the Skill Focus feat granted by your exocortex’s memory module and cannot use any of the exocortex’s abilities in any way (including any proficiencies and mods it grants you). When a mind-affecting effect is shunted into the exocortex, spells such as dispel magic or break enchantment can be cast on you to end the effect as if you were affected by it. Once the duration of the mind-affecting effect has ended, your exocortex resumes its normal functions. You must have an exocortex to learn this trick.',
    source: { book: 'Starfinder Core Rulebook', page: 72 },
    pfsLegal: true,
    prerequisites: ['mechanic_trick_exocortex'],
  },
  {
    id: 'nightvision_processor',
    name: 'Nightvision Processor',
    levelRequired: 2,
    shortDescription: 'Gain low-light vision and darkvision, requiring Visual Data Processor.',
    fullDescription:
      'Your visual data processor allows you to see better in conditions of poor lighting, granting you low-light vision and darkvision to a range of 60 feet. You must have the visual data processor mechanic trick to learn this trick.',
    source: { book: 'Starfinder Core Rulebook', page: 72 },
    pfsLegal: true,
    prerequisites: ['visual_data_processor'],
  },
  {
    id: 'overcharge',
    name: 'Overcharge',
    levelRequired: 2,
    shortDescription: 'Overcharge a powered weapon to deal extra damage, consuming extra charges.',
    fullDescription:
      'As a standard action, you can use your custom rig to overcharge and attack with a ranged energy weapon or a melee weapon with the powered special property (see page 181) that you’re holding. If you hit, you deal 1d6 additional damage of the same type the weapon normally deals. This attack uses three times as many charges from the battery or power cell as normal and can’t be used if the weapon doesn’t have enough charges. This trick has no effect on a weapon without a battery or power cell. You can instead use this ability as a move action on a touched powered weapon that is unattended or attended by an ally to grant the same effect to that weapon’s next attack before the beginning of your next turn.',
    source: { book: 'Starfinder Core Rulebook', page: 72 },
    pfsLegal: true,
  },
  {
    id: 'overclocking',
    name: 'Overclocking',
    levelRequired: 2,
    shortDescription: 'Boost initiative and grant a Reflex save bonus to you (exocortex) or your drone.',
    fullDescription:
      'You have augmented the performance of your AI for maximum response timing. You gain a +2 insight bonus to initiative checks, and either you (if you have an exocortex) or your drone (if you have a drone) gains a +2 insight bonus to Reflex saves.',
    source: { book: 'Starfinder Core Rulebook', page: 72 },
    pfsLegal: true,
  },
  {
    id: 'overload_weapon',
    name: 'Overload Weapon',
    levelRequired: 2,
    shortDescription: 'Prime a powered weapon to explode like a grenade, destroying it when detonated.',
    fullDescription:
      'As a full action or as a move action by spending 1 Resolve Point, you can cause a powered weapon (either a ranged energy weapon or a melee weapon with the powered special property) in your possession to explode. You can use the weapon as if it were a grenade of the weapon’s item level or lower dealing the weapon’s normal damage type, except the weapon has a range increment of only 10 feet unless it is a thrown weapon. If someone tries to attack with the weapon, it explodes as a grenade would instead, centered on the user, and the user doesn’t receive a Reflex save to negate the grenade’s effect (if any). Once you’ve primed a weapon to explode in this way, it’s difficult to reverse the effect, requiring 8 hours of work and a successful Engineering check (DC = 15 + your Engineering bonus); failing the check by 5 or more detonates the weapon. Once detonated, the weapon is destroyed, just like a grenade.',
    source: { book: 'Starfinder Core Rulebook', page: 72 },
    pfsLegal: true,
  },
  {
    id: 'portable_charging_station',
    name: 'Portable Charging Station',
    levelRequired: 2,
    shortDescription: 'Recharge batteries to full using your custom rig, limited uses per day.',
    fullDescription:
      'You can use your custom rig to recharge batteries. You can spend 10 minutes in contact with a battery and restore its charges to full. Once you have used your portable charging station a number of times per day equal to your Intelligence bonus (minimum 1), you can’t do so again for 24 hours.',
    source: { book: 'Character Operations Manual', page: 74 },
    pfsLegal: true,
  },
  {
    id: 'portable_power',
    name: 'Portable Power',
    levelRequired: 2,
    shortDescription: 'Supply temporary power to an unpowered computer or starship system.',
    fullDescription:
      'You can use your custom rig to supply limited power for up to 1 minute to a computer or starship system that lacks power. If this system is part of a much larger network, this trick does not supply power to the entire network, just to a limited point of access (typically a terminal), which might greatly limit functionality. Once you have used portable power on a system, you cannot do so again on that system for 24 hours.',
    source: { book: 'Starfinder Core Rulebook', page: 72 },
    pfsLegal: true,
  },
  {
    id: 'projected_shield',
    name: 'Projected Shield',
    levelRequired: 2,
    shortDescription: 'Apply your energy shield to an adjacent ally instead of yourself.',
    fullDescription:
      'When you activate your energy shield mechanic trick, you can apply its effects to an adjacent ally instead of to yourself. If your energy shield grants additional benefits, such as from the facet deflection trick, you also apply those additional benefits to the ally instead of yourself. Your energy shield ends immediately if the target is ever more than 100 feet away from you. If you activate your energy shield ability a second time (such as with the boost shield trick), any other energy shield you have active ends immediately. You must have the energy shield mechanic trick to select this trick.',
    source: { book: 'Interstellar Species', page: 25 },
    pfsLegal: true,
    prerequisites: ['energy_shield'],
  },
  {
    id: 'protective_programming',
    name: 'Protective Programming',
    levelRequired: 2,
    shortDescription: 'Once per day, have your drone intercept damage meant for you.',
    fullDescription:
      'Once per day as a reaction when you fail a Reflex saving throw against an attack or spell that deals damage, if your drone is within 10 feet of the line between you and the damaging effect, you can direct your drone to interpose itself between you and the source of that damage. Your drone takes the damage the attack would have dealt to you, and you take no damage. If your drone is reduced to 0 Hit Points, it is destroyed until you repair it or build a new drone. You must have the drone option of the artificial intelligence class feature to choose this trick.',
    source: { book: 'Character Operations Manual', page: 74 },
    pfsLegal: true,
    prerequisites: ['mechanic_trick_drone'],
  },
  {
    id: 'provisional_repair',
    name: 'Provisional Repair',
    levelRequired: 2,
    shortDescription: 'Suppress the broken condition penalties on an item temporarily; improve starship engineering once per combat.',
    fullDescription:
      'As a standard action, you can temporarily patch up a broken weapon or technological item to suppress the penalties from the broken condition for 1 minute per mechanic level. This does not restore any Hit Points to the item, and it does not function on an item reduced to 0 Hit Points. Additionally, when filling the engineer role during starship combat, once per combat you can perform the hold it together action in the same round you perform another engineering action.',
    source: { book: 'Starfinder Armory', page: 146 },
    pfsLegal: true,
  },
  {
    id: 'quick_patch',
    name: 'Quick Patch',
    levelRequired: 2,
    shortDescription: 'Patch starship systems using one fewer action and patch two systems with one action.',
    fullDescription:
      'When you attempt to patch a system on a starship, you reduce the number of actions required to do so by one. This does not reduce the time needed to patch a glitching system, but you can patch two systems with one action.',
    source: { book: 'Starfinder Core Rulebook', page: 72 },
    pfsLegal: true,
  },
  {
    id: 'quick_repair',
    name: 'Quick Repair',
    levelRequired: 2,
    shortDescription: 'Repair items in half the normal time (minimum a full action).',
    fullDescription:
      'When you attempt to repair an item, you can do so in half the time normally required (to a minimum of a full action).',
    source: { book: 'Starfinder Core Rulebook', page: 72 },
    pfsLegal: true,
  },
  {
    id: 'recalibrate_engine',
    name: 'Recalibrate Engine',
    levelRequired: 2,
    shortDescription: 'Spend Resolve to temporarily adjust a vehicle or starship’s speed and piloting performance.',
    fullDescription:
      'As a full action, you can spend 1 Resolve Point to modify a touched vehicle’s engine with your custom rig to get a little more or less power out of it for 1 minute per mechanic level or until you undo it as a full action. The vehicle gains a +10 foot enhancement bonus to its speed and a +50 feet (+5 mph) enhancement bonus to its full speed (to a maximum of double) and its Piloting modifier is reduced by 2. You can also penalize its speed to increase its piloting modifier.\n\nAdditionally, when filling the engineer role during starship combat you use the recalibrate engine ability in place of any other engineering action. The ship gains a +2 enhancement bonus to its speed for 1 turn, and the Piloting check made in the Helm phase to determine the order of movement of starships gains a +2 enhancement bonus, but all other Piloting checks made that turn take a –5 penalty.',
    source: { book: 'Starfinder Armory', page: 146 },
    pfsLegal: true,
  },
  {
    id: 'remote_pilot',
    name: 'Remote Pilot',
    levelRequired: 2,
    shortDescription: 'Grant your vehicle an autopilot and control it remotely via your custom rig.',
    fullDescription:
      'Your custom rig can exercise delicate control over your vehicle, which gains an autopilot function (Core Rulebook 280) with a Piloting bonus equal to 4 + 1-1/2 the vehicle’s item level. You can use your custom rig control the autopilot at a range of 500 feet, allowing you to engage, disengage, or enter coordinates for the autopilot as if you were in the vehicle. This range increases to 5 miles if you have the expert rig ability, 50 miles if you have the advanced rig ability, and has a planetary range if you have the superior rig ability.\nYou must have the experimental vehicle class feature to choose this trick.',
    source: { book: 'Tech Revolution', page: 23 },
    pfsLegal: false,
    prerequisites: ['experimental_vehicle'],
  },
  {
    id: 'repair_drone',
    name: 'Repair Drone',
    levelRequired: 2,
    shortDescription: 'Repair a larger portion of your drone’s Hit Points when you repair it.',
    fullDescription:
      'When you repair your drone in either manner described on page 74, you repair 25% of its maximum Hit Points instead of 10%. You must have a drone to learn this trick.',
    source: { book: 'Starfinder Core Rulebook', page: 72 },
    pfsLegal: true,
    prerequisites: ['mechanic_trick_drone'],
  },
  {
    id: 'sample_scanner',
    name: 'Sample Scanner',
    levelRequired: 2,
    shortDescription: 'Analyze field samples with your exocortex, taking longer to effectively “take 20.”',
    fullDescription:
      'Your exocortex is adept at analyzing field samples. As a move action, you can place items or materials weighing up to 1 bulk into your custom rig and direct your exocortex to analyze them. This functions as taking 20 to recall knowledge about the items, but it takes 10 minutes to perform, instead of the usual 2 minutes. While scanning an object, you can’t use your exocortex’s memory module, and the number of targets you can designate your exocortex to track is reduced by one. You must have an exocortex to select this mechanic trick.',
    source: { book: 'Galaxy Exploration Manual', page: 18 },
    pfsLegal: true,
    prerequisites: ['mechanic_trick_exocortex'],
  },
  {
    id: 'scrap_savant',
    name: 'Scrap Savant',
    levelRequired: 2,
    shortDescription: 'Choose item types you can craft instantly with Resolve; swap the list each level.',
    fullDescription:
      "You can make anything out of anything. Choose a number of personal or technological items equal to your Intelligence modifier (minimum 1). Each item's level must be half your mechanic level or less. You can craft items of the chosen kind as a full action by spending 1 Resolve Point, providing you have a number of ranks in Engineering equal to or greater than the item's level and the necessary materials to craft the item. You can change which items you've selected with this mechanic trick each time you gain a level.\nIf you're holding or carrying a personal or technological item that you personally crafted whose item level is half your mechanic level or less, you can craft it using this ability even if you didn't choose it with scrap savant by spending 2 Resolve Points instead of 1.",
    source: { book: 'Angels of the Drift #5', page: 28 },
    pfsLegal: true,
  },
  {
    id: 'spell_chip_array',
    name: 'Spell Chip Array',
    levelRequired: 2,
    shortDescription: 'Install multiple spell chips and chain casting between inserted chips.',
    fullDescription:
      'You’ve built in a receiver for spell chips. You can insert a number of spell chips equal to half your level. Using these spell chips has the same requirements as normal. Because you have the chips linked in an array, you can expend a spell chip to cast a spell on any other spell chip you’ve inserted of the same or higher spell level. A spell chip array is difficult for creatures not aware of it to locate; someone performing a close inspection can discover it with a successful Mysticism or Perception check (DC = 10 + your total Engineering skill modifier).\nThis trick can be taken only by characters who can be targeted by effects that only affect constructs, including those of the construct type and those with the constructed species trait.',
    source: { book: 'Interstellar Species', page: 127 },
    pfsLegal: true,
    // If you’d rather not encode “construct-targetable” gating as a prerequisite, leave this empty and treat it as a warning.
    prerequisites: [],
  },
  {
    id: 'spell_chip_understanding',
    name: 'Spell Chip Understanding',
    levelRequired: 2,
    shortDescription: 'Use spell chips as if you were a spellcaster, using Intelligence and mechanic level.',
    fullDescription:
      'You can use spell chips (Core Rulebook 215) as if you were a spellcaster. For the purpose of using spell chips, you treat all spells as your class’s spell list, and you use Intelligence as your key ability score for your spellcasting. Your effective caster level for spell chips you use is your mechanic level.',
    source: { book: 'Galactic Magic', page: 23 },
    pfsLegal: true,
  },
  {
    id: 'stranded_inventions',
    name: 'Stranded Inventions',
    levelRequired: 2,
    shortDescription: 'Craft tech using raw materials on lower-tech worlds, with limitations and drawbacks.',
    fullDescription:
      'You know how to make the most of your available resources, which comes in handy while exploring lower-tech worlds. In place of UPBs, you can use an equivalent value of raw materials on worlds with medium or low technology to craft technological items, but when you do so, you can craft items only of that world’s technology level or lower. Alternatively, you can craft a technological item whose item level doesn’t exceed your number of Engineering ranks – 2, regardless of the world’s technology or resources (subject to GM discretion). Armor or weapons you make using this trick gain the archaic property, technological items or weapons that use batteries can be used only once per day, and tool kits that provide bonuses to skill checks halve the granted bonus.',
    source: { book: 'Galaxy Exploration Manual', page: 18 },
    pfsLegal: true,
  },
  {
    id: 'tech_tinkerer',
    name: 'Tech Tinkerer',
    levelRequired: 2,
    shortDescription: 'Temporarily transform a tech item into a different lower-level tech item of similar bulk.',
    fullDescription:
      'You know how to modify the functions of UPBs to radically alter how items work. With 10 minutes of work, you can modify a technological item so that it temporarily functions as any other lower-level technological item of the same or lower bulk (losing its original function while in this new form). The item must have an item level and bulk no greater than half your mechanic level. If the new item requires a battery that has more charges than the original device’s battery (or another source of power or fuel not present in the original item), you must also provide the appropriate battery or power source. Any charges or similar expenditure from the new item come from the original item (if possible) or the new power source you install (if one was required). The new item retains the original item’s bulk. Any damage dealt to the new item is retained when it returns to its original form. If the item is broken or destroyed in its modified form, it remains broken or destroyed when it returns to its original form and must be repaired or replaced normally.\n\nThis change lasts for 10 minutes per mechanic level or until you undo it with 10 minutes of work. You cannot modify or produce armor, augmentations, hybrid or magic items, items with limited uses or charges (such as batteries, drugs, or fuel), or weapons, although you can produce an item that uses charges from a battery or fuel if there is a separate battery or power source to power it. At 5th level, you can spend 1 Resolve Point to use this ability to modify an item whose level is equal to your mechanic level, giving it the function of a lower-level item.',
    source: { book: 'Starfinder Armory', page: 146 },
    pfsLegal: true,
  },
  {
    id: 'technological_medic',
    name: 'Technological Medic',
    levelRequired: 2,
    shortDescription: 'Use Engineering instead of Medicine to treat constructed creatures; your rig functions as a medkit.',
    fullDescription:
      'You can use your knowledge of machines and technology to repair androids and robots. Whenever you attempt a Medicine check to assist an android, SRO, or other creature with the constructed racial trait or construct (technological) subtype, you can use your Engineering skill instead of Medicine to achieve the same results. Your custom rig acts as a medkit for this purpose (or an advanced medkit, if you are 5th level or higher).',
    source: { book: 'Character Operations Manual', page: 75 },
    pfsLegal: true,
  },
  {
    id: 'terminal_uplink',
    name: 'Terminal Uplink',
    levelRequired: 2,
    shortDescription: 'Upload your exocortex into a computer to monitor activity and optionally observe through its hardware.',
    fullDescription:
      'You can use your exocortex to stay vigilant. As a full action, you can upload your exocortex into a computer to which you have root access, directing it to monitor that computer. Once your exocortex is integrated, your custom rig alerts you whenever a creature operates or attempts to hack the computer, similar to the alarm countermeasure. Your exocortex upload can be removed from the computer by other users as if it were a module. If you upload your exocortex into a different computer, you lose the benefits of terminal uplink with the first computer, and the exocortex upload on that computer deletes itself 1d10 minutes later.\nIf you upload your exocortex into a computer with a camera, microphone, or other similar monitoring device, you can perceive the computer’s surroundings with that hardware by using your custom rig, so long as you’re within 100 feet per mechanic level you have of the computer. While observing the computer’s surroundings in this way, you can’t use your exocortex’s memory module, and the number of targets you can track with your exocortex is reduced by one. You must have an exocortex to select this mechanic trick.',
    source: { book: 'Galaxy Exploration Manual', page: 18 },
    pfsLegal: true,
    prerequisites: ['mechanic_trick_exocortex'],
  },
  {
    id: 'visual_data_processor',
    name: 'Visual Data Processor',
    levelRequired: 2,
    shortDescription: 'Gain the insight bonus from bypass to Perception checks.',
    fullDescription:
      'You notice even the smallest shifts in movement, temperature, and vibration, gaining the insight bonus from your bypass class feature to Perception skill checks.',
    source: { book: 'Starfinder Core Rulebook', page: 72 },
    pfsLegal: true,
  },
// Level 4 Mechanic Tricks //
  {
    id: 'adaptive_weapon',
    name: 'Adaptive Weapon',
    levelRequired: 4,
    shortDescription: 'Change an ally’s tech weapon energy damage type for a short duration.',
    fullDescription:
      'As a move action, you can touch a technological weapon wielded by an ally and change one type of energy damage to another type of energy damage of your choosing. This change lasts for a number of rounds equal to your Intelligence modifier.',
    source: { book: 'Starfinder Enhanced', page: 46 },
    pfsLegal: true,
  },
  {
    id: 'bolster_defenses',
    name: 'Bolster Defenses',
    levelRequired: 4,
    shortDescription: 'Temporarily increase your EAC or KAC as a move action, limited uses per day.',
    fullDescription:
      'You can temporarily modify your armor to improve your defenses. As a move action, you can increase either your EAC or KAC by 2 until the beginning of your next turn. You can use this ability a number of times per day equal to your Intelligence modifier.',
    source: { book: 'Starfinder Enhanced', page: 46 },
    pfsLegal: true,
  },
  {
    id: 'bolster_resistances',
    name: 'Bolster Resistances',
    levelRequired: 4,
    shortDescription: 'Gain temporary resistance 5 to an energy type as a move action, limited uses per day.',
    fullDescription:
      'You can temporarily modify your armor to improve your resistance to energy attacks. As a move action, you can gain resistance 5 to a type of energy damage of your choice until the beginning of your next turn; this does not stack with any other sources of resistance. You can use this ability a number of times per day equal to your Intelligence modifier.',
    source: { book: 'Starfinder Enhanced', page: 46 },
    pfsLegal: true,
  },
  {
    id: 'high_speed_reload',
    name: 'High Speed Reload',
    levelRequired: 4,
    shortDescription: 'Once per day, set a weapon to auto-reload to full when it runs dry.',
    fullDescription:
      'Each day, you can modify one of your weapons so that it can be more easily reloaded that day. As a reaction when this weapon runs out of ammunition or charges, you can automatically reload it to full capacity. This trick requires you to have the ammunition or spare battery on your person.',
    source: { book: 'Starfinder Enhanced', page: 46 },
    pfsLegal: true,
  },
  {
    id: 'jury_rig',
    name: 'Jury Rig',
    levelRequired: 4,
    shortDescription: 'Repair an item as a move action, but it may fail during use and can’t be jury-rigged again if it fails.',
    fullDescription:
      'Sometimes it’s imperative to get a device working again as quickly as possible. With this mechanic trick, you can attempt to repair an item as a move action. The item has a chance to fail on each usage equal to 100 – ten times your Intelligence modifier. If a jury-rigged item fails, it takes twice as long as normal to repair it, and you can’t use this mechanic trick on it again.',
    source: { book: 'Starfinder Enhanced', page: 46 },
    pfsLegal: true,
  },
  {
    id: 'mech_defensive_expert',
    name: 'Mech Defensive Expert',
    levelRequired: 4,
    shortDescription: 'Improve a mech’s base AC and saves with an Engineering check; bonus improves at 15th level.',
    fullDescription:
      'Your extensive experience working on mechs enables you to improve their defensive performance. You can spend 1 minute working on a mech to attempt an Engineering check with a DC equal to 10 + 1-1/2 × the mech’s tier. If you succeed, you can add +1 to the base AC and base save of the mech you are working on. Only one attempt can be made per specific mech, though you can attempt similar checks on other models of the same mech. At 15th level, this bonus increases to +2.',
    source: { book: 'Starfinder Enhanced', page: 47 },
    pfsLegal: true,
  },
  {
    id: 'recalculation',
    name: 'Recalculation',
    levelRequired: 4,
    shortDescription: 'Spend Resolve to reroll a failed Engineering check while using your custom rig.',
    fullDescription:
      'If you are using your custom rig, you can spend 1 Resolve Point as a reaction to reroll a failed Engineering check, but you must use the result of the reroll. You can use this ability a number of times per day equal to your Intelligence modifier.',
    source: { book: 'Starfinder Enhanced', page: 47 },
    pfsLegal: true,
  },
  {
    id: 'remote_diagnostics',
    name: 'Remote Diagnostics',
    levelRequired: 4,
    shortDescription: 'Diagnose malfunctions in devices or constructs at a distance using Engineering.',
    fullDescription:
      'You can attempt an Engineering check to determine whether, why, and how a technological device or construct is malfunctioning, up to a range equal to 10 feet × your Intelligence modifier. You must have line of sight to the device or construct. This mechanic trick only enables you to make the diagnosis; it does not allow you to attempt to repair the device or construct at this range.',
    source: { book: 'Starfinder Enhanced', page: 47 },
    pfsLegal: true,
  },
  {
    id: 'remote_disarm',
    name: 'Remote Disarm',
    levelRequired: 4,
    shortDescription: 'Disarm traps or explosives at range with Engineering, using your exocortex.',
    fullDescription:
      'You can attempt Engineering checks to disarm a trap or explosive device at a range equal to 5 feet times your Intelligence modifier, provided the target is in line of sight and line of effect. You must have an exocortex to select this trick.',
    source: { book: 'Starfinder Enhanced', page: 47 },
    pfsLegal: true,
    prerequisites: ['mechanic_trick_exocortex'],
  },
  {
    id: 'splashy_entrance',
    name: 'Splashy Entrance',
    levelRequired: 4,
    shortDescription: 'Use Engineering instead of Diplomacy once when first meeting someone to improve their attitude.',
    fullDescription:
      'You can use your technological devices to make a colorful entrance when you first meet someone. The first time you meet someone and attempt to improve their attitude toward you, you can use your Engineering modifier instead of your Diplomacy modifier for the check.',
    source: { book: 'Starfinder Enhanced', page: 47 },
    pfsLegal: true,
  },
  {
    id: 'vehicle_whisperer',
    name: 'Vehicle Whisperer',
    levelRequired: 4,
    shortDescription: 'Spend Resolve to boost a vehicle’s defenses, speed, collision damage, and (if piloting) Piloting modifier for hours.',
    fullDescription:
      'You can use your extensive mechanical expertise to improve the performance of any vehicle. You can spend 1 Resolve Point as a swift action to affect a vehicle you can touch. The vehicle gains a +1 enhancement bonus to EAC and KAC, it deals an additional 1d4 damage with collision attacks, and its movement speeds increase by 5 feet. If you’re piloting this vehicle, its Piloting modifier increases by 2. These effects last for a number of hours equal to your Intelligence modifier before they revert back to their original values, whether or not you remain with the vehicle.',
    source: { book: 'Starfinder Enhanced', page: 47 },
    pfsLegal: true,
  },

   // Level 8 Mechanic Tricks //
  {
    id: 'artificial_pilot',
    name: 'Artificial Pilot',
    levelRequired: 8,
    shortDescription: 'Let your drone provide autocontrol/autopilot functionality while you drive or race.',
    fullDescription:
      'Your drone has learned to operate vehicles quite independently. When you’re piloting a vehicle in which your drone is a passenger, you can engage autocontrol (or engage autopilot, if you have the expert AI ability) as part of the action you use to drive or race, even if the vehicle doesn’t have an autocontrol or an autopilot function. If the vehicle doesn’t have an autocontrol or autopilot function, your drone must spend its actions each round to maintain the engaged function. If it’s unable to do so, the autocontrol or autopilot stops functioning. You must have a drone to select this mechanic trick.',
    source: { book: 'Galaxy Exploration Manual', page: 18 },
    pfsLegal: true,
    prerequisites: ['mechanic_trick_drone'],
  },
  {
    id: 'bolster_armor',
    name: 'Bolster Armor',
    levelRequired: 8,
    shortDescription: 'Grant temporary Hit Points to armor (or bolster starship defenses/shields) using your custom rig.',
    fullDescription:
      'As a standard action, you can use your custom rig to modify a touched suit of light armor, heavy armor, or powered armor, granting it a number of temporary Hit Points equal to half your mechanic level. Any damage to the armor or its wearer is subtracted from these temporary Hit Points first. These temporary Hit Points last 1 minute or until reduced to 0. Once you use this ability, you can’t do so again unless you expend a Resolve Point to regain Stamina Points following a 10-minute rest.\nAdditionally, when acting in the engineer role during starship combat, instead of taking any other action, you can spend 1 Resolve Point to modify a single quadrant of your starship. You bolster that section of the ship’s armor or defensive countermeasures, increasing the ship’s Armor Class or Target Lock (respectively) in that quadrant by 2 for a number of rounds equal to your mechanic level; alternatively, you can restore a number of Shield Points in that quadrant equal to your mechanic level.',
    source: { book: 'Character Operations Manual', page: 75 },
    pfsLegal: true,
  },
  {
    id: 'boost_shield',
    name: 'Boost Shield',
    levelRequired: 8,
    shortDescription: 'Improve your energy shield and refresh it by spending Resolve.',
    fullDescription:
      'Your energy shield grants you a number of temporary Hit Points equal to your Intelligence modifier + double your mechanic level. In addition, if you have already used your shield, you can spend 1 Resolve Point to use it again without having to regain Stamina Points first. This replenishes your shield’s temporary Hit Points to full. You must have the energy shield mechanic trick to learn this trick.',
    source: { book: 'Starfinder Core Rulebook', page: 72 },
    pfsLegal: true,
    prerequisites: ['energy_shield'],
  },
  {
    id: 'boost_speed',
    name: 'Boost Speed',
    levelRequired: 8,
    shortDescription: 'Spend Resolve to increase an armor wearer’s land speed for a few rounds.',
    fullDescription:
      'As a standard action, you can spend 1 Resolve Point to reconfigure the mechanical joints in a suit of armor (either your own or one worn by an adjacent willing ally) to increase the land speed of the wearer by 10 feet. This increases to 15 feet at 10th level, 20 feet at 14th level, and 25 feet at 18th level. This speed increase lasts a number of rounds equal to your Intelligence modifier.',
    source: { book: 'Starfinder Enhanced', page: 47 },
    pfsLegal: true,
  },
  {
    id: 'broadcast_telemetry',
    name: 'Broadcast Telemetry',
    levelRequired: 8,
    shortDescription: 'Share combat tracking benefits with an ally, letting them attack as if their BAB were your mechanic level.',
    fullDescription:
      'Your exocortex can broadcast crucial combat data to allies. When you use your combat tracking exocortex ability to track a creature, as a swift action, you can grant an ally the ability to make attacks against that target as if their base attack bonus were equal to your mechanic level. If you do, attacks you make against that target use your normal attack bonus. To benefit from this ability, the ally must be within 30 feet and have an active comm unit (such as those installed in most armor) or have a cybernetic or magitech eye(s) augmentation; if the ally has both a comm unit and applicable augmentation, you can broadcast to that ally at a range of 60 feet. When you use this trick, exocortex abilities that increase the number of targets you can track with combat tracking instead increase the number of targets that your ally can track.\nThis ability lasts until you end it with a swift action, you become unconscious, you can no longer perceive the target, or the ally moves beyond this trick’s range. You must have an exocortex to select this mechanic trick.',
    source: { book: 'Galaxy Exploration Manual', page: 19 },
    pfsLegal: true,
    prerequisites: ['mechanic_trick_exocortex'],
  },
  {
    id: 'calculate_angles',
    name: 'Calculate Angles',
    levelRequired: 8,
    shortDescription: 'Ricochet a KAC-targeting ranged attack to a second target, then recharge after a rest.',
    fullDescription:
      'As a reaction when you hit an enemy with a ranged weapon that targets KAC, you can attempt to ricochet the projectile to ward a second target within half the weapon’s range or range increment of the first target. Make a ranged attack at –6 against the second target and deal normal damage if the attack hits. You must have line of effect and line of sight from both you to the second target, and from the first target to the second. You can’t use this ability again until you spend 1 Resolve Point to recover Stamina Points after a 10-minute rest.',
    source: { book: 'Starfinder Enhanced', page: 47 },
    pfsLegal: true,
  },
  {
    id: 'debug_curse',
    name: 'Debug Curse',
    levelRequired: 8,
    shortDescription: 'Gain a bonus against curses and remove a curse once per day using your custom rig.',
    fullDescription:
      'Your custom rig is able to analyze and disable curses’ underlying magic. While in possession of your custom rig, you gain a +3 resistance bonus to saving throws against curses. Once per day, you can use your custom rig to remove a curse from a creature or object, per the spell remove affliction, using your mechanic level as your caster level.',
    source: { book: 'Galactic Magic', page: 23 },
    pfsLegal: true,
  },
  {
    id: 'divided_uplink',
    name: 'Divided Uplink',
    levelRequired: 8,
    shortDescription: 'Maintain terminal uplink on multiple computers and gain extra benefits when only one is uploaded.',
    fullDescription:
      'You can keep your exocortex uploaded to a number of computers equal to half your Intelligence bonus (minimum 2) while using your terminal uplink mechanic trick. If your exocortex is uploaded to only one computer, you can monitor that computer’s surroundings without preventing you from using your exocortex’s memory module. Your uploaded exocortex is protected by a firewall countermeasure.',
    source: { book: 'Galaxy Exploration Manual', page: 19 },
    pfsLegal: true,
    prerequisites: ['terminal_uplink', 'mechanic_trick_exocortex'],
  },
  {
    id: 'drone_meld',
    name: 'Drone Meld',
    levelRequired: 8,
    shortDescription: 'Reconfigure your drone into a wearable suit/backpack form that grants you certain mods.',
    fullDescription:
      'As a full action while in contact with your drone, you can reconfigure it into a mechanical drone suit (or a backpack-like apparatus, for the Tiny hover drone) that you can wear. While in this form, the drone can’t take any actions or use any of its abilities, but you gain either the drone’s flight system mods if you have a hover drone, reactive camouflage (and an invisibility field if your drone has it) if you have a stealth drone, or reductive plating if you have a combat drone. You can end the meld and return the drone to its normal form as a full action. Though it normally acts on your turn just after you, the drone can take no actions on that turn other than transforming back.',
    source: { book: 'Starfinder Core Rulebook', page: 72 },
    pfsLegal: true,
    prerequisites: ['mechanic_trick_drone'],
  },
  {
    id: 'energy_reflection',
    name: 'Energy Reflection',
    levelRequired: 8,
    shortDescription: 'Reflect resisted energy damage back at the source as a reaction.',
    fullDescription:
      'When you or your drone are dealt damage that’s subsequently reduced by your energy resistance, you can reflect some of that damage as a reaction. The source of the damage takes energy damage equal to the amount you or your drone resisted (Reflex half), dealing the same type of damage as was resisted. You or your drone must have a mechanic trick or drone mod that grants energy resistance (such as electromagnetic deflection, resistance, or resistant energy) to select this trick.',
    source: { book: 'Interstellar Species', page: 25 },
    pfsLegal: true,
    // This is an OR prerequisite; adjust to your prereq schema if you support "anyOf".
    prerequisites: ['grants_energy_resistance'],
  },
  {
    id: 'engine_plasma',
    name: 'Engine Plasma',
    levelRequired: 8,
    shortDescription: 'Vent hazardous energy behind your starship during starship combat (once per combat, more with Resolve).',
    fullDescription:
      'During the engineering phase of starship combat, you can perform a special engineer crew action called vent engines. As your starship moves during the next helm phase, it fills a number of consecutive hexes it departs with hazardous energy; the number of hexes filled can’t exceed your Intelligence modifier. The energy dissipates at the beginning of the following turn’s helm phase. Any starship that enters one or more of these hexes before then takes damage equal to 1d4 × your starship’s tier, distributed evenly across all four quadrants. You can use this action once per combat, though you can use it additional times by spending 1 Resolve Point for each additional use.',
    source: { book: 'Tech Revolution', page: 23 },
    pfsLegal: true,
  },
  {
    id: 'engineers_eye',
    name: "Engineer's Eye",
    levelRequired: 8,
    shortDescription: 'Get free checks to notice nearby traps/defects in machines or computers, including when boarding your ship.',
    fullDescription:
      'When you are within 10 feet of a trapped or malfunctioning machine or computer, you receive a free Computers, Engineering, or Perception check (as decided by the GM) to notice the trap or defect, whether or not you are actively looking. In addition, due to your intimate knowledge of your ship, you receive one of these checks whenever you board your ship to notice if anything is wrong with the ship’s systems.',
    source: { book: 'Starfinder Core Rulebook', page: 73 },
    pfsLegal: true,
  },
  {
    id: 'geomagnetic_charge',
    name: 'Geomagnetic Charge',
    levelRequired: 8,
    shortDescription: 'While shielded, convert electromagnetic deflection damage reduction into bonus damage on your next hit.',
    fullDescription:
      'As a reaction once per round while your energy shield is active and you reduce damage taken with your electromagnetic deflection trick, you can redirect the dissipated energy into a ranged energy weapon or melee weapon with the powered special property that you’re holding. The next time you hit with that weapon before the end of your next turn, you deal additional damage equal to the reduction provided by your electromagnetic deflection. You must be at least 8th level and have the electromagnetic deflection and energy shield mechanic tricks to learn this trick.',
    source: { book: 'Alien Archive 4', page: 61 },
    pfsLegal: true,
    prerequisites: ['electromagnetic_deflection', 'energy_shield'],
  },
  {
    id: 'ghost_intrusion',
    name: 'Ghost Intrusion',
    levelRequired: 8,
    shortDescription: 'Avoid triggering countermeasures or leaving logs when you barely fail to access systems.',
    fullDescription:
      'Whenever you use the Computers skill to access a system and you fail to overcome its defenses by 4 or less, you do not trigger any countermeasures and there is no log of your attempt. If you fail by 5 or more, any countermeasures take effect against you as normal.',
    source: { book: 'Starfinder Core Rulebook', page: 73 },
    pfsLegal: true,
  },
  {
    id: 'holographic_projector',
    name: 'Holographic Projector',
    levelRequired: 8,
    shortDescription: 'Project advanced holographic images at will using your custom rig.',
    fullDescription:
      'Your custom rig can project holographic images as a standard action as often as you like, as per 2nd-level holographic image except it can create speech and has a range of only 120 feet.',
    source: { book: 'Starfinder Core Rulebook', page: 73 },
    pfsLegal: true,
  },
  {
    id: 'hyperclocking',
    name: 'Hyperclocking',
    levelRequired: 8,
    shortDescription: 'Further improve your AI: gain AC bonuses and powerful Reflex benefits, depending on drone or exocortex.',
    fullDescription:
      'You further improve the response time of your AI. If you have a drone, your drone gains a +1 insight bonus to AC. In addition, if your drone is subjected to an attack that normally allows a Reflex save for half damage, it takes no damage if it succeeds at its saving throw. If you have an exocortex, you gain a +1 insight bonus to AC. In addition, whenever you fail a Reflex saving throw, you can spend 1 Resolve Point to reroll the saving throw (see page 243) and take the higher result. You must have the overclocking mechanic trick to learn this trick.',
    source: { book: 'Starfinder Core Rulebook', page: 73 },
    pfsLegal: true,
    prerequisites: ['overclocking'],
  },
  {
    id: 'implant_glitch',
    name: 'Implant Glitch',
    levelRequired: 8,
    shortDescription: 'Use Implant Ghost to disrupt a target’s cybernetics, imposing penalties based on implant location.',
    fullDescription:
      'When you successfully hack into a creature’s cybernetics using implant ghost, you can instead choose for your exocortex to broadcast garbage signals to the chosen implant, inflicting deleterious effects, depending on the system in which the implant is installed. If the implant is installed in an arm, hand, or brain, the target takes a –2 penalty to attack rolls. If the implant is installed in the ears or eyes, the target takes a –4 penalty to Perception checks. If the implant is installed in a foot or leg, the target takes a –2 penalty to Reflex saves, and if the implant is installed in any other system, the target takes a –2 penalty to Fortitude saves. A different penalty can be imparted at the GM’s discretion. Once established, this link lasts 1 round for every mechanic level you has, unless the target moves more than 100 feet from you, you fall unconscious, or you choose to end it (this takes no action). You must have an exocortex and the implant ghost mechanic trick to learn this trick.',
    source: { book: 'Starfinder #25: The Chimera Mystery', page: 49 },
    pfsLegal: true,
    prerequisites: ['mechanic_trick_exocortex', 'implant_ghost'],
  },
  {
    id: 'improved_overcharge',
    name: 'Improved Overcharge',
    levelRequired: 8,
    shortDescription: 'Increase overcharge’s bonus damage to 2d6.',
    fullDescription:
      'The additional damage of the overcharge mechanic trick increases to 2d6. You must have the overcharge mechanic trick to learn this trick.',
    source: { book: 'Starfinder Core Rulebook', page: 73 },
    pfsLegal: true,
    prerequisites: ['overcharge'],
  },
  {
    id: 'invisibility_bypass_processor',
    name: 'Invisibility Bypass Processor',
    levelRequired: 8,
    shortDescription: 'Use your visual data processor to see invisible creatures.',
    fullDescription:
      'Your visual data processor now allows you to see invisible creatures as per see invisibility. You must have the visual data processor mechanic trick to learn this trick.',
    source: { book: 'Starfinder Core Rulebook', page: 73 },
    pfsLegal: true,
    prerequisites: ['visual_data_processor'],
  },
  {
    id: 'manifold_shield',
    name: 'Manifold Shield',
    levelRequired: 8,
    shortDescription: 'Split your energy shield across multiple nearby targets, distributing temporary Hit Points.',
    fullDescription:
      'You’ve optimized your energy shield to protect multiple targets simultaneously. When you activate your energy shield trick, you can create energy shields targeting a number of creatures within your melee reach equal to your one-fourth your mechanic level. Each target gains a number of temporary Hit Points equal to your Intelligence modifier. In addition, you distribute an additional number of temporary Hit Points equal to your mechanic level between the shielded creatures; if you have the boost shield trick, you instead distribute additional temporary Hit Points equal to twice your mechanic level. You must have the projected shield mechanic trick to select this trick.',
    source: { book: 'Interstellar Species', page: 25 },
    pfsLegal: false,
    prerequisites: ['projected_shield'],
  },
  {
    id: 'mech_offensive_expert',
    name: 'Mech Offensive Expert',
    levelRequired: 8,
    shortDescription: 'Improve a mech’s base attack bonus and Strength modifier with an Engineering check; bonus improves at 15th level.',
    fullDescription:
      'Your extensive experience working on mechs enables you to improve their offensive performance. You can spend 1 minute working on a mech to attempt an Engineering check with a DC of 10 +1-1/2 × the mech’s tier. If you succeed, you can add +1 to the base attack bonus and strength modifier. Only one attempt can be made per specific mech, though you can attempt similar checks on other models of the same mech. At 15th level, this bonus increases to +2.',
    source: { book: 'Starfinder Enhanced', page: 47 },
    pfsLegal: true,
  },
  {
    id: 'mobile_armory',
    name: 'Mobile Armory',
    levelRequired: 8,
    shortDescription: 'Use Tech Tinkerer to transform weapons or armor upgrades into other items.',
    fullDescription:
      'You can modify a weapon or armor upgrade (either of which must not be archaic or analog) with the tech tinkerer mechanic trick. You can turn a weapon into another weapon or an armor upgrade into another armor upgrade, or turn either a weapon or an armor upgrade into a technological item. If you turn a weapon into another weapon that uses a different type of ammunition, you must provide that ammunition separately. You must have the tech tinkerer mechanic trick to learn this trick.',
    source: { book: 'Starfinder Armory', page: 146 },
    pfsLegal: true,
    prerequisites: ['tech_tinkerer'],
  },
  {
    id: 'program_spell_chip',
    name: 'Program Spell Chip',
    levelRequired: 8,
    shortDescription: 'Select technomancer spells you can craft into spell chips using Computers ranks; expands as you level.',
    fullDescription:
      'Your programming skills can achieve near-magical results. Choose two 0-level spells, two 1st-level spells, two 2nd-level spells, and two 3rd-level spells from the technomancer spell list. You can craft spell chips of these spells, provided you have a number of ranks in Computers equal to the number of ranks in Mysticism that would normally be required. Rather than access to a workshop, you need access to a computer of a tier greater than or equal to the level of the spell you are programming into the spell chip. At 9th level and each subsequent mechanic level, you can choose one additional technomancer spell for which you can create spell chips. Beginning at 11th level, you can choose 4th-level technomancer spells. At 14th level, you can choose 5th-level technomancer spells, and at 17th level, you can choose 6th-level technomancer spells.',
    source: { book: 'Galactic Magic', page: 23 },
    pfsLegal: true,
  },
  {
    id: 'rapid_scanner',
    name: 'Rapid Scanner',
    levelRequired: 8,
    shortDescription: 'Improve Sample Scanner: scan faster, or scan normally without limiting your exocortex.',
    fullDescription:
      'When you use the sample scanner trick, your exocortex takes only 1d4 minutes to analyze materials or items (rather than 10 minutes). Alternatively, you can choose not to accelerate the process, in which case the scanning process doesn’t prevent you from using your exocortex’s memory module and doesn’t limit the number of targets your exocortex can track. You must have the sample scanner mechanic trick to select this mechanic trick.',
    source: { book: 'Galaxy Exploration Manual', page: 19 },
    pfsLegal: true,
    prerequisites: ['sample_scanner', 'mechanic_trick_exocortex'],
  },
  {
    id: 'recalibrate_weapon',
    name: 'Recalibrate Weapon',
    levelRequired: 8,
    shortDescription: 'Modify a ranged weapon’s range and damage tradeoffs (and recalibrate starship weapons in combat).',
    fullDescription:
      'As a standard action, you can use your custom rig to modify a touched ranged small arm, longarm, or heavy weapon. You can increase its range increment by 20 feet (or double, whichever is less), but doing so reduces the weapon’s damage dice by 1 when wielded by anyone other than you (for example, a weapon that would normally deal 3d8 damage deals 2d8 damage instead; a weapon reduced to 0 dice does 1 damage) or reduce its save DC by 2 for weapons that don’t use damage dice. You can instead reduce the range increment of such a weapon with a range increment of at least 40 feet to one-quarter its normal range and either increase its damage by 1d6 of its usual type or increase its save DC by 1 (for weapons that do not use damage dice). The item must be unattended or held by a willing creature. This change lasts for 1 minute per mechanic level or until you reverse the effect with a move action.\n\nAdditionally, when filling the engineer role during starship combat, instead of taking any other action you can spend 1 Resolve Point to modify a single non-capital weapon. You either extend or shorten the weapon’s range by one step; doing so reduces its damage dice by 1 (such as 4d4 to 3d4, with weapons reduced to 0 dice doing 1 damage) or increases its damage by 1d6, respectively. You can’t reduce a weapon’s range below short or extend it beyond long. Any change lasts for 1 round per mechanic level or until you undo the recalibration as a push engineer action.',
    source: { book: 'Starfinder Armory', page: 147 },
    pfsLegal: true,
  },
  {
    id: 'remote_denial_of_service',
    name: 'Remote Denial of Service',
    levelRequired: 8,
    shortDescription: 'Spend Resolve to temporarily deactivate an enemy’s tech item at range (Reflex negates).',
    fullDescription:
      'As a standard action, you can spend 1 Resolve Point to attempt to temporarily deactivate one technological weapon, piece of equipment, or armor upgrade carried by an enemy within 60 feet. Roll 1d20 + your mechanic level; the DC is equal to 15 + 1-1/2 × the item level. If you succeed, you deactivate the device until the end of that enemy’s next turn. The device’s owner can attempt a Reflex save to negate this effect; whether or not they succeed, you can’t choose the same target for this ability for 24 hours.',
    source: { book: 'Starfinder Enhanced', page: 47 },
    pfsLegal: true,
  },
  {
    id: 'resistant_energy',
    name: 'Resistant Energy',
    levelRequired: 8,
    shortDescription: 'Gain resistance 5 to a chosen energy type even when your shield is inactive.',
    fullDescription:
      'Even when your energy shield is inactive, the ambient energy protects you from a particular type of energy attack. Choose acid, cold, electricity, fire, or sonic. You gain resistance 5 against that energy type. You must have the energy shield mechanic trick to learn this trick.',
    source: { book: 'Starfinder Core Rulebook', page: 73 },
    pfsLegal: true,
    prerequisites: ['energy_shield'],
  },
  {
    id: 'scoutbot',
    name: 'Scoutbot',
    levelRequired: 8,
    shortDescription: 'Spend Resolve to create a short-lived scouting construct that streams data to your rig.',
    fullDescription:
      'You’re always crafting rudimentary bots in your spare time, and can use them to scout. It takes you 10 minutes and 1 Resolve Point to create a scoutbot. A scoutbot is a Small technological construct, its EAC and KAC are equal to 10 + your mechanic level, and it has 1 Hit Point per mechanic level you have (and no Stamina Points). It has a land speed of 30 feet, and you can control its movements with your custom rig as a move action. It has a camera that streams visual and auditory data back to your rig. The scoutbot uses your saving throw bonuses if necessary. It is untrained in all skills and has a +0 bonus in all of them, though you can use your own Perception skill when examining the feed from its stream. Once created, the scoutbot lasts for 1 minute per mechanic level you have before falling apart unless otherwise destroyed.',
    source: { book: 'Starfinder Core Rulebook', page: 73 },
    pfsLegal: true,
  },
  {
    id: 'shocking_overload',
    name: 'Shocking Overload',
    levelRequired: 8,
    shortDescription: 'Deal electricity damage with overload/override when the target fails its save.',
    fullDescription:
      'You can use your overload or override class feature to damage a creature. When you successfully use overload to cause a short in an electronic device in someone’s possession and the item’s owner fails their Reflex saving throw, that creature takes electricity damage as a result of the power surge. This surge deals 1d6 electricity damage per 4 levels of mechanic you have. When you use your override class feature to affect an android, drone, robot, or other creature with the technological subtype, that creature takes 1d6 electrical damage per 2 levels of mechanic you have and can attempt a Reflex saving throw (DC = 10 + half your mechanic level + your Intelligence modifier) to negate this damage.',
    source: { book: 'Character Operations Manual', page: 75 },
    pfsLegal: true,
  },
  {
    id: 'speed_scan',
    name: 'Speed Scan',
    levelRequired: 8,
    shortDescription: 'Quickly identify general data categories on storage devices using remote hack.',
    fullDescription:
      'As a standard action, you can get a general sense of what information is stored on drives or other technological storage media. You must be within range of the device to use your remote hack ability, but you don’t have to touch it or connect to it. The information you get is very general, such as “financial records,” “military records,” or “spells.” Getting detailed information requires interfacing with the data more directly. If you attempt a speed scan on a creature that stores its memories in a digital medium—to get a sense of the memories stored in a robot, for example—the target can attempt a Will save to negate the scan. You can attempt this multiple times per day, but can use it against a given target only once per 24 hours.',
    source: { book: 'Starfinder Enhanced', page: 48 },
    pfsLegal: true,
  },
  {
    id: 'stranded_innovations',
    name: 'Stranded Innovations',
    levelRequired: 8,
    shortDescription: 'Upgrade Stranded Inventions to craft higher-level items and improve battery behavior.',
    fullDescription:
      'Your skill at crafting with low-tech resources is superb. You can use your stranded inventions mechanic trick to craft a technological item whose item level doesn’t exceed your ranks in Engineering –1. If you craft a technological item or weapon that uses batteries, it doubles the usage, but it isn’t limited to a single use per day and requires eight hours to recharge. You must have the stranded inventions mechanic trick to select this mechanic trick.',
    source: { book: 'Galaxy Exploration Manual', page: 19 },
    pfsLegal: true,
    prerequisites: ['stranded_inventions'],
  },
  {
    id: 'team_triage',
    name: 'Team Triage',
    levelRequired: 8,
    shortDescription: 'Use Computers instead of Medicine for emergency treatment, building on Field Triage.',
    fullDescription:
      'Your artificial intelligence aids you in providing emergency treatment for others on your team. You can use your Computers modifier instead of your Medicine modifier when treating deadly wounds or treating disease. You must have an exocortex to select this trick.\nYou must have the field triage mechanic trick to learn this trick.',
    source: { book: 'Starfinder Enhanced', page: 48 },
    pfsLegal: true,
    prerequisites: ['mechanic_trick_exocortex', 'field_triage'],
  },
  {
    id: 'technological_innovator',
    name: 'Technological Innovator',
    levelRequired: 8,
    shortDescription: 'Preselect two tricks and temporarily gain one of them once per day.',
    fullDescription:
      'Choose two mechanic tricks you meet the prerequisites for but don’t have. Once per day as a move action, you can gain one of these tricks for 10 minutes. Each time you gain a mechanic level, you can replace one of these mechanic tricks with another that you meet the prerequisites for but don’t have.',
    source: { book: 'Starfinder Armory', page: 147 },
    pfsLegal: true,
  },
  {
    id: 'tool_module',
    name: 'Tool Module',
    levelRequired: 8,
    shortDescription: 'Install a one-hand tech item into your experimental weapon prototype for integrated use and shared battery charges.',
    fullDescription:
      'You can spend 10 minutes (during which time you can’t rest to recover Stamina Points) installing a technological item that you can operate with one hand into your experimental weapon prototype. While you’re holding your experimental weapon prototype in at least one hand, you can use the installed item as if you were holding it. If the technological item and your experimental weapon prototype both use batteries of the same capacity, they can expend charges from each other’s batteries. The technological item remains joined to the weapon until you uninstall it with 10 minutes of work. You can’t have more than one item installed in your experimental weapon prototype at a time. You must have an experimental weapon prototype to select this mechanic trick.',
    source: { book: 'Galaxy Exploration Manual', page: 19 },
    pfsLegal: true,
    prerequisites: ['experimental_weapon_prototype'],
  },
  {
    id: 'vehicular_miracle',
    name: 'Vehicular Miracle',
    levelRequired: 8,
    shortDescription: 'Gain an extra Miracle Worker use and extend it to vehicles, including temporary function for wrecked vehicles.',
    fullDescription:
      'You can use your miracle worker mechanic class ability one additional time per day, and you can also affect non-starship vehicles with that ability. If the vehicle isn’t wrecked, you restore a number of the vehicle’s Hit Points equal to twice your class level. If the vehicle’s new Hit Points aren’t high enough to remove its broken status, the vehicle functions as if it weren’t broken until the end of your next turn. If you also spend 1 Resolve Point, you can use this ability on a wrecked vehicle, though the vehicle only functions for a number of minutes equal to your Intelligence modifier before being reduced to 0 Hit Points and becoming wrecked again. You can only restore function to a specific wrecked vehicle in this way once, after which that vehicle becomes immune to subsequent uses of the ability. You must have the miracle worker mechanic class ability to choose this trick.',
    source: { book: 'Tech Revolution', page: 23 },
    pfsLegal: true,
    prerequisites: ['miracle_worker'],
  },
// Level 10 Mechanic Tricks //
  {
    id: 'adapt_weaponry',
    name: 'Adapt Weaponry',
    levelRequired: 10,
    shortDescription: 'Select special weapon properties and apply one to your wielded weapon as a move action (repeatable).',
    fullDescription:
      'Choose two of the following special weapon properties: block, bright, deflect, feint, penetrating, or sunder. As a move action, you can apply one of the selected special weapon properties to a weapon you’re wielding. You can select this trick multiple times; each time, select two additional special weapon properties and add them to the list of available properties (you still apply only one at a time). You can maintain one modified weapon at a time in this way.',
    source: { book: 'Starfinder Enhanced', page: 48 },
    pfsLegal: true,
    repeatable: true,
  },
  {
    id: 'holographic_duplicate',
    name: 'Holographic Duplicate',
    levelRequired: 10,
    shortDescription: 'Spend Resolve to create a moving holographic double for 1 round per level (Will save to disbelieve).',
    fullDescription:
      'As a standard action, you can spend 1 Resolve Point to create a single realistic, holographic duplicate of yourself that can do nothing but move away from you for 1 round per mechanic level. The double climbs walls, jumps across pits, or simply passes through obstacles, moving at twice your speed in one direction indicated by you when the ability is activated. Its course cannot be changed. Those who interact with the double can attempt a Will save to recognize that it isn’t real.',
    source: { book: 'Starfinder Enhanced', page: 48 },
    pfsLegal: true,
  },
  {
    id: 'magnetic_field',
    name: 'Magnetic Field',
    levelRequired: 10,
    shortDescription: 'Create a debris cloud for ranged concealment, then recharge after a 10-minute rest.',
    fullDescription:
      'You can adjust the polarity of your armor to create a shifting magnetic field. As a standard action, you can create a cloud of metallic debris, microscopic particles, and small items that orbits you, granting you concealment against ranged attacks. This ability functions for a number of rounds equal to your Intelligence modifier. You can’t use this ability again until you spend 1 Resolve Point to regain Stamina Points after a 10-minute rest.\nAt 18th level, your magnetic field thickens, increasing the miss chance from your concealment to 50% against ranged attacks (though you are not considered to have total concealment).',
    source: { book: 'Starfinder Enhanced', page: 48 },
    pfsLegal: true,
  },
  {
    id: 'penetrating_boost',
    name: 'Penetrating Boost',
    levelRequired: 10,
    shortDescription: 'Spend Resolve on a hit to reduce a target’s energy resistances for that attack (scales by level).',
    fullDescription:
      'You can optimize your weapons to bypass part of your target’s resistances. When you hit with a weapon that does energy damage, if your attack does not already overcome the target’s energy resistance, you can spend 1 Resolve point to treat the target’s energy resistances as though they were each 5 lower. At 14th level, treat the target’s energy resistances as 10 lower, and at 18thlevel, treat the target’s energy resistances as 15 lower.',
    source: { book: 'Starfinder Enhanced', page: 48 },
    pfsLegal: true,
  },
  {
    id: 'remote_mech_operation',
    name: 'Remote Mech Operation',
    levelRequired: 10,
    shortDescription: 'Grant a mech autopilot and control it remotely; expands at higher levels.',
    fullDescription:
      'Your custom rig enables you to operate a mech remotely. It gains the autopilot function with a Piloting bonus equal to 4 + 1-1/2 × the mech’s tier. You can use your custom rig to controlthe autopilot at a range of 5 miles, allowing you to engage, disengage, or enter coordinates for the autopilot as if you were in the mech. This range increases to 50 miles if you have the expert rig ability, 500 miles if you have the advanced rig ability, and has a planetary range if you have the superior rig ability. At 10th level, this ability only allows movement of the mech. At 14th you can spend 1 Resolve Point to remotely operate all systems onboard the mech as if you were in it, and at 18th level the range at which you can remotely operate all systems of the mech doubles.',
    source: { book: 'Starfinder Enhanced', page: 48 },
    pfsLegal: false,
  },
  {
    id: 'remote_threat_tracking',
    name: 'Remote Threat Tracking',
    levelRequired: 10,
    shortDescription: 'Spend Resolve after a successful Reflex save to take no effect (light/no armor, unencumbered; exocortex).',
    fullDescription:
      'You can track and avoid threats using your AI. If you succeed at a Reflex save against an effect that normally has a partial effect on a successful save, as a reaction you can spend 1 Resolve Point to instead suffer no effect. You gain this benefit only when unencumbered and wearing light armor or no armor, and you lose the benefit when you are helpless or otherwise unable to move. You must have an exocortex to learn this trick.',
    source: { book: 'Starfinder Enhanced', page: 49 },
    pfsLegal: true,
    prerequisites: ['mechanic_trick_exocortex'],
  },
  {
    id: 'spell_trap',
    name: 'Spell Trap',
    levelRequired: 10,
    shortDescription: 'Spend Resolve after dealing damage to drain and store a spell in a spell chip (Will negates), gaining follow-up benefits.',
    fullDescription:
      'You have honed your programming skills to enable you to capture spells cast by others for later use. As a reaction after you deal damage to a creature within 30 feet with an attack, you can spend 2 Resolve Points to drain a portion of that creature’s magical energy (Will negates) and store it within a crafted spell chip. If the creature fails its saving throw, it loses one spell slot of the highest level it knows as if it had expended it. If the creature has only spell-like abilities, it loses one daily use of the highest-level spell-like ability it can cast (determined randomly). If the creature can’t cast spells or use spell-like abilities, this ability has no effect, and you regain the Resolve Points expended.\nIf you successfully trap a spell or spell-like ability, you gain a +1 enhancement bonus to AC until the end of your next turn. When you deal damage with a weapon attack, you can end this AC bonus to increase the damage dealt to one target by 1d6 per level of the drained spell or spell-like ability.',
    source: { book: 'Starfinder Enhanced', page: 49 },
    pfsLegal: true,
  },
  {
    id: 'weapon_mimicry',
    name: 'Weapon Mimicry',
    levelRequired: 10,
    shortDescription: 'Gain an ally’s weapon proficiency (and possibly Weapon Specialization) for a short time (exocortex).',
    fullDescription:
      'Your AI enables you to temporarily gain expertise with weapons your allies use. As a move action, you become proficient with a type of weapon with which an ally within 30 feet is proficient. If that ally has Weapon Specialization with that weapon type, you can also apply that ally’s Weapon Specialization with that weapon type. This ability’s effects last a number of rounds equal to half your mechanic level, after which you can’t use this ability again until after you spend 1 Resolve Point to regain Stamina Points after a 10-minute rest. You must have an exocortex to learn this trick.',
    source: { book: 'Starfinder Enhanced', page: 49 },
    pfsLegal: true,
    prerequisites: ['mechanic_trick_exocortex'],
  },
// Level 14 Mechanic Tricks //
  {
    id: 'energy_transference',
    name: 'Energy Transference',
    levelRequired: 14,
    shortDescription: 'Spend Resolve after taking energy damage to supercharge nearby weapons.',
    fullDescription:
      'Inspired by a shimreen’s ability to amplify damage, you’ve modified your custom rig to do the same. Whenever you take energy damage and have your custom rig in your possession, you can spend 1 Resolve Point as a reaction to channel some of that energy into one, two, or three weapons within 30 feet of you. The affected weapons are each supercharged, as supercharge weapon.',
    source: { book: 'Interstellar Species', page: 25 },
    pfsLegal: true,
  },
  {
    id: 'experimental_cortex_design',
    name: 'Experimental Cortex Design',
    levelRequired: 14,
    shortDescription: 'Gain Overclocking and count as having an exocortex for certain tricks (requires neither drone nor exocortex).',
    fullDescription:
      'You harness technologies normally available only to those with an exocortex. You gain the overclocking mechanic trick, and you’re treated as having an exocortex for the purposes of the overclocking, hyperclocking, and ultraclocking mechanic tricks. You must have neither a drone nor an exocortex to select this mechanic trick.',
    source: { book: 'Galaxy Exploration Manual', page: 19 },
    pfsLegal: true,
    prerequisites: ['mechanic_no_drone', 'mechanic_no_exocortex'],
    grants: ['overclocking'],
  },
  {
    id: 'extra_mod',
    name: 'Extra Mod',
    levelRequired: 14,
    shortDescription: 'Gain one additional basic mod for your drone or exocortex (with restrictions).',
    fullDescription:
      'If you have a drone, your drone gains an additional basic mod. If you have an exocortex, you gain an additional basic mod. It can’t be a basic mod taken a second time as an advanced mod. You can rebuild this extra mod when you gain a mechanic level as with any other mod, but you can’t rebuild this mod to convert it into the advanced version of the mod.',
    source: { book: 'Starfinder Core Rulebook', page: 73 },
    pfsLegal: true,
  },
  {
    id: 'forced_deconstruction',
    name: 'Forced Deconstruction',
    levelRequired: 14,
    shortDescription: 'Add extra damage vs constructs/objects/tech subtype and ignore hardness for the round.',
    fullDescription:
      'As a swift action, you can cause a wielded weapon to deal additional damage equal to your Intelligence modifier to constructs, objects, and creatures with the technological subtype. In addition, these attacks and abilities ignore an amount of hardness equal to your mechanic level. This hardness reduction doesn’t stack with that of the penetrating weapon property; instead, the weapon’s item level is increased by an amount equal to your Intelligence modifier for the purpose of calculating the amount of hardness the weapon ignores. These effects last until the end of the round.',
    source: { book: 'Starfinder Enhanced', page: 49 },
    pfsLegal: true,
  },
  {
    id: 'improved_resistant_energy',
    name: 'Improved Resistant Energy',
    levelRequired: 14,
    shortDescription: 'Gain resistance 15 to two energy types (requires Energy Shield and Resistant Energy).',
    fullDescription:
      'Choose an additional energy type from resistant energy. You gain resistance 15 against both this and your original energy type. You must have the energy shield and resistant energy mechanic tricks to learn this trick.',
    source: { book: 'Starfinder Core Rulebook', page: 73 },
    pfsLegal: true,
    prerequisites: ['energy_shield', 'resistant_energy'],
  },
  {
    id: 'inventive_engineer',
    name: 'Inventive Engineer',
    levelRequired: 14,
    shortDescription: 'Spend Resolve in starship combat to boost ship capabilities for turns per level (one option at a time).',
    fullDescription:
      'You are adept at recalibrating and enhancing a starship’s systems. When acting in the engineer or chief mate roles during starship combat, instead of taking any other action, you can spend 1 Resolve Point to temporarily boost your starship’s capabilities. Choose one of the following options. Any change lasts for 1 turn of starship combat per mechanic level. A ship can benefit from only one of these options at a time; if it gains another of these benefits from any source, any previous inventive engineer benefit ends.\nAmplify Shields: You double the regeneration speed of your ship’s shields.\nAngle Shields: Select one weapon arc of your starship. Any attack made against you from a starship in that arc takes a –1 penalty to the attack roll.\nCountermeasures: Your starship’s TL increased by 1.\nLow Power Mode: You reduce the PCU cost of a specific system by 10 (minimum 5 PCU).\nSpeed Boost: You increase your ship’s speed by 2 hexes.',
    source: { book: 'Character Operations Manual', page: 75 },
    pfsLegal: true,
  },
  {
    id: 'invisibility_hampering_projector',
    name: 'Invisibility-Hampering Projector',
    levelRequired: 14,
    shortDescription: 'Overlay a hologram on an invisible creature to negate invisibility while it stays within 120 feet.',
    fullDescription:
      'As a move action, you can use your custom rig’s holographic projector to project a holographic image in a direct overlay over an invisible creature within 120 feet, and your custom rig’s computer moves the image to follow the invisible creature, effectively negating the creature’s invisibility as long as it remains within 120 feet of you. If it moves beyond that range, it breaks the effect until you use this ability again. You must have the holographic projector, invisibility bypass processor, and visual data processor mechanic tricks to learn this trick.',
    source: { book: 'Starfinder Core Rulebook', page: 73 },
    pfsLegal: true,
    prerequisites: ['holographic_projector', 'invisibility_bypass_processor', 'visual_data_processor'],
  },
  {
    id: 'mech_calibration_expert',
    name: 'Mech Calibration Expert',
    levelRequired: 14,
    shortDescription: 'Work on mechs faster and spend Resolve to reduce Power Point costs for mech actions.',
    fullDescription:
      'You have become an expert at tuning mechs for maximum efficiency. You reduce the time required to remove a system failure condition as well as restore Hit Points to a mech by 50%. In addition, once per round during mech combat, you can spend 1 Resolve Point to decrease the number of Power Points required for the next mech action by 1 (to a minimum of 0) until the next round.',
    source: { book: 'Starfinder Enhanced', page: 49 },
    pfsLegal: true,
  },
  {
    id: 'melded_mod',
    name: 'Melded Mod',
    levelRequired: 14,
    shortDescription: 'While using Drone Meld, keep access to one basic drone mod (with limitations).',
    fullDescription:
      'When you use your drone meld trick, your drone retains access to one of its basic mods. If the mod grants the drone abilities, attacks, or senses, you can use that ability, attack, or sense. If the mod lets the drone take an action without you commanding it to (such as the medical subroutine mod), the drone can end the drone meld and perform that action if the circumstances that would normally cause it to do so are fulfilled. If the mod requires equipment or tools that are not granted as part of the mod, you must have the appropriate equipment or tolls, separate from your drone, to use the mod. You can’t choose a mod that requires another mod. You must have the drone meld mechanic trick to learn this trick.',
    source: { book: 'Starfinder Armory', page: 147 },
    pfsLegal: true,
    prerequisites: ['drone_meld', 'mechanic_trick_drone'],
  },
  {
    id: 'mod_tinkerer',
    name: 'Mod Tinkerer',
    levelRequired: 14,
    shortDescription: 'Spend 24 hours to swap all drone/exocortex mods without leveling.',
    fullDescription:
      'You can spend 24 hours of uninterrupted work to exchange all your drone or exocortex mods at any time, even if you haven’t gained a level. Any other drone features (such as its chassis or bonus feats) can still be exchanged only when you gain a level.',
    source: { book: 'Starfinder Core Rulebook', page: 73 },
    pfsLegal: true,
  },
  {
    id: 'prototype_tinkerer',
    name: 'Prototype Tinkerer',
    levelRequired: 14,
    shortDescription: 'Spend 8 hours to rebuild your experimental prototype without leveling (even from broken/destroyed).',
    fullDescription:
      'You can spend 8 hours of uninterrupted work to rebuild your experimental prototype at any time, even if you haven’t gained a level. You may do this even if it is broken or destroyed, and can even rebuild it from scratch if you have appropriate spare parts or scrap. This allows you to exchange any customizations you have selected. You must have an experimental prototype to learn this trick.',
    source: { book: 'Character Operations Manual', page: 75 },
    pfsLegal: true,
    prerequisites: ['experimental_prototype'],
  },
  {
    id: 'ranged_coordination',
    name: 'Ranged Coordination',
    levelRequired: 14,
    shortDescription: 'Trigger allied ranged follow-up attacks, but participants become staggered; recharges after a rest.',
    fullDescription:
      'As a reaction when you or an ally within 60 feet of you makes a ranged attack against an opponent, you can signal all allies within 60 feet of the attacking character. Signaled characters can take a reaction to make a ranged attack against the triggering opponent if they are within 60 feet of both the opponent and the ally making the initial ranged attack. All characters that attack the opponent using this ability become staggered until the end of their next turn. Once you use this ability, you can’t use it again until after you regain Stamina Points following a 10-minute rest.',
    source: { book: 'Starfinder Enhanced', page: 49 },
    pfsLegal: true,
  },
  {
    id: 'remote_starship_operation',
    name: 'Remote Starship Operation',
    levelRequired: 14,
    shortDescription: 'Grant a starship autopilot and control it remotely; also lets you switch roles mid-round in starship combat.',
    fullDescription:
      'Your custom rig enables you to operate a starship remotely. It gains the autopilot function with a Piloting bonus equal to 4 + 1-1/2 × the starship’s tier. You can use your custom rig to control the autopilot at a range of 5,000 miles, allowing you to engage, disengage, or enter coordinates for the autopilot as if you were in the starship. This range increases to planetary range if you have the expert rig ability, to solar system-wide range if you have the advanced rig ability, and has unlimited range if you have the superior rig ability. This ability allows the starship only to move and does not allow it to take actions during starship combat.\nAdditionally, you can switch roles at any point during a starship combat round, provided that you have not yet taken an action.',
    source: { book: 'Starfinder Enhanced', page: 49 },
    pfsLegal: true,
  },
  {
    id: 'saboteur',
    name: 'Saboteur',
    levelRequired: 14,
    shortDescription: 'Roll twice to sabotage/disable devices and do so faster with proper tools.',
    fullDescription:
      'Whenever you use the Engineering skill to sabotage or disable a device, you can roll twice and take the better result. In addition, if you have the appropriate tools (including your custom rig), performing these tasks takes half the normal amount of time, to a minimum of 1 move action.',
    source: { book: 'Starfinder Core Rulebook', page: 73 },
    pfsLegal: true,
  },
  {
    id: 'scoutbot_mod',
    name: 'Scoutbot Mod',
    levelRequired: 14,
    shortDescription: 'Give each scoutbot you create one basic drone mod (requires Scoutbot).',
    fullDescription:
      'Whenever you create a scoutbot, you can give it one basic drone mod. You must have the scoutbot mechanic trick to learn this trick.',
    source: { book: 'Starfinder Armory', page: 147 },
    pfsLegal: true,
    prerequisites: ['scoutbot'],
  },
  {
    id: 'superior_overcharge',
    name: 'Superior Overcharge',
    levelRequired: 14,
    shortDescription: 'Increase overcharge bonus damage to 4d6, and higher when taken multiple times (repeatable).',
    fullDescription:
      'The additional damage of the overcharge mechanic trick increases to 4d6. You must have the overcharge and improved overcharge mechanic tricks to learn this trick. You can select this trick multiple times. Each time you do after the first, increase the damage by 1d6 (to a maximum of 7d6 if you select it all four times).',
    source: { book: 'Starfinder Core Rulebook', page: 74 },
    pfsLegal: true,
    prerequisites: ['overcharge', 'improved_overcharge'],
    repeatable: true,
    maxSelections: 4,
  },
  {
    id: 'superior_science_officer',
    name: 'Superior Science Officer',
    levelRequired: 14,
    shortDescription: 'Spend Resolve in starship combat to enhance your ship’s computer for rounds per level (one option at a time).',
    fullDescription:
      'You excel at operating starship computer systems, and you can exploit your ship’s programming in ways others can’t. When acting in the science officer role during starship combat, instead of taking any other action, you can spend 1 Resolve Point to temporarily enhance your starship’s computer. Any change lasts for 1 round per mechanic level. A ship can benefit from only one of these options at a time; if it gains another of these benefits from any source, any previous superior science officer option ends.\nImproved Sensors: Your scan actions reveal an additional piece of information about the starship being scanned. For instance, if your Computers skill check to scan a starship succeeds by 5 or more, you learn two pieces of information instead of one.\nTargeted Sensors: When you perform a scan action, you can choose which information category to learn information about, regardless of the normal order of information you would learn.\nUpgrade Node: You divert additional power to your starship’s computer, granting the computer’s bonus to one additional starship combat check per round.',
    source: { book: 'Character Operations Manual', page: 75 },
    pfsLegal: true,
  },
  {
    id: 'surging_power',
    name: 'Surging Power',
    levelRequired: 14,
    shortDescription: 'Drain charges from a target’s item and charge your battery; can add damage if the item is wielded.',
    fullDescription:
      'As a reaction when you use a weapon that requires charges to damage a creature within 30 feet, you can drain power from the target’s technological devices. Choose one item in the target’s possession that uses charges or select such an item at random. That item loses a number of charges equal to 1d10 plus your Intelligence modifier (Fortitude half), and a battery in your possession gains an equal number of charges (to a maximum of the battery’s capacity). If the item is currently being wielded, the target takes additional damage equal to the number of charges drained. You can use this ability a number of times per day equal to your Intelligence modifier.',
    source: { book: 'Starfinder Enhanced', page: 49 },
    pfsLegal: true,
  },
  {
    id: 'ultraclocking',
    name: 'Ultraclocking',
    levelRequired: 14,
    shortDescription: 'Gain haste (you or your drone) for 1 minute as a move action; recharges after a rest.',
    fullDescription:
      'If you have a drone, you can grant the effects of haste to your drone for 1 minute as a move action. If you have an exocortex, you can gain the effects of haste for 1 minute as a move action. Once you or your drone has used this ability, you cannot use it again until you spend 1 Resolve Point to regain Stamina Points from a 10-minute rest. You must have the overclocking and hyperclocking mechanic tricks to learn this trick.',
    source: { book: 'Starfinder Core Rulebook', page: 74 },
    pfsLegal: true,
    prerequisites: ['overclocking', 'hyperclocking'],
  }
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
  // ===== 2nd-level knacks =====
  {
    id: 'abundant_nanites',
    name: 'Abundant Nanites',
    levelRequired: 2,
    shortDescription: 'Treat your Constitution modifier as 2 higher for nanite surges and gear bulk.',
    fullDescription:
      'Your body houses a seemingly inexhaustible amount of nanites. When calculating your number of nanite surges per day and the maximum bulk of your nanite gear, treat your Constitution modifier as 2 higher.',
    source: { book: 'Tech Revolution', page: 13 },
    pfsLegal: true,
  },
  {
    id: 'agile_host',
    name: 'Agile Host',
    levelRequired: 2,
    shortDescription: 'Apply your sheath array’s insight bonus to initiative.',
    fullDescription:
      'While your sheath array is active, you can apply its bonus to skill checks as an insight bonus to your initiative checks.',
    source: { book: 'Tech Revolution', page: 14 },
    pfsLegal: true,
  },
  {
    id: 'cushioning_form',
    name: 'Cushioning Form',
    levelRequired: 2,
    shortDescription: 'Reduce falling damage; surge for greater protection.',
    fullDescription:
      'You manipulate your nanites to slow your descent and cushion you from falls. While your sheath array is active, you treat falls as 20 feet shorter. You can use a nanite surge as a reaction to instead treat falls as 60 feet shorter for 1 round.',
    source: { book: 'Interstellar Species', page: 26 },
    pfsLegal: true,
  },
  {
    id: 'cushioning_sheath',
    name: 'Cushioning Sheath',
    levelRequired: 2,
    shortDescription: 'Convert early fall damage to nonlethal and ignore more damage with Acrobatics.',
    fullDescription:
      'You’re instinctively able to gather your nanite array beneath you to help break your fall when said fall would otherwise break you. When your sheath array is active, the surface on which you fall always counts as yielding (Core Rulebook 400), converting the damage from the first 10 feet of a fall to nonlethal bludgeoning damage. In addition, when your sheath array is active, for every 5 by which your Acrobatics check exceeds the DC to avoid taking damage from the first 10 feet of a fall, you can ignore the damage from an additional 10 feet of falling.',
    source: { book: 'Ports of Call', page: 103 },
    pfsLegal: true,
  },
  {
    id: 'defensive_manifestation',
    name: 'Defensive Manifestation',
    levelRequired: 2,
    shortDescription: 'Gain shield proficiency and manifest a shield alongside a weapon.',
    fullDescription:
      'You use your nanites for defensive purposes. You gain proficiency with shields and can learn one shield as a bonus major form. When using your gear array to form a one-handed melee weapon or small arm, you can additionally manifest a shield. This counts as only one array for determining the number of arrays you have active.',
    source: { book: 'Starfinder Enhanced', page: 54 },
    pfsLegal: true,
  },
  {
    id: 'drifting_host',
    name: 'Drifting Host',
    levelRequired: 2,
    shortDescription: 'Increase the distance your nanites can drift from you.',
    fullDescription:
      'Whether pulled by waves or other forces, you’re used to drifting far from your nanites and can control them at further distances. The distance you can be from your nanites at the end of your turn before they disperse increases to 15 feet. At 10th level, this distance increases to 20 feet, and at 18th level, to 25 feet.',
    source: { book: 'Interstellar Species', page: 26 },
    pfsLegal: true,
  },
  {
    id: 'esoteric_edge',
    name: 'Esoteric Edge',
    levelRequired: 2,
    shortDescription: 'Gain special weapon proficiency and a bonus major form.',
    fullDescription:
      'You gain proficiency with two special weapons, you can select special weapons when learning new major forms, and you learn one special weapon as a bonus major form. At 3rd level, you gain weapon specialization in the two selected weapons just as if your class granted proficiency.',
    source: { book: 'Tech Revolution', page: 14 },
    pfsLegal: true,
  },
  {
    id: 'glimmering_nanites',
    name: 'Glimmering Nanites',
    levelRequired: 2,
    shortDescription: 'Nanites emit controllable dim light and visual signals.',
    fullDescription:
      'Your nanites emit pinpricks of colorful light. Your nanite cloud sheds dim light in its space and each space adjacent to it. You can suppress or activate this light as a move action. This light can be used to communicate in Lumos and other light-based visual languages you know.',
    source: { book: 'Interstellar Species', page: 26 },
    pfsLegal: true,
  },
  {
    id: 'heavy_armor_edge',
    name: 'Heavy Armor Edge',
    levelRequired: 2,
    shortDescription: 'Gain heavy armor proficiency and reduce its bulk.',
    fullDescription:
      'Your nanites allow you to move comfortably while wearing thick gear. You gain proficiency with heavy armor, and you treat the bulk of heavy armor you wear as 1 lower.',
    source: { book: 'Tech Revolution', page: 14 },
    pfsLegal: true,
  },
  {
    id: 'instant_ward',
    name: 'Instant Ward',
    levelRequired: 2,
    shortDescription: 'Create a temporary ward against fey, outsiders, and undead.',
    fullDescription:
      'Your nanites can inscribe magical sigils, creating temporary wards against supernatural beings. As a standard action while your eldritch array or cloud array is active, you can direct your nanites to create a protective ward in a 5-foot square. This ward must be created on a stable surface, such as a wall or floor, and it is clearly visible. If your eldritch array is active, this ward appears in one square you occupy. If your cloud array is active, the ward appears in one square your cloud array occupies. When you or an ally stand in the warded square, that creature gains a +1 divine bonus to AC and saving throws against the attacks, spells, and abilities of fey, outsiders, and undead. If a fey, outsider, or undead who is not your ally enters or ends their turn in the warded square, they take a –1 penalty to AC and saving throws. Either effect lasts as long as the creature remains in the warded area and until the end of their next turn if they leave the warded area. A space remains warded for 1 minute, until it is no longer adjacent to (or within) your nanite array, or until you create a new ward.',
    source: { book: 'Galactic Magic', page: 27 },
    pfsLegal: true,
  },
  {
  id: 'insulating_nanites',
  name: 'Insulating Nanites',
  levelRequired: 2,
  shortDescription: 'Choose hot or cold when activating sheath; reduce danger severity (improves at 10th).',
  fullDescription:
    'Your nanites can absorb or emit heat to regulate your body temperature. Whenever you activate your nanite sheath, select hot or cold weather; your nanites can protect you from cold or heat, but not both simultaneously. Your nanite sheath reduces the severity of the selected dangerous temperature by one step. At 10th level, your nanites instead reduce the severity of dangerous temperatures by two steps.',
  source: { book: 'Interstellar Species', page: 26 },
  pfsLegal: true,
  },
  {
    id: 'intelligent_nanites',
    name: 'Intelligent Nanites',
    levelRequired: 2,
    shortDescription: 'Spend a surge (swift) to gain temporary ranks in an untrained skill.',
    fullDescription:
      'Your nanites are capable of temporarily rewriting your mental pathways to grant you skills and knowledge otherwise beyond your normal capabilities. As a swift action, you can spend a nanite surge to gain a number of temporary ranks equal to your nanocyte level in a skill that you have no ranks in, for a number of minutes equal to your Constitution modifier.',
    source: { book: 'Starfinder Enhanced', page: 54 },
    pfsLegal: true,
  },
  {
    id: 'leaping_nanites',
    name: 'Leaping Nanites',
    levelRequired: 2,
    shortDescription: 'Jump as if you had a running start; double sheath Athletics insight bonus.',
    fullDescription:
      "While your sheath array is active, calculate the DC of Athletics checks to jump as though you had a running start. Additionally, double the insight bonus to Athletics provided by your sheath array.",
    source: { book: 'Starfinder Enhanced', page: 54 },
    pfsLegal: true,
  },
  {
    id: 'material_alterations',
    name: 'Material Alterations',
    levelRequired: 2,
    shortDescription: 'Spend a surge when forming a major form to mimic special materials (credit cap/level).',
    fullDescription:
      'When using your gear array to create a major form, you can spend a nanite surge as part of the action to have the form’s composition mimic certain special materials such as starmetals. You can form a melee weapon or armor from the material or alter and automatically load a set of suitable ammunition incorporating an amount of special materials, up to a maximum value of up to 250 credits per nanocyte level. Special materials must be chosen from the following list: abysiumAR, adamantine alloy, cold iron, djezet, horacalcum, inubrix, noqual, siccatite, and silver.',
    source: { book: 'Starfinder Enhanced', page: 54 },
    pfsLegal: true,
    notes: 'SFS Note: Material Alterations may not be used to create djezet or noqual items.',
  },
  {
    id: 'mimicking_nanites',
    name: 'Mimicking Nanites',
    levelRequired: 2,
    shortDescription: 'Form a 1 Bulk-or-less solid object appearance; Perception can detect; bonus to Disguise.',
    fullDescription:
      "You can create simple shapes and objects at will with your nanites. Your nanites can form themselves to look like any solid object of 1 bulk or less. They can’t imitate an item’s function, moving parts, or the like. A creature that closely examines the object can determine its true nature with a successful Perception check (DC = 15 + 1-1/2 × your nanocyte level). While using this ability, you gain a +2 circumstance bonus to Disguise checks if an inanimate object would help your disguise.",
    source: { book: 'Starfinder Enhanced', page: 55 },
    pfsLegal: true,
  },
  {
    id: 'myriad_forms',
    name: 'Myriad Forms',
    levelRequired: 2,
    shortDescription: 'Learn three additional minor forms.',
    fullDescription:
      'You learn three additional minor forms that you can create with your nanite array.',
    source: { book: 'Tech Revolution', page: 14 },
    pfsLegal: true,
  },
  {
    id: 'nanitic_escape',
    name: 'Nanitic Escape',
    levelRequired: 2,
    shortDescription: 'Learn a Large-or-smaller terrestrial vehicle major form; form it and board instantly.',
    fullDescription:
      'Your nanites can replicate the complicated engineering of vehicles. When you gain this knack, you learn one terrestrial vehicle of Large size or smaller as a bonus major form. When you use your gear array to form this vehicle, you and any allies adjacent to you can automatically enter the vehicle; this does not count as movement and does not provoke attacks of opportunity or trigger readied actions. You can replace this major form as normal when you gain a nanocyte level, but you must replace it with another vehicle.',
    source: { book: 'Starfinder Enhanced', page: 55 },
    pfsLegal: true,
  },
  {
    id: 'nanitic_interfacing',
    name: 'Nanitic Interfacing',
    levelRequired: 2,
    shortDescription: 'Apply sheath array effects to mechs you pilot; surge for temp HP once/encounter.',
    fullDescription:
      'You can use your nanites on mechs you pilot, making them an extension of your own body. You can apply the effects of your sheath array to any mechs that you are piloting. Once per combat, you can spend a nanite surge to give the mech a number of temporary Hit Points equal to your nanocyte level; the mech loses any such remaining temporary Hit Points when the sheath array ends.',
    source: { book: 'Starfinder Enhanced', page: 55 },
    pfsLegal: true,
  },
  {
    id: 'otherworldly_nanites',
    name: 'Otherworldly Nanites',
    levelRequired: 2,
    shortDescription: 'Swap eldritch nanites spells to another spellcasting class list; requires eldritch nanites.',
    fullDescription:
      'Your nanites channel otherworldly powers. Choose a class that has the spells class feature. You gain a limited version of that class’s spells class feature rather than the technomancer’s spells class feature, replacing any technomancer spells you know from the eldritch nanites alternate class feature with spells from the chosen class’s spell list. In addition, you gain one additional 0-level spell known for your eldritch nanites.\n\nYou must have the eldritch nanites alternate class feature to select this knack.',
    source: { book: 'Galactic Magic', page: 27 },
    pfsLegal: true,
    prerequisites: ['eldritch_nanites_alternate_class_feature'],
  },
  {
    id: 'shielding_nanites',
    name: 'Shielding Nanites',
    levelRequired: 2,
    shortDescription: 'Gain Bodyguard; can spend a surge to Bodyguard allies in/adjacent to your cloud.',
    fullDescription:
      'Your nanites can move the molecules of your armor to defend your allies. You gain the Bodyguard feat as a bonus feat. While you’re within reach of your cloud array, you can spend a nanite surge as part of the reaction to use the feat on an ally in or adjacent to your cloud array.',
    source: { book: 'Starfinder Enhanced', page: 55 },
    pfsLegal: true,
  },
  {
    id: 'splash_down',
    name: 'Splash Down',
    levelRequired: 2,
    shortDescription: 'Reaction surge: reduce impact/fall dice by Con mod, then halve remaining damage.',
    fullDescription:
      'When you fall or suffer an impact from your body being moved through space, such as in a vehicle collision, your nanites disperse the impact energy to protect you from harm. As a reaction when you are falling or suffering such an impact, you can spend a nanite surge to reduce the number of damage dice you take due to the triggering impact by a number of dice equal to your Constitution modifier, taking no damage if this reduction leaves no dice to be rolled for the damage. You then halve any remaining damage you take from the triggering impact.',
    source: { book: 'Starfinder Enhanced', page: 55 },
    pfsLegal: true,
  },
  {
    id: 'split_cloud',
    name: 'Split Cloud',
    levelRequired: 2,
    shortDescription: 'Your cloud can function with gaps (scales at 10th/18th); reconfigure with constraints.',
    fullDescription:
      'You’ve learned to keep your nanites functioning even when they’re separated by currents or environmental factors. Your cloud array can have a gap of one 5-foot square between the spaces it fills. At 10th level, this increases to two 5-foot squares, and at 18th level, this increases to three 5-foot squares. Even if split into multiple smaller clouds by these gaps, the cloud functions as one unit. When reconfiguring the spaces your cloud occupies, at least one square of each smaller cloud must remain unchanged.',
    source: { book: 'Ports of Call', page: 103 },
    pfsLegal: true,
  },
  {
    id: 'split_manifestation',
    name: 'Split Manifestation',
    levelRequired: 2,
    shortDescription: 'When forming an operative weapon or small arm, manifest a second copy (still 1 array).',
    fullDescription:
      'When using your gear array to form an operative weapon or small arm, you can manifest a second copy of that weapon. This counts as only one array for determining the number of arrays you have active.',
    source: { book: 'Tech Revolution', page: 14 },
    pfsLegal: true,
  },
  {
    id: 'stylish_nanites',
    name: 'Stylish Nanites',
    levelRequired: 2,
    shortDescription: 'When forming Cha-skill bonus gear, increase bonus by 1 and hardness by Con mod.',
    fullDescription:
      'Having your nanites manufacture your own clothing and accessories on command means that your aesthetic can always be on the cutting edge of fashion. When forming an item with your gear array that grants a bonus to a Charisma-based skills, increase the bonus by 1 and increase the item’s hardness by your Constitution modifier.',
    source: { book: 'Starfinder Enhanced', page: 55 },
    pfsLegal: true,
  },
  {
    id: 'surgical_host',
    name: 'Surgical Host',
    levelRequired: 2,
    shortDescription: 'Perform Medicine within reach via sheath/cloud; counts as medkit (upgrades at 5th; lab minor form at 8th).',
    fullDescription:
      'While your sheath array is active, you can perform Medicine checks on creatures within your reach. While you’re within reach of your cloud array, you can also perform Medicine checks on creatures in or adjacent to the cloud as though they were within your reach. For both forms, you perform Medicine checks as though you’re using a basic medkit; at 5th level, you instead perform Medicine checks as though you’re using an advanced medkit. At 8th level, you can select a medical lab as one of your minor forms known',
    source: { book: 'Tech Revolution', page: 14 },
    pfsLegal: true,
  },
  {
    id: 'swarm_strike',
    name: 'Swarm Strike',
    levelRequired: 2,
    shortDescription: 'Surge for a scaling Con-based unarmed strike with flexible damage types and upgrades.',
    fullDescription:
      'When you form your sheath array, you can use a nanite surge to gain a special unarmed strike that deals lethal damage, lacks the archaic trait, and has an item level equal to your nanocyte level. You can use your Constitution modifier in place of your Strength modifier for attack and damage rolls for this attack. Using a swarm strike requires you to have at least one hand free. For each attack, you can deal bludgeoning damage, piercing damage, slashing damage, or any two of these damage types. At 3rd level, you gain a unique weapon specialization with your swarm strike, adding 1-1/2 × your nanocyte level to its damage rolls (instead of just adding your character level). At 7th level, this unarmed strike gains the thrown (20 feet) special property, and while you have at least two hands free, your weapon specialization damage bonus with this weapon increases to 2 × your level. At 11th level, while you have at least two hands free, your swarm strike gains the reach special property. At 15th level, the range increment of your thrown swarm strike increases to 40 feet, and it increases to 60 feet at 19th level. You can use this ability only while your sheath array is active.',
    source: { book: 'Tech Revolution', page: 14 },
    pfsLegal: true,
  },
  {
    id: 'versatile_nanites',
    name: 'Versatile Nanites',
    levelRequired: 2,
    shortDescription: 'Choose 2 skills to add as sheath insight options; can take multiple times.',
    fullDescription:
      'You’ve learned to direct your nanites in assisting you with difficult tasks, such as identifying damage, stitching wounds, reshaping your features, or further tuning your reflexes. Choose two of the following skills: Bluff, Disguise, Engineering, Medicine, Perception, or Piloting. You add these skills as options to which you can apply your sheath array’s insight bonus to skill checks. You can select this knack multiple times, each time selecting different skills.',
    source: { book: 'Tech Revolution', page: 14 },
    pfsLegal: true,
  },

  // ===== Nanocyte Knacks — 6th Level =====
  {
    id: 'air_walk',
    name: 'Air Walk',
    levelRequired: 6,
    shortDescription: 'Spend a surge while moving to walk on nanites as solid ground (limited angles/speed).',
    fullDescription:
      'You can use your nanites as temporary surfaces in order to walk across gaps and into the air as if they were solid ground. If you’re not encumbered, you can spend a nanite surge as part of an action in which you move, allowing you to walk in the air as if you were on solid ground, even in zero gravity. Ascending into the air is similar to walking up an incline. The maximum upward angle possible is 45 degrees, and you move at a rate equal to half your normal land speed. You can move your full land speed horizontally or up to 45 degrees downward. You must end your movement on the ground or you fall.',
    source: { book: 'Starfinder Enhanced', page: 55 },
    pfsLegal: true,
  },
  {
    id: 'aquatic_propulsion',
    name: 'Aquatic Propulsion',
    levelRequired: 6,
    shortDescription: 'Gear array weapons gain underwater property; +1 to related combat maneuvers.',
    fullDescription:
      'Your nanites propel your weapons with great force, pushing through water and dense gases without difficulty. Each time you form a weapon using your gear array, you can apply the underwater weapon special property to that weapon (when used underwater, it ignores the –2 penalty to attack rolls and deals full damage). If you do, combat maneuvers you attempt using that weapon gain a +1 bonus.',
    source: { book: 'Ports of Call', page: 103 },
    pfsLegal: true,
  },
  {
    id: 'befuddling_nanites',
    name: 'Befuddling Nanites',
    levelRequired: 6,
    shortDescription: 'Spend a surge to inflict confused (Will negates); 24h cooldown per target.',
    fullDescription:
      'Your nanites can cloud the mind and fool the senses. You can spend a nanite surge to inflict the confused condition on one creature adjacent to you or within your cloud array for a number of rounds equal to your Constitution modifier (Will negates). Once you’ve targeted a creature with this knack, you can’t target that creature with this knack again for 24 hours.',
    source: { book: 'Starfinder Enhanced', page: 55 },
    pfsLegal: true,
  },
  {
    id: 'camouflaging_sheath',
    name: 'Camouflaging Sheath',
    levelRequired: 6,
    shortDescription: 'Boost Stealth with a move action; surge to hide in plain sight.',
    fullDescription:
      'Your nanites can alter their color and appearance, settling on your flesh in a variety of patterns and colors, providing you camouflage in your surroundings. When you attempt a Stealth check while your sheath array is active, you can use a move action to increase the insight bonus to your Stealth check by 2 until the end of your turn. You can additionally use a nanite surge to hide in plain sight.',
    source: { book: 'Interstellar Species', page: 26 },
    pfsLegal: true,
  },
  {
    id: 'concentrated_cloud',
    name: 'Concentrated Cloud',
    levelRequired: 6,
    shortDescription: 'Shrink cloud area to increase concealment miss chance (up to 50%).',
    fullDescription:
      'You can concentrate your nanites into a smaller area to increase the concealment granted by your cloud array. You can reduce the size of your cloud array by a number of squares up to your Constitution modifier and increase the miss chance granted by your cloud array by 5% per square reduced, to a maximum miss chance of 50%.',
    source: { book: 'Starfinder Enhanced', page: 56 },
    pfsLegal: true,
    notes:
      'SFS Note: You can do this automatically when you form your cloud array or reconfigure your cloud array. Your cloud array must already be granting concealment to reconfigure into a concentrated cloud.',
  },
  {
    id: 'eldritch_upgrade',
    name: 'Eldritch Upgrade',
    levelRequired: 6,
    shortDescription: 'Choose a weapon fusion to apply to formed weapons; can swap on level up.',
    fullDescription:
      'Your nanites can embed magical powers into your formed weapons. Choose one weapon fusion of your nanocyte level or lower. When forming a weapon as a major form, you can apply the effects of this fusion to the weapon. Every time you gain a nanocyte level, you can replace this fusion with a different fusion of your nanocyte level or lower.',
    source: { book: 'Starfinder Enhanced', page: 56 },
    pfsLegal: true,
  },
  {
    id: 'enhanced_immunities',
    name: 'Enhanced Immunities',
    levelRequired: 6,
    shortDescription: 'On a successful Fort save with partial effect, negate the effect entirely.',
    fullDescription:
      'Your nanites reinforce your body, staving off even grave threats to your health. If you succeed at a Fortitude saving throw against an effect that has a reduced effect on a successful save, you instead avoid the effect entirely.',
    source: { book: 'Tech Revolution', page: 14 },
    pfsLegal: true,
  },
  {
    id: 'environmental_scrubbers',
    name: 'Environmental Scrubbers',
    levelRequired: 6,
    shortDescription: 'Gain +2 vs inhaled/ingested hazards; surge to share with allies.',
    fullDescription:
      'Your nanites scan the surrounding atmosphere for hazards and attempt to remove them from the air. Your nanites provide a +2 bonus against inhaled and ingested diseases, poisons, radiation, or similar environmental hazards. As a reaction made when you attempt a save against such an effect, you can spend a nanite surge to provide this bonus to a number of creatures equal to your Constitution modifier that are in or adjacent to your cloud array or within your reach.',
    source: { book: 'Starfinder Enhanced', page: 56 },
    pfsLegal: true,
  },
  {
    id: 'extensive_reach',
    name: 'Extensive Reach',
    levelRequired: 6,
    shortDescription: 'Increase your natural reach by 5 feet while sheath array is active.',
    fullDescription:
      'You have precise control over your nanites and can use them to extend your reach. Your sheath array increases your natural reach by 5 feet.',
    source: { book: 'Interstellar Species', page: 26 },
    pfsLegal: true,
  },
  {
    id: 'facial_reconfiguration',
    name: 'Facial Reconfiguration',
    levelRequired: 6,
    shortDescription: 'Use Disguise more quickly and reduce DCs; requires Versatile Nanites (Disguise).',
    fullDescription:
      'Your nanites can harmlessly reshape your body in increasingly dramatic ways. While your sheath array is active, you can use the Disguise skill to change your appearance with 1d3 minutes of work; you can use one nanite surge to reduce this required time to a full action. You reduce one of the check’s DC modifiers by an amount equal to half your nanocyte level (to a minimum of +0), though this reduction applies only to disguises that change your appearance in the following ways: add major features, disguise yourself as a different race of the same creature type, or disguise yourself as a different creature type.',
    source: { book: 'Tech Revolution', page: 14 },
    pfsLegal: true,
    prerequisites: ['versatile_nanites (Disguise)'],
  },
  {
    id: 'hampering_nanites',
    name: 'Hampering Nanites',
    levelRequired: 6,
    shortDescription: 'Reaction: entangle damaged foes; limited-use until RP recovery.',
    fullDescription:
      'Your nanites seize and hobble your foes, restricting their movement. After a creature takes damage in your nanite cloud or you damage a creature within 30 feet with a weapon formed with your gear array, you can take a reaction to cause the creature to become entangled (Reflex negates) for a number of rounds equal to your Constitution modifier, or until it escapes with an Acrobatics check or a Strength check. An entangled creature can attempt such a check as a move action. After using this ability, you can’t use it again until you spend 1 Resolve Point to regain Stamina Points after a 10-minute rest.',
    source: { book: 'Ports of Call', page: 103 },
    pfsLegal: true,
  },
  {
    id: 'heavy_weapon_edge',
    name: 'Heavy Weapon Edge',
    levelRequired: 6,
    shortDescription: 'Gain heavy weapon proficiency, specialization, and improved Str requirements.',
    fullDescription:
      'You know how to deal damage with big weapons. You gain proficiency with heavy weapons, and you gain weapon specialization in heavy weapons just as if your class granted proficiency. When you gain this knack, you can replace one of your major forms known with that of a heavy weapon. You add your Constitution modifier to your Strength score for the purpose of wielding heavy weapons formed from your gear array without penalty.',
    source: { book: 'Tech Revolution', page: 14 },
    pfsLegal: true,
  },
  {
    id: 'hungry_nanites',
    name: 'Hungry Nanites',
    levelRequired: 6,
    shortDescription: 'Reaction: inflict scaling bleed on damaged foes; harder to stop in your cloud.',
    fullDescription:
      'Your nanites tear and gnaw on creatures you designate. After a creature takes damage in your nanite cloud or you damage a creature within 30 feet with a weapon formed with your gear array, you can take a reaction to cause the creature to gain the bleeding 1d6 condition (Fortitude negates). The amount of bleed damage increases to 1d10 at 10th level, 2d8 at 14th level, and 3d8 at 18th level. While the bleeding creature is within your cloud array, the Medicine DC to stop the bleeding condition increases by an amount equal to half your nanocyte level plus your Constitution modifier. After using this ability, you can’t use it again until you spend 1 Resolve Point to regain Stamina Points after a 10-minute rest.',
    source: { book: 'Tech Revolution', page: 14 },
    pfsLegal: true,
  },
  {
    id: 'impeding_cloud',
    name: 'Impeding Cloud',
    levelRequired: 6,
    shortDescription: 'Cloud becomes difficult terrain; surge to exempt selected creatures.',
    fullDescription:
      'Your nanites generate enough mass to impede movement around them. Other creatures treat the area of your cloud array as difficult terrain. When you form your cloud array, you can spend a nanite surge to choose a number of creatures equal to your Constitution modifier; the selected creatures can move through the cloud as though it were not difficult terrain.',
    source: { book: 'Starfinder Enhanced', page: 56 },
    pfsLegal: true,
  },
  {
    id: 'instant_architect',
    name: 'Instant Architect',
    levelRequired: 6,
    shortDescription: 'Gain Barricade; surge to form temporary structures with defined stats.',
    fullDescription:
      'You gain Barricade as a bonus feat. You can use Barricade to create a barrier within your nanite cloud rather than just in an adjacent space. In addition, as a full action, you can use a nanite surge to shape your nanites into a temporary structure: a ladder up to 30 feet long, a door sealing an opening up to 10 feet square, a 10-foot-radius hemispherical shelter, or a 5-foot-wide bridge that spans up to 40 feet. This counts against the number of arrays you can have active. Regardless of the structure’s form, it has a number of Hit Points equal to your level, hardness equal to your Constitution modifier, and a break DC of 10.',
    source: { book: 'Tech Revolution', page: 15 },
    pfsLegal: true,
  },
  {
    id: 'nanitic_excitement',
    name: 'Nanitic Excitement',
    levelRequired: 6,
    shortDescription: 'Spend a surge to emit scaling radiation around you and your cloud.',
    fullDescription:
      'Your nanites can energize cellular material to the point of radioactivity. As a standard action, you can spend a nanite surge to generate an aura of radiation around yourself and your nanites. Creatures within 5 feet of you or your cloud array are exposed to low-level radiation. At 12th level, this range increases to 10 feet and the radiation level increases to medium. At 18th level, this range increases to 15 feet and the radiation level increases to high. This radiation lasts for 1 minute, or until you spend a swift action to end it.',
    source: { book: 'Starfinder Enhanced', page: 56 },
    pfsLegal: true,
    notes:
      'SFS Note: The radiation lasts for 1 minute or until you spend a swift action to end it.',
  },
  {
    id: 'nanitic_genius',
    name: 'Nanitic Genius',
    levelRequired: 6,
    shortDescription: 'Improve Intelligent Nanites: treat skill as class skill or use Con mod.',
    fullDescription:
      'Your nanites form an enhancing lattice in your brain, making you capable of mental leaps of staggering brilliance. When you use the intelligent nanites knack, you can treat the chosen skill as though it were a class skill. If it is already a class skill, you can use half your Constitution modifier instead of your normal modifier to use that skill.',
    source: { book: 'Starfinder Enhanced', page: 56 },
    pfsLegal: true,
    prerequisites: ['intelligent_nanites'],
  },
  {
    id: 'nanitic_networking',
    name: 'Nanitic Networking',
    levelRequired: 6,
    shortDescription: 'Scaling insight bonus to Computers; surge to hack at range.',
    fullDescription:
      'Being microscopic robots themselves, your nanites allow you an unparalleled knowledge of how computers work on the smallest level. You get a +1 insight check to Computers checks. At 10th level and every 4 levels thereafter, this bonus increases by 1. You can spend a nanite surge to attempt Computers skill checks at a range of 20 feet or against targets within or adjacent to your cloud array. A target of this ability (or a creature attending or observing your target) can attempt a Perception or Sense Motive check (DC = 5 + 1-1/2 × your nanocyte level) to determine that you are the origin of this activity.',
    source: { book: 'Starfinder Enhanced', page: 56 },
    pfsLegal: true,
  },
  {
    id: 'neutralizing_nanites',
    name: 'Neutralizing Nanites',
    levelRequired: 6,
    shortDescription: 'Gain bonuses vs bleed/burn; surge to reroll failed attempts.',
    fullDescription:
      'Your nanites can release a dense liquid sealant that douses flames and seals open wounds. While your sheath array is active you gain a +2 bonus to Medicine checks made to end the bleeding condition and Reflex saves made to end the burning condition. When you fail a check to end the bleeding or burning condition, you can use a nanite surge as a reaction to reroll the failed check or saving throw.',
    source: { book: 'Interstellar Species', page: 26 },
    pfsLegal: true,
  },
  {
    id: 'regular_updates',
    name: 'Regular Updates',
    levelRequired: 6,
    shortDescription: 'Embed nanites in allies to monitor them as per status (extraordinary).',
    fullDescription:
      'Your nanites can help you monitor your allies over long distances. As a full action, you can spend two nanite surges to harmlessly embed nanites into up to 4 willing allies; these nanites then relay information back to you about your allies’ vital information and current whereabouts; this works as per the spell status, using your nanocyte level as your caster level. This is an extraordinary ability.',
    source: { book: 'Starfinder Enhanced', page: 56 },
    pfsLegal: true,
  },
  {
    id: 'sensory_nanites',
    name: 'Sensory Nanites',
    levelRequired: 6,
    shortDescription: 'Gain 5-foot vibration blindsense, extended to your cloud.',
    fullDescription:
      'Nothing that disturbs your nanite cloud escapes your attention. You gain blindsense (vibration) with a range of 5 feet. This blindsense also extends to any area in or adjacent to your cloud array.',
    source: { book: 'Tech Revolution', page: 15 },
    pfsLegal: true,
  },
  {
    id: 'telepathic_cloud',
    name: 'Telepathic Cloud',
    levelRequired: 6,
    shortDescription: 'Telepathically communicate with creatures in your cloud who share a language.',
    fullDescription:
      'Your nanites contain an advanced communications array that transmits your thoughts directly into the minds of those nearby, enabling you to telepathically communicate in environments and situations where a language would be impossible to visually or audibly articulate, such as using Lumos in bright sunlight or audible languages in Luminar’s dense, gaseous seas. You can communicate telepathically with any creatures within the area of your cloud array with whom you share a language.',
    source: { book: 'Interstellar Species', page: 26 },
    pfsLegal: true,
  },
  {
    id: 'vehicular_array',
    name: 'Vehicular Array',
    levelRequired: 6,
    shortDescription: 'Surge to form basic solo vehicles; unlocks stronger forms at higher levels.',
    fullDescription:
      'You’ve learned to transform your nanites into basic vehicles to help you maneuver various terrain. When you use your gear array to take a major form, you can use a nanite surge to instead form your nanites into a basic enercycle that only you can ride. This otherwise follows the standard rules for your gear array. At 10th level, you can form your nanites into a torpedo minisub, and at 14th level, you can form your nanites into an ultralight turboglider (Armory 139). Regardless of the form, these vehicles offer no cover, can’t carry passengers, have no hardness, deal no collision damage, and have 1 HP.',
    source: { book: 'Ports of Call', page: 103 },
    pfsLegal: true,
  },
  {
    id: 'weighted_for_throwing',
    name: 'Weighted for Throwing',
    levelRequired: 6,
    shortDescription: 'Thrown gear array weapons gain recall and use Con for damage.',
    fullDescription:
      'Your nanites help guide your thrown weapons so that they return to you when they miss. When you use your gear array to form a weapon with the thrown special weapon property, you can additionally give it the recallAR special weapon property. You can use your Constitution modifier in place of your Strength modifier for damage rolls made with these weapons.',
    source: { book: 'Starfinder Enhanced', page: 56 },
    pfsLegal: true,
  },

  // ===== Nanocyte Knacks — 10th Level =====
  {
    id: 'adaptable_augmentations',
    name: 'Adaptable Augmentations',
    levelRequired: 10,
    shortDescription: 'Install cybernetic augmentations into any empty body slot via your gear array.',
    fullDescription:
      'You can temporarily alter the systems of your body to accept almost any augmentation. When you use your gear array to create a cybernetic augmentation, you can install it into any empty body slot, regardless of where it would normally be installed. If this augmentation takes up multiple slots, you must have the requisite number of empty body slots or the augmentation fails to manifest.',
    source: { book: 'Ports of Call', page: 103 },
    pfsLegal: true,
  },
  {
    id: 'adaptable_weaponry',
    name: 'Adaptable Weaponry',
    levelRequired: 10,
    shortDescription: 'Choose weapon properties to dynamically apply when forming gear array weapons.',
    fullDescription:
      'Your nanites capably innovate new features when you manifest nanite weapons. Choose two of the following special weapon properties: block, bright, deflect, feint, grapple, harrying, penetrating, stun, sunder, or trip. Each time you form a weapon using your gear array, you can apply one of the selected special weapon properties to that weapon. You can select this knack multiple times; each time, select two additional special weapon properties and add them to the list of available properties (you still apply only one at a time).',
    source: { book: 'Tech Revolution', page: 15 },
    pfsLegal: true,
  },
  {
    id: 'alacritous_form',
    name: 'Alacritous Form',
    levelRequired: 10,
    shortDescription: 'Increase land speed and spend a surge once per day to gain haste for 1 round.',
    fullDescription:
      'Your nanite sheath increases your land speed by 10 feet. This increases to 15 feet at 14th level and 20 feet at 18th level. Once per day at the beginning of your turn, you can use one nanite surge to gain the benefits of haste until the beginning of your next turn.',
    source: { book: 'Tech Revolution', page: 15 },
    pfsLegal: true,
  },
  {
    id: 'all_seeing_nanites',
    name: 'All-Seeing Nanites',
    levelRequired: 10,
    shortDescription: 'Gain blindsight and mark targets with tracking nanites; requires Sensory Nanites.',
    fullDescription:
      'Your nanites’ sensors are especially acute. You gain blindsight (vibration) with a range of 5 feet. This blindsight also extends to any area in or adjacent to your nanite cloud.\n\nAs a reaction, after you touch a target, strike a target with a weapon formed with your gear array, or are hit by an adjacent creature, you can use a nanite surge to adhere a tiny mass of nanites to that creature or object; a creature can attempt a Reflex save to negate this effect. These nanites resonate with the rest of your nanite array, allowing you to sense the target as though you had blindsight (vibration) with a range of 120 feet. In addition, you can track the target with a base DC of 10 regardless of the surface conditions, and you can use Perception in place of Survival to track the target. The tracking nanites remain active for a number of days equal to your Constitution modifier.',
    source: { book: 'Tech Revolution', page: 15 },
    pfsLegal: true,
    prerequisites: ['sensory_nanites'],
  },
  {
    id: 'anchored_cloud',
    name: 'Anchored Cloud',
    levelRequired: 10,
    shortDescription: 'Spaces in your cloud array always count as difficult terrain.',
    fullDescription:
      'Your nanites are accustomed to maintaining their position regardless of external pressure and motion. Spaces occupied by your cloud array are difficult terrain.',
    source: { book: 'Interstellar Species', page: 26 },
    pfsLegal: true,
  },
  {
    id: 'beguiling_array',
    name: 'Beguiling Array',
    levelRequired: 10,
    shortDescription: 'Extend beguiling glow through your cloud; surge to enhance it.',
    fullDescription:
      'Your nanites can mimic and amplify your natural glow. When you use beguiling glow while your cloud array is active, your beguiling glow emanates from all the spaces your cloud array fills, as well as from you. You can use one nanite surge when you activate beguiling glow to increase the radius of your beguiling glow to 30 feet and change its DC to that of your nanocyte knacks.',
    source: { book: 'Interstellar Species', page: 26 },
    pfsLegal: true,
    prerequisites: ['beguiling_glow_species_trait', 'glimmering_nanites'],
  },
  {
    id: 'biometric_theft',
    name: 'Biometric Theft',
    levelRequired: 10,
    shortDescription: 'Use Disguise to bypass biometrics; steal and store DNA samples.',
    fullDescription:
      'Your nanites can modify your features in subtle ways, allowing you to attempt a Disguise check in place of a Computers or Engineering check to defeat biometric locks and similar safeguards. As a reaction when you hit a creature with a melee attack or touch them, you can use a nanite surge to absorb a sample of the target’s DNA or other code. You can store a number of samples equal to your Constitution modifier at any time, and each sample remains viable for a number of days equal to your Constitution modifier. If you absorb another sample and exceed this maximum, you erase one sample of your choice.\n\nYou gain a +5 circumstance bonus on Disguise checks to bypass biometric safeguards keyed to any creature whose sample you have. In addition, if you have the facial reconfiguration knack you can use it to take the appearance of any creatures whose samples you have.\n\nThis instead grants a +10 circumstance bonus to the Disguise check. In addition, facial reconfiguration reduces the check’s DC modifier for this disguise by an amount equal to your nanocyte level (to a minimum of +0), applied to any of the check’s modifiers.',
    source: { book: 'Tech Revolution', page: 15 },
    pfsLegal: true,
  },
  {
    id: 'combusting_cloud',
    name: 'Combusting Cloud',
    levelRequired: 10,
    shortDescription: 'Use your cloud area as the blast area for blast weapons.',
    fullDescription:
      'Your nanites work in tandem to shape explosions and blasts of energy. When you’re adjacent to your cloud array and attack with a weapon formed with your gear array that has the blast special weapon property, you can spend a nanite surge to use the area of your cloud array as the area of effect for the blast weapon. The area can’t be larger than the original weapon’s blast area; if it would be, choose a contiguous area of your cloud array that is equal to the original area or smaller.',
    source: { book: 'Starfinder Enhanced', page: 56 },
    pfsLegal: true,
  },
  {
    id: 'commanding_nanites',
    name: 'Commanding Nanites',
    levelRequired: 10,
    shortDescription: 'Spend surges to cast a compulsion enchantment as a spell-like ability.',
    fullDescription:
      'Your nanites can enter another person’s mind and hijack their electrochemical impulses. Choose one enchantment spell with the compulsion subtype with a spell level equal to or less than 1/4 your nanocyte level. You can spend a number of nanite surges equal to the spell’s level in order to cast that spell as a spell-like ability, using your Constitution score when determining the DC for saving throws against this ability. Every time you gain a nanocyte level, you can replace this spell with a different enchantment spell with the compulsion subtype.',
    source: { book: 'Starfinder Enhanced', page: 56 },
    pfsLegal: true,
  },
  {
    id: 'defensive_doppelganger',
    name: 'Defensive Doppelganger',
    levelRequired: 10,
    shortDescription: 'Spend a surge to create mirror-image–style duplicates from your cloud.',
    fullDescription:
      'When you create a cloud array, you can use a nanite surge to cause a portion of your cloud array to form a lifelike replica of you that shadows and mimics your movements, functioning like a single figment image created by mirror image. The duplicate exists until it’s destroyed or you leave the cloud’s area. At 14th level, you create 1d2 images, and at 18th level, you create 1d4 images.',
    source: { book: 'Tech Revolution', page: 15 },
    pfsLegal: true,
  },
  {
    id: 'exhausting_nanites',
    name: 'Exhausting Nanites',
    levelRequired: 10,
    shortDescription: 'Weapons gain fatigue critical; surge to slow targets (electricity-based).',
    fullDescription:
      'Your nanites utilize electrical pulses to cause exhausting muscle spasms and electrical interference. Weapons you form with your gear array gain the fatigue critical hit effect. Once per day, after you damage a creature with a weapon formed from your gear array, you can use a nanite surge as a reaction to impose the effects of slow on the target (Fortitude negates) for a number of rounds equal to half your Constitution bonus. Creatures immune to electricity are immune to exhausting nanites.',
    source: { book: 'Interstellar Species', page: 27 },
    pfsLegal: true,
  },
  {
    id: 'exploratory_form',
    name: 'Exploratory Form',
    levelRequired: 10,
    shortDescription: 'Surge to gain or enhance climb or swim speeds while sheath is active.',
    fullDescription:
      'You’re driven to explore diverse environments and worlds. While your sheath array is active, you can use a nanite surge to gain either a climb speed of 30 feet or a swim speed of 30 feet. If you already have the selected speed, you instead increase that speed by 15 feet. This lasts for a number of hours equal to your Constitution modifier. You lose this speed when your sheath array ends.',
    source: { book: 'Ports of Call', page: 103 },
    pfsLegal: true,
  },
  {
    id: 'explosive_enhancement',
    name: 'Explosive Enhancement',
    levelRequired: 10,
    shortDescription: 'Cluster grenades and reduce grenade consumption with nanite surges.',
    fullDescription:
      'Your nanites can make your explosives even deadlier by clustering your grenades and even potentially replicating them. When using your gear array to form a weapon that uses grenades as ammunition, you can give the weapon the cluster (5 ft.) special weapon property. This increases to cluster (10 ft.) at level 15. When you use a weapon formed from your gear array to make a cluster attack with non-magical grenades with an item level no greater than your level, you can spend a nanite surge to reduce the number of grenades expended by 1.',
    source: { book: 'Starfinder Enhanced', page: 56 },
    pfsLegal: true,
  },
  {
    id: 'feasting_nanites',
    name: 'Feasting Nanites',
    levelRequired: 10,
    shortDescription: 'Regain Stamina from Hungry Nanites bleed damage; capped per rest.',
    fullDescription:
      'Your nanites break down and repurpose your foes’ vital fluids to fuel their host. Whenever the target of your hungry nanites takes bleed damage from that ability and is within 30 feet of you, you regain an equal number of Stamina Points. Until you next take a 10-minute rest to recover Stamina Points, you can regain a maximum number of Stamina Points in this way equal to 3 times your nanocyte level.',
    source: { book: 'Tech Revolution', page: 15 },
    pfsLegal: true,
    prerequisites: ['hungry_nanites'],
  },
  {
    id: 'group_dispersal',
    name: 'Group Dispersal',
    levelRequired: 10,
    shortDescription: 'Extend defensive dispersal to nearby allies.',
    fullDescription:
      'Your nanites protect your companions as readily as they protect you. You can use your defensive dispersal on any ally you can see who’s adjacent to you or within your cloud array. When you use your defensive dispersal on yourself, any adjacent allies also gain the benefits of that ability against the triggering attack or effect. However, only you benefit from additional knacks or other abilities that provide any additional effects when you use defensive dispersal.',
    source: { book: 'Tech Revolution', page: 15 },
    pfsLegal: true,
  },
  {
    id: 'lifting_nanites',
    name: 'Lifting Nanites',
    levelRequired: 10,
    shortDescription: 'Spend a surge to gain or enhance a fly speed while sheath is active.',
    fullDescription:
      'Your nanites can provide you with enough thrust to take off into the air. When you form your sheath array, you can spend a nanite surge to gain a fly speed equal to your base speed with average maneuverability. If you already have a fly speed, it increases by 10 feet instead.',
    source: { book: 'Starfinder Enhanced', page: 57 },
    pfsLegal: true,
  },
  {
    id: 'nanomagical_font',
    name: 'Nanomagical Font',
    levelRequired: 10,
    shortDescription: 'Gain extra surges for eldritch spells and recover Stamina when using them.',
    fullDescription:
      'You gain 2 additional nanite surges per day that can be used only to gain additional spell slots to cast your spells gained by the eldritch nanites ability. Whenever you spend nanite surges to gain a spell slot, you regain Stamina Points equal to twice the number of nanite surges you spent.',
    source: { book: 'Galactic Magic', page: 27 },
    pfsLegal: true,
  },
  {
    id: 'ninefold_ward',
    name: 'Ninefold Ward',
    levelRequired: 10,
    shortDescription: 'Expand instant ward to cover larger areas with eldritch or cloud arrays.',
    fullDescription:
      'When you activate your instant ward knack with your eldritch array, the ward covers a 15-foot-by-15-foot square centered on your space. When you activate your instant ward knack with your cloud array, the ward affects each square affected by your cloud array.',
    source: { book: 'Galactic Magic', page: 27 },
    pfsLegal: true,
    prerequisites: ['instant_ward'],
  },
  {
    id: 'one_with_the_weapon',
    name: 'One with the Weapon',
    levelRequired: 10,
    shortDescription: 'Integrate melee weapons into armor and gain additional weapon properties.',
    fullDescription:
      'Your nanites can fuse your melee weapons with your armor and shape them to best complement your fighting style. When you use your gear array to form a melee weapon, the weapon gains the integrated weapon special property. You can equip the weapon into an empty armor upgrade slot instead of wielding it. Additionally, you can give the weapon either the disarm or reach special weapon properties.',
    source: { book: 'Starfinder Enhanced', page: 57 },
    pfsLegal: true,
  },
  {
    id: 'rapid_reshape',
    name: 'Rapid Reshape',
    levelRequired: 10,
    shortDescription: 'Periodically form or switch nanite arrays as a swift action without a surge.',
    fullDescription:
      'Every 1d4 rounds, you can form or switch nanite arrays as a swift action without using a nanite surge.',
    source: { book: 'Tech Revolution', page: 16 },
    pfsLegal: true,
  },
  {
    id: 'reanimating_nanites',
    name: 'Reanimating Nanites',
    levelRequired: 10,
    shortDescription: 'Animate nearby corpses into temporary cybernetic zombies.',
    fullDescription:
      'Your nanites infest a nearby corpse, animating it as a combatant. You can spend a nanite surge as a standard action to turn one or more corpses into a number of cybernetic zombies with a total CR of no more than half your nanocyte level. A zombie can be created only from a creature with a physical anatomy. These zombies can do nothing but attack your enemies nearest to them, and they last a number of rounds equal to your Constitution modifier.',
    source: { book: 'Starfinder Enhanced', page: 57 },
    pfsLegal: true,
  },
  {
    id: 'shock_absorption',
    name: 'Shock Absorption',
    levelRequired: 10,
    shortDescription: 'Gain electricity resistance; surge to greatly increase it temporarily.',
    fullDescription:
      'Your nanites can disperse electrical currents throughout their volume. While your sheath array is active, or while you’re standing within the area of your cloud array, you have electricity resistance 5. When you would take electricity damage, you can use a nanite surge as a reaction to increase this resistance by an amount equal to your nanocyte level plus your Constitution bonus until the end of your next turn.',
    source: { book: 'Interstellar Species', page: 27 },
    pfsLegal: true,
  },
  {
    id: 'thousand_stitches',
    name: 'Thousand Stitches',
    levelRequired: 10,
    shortDescription: 'Treat deadly wounds as a standard action with improved healing.',
    fullDescription:
      'You can use the surgical host knack to perform Medicine checks to treat deadly wounds as a standard action. If you succeed at this check, you restore 2 Hit Points per level or CR of the creature you’re treating. If you exceed the DC by 5 or more, you add your Intelligence bonus and Constitution bonus to the amount healed.',
    source: { book: 'Tech Revolution', page: 16 },
    pfsLegal: true,
    prerequisites: ['surgical_host'],
  },

  // ===== Nanocyte Knacks — 14th Level =====
  {
    id: 'charge_vampire',
    name: 'Charge Vampire',
    levelRequired: 14,
    shortDescription: 'Reaction: drain charges from a target’s device to a battery you carry (uses/day = Con mod).',
    fullDescription:
      'When you damage a creature in your nanite cloud or when you damage a creature within 30 feet using a weapon formed with your gear array, you can drain power from the target’s technological devices as a reaction. Choose one item in the target’s possession that uses charges or select a qualifying item at random. That item loses a number of charges equal to 1d10 plus your Constitution modifier (Fortitude half), and a battery in your possession gains an equal number of charges (to a maximum of the battery’s capacity). You can use this ability a number of times per day equal to your Constitution modifier.',
    source: { book: 'Tech Revolution', page: 16 },
    pfsLegal: true,
  },
  {
    id: 'cutting_edge',
    name: 'Cutting Edge',
    levelRequired: 14,
    shortDescription: 'Surge: gear-array slashing weapons crit on 19–20.',
    fullDescription:
      'Forming your weapons out of nanites means that they’re always honed to a monomolecular edge. When you form a weapon that deals slashing damage with your gear array, you can spend a nanite surge to have that weapon score critical hits on a natural 19 or 20.',
    source: { book: 'Starfinder Enhanced', page: 57 },
    pfsLegal: true,
  },
  {
    id: 'deconstructor',
    name: 'Deconstructor',
    levelRequired: 14,
    shortDescription: 'Deal extra damage and ignore hardness vs constructs/objects/technological foes.',
    fullDescription:
      "Weapons you form with your gear array and your faculty abilities deal additional damage equal to your Constitution modifier to constructs, objects, and creatures with the technological subtype. In addition, these attacks and abilities ignore an amount of hardness equal to your nanocyte level. This hardness reduction doesn’t stack with that of the penetrating weapon property but instead increases the weapon’s item level by an amount equal to your Constitution modifier for the purpose of calculating the amount of hardness the weapon ignores.",
    source: { book: 'Tech Revolution', page: 16 },
    pfsLegal: true,
  },
  {
    id: 'energetic_reversal',
    name: 'Energetic Reversal',
    levelRequired: 14,
    shortDescription: 'Reaction surge: reduce energy damage and “store” it to add to next EAC hit’s damage.',
    fullDescription:
      'Your nanites can redirect energy back at your foes. When you would take energy damage, you can spend a nanite surge as a reaction to reduce that damage by your nanocyte level, having nanites contain the energy instead. The first time you damage a creature with an unarmed strike or weapon that targets EAC on your next turn, you can increase the damage dealt by the amount of damage you absorbed with this ability. This damage is the same type as the prevented damage.',
    source: { book: 'Starfinder Enhanced', page: 57 },
    pfsLegal: true,
  },
  {
    id: 'gluttonous_nanites',
    name: 'Gluttonous Nanites',
    levelRequired: 14,
    shortDescription: '1/day after defeating a significant enemy, devour it to regain Stamina (3 × level).',
    fullDescription:
      'Your nanites make the most of every opportunity to regenerate. Once per day after a combat in which you defeat a significant enemy who’s no longer alive, you can direct your nanites to devour that enemy’s body; if you do so, you regain Stamina points equal to 3 times your nanocyte level.',
    source: { book: 'Ports of Call', page: 103 },
    pfsLegal: true,
    prerequisites: ['hungry_nanites', 'feasting_nanites'],
  },
  {
    id: 'luminous_nanites',
    name: 'Luminous Nanites',
    levelRequired: 14,
    shortDescription: 'Cloud sheds bright light; surge to blind/dazzle creatures, then light shuts off until RP recovery.',
    fullDescription:
      'Your nanites are luminous beacons that can flash brightly. The light shed by your nanite cloud increases in intensity, shedding bright light instead of dim light. You can use a nanite surge as a swift action to overcharge your nanites, causing them to flare brightly. Each creature within your nanite cloud must succeed at a Fortitude save or be blinded until the end of its next turn. A creature that succeeds at its Fortitude save is instead dazzled for a number of rounds equal to your Constitution bonus. After your nanites flare in this way, they go dark and can’t shed illumination of any kind until you spend 1 Resolve Point to regain Stamina Points after a 10 minute rest. You must have the glimmering nanites knack to select this knack.',
    source: { book: 'Interstellar Species', page: 27 },
    pfsLegal: true,
    prerequisites: ['glimmering_nanites'],
  },
  {
    id: 'menacing_pall',
    name: 'Menacing Pall',
    levelRequired: 14,
    shortDescription: 'Make melee attacks from any square of your cloud (no AoOs; doesn’t grant sight).',
    fullDescription:
      'Your cloud array becomes a deadly fog that can strike those within from any angle. While you’re adjacent to or within your nanite cloud, you can make melee attacks with weapons formed with your gear array from any square occupied by your nanite cloud. This allows you to gain position-based benefits such as avoiding cover or flanking an enemy. This ability doesn’t allow you to see targets that you couldn’t otherwise perceive. You can’t use this ability to perform attacks of opportunity.',
    source: { book: 'Tech Revolution', page: 16 },
    pfsLegal: true,
  },
  {
    id: 'myriapodal_sheath',
    name: 'Myriapodal Sheath',
    levelRequired: 14,
    shortDescription: 'Surge: grow Con-mod limbs to increase reach, rearrange held items, and make unarmed strikes.',
    fullDescription:
      'You can have your sheath array sprout a number of lengthy limbs to defend you and wield gear. You can spend a nanite surge when you form your sheath array, or as a standard action while your sheath array is active, to create a number of long semisolid limbs equal to your Constitution modifier. You increase your natural reach by 5 feet and can change how you are holding any held items as part of forming these limbs. You can use these limbs to make unarmed strikes. These limbs last as long as you are in your sheath array or for 1 minute, whichever is less. You can spend an additional nanite surge as a swift action in order to increase the duration of this ability by another minute.',
    source: { book: 'Starfinder Enhanced', page: 57 },
    pfsLegal: true,
  },
  {
    id: 'violent_dispersal',
    name: 'Violent Dispersal',
    levelRequired: 14,
    shortDescription: 'Surge: bull rush all creatures within 15 ft (Con-based), deal force damage, end sheath; rest-gated.',
    fullDescription:
      'You can use your nanites to rout your foes directly. While your sheath array is active, you can use a nanite surge to send your nanites rocketing off your body with powerful force. Attempt a single bull rush combat maneuver that targets each creature within 15 feet of you; you can use your Constitution modifier for this attack roll instead of your Strength modifier. Regardless of the result of the bull rush, each creature targeted in this way takes force damage equal to your Constitution modifier. After using violent dispersal, your nanites disperse, ending your sheath array. You can’t use violent dispersal again until you spend 1 Resolve Point to regain Stamina Points after a 10 minute rest.',
    source: { book: 'Interstellar Species', page: 27 },
    pfsLegal: true,
  },

  // ===== Nanocyte Knacks — 18th Level =====
  {
    id: 'adaptive_telepathy',
    name: 'Adaptive Telepathy',
    levelRequired: 18,
    shortDescription: 'Surge: telepathically communicate simple ideas to creatures in your cloud regardless of language.',
    fullDescription:
      'Your nanites can distill your thoughts into emotional images and feelings, enabling you to communicate with those with whom you don’t share a language. You can use a nanite surge to communicate simple ideas telepathically to any creatures within the area of your cloud array, even if you don’t share a common language. This doesn’t enable you to comprehend languages spoken within the area of your cloud array that you don’t understand.',
    source: { book: 'Interstellar Species', page: 27 },
    pfsLegal: true,
  },
  {
    id: 'become_legion',
    name: 'Become Legion',
    levelRequired: 18,
    shortDescription: 'Surge: transform into a Gargantuan nanite swarm with swarm attacks and defenses.',
    fullDescription:
      'As a move action, you can use a nanite surge to transform into a nanite fog, during which you can take no actions except those granted to you by this ability. This is a polymorph effect, and it counts against the number of arrays you can have active. While transformed, you’re a Gargantuan construct with the swarm subtype, a space of 20 feet, and a reach of 0 feet. You can occupy the same space as other creatures. As a standard action, you can make a swarm attack (1d4 piercing damage per 2 nanocyte levels) and gain swarm defenses (except immunity to single-target mind-affecting effects) and swarm immunities as per the universal creature rules (Starfinder Alien Archive 157). These immunities don’t end ongoing conditions. When dealing swarm damage to creatures in your space, you can avoid damaging a number of creatures up to your Constitution modifier.\n\nThis transformation lasts until the beginning of your next turn, at which point you can attempt a DC 30 Fortitude saving throw. If you succeed, the transformation’s duration extends to the beginning of your next turn. If you fail, the transformation ends, and you re-form in any space your swarm body occupied. The DC of this saving throw increases by 2 each time you succeed at the saving throw. If you’re reduced to 0 Hit Points, the transformation ends automatically.\n\nYou can’t use this knack again until after you spend 1 Resolve Point to regain Stamina Points after a 10-minute rest.',
    source: { book: 'Tech Revolution', page: 16 },
    pfsLegal: true,
  },
  {
    id: 'flurrying_fog',
    name: 'Flurrying Fog',
    levelRequired: 18,
    shortDescription: 'Gain +10 ft reach from cloud and make AoOs within it; requires Menacing Pall.',
    fullDescription:
      'Your ability to strike from multiple angles out of your nanite cloud improves even further. While you’re adjacent to or within your nanite cloud, your reach with melee attacks made with weapons formed with your gear array gain additional reach of 10 feet. You can also make attacks of opportunity against any targets that would provoke them within your nanite cloud.',
    source: { book: 'Ports of Call', page: 103 },
    pfsLegal: true,
    prerequisites: ['menacing_pall'],
  },
  {
    id: 'harvesting_nanites',
    name: 'Harvesting Nanites',
    levelRequired: 18,
    shortDescription: 'Surge: devastating attack that can deal massive damage or instantly kill.',
    fullDescription:
      'Your nanites allow you to reach inside an enemy and remove vital organs, potentially killing them outright. As a full action, you can spend a nanite surge to make a single unarmed strike, or attack with a weapon formed by your gear array, against a foe within your reach with a CR no greater than your level. If the attack hits, it deals damage as normal and the target must also succeed at a Fortitude saving throw or take 1d6 additional damage per your character level. If the target fails the save, it must also attempt a second Fortitude saving throw with the same DC. If it fails this second save, it dies instantly; this is a death effect. If the target has fortification against critical hits or a similar effect, the chance to treat a critical hit as a normal attack also applies to negating the additional damage and the saving throws.',
    source: { book: 'Starfinder Enhanced', page: 57 },
    pfsLegal: true,
  },
  {
    id: 'omnipresent_form',
    name: 'Omnipresent Form',
    levelRequired: 18,
    shortDescription: 'Enhanced guarded steps within your cloud, or surge to teleport between cloud-adjacent spaces.',
    fullDescription:
      'While you’re adjacent to or within your cloud array and take a guarded step, you can move a total distance equal to 5 feet plus 5 × half your Constitution modifier (rounded down) as long as your movement and destination is also entirely adjacent to or within your nanite cloud. Alternatively, you can use a nanite surge when taking a guarded step to teleport to any location so long as your starting point and destination are both adjacent to a square that contains your nanite cloud; this movement doesn’t provoke attacks of opportunity.',
    source: { book: 'Tech Revolution', page: 16 },
    pfsLegal: true,
  },
  {
    id: 'omniscient_nanites',
    name: 'Omniscient Nanites',
    levelRequired: 18,
    shortDescription: 'Greatly expand blindsight and tracking from All-Seeing Nanites.',
    fullDescription:
      'Nothing escapes the notice of your nanites. The range of your blindsight (vibration) granted by the all-seeing nanites knack increases to 20 feet. This blindsight also extends to any area to which your nanite cloud has line of effect, to a range of 20 feet. Traces of your nanite host can even penetrate solid material, granting you the sense through (blindsight [vibration]) ability, which is blocked by especially dense or thick materials as normal. Finally, when you apply a nanite tracker to a target using the all-seeing nanites knack, you can sense the target as though you had blindsight (vibration) with a range of a number of miles equal to your Constitution modifier.',
    source: { book: 'Tech Revolution', page: 16 },
    pfsLegal: true,
    prerequisites: ['all_seeing_nanites'],
  },
  {
    id: 'sudden_transformation',
    name: 'Sudden Transformation',
    levelRequired: 18,
    shortDescription: 'Reaction: form a nanite array; first use/day free, then costs surges.',
    fullDescription:
      'You can take a reaction to form a nanite array. After using this ability the first time each day, you must use a nanite surge each time you use it again.',
    source: { book: 'Tech Revolution', page: 16 },
    pfsLegal: true,
  },
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

  const filteredOptions =
    classId === 'nanocyte'
      ? schedule.options.filter(o => (o.levelRequired ?? 0) <= level)
      : schedule.options;

  return {
    abilityType: schedule.ability,
    options: filteredOptions,
    displayName: schedule.ability
      .split('_')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
  };
}