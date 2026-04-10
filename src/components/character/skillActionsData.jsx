// Skill actions and uses for Starfinder 1st Edition
// Source: https://www.aonsrd.com/Skills.aspx

export const SKILL_ACTIONS = {
  'Acrobatics': {
    description: 'You can keep your balance while traversing narrow or treacherous surfaces, escape from restraints, and tumble to avoid attacks.',
    actions: [
      { name: 'Balance', actionType: 'Part of movement', dc: 'Varies', description: 'Move across a narrow surface or unsteady ground without falling' },
      { name: 'Escape', actionType: 'Standard action', dc: 'Opponent\'s KAC + 8', description: 'Escape from bindings, grapples, or other restraints' },
      { name: 'Fly', actionType: 'Part of movement', dc: 'Varies', description: 'Maneuver while flying (with a jetpack, flight system, or wings)' },
      { name: 'Tumble', actionType: 'Part of movement', dc: '15 + 1.5 × target\'s CR', description: 'Move through a threatened square without provoking attacks of opportunity' }
    ]
  },
  'Athletics': {
    description: 'You can scale vertical surfaces, leap over obstacles, and swim.',
    actions: [
      { name: 'Climb', actionType: 'Part of movement', dc: 'Varies', description: 'Scale a wall or slope. DC based on surface (5 for rope, 15 for rough surface, 20 for uneven, 25 for smooth, 30+ for overhang)' },
      { name: 'Jump', actionType: 'Part of movement', dc: 'Varies', description: 'Leap horizontally or vertically. DC equals distance in feet (horizontal) or 4 × distance (vertical)' },
      { name: 'Swim', actionType: 'Part of movement', dc: 'Varies', description: 'Move through water or similar liquids. DC based on water conditions (10 for calm, 15 for rough, 20 for stormy)' }
    ]
  },
  'Bluff': {
    description: 'You can use words and actions to create distractions, mislead others, and fake out opponents in combat.',
    actions: [
      { name: 'Feint', actionType: 'Standard action', dc: '10 + opponent\'s Sense Motive bonus', description: 'Make opponent flat-footed against your next melee attack before end of your next turn' },
      { name: 'Lie', actionType: 'At least 1 round', dc: '10 + target\'s Sense Motive bonus', description: 'Convince someone that a falsehood is true' },
      { name: 'Pass Secret Message', actionType: '1 round or more', dc: '15 + target\'s Sense Motive bonus', description: 'Secretly communicate with an ally without others noticing' },
      { name: 'Create Diversion', actionType: 'Standard action', dc: 'Opposed by Perception', description: 'Use Stealth to hide by creating a momentary distraction' }
    ]
  },
  'Computers': {
    description: 'You can operate, manipulate, and hack into computer systems.',
    actions: [
      { name: 'Access System', actionType: '1 round to 1 minute', dc: 'Varies', description: 'Gain access to an unsecured computer system or module' },
      { name: 'Detect Fake Shell', actionType: '1 round', dc: 'Varies', description: 'Determine if a system or module is a fake designed to trick you' },
      { name: 'Destroy/Repair System', actionType: '10 minutes', dc: 'Varies', description: 'Destroy or repair a computer system' },
      { name: 'Hack System', actionType: 'Varies', dc: 'Varies', description: 'Bypass security to access a secured computer system' },
      { name: 'Craft Computer', actionType: 'Varies', dc: 'Varies', description: 'Build or upgrade a computer system' }
    ]
  },
  'Culture': {
    description: 'You are a student of the vast number of known cultures, and you have a deep and rich understanding of the underpinnings of cultures.',
    actions: [
      { name: 'Recall Knowledge', actionType: '1 round', dc: 'Varies', description: 'Remember useful information about local customs, traditions, laws, and inhabitants of settlements' },
      { name: 'Decipher Writing', actionType: '1 minute', dc: 'Varies', description: 'Understand archaic, obscure, or alien writing' }
    ]
  },
  'Diplomacy': {
    description: 'You can persuade others to be friendly toward you, negotiate deals, and mediate disputes.',
    actions: [
      { name: 'Change Attitude', actionType: '1 minute', dc: '15 + 1.5 × creature\'s CR', description: 'Improve a creature\'s attitude toward you by one step (hostile → unfriendly → indifferent → friendly → helpful)' },
      { name: 'Gather Information', actionType: '1d4 hours', dc: '10 + 1.5 × settlement tier', description: 'Collect rumors, gossip, and useful information in a settlement' },
      { name: 'Negotiate Agreement', actionType: '1d4 hours or more', dc: 'Varies', description: 'Broker a deal or mediate a dispute between parties' }
    ]
  },
  'Disguise': {
    description: 'You can change your appearance to blend in and deceive others.',
    actions: [
      { name: 'Create Disguise', actionType: '1d4 × 10 minutes', dc: 'Varies', description: 'Change your appearance. DC varies: different race (+5), different age (+2 to +10), different gender (+2)' },
      { name: 'Quick Disguise', actionType: '1d3 rounds', dc: '+5 to normal DC', description: 'Create a disguise very quickly (requires disguise kit)' }
    ]
  },
  'Engineering': {
    description: 'You can identify, build, repair, and disable technological devices; assess the stability of structures and machinery; and properly arm and disarm explosives.',
    actions: [
      { name: 'Assess Stability', actionType: '1 minute', dc: 'Varies', description: 'Determine if a structure or device is stable and safe' },
      { name: 'Arm/Disarm Explosives', actionType: '1 minute or more', dc: 'Varies', description: 'Set up or disarm an explosive device safely' },
      { name: 'Disable Device', actionType: '1d4 rounds', dc: 'Varies', description: 'Disable a mechanical or technological device, trap, or lock' },
      { name: 'Identify Tech', actionType: '1 round', dc: 'Varies', description: 'Identify the function and properties of a technological device' },
      { name: 'Repair/Craft Item', actionType: 'Varies', dc: 'Varies', description: 'Repair damaged items or craft new technological items' }
    ]
  },
  'Intimidate': {
    description: 'You can rattle your foes or bully them to do what you want.',
    actions: [
      { name: 'Demoralize', actionType: 'Standard action', dc: '10 + target\'s level + target\'s Wis modifier', description: 'Shake target, making them shaken for 1 round (or 1 round per 5 by which you exceed DC)' },
      { name: 'Bully', actionType: '1 minute or more', dc: 'Varies', description: 'Force someone to act friendly toward you temporarily or comply with a request' }
    ]
  },
  'Intimidate': {
    description: 'You can rattle your foes or bully them to do what you want.',
    actions: [
      { name: 'Demoralize', actionType: 'Standard action', dc: '10 + target\'s level + target\'s Wis modifier', description: 'Shake target, making them shaken for 1 round (or 1 round per 5 by which you exceed DC)' },
      { name: 'Bully', actionType: '1 minute or more', dc: 'Varies', description: 'Force someone to act friendly toward you temporarily or comply with a request' }
    ]
  },
  'Life Science': {
    description: 'You are educated in the scientific study of living things, from the smallest organisms to the largest biological systems.',
    actions: [
      { name: 'Recall Knowledge', actionType: '1 round', dc: 'Varies', description: 'Identify creatures, ecosystems, biology, bioengineering, and more' },
      { name: 'Identify Creature', actionType: '1 round', dc: '10 + 1.5 × creature CR', description: 'Identify a living creature and recall its special powers or vulnerabilities' },
      { name: 'Craft Drug/Poison', actionType: 'Varies', dc: 'Varies', description: 'Create biological compounds and substances' }
    ]
  },
  'Medicine': {
    description: 'You have knowledge of the biology of many species and can treat a number of different types of wounds and ailments.',
    actions: [
      { name: 'First Aid', actionType: 'Standard action', dc: '15', description: 'Stop bleed damage or stabilize a dying creature' },
      { name: 'Long-Term Stability', actionType: '1 minute', dc: '20', description: 'Stabilize a dying creature and restore 1 HP per character level' },
      { name: 'Treat Deadly Wounds', actionType: '1 minute', dc: '25', description: 'Restore Hit Points equal to your patient\'s level + your Wisdom modifier (once per day per patient)' },
      { name: 'Treat Disease', actionType: '10 minutes', dc: 'Disease DC + 5', description: 'Grant bonus to saving throw against disease' },
      { name: 'Treat Poison', actionType: 'Standard action', dc: 'Poison DC + 5', description: 'Grant bonus to saving throw against poison' }
    ]
  },
  'Mysticism': {
    description: 'You are educated in the fields of magic, religion, the planes, and spellcasting.',
    actions: [
      { name: 'Recall Knowledge', actionType: '1 round', dc: 'Varies', description: 'Identify magic items, spells, creatures from other planes, religious practices, and more' },
      { name: 'Identify Spell', actionType: 'Reaction', dc: '10 + 1.5 × spell level', description: 'Identify a spell being cast' },
      { name: 'Identify Magic Item', actionType: '1 round', dc: 'Varies', description: 'Determine the properties of a magic item' },
      { name: 'Disable Magic Device', actionType: '1d4 rounds', dc: 'Varies', description: 'Disable a magical trap or device' }
    ]
  },
  'Perception': {
    description: 'You can use all of your senses to notice danger, pick out fine details, and search for hidden objects or creatures.',
    actions: [
      { name: 'Notice', actionType: 'Reaction or move action', dc: 'Varies', description: 'Spot something with your senses (opposed by Stealth)' },
      { name: 'Search', actionType: 'Move action', dc: 'Varies', description: 'Actively look for something in detail' },
      { name: 'Sense Motive (Notice Enchantment)', actionType: 'Standard action', dc: '25 or 15 + spell level', description: 'Determine if a creature is behaving oddly or under mental control' }
    ]
  },
  'Physical Science': {
    description: 'You have knowledge of the physical sciences including chemistry, physics, and engineering.',
    actions: [
      { name: 'Recall Knowledge', actionType: '1 round', dc: 'Varies', description: 'Identify materials, chemicals, physics principles, astronomy, planetary sciences, and more' },
      { name: 'Craft Item', actionType: 'Varies', dc: 'Varies', description: 'Create chemical or physical science-based items' }
    ]
  },
  'Piloting': {
    description: 'You know how to drive, pilot, or ride a vehicle or mount.',
    actions: [
      { name: 'Fly', actionType: 'Part of movement', dc: 'Varies', description: 'Perform difficult maneuvers while flying a vehicle' },
      { name: 'Navigate', actionType: 'Varies', dc: 'Varies', description: 'Plot a course and avoid getting lost' },
      { name: 'Race/Chase', actionType: 'Series of checks', dc: 'Opposed', description: 'Outmaneuver opponents in a chase' },
      { name: 'Recover', actionType: 'Move action', dc: 'Varies', description: 'Regain control of a vehicle that is out of control' }
    ]
  },
  'Profession': {
    description: 'You are skilled in a specific profession.',
    actions: [
      { name: 'Earn a Living', actionType: '1 week', dc: 'Varies', description: 'Use your profession to earn credits during downtime' },
      { name: 'Recall Knowledge', actionType: '1 round', dc: 'Varies', description: 'Remember useful information about your profession' }
    ]
  },
  'Sense Motive': {
    description: 'You can detect falsehoods and gain glimpses of the true intentions of creatures.',
    actions: [
      { name: 'Detect Deception', actionType: 'Varies', dc: 'Opposed Bluff', description: 'Determine if someone is lying or passing a secret message' },
      { name: 'Discern Secret Message', actionType: 'Varies', dc: 'Varies', description: 'Understand a secret message being passed' },
      { name: 'Sense Mental Effect', actionType: '1 minute', dc: '25', description: 'Determine if a target is under the influence of a mental effect' }
    ]
  },
  'Sleight of Hand': {
    description: 'You can hide small objects, lift items from other creatures, and perform other feats requiring quick hands.',
    actions: [
      { name: 'Hide Object', actionType: 'Standard or move action', dc: 'Opposed Perception', description: 'Conceal a small object on your person' },
      { name: 'Palm Object', actionType: 'Standard action', dc: '20', description: 'Pick up a small object without being noticed' },
      { name: 'Pickpocket', actionType: 'Standard action', dc: 'Opposed Perception', description: 'Take a small object from another creature without being noticed' },
      { name: 'Plant Object', actionType: 'Standard action', dc: 'Opposed Perception', description: 'Place an object on another creature without being noticed' }
    ]
  },
  'Stealth': {
    description: 'You can stay hidden and move silently to avoid detection.',
    actions: [
      { name: 'Hide', actionType: 'Move action', dc: 'Opposed Perception', description: 'Avoid being seen. Requires cover or concealment' },
      { name: 'Move Quietly', actionType: 'Part of movement', dc: 'Opposed Perception', description: 'Move without making noise' },
      { name: 'Snipe', actionType: 'Standard action (attack) + move action (hide)', dc: 'Opposed Perception -20', description: 'Make a ranged attack and then hide again (take -20 penalty to Stealth check)' }
    ]
  },
  'Survival': {
    description: 'You can survive in and make your way safely through almost any kind of wilderness, follow trails and tracks, deal with wild animals, and ride tamed ones.',
    actions: [
      { name: 'Endure Severe Weather', actionType: 'Varies', dc: '15', description: 'Avoid taking damage from severe weather and gain +2 to Fort saves against environmental effects' },
      { name: 'Follow Tracks', actionType: 'Full action', dc: 'Varies', description: 'Track creatures. Base DC 10, modified by conditions and time' },
      { name: 'Handle Animal', actionType: 'Move action', dc: 'Varies', description: 'Control or push a domesticated animal to perform tricks or tasks' },
      { name: 'Live Off the Land', actionType: '8 hours', dc: '10', description: 'Find food and water for yourself (and others with higher DC)' },
      { name: 'Orienteering', actionType: '1d4 hours', dc: '15', description: 'Avoid becoming lost in the wilderness' },
      { name: 'Predict Weather', actionType: '1 hour', dc: '15', description: 'Forecast weather conditions for the next 24 hours' }
    ]
  }
};