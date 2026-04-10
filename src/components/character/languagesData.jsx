export const LANGUAGE_CATEGORIES = {
  common: {
    name: "Common Languages",
    languages: [
      { id: "common", name: "Common" },
      { id: "akitonian", name: "Akitonian" },
      { id: "aklo", name: "Aklo" },
      { id: "arkanen", name: "Arkanen" },
      { id: "brethedan", name: "Brethedan" },
      { id: "castrovelian", name: "Castrovelian" },
      { id: "eoxian", name: "Eoxian" },
      { id: "kasatha", name: "Kasatha" },
      { id: "shirren", name: "Shirren" },
      { id: "triaxian", name: "Triaxian" },
      { id: "vercite", name: "Vercite" },
      { id: "vesk", name: "Vesk" },
      { id: "ysoki", name: "Ysoki" }
    ]
  },
  other: {
    name: "Other Languages",
    languages: [
      { id: "abyssal", name: "Abyssal" },
      { id: "aquan", name: "Aquan" },
      { id: "auran", name: "Auran" },
      { id: "azlanti", name: "Azlanti" },
      { id: "celestial", name: "Celestial" },
      { id: "draconic", name: "Draconic" },
      { id: "drow", name: "Drow" },
      { id: "dwarven", name: "Dwarven" },
      { id: "elven", name: "Elven" },
      { id: "gnome", name: "Gnome" },
      { id: "goblin", name: "Goblin" },
      { id: "halfling", name: "Halfling" },
      { id: "ignan", name: "Ignan" },
      { id: "infernal", name: "Infernal" },
      { id: "kalo", name: "Kalo" },
      { id: "nchaki", name: "Nchaki" },
      { id: "orc", name: "Orc" },
      { id: "sarcesian", name: "Sarcesian" },
      { id: "terran", name: "Terran" },
      { id: "triaxian", name: "Triaxian" },
      { id: "vercite", name: "Vercite" }
    ]
  }
};

export const getAllLanguages = () => {
  const all = [];
  Object.values(LANGUAGE_CATEGORIES).forEach(category => {
    all.push(...category.languages);
  });
  return all;
};

export const getLanguageById = (id) => {
  const all = getAllLanguages();
  return all.find(lang => lang.id === id);
};