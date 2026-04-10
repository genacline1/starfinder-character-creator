// Mystic Class Data for Starfinder 1e
// Source: Starfinder Core Rulebook

export const MYSTIC_CONNECTIONS = [
  {
    id: 'akashic',
    name: 'Akashic',
    theme: 'Knowledge and memory',
    associatedSkills: ['Culture', 'Mysticism'],
    description: 'You draw power from the Akashic Record, the collective memory of existence.',
    connectionPowers: [
      // Powers to be added when full data is provided
      // Level 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
    ],
    transcendence: {
      level: 20,
      name: 'Akashic Transcendence',
      description: 'Transcendence ability to be provided.'
    }
  },
  {
    id: 'battle',
    name: 'Battle',
    theme: 'War and conflict',
    associatedSkills: ['Athletics', 'Intimidate'],
    description: 'You channel divine fury and martial insight.',
    connectionPowers: [
      // Powers to be added when full data is provided
      // Level 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
    ],
    transcendence: {
      level: 20,
      name: 'Battle Transcendence',
      description: 'Transcendence ability to be provided.'
    }
  },
  {
    id: 'connection_to_the_cosmos',
    name: 'Connection to the Cosmos',
    theme: 'Stars and space',
    associatedSkills: ['Physical Science', 'Mysticism'],
    description: 'You draw power from the vast cosmos and celestial phenomena.',
    connectionPowers: [
      // Powers to be added when full data is provided
      // Level 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
    ],
    transcendence: {
      level: 20,
      name: 'Cosmic Transcendence',
      description: 'Transcendence ability to be provided.'
    }
  },
  {
    id: 'crusader',
    name: 'Crusader',
    theme: 'Zeal and righteous cause',
    associatedSkills: ['Diplomacy', 'Intimidate'],
    description: 'You are a champion of a cause or deity, channeling righteous power.',
    connectionPowers: [
      // Powers to be added when full data is provided
      // Level 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
    ],
    transcendence: {
      level: 20,
      name: 'Crusader Transcendence',
      description: 'Transcendence ability to be provided.'
    }
  },
  {
    id: 'healing',
    name: 'Healing',
    theme: 'Restoration and life',
    associatedSkills: ['Life Science', 'Medicine'],
    description: 'You channel positive energy to heal and restore life.',
    connectionPowers: [
      // Powers to be added when full data is provided
      // Level 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
    ],
    transcendence: {
      level: 20,
      name: 'Healing Transcendence',
      description: 'Transcendence ability to be provided.'
    }
  },
  {
    id: 'mindbreaker',
    name: 'Mindbreaker',
    theme: 'Psychic domination',
    associatedSkills: ['Bluff', 'Intimidate'],
    description: 'You specialize in mental assault and psychic control.',
    connectionPowers: [
      // Powers to be added when full data is provided
      // Level 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
    ],
    transcendence: {
      level: 20,
      name: 'Mindbreaker Transcendence',
      description: 'Transcendence ability to be provided.'
    }
  },
  {
    id: 'overlord',
    name: 'Overlord',
    theme: 'Control and authority',
    associatedSkills: ['Intimidate', 'Sense Motive'],
    description: 'You command and dominate through force of will.',
    connectionPowers: [
      // Powers to be added when full data is provided
      // Level 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
    ],
    transcendence: {
      level: 20,
      name: 'Overlord Transcendence',
      description: 'Transcendence ability to be provided.'
    }
  },
  {
    id: 'star_shaman',
    name: 'Star Shaman',
    theme: 'Fate and the void',
    associatedSkills: ['Mysticism', 'Survival'],
    description: 'You draw power from the stars and cosmic destiny.',
    connectionPowers: [
      // Powers to be added when full data is provided
      // Level 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
    ],
    transcendence: {
      level: 20,
      name: 'Star Shaman Transcendence',
      description: 'Transcendence ability to be provided.'
    }
  },
  {
    id: 'xenodruid',
    name: 'Xenodruid',
    theme: 'Alien life and adaptation',
    associatedSkills: ['Life Science', 'Survival'],
    description: 'You connect with alien ecosystems and creatures.',
    connectionPowers: [
      // Powers to be added when full data is provided
      // Level 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
    ],
    transcendence: {
      level: 20,
      name: 'Xenodruid Transcendence',
      description: 'Transcendence ability to be provided.'
    }
  }
];

export function getMysticConnectionById(id) {
  return MYSTIC_CONNECTIONS.find(conn => conn.id === id);
}

export function getConnectionPowersForLevel(connectionId, level) {
  const connection = getMysticConnectionById(connectionId);
  if (!connection) return [];
  
  return connection.connectionPowers.filter(power => power.level <= level);
}