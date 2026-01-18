// Comprehensive Starfinder Equipment Data
// Source: https://www.aonsrd.com/

export const SHIELDS = [
  { id: "tactical_shield_basic", name: "Tactical Shield, Basic", level: 1, price: 250, shieldBonus: "+0/+1", maxDex: null, armorCheckPenalty: 0, bulk: 1, upgrades: 0 },
  { id: "riot_shield_basic", name: "Riot Shield, Basic", level: 1, price: 300, shieldBonus: "+1/+1", maxDex: 3, armorCheckPenalty: -2, bulk: 2, upgrades: 1 },
  { id: "irising_shield_basic", name: "Irising Shield, Basic", level: 2, price: 850, shieldBonus: "+0/+1", maxDex: null, armorCheckPenalty: 0, bulk: "L", upgrades: 0 },
  { id: "dousing_shield_basic", name: "Dousing Shield, Basic", level: 2, price: 900, shieldBonus: "+1/+1", maxDex: 3, armorCheckPenalty: -2, bulk: 2, upgrades: 1 },
  { id: "knights_shield_basic", name: "Knight's Shield, Basic", level: 3, price: 1500, shieldBonus: "+0/+2", maxDex: 4, armorCheckPenalty: -1, bulk: 1, upgrades: 2 },
  { id: "gravity_shield_basic", name: "Gravity Shield, Basic", level: 4, price: 2100, shieldBonus: "+0/+2", maxDex: 4, armorCheckPenalty: -1, bulk: 1, upgrades: 1 },
  { id: "tactical_shield_field", name: "Tactical Shield, Field", level: 5, price: 2500, shieldBonus: "+1/+1", maxDex: null, armorCheckPenalty: 0, bulk: 1, upgrades: 1 },
  { id: "riot_shield_field", name: "Riot Shield, Field", level: 5, price: 3000, shieldBonus: "+1/+2", maxDex: 3, armorCheckPenalty: -2, bulk: 2, upgrades: 2 },
  { id: "tactical_shield_advanced", name: "Tactical Shield, Advanced", level: 10, price: 17250, shieldBonus: "+1/+2", maxDex: null, armorCheckPenalty: 0, bulk: 1, upgrades: 1 },
  { id: "riot_shield_advanced", name: "Riot Shield, Advanced", level: 10, price: 18000, shieldBonus: "+1/+2", maxDex: 4, armorCheckPenalty: -2, bulk: 2, upgrades: 2 },
];

export const TECH_ITEMS = [
  { id: "medpatch", name: "Medpatch", level: 1, price: 50, bulk: "L", category: "Medical Gear" },
  { id: "medkit_basic", name: "Medkit, Basic", level: 1, price: 100, bulk: 1, category: "Medical Gear" },
  { id: "sprayflesh", name: "Sprayflesh", level: 5, price: 440, bulk: "L", category: "Medical Gear" },
  { id: "medkit_advanced", name: "Medkit, Advanced", level: 5, price: 2700, bulk: 1, category: "Medical Gear" },
  { id: "medical_lab", name: "Medical Lab", level: 7, price: 7000, bulk: 50, category: "Medical Gear" },
  { id: "comm_unit_personal", name: "Comm Unit, Personal", level: 1, price: 7, bulk: "L", category: "Comm Units" },
  { id: "comm_unit_system_wide", name: "Comm Unit, System-Wide", level: 6, price: 4000, bulk: 20, category: "Comm Units" },
  { id: "lock_simple", name: "Lock, Simple", level: 1, price: 100, bulk: "L", category: "Locks" },
  { id: "lock_average", name: "Lock, Average", level: 3, price: 1000, bulk: "L", category: "Locks" },
  { id: "lock_good", name: "Lock, Good", level: 6, price: 3600, bulk: "L", category: "Locks" },
  { id: "emergency_beacon", name: "Emergency Beacon", level: 1, price: 100, bulk: "L", category: "Other" },
  { id: "grappler", name: "Grappler", level: 1, price: 35, bulk: "L", category: "Other" },
  { id: "cable_line_titanium", name: "Cable Line, Titanium Alloy", level: 1, price: 5, bulk: "L", category: "Cable Lines" },
  { id: "fire_extinguisher", name: "Fire Extinguisher", level: 1, price: 15, bulk: 1, category: "Other" },
  { id: "flashlight", name: "Flashlight", level: 1, price: 1, bulk: "L", category: "Other" },
  { id: "toolkit_hacking", name: "Hacking Kit", level: 1, price: 20, bulk: "L", category: "Toolkits" },
  { id: "toolkit_engineering", name: "Engineering Kit", level: 1, price: 20, bulk: "L", category: "Toolkits" },
  { id: "toolkit_disguise", name: "Disguise Kit", level: 1, price: 20, bulk: "L", category: "Toolkits" },
  { id: "field_ration", name: "Field Ration", level: 1, price: 1, bulk: "L", category: "Food" },
  { id: "lantern", name: "Lantern", level: 1, price: 10, bulk: "L", category: "Other" },
  { id: "binders", name: "Binders", level: 1, price: 3, bulk: "L", category: "Other" },
];

export const MAGIC_ITEMS = [
  { id: "aeon_stone_clear_spindle", name: "Aeon Stone, Clear Spindle", level: 1, price: 245, bulk: "—", category: "Aeon Stones" },
  { id: "aeon_stone_turquoise_cube", name: "Aeon Stone, Turquoise Cube", level: 1, price: 250, bulk: "—", category: "Aeon Stones" },
  { id: "aeon_stone_iridescent_spindle", name: "Aeon Stone, Iridescent Spindle", level: 2, price: 740, bulk: "—", category: "Aeon Stones" },
  { id: "authority_medallion", name: "Authority Medallion", level: 1, price: 225, bulk: "L", category: "Other" },
  { id: "charge_cloak", name: "Charge Cloak", level: 1, price: 200, bulk: "L", category: "Other" },
  { id: "courage_medallion", name: "Courage Medallion", level: 1, price: 100, bulk: "L", category: "Other" },
  { id: "glory_medallion", name: "Glory Medallion", level: 1, price: 100, bulk: "L", category: "Other" },
  { id: "mk1_serum_healing", name: "Mk 1 Serum of Healing", level: 1, price: 50, bulk: "L", category: "Serums" },
  { id: "mk2_serum_healing", name: "Mk 2 Serum of Healing", level: 5, price: 425, bulk: "L", category: "Serums" },
  { id: "mk3_serum_healing", name: "Mk 3 Serum of Healing", level: 10, price: 2725, bulk: "L", category: "Serums" },
  { id: "spell_gem_0", name: "Spell Gem (0-Level)", level: 1, price: 50, bulk: "—", category: "Spell Gems" },
  { id: "spell_gem_1", name: "Spell Gem (1st-Level)", level: 2, price: 140, bulk: "—", category: "Spell Gems" },
  { id: "spell_gem_2", name: "Spell Gem (2nd-Level)", level: 4, price: 450, bulk: "—", category: "Spell Gems" },
  { id: "spell_gem_3", name: "Spell Gem (3rd-Level)", level: 6, price: 1400, bulk: "—", category: "Spell Gems" },
];

export const HYBRID_ITEMS = [
  { id: "attablossom", name: "Attablossom", level: 1, price: 150, bulk: "L", category: "Other" },
  { id: "cleanliness_circuits", name: "Cleanliness Circuits", level: 1, price: 50, bulk: "—", category: "Other" },
  { id: "dust_goggles", name: "Dust Goggles", level: 1, price: 120, bulk: "—", category: "Other" },
  { id: "instant_ground", name: "Instant Ground", level: 1, price: 25, bulk: 1, category: "Other" },
  { id: "planar_flare", name: "Planar Flare", level: 1, price: 75, bulk: "L", category: "Other" },
  { id: "starstone_compass", name: "Starstone Compass", level: 1, price: 3, bulk: "L", category: "Other" },
  { id: "thermal_regulator", name: "Thermal Regulator", level: 1, price: 150, bulk: "L", category: "Other" },
  { id: "everlength_rope", name: "Everlength Rope", level: 2, price: 820, bulk: 1, category: "Other" },
  { id: "phaserod", name: "Phaserod", level: 2, price: 800, bulk: 1, category: "Other" },
  { id: "anti_gravity_puck_mk1", name: "Anti-Gravity Puck, Mk 1", level: 2, price: 190, bulk: "—", category: "Other" },
  { id: "mindlink_circlet_mk1", name: "Mindlink Circlet, Mk 1", level: 2, price: 1600, bulk: "L", category: "Other" },
];

export const AUGMENTATIONS = [
  { id: "dermal_plating_mk1", name: "Dermal Plating, Mk 1", level: 1, price: 100, bulk: "—", category: "Cybernetics", system: "Skin" },
  { id: "dermal_plating_mk2", name: "Dermal Plating, Mk 2", level: 5, price: 3000, bulk: "—", category: "Cybernetics", system: "Skin" },
  { id: "dermal_plating_mk3", name: "Dermal Plating, Mk 3", level: 10, price: 19100, bulk: "—", category: "Cybernetics", system: "Skin" },
  { id: "prosthetic_limb", name: "Prosthetic Limb", level: 1, price: 100, bulk: "—", category: "Cybernetics", system: "Arm/Leg" },
  { id: "cybernetic_arm", name: "Cybernetic Arm", level: 1, price: 225, bulk: "—", category: "Cybernetics", system: "Arm" },
  { id: "retinal_reflectors", name: "Retinal Reflectors", level: 1, price: 1400, bulk: "—", category: "Cybernetics", system: "Eyes" },
  { id: "skill_implant", name: "Skill Implant", level: 7, price: 7000, bulk: "—", category: "Cybernetics", system: "Brain" },
  { id: "mk1_ability_crystal", name: "Mk 1 Ability Crystal", level: 3, price: 1400, bulk: "—", category: "Personal Upgrades", system: "Any" },
  { id: "mk2_ability_crystal", name: "Mk 2 Ability Crystal", level: 7, price: 6500, bulk: "—", category: "Personal Upgrades", system: "Any" },
  { id: "mk3_ability_crystal", name: "Mk 3 Ability Crystal", level: 12, price: 32900, bulk: "—", category: "Personal Upgrades", system: "Any" },
  { id: "gill_sheath", name: "Gill Sheath", level: 1, price: 95, bulk: "—", category: "Biotech", system: "Throat" },
  { id: "venom_spur", name: "Venom Spur", level: 3, price: 1250, bulk: "—", category: "Biotech", system: "Hand" },
];

export const OTHER_ITEMS = [
  { id: "backpack_consumer", name: "Backpack, Consumer", level: 1, price: 3, bulk: "L", category: "Personal Items" },
  { id: "backpack_industrial", name: "Backpack, Industrial", level: 1, price: 25, bulk: "L", category: "Personal Items" },
  { id: "bedroll", name: "Bedroll", level: 1, price: 1, bulk: "L", category: "Personal Items" },
  { id: "tent_habitat", name: "Tent, Habitat", level: 1, price: 36, bulk: 2, category: "Personal Items" },
  { id: "flashlight", name: "Flashlight", level: 1, price: 1, bulk: "L", category: "Personal Items" },
  { id: "lighter", name: "Lighter", level: 1, price: 1, bulk: "—", category: "Personal Items" },
  { id: "hygiene_kit", name: "Hygiene Kit", level: 1, price: 3, bulk: "L", category: "Personal Items" },
  { id: "travel_clothing", name: "Travel Clothing", level: 1, price: 10, bulk: "L", category: "Personal Items" },
  { id: "formal_clothing", name: "Formal Clothing", level: 1, price: 15, bulk: "L", category: "Personal Items" },
  { id: "rope_titanium", name: "Rope, Titanium (50 ft)", level: 1, price: 10, bulk: "L", category: "Personal Items" },
];

export const SPECIAL_MATERIALS = [
  { id: "adamantine_alloy", name: "Adamantine Alloy", category: "Special Material" },
  { id: "cold_iron", name: "Cold Iron", category: "Special Material" },
  { id: "horacalcum", name: "Horacalcum", category: "Special Material" },
  { id: "inubrix", name: "Inubrix", category: "Special Material" },
  { id: "noqual", name: "Noqual", category: "Special Material" },
  { id: "siccatite", name: "Siccatite", category: "Special Material" },
];

// Combine all equipment for easy searching
export const ALL_EQUIPMENT = {
  shields: SHIELDS,
  techItems: TECH_ITEMS,
  magicItems: MAGIC_ITEMS,
  hybridItems: HYBRID_ITEMS,
  augmentations: AUGMENTATIONS,
  otherItems: OTHER_ITEMS,
  specialMaterials: SPECIAL_MATERIALS,
};

// Get all searchable items (name + price + bulk)
export function getAllSearchableItems() {
  const items = [];
  
  Object.entries(ALL_EQUIPMENT).forEach(([category, categoryItems]) => {
    categoryItems.forEach(item => {
      items.push({
        ...item,
        equipmentCategory: category
      });
    });
  });
  
  return items;
}

// Search across all equipment
export function searchEquipment(query) {
  const lowerQuery = query.toLowerCase();
  return getAllSearchableItems().filter(item => 
    item.name.toLowerCase().includes(lowerQuery) ||
    item.category?.toLowerCase().includes(lowerQuery)
  );
}