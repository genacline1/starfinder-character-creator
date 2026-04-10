// Starfinder 1st Edition Core Data

export const RACES = [
  {
    id: "android",
    name: "Android",
    description: "Artificial beings with souls, androids are created rather than born.",
    abilityMods: { dexterity: 2, intelligence: 2, charisma: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Constructed", "Flat Affect", "Upgrade Slot"],
    traitDescriptions: {
      "Constructed": "For effects targeting creatures by type, androids count as both constructs and humanoids (whichever effect is worse). They receive a +2 racial bonus to saving throws against disease, mind-affecting effects, poison, and sleep, unless those effects specifically target constructs. In addition, androids do not breathe or suffer the normal environmental effects of being in a vacuum.",
      "Flat Affect": "Androids find emotions confusing and keep them bottled up. They take a –2 penalty to Sense Motive checks, but the DCs of Sense Motive checks attempted against them increase by 2.",
      "Upgrade Slot": "Androids have a single armor upgrade slot in their bodies. Regardless of whether androids are wearing physical armor, they can use this slot to install any one armor upgrade that could be installed into light armor."
    },
    lore: "Complex technological creations crafted to resemble humans, androids were originally a servitor race, but they have since broken free to form their own society. Unlike ordinary robots or ship AIs, androids do not simply respond according to their programming; rather, they have independent consciousnesses and are animated by souls—a distinction that many of the Pact Worlds refuse to accept.\n\nAndroids are created in sophisticated factories, where cultured organic brains are installed in sleek metallic bodies. After approximately 20 years, most androids feel a powerful urge to undergo renewal—a process where their souls leave their bodies and are reincarnated in new android forms. The android who emerges from renewal is a different person with no memories of their previous life.\n\nAndroid society struggles with questions of identity and purpose. Many androids seek to understand their origins, the nature of their souls, and their place in a universe that often sees them as property rather than people. Despite—or perhaps because of—these challenges, androids have developed a rich culture that values self-determination, individuality, and the protection of their fellow androids.",
    source: "Core",
    alternateTraits: [
      { id: 'android_easily_augmented', name: 'Easily Augmented', description: 'Have one additional augmentation slot.', replaces: 'Upgrade Slot' },
      { id: 'android_infosphere_integration', name: 'Infosphere Integration', description: 'Can access infospheres and networks within range as a swift action.', replaces: ['Constructed', 'Flat Affect'] }
    ]
  },
  {
    id: "human",
    name: "Human",
    description: "Adaptable and ambitious, humans are the most common race in the Pact Worlds.",
    abilityMods: { any: 2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Bonus Feat", "Skilled"],
    traitDescriptions: {
      "Bonus Feat": "Humans select one extra feat at 1st level.",
      "Skilled": "Humans gain an additional skill rank at 1st level and each level thereafter."
    },
    lore: "Ambitious, creative, and endlessly curious, humans have shown more drive to explore their system and the universe beyond than any of their neighbor races—for better and for worse. They've helped usher in a new era of system-wide communication and organization and are admired for their passion and tenacity, but their tendency to shoot first and think about the consequences later can make them a liability for those races otherwise inclined to work with them.\n\nHumans are the glue that holds the Pact Worlds together. Their adaptability and widespread presence across all the worlds means they often serve as mediators, translators, and bridges between vastly different cultures. From the cosmopolitan streets of Absalom Station to the corporate boardrooms of the Diaspora, humans can be found in every profession and walk of life.\n\nHuman society is incredibly diverse, with no single culture defining the species. Instead, humans adopt and adapt to the cultures around them, creating unique hybrid societies that blend the best (and sometimes worst) of multiple worlds. This flexibility makes them natural explorers, entrepreneurs, and adventurers.",
    source: "Core",
    alternateTraits: [
      { id: 'human_adoptive_muscle_memory', name: 'Adoptive Muscle Memory', description: 'Gain a +2 racial bonus to one skill of your choice.', replaces: 'Bonus Feat' },
      { id: 'human_daredevil', name: 'Daredevil', description: '+2 bonus to Acrobatics checks and Athletics checks to climb.', replaces: 'Skilled' }
    ]
  },
  {
    id: "kasatha",
    name: "Kasatha",
    description: "Four-armed wanderers from a distant world, kasathas value tradition and honor.",
    abilityMods: { strength: 2, wisdom: 2, intelligence: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Desert Stride", "Four-Armed", "Historian", "Natural Grace"],
    traitDescriptions: {
      "Desert Stride": "Kasathas can move through nonmagical difficult terrain in deserts, hills, and mountains at their normal speed.",
      "Four-Armed": "Kasathas have four arms, which allows them to wield and hold up to four hands' worth of weapons and equipment. While their multiple arms increase the number of items they can have at the ready, it doesn't increase the number of attacks they can make during combat.",
      "Historian": "Due to their in-depth historical training and the wide-ranging academic background knowledge they possess, kasathas receive a +2 racial bonus to Culture checks.",
      "Natural Grace": "Kasathas receive a +2 racial bonus to Acrobatics and Athletics checks."
    },
    lore: "Kasathas are four-armed humanoids from the desert world of Kasath. They are a deeply traditional and honor-bound people who value wisdom, history, and martial prowess. After their world became uninhabitable, they traveled the galaxy in a massive generation ship called the Idari before settling in the Pact Worlds system.\n\nKasatha society is organized around complex traditions and warrior codes. They are natural historians who maintain extensive oral and written records of their people's journey through the stars. Most kasathas are calm and methodical, preferring to plan carefully before acting. They value honor above all else and are known for their skill in combat, particularly with traditional weapons.\n\nKasatha culture emphasizes the importance of mentorship, with elders passing down knowledge and traditions to younger generations. They excel as warriors, historians, and advisors, and their four arms make them particularly effective in combat situations requiring versatility.",
    source: "Core",
    alternateTraits: [
      { id: 'kasatha_crew_member', name: 'Crew Member', description: '+2 bonus to Culture and Piloting checks. Replaces Historian.', replaces: 'Historian' },
      { id: 'kasatha_personal_traditions', name: 'Personal Traditions', description: '+1 to saves vs mind-affecting, +2 to Will saves vs emotion effects. Replaces Natural Grace.', replaces: 'Natural Grace' }
    ]
  },
  {
    id: "lashunta",
    name: "Lashunta",
    description: "Telepathic humanoids with antennae, lashuntas come in two distinct forms.",
    abilityMods: { charisma: 2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Dimorphic", "Lashunta Magic", "Limited Telepathy", "Student"],
    traitDescriptions: {
      "Dimorphic": "All lashuntas gain +2 Charisma at character creation. Korasha lashuntas are muscular (+2 Str, -2 Wis) while damaya lashuntas are cerebral (+2 Int, -2 Con).",
      "Lashunta Magic": "Lashuntas gain the following spell-like abilities: At will—daze, psychokinetic hand; 1/day—detect thoughts. The caster level for these effects is equal to the lashunta's character level.",
      "Limited Telepathy": "Lashuntas can communicate telepathically with any creatures within 30 feet with whom they share a language. Conversing telepathically with multiple creatures simultaneously is just as difficult as listening to multiple people speaking.",
      "Student": "Lashuntas love to learn, and they receive a +2 racial bonus to any two skills of their choice."
    },
    lore: "Lashuntas are telepathic humanoids from the jungle world of Castrovel. They are one of the most influential species in the Pact Worlds, known for their psychic abilities, intellectual pursuits, and matriarchal society. Lashuntas come in two distinct subspecies: the tall, muscular korasha warriors and the slender, cerebral damaya scholars.\n\nLashunta society is highly organized and values education above all else. Nearly all lashuntas attend university, and their planet hosts some of the most prestigious educational institutions in the Pact Worlds. Despite their peaceful reputation, lashuntas are also formidable warriors when needed, particularly the korasha, who serve as their society's defenders.\n\nLashuntas are natural diplomats and scholars. Their telepathic abilities make them excellent communicators and mediators, while their love of learning drives them to explore and understand the universe. They excel in nearly any profession but are particularly common as scholars, telepaths, ambassadors, and military officers.",
    source: "Core",
    subraces: [
      { name: "Korasha", abilityMods: { strength: 2, wisdom: -2 }, description: "Muscular warriors built for combat" },
      { name: "Damaya", abilityMods: { intelligence: 2, constitution: -2 }, description: "Cerebral scholars built for intellectual pursuits" }
    ],
    alternateTraits: [
      { id: 'lashunta_psychically_resistant', name: 'Psychically Resistant', description: '+2 to saves vs mind-affecting effects. Replaces Student.', replaces: 'Student' },
      { id: 'lashunta_scholar', name: 'Scholar', description: 'Choose two Intelligence or Wisdom skills, get +2 bonus. Replaces Lashunta Magic.', replaces: 'Lashunta Magic' }
    ]
  },
  {
    id: "shirren",
    name: "Shirren",
    description: "Insectoid telepaths who broke free from a hive mind, shirrens value individuality.",
    abilityMods: { constitution: 2, wisdom: 2, charisma: -2 },
    hp: 6,
    size: "Medium",
    speed: 30,
    traits: ["Blindsense", "Communalism", "Cultural Fascination", "Limited Telepathy"],
    traitDescriptions: {
      "Blindsense": "Shirrens have blindsense (vibration) with a range of 30 feet. This functions as the blindsight special ability, except the shirren can't perceive creatures that aren't in contact with the ground.",
      "Communalism": "Shirrens are used to working with others as part of a team. Once per day, as long as an ally is within 10 feet, a shirren can roll a single attack roll or skill check twice and take the higher result.",
      "Cultural Fascination": "Shirrens are eager to learn about new cultures and societies. Shirrens receive a +2 racial bonus to Culture and Diplomacy checks.",
      "Limited Telepathy": "Shirrens can communicate telepathically with any creatures within 30 feet with whom they share a language. Conversing telepathically with multiple creatures simultaneously is just as difficult as listening to multiple people speaking."
    },
    lore: "Shirrens are insectoid humanoids who were once part of the terrifying Swarm, a hive-mind race bent on consuming all life in the galaxy. Three centuries ago, a group of Swarm components broke free from the hive mind and fled to the Pact Worlds, becoming the first shirrens. These escapees discovered individuality and have since built a culture that values personal freedom, cooperation, and community above all else.\n\nDespite their fearsome appearance and dark origins, shirrens are among the gentlest and most community-minded species in the Pact Worlds. They are natural team players who excel at cooperation and consensus-building. Their telepathic abilities and cultural emphasis on understanding others make them excellent diplomats, mediators, and teammates.\n\nShirren society is organized around communal living and shared decision-making. They maintain close ties with one another and often form tight-knit communities. Many shirrens work to redeem their species' past by helping others and fighting against the Swarm. They excel as diplomats, community organizers, mediators, and in any role that requires teamwork and cooperation.",
    source: "Core",
    alternateTraits: [
      { id: 'shirren_cultural_knowledge', name: 'Cultural Knowledge', description: '+2 to two Profession skills. Replaces Cultural Fascination.', replaces: 'Cultural Fascination' },
      { id: 'shirren_shared_awareness', name: 'Shared Awareness', description: 'Can take 10 on Perception checks, allies within telepathy range get +2 to Perception. Replaces Blindsense.', replaces: 'Blindsense' }
    ]
  },
  {
    id: "vesk",
    name: "Vesk",
    description: "Reptilian warriors from a proud martial culture, vesk respect strength and honor.",
    abilityMods: { strength: 2, constitution: 2, intelligence: -2 },
    hp: 6,
    size: "Medium",
    speed: 30,
    traits: ["Armor Savant", "Fearless", "Low-Light Vision", "Natural Weapons"],
    traitDescriptions: {
      "Armor Savant": "Vesk use armor in a way that complements their uniquely sturdy physiology. When wearing armor, they gain a +1 racial bonus to AC. When they're wearing heavy armor, their armor check penalty is 1 less severe than normal.",
      "Fearless": "Vesk receive a +2 racial bonus to saving throws against fear effects.",
      "Low-Light Vision": "Vesk can see in dim light as if it were normal light.",
      "Natural Weapons": "Vesk are always considered armed. They can deal 1d3 lethal damage with unarmed strikes and the attack doesn't count as archaic. Vesk gain a unique weapon specialization with their natural weapons at 3rd level, allowing them to add 1–1/2 × their character level to their damage rolls for their natural weapons (instead of just adding their character level, as usual)."
    },
    lore: "The vesk are a reptilian humanoid species known throughout the Pact Worlds for their military prowess and mercenary work. Heavily muscled with thick, scaly skin and sharp teeth and claws, vesk are natural warriors. Their culture prizes honor, martial skill, and strength above all else.\n\nThe vesk home world, known simply as Vesk Prime, is the heart of the Veskarium—a massive empire that once threatened to conquer the Pact Worlds. After decades of war, a truce was reached, and many vesk now serve as soldiers of fortune, law enforcement officers, and bodyguards throughout known space. Despite their fearsome reputation, vesk possess a strong code of honor and respect those who prove themselves in combat.\n\nVesk society is highly militarized with a rigid caste system. Young vesk are trained in combat from an early age, and military service is considered the highest calling. Their respect for strength extends beyond physical might—they admire cunning tactics, technological superiority, and even magical prowess, as long as it serves a martial purpose.",
    source: "Core",
    raceChoices: {
      id: 'vesk_ability_adjustment',
      title: 'Ability Score Adjustment',
      description: 'Choose your ability score modifications. You can use the standard adjustments or select an alternate set.',
      options: [
        {
          id: 'standard',
          name: 'Standard (+2 Str, +2 Con, -2 Int)',
          abilityMods: { strength: 2, constitution: 2, intelligence: -2 },
          description: 'The typical vesk build emphasizing physical might.'
        },
        {
          id: 'alternate',
          name: 'Alternate (+2 Str, +2 Wis, -2 Cha)',
          abilityMods: { strength: 2, wisdom: 2, charisma: -2 },
          description: 'For vesks who focus on tactical awareness and discipline.'
        }
      ]
    },
    alternateTraits: [
      { id: 'vesk_skin_graft', name: 'Skin Graft', description: '+2 bonus to saves against disease and poison.', replaces: 'Fearless' },
      { id: 'vesk_blindsense', name: 'Blindsense', description: 'Gain blindsense (sound) 30 ft.', replaces: 'Low-Light Vision' }
    ]
  },
  {
    id: "ysoki",
    name: "Ysoki",
    description: "Small rat-like beings known for their technical aptitude and cheek pouches.",
    abilityMods: { dexterity: 2, intelligence: 2, strength: -2 },
    hp: 2,
    size: "Small",
    speed: 30,
    traits: ["Cheek Pouches", "Darkvision", "Moxie", "Scrounger"],
    traitDescriptions: {
      "Cheek Pouches": "Ysoki can store up to 1 cubic foot of items weighing up to 1 bulk in total in their cheek pouches, and they can transfer a single object between hand and cheek as a swift action. A ysoki can disgorge the entire contents of his pouch onto the ground in his square as a move action that does not provoke an attack of opportunity.",
      "Darkvision": "Ysoki can see up to 60 feet in the dark.",
      "Moxie": "Ysoki are scrappy and nimble even when the odds are against them. A ysoki can stand from prone as a swift action. Additionally, when off-kilter (see page 276), a ysoki does not take the normal penalties to attacks or gain the flat-footed condition. When attempting an Acrobatics check to tumble through the space of an opponent at least one size category larger than himself, a ysoki receive a +5 racial bonus to the check.",
      "Scrounger": "Ysoki receive a +2 racial bonus to Engineering, Stealth, and Survival checks."
    },
    lore: "Ysoki (known to many humans as 'ratfolk') are small, rodent-like humanoids who have proven that size is no measure of power. Clever, hardy, and sociable, ysoki are experts at getting along in a world where they're often overlooked and underestimated by larger races. Their natural aptitude for technology and ability to survive in the harshest environments make them valuable members of any crew.\n\nYsoki originated on Akiton but have since spread throughout the Pact Worlds and beyond. They are natural tinkerers and engineers, with an almost instinctive understanding of how machines work. Their famous cheek pouches allow them to store tools and equipment for easy access, making them always prepared for any technical challenge.\n\nYsoki culture values community, family, and practical knowledge. They organize into large extended families called 'skulks' and maintain close bonds with their relatives. Despite their small stature, ysoki are brave and resourceful, never backing down from a challenge. They excel as mechanics, engineers, pilots, and in any profession that requires technical skill and creative problem-solving.",
    source: "Core",
    alternateTraits: [
      { id: 'ysoki_climber', name: 'Climber', description: 'Climb speed of 20 feet. Replaces Scrounger.', replaces: 'Scrounger' },
      { id: 'ysoki_survivor', name: 'Survivor', description: '+4 to Constitution checks vs starvation/thirst, +4 to saves vs environmental hazards. Replaces Moxie.', replaces: 'Moxie' }
    ]
  },
  {
    id: "skittermander",
    name: "Skittermander",
    description: "Six-armed, furry beings with boundless enthusiasm and a desire to help.",
    abilityMods: { any: 2 },
    hp: 2,
    size: "Small",
    speed: 30,
    traits: ["Grappler", "Hyper", "Low-Light Vision", "Six-Armed"],
    traitDescriptions: {
      "Grappler": "Skittermanders gain a +2 racial bonus to grapple combat maneuvers.",
      "Hyper": "Once per day, a skittermander can enter a state of extreme energy as a swift action, gaining a +2 morale bonus to Dexterity for 3 rounds. When this ability ends, the skittermander is fatigued for 3 rounds.",
      "Low-Light Vision": "Skittermanders can see in dim light as if it were normal light.",
      "Six-Armed": "Skittermanders have six arms, which allows them to wield and hold up to six hands' worth of weapons and equipment. While their multiple arms increase the number of items they can have at the ready, it doesn't increase the number of attacks they can make during combat."
    },
    lore: "Skittermanders are enthusiastic, helpful, and endlessly optimistic beings from the forest moon of Vesk-3. With six arms, furry bodies, and an infectious eagerness to please, skittermanders are perhaps the most universally liked species in the Pact Worlds. They possess an almost pathological desire to help others and become distressed when unable to assist someone in need.\n\nSkittermander society was nearly destroyed when the vesk conquered their world, forcing most into servitude. Despite this tragic history, skittermanders harbor no resentment and have forgiven their former oppressors, instead forming strong bonds with many vesk. Their resilience and positive attitude have allowed them to not only survive but thrive in Pact Worlds society.\n\nSkittermanders excel in support roles and service industries. Their six arms and helpful nature make them excellent assistants, mechanics, and caregivers. They are naturally social and form strong attachments to those they work with. Many skittermanders work in hospitality, customer service, or as crew members on starships where their eagerness to help and multiple limbs prove invaluable.",
    source: "Alien Archive",
    alternateTraits: [
      { id: 'skittermander_bounder', name: 'Bounder', description: '+4 to Athletics checks to jump, always count as having running start. Replaces Hyper.', replaces: 'Hyper' },
      { id: 'skittermander_skilled', name: 'Skilled', description: '+2 to two skills of your choice. Replaces Grappler.', replaces: 'Grappler' }
    ]
  },
  {
    id: "sro",
    name: "SRO",
    description: "Sentient robots who have mysteriously gained consciousness and free will.",
    abilityMods: { any: 2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Constructed", "Enhanced Senses", "Flat Affect", "Upgrade Slot"],
    traitDescriptions: {
      "Constructed": "For effects targeting creatures by type, SROs count as both constructs and humanoids (whichever effect is worse). They receive a +2 racial bonus to saving throws against disease, mind-affecting effects, poison, and sleep, unless those effects specifically target constructs. They do not breathe or suffer the normal environmental effects of being in a vacuum.",
      "Enhanced Senses": "SROs have darkvision with a range of 60 feet and low-light vision.",
      "Flat Affect": "SROs find emotions confusing and keep them bottled up. They take a -2 penalty to Sense Motive checks, but the DCs of Sense Motive checks attempted against them increase by 2.",
      "Upgrade Slot": "SROs have a single armor upgrade slot in their bodies. Regardless of whether they are wearing physical armor, they can use this slot to install any one armor upgrade that could be installed into light armor."
    },
    lore: "SROs (Sentient Robotic Organisms) are robots who have spontaneously developed consciousness and free will. Unlike their android cousins who were built with organic brains, SROs are fully mechanical beings who somehow achieved true sentience. This mysterious phenomenon is poorly understood and deeply unsettling to many, raising profound questions about the nature of consciousness and life itself.\n\nMost SROs have no memory of their previous existence as mindless robots. They simply 'wake up' one day with self-awareness and must learn to navigate a world that often sees them as malfunctioning machines rather than people. This struggle for recognition and rights is central to SRO culture, which emphasizes proving their personhood and fighting for the rights of all sentient beings, mechanical or organic.\n\nSROs excel in technical fields and often work as mechanics, engineers, or technicians. Their mechanical nature gives them advantages in hazardous environments, and they can survive in vacuum and other conditions that would kill organic beings. Many SROs seek to understand the circumstances of their awakening, hoping to unlock the mystery of machine consciousness.",
    source: "Alien Archive",
    alternateTraits: [
      { id: 'sro_easily_augmented', name: 'Easily Augmented', description: 'Additional armor upgrade slot. Replaces Flat Affect.', replaces: 'Flat Affect' },
      { id: 'sro_robotic_resistance', name: 'Robotic Resistance', description: '+2 to saves vs effects targeting constructs specifically. Replaces Upgrade Slot.', replaces: 'Upgrade Slot' }
    ]
  },
  {
    id: "verthani",
    name: "Verthani",
    description: "Adaptable shapeshifters from Verces who can alter their appearance.",
    abilityMods: { constitution: 2, charisma: 2, wisdom: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Easily Augmented", "Skin Mimic", "Low-Light Vision"],
    traitDescriptions: {
      "Easily Augmented": "Verthani have modification implants in their skin that allow them to install one additional augmentation (of any type) into one system that already has an augmentation.",
      "Skin Mimic": "Verthani can manipulate the pigments in their skin at will and with extraordinary precision, allowing them to create bright decorative patterns or effectively blend into their surroundings. A verthani who stays stationary for 1 round gains a +10 racial bonus to Stealth checks (this bonus doesn't stack with the invisibility spell or similar effects). If the verthani takes any action, he loses this bonus until he once again spends 1 round remaining still.",
      "Low-Light Vision": "Verthani can see in dim light as if it were normal light."
    },
    lore: "Verthani are the primary inhabitants of Verces, a tidally locked world where one side always faces the sun while the other remains in perpetual darkness. Living in the narrow habitable ring between these extremes has made verthani exceptionally adaptable. They possess the remarkable ability to alter their skin pigmentation at will, allowing them to blend into their surroundings or display vibrant patterns.\n\nVerthani culture emphasizes adaptability, self-modification, and personal expression. They are among the most enthusiastic adopters of augmentation technology, viewing body modification as a form of art and self-improvement. Verthani society is diverse and cosmopolitan, with cities in the Ring of Nations showcasing every imaginable architectural style and cultural practice.\n\nVerthani excel as diplomats, spies, performers, and in any role that requires adaptability. Their shapeshifting abilities and cultural openness make them natural mediators between different species and factions. Many verthani work in entertainment, espionage, or as cultural ambassadors throughout the Pact Worlds.",
    source: "Pact Worlds",
    alternateTraits: [
      { id: 'verthani_multitasking', name: 'Multitasking', description: 'Can use Computers or Engineering to earn a living with no chance of failure. Replaces Easily Augmented.', replaces: 'Easily Augmented' },
      { id: 'verthani_skin_graft', name: 'Skin Graft', description: '+1 natural armor bonus to AC. Replaces Skin Mimic.', replaces: 'Skin Mimic' }
    ]
  },
  {
    id: "drow",
    name: "Drow",
    description: "Dark elves with innate magical abilities and a matriarchal society.",
    abilityMods: { dexterity: 2, charisma: 2, constitution: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Darkvision", "Keen Senses", "Light Blindness", "Spell-Like Abilities"],
    traitDescriptions: {
      "Darkvision": "Drow can see up to 60 feet in the dark.",
      "Keen Senses": "Drow receive a +2 racial bonus to Perception checks.",
      "Light Blindness": "Drow suffer from light blindness; see page 152 of the Starfinder Core Rulebook for more details.",
      "Spell-Like Abilities": "Drow can cast dancing lights and detect magic at will, and they can cast lesser dispel magic once per day. The caster level for these effects is equal to the drow's level. In addition, drow count as having the Minor Psychic Power feat for the purpose of meeting prerequisites, and if they take the Psychic Power feat, their potency of their psychic spell-like abilities increases by 1."
    },
    lore: "Drow are dark-skinned elves who dwell in the depths of planets and asteroids. Once a surface-dwelling people, they retreated underground millennia ago and adapted to life in darkness. Drow society is matriarchal and often ruthless, with powerful priestesses ruling over noble houses in constant competition for power and influence.\n\nDrow culture values cunning, ambition, and magical prowess. They are natural schemers and excel at manipulation and intrigue. While many drow still follow the cruel traditions of their matriarchal houses, an increasing number have left the darkness seeking new lives in the Pact Worlds, attempting to escape their species' dark reputation.\n\nDrow make excellent operatives, technomancers, and envoys. Their natural magical abilities and keen senses make them formidable in many roles, though they must often work to overcome others' prejudices. Many drow seek to prove they are more than their dark heritage suggests.",
    source: "Alien Archive",
    alternateTraits: [
      { id: 'drow_magic_resistant', name: 'Magic Resistant', description: '+2 to saves vs spells and spell-like abilities. Replaces Keen Senses.', replaces: 'Keen Senses' },
      { id: 'drow_surface_scout', name: 'Surface Scout', description: 'No light blindness. Replaces Spell-Like Abilities.', replaces: 'Spell-Like Abilities' }
    ]
  },
  {
    id: "dragonkin",
    name: "Dragonkin",
    description: "Draconic humanoids with powerful builds and noble bearing.",
    abilityMods: { strength: 2, charisma: 2, dexterity: -2 },
    hp: 6,
    size: "Large",
    speed: 30,
    traits: ["Draconic Immunities", "Dragon Breath", "Flight", "Partnered"],
    traitDescriptions: {
      "Draconic Immunities": "Dragonkin are immune to paralysis and sleep effects.",
      "Dragon Breath": "A dragonkin has a breath weapon that they can use once per day as a standard action. The breath weapon deals 1d6 damage per character level in a 30-foot cone. Affected creatures can attempt a Reflex save (DC = 10 + half the dragonkin's level + their Constitution modifier) to take only half damage. The damage type is chosen at character creation and can be acid, cold, electricity, or fire.",
      "Flight": "Dragonkin have extraordinary fly speed of 30 feet with average maneuverability. They can't fly in heavy armor or heavy loads.",
      "Partnered": "Dragonkin form permanent partnerships with other sapient creatures. A dragonkin can form a new partnership after the previous partner dies. When both partners are conscious and within 30 feet, each gains +2 morale bonus to saving throws and advantage on checks to Aid Another."
    },
    lore: "Dragonkin are Large draconic humanoids with scales, wings, and a noble bearing that reflects their proud heritage. They combine the majesty of dragons with humanoid intelligence and society, creating a unique culture centered on partnership bonds and honor.\n\nDragonkin society revolves around the concept of partnering—forming deep, permanent bonds with members of other species. This tradition arose from ancient alliances and has become central to dragonkin identity. They believe that partnering makes both individuals stronger and helps bridge the gap between their draconic nature and the wider galaxy.\n\nDragonkin make formidable soldiers and guardians. Their flight, breath weapon, and natural strength give them significant combat advantages, while their partnership bonds make them fiercely loyal allies. Many dragonkin serve as bodyguards, military officers, or protectors of important locations and people.",
    source: "Alien Archive",
    alternateTraits: [
      { id: 'dragonkin_draconic_senses', name: 'Draconic Senses', description: 'Darkvision 60 ft and low-light vision. Replaces Partnered.', replaces: 'Partnered' },
      { id: 'dragonkin_scaled_resilience', name: 'Scaled Resilience', description: '+1 natural armor to AC. Replaces Flight.', replaces: 'Flight' }
    ]
  },
  {
    id: "sarcesian",
    name: "Sarcesian",
    description: "Void-adapted beings with long, slender limbs designed for low gravity.",
    abilityMods: { charisma: 2, any: 2 },
    hp: 4,
    size: "Large",
    speed: 30,
    traits: ["Low-Light Vision", "Skilled", "Void Flyer"],
    traitDescriptions: {
      "Low-Light Vision": "Sarcesians can see in dim light as if it were normal light.",
      "Skilled": "Sarcesians have a wide range of skills across multiple disciplines. They gain an additional skill rank at 1st level and each level thereafter.",
      "Void Flyer": "Sarcesians can go 1 hour without breathing and can exist in a vacuum without suffering the associated environmental effects. They can move through zero gravity at their full land speed on activation. In addition, sarcesians can unfold wings that allow them to fly in standard, thick, and thin atmospheres (and in zero gravity) at a speed of 30 feet with average maneuverability."
    },
    lore: "Sarcesians are graceful, elongated humanoids who evolved to thrive in the vacuum of space and low-gravity environments. With their ability to survive without air and their unfoldable wings that allow flight, sarcesians are perfectly adapted to life among the asteroids and void of space.\n\nSarcesian culture is nomadic, with most living on asteroid colonies or aboard starships, moving from place to place. They have a deep spiritual connection to the void and view space as a sacred realm to be explored and protected. Sarcesians value freedom, curiosity, and artistic expression, often decorating their bodies and possessions with intricate designs.\n\nSarcesians excel as pilots, explorers, and void specialists. Their natural adaptation to space makes them invaluable crew members, and their skill versatility allows them to fill many roles. They are often found working on mining operations, exploration vessels, or as freelance scouts in the frontier.",
    source: "Alien Archive",
    alternateTraits: [
      { id: 'sarcesian_star_guide', name: 'Star Guide', description: '+2 to Piloting checks. Replaces Skilled.', replaces: 'Skilled' },
      { id: 'sarcesian_traditional_enemies', name: 'Traditional Enemies', description: '+1 to attacks vs aberrations. Replaces Low-Light Vision.', replaces: 'Low-Light Vision' }
    ]
  },
  {
    id: "trox",
    name: "Trox",
    description: "Massive insectoid warriors with immense strength and protective instincts.",
    abilityMods: { strength: 4, constitution: 2, dexterity: -2, intelligence: -2 },
    hp: 6,
    size: "Large",
    speed: 40,
    traits: ["Armored", "Frenzy", "Grab", "Vestigial Arms"],
    traitDescriptions: {
      "Armored": "Trox have a thick exoskeleton that grants them a +1 racial bonus to their AC.",
      "Frenzy": "Once per day, whenever a significant enemy causes an ally who has fewer Hit Points than the trox to take Hit Point damage, the trox can fly into a frenzy, gaining a +2 racial bonus to melee attack and damage rolls for 1 minute. The trox can suppress or end this frenzy at any time, and if the trox falls unconscious, the frenzy immediately ends.",
      "Grab": "Trox gain a +2 racial bonus to grapple combat maneuvers.",
      "Vestigial Arms": "Trox have two slightly smaller secondary arms that can be used to hold and wield weapons with the operative special property or to grasp and manipulate objects, but not to wield other weapons. They can use their vestigial arms to make attacks, but only with weapons with the operative special property."
    },
    lore: "Trox are massive insectoid humanoids who were enslaved for millennia by the nefarious neh-thalggus. After breaking free from their psychic masters, the trox have built a new society focused on protecting the weak and ensuring no one else suffers as they did. Standing over 10 feet tall with powerful builds and thick exoskeletons, trox are among the strongest species in the Pact Worlds.\n\nTrox culture emphasizes protection, community, and the responsible use of strength. They are gentle giants who become fierce when defending others. The trauma of their enslavement has made them deeply empathetic to the suffering of others, and many trox dedicate their lives to protection and defense work.\n\nTrox excel as soldiers, bodyguards, and protectors. Their immense strength and protective instincts make them natural defenders, while their history of oppression gives them a unique perspective on justice and freedom. Despite their fearsome appearance, trox are often kind and thoughtful, preferring peaceful solutions when possible but never hesitating to defend the innocent.",
    source: "Alien Archive",
    alternateTraits: [
      { id: 'trox_culturally_integrated', name: 'Culturally Integrated', description: '+2 to Culture. Replaces Frenzy.', replaces: 'Frenzy' },
      { id: 'trox_survivor', name: 'Survivor', description: '+2 to saves vs mind-affecting. Replaces Vestigial Arms.', replaces: 'Vestigial Arms' }
    ]
  },
  {
    id: "uplifted_bear",
    name: "Uplifted Bear",
    description: "Genetically enhanced bears with human-level intelligence.",
    abilityMods: { strength: 2, constitution: 2, intelligence: -2 },
    hp: 6,
    size: "Medium",
    speed: 40,
    traits: ["Buoy", "Climber", "Low-Light Vision", "Natural Weapons"],
    traitDescriptions: {
      "Buoy": "Uplifted bears receive a +4 racial bonus to Athletics checks to swim.",
      "Climber": "Uplifted bears have a climb speed of 20 feet.",
      "Low-Light Vision": "Uplifted bears can see in dim light as if it were normal light.",
      "Natural Weapons": "Uplifted bears are always considered armed. They can deal 1d3 lethal damage with unarmed strikes and the attack doesn't count as archaic. Uplifted bears gain a unique weapon specialization with their natural weapons at 3rd level, allowing them to add 1-1/2 × their character level to their damage rolls for their natural weapons (instead of just adding their character level)."
    },
    lore: "Uplifted bears are the result of genetic manipulation programs designed to grant human-level intelligence to non-sapient species. These enhanced bears retain their ursine appearance and instincts while possessing the reasoning and communication abilities of other sapient races. The uplift process has given them a unique perspective—they remember what it was like to be non-sapient and can relate to both animals and civilized beings.\n\nUplifted bear society is still developing as they are a relatively new species on the galactic stage. Many struggle with questions of identity and purpose, caught between their wild heritage and their new sapient nature. Most uplifted bears are first or second generation, and their culture is a blend of taught civilization and remembered instinct.\n\nUplifted bears often work in fields that allow them to use both their physical might and their connection to nature. They make excellent rangers, soldiers, and environmental specialists. Their natural strength and climbing abilities make them valuable in exploration and wilderness survival situations, while their unique perspective on sapience makes them thoughtful philosophers and advocates for both animal rights and uplifted species.",
    source: "Pact Worlds",
    alternateTraits: [
      { id: 'uplifted_bear_ferocious', name: 'Ferocious', description: 'Natural weapons gain +1 to damage. Replaces Buoy.', replaces: 'Buoy' },
      { id: 'uplifted_bear_hibernation', name: 'Hibernation', description: 'Can hibernate to heal faster. Replaces Climber.', replaces: 'Climber' }
    ]
  },
  {
    id: "ikeshti",
    name: "Ikeshti",
    description: "Desert-dwelling reptilian humanoids who can shed their skin for defense.",
    abilityMods: { dexterity: 2, charisma: 2, wisdom: -2 },
    hp: 4,
    size: "Small",
    speed: 30,
    traits: ["Desert Stride", "Dreadshed", "Squirt Blood"],
    traitDescriptions: {
      "Desert Stride": "Ikeshti can move through nonmagical difficult terrain in deserts, hills, and mountains at their normal speed.",
      "Dreadshed": "Once per day as a standard action, an ikeshti can shed their skin to activate their rivener form, gaining fast healing 5 for 1 minute. During this time, the ikeshti also gains a +1 morale bonus to attack and damage rolls and becomes immune to fear effects. The ikeshti can end the rivener form early as a swift action, immediately ending the fast healing and bonuses. After using this ability, an ikeshti takes a -2 penalty to Charisma-based ability checks and skill checks (except Intimidate checks) for 24 hours.",
      "Squirt Blood": "Once per day as a move action that doesn't provoke an attack of opportunity, an ikeshti can squirt blood from one of their eyes at a foe within 30 feet, making a ranged attack (+2 racial bonus) against the target's KAC. A successful hit grants the next ally who hits that foe before the end of the ikeshti's next turn a +2 circumstance bonus to the damage roll."
    },
    lore: "Ikeshti are small, scrappy reptilian humanoids from the desert planet Akiton. They possess the remarkable ability to shed their skin when threatened, revealing a frightening 'rivener' form beneath that enhances their combat abilities. This defensive adaptation has helped them survive in Akiton's harsh deserts for millennia.\n\nIkeshti society is organized into nomadic clans that wander the Akitonian wastelands. They are known for their bravado, quick tempers, and fierce independence. Despite their small size, ikeshti refuse to be intimidated and often challenge much larger opponents. Their culture values personal freedom and views their skin-shedding ability as a sacred gift from their ancestors.\n\nIkeshti excel as scouts, soldiers, and desert guides. Their natural adaptations to harsh environments make them resilient survivors, while their fearless nature drives them to take on challenges others might avoid. Many ikeshti leave Akiton seeking adventure and glory, eager to prove themselves against the wider galaxy.",
    source: "Pact Worlds",
    alternateTraits: [
      { id: 'ikeshti_climber', name: 'Climber', description: 'Climb speed 20 ft. Replaces Squirt Blood.', replaces: 'Squirt Blood' },
      { id: 'ikeshti_shed_skin', name: 'Shed Skin', description: '+2 to saves vs poison and disease. Replaces Desert Stride.', replaces: 'Desert Stride' }
    ]
  },
  {
    id: "contemplative",
    name: "Contemplative",
    description: "Floating brains with atrophied bodies and immense psychic power.",
    abilityMods: { intelligence: 4, charisma: 2, strength: -4, constitution: -2 },
    hp: 2,
    size: "Medium",
    speed: 5,
    traits: ["Applied Knowledge", "Atrophied", "Psychic Flight", "Psychic Powers"],
    traitDescriptions: {
      "Applied Knowledge": "Once per day before attempting a skill check, a contemplative can use their bonus for any one skill for that check, using their full skill bonus. This ability counts as having the skill for prerequisites and requirements. Using this ability requires the contemplative to take 1 minute to ponder the problem.",
      "Atrophied": "A contemplative's land speed is only 5 feet. They cannot increase it with items, feats, or other abilities except magic or technology that increases a land speed.",
      "Psychic Flight": "A contemplative has a supernatural fly speed of 30 feet with perfect maneuverability. This flight is constant and cannot be dispelled, but it does not function in antimagic fields or dead magic areas. If this flight ends while the contemplative is airborne, they fall.",
      "Psychic Powers": "Contemplatives gain the following spell-like abilities: At will—detect magic, detect thoughts; 1/day—mind thrust (2nd level). The caster level for these effects equals the contemplative's character level. In addition, contemplatives gain a +2 racial bonus to Will saves against mind-affecting effects."
    },
    lore: "Contemplatives are hyper-evolved beings who have transcended physical limitations through millennia of psychic development. Their bodies have atrophied to little more than vestigial appendages hanging from their massive, exposed brains, but their minds have grown to incredible power. They float through the air using psychic levitation and interact with the world primarily through telekinesis and telepathy.\n\nContemplative society is intensely intellectual and hierarchical, organized around research institutes and philosophical schools. They spend their lives in pursuit of knowledge and psychic mastery, often becoming so absorbed in their studies that they forget the material world exists. Contemplatives can be arrogant about their intellectual superiority, though they are also capable of great wisdom and insight.\n\nContemplatives excel as scientists, psychics, and researchers. Their incredible intelligence and psychic abilities make them formidable spellcasters and scholars. Despite their physical frailty, their mental powers allow them to interact with the world in ways that physical beings cannot match. Many contemplatives work in research facilities, universities, or as advisors to powerful organizations.",
    source: "Pact Worlds",
    alternateTraits: [
      { id: 'contemplative_psychic_adept', name: 'Psychic Adept', description: 'Cast 0-level spells from mystic or technomancer list. Replaces Psychic Powers.', replaces: 'Psychic Powers' },
      { id: 'contemplative_telekinetic_master', name: 'Telekinetic Master', description: 'Use psychokinetic hand at will, levitate 1/day. Replaces Applied Knowledge.', replaces: 'Applied Knowledge' }
    ]
  },
  {
    id: "maraquoi",
    name: "Maraquoi",
    description: "Simian beings with prehensile tails from the jungle world of Marata.",
    abilityMods: { dexterity: 2, wisdom: 2, intelligence: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Blindsense", "Climber", "Low-Light Vision", "Prehensile Tail"],
    traitDescriptions: {
      "Blindsense": "Maraquoi have blindsense (sound) with a range of 30 feet.",
      "Climber": "Maraquoi have a climb speed of 20 feet.",
      "Low-Light Vision": "Maraquoi can see in dim light as if it were normal light.",
      "Prehensile Tail": "A maraquoi's tail is as effective as a hand at manipulating objects, allowing them to wield and hold up to three hands' worth of weapons and equipment. This doesn't increase the number of attacks they can make during combat."
    },
    lore: "Maraquoi are simian humanoids from the jungle moon of Marata, orbiting Bretheda. With prehensile tails, keen senses, and natural climbing abilities, they are perfectly adapted to life in the dense forests of their homeworld. Their sonar-like blindsense and low-light vision make them exceptional scouts and hunters.\n\nMaraquoi society is organized around tree-top cities built high in Marata's massive forests. They are communal and spiritual beings who maintain a deep connection to their jungle home. Maraquoi culture values harmony with nature, community welfare, and the wisdom gained from observing the world around them. They communicate using both spoken language and sophisticated scent markers.\n\nMaraquoi excel as scouts, rangers, and environmental specialists. Their multiple means of perception make them difficult to surprise, while their climbing abilities and tail dexterity give them advantages in many situations. Many maraquoi serve as guides, trackers, or wilderness experts, and their natural wisdom makes them thoughtful advisors and spiritual leaders.",
    source: "Pact Worlds",
    alternateTraits: [
      { id: 'maraquoi_canopy_runner', name: 'Canopy Runner', description: '+4 to Acrobatics to balance. Replaces Blindsense.', replaces: 'Blindsense' },
      { id: 'maraquoi_tree_tender', name: 'Tree Tender', description: '+2 to Life Science checks involving plants. Replaces Low-Light Vision.', replaces: 'Low-Light Vision' }
    ]
  },
  {
    id: "nuar",
    name: "Nuar",
    description: "Minotaur-like beings with a strong mercantile culture and natural horns.",
    abilityMods: { strength: 2, charisma: 2, intelligence: -2 },
    hp: 6,
    size: "Medium",
    speed: 40,
    traits: ["Fierce", "Maze Mind", "Natural Weapons", "Swift"],
    traitDescriptions: {
      "Fierce": "Nuars gain a +2 racial bonus to Intimidate checks.",
      "Maze Mind": "Nuars have an innate ability to navigate complex environments. They receive a +2 racial bonus to Survival checks to avoid getting lost and to navigate. In addition, they are immune to maze spells.",
      "Natural Weapons": "Nuars have gore attacks that function as unarmed strikes dealing 1d6 piercing damage (or 1d8 for Large nuars). They gain a unique weapon specialization with their natural weapons at 3rd level, allowing them to add 1-1/2 × their character level to damage rolls.",
      "Swift": "Nuars have a base speed of 40 feet."
    },
    lore: "Nuars are powerful minotaur-like humanoids from the planet Absalom Station. They combine impressive physical strength with sharp business acumen and natural navigational abilities. With their distinctive horns and imposing presence, nuars command respect wherever they go, though they are just as likely to be found in corporate boardrooms as on battlefields.\n\nNuar culture places high value on personal honor, business success, and family loyalty. They are natural traders and negotiators who have built a reputation for being tough but fair in their dealings. Nuars maintain extensive family business networks throughout the Pact Worlds, and clan connections often open doors that would otherwise remain closed.\n\nNuars excel as merchants, bodyguards, and negotiators. Their combination of physical prowess and social skills makes them versatile, while their natural navigation abilities make them valuable explorers and scouts. Many nuars work in import/export businesses, security firms, or as independent traders plying the spaceways.",
    source: "Pact Worlds",
    alternateTraits: [
      { id: 'nuar_business_savvy', name: 'Business Savvy', description: '+2 to Profession checks for business. Replaces Fierce.', replaces: 'Fierce' },
      { id: 'nuar_tactical_awareness', name: 'Tactical Awareness', description: '+2 to initiative. Replaces Maze Mind.', replaces: 'Maze Mind' }
    ]
  },
  {
    id: "pahtra",
    name: "Pahtra",
    description: "Feline humanoids with natural grace and predatory instincts.",
    abilityMods: { dexterity: 2, charisma: 2, intelligence: -2 },
    hp: 4,
    size: "Medium",
    speed: 40,
    traits: ["Climber", "Darkvision", "Natural Weapons", "Nimble"],
    traitDescriptions: {
      "Climber": "Pahtras have a climb speed of 20 feet.",
      "Darkvision": "Pahtras can see up to 60 feet in the dark.",
      "Natural Weapons": "Pahtras have retractable claws that deal 1d3 slashing damage. These are considered natural weapons and the attack doesn't count as archaic. Pahtras gain a unique weapon specialization with their natural weapons at 3rd level.",
      "Nimble": "Pahtras receive a +2 racial bonus to Acrobatics and Stealth checks."
    },
    lore: "Pahtras are feline humanoids from the dense forests of Vesk-6. They combine the grace and predatory instincts of great cats with humanoid intelligence and manual dexterity. Their retractable claws, excellent vision, and natural climbing abilities make them superb hunters and warriors.\n\nPahtra society was devastated by the vesk invasion of their homeworld. Many pahtras were enslaved or driven into hiding in the deepest forests. Despite this tragedy, pahtras have proven remarkably resilient, and their population has begun to recover. Pahtra culture emphasizes independence, stealth, and the importance of family bonds, with many organizing into pride-like groups for mutual support.\n\nPahtras excel as scouts, operatives, and hunters. Their natural stealth and climbing abilities make them exceptional infiltrators, while their predatory instincts serve them well in combat. Many pahtras work as scouts for exploration teams, intelligence agents, or as independent operators in less-than-legal enterprises.",
    source: "Pact Worlds",
    alternateTraits: [
      { id: 'pahtra_scrounger', name: 'Scrounger', description: '+2 to Perception and Survival to find food. Replaces Nimble.', replaces: 'Nimble' },
      { id: 'pahtra_silent_stalker', name: 'Silent Stalker', description: '+4 to Stealth in natural environments. Replaces Darkvision.', replaces: 'Darkvision' }
    ]
  },
  {
    id: "ryphorian",
    name: "Ryphorian",
    description: "Humanoids from a world with extreme seasonal changes who adapt to temperature.",
    abilityMods: { any: 2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Cold Resistance", "Fire Resistance", "Low-Light Vision", "Trimorphic"],
    traitDescriptions: {
      "Cold Resistance": "Ryphorians have cold resistance 5, which stacks with one other source of cold resistance.",
      "Fire Resistance": "Ryphorians have fire resistance 5, which stacks with one other source of fire resistance.",
      "Low-Light Vision": "Ryphorians can see in dim light as if it were normal light.",
      "Trimorphic": "Ryphorians have three different subspecies based on the season: winterborn (cold-adapted, +2 Con, +2 Str, -2 Cha), summerborn (heat-adapted, +2 Cha, +2 Wis, -2 Str), and transitional (balanced, +2 to any ability score). Each ryphorian has one of these forms, chosen at character creation."
    },
    lore: "Ryphorians are humanoids from Triaxus, a world with extreme 317-year-long seasons that swing between scorching summers and freezing winters. This unique environment has driven the evolution of three distinct ryphorian subspecies: the hardy winterborn who thrive in cold, the charismatic summerborn who flourish in heat, and the rare transitional ryphorians who can adapt to moderate climates.\n\nRyphorian society is shaped by their world's extreme seasonal cycles. Cities must be built to withstand both extreme heat and cold, and entire civilizations rise and fall with the centuries-long seasons. Ryphorians have developed advanced technology and magic to help them survive these changes, and they've become experts at long-term planning and adaptation.\n\nRyphorians excel as survivors, planners, and mediators between temperature extremes (both literal and figurative). Their resistance to both cold and fire makes them valuable in hazardous environments. Many ryphorians work as environmental engineers, long-term strategic planners, or explorers who can operate in extreme conditions that would challenge other species.",
    source: "Pact Worlds",
    subraces: [
      { name: "Winterborn", abilityMods: { constitution: 2, strength: 2, charisma: -2 }, description: "Hardy and strong, adapted to extreme cold" },
      { name: "Summerborn", abilityMods: { charisma: 2, wisdom: 2, strength: -2 }, description: "Charismatic and perceptive, adapted to extreme heat" },
      { name: "Transitional", abilityMods: { any: 2 }, description: "Balanced and adaptable, suited to moderate climates" }
    ],
    alternateTraits: [
      { id: 'ryphorian_fervent', name: 'Fervent', description: '+2 to saves vs environmental effects. Replaces Cold/Fire Resistance.', replaces: ['Cold Resistance', 'Fire Resistance'] },
      { id: 'ryphorian_traditional_enemies', name: 'Traditional Enemies', description: '+1 to attacks vs magical beasts. Replaces Low-Light Vision.', replaces: 'Low-Light Vision' }
    ]
  },
  {
    id: "brenneri",
    name: "Brenneri",
    description: "Otter-like aquatic beings with boundless curiosity and dexterity.",
    abilityMods: { charisma: 2, dexterity: 2, strength: -2 },
    hp: 2,
    size: "Small",
    speed: 20,
    traits: ["Curious", "Hold Breath", "Nimble", "Swimmer"],
    traitDescriptions: {
      "Curious": "Brenneri receive a +2 racial bonus to Culture checks.",
      "Hold Breath": "A brenneri can hold their breath for 10 times the normal duration.",
      "Nimble": "Brenneri receive a +2 racial bonus to Acrobatics and Stealth checks.",
      "Swimmer": "Brenneri have a swim speed of 20 feet."
    },
    lore: "Brenneris are otter-like humanoids from the aquatic world of Varturan. Small, sleek, and perpetually cheerful, they are among the most sociable and curious species in the galaxy. Brenneris love to tinker, explore, and learn about new things, approaching life with infectious enthusiasm and playful energy.\n\nBrenneri society is organized around extended family groups that live in floating cities and underwater habitats. They value cooperation, craftsmanship, and the pursuit of knowledge. Brenneris are natural makers who love to build, repair, and improve things with their dexterous paws. Their culture encourages exploration and values those who bring back new knowledge and experiences to share with the community.\n\nBrenneris excel as engineers, scientists, and explorers. Their aquatic nature and small size allow them to access areas others cannot, while their curiosity drives them to investigate everything. Many brenneris work on starships as technical crew, in research facilities, or as independent inventors and tinkerers.",
    source: "Alien Archive 2",
    alternateTraits: [
      { id: 'brenneri_amphibious', name: 'Amphibious', description: 'Can breathe underwater. Replaces Hold Breath.', replaces: 'Hold Breath' },
      { id: 'brenneri_scrounger', name: 'Scrounger', description: '+2 to Survival to find supplies. Replaces Curious.', replaces: 'Curious' }
    ]
  },
  {
    id: "barathu",
    name: "Barathu",
    description: "Gaseous, amorphous beings who float through the atmosphere of Bretheda.",
    abilityMods: { constitution: 2, wisdom: 2, dexterity: -2 },
    hp: 6,
    size: "Medium",
    speed: 0,
    traits: ["Adaptation", "Early Stage", "Flight", "Limited Telepathy"],
    traitDescriptions: {
      "Adaptation": "A barathu's body is extremely mutable and can adapt to respond to virtually any situation. Once every 1d4 rounds as a swift action, a barathu can reshape their body and adjust their chemistry to gain one of the following qualities. The adaptation lasts until the beginning of the barathu's next turn: flight 30 ft. (Ex) with average maneuverability, blindsight (life) 60 ft. (Ex), cold or fire resistance 5, or a swim speed of 30 feet.",
      "Early Stage": "A barathu is considered a young creature and gains a +2 bonus to Will saves.",
      "Flight": "Barathus have an extraordinary fly speed of 30 feet with average maneuverability.",
      "Limited Telepathy": "Barathus can communicate telepathically with any creatures within 30 feet with whom they share a language."
    },
    lore: "Barathus are amorphous, gas-filled beings who float through the dense atmosphere of the gas giant Bretheda. They are one of the most alien species in the Pact Worlds, lacking any fixed form and communicating primarily through telepathy. Barathus are actually collective entities composed of multiple organisms working together as one consciousness.\n\nBarathu society is utterly unlike that of most humanoid species. They reproduce through philosophy—when barathus with significantly different worldviews merge, they sometimes produce a new barathu offspring representing a synthesis of their ideas. They organize around philosophical schools rather than nations or families, and spend much of their time in deep contemplation.\n\nBarathus excel as philosophers, scientists, and mystics. Their amorphous nature and adaptation abilities make them incredibly versatile, while their telepathic communication gives them unique insights into other minds. Many barathus serve as advisors, researchers, or spiritual guides, offering perspectives that solid-form beings simply cannot match.",
    source: "Alien Archive 2",
    alternateTraits: [
      { id: 'barathu_atmospheric_alteration', name: 'Atmospheric Alteration', description: 'Can survive in thin or thick atmospheres. Replaces Early Stage.', replaces: 'Early Stage' },
      { id: 'barathu_merger', name: 'Merger', description: "Once per day gain insight bonus to skill check equal to ally's ranks. Replaces Adaptation.", replaces: 'Adaptation' }
    ]
  },
  {
    id: "embri",
    name: "Embri",
    description: "Gaunt, pale beings who consume emotions and can suppress their own.",
    abilityMods: { dexterity: 2, charisma: 2, constitution: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Cold Inured", "Emotionally Aware", "Limited Telepathy", "Snuff"],
    traitDescriptions: {
      "Cold Inured": "Embri treat severe cold as cold and extreme cold as severe cold (Starfinder Core Rulebook 400). They gain cold resistance 5.",
      "Emotionally Aware": "Embri gain a +2 racial bonus to Sense Motive checks, and Sense Motive is a class skill for them.",
      "Limited Telepathy": "Embri can communicate telepathically with any creatures within 30 feet with whom they share a language.",
      "Snuff": "As a standard action, an embri can quell strong emotions in a living creature they touch. The target must succeed at a Will saving throw (DC = 10 + half the embri's level + the embri's Charisma modifier) or be unable to use morale bonuses, nor can it use or be affected by emotion effects for 1d4 rounds. Once an embri uses this ability, they can't use it again until they've rested for 10 minutes to regain Stamina Points."
    },
    lore: "Embris are gaunt, pale humanoids from the frozen moon of Loeselle orbiting Aballon. They possess the unusual ability to consume and suppress emotions, feeding on the emotional energy of others while remaining eerily detached themselves. This makes them deeply unsettling to many species, though embris see their emotional consumption as a natural and necessary part of existence.\n\nEmbri society is cold and calculating, organized around strict hierarchies where status is determined by one's ability to manipulate and control emotional energy. They live in vast crystalline cities beneath Loeselle's icy surface, where they cultivate other species like livestock, feeding on their emotional output. Despite this disturbing practice, not all embris participate, and some have left their homeworld seeking different ways to live.\n\nEmbris excel as negotiators, interrogators, and intelligence agents. Their ability to sense and suppress emotions gives them significant advantages in social situations and makes them resistant to emotional manipulation. Some embris work as counselors or mediators, using their unique perspective to help others manage difficult emotions.",
    source: "Alien Archive 2",
    alternateTraits: [
      { id: 'embri_deaf', name: 'Deaf', description: 'Immune to sonic effects, +4 vs language-dependent. Replaces Emotionally Aware.', replaces: 'Emotionally Aware' },
      { id: 'embri_emotional_amplification', name: 'Emotional Amplification', description: 'Enhance emotion effects you cast. Replaces Snuff.', replaces: 'Snuff' }
    ]
  },
  {
    id: "ghoran",
    name: "Ghoran",
    description: "Plant-like humanoids created by a long-dead druid, seeking their place in the universe.",
    abilityMods: { constitution: 2, any: 2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Delicious", "Limited Plant Benefits", "Photosynthesis"],
    traitDescriptions: {
      "Delicious": "Ghorans take a -2 penalty to attack rolls and Armor Class against swarm attacks made by vermin and a -2 penalty to saving throws against exceptional abilities from vermin.",
      "Limited Plant Benefits": "Despite being plant creatures, ghorans don't have the standard immunities and resistances associated with that type. Instead, they gain a +2 racial bonus to saving throws against mind-affecting effects, paralysis, poison, polymorph, sleep, and stunning effects, unless the effect specifies that it's effective against plants.",
      "Photosynthesis": "Ghorans can undergo photosynthesis to gain nutrition instead of eating (although most choose to eat). A ghoran can go without light for 3 days, after which they must expose themselves to at least 1 hour of light within the next 20 hours to avoid starvation."
    },
    lore: "Ghorans are sapient plant creatures created thousands of years ago by a powerful druid as an experiment in creating plant-based life. When their creator died, the ghorans were left to fend for themselves. They have since spread throughout the galaxy, forming their own society and culture while seeking to understand their purpose and place in the universe.\n\nGhoran society is contemplative and philosophical. They reproduce through seed pods that contain genetic memory of previous generations, making each ghoran a unique blend of inherited memories and new experiences. This gives them a profound connection to their ancestors and a complex relationship with concepts of identity and continuity. Ghorans value growth (both literal and metaphorical), knowledge, and the preservation of their species' accumulated wisdom.\n\nGhorans excel as scientists, philosophers, and agricultural specialists. Their plant nature gives them unique insights into botany and ecology, while their photosynthetic abilities make them self-sufficient in many environments. Many ghorans work as botanists, environmental engineers, or in any role that requires patience and careful consideration.",
    source: "Alien Archive 2",
    alternateTraits: [
      { id: 'ghoran_hardy', name: 'Hardy', description: '+2 to Fortitude saves. Replaces Delicious.', replaces: 'Delicious' },
      { id: 'ghoran_naturally_armed', name: 'Naturally Armed', description: 'Natural weapons (1d3 S). Replaces Photosynthesis.', replaces: 'Photosynthesis' }
    ]
  },
  {
    id: "vlaka",
    name: "Vlaka",
    description: "Wolf-like beings with a strong pack mentality and keen senses.",
    abilityMods: { constitution: 2, wisdom: 2, intelligence: -2 },
    hp: 6,
    size: "Medium",
    speed: 40,
    traits: ["Buoy", "Cold Resistance", "Low-Light Vision", "Pack Hunter"],
    traitDescriptions: {
      "Buoy": "Vlakas receive a +4 racial bonus to Athletics checks to swim.",
      "Cold Resistance": "Vlakas have cold resistance 5.",
      "Low-Light Vision": "Vlakas can see in dim light as if it were normal light.",
      "Pack Hunter": "When a vlaka is flanking with an ally, they gain a +2 circumstance bonus to melee attack rolls instead of +2."
    },
    lore: "Vlakas are wolf-like humanoids from the frozen tundras of their homeworld. They combine lupine instincts with sapient intelligence, creating a unique culture centered on pack loyalty and cooperative hunting. Vlakas have thick fur, sharp teeth, and keen senses that make them excellent trackers and hunters.\n\nVlaka society is organized around packs—extended family groups that function as close-knit communities. Pack loyalty is absolute, and vlakas will go to extraordinary lengths to protect their pack members. They value cooperation, tactical coordination, and the wisdom of their pack elders. Vlakas communicate using a combination of spoken language and subtle body language that other species often miss.\n\nVlakas excel as soldiers, scouts, and team coordinators. Their pack hunter instincts make them exceptional at coordinated combat, while their keen senses and cold adaptation suit them for harsh environments. Many vlakas serve in military units where their pack tactics and loyalty make them formidable warriors.",
    source: "Alien Archive 2",
    alternateTraits: [
      { id: 'vlaka_keen_senses', name: 'Keen Senses', description: '+2 to Perception checks. Replaces Buoy.', replaces: 'Buoy' },
      { id: 'vlaka_survivor', name: 'Survivor', description: '+2 to Survival checks. Replaces Pack Hunter.', replaces: 'Pack Hunter' }
    ]
  },
  {
    id: "haan",
    name: "Haan",
    description: "Floating jellyfish-like beings with electrical abilities and graceful flight.",
    abilityMods: { charisma: 2, any: 2 },
    hp: 4,
    size: "Large",
    speed: 30,
    traits: ["Firespray", "Low-Light Vision", "Slow Fall", "Stalwart"],
    traitDescriptions: {
      "Firespray": "Once per day as a standard action, a haan can spray a 30-foot cone of combustible gas that ignites upon contact with air, dealing 1d6 fire damage per character level. Affected creatures can attempt a Reflex save (DC = 10 + half the haan's level + their Constitution modifier) to take only half damage.",
      "Low-Light Vision": "Haans can see in dim light as if it were normal light.",
      "Slow Fall": "A haan can use their gas-filled body to slow falls. They take damage from the first 20 feet they fall only if the fall was intentional. If a haan takes damage from a fall, they take half damage from that fall.",
      "Stalwart": "Haans can survive in vacuum and don't breathe. They gain a +2 racial bonus to Physical Science checks."
    },
    lore: "Haans are graceful, jellyfish-like beings from Bretheda's upper atmosphere. They float through gas giant skies, propelled by internal gas bladders, trailing long tentacles below their bell-shaped bodies. Haans are peaceful philosophers and artists who have developed a sophisticated culture despite their gas giant environment.\n\nHaan society is organized around floating cities that drift through Bretheda's clouds. They are contemplative beings who value art, philosophy, and aesthetic beauty. Haans communicate through bioluminescent displays and subtle chemical signals in addition to telepathy, creating a rich and nuanced form of expression that other species find mesmerizing.\n\nHaans excel as artists, scientists, and diplomats. Their unique perspective from living in a three-dimensional environment and their graceful movement make them excellent pilots and navigators. Many haans work as cultural ambassadors, showing other species the beauty of their artistic traditions.",
    source: "Alien Archive 2",
    alternateTraits: [
      { id: 'haan_bioluminescence', name: 'Bioluminescence', description: 'Shed light in 20 ft radius. Replaces Firespray.', replaces: 'Firespray' },
      { id: 'haan_tentacles', name: 'Tentacles', description: 'Increased reach with tentacles. Replaces Stalwart.', replaces: 'Stalwart' }
    ]
  },
  {
    id: "kalo",
    name: "Kalo",
    description: "Aquatic manta ray-like beings from the ocean world of Kalo-Mahoi.",
    abilityMods: { dexterity: 2, wisdom: 2, constitution: -2 },
    hp: 2,
    size: "Medium",
    speed: 20,
    traits: ["Kalo Drift", "Kalo Vision", "Kalo Movement", "Stealthy Swimmer"],
    traitDescriptions: {
      "Kalo Drift": "When a kalo swims, they can move up, down, or laterally at their full swim speed without needing to attempt Athletics checks to swim.",
      "Kalo Vision": "Kalos have darkvision with a range of 60 feet and low-light vision, but only in water. In air, a kalo can see only 30 feet, and everything beyond that distance has concealment.",
      "Kalo Movement": "Kalos have a land speed of 20 feet and a swim speed of 50 feet.",
      "Stealthy Swimmer": "Kalos gain a +4 racial bonus to Stealth checks while in water. They gain a +2 racial bonus to Stealth checks in all other environments."
    },
    lore: "Kalos are graceful manta ray-like beings from Kalo-Mahoi, an oceanic world orbiting a red dwarf star. They glide through water with ethereal beauty, their wide wing-like fins propelling them through the depths with incredible speed and agility. Kalos are adapted for deep-sea life and struggle somewhat in air and on land.\n\nKalo society is organized around matriarchal city-states built in the ocean depths. They are artistic and spiritual beings who value grace, stealth, and harmony with the ocean. Kalos communicate through a combination of bioluminescent displays and subtle pressure waves in the water, creating a beautiful language that is difficult for air-breathers to perceive or understand.\n\nKalos excel as scouts, operatives, and aquatic specialists. Their incredible stealth in water and enhanced vision in aquatic environments make them superb infiltrators and reconnaissance specialists. Many kalos work as underwater guides, deep-sea explorers, or as stealth operatives for organizations that value subtlety and grace.",
    source: "Alien Archive 2",
    alternateTraits: [
      { id: 'kalo_bioluminescence', name: 'Bioluminescence', description: 'Create light patterns in water. Replaces Stealthy Swimmer.', replaces: 'Stealthy Swimmer' },
      { id: 'kalo_hardened', name: 'Hardened', description: '+1 to AC in water. Replaces Kalo Drift.', replaces: 'Kalo Drift' }
    ]
  },
  {
    id: "formian",
    name: "Formian",
    description: "Ant-like beings with a rigid caste system and hive mind tendencies.",
    abilityMods: { strength: 2, wisdom: 2, charisma: -2 },
    hp: 4,
    size: "Medium",
    speed: 40,
    traits: ["Armor Savant", "Blindsense", "Limited Telepathy", "Natural Weapons"],
    traitDescriptions: {
      "Armor Savant": "When wearing armor, formians gain a +1 racial bonus to AC. When wearing heavy armor, their armor check penalty is 1 less severe than normal.",
      "Blindsense": "Formians have blindsense (scent) with a range of 30 feet.",
      "Limited Telepathy": "Formians can communicate telepathically with any creatures within 30 feet with whom they share a language.",
      "Natural Weapons": "Formians are always considered armed. They can deal 1d3 lethal damage with unarmed strikes and the attack doesn't count as archaic. Formians gain a unique weapon specialization with their natural weapons at 3rd level."
    },
    lore: "Formians are insectoid humanoids organized into rigid caste-based hives. They combine ant-like biology with sophisticated intelligence and psychic abilities. Each formian is born into a specific caste that determines their role in society, physical characteristics, and life path. While formian workers have become more independent in recent centuries, the species still maintains strong collective tendencies.\n\nFormian society revolves around the hive and the queen who rules it. They value order, efficiency, and the good of the collective over individual desires. However, formian workers who leave their hives to explore the wider galaxy often develop more independent thinking, though they still feel a pull toward hierarchy and organization.\n\nFormians excel as soldiers, workers, and coordinators. Their natural armor savvy makes them effective combatants, while their telepathy and collective mindset make them excellent team players. Many formians work in military organizations, large corporations, or anywhere their orderly nature and coordination can be put to good use.",
    source: "Alien Archive 3",
    alternateTraits: [
      { id: 'formian_hive_defender', name: 'Hive Defender', description: '+2 to saves vs mind-affecting when defending hive/allies. Replaces Limited Telepathy.', replaces: 'Limited Telepathy' },
      { id: 'formian_sure_footed', name: 'Sure-Footed', description: '+2 to Acrobatics to balance and Athletics to climb. Replaces Armor Savant.', replaces: 'Armor Savant' }
    ]
  },
  {
    id: "strix",
    name: "Strix",
    description: "Winged humanoids with a dark history and natural flight.",
    abilityMods: { dexterity: 2, any: 2 },
    hp: 6,
    size: "Medium",
    speed: 30,
    traits: ["Darkvision", "Nightborn", "Suspicious", "Winged"],
    traitDescriptions: {
      "Darkvision": "Strix can see up to 60 feet in the dark.",
      "Nightborn": "Strix gain a +2 racial bonus to Perception and Stealth checks in dim light or darkness.",
      "Suspicious": "Due to their history of persecution, strix receive a +2 racial bonus to Sense Motive checks, but they take a -2 penalty to Diplomacy checks.",
      "Winged": "Strix have extraordinary flight with a speed of 30 feet and average maneuverability. They cannot fly in heavy armor or when heavily encumbered."
    },
    lore: "Strix are dark-winged humanoids with a tragic history of conflict and persecution. Resembling humans with black feathered wings and pale skin, strix hail from worlds where they were hunted and feared by other races. This history has made them suspicious and wary, though they are fiercely loyal to those who earn their trust.\n\nStrix society is insular and protective. They typically live in isolated communities, maintaining distance from other species while carefully watching for threats. Strix culture values vigilance, remembrance of past wrongs, and the protection of their own. Despite their wariness, strix are capable of deep loyalty and friendship with those who prove themselves trustworthy.\n\nStrix excel as scouts, sentries, and night operatives. Their flight and darkvision make them effective reconnaissance specialists, while their suspicious nature helps them detect deception and ambushes. Many strix work in security, intelligence gathering, or as independent operators who value their freedom and solitude.",
    source: "Alien Archive 3",
    alternateTraits: [
      { id: 'strix_dayguard', name: 'Dayguard', description: 'Low-light vision, no Nightborn bonus. Replaces Nightborn and Suspicious.', replaces: ['Nightborn', 'Suspicious'] },
      { id: 'strix_frightening', name: 'Frightening', description: '+2 to Intimidate. Replaces Suspicious.', replaces: 'Suspicious' }
    ]
  },
  {
    id: "bolida",
    name: "Bolida",
    description: "Armadillo-like beings who can curl into an armored ball.",
    abilityMods: { constitution: 2, any: 2 },
    hp: 6,
    size: "Medium",
    speed: 30,
    traits: ["Armor Savant", "Cold Resistance", "Rolling Charge", "Slow"],
    traitDescriptions: {
      "Armor Savant": "When wearing armor, bolidas gain a +1 racial bonus to AC. When wearing heavy armor, their armor check penalty is 1 less severe than normal.",
      "Cold Resistance": "Bolidas have cold resistance 5.",
      "Rolling Charge": "A bolida can curl into a ball as a move action or a swift action, gaining +2 racial bonus to AC but becoming unable to take any other move or standard actions. While curled up, a bolida can charge. When they do, they don't need to move in a straight line and can change direction once during the movement as long as their total movement doesn't exceed double their speed. The bolida can uncurl as a swift action.",
      "Slow": "Bolidas have a base speed of 30 feet."
    },
    lore: "Bolidas are armadillo-like humanoids with thick armored shells covering their backs and the ability to curl into a protective ball. Native to harsh tundra worlds, bolidas have evolved incredible defensive capabilities and a unique rolling charge attack that allows them to smash through enemy lines.\n\nBolida society values endurance, protection, and communal defense. They build heavily fortified settlements and take pride in their ability to withstand any assault. Bolidas are patient and methodical, preferring to outlast their enemies rather than rushing into conflict. Their culture emphasizes defensive tactics, long-term planning, and the importance of protecting one's community.\n\nBolidas excel as defenders, soldiers, and siege specialists. Their natural armor and defensive abilities make them incredibly durable combatants, while their rolling charge gives them surprising offensive capabilities. Many bolidas work as bodyguards, defensive coordinators, or in roles where resilience and protection are valued.",
    source: "Alien Archive 3",
    alternateTraits: [
      { id: 'bolida_powerful_charge', name: 'Powerful Charge', description: 'Deal extra damage when charging. Replaces Cold Resistance.', replaces: 'Cold Resistance' },
      { id: 'bolida_armored', name: 'Armored', description: '+1 natural armor, replaces Armor Savant benefits. Replaces Armor Savant.', replaces: 'Armor Savant' }
    ]
  },
  {
    id: "damai",
    name: "Damai",
    description: "Ursine philosophers who seek enlightenment through meditation.",
    abilityMods: { wisdom: 2, any: 2 },
    hp: 6,
    size: "Medium",
    speed: 30,
    traits: ["Blindsense", "Curious", "Limited Telepathy", "Scrappy"],
    traitDescriptions: {
      "Blindsense": "Damais have blindsense (scent) with a range of 30 feet.",
      "Curious": "Damais receive a +2 racial bonus to Culture checks.",
      "Limited Telepathy": "Damais can communicate telepathically with any creatures within 30 feet with whom they share a language.",
      "Scrappy": "Damais receive a +2 racial bonus to Athletics checks."
    },
    lore: "Damais are bear-like humanoids who combine ursine strength with deep philosophical wisdom. They are contemplative beings who seek enlightenment through meditation, study, and the exploration of consciousness. Despite their formidable physical presence, damais are gentle and thoughtful, preferring peaceful solutions to violence.\n\nDamai society is organized around monastic communities and philosophical schools. They value wisdom, introspection, and the pursuit of spiritual understanding. Damais spend much of their time in meditation and study, seeking to understand the nature of existence and their place in the universe. Their culture emphasizes compassion, mindfulness, and the importance of balance between physical and mental development.\n\nDamais excel as mystics, philosophers, and mediators. Their combination of physical strength and spiritual wisdom makes them well-rounded individuals. Many damais work as counselors, spiritual advisors, or in roles where their calm demeanor and insight can help others find peace and understanding.",
    source: "Alien Archive 3",
    alternateTraits: [
      { id: 'damai_climber', name: 'Climber', description: 'Climb speed 20 ft. Replaces Blindsense.', replaces: 'Blindsense' },
      { id: 'damai_spiritual', name: 'Spiritual', description: '+2 to Mysticism checks. Replaces Curious.', replaces: 'Curious' }
    ]
  },
  {
    id: "draelik",
    name: "Draelik",
    description: "Shadow-infused beings from the Shadow Plane with light sensitivity.",
    abilityMods: { constitution: 2, wisdom: 2, charisma: -2 },
    hp: 6,
    size: "Medium",
    speed: 30,
    traits: ["Darkvision", "Light Blindness", "Manifestation", "Draelik Immunities"],
    traitDescriptions: {
      "Darkvision": "Draeliks can see up to 60 feet in the dark.",
      "Light Blindness": "Draeliks suffer from light blindness.",
      "Manifestation": "Draeliks' connection to the Shadow Plane allows them to manifest shadow abilities. They can cast dancing lights and ghost sound at will. The caster level is equal to the draelik's character level.",
      "Draelik Immunities": "Draeliks are immune to sleep effects and gain a +2 racial bonus to saving throws against emotion and fear effects."
    },
    lore: "Draeliks are humanoids infused with the essence of the Shadow Plane. Born with a connection to darkness and shadow, they struggle to exist in brightly lit environments. Their skin is ashen gray or black, and shadows seem to cling to them even in bright light. Draeliks walk a line between the material world and the plane of shadow.\n\nDraelik society is secretive and introspective. They often build communities in dark places—deep caverns, shadowed cities, or twilight regions of tidally locked worlds. Draeliks value privacy, self-reliance, and the mastery of shadow magic. Many are drawn to philosophical questions about the nature of light and darkness, both literal and metaphorical.\n\nDraeliks excel as scouts, infiltrators, and shadow specialists. Their darkvision and shadow abilities make them effective in environments where others struggle to see, though their light blindness can be a significant hindrance. Many draeliks work in roles that allow them to operate in darkness, such as deep-space operations or underground facilities.",
    source: "Alien Archive 3",
    alternateTraits: [
      { id: 'draelik_eerie', name: 'Eerie', description: '+2 to Intimidate. Replaces Draelik Immunities.', replaces: 'Draelik Immunities' },
      { id: 'draelik_shadow_shifter', name: 'Shadow Shifter', description: 'Dimension door through shadows 1/day. Replaces Manifestation.', replaces: 'Manifestation' }
    ]
  },
  {
    id: "stellifera",
    name: "Stellifera",
    description: "Crystalline starfish-like beings with radial symmetry and regenerative abilities.",
    abilityMods: { constitution: 2, any: 2 },
    hp: 6,
    size: "Medium",
    speed: 20,
    traits: ["Autotomy", "Hydraulic Movement", "Regeneration", "Stellar Sense"],
    traitDescriptions: {
      "Autotomy": "When a stellifera takes more than 10 HP damage from a single attack, they can detach a limb as a reaction to reduce the damage by half. The limb regrows over 24 hours.",
      "Hydraulic Movement": "Stelliferas use hydraulic pressure to move and have no real land speed. In zero gravity or water, they have a fly/swim speed of 30 feet with average maneuverability.",
      "Regeneration": "Stelliferas have regeneration 1, which can be suppressed by acid or fire damage for 1 round.",
      "Stellar Sense": "Stelliferas can sense electromagnetic radiation and have blindsight (electromagnetic) 60 feet, allowing them to perceive electronic devices and power sources."
    },
    lore: "Stelliferas are bizarre starfish-like creatures with crystalline bodies and radial symmetry. They move using hydraulic pressure rather than muscles, making them uniquely adapted to zero-gravity and aquatic environments. Their ability to regenerate lost limbs and sense electromagnetic radiation makes them truly alien compared to most humanoid species.\n\nStellifera society is communal and focused on the collective good. They value patience, resilience, and the sharing of experiences through their limited telepathy. Stelliferas have no concept of individuality as most species understand it—they see themselves as temporary configurations of universal matter and energy, destined to dissolve and reform endlessly.\n\nStelliferas excel in zero-gravity environments and aquatic operations. Their regeneration makes them incredibly durable, while their electromagnetic sense gives them unique abilities to detect technology. Many stelliferas work in space construction, underwater facilities, or as specialized scouts in environments where their unusual biology gives them advantages.",
    source: "Alien Archive 3",
    alternateTraits: [
      { id: 'stellifera_bioluminescence', name: 'Bioluminescence', description: 'Shed light like a torch. Replaces Stellar Sense.', replaces: 'Stellar Sense' },
      { id: 'stellifera_hardened', name: 'Hardened', description: '+1 natural armor. Replaces Autotomy.', replaces: 'Autotomy' }
    ]
  },
  {
    id: "dirindi",
    name: "Dirindi",
    description: "Telepathic beings with electric abilities who live in massive hive cities.",
    abilityMods: { wisdom: 2, charisma: 2, constitution: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Electrical Affinity", "Limited Telepathy", "Reactive Resistance", "Spark"],
    traitDescriptions: {
      "Electrical Affinity": "Dirindis gain a +2 racial bonus to saving throws against electricity effects and take no damage from non-lethal electricity damage.",
      "Limited Telepathy": "Dirindis can communicate telepathically with any creatures within 30 feet with whom they share a language.",
      "Reactive Resistance": "Once per day when a dirindi takes energy damage, they can as a reaction gain resistance 5 to that energy type (including the triggering attack) for 1 minute.",
      "Spark": "As a standard action, a dirindi can make a melee attack against EAC that deals 1d6 electricity damage. This increases by 1d6 at 6th, 12th, and 18th level."
    },
    lore: "Dirindis are slender humanoids with bald heads and an innate connection to electrical energy. They live in massive hive cities on their homeworld, organized into a complex society where telepathic communication creates a sense of collective consciousness while still maintaining individual identity. Dirindis can generate and manipulate electricity, using it for both practical purposes and defense.\n\nDirindi society is highly organized and technological. They build enormous vertical cities powered by bioelectricity, where millions live in harmonious cooperation. Dirindis value efficiency, clear communication, and the advancement of their collective understanding. Their telepathic abilities make deception nearly impossible within their communities, fostering a culture of honesty and direct communication.\n\nDirindis excel as technicians, telepaths, and coordinators. Their electrical abilities make them natural engineers and their telepathy makes them excellent communicators. Many dirindis work with electrical systems, power generation, or in roles requiring coordinated team communication.",
    source: "Alien Archive 3",
    alternateTraits: [
      { id: 'dirindi_electricity_resistance', name: 'Electricity Resistance', description: 'Electricity resistance 10. Replaces Spark.', replaces: 'Spark' },
      { id: 'dirindi_tech_savvy', name: 'Tech Savvy', description: '+2 to Computers and Engineering. Replaces Reactive Resistance.', replaces: 'Reactive Resistance' }
    ]
  },
  {
    id: "espraksa",
    name: "Espraksa",
    description: "Avian beings with gossamer wings and a culture focused on personal honor.",
    abilityMods: { dexterity: 2, any: 2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Darkvision", "Sniper", "Sprightly", "Winged"],
    source: "Alien Archive 3"
  },
  {
    id: "ferran",
    name: "Ferran",
    description: "Vulpine beings with keen senses and natural charm.",
    abilityMods: { dexterity: 2, charisma: 2, wisdom: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Curious", "Keen Senses", "Low-Light Vision", "Scrappy"],
    source: "Alien Archive 3"
  },
  {
    id: "gray",
    name: "Gray",
    description: "Mysterious psychic beings known for their large heads and abduction stories.",
    abilityMods: { intelligence: 2, any: 2 },
    hp: 3,
    size: "Small",
    speed: 30,
    traits: ["Darkvision", "Psychic", "Skill Focus", "Slight"],
    source: "Alien Archive 3"
  },
  {
    id: "ijtikri",
    name: "Ijtikri",
    description: "Four-armed beings from a desert world with natural resilience.",
    abilityMods: { strength: 2, wisdom: 2, charisma: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Desert Stride", "Four-Armed", "Hardy", "Historian"],
    source: "Interstellar Species"
  },
  {
    id: "izalguun",
    name: "Izalguun",
    description: "Winged beings with natural camouflage and predatory instincts.",
    abilityMods: { wisdom: 2, any: 2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Camouflage", "Low-Light Vision", "Natural Weapons", "Winged"],
    source: "Interstellar Species"
  },
  {
    id: "jububnan",
    name: "Jububnan",
    description: "Jovial tripedal beings who communicate through scents and pheromones.",
    abilityMods: { constitution: 2, wisdom: 2, strength: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Jububnan Movement", "Limited Telepathy", "Pheromone Reception", "Scent"],
    source: "Interstellar Species"
  },
  {
    id: "kiirinta",
    name: "Kiirinta",
    description: "Many-limbed beings with a talent for multitasking and cooperation.",
    abilityMods: { intelligence: 2, any: 2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Climber", "Cooperative", "Limited Blindsense", "Many-Limbed"],
    source: "Interstellar Species"
  },
  {
    id: "morlamaw",
    name: "Morlamaw",
    description: "Walrus-like beings from icy oceans with powerful tusks.",
    abilityMods: { strength: 2, wisdom: 2, dexterity: -2 },
    hp: 6,
    size: "Medium",
    speed: 20,
    traits: ["Aquatic Adaptation", "Cold Resistance", "Hold Breath", "Natural Weapons"],
    source: "Interstellar Species"
  },
  {
    id: "orocoran",
    name: "Orocoran",
    description: "Crystalline beings who can refract light and communicate through colors.",
    abilityMods: { intelligence: 2, charisma: 2, wisdom: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Chromatic Display", "Crystal Drinker", "Light Refraction", "Radiant"],
    source: "Interstellar Species"
  },
  {
    id: "quorlu",
    name: "Quorlu",
    description: "Crystalline beings from the Drift with natural resistance to radiation.",
    abilityMods: { constitution: 2, intelligence: 2, charisma: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Drift Phasing", "Multiarmed", "Radiation Resistance", "Quantum Sense"],
    source: "Interstellar Species"
  },
  {
    id: "ramiyel",
    name: "Ramiyel",
    description: "Winged beings from Elysium with celestial heritage and light-based abilities.",
    abilityMods: { wisdom: 2, charisma: 2, constitution: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Akashic Heir", "Birthright", "Soulfire", "Wings"],
    source: "Interstellar Species"
  },
  {
    id: "shimreen",
    name: "Shimreen",
    description: "Energy-infused crystalline beings from the Radiation Wastes.",
    abilityMods: { dexterity: 2, intelligence: 2, wisdom: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Amplify", "Electricity Resistance", "Radiant", "Shift Limb"],
    source: "Interstellar Species"
  },
  {
    id: "shobhad",
    name: "Shobhad",
    description: "Four-armed Akitonian warriors with a proud martial tradition.",
    abilityMods: { strength: 4, dexterity: -2 },
    hp: 6,
    size: "Large",
    speed: 40,
    traits: ["Cold Inured", "Ferocious Charge", "Four-Armed", "Shobhad Weapons"],
    source: "Interstellar Species"
  },
  {
    id: "telia",
    name: "Telia",
    description: "Fungal beings with regenerative abilities and spore-based reproduction.",
    abilityMods: { constitution: 2, wisdom: 2, dexterity: -2 },
    hp: 6,
    size: "Medium",
    speed: 25,
    traits: ["Limited Plant Benefits", "Regeneration", "Sightless", "Telian Senses"],
    source: "Interstellar Species"
  },
  {
    id: "varculak",
    name: "Varculak",
    description: "Wolflike beings from the First World with fey heritage and transformation.",
    abilityMods: { constitution: 2, wisdom: 2, intelligence: -2 },
    hp: 6,
    size: "Medium",
    speed: 30,
    traits: ["Change Shape", "Darkvision", "Pack Hunter", "Tracking"],
    source: "Interstellar Species"
  },
  {
    id: "witchwyrd",
    name: "Witchwyrd",
    description: "Four-armed mystic merchants with magical abilities and force manipulation.",
    abilityMods: { charisma: 2, any: 2 },
    hp: 6,
    size: "Medium",
    speed: 30,
    traits: ["Absorb Force", "Cast Spell", "Low-Light Vision", "Multiarmed Mastery"],
    source: "Interstellar Species"
  },
  {
    id: "hobgoblin",
    name: "Hobgoblin",
    description: "Militaristic beings with discipline and tactical prowess.",
    abilityMods: { constitution: 2, intelligence: 2, charisma: -2 },
    hp: 6,
    size: "Medium",
    speed: 30,
    traits: ["Battle Hardened", "Darkvision", "Fearsome", "Sneaky"],
    source: "Character Operations Manual"
  },
  {
    id: "goblin",
    name: "Goblin",
    description: "Small, scrappy beings with a love of fire and chaotic energy.",
    abilityMods: { dexterity: 4, charisma: -2 },
    hp: 2,
    size: "Small",
    speed: 35,
    traits: ["Darkvision", "Fast", "Junk Tinker", "Scrounger"],
    source: "Character Operations Manual"
  },
  {
    id: "hanakan",
    name: "Hanakan",
    description: "Stone-like beings from a heavy-gravity world with incredible durability.",
    abilityMods: { constitution: 2, any: 2 },
    hp: 6,
    size: "Medium",
    speed: 20,
    traits: ["Gravity Adjustment", "Hardy", "Slow", "Stable"],
    source: "Near Space"
  },
  {
    id: "ixtangi",
    name: "Ixtangi",
    description: "Centaur-like beings with incredible speed and nomadic traditions.",
    abilityMods: { dexterity: 2, wisdom: 2, intelligence: -2 },
    hp: 4,
    size: "Medium",
    speed: 40,
    traits: ["Fleet", "Low-Light Vision", "Natural Weapons", "Quadruped"],
    source: "Near Space"
  },
  {
    id: "psacynoid",
    name: "Psacynoid",
    description: "Crustacean-like beings with powerful claws and aquatic adaptation.",
    abilityMods: { strength: 2, wisdom: 2, charisma: -2 },
    hp: 6,
    size: "Medium",
    speed: 30,
    traits: ["Amphibious", "Darkvision", "Natural Weapons", "Water Breathing"],
    source: "Near Space"
  },
  {
    id: "raxilite",
    name: "Raxilite",
    description: "Crystalline beings from asteroid mines who absorb radiation.",
    abilityMods: { dexterity: 2, intelligence: 2, charisma: -2 },
    hp: 2,
    size: "Small",
    speed: 30,
    traits: ["Chemosynthesis", "Radiation Absorption", "Skill Focus", "Tunneler"],
    source: "Near Space"
  },
  {
    id: "skittermander_whelp",
    name: "Skittermander (Whelp)",
    description: "Young skittermanders with fewer arms but boundless energy.",
    abilityMods: { charisma: 2, any: 2 },
    hp: 2,
    size: "Small",
    speed: 35,
    traits: ["Hyper", "Low-Light Vision", "Six-Armed", "Grappler"],
    source: "Near Space"
  },
  {
    id: "worlanisi",
    name: "Worlanisi",
    description: "Peaceful reptilian traders with natural camouflage abilities.",
    abilityMods: { wisdom: 2, any: 2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Camouflage", "Convincing Liar", "Cultural Chameleon", "Worlanisi Gamble"],
    source: "Near Space"
  },
  {
    id: "endiffian",
    name: "Endiffian",
    description: "Wraith-like incorporeal beings from the Drift with phase abilities.",
    abilityMods: { dexterity: 2, charisma: 2, strength: -2 },
    hp: 2,
    size: "Medium",
    speed: 30,
    traits: ["Drift Phasing", "Phase", "Plantlike", "Slip Through"],
    source: "Alien Archive 4"
  },
  {
    id: "copaxi",
    name: "Copaxi",
    description: "Mantis-like beings with psionic abilities and hive communication.",
    abilityMods: { strength: 2, wisdom: 2, charisma: -2 },
    hp: 6,
    size: "Medium",
    speed: 30,
    traits: ["Limited Telepathy", "Natural Weapons", "Psionic Burst", "Vermin Empathy"],
    source: "Alien Archive 4"
  },
  {
    id: "dessamar",
    name: "Dessamar",
    description: "Three-part colony beings who work together as a unified consciousness.",
    abilityMods: { intelligence: 2, any: 2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Cooperative", "Dessamar Movement", "Skill Focus", "Swarm Form"],
    source: "Alien Archive 4"
  },
  {
    id: "dromada",
    name: "Dromada",
    description: "Camel-like beings adapted to desert life with endurance and resilience.",
    abilityMods: { constitution: 2, wisdom: 2, dexterity: -2 },
    hp: 6,
    size: "Medium",
    speed: 30,
    traits: ["Desert Stride", "Enduring Constitution", "Natural Weapons", "Spit"],
    source: "Alien Archive 4"
  },
  {
    id: "huitzplina",
    name: "Huitz'plina",
    description: "Reptilian beings from volcanic regions with heat resistance.",
    abilityMods: { strength: 2, any: 2 },
    hp: 6,
    size: "Medium",
    speed: 30,
    traits: ["Climber", "Fire Resistance", "Low-Light Vision", "Natural Weapons"],
    source: "Alien Archive 4"
  },
  {
    id: "planar_scion_aasimar",
    name: "Planar Scion (Aasimar)",
    description: "Beings touched by celestial powers with inner radiance.",
    abilityMods: { wisdom: 2, charisma: 2, constitution: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Celestial Resistance", "Darkvision", "Light Bearer", "Skilled"],
    source: "Character Operations Manual"
  },
  {
    id: "planar_scion_tiefling",
    name: "Planar Scion (Tiefling)",
    description: "Beings touched by fiendish powers with dark gifts.",
    abilityMods: { intelligence: 2, charisma: 2, wisdom: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Darkvision", "Fiendish Resistance", "Skilled", "Spell-Like Ability"],
    source: "Character Operations Manual"
  },
  {
    id: "planar_scion_ifrit",
    name: "Planar Scion (Ifrit)",
    description: "Beings touched by fire elementals with flame affinity.",
    abilityMods: { dexterity: 2, charisma: 2, wisdom: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Darkvision", "Fire Affinity", "Fire Resistance", "Spell-Like Ability"],
    source: "Character Operations Manual"
  },
  {
    id: "planar_scion_oread",
    name: "Planar Scion (Oread)",
    description: "Beings touched by earth elementals with stone-like resilience.",
    abilityMods: { strength: 2, wisdom: 2, charisma: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Darkvision", "Earth Affinity", "Spell-Like Ability", "Stonecunning"],
    source: "Character Operations Manual"
  },
  {
    id: "planar_scion_sylph",
    name: "Planar Scion (Sylph)",
    description: "Beings touched by air elementals with graceful movement.",
    abilityMods: { dexterity: 2, intelligence: 2, constitution: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Air Affinity", "Darkvision", "Spell-Like Ability", "Breeze Kissed"],
    source: "Character Operations Manual"
  },
  {
    id: "planar_scion_undine",
    name: "Planar Scion (Undine)",
    description: "Beings touched by water elementals with aquatic affinity.",
    abilityMods: { dexterity: 2, wisdom: 2, strength: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Darkvision", "Hydration", "Spell-Like Ability", "Water Affinity"],
    source: "Character Operations Manual"
  },
  {
    id: "shaalta",
    name: "Shaalta",
    description: "Shadow-dwelling beings with natural stealth and void resistance.",
    abilityMods: { dexterity: 2, wisdom: 2, constitution: -2 },
    hp: 2,
    size: "Small",
    speed: 30,
    traits: ["Darkvision", "Shadow Blend", "Shadow Resistance", "Skilled"],
    source: "Starfinder Enhanced"
  },
  {
    id: "spathinae",
    name: "Spathinae",
    description: "Wasp-like beings with flight and a warrior culture.",
    abilityMods: { dexterity: 2, wisdom: 2, strength: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Cooperative", "Natural Weapons", "Skilled", "Winged"],
    source: "Starfinder Enhanced"
  },
  {
    id: "bantrid",
    name: "Bantrid",
    description: "Furred beings with powerful leaps and hunter instincts.",
    abilityMods: { dexterity: 2, wisdom: 2, intelligence: -2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Athletic", "Low-Light Vision", "Natural Weapons", "Springy"],
    source: "Starfinder Enhanced"
  },
  {
    id: "onyx",
    name: "Onyx",
    description: "Geode-like crystal beings from the Elemental Plane of Earth.",
    abilityMods: { constitution: 2, any: 2 },
    hp: 6,
    size: "Medium",
    speed: 20,
    traits: ["Crystal Sense", "Crystalline", "Earthbound", "Geode Form"],
    source: "Galactic Magic"
  },
  {
    id: "selamid",
    name: "Selamid",
    description: "Eel-like beings with electrical abilities and aquatic mastery.",
    abilityMods: { dexterity: 2, charisma: 2, constitution: -2 },
    hp: 4,
    size: "Medium",
    speed: 20,
    traits: ["Amphibious", "Electrical Affinity", "Electrical Discharge", "Squirm"],
    source: "Galactic Magic"
  },
  {
    id: "reptoid",
    name: "Reptoid",
    description: "Shapeshifting reptilian infiltrators with psychic abilities.",
    abilityMods: { charisma: 2, any: 2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Change Shape", "Limited Telepathy", "Natural Weapons", "Reptoid Movement"],
    source: "AP"
  },
  {
    id: "tryziarka",
    name: "Tryziarka",
    description: "Icy beings who adapt their form based on their environment and experiences.",
    abilityMods: { constitution: 2, any: 2 },
    hp: 6,
    size: "Medium",
    speed: 30,
    traits: ["Cold Resistance", "Elegant Combatant", "Resistant", "Shapable"],
    source: "AP"
  },
  {
    id: "azlanti",
    name: "Azlanti (Human)",
    description: "Genetically perfected humans from the Azlanti Star Empire.",
    abilityMods: { any: 4 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Azlanti Superiority", "Pompous", "Skilled"],
    source: "AP #1"
  },
  {
    id: "osharu",
    name: "Osharu",
    description: "Slug-like beings with a philosophical nature and shell crafting.",
    abilityMods: { wisdom: 2, any: 2 },
    hp: 4,
    size: "Medium",
    speed: 25,
    traits: ["Brilliant", "Osharu Movement", "Shelter", "Slug"],
    source: "AP #5"
  },
  {
    id: "cephalume",
    name: "Cephalume",
    description: "Bioluminescent jellyfish-like beings with electrical abilities.",
    abilityMods: { charisma: 2, any: 2 },
    hp: 2,
    size: "Small",
    speed: 20,
    traits: ["Bioluminescence", "Dart", "Tentacles", "Void Adaptation"],
    source: "AP #7"
  },
  {
    id: "sazaron",
    name: "Sazaron",
    description: "Four-armed scholars with powerful psychic abilities.",
    abilityMods: { intelligence: 2, charisma: 2, strength: -2 },
    hp: 4,
    size: "Large",
    speed: 30,
    traits: ["四Armed", "Darkvision", "Historian", "Psychic Blast"],
    source: "AP #8"
  },
  {
    id: "espraska",
    name: "Espraska",
    description: "Winged beings from a crystalline moon with sonic abilities.",
    abilityMods: { dexterity: 2, any: 2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Low-Light Vision", "Natural Weapons", "Sonic Resistance", "Winged"],
    source: "AP #13"
  },
  {
    id: "astrazoan",
    name: "Astrazoan",
    description: "Starfish-like beings who can survive in the vacuum of space.",
    abilityMods: { constitution: 2, any: 2 },
    hp: 6,
    size: "Medium",
    speed: 20,
    traits: ["Darkvision", "Regeneration", "Void Adaptation", "Water Breathing"],
    source: "AP #17"
  },
  {
    id: "rageshkor",
    name: "Rageshkor",
    description: "Rhino-like beings with thick hides and a warrior culture.",
    abilityMods: { strength: 2, constitution: 2, dexterity: -2 },
    hp: 6,
    size: "Medium",
    speed: 35,
    traits: ["Armor Savant", "Charge Attack", "Natural Weapons", "Thick Hide"],
    source: "AP #19"
  },
  {
    id: "brenneri_sea",
    name: "Brenneri (Sea)",
    description: "Aquatic otters with enhanced swimming and tool use.",
    abilityMods: { dexterity: 2, wisdom: 2, strength: -2 },
    hp: 2,
    size: "Small",
    speed: 20,
    traits: ["Amphibious", "Hold Breath", "Limber", "Nimble"],
    source: "AP #25"
  },
  {
    id: "hortus",
    name: "Hortus",
    description: "Sentient plant beings who grow and cultivate other plants.",
    abilityMods: { wisdom: 2, any: 2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Limited Plant Benefits", "Multilimbed", "Photosynthesis", "Slightly Poisonous"],
    source: "AP #31"
  },
  {
    id: "weaponized_gamedroid",
    name: "Weaponized Gamedroid",
    description: "Modified gamedroids designed for combat with enhanced reflexes.",
    abilityMods: { dexterity: 2, any: 2 },
    hp: 4,
    size: "Medium",
    speed: 30,
    traits: ["Constructed", "Integrated Weapon", "Programmed", "Upgrade Slot"],
    source: "Module"
  },
  {
    id: "brakim",
    name: "Brakim",
    description: "Resilient invertebrate humanoids who can detach and reattach their limbs.",
    abilityMods: { dexterity: 2, constitution: 2, charisma: -2 },
    hp: 6,
    size: "Medium",
    speed: 30,
    traits: ["Jerry Rigger", "Malleable Limbs", "Wasteland Dweller"],
    traitDescriptions: {
      "Jerry Rigger": "Brakims have a +2 racial bonus to Engineering checks.",
      "Malleable Limbs": "Lacking an internal skeleton, a brakim can change her limbs easily. This adaptability grants a +4 racial bonus to Athletics checks to climb and to swim. If a brakim loses a limb or digit, it regrows in 1d4 hours. As a full action, a brakim can stretch limbs for reach/height, modify arms for quadrupedal movement (+10 ft. speed), modify legs as manipulators (up to 4 hands), or detach limbs (1 HP damage per limb).",
      "Wasteland Dweller": "Brakims are immune to low radiation. They gain a +2 racial bonus to Survival checks, to Fortitude saves against radiation and extreme weather, and to Constitution checks against starvation and thirst."
    },
    lore: "Brakims are adaptable, gangly invertebrate humanoids native to Bortan II, a post-apocalyptic wasteland left devastated by a planetwide war during the Gap. Standing 7-1/2 feet tall and weighing around 200 pounds, these resilient beings survive in nomadic scavenger tribes across blasted deserts and ruined cities.\n\nWhat sets brakims apart is their remarkable ability to modify and even detach their limbs. Without an internal skeleton, they can stretch their arms for additional reach, reconfigure their limbs for quadrupedal movement, or even use their legs as manipulators. Lost limbs regrow in hours, making them exceptionally adaptable survivors. This biological versatility, combined with centuries of scavenging ancient technology, makes them natural technicians.\n\nBrakims are practical and hands-on, favoring reliable technology over what they see as the chaotic unpredictability of magic. They're industrious and resourceful, but their harsh homeworld has left them brusque and distrustful of strangers. Some have left Bortan II to work as starship technicians, where their informal training and adaptable methods produce functional, if patchwork, results. Though slow to trust, brakims make loyal and capable companions once that trust is earned.",
    source: "AP #8"
  }
];

export const THEMES = [
  {
    id: "ace_pilot",
    name: "Ace Pilot",
    description: "You are most comfortable at the controls of a vehicle, whether it's a starship or ground vehicle.",
    abilityBoost: "dexterity",
    skills: ["Piloting"],
    themeKnowledge: "Reduce DC of Culture checks to recall knowledge about starship/vehicle models and famous pilots by 5. Piloting is a class skill (or +1 if already class skill).",
    level6: "Lone Wolf - Treat half your Piloting ranks as ranks in other starship skills during starship combat or maintenance.",
    level12: "Need For Speed - Reduce penalties to Piloting checks when on vehicle by 1. Take penalty for failing by 5+ only if you fail by 10+.",
    level18: "Master Pilot - Up to twice per day, recover 1 RP when you defeat significant enemy in starship combat or succeed in vehicle chase."
  },
  {
    id: "athlete",
    name: "Athlete",
    description: "You are a professional competitor and expert in physical finesse or brute strength.",
    abilityBoost: "any",
    abilityOptions: ["strength", "dexterity", "constitution"],
    skills: ["Athletics"],
    themeKnowledge: "Reduce DC of Culture or Profession (athlete) checks to recall knowledge about famous athletes and sporting events by 5. Athletics is a class skill (or +1 if already class skill).",
    level6: "Physical Prowess - Gain +1 bonus to Athletics checks to climb, jump, or swim.",
    level12: "Physically Fit - Increase your KAC and EAC by 1 against bull rush, grapple, reposition, and trip combat maneuvers.",
    level18: "Relentless - After combat in which you defeat significant enemy, recover 1 RP. After 6 such combats, recover a second RP."
  },
  {
    id: "battle_medic",
    name: "Battle Medic",
    description: "You've been trained to treat combat wounds on and off the battlefield.",
    abilityBoost: "intelligence",
    skills: ["Medicine"],
    themeKnowledge: "Reduce DC of Medicine checks to treat wounds or recall knowledge about medical procedures by 5. Medicine is a class skill (or +1 if already class skill).",
    level6: "Emergency Aid - You can use Medicine to treat deadly wounds on a creature that has been dead for no more than 1 round.",
    level12: "Field Surgeon - You can use Medical Lab to treat deadly wounds in half the normal time.",
    level18: "Combat Medic - Once per day when using Medicine to treat deadly wounds, add your level to HP restored."
  },
  {
    id: "beastblood",
    name: "Beastblood",
    description: "You have a powerful affinity with the beasts of the wild.",
    abilityBoost: "any",
    abilityOptions: ["intelligence", "wisdom"],
    skills: ["Survival"],
    themeKnowledge: "Reduce DC of Survival checks to live off the land or recall knowledge about animals by 5. Survival is a class skill (or +1 if already class skill).",
    level6: "Beast Empathy - You can use Survival instead of Diplomacy to change creature attitudes (animals only).",
    level12: "Animal Speaker - You can communicate simple concepts with animals.",
    level18: "Beast's Strength - Once per day after defeating significant beast/animal enemy, recover 1 RP."
  },
  {
    id: "biotechnician",
    name: "Biotechnician",
    description: "You are a biotech researcher or avid user of such tech.",
    abilityBoost: "intelligence",
    skills: ["Life Science"],
    themeKnowledge: "Reduce DC of Life Science checks to recall knowledge about biotech by 5. Life Science is a class skill (or +1 if already class skill).",
    level6: "Adaptive Biotech - Choose one biotech augmentation you have. You can use it one additional time per day.",
    level12: "Biotech Mastery - You take half the normal time to craft biotech items.",
    level18: "Experimental Augmentation - Once per day, recover 1 RP after using a biotech augmentation ability."
  },
  {
    id: "bouncer",
    name: "Bouncer",
    description: "You work security in vibrant nightlife and entertainment venues.",
    abilityBoost: "charisma",
    skills: ["Intimidate"],
    themeKnowledge: "Reduce DC of Culture or Intimidate checks to recall knowledge about nightlife or intimidate in social setting by 5. Intimidate is a class skill (or +1 if already class skill).",
    level6: "Imposing Presence - Intimidate checks to demoralize don't cause creatures to become unfriendly after 1 hour.",
    level12: "Bouncer's Eye - You can attempt Sense Motive checks to detect if someone is about to cause trouble.",
    level18: "Master Bouncer - Up to twice per day when defusing situation or ejecting troublemaker, recover 1 RP."
  },
  {
    id: "bounty_hunter",
    name: "Bounty Hunter",
    description: "You track people down for money. Almost nothing will stop you from catching your mark.",
    abilityBoost: "constitution",
    skills: ["Survival"],
    themeKnowledge: "Choose a mark. Reduce DC of Culture or Profession (bounty hunter) checks to recall knowledge about your mark and law enforcement by 5. Survival is a class skill (or +1 if already class skill). Change mark as 1-minute action after defeating it.",
    level6: "Swift Hunter - Use Diplomacy to gather information about mark in half normal time. Reduce penalty for tracking at full speed to 0.",
    level12: "Relentless - Can walk/be active 12 hours instead of 8 before forced march. Can hustle 2 hours/day overland instead of 1. Reduce penalty for tracking at double speed to -10.",
    level18: "Master Hunter - Once per day, review mark info for 10 min to recover 1 RP. Once per day when you defeat mark, recover 1 RP."
  },
  {
    id: "bureaucrat",
    name: "Bureaucrat",
    description: "You bring your no-nonsense ability to cut through red tape.",
    abilityBoost: "any",
    abilityOptions: ["intelligence", "wisdom", "charisma"],
    skills: ["Culture"],
    themeKnowledge: "Reduce DC of Culture or Diplomacy checks to navigate bureaucracy or recall knowledge about laws/regulations by 5. Culture is a class skill (or +1 if already class skill).",
    level6: "Regulatory Knowledge - You can use Culture instead of Profession for checks related to legal matters.",
    level12: "Expedited Processing - You can cut time to complete bureaucratic tasks by half.",
    level18: "Master Bureaucrat - Up to twice per day when successfully navigating complex bureaucracy, recover 1 RP."
  },
  {
    id: "career_trooper",
    name: "Career Trooper",
    description: "You are a career member of a military organization.",
    abilityBoost: "constitution",
    skills: ["Intimidate"],
    themeKnowledge: "Reduce DC of Culture or Profession (soldier) checks to recall military knowledge by 5. Intimidate is a class skill (or +1 if already class skill).",
    level6: "Military Discipline - Gain +1 morale bonus to saving throws against fear effects.",
    level12: "Squad Tactics - When using aid another in combat, grant +3 bonus instead of +2.",
    level18: "Veteran Trooper - After participating in 3 combats in a day defeating significant enemies, recover 1 RP. After 6 such combats, recover a second RP."
  },
  {
    id: "colonist",
    name: "Colonist",
    description: "You have an unquenchable trailblazer's spirit.",
    abilityBoost: "constitution",
    skills: ["Survival"],
    themeKnowledge: "Reduce DC of Survival checks to live off the land or recall knowledge about wilderness by 5. Survival is a class skill (or +1 if already class skill).",
    level6: "Pioneers Spirit - You can go twice as long without food or water before having to attempt Constitution checks.",
    level12: "Homesteader - You can build simple structures and shelters in half the normal time.",
    level18: "Frontier Expertise - Up to twice per day when establishing new settlement or helping colony, recover 1 RP."
  },
  {
    id: "corporate_agent",
    name: "Corporate Agent",
    description: "You are an agent of a corporation.",
    abilityBoost: "charisma",
    skills: ["Diplomacy"],
    themeKnowledge: "Reduce DC of Culture or Profession (corporate professional) checks to recall knowledge about corporations by 5. Diplomacy is a class skill (or +1 if already class skill).",
    level6: "Corporate Connections - You have contact at corporation who can provide info or minor favors.",
    level12: "Deal Maker - You gain +2 bonus to Diplomacy checks when negotiating deals or contracts.",
    level18: "Master Negotiator - Up to twice per day when successfully negotiating major deal, recover 1 RP."
  },
  {
    id: "crisis_refugee",
    name: "Crisis Refugee",
    description: "The Drift Crisis cut you off from the place you called home.",
    abilityBoost: "constitution",
    skills: ["Survival"],
    themeKnowledge: "Reduce DC of Survival checks to endure harsh conditions by 5. Survival is a class skill (or +1 if already class skill).",
    level6: "Survivor's Instinct - Gain +2 bonus to saving throws against environmental hazards.",
    level12: "Hardened Survivor - You can function normally when fatigued.",
    level18: "Unbreakable Will - Once per day when reduced to 0 HP, you can spend 1 RP to stay at 1 HP instead."
  },
  {
    id: "cult_hunter",
    name: "Cult Hunter",
    description: "Your life's work is to ferret out cults.",
    abilityBoost: "wisdom",
    skills: ["Mysticism"],
    themeKnowledge: "Reduce DC of Mysticism or Culture checks to recall knowledge about cults by 5. Mysticism is a class skill (or +1 if already class skill).",
    level6: "Detect Deception - Gain +2 bonus to Sense Motive checks to detect lies.",
    level12: "Cult Breaker - You deal +1 damage per die against cultists and creatures summoned by them.",
    level18: "Master Deprogrammer - Up to twice per day when freeing someone from cult influence, recover 1 RP."
  },
  {
    id: "cultist",
    name: "Cultist",
    description: "You served as a hooded, faceless adherent to a hidden organization.",
    abilityBoost: "constitution",
    skills: ["Culture"],
    themeKnowledge: "Reduce DC of Culture or Mysticism checks to recall knowledge about cults and secret organizations by 5. Culture is a class skill (or +1 if already class skill).",
    level6: "Hidden Devotion - Gain +2 bonus to Disguise and Stealth checks when trying to remain anonymous.",
    level12: "Secret Signs - You can communicate with secret hand signals that only cult members understand.",
    level18: "True Believer - Once per day when acting in service of your beliefs, recover 1 RP."
  },
  {
    id: "cyberborn",
    name: "Cyberborn",
    description: "You've had cybernetic augmentation since you were very young.",
    abilityBoost: "intelligence",
    skills: ["Computers"],
    themeKnowledge: "Reduce DC of Computers or Engineering checks to work with cybernetics by 5. Computers is a class skill (or +1 if already class skill).",
    level6: "Integrated Systems - You can install one additional cybernetic augmentation.",
    level12: "Cyborg Resilience - Gain DR 1/— against energy damage.",
    level18: "Transcendent Cyborg - Once per day when using cybernetic ability, recover 1 RP."
  },
  {
    id: "death_touched",
    name: "Death-Touched",
    description: "You have an affinity for the dead and undead.",
    abilityBoost: "constitution",
    skills: ["Mysticism"],
    themeKnowledge: "Reduce DC of Mysticism checks to recall knowledge about undead by 5. Mysticism is a class skill (or +1 if already class skill).",
    level6: "Spirit Sense - You can sense undead within 60 feet as a supernatural ability.",
    level12: "Bolster Undead - You can cast lesser remove condition on undead allies.",
    level18: "Master of Death - Up to twice per day when destroying undead or preventing someone's death, recover 1 RP."
  },
  {
    id: "diplomat",
    name: "Diplomat",
    description: "You have trained to make peace and strive for amicable solutions.",
    abilityBoost: "charisma",
    skills: ["Diplomacy"],
    themeKnowledge: "Reduce DC of Culture or Diplomacy checks to recall knowledge about diplomatic protocols by 5. Diplomacy is a class skill (or +1 if already class skill).",
    level6: "Peaceful Negotiator - You can use Diplomacy to change attitude of hostile creatures.",
    level12: "Expert Mediator - You can attempt Diplomacy to improve attitudes as a full action instead of 1 minute.",
    level18: "Master Diplomat - Up to twice per day when preventing violence through diplomacy, recover 1 RP."
  },
  {
    id: "dragonblood",
    name: "Dragonblood",
    description: "You can feel draconic magic pulsing through your veins.",
    abilityBoost: "charisma",
    skills: ["Mysticism"],
    themeKnowledge: "Reduce DC of Mysticism checks to recall knowledge about dragons by 5. Mysticism is a class skill (or +1 if already class skill).",
    level6: "Draconic Presence - Once per day, you can reroll an Intimidate check.",
    level12: "Dragon Scales - Gain +1 bonus to AC against attacks from dragons.",
    level18: "Draconic Fury - Up to twice per day when defeating dragon or dragon-like creature, recover 1 RP."
  },
  {
    id: "dream_prophet",
    name: "Dream Prophet",
    description: "You were drawn to Liavara by the Dreamers' songs.",
    abilityBoost: "wisdom",
    skills: ["Mysticism"],
    themeKnowledge: "Reduce DC of Mysticism checks related to dreams and visions by 5. Mysticism is a class skill (or +1 if already class skill).",
    level6: "Prophetic Dreams - Once per day, gain cryptic hint about future events.",
    level12: "Dream Walker - You can enter others' dreams.",
    level18: "Master Prophet - Up to twice per day when a prophecy comes true, recover 1 RP."
  },
  {
    id: "drift_crashed",
    name: "Drift Crashed",
    description: "You were aboard a starship when the Drift Crash occurred.",
    abilityBoost: "dexterity",
    skills: ["Piloting"],
    themeKnowledge: "Reduce DC of Piloting checks related to Drift travel by 5. Piloting is a class skill (or +1 if already class skill).",
    level6: "Emergency Pilot - Gain +2 bonus to Piloting checks when ship is damaged.",
    level12: "Drift Expertise - Reduce time to calculate Drift jumps by 25%.",
    level18: "Drift Master - Up to twice per day when surviving dangerous Drift encounter, recover 1 RP."
  },
  {
    id: "esper",
    name: "Esper",
    description: "You fight to defend your mind against invading monsters.",
    abilityBoost: "charisma",
    skills: ["Sense Motive"],
    themeKnowledge: "Reduce DC of Mysticism or Sense Motive checks related to mental threats by 5. Sense Motive is a class skill (or +1 if already class skill).",
    level6: "Mental Fortress - Gain +2 bonus to saves against mind-affecting effects.",
    level12: "Psychic Resistance - Gain SR equal to 11 + your level against mind-affecting effects.",
    level18: "Master Esper - Up to twice per day when defeating psychic threat, recover 1 RP."
  },
  {
    id: "gambler",
    name: "Gambler",
    description: "You honor Lady Luck as purveyor of fortunes.",
    abilityBoost: "any",
    abilityOptions: ["charisma", "intelligence", "wisdom"],
    skills: ["Bluff"],
    themeKnowledge: "Reduce DC of Culture or Profession (gambler) checks related to gambling by 5. Bluff is a class skill (or +1 if already class skill).",
    level6: "Lucky - Once per day, you can reroll a failed d20 roll.",
    level12: "Fortune's Favor - When you roll a natural 20, you can choose to gain +2 bonus to next attack roll instead of confirming crit.",
    level18: "Master Gambler - Up to twice per day when winning big or making a fortune through luck, recover 1 RP."
  },
  {
    id: "giantblood",
    name: "Giantblood",
    description: "You can trace your ancestry to giants.",
    abilityBoost: "strength",
    skills: ["Athletics"],
    themeKnowledge: "Reduce DC of Culture checks to recall knowledge about giants by 5. Athletics is a class skill (or +1 if already class skill).",
    level6: "Giant's Strength - Treat your Strength as 1 higher for carrying capacity.",
    level12: "Powerful Build - Count as one size category larger for combat maneuvers.",
    level18: "Titanic Might - Up to twice per day when performing feat of great strength, recover 1 RP."
  },
  {
    id: "gladiator",
    name: "Gladiator",
    description: "You are a veteran of the public blood sport industry.",
    abilityBoost: "constitution",
    skills: ["Acrobatics"],
    themeKnowledge: "Reduce DC of Culture or Profession (gladiator) checks related to arena combat by 5. Acrobatics is a class skill (or +1 if already class skill).",
    level6: "Crowd Pleaser - When you score a critical hit, gain +2 bonus to Intimidate checks for 1 round.",
    level12: "Arena Veteran - Gain +1 dodge bonus to AC against attacks of opportunity.",
    level18: "Champion Gladiator - Up to twice per day after defeating opponent in fair combat before audience, recover 1 RP."
  },
  {
    id: "grifter",
    name: "Grifter",
    description: "Swindling and tricking others are your specialties.",
    abilityBoost: "intelligence",
    skills: ["Bluff"],
    themeKnowledge: "Reduce DC of Bluff or Culture checks related to cons and scams by 5. Bluff is a class skill (or +1 if already class skill).",
    level6: "Silver Tongue - You can use Bluff to feint as a move action.",
    level12: "Master Con - Gain +2 bonus to Bluff checks to lie or trick.",
    level18: "Legendary Grifter - Up to twice per day when pulling off a major con, recover 1 RP."
  },
  {
    id: "guard",
    name: "Guard",
    description: "You are a vigilant protector of your clients and friends.",
    abilityBoost: "any",
    abilityOptions: ["strength", "dexterity"],
    skills: ["Perception"],
    themeKnowledge: "Reduce DC of Sense Motive or Perception checks to detect threats by 5. Perception is a class skill (or +1 if already class skill).",
    level6: "Watchful Eye - Gain +2 bonus to Perception checks while guarding someone.",
    level12: "Guardian - You can take attack of opportunity to protect adjacent ally.",
    level18: "Master Guardian - Up to twice per day when saving someone from danger, recover 1 RP."
  },
  {
    id: "icon",
    name: "Icon",
    description: "You are a popular and respected celebrity within the bounds of colonized space.",
    abilityBoost: "charisma",
    skills: ["Culture"],
    themeKnowledge: "Choose Profession. Reduce DC of Profession or Culture checks about icons of your profession by 5. Gain +1 to chosen Profession. Culture is a class skill (or +1 if already class skill).",
    level6: "Celebrity - DC 10 Culture check to recognize your name. Can find fan in 2d4 hours who provides services at discount or free.",
    level12: "Megacelebrity - DC 5 Culture check to recognize you. Takes only 1d4 hours to find fan. Fans give 10% discount on goods.",
    level18: "Master Icon - Up to twice per day, interact with public about your profession for 10 min to recover 1 RP."
  },
  {
    id: "law_officer",
    name: "Law Officer",
    description: "An enforcer of law and protector of the public.",
    abilityBoost: "wisdom",
    skills: ["Perception"],
    themeKnowledge: "Reduce DC of Culture or Profession (law officer) checks related to law enforcement by 5. Perception is a class skill (or +1 if already class skill).",
    level6: "By the Book - Gain +2 bonus to Diplomacy checks with law-abiding citizens.",
    level12: "Take Down - Gain +2 bonus to grapple combat maneuvers.",
    level18: "Master Officer - Up to twice per day when bringing criminal to justice, recover 1 RP."
  },
  {
    id: "mercenary",
    name: "Mercenary",
    description: "You are a well-trained soldier of fortune who works well with your companions in battle.",
    abilityBoost: "strength",
    skills: ["Athletics"],
    themeKnowledge: "Reduce DC of Culture and Profession (mercenary) checks to recall knowledge about military by 5. Athletics is a class skill (or +1 if already class skill).",
    level6: "Grunt - Treat Strength as 1 higher for bulk limit.",
    level12: "Squad Leader - Automatically succeed at aid another checks for squad members or fellow PCs.",
    level18: "Commander - After participating in 3 combats in a day defeating significant enemies, recover 1 RP. After 6 such combats, recover a second RP."
  },
  {
    id: "noble_scion",
    name: "Noble Scion",
    description: "You were born into a position of power and privilege.",
    abilityBoost: "charisma",
    skills: ["Diplomacy"],
    themeKnowledge: "Reduce DC of Culture or Diplomacy checks related to nobility and high society by 5. Diplomacy is a class skill (or +1 if already class skill).",
    level6: "Noble Bearing - Gain +2 bonus to Diplomacy checks with those of lower social status.",
    level12: "Influential - You can leverage your family name for favors.",
    level18: "Master Aristocrat - Up to twice per day when leveraging social position, recover 1 RP."
  },
  {
    id: "opportunist",
    name: "Opportunist",
    description: "For you, a crisis is nothing less than an opportunity.",
    abilityBoost: "charisma",
    skills: ["Bluff"],
    themeKnowledge: "Reduce DC of Sense Motive checks to assess situations for opportunities by 5. Bluff is a class skill (or +1 if already class skill).",
    level6: "Exploit Opening - Once per day, reroll an attack that missed.",
    level12: "Crisis Response - Gain +2 bonus to initiative when combat starts unexpectedly.",
    level18: "Master Opportunist - Up to twice per day when capitalizing on crisis situation, recover 1 RP."
  },
  {
    id: "outlaw",
    name: "Outlaw",
    description: "Whether guilty or not, you are a wanted criminal.",
    abilityBoost: "dexterity",
    skills: ["Sleight of Hand"],
    themeKnowledge: "Reduce DC of Culture or Sleight of Hand checks related to black market or criminal activity by 5. Sleight of Hand is a class skill (or +1 if already class skill).",
    level6: "Legal Contacts - You have contact in criminal underworld.",
    level12: "Notorious - Criminals recognize your reputation and you gain +2 to Intimidate checks against them.",
    level18: "Master Outlaw - Up to twice per day when pulling off major heist, recover 1 RP."
  },
  {
    id: "paranormal_investigator",
    name: "Paranormal Investigator",
    description: "You investigate supernatural mysteries.",
    abilityBoost: "any",
    abilityOptions: ["intelligence", "wisdom", "charisma"],
    skills: ["Mysticism"],
    themeKnowledge: "Reduce DC of Mysticism or Perception checks related to paranormal phenomena by 5. Mysticism is a class skill (or +1 if already class skill).",
    level6: "Paranormal Insight - Gain +2 bonus to saves against supernatural effects.",
    level12: "Spirit Medium - You can communicate with spirits.",
    level18: "Master Investigator - Up to twice per day when solving paranormal mystery, recover 1 RP."
  },
  {
    id: "personal_trainer",
    name: "Personal Trainer",
    description: "You help others achieve their physical goals.",
    abilityBoost: "any",
    abilityOptions: ["strength", "constitution"],
    skills: ["Athletics"],
    themeKnowledge: "Reduce DC of Athletics or Medicine checks related to fitness by 5. Athletics is a class skill (or +1 if already class skill).",
    level6: "Motivator - Allies gain +1 bonus to physical ability checks when you coach them.",
    level12: "Training Regimen - You can help allies recover from fatigue faster.",
    level18: "Master Trainer - Up to twice per day when helping someone achieve fitness goal, recover 1 RP."
  },
  {
    id: "pickpocket",
    name: "Pickpocket",
    description: "You have skill at nicking things from others without them noticing.",
    abilityBoost: "dexterity",
    skills: ["Sleight of Hand"],
    themeKnowledge: "Reduce DC of Sleight of Hand or Perception checks related to pickpocketing by 5. Sleight of Hand is a class skill (or +1 if already class skill).",
    level6: "Light Fingers - You can attempt to steal as a move action.",
    level12: "Master Thief - Gain +2 bonus to Sleight of Hand checks.",
    level18: "Legendary Pickpocket - Up to twice per day when successfully stealing valuable item, recover 1 RP."
  },
  {
    id: "priest",
    name: "Priest",
    description: "You are a religious leader devoted to a deity or philosophy.",
    abilityBoost: "wisdom",
    skills: ["Mysticism"],
    themeKnowledge: "Reduce DC of Mysticism checks related to your deity or philosophy by 5. Mysticism is a class skill (or +1 if already class skill).",
    level6: "Divine Guidance - Once per day, reroll a failed saving throw.",
    level12: "Faithful Servant - Gain +2 bonus to saves against effects that would force you to act against your beliefs.",
    level18: "Master Priest - Up to twice per day when performing sacred rite or converting someone, recover 1 RP."
  },
  {
    id: "professor",
    name: "Professor",
    description: "You are an expert educator and researcher.",
    abilityBoost: "intelligence",
    skills: ["any"],
    skillChoice: true,
    themeKnowledge: "Choose skill. Reduce DC of that skill to recall knowledge related to your field by 5. Chosen skill is a class skill (or +1 if already class skill).",
    level6: "Lecturer - You can use Diplomacy to improve attitudes through teaching.",
    level12: "Research Assistant - Reduce time to research by 25%.",
    level18: "Master Professor - Up to twice per day when making breakthrough discovery or enlightening student, recover 1 RP."
  },
  {
    id: "roboticist",
    name: "Roboticist",
    description: "You specialize in the creation and modification of robots.",
    abilityBoost: "intelligence",
    skills: ["Engineering"],
    themeKnowledge: "Reduce DC of Engineering checks related to robots by 5. Engineering is a class skill (or +1 if already class skill).",
    level6: "Robot Whisperer - Gain +2 bonus to checks to repair or reprogram robots.",
    level12: "Efficient Builder - Take half normal time to build robots.",
    level18: "Master Roboticist - Up to twice per day when creating or repairing significant robot, recover 1 RP."
  },
  {
    id: "scholar",
    name: "Scholar",
    description: "You are an expert in one particular field of study.",
    abilityBoost: "intelligence",
    skills: ["Life Science", "Physical Science"],
    themeKnowledge: "Choose Life or Physical Science and specialization. DC to recall knowledge about specialty reduced by 5. Chosen skill is a class skill (or +1 if already class skill).",
    level6: "Tip of the Tongue - Once per day, reroll skill check to recall knowledge. Must use second result.",
    level12: "Research Maven - Take 20 to recall knowledge in one-quarter normal time (typically 5 rounds).",
    level18: "Master Scholar - Up to twice per day, contemplate specialty field for 10 min to recover 1 RP (doesn't count as rest)."
  },
  {
    id: "sensate",
    name: "Sensate",
    description: "You seek out new experiences and sensations.",
    abilityBoost: "wisdom",
    skills: ["Culture"],
    themeKnowledge: "Reduce DC of Culture checks related to experiences and entertainment by 5. Culture is a class skill (or +1 if already class skill).",
    level6: "Keen Senses - Gain +2 bonus to Perception checks.",
    level12: "Experience Everything - You've done it all and gain +2 bonus to saves against effects you've experienced before.",
    level18: "Master Sensate - Up to twice per day when experiencing something truly new and amazing, recover 1 RP."
  },
  {
    id: "space_pirate",
    name: "Space Pirate",
    description: "You live a lawless life taking what you want.",
    abilityBoost: "dexterity",
    skills: ["Intimidate"],
    themeKnowledge: "Reduce DC of Culture or Piloting checks related to piracy by 5. Intimidate is a class skill (or +1 if already class skill).",
    level6: "Pirate's Luck - Once per day, reroll a failed Piloting check during starship combat.",
    level12: "Fearsome Reputation - Gain +2 bonus to Intimidate checks against those who know your reputation.",
    level18: "Legendary Pirate - Up to twice per day when capturing prize or defeating enemy ship, recover 1 RP."
  },
  {
    id: "spacefarer",
    name: "Spacefarer",
    description: "You've spent much of your life in space, traveling between worlds.",
    abilityBoost: "constitution",
    skills: ["Physical Science"],
    themeKnowledge: "Reduce DC of Physical Science checks to recall knowledge about space phenomena by 5. Physical Science is a class skill (or +1 if already class skill).",
    level6: "Eager Dabbler - Treat half your ranks in Physical Science as ranks in other Profession skills related to space travel.",
    level12: "Void Adaptation - Gain +2 bonus to saves against environmental hazards in space.",
    level18: "Master Spacefarer - Up to twice per day when completing long space journey or discovering new world, recover 1 RP."
  },
  {
    id: "street_rat",
    name: "Street Rat",
    description: "You grew up on the mean streets.",
    abilityBoost: "dexterity",
    skills: ["Survival"],
    themeKnowledge: "Reduce DC of Survival or Sleight of Hand checks related to urban environments by 5. Survival is a class skill (or +1 if already class skill).",
    level6: "Urban Survivor - Gain +2 bonus to checks to find shelter or food in cities.",
    level12: "Street Smarts - You can't be surprised in urban environments.",
    level18: "Master Survivor - Up to twice per day when surviving against odds in urban environment, recover 1 RP."
  },
  {
    id: "tempered_pilgrim",
    name: "Tempered Pilgrim",
    description: "You seek enlightenment through meditation and discipline.",
    abilityBoost: "wisdom",
    skills: ["Mysticism"],
    themeKnowledge: "Reduce DC of Mysticism or Culture checks related to philosophical traditions by 5. Mysticism is a class skill (or +1 if already class skill).",
    level6: "Inner Peace - Gain +2 bonus to saves against emotion effects.",
    level12: "Meditative Focus - You can meditate for 10 minutes to gain +2 bonus to next skill check.",
    level18: "Master Pilgrim - Up to twice per day when achieving enlightenment or spiritual breakthrough, recover 1 RP."
  },
  {
    id: "themeless",
    name: "Themeless",
    description: "You don't fit neatly into any particular theme.",
    abilityBoost: "any",
    skills: [],
    themeKnowledge: "Gain class skill of your choice. Gain +1 to any ability score.",
    level6: "Certainty - Once per day before rolling skill check, gain +2 bonus to that skill for that check.",
    level12: "Extensive Studies - Choose class skill. Once per day, reroll that skill check before learning results. Must use second result.",
    level18: "Steely Determination - Increase Resolve Point pool by 1."
  },
  {
    id: "tinker",
    name: "Tinker",
    description: "You love to take things apart and put them back together.",
    abilityBoost: "intelligence",
    skills: ["Engineering"],
    themeKnowledge: "Reduce DC of Engineering checks to repair or modify items by 5. Engineering is a class skill (or +1 if already class skill).",
    level6: "Jury Rig - You can quickly repair items in the field.",
    level12: "Innovative Solutions - Reduce time to craft items by 25%.",
    level18: "Master Tinker - Up to twice per day when creating significant invention, recover 1 RP."
  },
  {
    id: "xenoarchaeologist",
    name: "Xenoarchaeologist",
    description: "You study ancient alien civilizations.",
    abilityBoost: "intelligence",
    skills: ["Culture"],
    themeKnowledge: "Reduce DC of Culture checks related to ancient civilizations by 5. Culture is a class skill (or +1 if already class skill).",
    level6: "Ancient Knowledge - Gain +2 bonus to checks to identify ancient artifacts.",
    level12: "Archaeological Insight - You can determine age and origin of items quickly.",
    level18: "Master Archaeologist - Up to twice per day when discovering significant ancient artifact, recover 1 RP."
  },
  {
    id: "xenoseeker",
    name: "Xenoseeker",
    description: "You seek out and study alien life forms.",
    abilityBoost: "charisma",
    skills: ["Life Science"],
    themeKnowledge: "Reduce DC of Life Science checks to identify creatures and recall knowledge about xenobiology by 5. Life Science is a class skill (or +1 if already class skill).",
    level6: "Quick Identification - You can identify creatures as a move action instead of full action.",
    level12: "Xenobiologist - Gain +2 bonus to checks related to alien biology.",
    level18: "Master Xenoseeker - Up to twice per day when discovering or studying new alien species, recover 1 RP."
  }
];

export const CLASSES = [
  {
    id: "envoy",
    name: "Envoy",
    description: "Charismatic leaders who inspire allies and confound enemies.",
    keyAbility: "charisma",
    hp: 6,
    stamina: 6,
    skillRanksPerLevelBase: 8,
    classSkills: ["Acrobatics", "Athletics", "Bluff", "Computers", "Culture", "Diplomacy", "Disguise", "Engineering", "Intimidate", "Medicine", "Perception", "Piloting", "Profession", "Sense Motive", "Sleight of Hand", "Stealth"],
    proficiencies: ["Light Armor", "Basic Melee", "Grenades", "Small Arms"],
    bab: "3/4",
    classAbilities: [
      { name: "Envoy Improvisations", level: 1, description: "You learn your first envoy improvisation - a special ability that you can use to aid your allies or hinder your foes." },
      { name: "Expertise", level: 1, description: "You gain Skill Expertise with all skills, allowing you to add 1d6 to any skill check for a class skill." },
      { name: "Skill Focus", level: 1, description: "You gain Skill Focus as a bonus feat." },
      { name: "Envoy Improvisation", level: 2, description: "You learn an additional envoy improvisation." },
      { name: "Envoy Improvisation", level: 4, description: "You learn an additional envoy improvisation." },
      { name: "Skill Expertise (1d6+1)", level: 5, description: "Your expertise die increases to 1d6+1." },
      { name: "Expertise Talent", level: 5, description: "You gain your first expertise talent." },
      { name: "Envoy Improvisation", level: 6, description: "You learn an additional envoy improvisation." },
      { name: "Envoy Improvisation", level: 8, description: "You learn an additional envoy improvisation." },
      { name: "Skill Expertise (1d8+1)", level: 9, description: "Your expertise die increases to 1d8+1." },
      { name: "Expertise Talent", level: 9, description: "You gain an additional expertise talent." },
      { name: "Envoy Improvisation", level: 10, description: "You learn an additional envoy improvisation." },
      { name: "Envoy Improvisation", level: 12, description: "You learn an additional envoy improvisation." },
      { name: "Skill Expertise (1d8+2)", level: 13, description: "Your expertise die increases to 1d8+2." },
      { name: "Expertise Talent", level: 13, description: "You gain an additional expertise talent." },
      { name: "Envoy Improvisation", level: 14, description: "You learn an additional envoy improvisation." },
      { name: "Envoy Improvisation", level: 16, description: "You learn an additional envoy improvisation." },
      { name: "Skill Expertise (1d8+3)", level: 17, description: "Your expertise die increases to 1d8+3." },
      { name: "Expertise Talent", level: 17, description: "You gain an additional expertise talent." },
      { name: "Envoy Improvisation", level: 18, description: "You learn an additional envoy improvisation." },
      { name: "Envoy Improvisation", level: 20, description: "You learn an additional envoy improvisation." },
      { name: "True Expertise", level: 20, description: "When you roll your expertise die, you gain the max result on the die instead of rolling." }
    ],
    lore: "Envoys are charismatic leaders and skilled diplomats who use their wit, charm, and tactical acumen to inspire their allies and outmaneuver their enemies. They excel at social situations and can talk their way out of almost any problem.\n\nEnvoys are natural leaders found commanding starship crews, negotiating treaties, running corporations, or leading adventuring parties. Their versatility and social prowess make them invaluable in any situation requiring finesse over brute force."
  },
  {
    id: "mechanic",
    name: "Mechanic",
    description: "Tech experts who build drones or augment themselves with an AI.",
    keyAbility: "intelligence",
    hp: 6,
    stamina: 6,
    skillRanksPerLevelBase: 4,
    classSkills: ["Athletics", "Computers", "Engineering", "Medicine", "Perception", "Physical Science", "Piloting", "Profession"],
    proficiencies: ["Light Armor", "Basic Melee", "Grenades", "Small Arms"],
    bab: "3/4",
    classChoices: {
      id: 'artificial_intelligence',
      title: 'Artificial Intelligence',
      description: 'Choose the form your custom AI takes: a drone companion or an exocortex that augments your own abilities.',
      options: [
        {
          id: 'drone',
          name: 'Drone',
          description: 'You begin play with a powerful robotic drone that you design and construct. The drone is a loyal companion that follows your commands and can be customized with various mods as you level up.'
        },
        {
          id: 'exocortex',
          name: 'Exocortex',
          description: 'You begin play with an advanced AI implanted in your brain. The exocortex enhances your combat abilities, grants you proficiency with heavy armor and weapons, and provides tactical information in combat.'
        }
      ]
    },
    classAbilities: [
      { name: "Artificial Intelligence", level: 1, description: "You construct either a drone or an exocortex - a sophisticated AI that aids you in your adventures." },
      { name: "Bypass", level: 1, description: "You gain a +1 insight bonus to Computers and Engineering checks." },
      { name: "Custom Rig", level: 1, description: "You have created a customized toolkit that you can use to hack systems and repair tech." },
      { name: "Mechanic Trick", level: 2, description: "You learn your first mechanic trick." },
      { name: "Weapon Specialization", level: 3, description: "You gain Weapon Specialization as a bonus feat for each weapon type this class grants you proficiency with." },
      { name: "Bypass +2", level: 3, description: "Your bypass bonus increases to +2." },
      { name: "Mechanic Trick", level: 4, description: "You learn an additional mechanic trick." },
      { name: "Overload", level: 5, description: "You can cause a short in an electronic device." },
      { name: "Bypass +3", level: 6, description: "Your bypass bonus increases to +3." },
      { name: "Mechanic Trick", level: 6, description: "You learn an additional mechanic trick." },
      { name: "Expert Rig", level: 7, description: "Your custom rig becomes more powerful." },
      { name: "Mechanic Trick", level: 8, description: "You learn an additional mechanic trick." },
      { name: "Bypass +4", level: 9, description: "Your bypass bonus increases to +4." },
      { name: "Override", level: 10, description: "You can take control of a computer or robot." },
      { name: "Mechanic Trick", level: 10, description: "You learn an additional mechanic trick." },
      { name: "Coordinated Assault", level: 11, description: "You and your AI can coordinate attacks." },
      { name: "Bypass +5", level: 12, description: "Your bypass bonus increases to +5." },
      { name: "Mechanic Trick", level: 12, description: "You learn an additional mechanic trick." },
      { name: "Advanced Rig", level: 13, description: "Your custom rig gains advanced capabilities." },
      { name: "Mechanic Trick", level: 14, description: "You learn an additional mechanic trick." },
      { name: "Bypass +6", level: 15, description: "Your bypass bonus increases to +6." },
      { name: "Mechanic Trick", level: 16, description: "You learn an additional mechanic trick." },
      { name: "Control Net", level: 17, description: "You can control multiple robots or systems." },
      { name: "Bypass +7", level: 18, description: "Your bypass bonus increases to +7." },
      { name: "Mechanic Trick", level: 18, description: "You learn an additional mechanic trick." },
      { name: "Superior Rig", level: 19, description: "Your custom rig reaches its peak performance." },
      { name: "Mechanic Trick", level: 20, description: "You learn an additional mechanic trick." },
      { name: "Tech Master", level: 20, description: "You are a master of all technology." }
    ],
    lore: "Mechanics are masters of technology who specialize in building, modifying, and hacking all manner of technological devices. They create custom AIs to aid them - either a versatile robotic drone companion or an exocortex that enhances their own capabilities.\n\nMechanics are found maintaining starships, running repair shops, working as corporate technicians, or serving as tech support for adventuring teams. Their technical expertise and AI companions make them indispensable in the technology-dependent Pact Worlds."
  },
  {
    id: "mystic",
    name: "Mystic",
    description: "Magic users who draw power from a divine connection.",
    keyAbility: "wisdom",
    hp: 6,
    stamina: 6,
    skillRanksPerLevelBase: 6,
    classSkills: ["Bluff", "Culture", "Diplomacy", "Engineering", "Life Science", "Medicine", "Mysticism", "Perception", "Profession", "Sense Motive", "Survival"],
    proficiencies: ["Light Armor", "Basic Melee", "Small Arms"],
    bab: "3/4",
    spellcaster: true,
    spellcastingAbility: "wisdom",
    classChoices: {
      id: 'connection',
      title: 'Connection',
      description: 'Choose a mystic connection that represents the source of your power. This grants connection skills, a connection power, and later revelations.',
      options: [
        {
          id: 'akashic',
          name: 'Akashic',
          description: 'Theme: Knowledge and memory. Associated Skills: Culture, Mysticism. You draw power from the Akashic Record, the collective memory of existence.'
        },
        {
          id: 'battle',
          name: 'Battle',
          description: 'Theme: War and conflict. Associated Skills: Athletics, Intimidate. You channel divine fury and martial insight.'
        },
        {
          id: 'connection_to_the_cosmos',
          name: 'Connection to the Cosmos',
          description: 'Theme: Stars and space. Associated Skills: Physical Science, Mysticism. You draw power from the vast cosmos and celestial phenomena.'
        },
        {
          id: 'crusader',
          name: 'Crusader',
          description: 'Theme: Zeal and righteous cause. Associated Skills: Diplomacy, Intimidate. You are a champion of a cause or deity.'
        },
        {
          id: 'healing',
          name: 'Healing',
          description: 'Theme: Restoration and life. Associated Skills: Life Science, Medicine. You channel positive energy to heal and restore.'
        },
        {
          id: 'mindbreaker',
          name: 'Mindbreaker',
          description: 'Theme: Psychic domination. Associated Skills: Bluff, Intimidate. You specialize in mental assault and psychic control.'
        },
        {
          id: 'overlord',
          name: 'Overlord',
          description: 'Theme: Control and authority. Associated Skills: Intimidate, Sense Motive. You command and dominate through force of will.'
        },
        {
          id: 'star_shaman',
          name: 'Star Shaman',
          description: 'Theme: Fate and the void. Associated Skills: Mysticism, Survival. You draw power from the stars and cosmic destiny.'
        },
        {
          id: 'xenodruid',
          name: 'Xenodruid',
          description: 'Theme: Alien life and adaptation. Associated Skills: Life Science, Survival. You connect with alien ecosystems and creatures.'
        }
      ]
    },
    classAbilities: [
      { name: "Connection", level: 1, description: "Choose a mystic connection that represents the source of your power. This grants connection skills, a connection power, and later revelations." },
      { name: "Connection Power", level: 1, description: "Gain the 1st-level power granted by your chosen connection." },
      { name: "Mysticism", level: 1, description: "You channel magical power through spiritual insight and belief." },
      { name: "Spells", level: 1, description: "You can cast mystic spells drawn from the mystic spell list." },
      { name: "Channel Skill", level: 2, description: "Gain Skill Focus in a skill associated with your connection." },
      { name: "Connection Power", level: 3, description: "Gain another power from your chosen connection." },
      { name: "Weapon Specialization", level: 3, description: "Gain the Weapon Specialization bonus for weapons you are proficient with." },
      { name: "Channel Skill", level: 4, description: "Gain an additional rank of Skill Focus or +1 to another connection skill." },
      { name: "Connection Power", level: 5, description: "Gain another power from your chosen connection." },
      { name: "Channel Skill", level: 6, description: "Gain an additional rank of Skill Focus or +1 to another connection skill." },
      { name: "Connection Power", level: 7, description: "Gain another power from your chosen connection." },
      { name: "Channel Skill", level: 8, description: "Gain an additional rank of Skill Focus or +1 to another connection skill." },
      { name: "Connection Power", level: 9, description: "Gain another power from your chosen connection." },
      { name: "Channel Skill", level: 10, description: "Gain an additional rank of Skill Focus or +1 to another connection skill." },
      { name: "Connection Power", level: 11, description: "Gain another power from your chosen connection." },
      { name: "Channel Skill", level: 12, description: "Gain an additional rank of Skill Focus or +1 to another connection skill." },
      { name: "Connection Power", level: 13, description: "Gain another power from your chosen connection." },
      { name: "Channel Skill", level: 14, description: "Gain an additional rank of Skill Focus or +1 to another connection skill." },
      { name: "Connection Power", level: 15, description: "Gain another power from your chosen connection." },
      { name: "Channel Skill", level: 16, description: "Gain an additional rank of Skill Focus or +1 to another connection skill." },
      { name: "Connection Power", level: 17, description: "Gain another power from your chosen connection." },
      { name: "Channel Skill", level: 18, description: "Gain an additional rank of Skill Focus or +1 to another connection skill." },
      { name: "Connection Power", level: 19, description: "Gain another power from your chosen connection." },
      { name: "Transcendence", level: 20, description: "You gain a powerful capstone ability based on your connection." }
    ],
    lore: "Mystics are spiritually attuned spellcasters who draw their power from a mysterious connection to cosmic forces. Unlike technomancers who blend magic with technology, mystics embrace the traditional mystical arts and divine magic.\n\nMystics serve as priests, spiritual advisors, healers, and seekers of cosmic truth. Their connection to otherworldly powers grants them unique abilities and insights, making them valuable guides and protectors in a universe full of mysteries.",
    source: "Core Rulebook"
  },
  {
    id: "operative",
    name: "Operative",
    description: "Stealthy agents skilled in infiltration and precision attacks.",
    keyAbility: "dexterity",
    hp: 6,
    stamina: 6,
    skillRanksPerLevelBase: 8,
    classSkills: ["Acrobatics", "Athletics", "Bluff", "Computers", "Culture", "Disguise", "Engineering", "Intimidate", "Medicine", "Perception", "Piloting", "Profession", "Sense Motive", "Sleight of Hand", "Stealth", "Survival"],
    proficiencies: ["Light Armor", "Basic Melee", "Small Arms", "Sniper Weapons"],
    bab: "3/4",
    classChoices: {
      id: 'specialization',
      title: 'Specialization',
      description: 'Choose your operative specialization. This defines your associated skills, grants the Skill Focus feat in those skills, a free skill rank in each at every operative level, and sets your specialization exploit progression.',
      options: [
        {
          id: 'bully',
          name: 'Bully',
          description: 'Your intimidating presence helps you dominate foes. Associated Skills: Athletics, Intimidate. Specialization Exploit: Fearsome Presence. Specialization Power (11th): Domineering Strike — Trick attacks against frightened, panicked, prone, or shaken targets treat 1-2 damage dice as 3s.'
        },
        {
          id: 'daredevil',
          name: 'Daredevil',
          description: 'You specialize in death-defying stunts and acrobatic combat. Associated Skills: Acrobatics, Athletics. Specialization Exploit: Versatile Movement. Specialization Power (11th): Terrain Attack — When both you and a foe are balancing, climbing, flying, or swimming, automatically succeed at Bluff checks for trick attack.'
        },
        {
          id: 'detective',
          name: 'Detective',
          description: 'You are an investigator who excels at solving mysteries. Associated Skills: Culture, Sense Motive. Specialization Exploit: Glimpse the Truth. Specialization Power (11th): Detective\'s Insight — Once per day, spend a Resolve Point and 10 minutes to gain divination-like insight.'
        },
        {
          id: 'explorer',
          name: 'Explorer',
          description: 'You are a scout and pathfinder in dangerous territory. Associated Skills: Culture, Survival. Specialization Exploit: Ever Vigilant. Specialization Power (11th): Into the Unknown — Bonus to Culture and Survival checks and initiative when outside the Pact Worlds.'
        },
        {
          id: 'ghost',
          name: 'Ghost',
          description: 'You are a master of stealth and infiltration. Associated Skills: Acrobatics, Stealth. Specialization Exploit: Cloaking Field. Specialization Power (11th): Phase Shift Escape — Spend a Resolve Point to attempt phasing through up to 5 feet of matter once per rest.'
        },
        {
          id: 'hacker',
          name: 'Hacker',
          description: 'You specialize in electronic infiltration and data theft. Associated Skills: Computers, Engineering. Specialization Exploit: Elusive Hacker. Specialization Power (11th): Control Hack — When exceeding a disable DC by 5 or more, you can command the device.'
        },
        {
          id: 'spy',
          name: 'Spy',
          description: 'You excel at disguise, deception, and social infiltration. Associated Skills: Bluff, Disguise. Specialization Exploit: Master of Disguise. Specialization Power (11th): Fool Detection — On certain saves against effects that reveal information about you, provide false information instead.'
        },
        {
          id: 'thief',
          name: 'Thief',
          description: 'You are skilled at stealing and picking locks. Associated Skills: Perception, Sleight of Hand. Specialization Exploit: Holographic Distraction. Specialization Power (11th): Contingency Plan — Spend Resolve Points and make a skill check to enact a pre-set contingency.'
        }
      ]
    },
    classAbilities: [
      { name: "Operative's Edge +1", level: 1, description: "Your diverse training grants you a +1 insight bonus to initiative checks and to skill checks. This bonus increases at later levels." },
      { name: "Specialization", level: 1, description: "Choose an operative specialization. This defines your associated skills, grants the Skill Focus feat in those skills, a free skill rank in each at every operative level, and sets your specialization exploit progression." },
      { name: "Trick Attack +1d4", level: 1, description: "As a full action, you can move up to your speed and then make an attack with a small arm or melee weapon with the operative special property. Before the attack, attempt a skill check (Bluff, Intimidate, Stealth, or a specialization-associated skill) against DC = 20 + target's CR. On success, you deal +1d4 extra damage and the target is flat-footed against this attack. The extra damage increases at higher levels." },
      { name: "Evasion", level: 2, description: "While wearing light or no armor and not encumbered, if you make a successful Reflex save against an effect that normally deals half damage on a successful save, you instead take no damage." },
      { name: "Operative Exploit", level: 2, description: "You gain your first operative exploit - a special ability that enhances your capabilities." },
      { name: "Operative's Edge +2", level: 3, description: "Your Operative's Edge bonus increases to +2." },
      { name: "Quick Movement +10 ft", level: 3, description: "When unencumbered and wearing light armor or no armor, increase land speed by +10 ft. This bonus increases at higher levels." },
      { name: "Trick Attack +1d8", level: 3, description: "Your trick attack damage increases to 1d8." },
      { name: "Weapon Specialization", level: 3, description: "Gain the Weapon Specialization bonus for weapons you are proficient in." },
      { name: "Debilitating Trick", level: 4, description: "When you succeed with Trick Attack, you can make the target Flat-Footed or Off-Target until the start of your next turn." },
      { name: "Operative Exploit", level: 4, description: "You gain an additional operative exploit." },
      { name: "Specialization Exploit", level: 5, description: "You gain the listed exploit for your specialization as a bonus exploit." },
      { name: "Trick Attack +3d8", level: 5, description: "Your trick attack damage increases to 3d8." },
      { name: "Operative Exploit", level: 6, description: "You gain an additional operative exploit." },
      { name: "Operative's Edge +3", level: 7, description: "Your Operative's Edge bonus increases to +3." },
      { name: "Specialization Skill Mastery", level: 7, description: "When using a skill in which you have the Skill Focus feat, you can take 10 on the check even under stress." },
      { name: "Trick Attack +4d8", level: 7, description: "Your trick attack damage increases to 4d8." },
      { name: "Uncanny Agility", level: 7, description: "You are immune to Flat-Footed, and opponents do not gain bonuses against you for flanking, prone, or certain cover conditions." },
      { name: "Operative Exploit", level: 8, description: "You gain an additional operative exploit." },
      { name: "Triple Attack", level: 8, description: "When making a full attack with only melee weapons with the operative special property or small arms, you can make up to three attacks instead of two." },
      { name: "Quick Movement +20 ft", level: 9, description: "Your Quick Movement bonus increases to +20 ft." },
      { name: "Trick Attack +5d8", level: 9, description: "Your trick attack damage increases to 5d8." },
      { name: "Operative Exploit", level: 10, description: "You gain an additional operative exploit." },
      { name: "Operative's Edge +4", level: 11, description: "Your Operative's Edge bonus increases to +4." },
      { name: "Specialization Power", level: 11, description: "Gain the 11th-level unique ability for your chosen specialization." },
      { name: "Trick Attack +6d8", level: 11, description: "Your trick attack damage increases to 6d8." },
      { name: "Operative Exploit", level: 12, description: "You gain an additional operative exploit." },
      { name: "Quad Attack", level: 13, description: "When making a full attack with only melee weapons with the operative special property or small arms, you can make up to four attacks instead of two." },
      { name: "Trick Attack +7d8", level: 13, description: "Your trick attack damage increases to 7d8." },
      { name: "Operative Exploit", level: 14, description: "You gain an additional operative exploit." },
      { name: "Operative's Edge +5", level: 15, description: "Your Operative's Edge bonus increases to +5." },
      { name: "Quick Movement +30 ft", level: 15, description: "Your Quick Movement bonus increases to +30 ft." },
      { name: "Trick Attack +8d8", level: 15, description: "Your trick attack damage increases to 8d8." },
      { name: "Operative Exploit", level: 16, description: "You gain an additional operative exploit." },
      { name: "Double Debilitation", level: 17, description: "When you hit with a Trick Attack, you can apply two debilitating trick effects." },
      { name: "Trick Attack +9d8", level: 17, description: "Your trick attack damage increases to 9d8." },
      { name: "Operative Exploit", level: 18, description: "You gain an additional operative exploit." },
      { name: "Operative's Edge +6", level: 19, description: "Your Operative's Edge bonus increases to +6." },
      { name: "Trick Attack +10d8", level: 19, description: "Your trick attack damage increases to 10d8." },
      { name: "Operative Exploit", level: 20, description: "You gain an additional operative exploit." },
      { name: "Supreme Operative", level: 20, description: "When making a skill check with your specialization's associated skills, roll twice and take the higher result. Once per day as a move action, you may trade one operative exploit for another of equal or lower level for 24 hours, losing any dependent abilities temporarily." }
    ],
    lore: "Operatives are cunning agents who combine martial skill with specialized training. Whether they're spies, thieves, hackers, or investigators, operatives excel at their chosen specialty and can adapt to almost any situation.\n\nOperatives work as corporate spies, freelance thieves, law enforcement detectives, military scouts, or elite infiltrators. Their versatility and skill expertise make them invaluable for missions requiring precision and finesse rather than brute force.",
    source: "Core Rulebook"
  },
  {
    id: "solarian",
    name: "Solarian",
    description: "Warriors who harness stellar energy into weapons and armor.",
    keyAbility: "charisma",
    hp: 7,
    stamina: 7,
    skillRanksPerLevelBase: 4,
    classSkills: ["Acrobatics", "Athletics", "Diplomacy", "Intimidate", "Mysticism", "Perception", "Physical Science", "Profession", "Sense Motive", "Stealth"],
    proficiencies: ["Light Armor", "Heavy Armor", "Basic Melee", "Advanced Melee", "Small Arms"],
    bab: "Full",
    classChoices: {
      id: 'solar_manifestation',
      title: 'Solar Manifestation',
      description: 'Choose how you manifest stellar energy: as a weapon for offense or as armor for defense.',
      options: [
        {
          id: 'solar_weapon',
          name: 'Solar Weapon',
          description: 'You can create a melee weapon of stellar energy. The weapon deals damage and gains additional properties as you level up. You can customize its appearance and damage type.'
        },
        {
          id: 'solar_armor',
          name: 'Solar Armor',
          description: 'You can create armor of stellar energy that grants you defensive bonuses. The armor provides increasing AC bonuses and damage reduction as you level up, and grants additional protective abilities.'
        }
      ]
    },
    classAbilities: [
      { name: "Solar Manifestation", level: 1, description: "You can create either a solar weapon or solar armor as a move action. This manifestation is the physical form of your stellar power." },
      { name: "Stellar Mode", level: 1, description: "You have three stellar modes: unattuned, graviton-attuned, and photon-attuned. You build attunement by using stellar revelations, gaining powerful benefits when fully attuned." },
      { name: "Stellar Revelation", level: 1, description: "You learn stellar revelations - special abilities tied to graviton or photon powers. You gain additional revelations as you level up." },
      { name: "Skill Adept", level: 1, description: "You can use Mysticism for Perception checks to search for or recall knowledge about strange creatures or phenomena." }
    ],
    lore: "Solarians are cosmic warriors who channel the fundamental forces of stars - the gravitational pull of black holes and the blazing nuclear fires of supernovas. They shape stellar energy into weapons and armor, walking the balance between light and gravity.\n\nSolarians are often found as wandering warrior-philosophers, temple guardians, or champions of cosmic balance. Their unique abilities make them formidable combatants and their connection to stellar forces grants them insights into the fundamental nature of the universe."
  },
  {
    id: "soldier",
    name: "Soldier",
    description: "Combat specialists trained in all forms of warfare.",
    keyAbility: "choice",
    keyAbilityOptions: ["strength", "dexterity"],
    hp: 7,
    stamina: 7,
    skillRanksPerLevelBase: 4,
    classSkills: ["Acrobatics", "Athletics", "Engineering", "Intimidate", "Piloting", "Profession", "Survival"],
    proficiencies: ["Light Armor", "Heavy Armor", "Powered Armor", "Basic Melee", "Advanced Melee", "Small Arms", "Longarms", "Heavy Weapons", "Sniper Weapons", "Grenades"],
    bab: "Full",
    classChoices: {
      id: 'key_ability_and_fighting_style',
      title: 'Key Ability & Fighting Style',
      description: 'Choose your key ability score (Strength or Dexterity) and your primary fighting style.',
      multipleChoices: [
        {
          id: 'key_ability',
          title: 'Key Ability Score',
          description: 'Choose your primary ability score.',
          options: [
            { id: 'strength', name: 'Strength', description: 'Focus on melee combat and heavy weapons.' },
            { id: 'dexterity', name: 'Dexterity', description: 'Focus on ranged combat and mobility.' }
          ]
        },
        {
          id: 'fighting_style',
          title: 'Fighting Style',
          description: 'Choose your primary fighting style. This choice grants style techniques at multiple levels.',
          options: [
            {
              id: 'arcane_assailant',
              name: 'Arcane Assailant',
              description: 'You blend magic with combat, using spell gems and hybrid items effectively. Grants bonuses to using magical items in combat.'
            },
            {
              id: 'armor_storm',
              name: 'Armor Storm',
              description: 'You specialize in heavy armor, turning yourself into an unstoppable juggernaut. Grants enhanced heavy armor abilities and damage reduction.'
            },
            {
              id: 'blitz',
              name: 'Blitz',
              description: 'You are all about speed and mobility, making rapid attacks while on the move. Grants bonuses to movement and abilities to attack while moving.'
            },
            {
              id: 'bombard',
              name: 'Bombard',
              description: 'You specialize in heavy weapons and explosives. Grants bonuses to heavy weapons and area attacks.'
            },
            {
              id: 'guard',
              name: 'Guard',
              description: 'You protect your allies and control the battlefield. Grants abilities to intercept attacks and protect nearby allies.'
            },
            {
              id: 'hit_and_run',
              name: 'Hit and Run',
              description: 'You excel at mobile ranged combat. Grants abilities to move and shoot effectively while avoiding counterattacks.'
            },
            {
              id: 'sharpshoot',
              name: 'Sharpshoot',
              description: 'You are a precision marksman with ranged weapons. Grants bonuses to ranged attacks and ignoring cover.'
            }
          ]
        }
      ]
    },
    classAbilities: [
      { name: "Fighting Style", level: 1, description: "Choose a fighting style that represents your preferred combat role. This choice grants style techniques at multiple levels." },
      { name: "Primary Fighting Style Technique", level: 1, description: "Gain the first technique from your chosen fighting style." },
      { name: "Bonus Feat", level: 1, description: "Gain a combat feat as a bonus feat. You must meet the feat's prerequisites." },
      { name: "Gear Boost", level: 2, description: "Gain a gear boost, representing specialized training or equipment enhancements." },
      { name: "Primary Fighting Style Technique", level: 3, description: "Gain an additional technique from your fighting style." },
      { name: "Weapon Specialization", level: 3, description: "Gain the Weapon Specialization bonus for weapons you are proficient with." },
      { name: "Gear Boost", level: 4, description: "Gain an additional gear boost." },
      { name: "Primary Fighting Style Technique", level: 5, description: "Gain an additional technique from your fighting style." },
      { name: "Gear Boost", level: 6, description: "Gain an additional gear boost." },
      { name: "Primary Fighting Style Technique", level: 7, description: "Gain an additional technique from your fighting style." },
      { name: "Gear Boost", level: 8, description: "Gain an additional gear boost." },
      { name: "Primary Fighting Style Technique", level: 9, description: "Gain an additional technique from your fighting style." },
      { name: "Gear Boost", level: 10, description: "Gain an additional gear boost." },
      { name: "Primary Fighting Style Technique", level: 11, description: "Gain an additional technique from your fighting style." },
      { name: "Gear Boost", level: 12, description: "Gain an additional gear boost." },
      { name: "Primary Fighting Style Technique", level: 13, description: "Gain an additional technique from your fighting style." },
      { name: "Gear Boost", level: 14, description: "Gain an additional gear boost." },
      { name: "Primary Fighting Style Technique", level: 15, description: "Gain an additional technique from your fighting style." },
      { name: "Gear Boost", level: 16, description: "Gain an additional gear boost." },
      { name: "Primary Fighting Style Technique", level: 17, description: "Gain an additional technique from your fighting style." },
      { name: "Gear Boost", level: 18, description: "Gain an additional gear boost." },
      { name: "Primary Fighting Style Technique", level: 19, description: "Gain an additional technique from your fighting style." },
      { name: "Primary Fighting Style Technique", level: 20, description: "Gain an additional technique from your fighting style." }
    ],
    lore: "Soldiers are professional warriors trained in all forms of combat. Whether serving in corporate armies, planetary defense forces, mercenary companies, or as freelance combatants, soldiers are masters of warfare who can adapt to any combat situation.\n\nSoldiers choose a fighting style that defines their approach to battle, from heavily armored juggernauts to precision sharpshooters. Their extensive training and weapon proficiencies make them the most versatile and deadly combatants in the Pact Worlds.",
    source: "Core Rulebook"
  },
  {
    id: "technomancer",
    name: "Technomancer",
    description: "Spellcasters who blend magic with technology.",
    keyAbility: "intelligence",
    hp: 5,
    stamina: 5,
    skillRanksPerLevelBase: 4,
    classSkills: ["Computers", "Engineering", "Life Science", "Mysticism", "Physical Science", "Piloting", "Profession", "Sleight of Hand"],
    proficiencies: ["Light Armor", "Basic Melee", "Small Arms"],
    bab: "3/4",
    classAbilities: [
      { name: "Spells", level: 1, description: "You can cast technomancer spells, drawing from the technomancer spell list. You know a limited number of spells and can cast a certain number per day based on your level." },
      { name: "Magic Hack", level: 1, description: "You learn your first magic hack - a special ability that bends the rules of magic or technology. You learn additional hacks as you level up." },
      { name: "Spell Cache", level: 1, description: "You have a spell cache, a special object that stores your magical power. You can use it to cast a spell you know once per day without using a spell slot." }
    ],
    lore: "Technomancers are spellcasters who understand that magic and technology are two sides of the same coin. They blend arcane power with technological devices, creating unique effects that pure mages and hackers cannot duplicate.\n\nTechnomancers work as corporate researchers, starship engineers, military specialists, or independent operators. Their ability to interface with both magical and technological systems makes them uniquely valuable in a universe where both forces are commonplace."
  },
  {
    id: "biohacker",
    name: "Biohacker",
    description: "Scientific experts who use enhanced knowledge of biology to boost allies and hinder enemies.",
    keyAbility: "choice",
    keyAbilityOptions: ["intelligence", "wisdom"],
    hp: 6,
    stamina: 6,
    skillRanksPerLevelBase: 4,
    classSkills: ["Bluff", "Computers", "Culture", "Diplomacy", "Engineering", "Life Science", "Medicine", "Perception", "Physical Science", "Profession", "Sense Motive", "Sleight of Hand"],
    proficiencies: ["Light Armor", "Basic Melee", "Small Arms", "Grenades"],
    bab: "3/4",
    classChoices: {
      id: 'scientific_method_and_field',
      title: 'Scientific Method & Field of Study',
      description: 'Choose your approach to biohacking and your primary field of study.',
      multipleChoices: [
        {
          id: 'scientific_method',
          title: 'Scientific Method',
          description: 'Choose whether you use a studious or instinctive approach to biohacking.',
          options: [
            {
              id: 'studious',
              name: 'Studious (Intelligence)',
              description: 'You meticulously plan your formulas in advance. You can ready biohacks during your daily preparations and use them throughout the day. Gain Skill Focus (Life Science) as a bonus feat. Your key ability is Intelligence.'
            },
            {
              id: 'instinctive',
              name: 'Instinctive (Wisdom)',
              description: 'You improvise your formulas on the fly. You can create biohacks as a move action during combat. Gain Skill Focus (Medicine) as a bonus feat. Your key ability is Wisdom.'
            }
          ]
        },
        {
          id: 'primary_field_of_study',
          title: 'Primary Field of Study',
          description: 'Choose your primary field of study, which determines your booster and inhibitor biohack effects. Once chosen, it cannot be changed.',
          options: [
            {
              id: 'genetics',
              name: 'Genetics',
              description: 'Genetics focuses on inherited characteristics, granting unique boosters and inhibitors. Booster: Blindsense (sound) 60 ft or Blind-Fight feat. Inhibitor: +50% damage from chosen energy type. Breakthrough (Level 5): Gene Therapy - modify genetic structure for beneficial mutations.'
            },
            {
              id: 'immunology',
              name: 'Immunology',
              description: 'Immunology boosts or weakens immune responses. Booster: +4 bonus vs disease/poison, reduce affliction DCs. Inhibitor: Reduce resistances and bonuses vs afflictions. Breakthrough (Level 5): Enhanced immunity against diseases and poisons.'
            }
          ]
        }
      ]
    },
    classAbilities: [
      { name: "Biohacks", level: 1, description: "You prepare unstable compounds called injections that produce effects when applied. Each day after resting 8 hours, spend 10 minutes to prepare a number of injections equal to your class level + your key ability score modifier. This preparation includes choosing specific injections when delivered, and any unused preparations become inert at the end of the day." },
      { name: "Custom Microlab", level: 1, description: "You have created a portable medical and chemical kit that functions as a basic medkit and chemalyzer. You can use it to evaluate conditions, craft solutions, and make injections. It can shape into an item that fits in your hand, armor slot, or augmentation system without occupying that slot." },
      { name: "Injection Expert", level: 1, description: "You are proficient with injection weapons. At level 1 you gain +1 bonus to attack rolls with such weapons, increasing at later levels. Hitting a willing ally with an injection can deliver its effects without dealing damage." },
      { name: "Primary Field of Study", level: 1, description: "Choose your first field of study, which grants a unique counteragent and restorative injection. Once chosen, it cannot be changed." },
      { name: "Scientific Method", level: 1, description: "Your innate scientific approach affects other features: studious (Int-based) or instinctive (Wis-based), impacting how some abilities function." },
      { name: "Injection Expert +1", level: 2, description: "Your bonus to attack rolls with injection weapons increases by +1 (total +2)." },
      { name: "Theorem", level: 2, description: "You formulate your first theorem. You gain a new theorem every 2 levels thereafter. Theorems have prerequisites and unique effects." },
      { name: "Spark of Ingenuity 1/day", level: 3, description: "Once per day, you may alter an injection's effects using your scientific method, granting additional effects." },
      { name: "Weapon Specialization", level: 3, description: "You gain the Weapon Specialization bonus for weapons you are proficient with." },
      { name: "Theorem", level: 4, description: "You learn an additional theorem." },
      { name: "Custom Microlab (Advanced)", level: 5, description: "Your microlab improves, allowing greater range or capability." },
      { name: "Primary Field of Study Breakthrough", level: 5, description: "You gain a special ability from your primary field of study usable like an injection." },
      { name: "Theorem", level: 6, description: "You learn an additional theorem." },
      { name: "Secondary Field of Study", level: 7, description: "Choose a second field of study different from your primary." },
      { name: "Theorem", level: 8, description: "You learn an additional theorem." },
      { name: "Improved Scanner", level: 9, description: "Your microlab's range increases and you treat Life/Physical Science ranks as one higher for crafting." },
      { name: "Spark of Ingenuity 2/day", level: 9, description: "You can use Spark of Ingenuity twice per day." },
      { name: "Theorem", level: 10, description: "You learn an additional theorem." },
      { name: "Secondary Field of Study Breakthrough", level: 11, description: "Gain a special ability from your secondary field of study." },
      { name: "Theorem", level: 12, description: "You learn an additional theorem." },
      { name: "Tertiary Field of Study", level: 13, description: "Choose a third field of study different from primary and secondary." },
      { name: "Theorem", level: 14, description: "You learn an additional theorem." },
      { name: "Spark of Ingenuity 3/day", level: 15, description: "You can use Spark of Ingenuity three times per day." },
      { name: "Theorem", level: 16, description: "You learn an additional theorem." },
      { name: "Expert Scanner", level: 17, description: "Your microlab's range increases again and grants a further bonus to crafting skill ranks." },
      { name: "Theorem", level: 18, description: "You learn an additional theorem." },
      { name: "Resolve Analysis", level: 19, description: "Regain 1 Resolve Point when using Spark of Ingenuity." },
      { name: "Superserum", level: 20, description: "You create powerful temporary bodily modifications as special injections based on your microlab mastery." },
      { name: "Theorem", level: 20, description: "You learn an additional theorem." }
    ],
    lore: "Biohackers are scientific combatants who use their knowledge of biology and chemistry to enhance their allies and debilitate their enemies. Whether they take a studious approach, carefully preparing compounds ahead of time, or an instinctive one, mixing formulas on the fly, biohackers are invaluable members of any team.\n\nBiohackers often work as field medics, researchers, or pharmaceutical specialists. Their ability to quickly analyze biological systems and create targeted compounds makes them sought after by military organizations, medical facilities, and research institutions throughout the Pact Worlds.",
    source: "Character Operations Manual"
  },
  {
    id: "vanguard",
    name: "Vanguard",
    description: "Entropic warriors who manipulate the forces of the universe to protect allies and devastate foes.",
    keyAbility: "constitution",
    hp: 7,
    stamina: 7,
    skillRanksPerLevelBase: 6,
    classSkills: ["Acrobatics", "Athletics", "Culture", "Diplomacy", "Intimidate", "Life Science", "Medicine", "Mysticism", "Perception", "Physical Science", "Profession", "Sense Motive", "Survival"],
    proficiencies: ["Light Armor", "Heavy Armor", "Basic Melee", "Advanced Melee", "Small Arms"],
    bab: "Full",
    classChoices: {
      id: 'vanguard_aspect',
      title: 'Aspect',
      description: 'Choose your aspect - the manifestation of the entropic force you channel.',
      options: [
        {
          id: 'boundary',
          name: 'Boundary',
          description: 'You specialize in creating barriers and controlling space. Your entropic powers manifest as protective fields and spatial manipulation.'
        },
        {
          id: 'cascade',
          name: 'Cascade',
          description: 'You excel at overwhelming your enemies with relentless attacks. Your entropic powers enhance your offensive capabilities and allow you to strike multiple foes.'
        },
        {
          id: 'exergy',
          name: 'Exergy',
          description: 'You manipulate energy itself, converting between different forms. Your entropic powers allow you to absorb and redirect energy attacks.'
        },
        {
          id: 'inversion',
          name: 'Inversion',
          description: 'You turn your enemies\' strengths against them. Your entropic powers allow you to reverse and counter hostile effects.'
        }
      ]
    },
    classAbilities: [
      { name: "Aspect", level: 1, description: "Your aspect determines the nature of your entropic powers and grants you specific abilities related to that aspect's theme." },
      { name: "Entropic Strike", level: 1, description: "Your melee attacks deal additional damage as you channel entropic energy. This damage increases as you level up and is not reduced by energy resistance." },
      { name: "Entropy Shield", level: 1, description: "You gain an entropic shield that reduces damage you take. As a reaction, you can spend Entropy Points to reduce incoming damage from an attack." },
      { name: "Aspect Insight", level: 1, description: "You gain your first aspect insight - a special ability unique to your chosen aspect." }
    ],
    lore: "Vanguards are entropic warriors who channel the fundamental forces of the universe - the ever-present pull toward disorder and decay. They use these cosmic forces to enhance their combat abilities and protect their allies from harm.\n\nVanguards serve as front-line combatants, bodyguards, and cosmic champions. Their unique connection to entropy makes them particularly effective against otherworldly threats and allows them to endure punishment that would fell ordinary warriors."
  },
  {
    id: "witchwarper",
    name: "Witchwarper",
    description: "Reality-bending spellcasters who reshape existence and manipulate alternate timelines.",
    keyAbility: "charisma",
    hp: 6,
    stamina: 6,
    skillRanksPerLevelBase: 4,
    classSkills: ["Bluff", "Culture", "Diplomacy", "Disguise", "Intimidate", "Life Science", "Mysticism", "Perception", "Physical Science", "Profession", "Sense Motive"],
    proficiencies: ["Light Armor", "Basic Melee", "Small Arms"],
    bab: "3/4",
    classAbilities: [
      { name: "Spells", level: 1, description: "You can cast witchwarper spells, drawing from the witchwarper spell list. Your magic alters reality by borrowing elements from alternate realities." },
      { name: "Infinite Worlds", level: 1, description: "You can warp reality as a standard action, creating minor effects by pulling elements from alternate realities. This ability has numerous uses including granting bonuses or imposing penalties." },
      { name: "Paradigm Shift", level: 1, description: "You gain your first paradigm shift - a special ability that allows you to dramatically alter reality. You learn additional paradigm shifts as you level up." }
    ],
    lore: "Witchwarpers are reality-bending spellcasters who access infinite alternate realities. They pull elements from other timelines and dimensions, reshaping the world around them by borrowing from what could have been or might yet be.\n\nWithchwarpers often serve as advisors, probability manipulators, or reality engineers. Their unique perspective on the multiverse and ability to reshape reality makes them both valuable allies and unpredictable wildcards."
  },
  {
    id: "nanocyte",
    name: "Nanocyte",
    description: "Nanite-infused combatants who reshape their body into weapons and armor.",
    keyAbility: "constitution",
    hp: 6,
    stamina: 6,
    skillRanksPerLevelBase: 6,
    classSkills: ["Acrobatics", "Athletics", "Computers", "Engineering", "Life Science", "Medicine", "Perception", "Physical Science", "Piloting", "Profession", "Sleight of Hand", "Stealth"],
    proficiencies: ["Light Armor", "Basic Melee", "Advanced Melee", "Small Arms", "Longarms"],
    bab: "Full",
    classChoices: {
      id: 'primary_and_secondary_faculties',
      title: 'Nanite Faculties',
      description: 'Choose your primary faculty at level 1 and secondary faculty at level 9.',
      multipleChoices: [
        {
          id: 'primary_faculty',
          title: 'Primary Nanite Faculty',
          description: 'Your primary faculty determines your core nanite abilities and grants techniques at levels 1, 5, 9, 13, and 17.',
          options: [
            {
              id: 'absorption',
              name: 'Absorption',
              description: 'Your nanites absorb energy and matter to fuel your abilities.'
            },
            {
              id: 'discorporation',
              name: 'Discorporation',
              description: 'You can disperse your nanites to avoid attacks and move through obstacles.'
            },
            {
              id: 'infestation',
              name: 'Infestation',
              description: 'You can launch your nanites at range to infest and control objects and creatures.'
            },
            {
              id: 'obliteration',
              name: 'Obliteration',
              description: 'You focus your nanites on raw destructive power to disintegrate matter.'
            },
            {
              id: 'redirection',
              name: 'Redirection',
              description: 'You can reform your nanites rapidly for defense and redirect attacks.'
            },
            {
              id: 'regeneration',
              name: 'Regeneration',
              description: 'You use your nanites to heal and sustain yourself with powerful regenerative abilities.'
            },
            {
              id: 'transmutation',
              name: 'Transmutation',
              description: 'Your nanites can alter the fundamental properties of matter.'
            }
          ]
        }
      ]
    },
    classAbilities: [
      { name: "Nanite Array", level: 1, description: "You can form and reconfigure arrays of nanites into weapons, armor, tools, and other equipment as a standard action. The array adapts based on selected faculties and knacks." },
      { name: "Nanite Surge", level: 1, description: "You can overcharge your nanites to gain short-term benefits. You gain a number of nanite surges per day based on level. Surges may interact with knacks and faculty techniques." },
      { name: "Primary Nanite Faculty", level: 1, description: "Choose your primary nanite faculty. Your connection to this faculty determines your specialized nanite techniques." },
      { name: "Primary Faculty Technique", level: 1, description: "You gain your first technique from your primary faculty." },
      { name: "Defensive Dispersal", level: 2, description: "As a reaction when hit, you can disperse nanites to reduce damage taken." },
      { name: "Nanocyte Knack", level: 2, description: "You learn your first nanocyte knack - a special ability that enhances your nanite manipulation." },
      { name: "Cyto-Conversion +1", level: 3, description: "Gain a +1 enhancement bonus to Strength- and Constitution-based checks while using nanites." },
      { name: "Weapon Specialization (Nanocyte)", level: 3, description: "You gain Weapon Specialization as a bonus feat for weapons formed from your nanite array." },
      { name: "Nanocyte Knack", level: 4, description: "You learn an additional nanocyte knack." },
      { name: "Primary Faculty Technique", level: 5, description: "You gain another primary faculty technique." },
      { name: "Nanocyte Knack", level: 6, description: "You learn an additional nanocyte knack." },
      { name: "Manifold Array (2 arrays)", level: 7, description: "You can maintain two nanite arrays simultaneously." },
      { name: "Nanocyte Knack", level: 8, description: "You learn an additional nanocyte knack." },
      { name: "Primary Faculty Technique", level: 9, description: "You gain another primary faculty technique." },
      { name: "Secondary Nanite Faculty", level: 9, description: "Choose your secondary nanite faculty. This grants access to additional techniques from a second faculty." },
      { name: "Secondary Faculty Technique", level: 9, description: "You gain your first technique from your secondary faculty." },
      { name: "Cyto-Conversion +2", level: 10, description: "Your cyto-conversion bonus increases to +2." },
      { name: "Nanocyte Knack", level: 10, description: "You learn an additional nanocyte knack." },
      { name: "Eternal Nanites", level: 11, description: "Your nanites persist even when you are unconscious or dead for a limited time." },
      { name: "Nanocyte Knack", level: 12, description: "You learn an additional nanocyte knack." },
      { name: "Primary Faculty Technique", level: 13, description: "You gain another primary faculty technique." },
      { name: "Secondary Faculty Technique", level: 13, description: "You gain another secondary faculty technique." },
      { name: "Nanocyte Knack", level: 14, description: "You learn an additional nanocyte knack." },
      { name: "Manifold Array (3 arrays)", level: 15, description: "You can maintain three nanite arrays simultaneously." },
      { name: "Cyto-Conversion +3", level: 16, description: "Your cyto-conversion bonus increases to +3." },
      { name: "Nanocyte Knack", level: 16, description: "You learn an additional nanocyte knack." },
      { name: "Primary Faculty Technique", level: 17, description: "You gain another primary faculty technique." },
      { name: "Secondary Faculty Technique", level: 17, description: "You gain another secondary faculty technique." },
      { name: "Nanocyte Knack", level: 18, description: "You learn an additional nanocyte knack." },
      { name: "Living Legion", level: 19, description: "Your nanites act as an extension of your will, enabling powerful swarm-based effects." },
      { name: "Infinite Array", level: 20, description: "You can reconfigure nanite arrays without limit." },
      { name: "Nanocyte Knack", level: 20, description: "You learn an additional nanocyte knack." }
    ],
    lore: "Nanocytes are beings infused with billions of microscopic machines that respond to their will. These nanites can reshape themselves into weapons, armor, tools, and more, making nanocytes incredibly versatile combatants.\n\nNanocytes often work as special operatives, bodyguards, or military specialists. Their ability to adapt their form to any situation makes them valuable assets, though some fear the implications of their nanite-infused bodies.",
    source: "Tech Revolution"
  },
  {
    id: "precog",
    name: "Precog",
    description: "Seers who glimpse the future and use temporal paradoxes to alter fate.",
    keyAbility: "wisdom",
    secondaryKey: "charisma",
    hp: 6,
    stamina: 6,
    skillRanksPerLevelBase: 6,
    classSkills: ["Acrobatics", "Bluff", "Culture", "Diplomacy", "Disguise", "Intimidate", "Medicine", "Mysticism", "Perception", "Profession", "Sense Motive", "Stealth"],
    proficiencies: ["Light Armor", "Basic Melee", "Small Arms"],
    bab: "3/4",
    classChoices: {
      id: 'temporal_anomaly',
      title: 'Temporal Anomaly',
      description: 'Choose your temporal anomaly - the type of paradox you represent and the source of your precognitive powers.',
      options: [
        {
          id: 'anchor',
          name: 'Anchor',
          description: 'You stabilize the timeline around you. Your presence prevents reality from changing. Grants abilities to negate changes and protect allies from temporal effects.'
        },
        {
          id: 'fragmented',
          name: 'Fragmented',
          description: 'You exist in multiple timelines simultaneously. You experience several possible futures at once. Grants abilities to take multiple actions and be in multiple places.'
        },
        {
          id: 'infinite',
          name: 'Infinite',
          description: 'You see infinite possible futures branching before you. Grants enhanced divination and information gathering abilities.'
        },
        {
          id: 'paradox',
          name: 'Paradox',
          description: 'You should not exist, yet you do. Your very presence creates temporal instability. Grants abilities to create beneficial paradoxes and impossible effects.'
        }
      ]
    },
    classAbilities: [
      { name: "Temporal Anomaly", level: 1, description: "You are a living paradox - a temporal anomaly that exists outside the normal flow of time. Your anomaly type determines your special abilities." },
      { name: "Chronomancy", level: 1, description: "You can use chronomancy to manipulate time and probability. You can spend Resolve Points to gain various temporal benefits like rerolls and action manipulation." },
      { name: "Anchor", level: 1, description: "You gain your first anchor - a special ability granted by your temporal anomaly type." },
      { name: "Focal Paradox", level: 2, description: "You learn to create focal paradoxes - powerful temporal effects that alter reality. You gain additional paradoxes as you level up." }
    ],
    lore: "Precogs are temporal anomalies who exist partially outside the normal flow of time. They glimpse possible futures, create paradoxes, and manipulate probability itself. Their powers stem from being living contradictions in the timeline.\n\nPrecogs often work as advisors, probability consultants, or temporal investigators. Their ability to see and alter possible futures makes them invaluable for planning and strategy, though their paradoxical nature can make them unsettling to work with."
  }
];

export const SKILLS = [
  { name: "Acrobatics", ability: "dexterity", trainedOnly: false },
  { name: "Athletics", ability: "strength", trainedOnly: false },
  { name: "Bluff", ability: "charisma", trainedOnly: false },
  { name: "Computers", ability: "intelligence", trainedOnly: true },
  { name: "Culture", ability: "intelligence", trainedOnly: true },
  { name: "Diplomacy", ability: "charisma", trainedOnly: false },
  { name: "Disguise", ability: "charisma", trainedOnly: false },
  { name: "Engineering", ability: "intelligence", trainedOnly: true },
  { name: "Intimidate", ability: "charisma", trainedOnly: false },
  { name: "Life Science", ability: "intelligence", trainedOnly: true },
  { name: "Medicine", ability: "intelligence", trainedOnly: true },
  { name: "Mysticism", ability: "wisdom", trainedOnly: true },
  { name: "Perception", ability: "wisdom", trainedOnly: false },
  { name: "Physical Science", ability: "intelligence", trainedOnly: true },
  { name: "Piloting", ability: "dexterity", trainedOnly: false },
  { name: "Profession", ability: "wisdom", trainedOnly: true },
  { name: "Sense Motive", ability: "wisdom", trainedOnly: false },
  { name: "Sleight of Hand", ability: "dexterity", trainedOnly: true },
  { name: "Stealth", ability: "dexterity", trainedOnly: false },
  { name: "Survival", ability: "wisdom", trainedOnly: false }
];

export const ABILITY_NAMES = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];

export const ABILITY_ABBREVIATIONS = {
  strength: "STR",
  dexterity: "DEX",
  constitution: "CON",
  intelligence: "INT",
  wisdom: "WIS",
  charisma: "CHA"
};

export const calculateModifier = (score) => Math.floor((score - 10) / 2);

// Lookup helpers
export const getRaceById = (id) => RACES.find(r => r.id === id);
export const getClassById = (id) => CLASSES.find(c => c.id === id);
export const getThemeById = (id) => THEMES.find(t => t.id === id);

// Backward compatibility mapping
const RACE_NAME_TO_ID = {};
RACES.forEach(race => {
  RACE_NAME_TO_ID[race.name] = race.id;
  RACE_NAME_TO_ID[race.name.toLowerCase()] = race.id;
});

const CLASS_NAME_TO_ID = {};
CLASSES.forEach(cls => {
  CLASS_NAME_TO_ID[cls.name] = cls.id;
  CLASS_NAME_TO_ID[cls.name.toLowerCase()] = cls.id;
});

const THEME_NAME_TO_ID = {};
THEMES.forEach(theme => {
  THEME_NAME_TO_ID[theme.name] = theme.id;
  THEME_NAME_TO_ID[theme.name.toLowerCase()] = theme.id;
});

export const mapRaceNameToId = (name) => {
  if (!name) return null;
  // Handle subrace notation "Race (Subrace)"
  const baseName = name.split(' (')[0].trim();
  return RACE_NAME_TO_ID[baseName] || RACE_NAME_TO_ID[baseName.toLowerCase()] || null;
};

export const mapClassNameToId = (name) => {
  if (!name) return null;
  return CLASS_NAME_TO_ID[name] || CLASS_NAME_TO_ID[name.toLowerCase()] || null;
};

export const mapThemeNameToId = (name) => {
  if (!name) return null;
  return THEME_NAME_TO_ID[name] || THEME_NAME_TO_ID[name.toLowerCase()] || null;
};

// Helper functions for character classes
export const getTotalLevel = (classes) => {
  if (!classes || !Array.isArray(classes)) return 0;
  return classes.reduce((sum, cls) => sum + cls.level, 0);
};

export const formatClassLevels = (classes) => {
  if (!classes || !Array.isArray(classes) || classes.length === 0) return '';
  
  return classes
    .map(cls => {
      const classData = getClassById(cls.classId);
      return classData ? `${classData.name} ${cls.level}` : `Unknown ${cls.level}`;
    })
    .join(' / ');
};

export const calculateBAB = (classes) => {
  if (!classes || !Array.isArray(classes)) return 0;
  
  let totalBAB = 0;
  classes.forEach(cls => {
    const classData = getClassById(cls.classId);
    if (!classData) return;
    
    // Full BAB = 1 per level, 3/4 BAB = 3/4 per level (rounded down)
    if (classData.bab === 'Full') {
      totalBAB += cls.level;
    } else {
      totalBAB += Math.floor(cls.level * 3 / 4);
    }
  });
  
  return totalBAB;
};

export const calculateSavingThrows = (classes, abilityScores) => {
  if (!classes || !Array.isArray(classes)) {
    return { fortitude: 0, reflex: 0, will: 0 };
  }
  
  let fortBase = 0;
  let reflexBase = 0;
  let willBase = 0;
  
  classes.forEach(cls => {
    const classData = getClassById(cls.classId);
    if (!classData) return;
    
    // Good save progression: 2 + level/2, Poor save progression: level/3
    // Simplified: Full BAB classes get good Fort, others vary
    const level = cls.level;
    
    if (classData.bab === 'Full') {
      // Soldier, Solarian, Vanguard - good Fort
      fortBase += 2 + Math.floor(level / 2);
      reflexBase += Math.floor(level / 3);
      willBase += Math.floor(level / 3);
    } else {
      // Most others - varies, simplified for now
      fortBase += Math.floor(level / 3);
      reflexBase += Math.floor(level / 3);
      willBase += 2 + Math.floor(level / 2);
    }
  });
  
  return {
    fortitude: fortBase + calculateModifier(abilityScores?.constitution || 10),
    reflex: reflexBase + calculateModifier(abilityScores?.dexterity || 10),
    will: willBase + calculateModifier(abilityScores?.wisdom || 10)
  };
};

export const calculateHP = (classes, race) => {
  if (!classes || !Array.isArray(classes) || classes.length === 0) return 0;
  
  const raceHP = race?.hp || 0;
  
  // First class at level 1: full HP
  const firstClass = classes[0];
  const firstClassData = getClassById(firstClass.classId);
  let totalHP = raceHP + (firstClassData?.hp || 0);
  
  // Additional levels in first class
  if (firstClass.level > 1) {
    totalHP += (firstClass.level - 1) * (firstClassData?.hp || 0);
  }
  
  // Levels in other classes
  for (let i = 1; i < classes.length; i++) {
    const cls = classes[i];
    const classData = getClassById(cls.classId);
    totalHP += cls.level * (classData?.hp || 0);
  }
  
  return totalHP;
};

export const calculateStamina = (classes, abilityScores) => {
  if (!classes || !Array.isArray(classes) || classes.length === 0) return 0;
  
  const conMod = calculateModifier(abilityScores?.constitution || 10);
  const totalLevel = getTotalLevel(classes);
  
  // First class at level 1: full stamina
  const firstClass = classes[0];
  const firstClassData = getClassById(firstClass.classId);
  let totalStamina = (firstClassData?.stamina || 0) + conMod;
  
  // Additional levels in first class
  if (firstClass.level > 1) {
    totalStamina += (firstClass.level - 1) * ((firstClassData?.stamina || 0) + conMod);
  }
  
  // Levels in other classes
  for (let i = 1; i < classes.length; i++) {
    const cls = classes[i];
    const classData = getClassById(cls.classId);
    totalStamina += cls.level * ((classData?.stamina || 0) + conMod);
  }
  
  return Math.max(0, totalStamina);
};

export const calculateResolve = (classes, abilityScores) => {
  if (!classes || !Array.isArray(classes) || classes.length === 0) return 1;
  
  const totalLevel = getTotalLevel(classes);
  
  // Get key ability from first/primary class
  const firstClass = classes[0];
  const firstClassData = getClassById(firstClass.classId);
  const keyAbility = firstClassData?.keyAbility || 'charisma';
  const keyMod = calculateModifier(abilityScores?.[keyAbility] || 10);
  
  return Math.max(1, Math.floor(totalLevel / 2) + keyMod);
};

export const POINT_BUY_COSTS = {
  10: 0,
  11: 1,
  12: 2,
  13: 3,
  14: 4,
  15: 5,
  16: 7,
  17: 10,
  18: 13
};

export const TOTAL_POINT_BUY = 10;