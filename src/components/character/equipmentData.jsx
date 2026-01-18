// Starfinder 1st Edition Equipment Data
import { getClassById } from './starfinderData';

export const ARMOR = [
  // Light Armor - Level 1-5
  { id: "stationwear_flight_suit", name: "Stationwear, Flight Suit", level: 1, price: 95, type: "light", eacBonus: 0, kacBonus: 1, maxDexBonus: 6, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 0, bulk: "L" },
  { id: "shobhad_harness_recruit", name: "Shobhad Harness, Recruit", level: 1, price: 150, type: "light", eacBonus: 0, kacBonus: 2, maxDexBonus: 4, armorCheckPenalty: -1, speedAdjustment: 0, upgradeSlots: 0, bulk: 1 },
  { id: "ej_coverall_utility", name: "EJ Coverall, Utility", level: 1, price: 230, type: "light", eacBonus: 1, kacBonus: 1, maxDexBonus: 4, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 2, bulk: "L" },
  { id: "flight_skin_nascent", name: "Flight Skin, Nascent", level: 1, price: 230, type: "light", eacBonus: 0, kacBonus: 2, maxDexBonus: 5, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 1, bulk: "L" },
  { id: "second_skin", name: "Second Skin", level: 1, price: 250, type: "light", eacBonus: 1, kacBonus: 2, maxDexBonus: 5, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 1, bulk: "L" },
  { id: "estex_suit_i", name: "Estex Suit I", level: 1, price: 410, type: "light", eacBonus: 0, kacBonus: 1, maxDexBonus: 5, armorCheckPenalty: -1, speedAdjustment: 0, upgradeSlots: 2, bulk: 1 },
  { id: "kasatha_microcord_i", name: "Kasatha Microcord I", level: 2, price: 460, type: "light", eacBonus: 1, kacBonus: 3, maxDexBonus: 3, armorCheckPenalty: -1, speedAdjustment: 0, upgradeSlots: 0, bulk: 1 },
  { id: "preservers_mantle_i", name: "Preserver's Mantle I", level: 2, price: 520, type: "light", eacBonus: 1, kacBonus: 2, maxDexBonus: 6, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 0, bulk: "L" },
  { id: "zeizerer_diffractor_i", name: "Zeizerer Diffractor I", level: 2, price: 650, type: "light", eacBonus: 2, kacBonus: 2, maxDexBonus: 4, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 0, bulk: "L" },
  { id: "freebooter_armor_i", name: "Freebooter Armor I", level: 2, price: 750, type: "light", eacBonus: 2, kacBonus: 3, maxDexBonus: 4, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 0, bulk: "L" },
  { id: "ej_coverall_industrial", name: "EJ Coverall, Industrial", level: 2, price: 900, type: "light", eacBonus: 2, kacBonus: 2, maxDexBonus: 4, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 2, bulk: "L" },
  { id: "vesk_brigandine_i", name: "Vesk Brigandine I", level: 2, price: 950, type: "light", eacBonus: 2, kacBonus: 2, maxDexBonus: 5, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 1, bulk: "L" },
  { id: "hardened_resin", name: "Hardened Resin", level: 3, price: 1200, type: "light", eacBonus: 2, kacBonus: 3, maxDexBonus: 5, armorCheckPenalty: -1, speedAdjustment: 0, upgradeSlots: 1, bulk: 1 },
  { id: "skitterhide_i", name: "Skitterhide I", level: 3, price: 1200, type: "light", eacBonus: 2, kacBonus: 3, maxDexBonus: 5, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 0, bulk: "L" },
  { id: "carbon_skin_graphite", name: "Carbon Skin, Graphite", level: 3, price: 1220, type: "light", eacBonus: 3, kacBonus: 4, maxDexBonus: 4, armorCheckPenalty: -1, speedAdjustment: 0, upgradeSlots: 1, bulk: 1 },
  { id: "thermskin_i", name: "ThermSkin I", level: 3, price: 1275, type: "light", eacBonus: 2, kacBonus: 3, maxDexBonus: 4, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 0, bulk: "L" },
  { id: "stationwear_casual", name: "Stationwear, Casual", level: 3, price: 1300, type: "light", eacBonus: 1, kacBonus: 2, maxDexBonus: 6, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 0, bulk: "L" },
  { id: "clearweave_i", name: "Clearweave I", level: 3, price: 1350, type: "light", eacBonus: 3, kacBonus: 3, maxDexBonus: 5, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 0, bulk: "L" },
  { id: "devwear_i", name: "Devwear I", level: 3, price: 1400, type: "light", eacBonus: 2, kacBonus: 2, maxDexBonus: 6, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 1, bulk: "L" },
  { id: "regimental_dress_i", name: "Regimental Dress I", level: 3, price: 1450, type: "light", eacBonus: 2, kacBonus: 3, maxDexBonus: 5, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 1, bulk: "L" },
  { id: "devourers_skin_chewing", name: "Devourer's Skin, Chewing", level: 3, price: 1500, type: "light", eacBonus: 2, kacBonus: 4, maxDexBonus: 4, armorCheckPenalty: -1, speedAdjustment: 0, upgradeSlots: 0, bulk: 1 },
  { id: "camping_gear_i", name: "Camping Gear I", level: 4, price: 1850, type: "light", eacBonus: 4, kacBonus: 6, maxDexBonus: 4, armorCheckPenalty: -1, speedAdjustment: 0, upgradeSlots: 0, bulk: 1 },
  { id: "shobhad_harness_veteran", name: "Shobhad Harness, Veteran", level: 4, price: 1850, type: "light", eacBonus: 3, kacBonus: 5, maxDexBonus: 5, armorCheckPenalty: -1, speedAdjustment: 0, upgradeSlots: 1, bulk: 1 },
  { id: "lashunta_tempweave_basic", name: "Lashunta Tempweave, Basic", level: 4, price: 1950, type: "light", eacBonus: 4, kacBonus: 4, maxDexBonus: 5, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 1, bulk: "L" },
  { id: "peacekeepers_aegis_i", name: "Peacekeeper's Aegis I", level: 4, price: 2000, type: "light", eacBonus: 4, kacBonus: 5, maxDexBonus: 4, armorCheckPenalty: -1, speedAdjustment: 0, upgradeSlots: 1, bulk: 1 },
  { id: "acrochor_hide_basic", name: "Acrochor Hide, Basic", level: 4, price: 2100, type: "light", eacBonus: 5, kacBonus: 5, maxDexBonus: 5, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 0, bulk: "L" },
  { id: "autoencoded_veil_i", name: "Autoencoded Veil I", level: 4, price: 2100, type: "light", eacBonus: 4, kacBonus: 4, maxDexBonus: 4, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 1, bulk: 1 },
  { id: "exochitin_slicer", name: "Exochitin, Slicer", level: 4, price: 2100, type: "light", eacBonus: 3, kacBonus: 4, maxDexBonus: 5, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 1, bulk: "L" },
  { id: "grave_mantle_enlisted", name: "Grave Mantle, Enlisted", level: 4, price: 2100, type: "light", eacBonus: 4, kacBonus: 5, maxDexBonus: 4, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 0, bulk: "L" },
  { id: "defrex_hide_basic", name: "Defrex Hide, Basic", level: 4, price: 2250, type: "light", eacBonus: 5, kacBonus: 5, maxDexBonus: 4, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 1, bulk: "L" },
  { id: "stationwear_business", name: "Stationwear, Business", level: 5, price: 2600, type: "light", eacBonus: 2, kacBonus: 3, maxDexBonus: 6, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 0, bulk: "L" },
  { id: "troupesuit_i", name: "Troupesuit I", level: 5, price: 2600, type: "light", eacBonus: 6, kacBonus: 4, maxDexBonus: 5, armorCheckPenalty: -1, speedAdjustment: 0, upgradeSlots: 2, bulk: "L" },
  { id: "vesk_brigandine_ii", name: "Vesk Brigandine II", level: 5, price: 2650, type: "light", eacBonus: 5, kacBonus: 5, maxDexBonus: 5, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 2, bulk: "L" },
  { id: "estex_suit_ii", name: "Estex Suit II", level: 5, price: 2700, type: "light", eacBonus: 4, kacBonus: 5, maxDexBonus: 5, armorCheckPenalty: -1, speedAdjustment: 0, upgradeSlots: 3, bulk: 1 },
  { id: "plexigrass_bodysuit_i", name: "Plexigrass Bodysuit I", level: 5, price: 2700, type: "light", eacBonus: 3, kacBonus: 4, maxDexBonus: 6, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 2, bulk: "L" },
  { id: "d_suit_i", name: "D-Suit I", level: 5, price: 2980, type: "light", eacBonus: 5, kacBonus: 6, maxDexBonus: 5, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 1, bulk: "L" },
  { id: "flight_skin_foray", name: "Flight Skin, Foray", level: 5, price: 3350, type: "light", eacBonus: 3, kacBonus: 5, maxDexBonus: 5, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 3, bulk: "L" },
  { id: "ursikka_carapace_synthetic", name: "Ursikka Carapace, Synthetic", level: 5, price: 4000, type: "light", eacBonus: 5, kacBonus: 6, maxDexBonus: 5, armorCheckPenalty: 0, speedAdjustment: 0, upgradeSlots: 0, bulk: "L" },
  
  // Heavy Armor - Level 1-20+
  { id: "ceremonial_plate_troop", name: "Ceremonial Plate, Troop", level: 1, price: 110, type: "heavy", eacBonus: 1, kacBonus: 3, maxDexBonus: 2, armorCheckPenalty: -3, speedAdjustment: -10, upgradeSlots: 3, bulk: 3 },
  { id: "reinforced_eva_suit_i", name: "Reinforced EVA Suit I", level: 1, price: 200, type: "heavy", eacBonus: 1, kacBonus: 4, maxDexBonus: 1, armorCheckPenalty: -3, speedAdjustment: -5, upgradeSlots: 1, bulk: 2 },
  { id: "golemforged_plating_i", name: "Golemforged Plating I", level: 1, price: 250, type: "heavy", eacBonus: 2, kacBonus: 5, maxDexBonus: 0, armorCheckPenalty: -3, speedAdjustment: -10, upgradeSlots: 0, bulk: 3 },
  { id: "ej_hardsuit_utility", name: "EJ Hardsuit, Utility", level: 1, price: 350, type: "heavy", eacBonus: 2, kacBonus: 3, maxDexBonus: 2, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 2, bulk: 2 },
  { id: "lashunta_ringwear_i", name: "Lashunta Ringwear I", level: 1, price: 415, type: "heavy", eacBonus: 2, kacBonus: 4, maxDexBonus: 2, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 0, bulk: 2 },
  { id: "hidden_soldier_armor", name: "Hidden Soldier Armor", level: 2, price: 465, type: "heavy", eacBonus: 3, kacBonus: 5, maxDexBonus: 2, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 1, bulk: 2 },
  { id: "formian_plate_worker", name: "Formian Plate, Worker", level: 2, price: 480, type: "heavy", eacBonus: 3, kacBonus: 6, maxDexBonus: 1, armorCheckPenalty: -3, speedAdjustment: -5, upgradeSlots: 0, bulk: 3 },
  { id: "aeonaut_suit_traveler", name: "Aeonaut Suit, Traveler", level: 2, price: 525, type: "heavy", eacBonus: 3, kacBonus: 5, maxDexBonus: 2, armorCheckPenalty: -3, speedAdjustment: -5, upgradeSlots: 3, bulk: 3 },
  { id: "iridishell_basic", name: "Iridishell, Basic", level: 2, price: 755, type: "heavy", eacBonus: 3, kacBonus: 6, maxDexBonus: 2, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 0, bulk: 2 },
  { id: "kyokor_plating_i", name: "Kyokor Plating I", level: 2, price: 800, type: "heavy", eacBonus: 2, kacBonus: 4, maxDexBonus: 3, armorCheckPenalty: -1, speedAdjustment: -5, upgradeSlots: 1, bulk: 1 },
  { id: "mining_jack_i", name: "Mining Jack I", level: 2, price: 825, type: "heavy", eacBonus: 4, kacBonus: 6, maxDexBonus: 1, armorCheckPenalty: -3, speedAdjustment: -10, upgradeSlots: 1, bulk: 3 },
  { id: "abadarcorp_celpro_local", name: "AbadarCorp CelPro, Local", level: 2, price: 900, type: "heavy", eacBonus: 2, kacBonus: 4, maxDexBonus: 3, armorCheckPenalty: -1, speedAdjustment: -5, upgradeSlots: 0, bulk: 1 },
  { id: "hellknight_plate_armiger", name: "Hellknight Plate, Armiger", level: 2, price: 980, type: "heavy", eacBonus: 4, kacBonus: 5, maxDexBonus: 2, armorCheckPenalty: -2, speedAdjustment: -10, upgradeSlots: 2, bulk: 3 },
  { id: "thinplate", name: "Thinplate", level: 2, price: 1000, type: "heavy", eacBonus: 4, kacBonus: 6, maxDexBonus: 2, armorCheckPenalty: -3, speedAdjustment: -10, upgradeSlots: 1, bulk: 3 },
  { id: "ej_hardsuit_industrial", name: "EJ Hardsuit, Industrial", level: 2, price: 1200, type: "heavy", eacBonus: 4, kacBonus: 5, maxDexBonus: 2, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 2, bulk: 2 },
  { id: "moraine_mantle_bedrock", name: "Moraine Mantle, Bedrock", level: 3, price: 1100, type: "heavy", eacBonus: 5, kacBonus: 7, maxDexBonus: 1, armorCheckPenalty: -4, speedAdjustment: -10, upgradeSlots: 1, bulk: 3 },
  { id: "defiance_series_squad", name: "Defiance Series, Squad", level: 3, price: 1220, type: "heavy", eacBonus: 5, kacBonus: 8, maxDexBonus: 1, armorCheckPenalty: -4, speedAdjustment: -10, upgradeSlots: 1, bulk: 3 },
  { id: "reinforced_eva_suit_ii", name: "Reinforced EVA Suit II", level: 3, price: 1300, type: "heavy", eacBonus: 4, kacBonus: 8, maxDexBonus: 1, armorCheckPenalty: -3, speedAdjustment: -5, upgradeSlots: 1, bulk: 3 },
  { id: "drift_shell_i", name: "Drift Shell I", level: 3, price: 1400, type: "heavy", eacBonus: 5, kacBonus: 7, maxDexBonus: 1, armorCheckPenalty: -3, speedAdjustment: -10, upgradeSlots: 1, bulk: 3 },
  { id: "golemforged_plating_ii", name: "Golemforged Plating II", level: 3, price: 1610, type: "heavy", eacBonus: 5, kacBonus: 7, maxDexBonus: 2, armorCheckPenalty: -2, speedAdjustment: -10, upgradeSlots: 1, bulk: 3 },
  { id: "aeon_guard_battle_dress_trooper", name: "Aeon Guard, Battle Dress (Trooper)", level: 3, price: 1650, type: "heavy", eacBonus: 5, kacBonus: 7, maxDexBonus: 2, armorCheckPenalty: -3, speedAdjustment: -10, upgradeSlots: 2, bulk: 3 },
  { id: "formian_plate_warrior", name: "Formian Plate, Warrior", level: 4, price: 1830, type: "heavy", eacBonus: 5, kacBonus: 8, maxDexBonus: 1, armorCheckPenalty: -3, speedAdjustment: -5, upgradeSlots: 0, bulk: 3 },
  { id: "kalo_encounter_suit_i", name: "Kalo Encounter Suit I", level: 4, price: 1980, type: "heavy", eacBonus: 7, kacBonus: 8, maxDexBonus: 2, armorCheckPenalty: -3, speedAdjustment: -10, upgradeSlots: 1, bulk: 3 },
  { id: "dendron_armor_ash", name: "Dendron Armor, Ash", level: 4, price: 2100, type: "heavy", eacBonus: 5, kacBonus: 8, maxDexBonus: 3, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 0, bulk: 2 },
  { id: "mageplate_apprentice", name: "Mageplate, Apprentice", level: 4, price: 2150, type: "heavy", eacBonus: 5, kacBonus: 6, maxDexBonus: 2, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 0, bulk: 3 },
  { id: "ceremonial_plate_officer", name: "Ceremonial Plate, Officer", level: 4, price: 2275, type: "heavy", eacBonus: 6, kacBonus: 8, maxDexBonus: 2, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 1, bulk: 2 },
  { id: "formian_hide_basic", name: "Formian Hide, Basic", level: 4, price: 2400, type: "heavy", eacBonus: 7, kacBonus: 8, maxDexBonus: 2, armorCheckPenalty: -3, speedAdjustment: -5, upgradeSlots: 2, bulk: 2 },
  { id: "mining_jack_ii", name: "Mining Jack II", level: 5, price: 2750, type: "heavy", eacBonus: 8, kacBonus: 11, maxDexBonus: 1, armorCheckPenalty: -3, speedAdjustment: -10, upgradeSlots: 2, bulk: 3 },
  { id: "lashunta_ringwear_ii", name: "Lashunta Ringwear II", level: 5, price: 2970, type: "heavy", eacBonus: 8, kacBonus: 10, maxDexBonus: 2, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 1, bulk: 2 },
  { id: "hardplate_basic", name: "Hardplate, Basic", level: 5, price: 3000, type: "heavy", eacBonus: 10, kacBonus: 11, maxDexBonus: 3, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 0, bulk: 2 },
  { id: "enforcer_armor_i", name: "Enforcer Armor I", level: 5, price: 3100, type: "heavy", eacBonus: 9, kacBonus: 10, maxDexBonus: 2, armorCheckPenalty: -4, speedAdjustment: -10, upgradeSlots: 2, bulk: 3 },
  { id: "fossilwrap_i", name: "Fossilwrap I", level: 5, price: 3100, type: "heavy", eacBonus: 9, kacBonus: 9, maxDexBonus: 2, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 1, bulk: 2 },
  { id: "hellknight_plate_lictor", name: "Hellknight Plate, Lictor", level: 5, price: 3300, type: "heavy", eacBonus: 9, kacBonus: 10, maxDexBonus: 2, armorCheckPenalty: -2, speedAdjustment: -10, upgradeSlots: 2, bulk: 3 },
  { id: "ej_hardsuit_advanced", name: "EJ Hardsuit, Advanced", level: 5, price: 3500, type: "heavy", eacBonus: 8, kacBonus: 10, maxDexBonus: 2, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 3, bulk: 2 },
  { id: "aeonaut_suit_explorer", name: "Aeonaut Suit, Explorer", level: 6, price: 3225, type: "heavy", eacBonus: 9, kacBonus: 11, maxDexBonus: 3, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 4, bulk: 3 },
  { id: "vesk_overplate_i", name: "Vesk Overplate I", level: 6, price: 3910, type: "heavy", eacBonus: 9, kacBonus: 11, maxDexBonus: 3, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 1, bulk: 2 },
  { id: "reinforced_eva_suit_iii", name: "Reinforced EVA Suit III", level: 6, price: 4060, type: "heavy", eacBonus: 8, kacBonus: 12, maxDexBonus: 2, armorCheckPenalty: -3, speedAdjustment: -5, upgradeSlots: 2, bulk: 3 },
  { id: "inheritors_grace_i", name: "Inheritor's Grace I", level: 6, price: 4100, type: "heavy", eacBonus: 10, kacBonus: 11, maxDexBonus: 3, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 2, bulk: 2 },
  { id: "golemforged_plating_iii", name: "Golemforged Plating III", level: 7, price: 6000, type: "heavy", eacBonus: 11, kacBonus: 13, maxDexBonus: 3, armorCheckPenalty: -2, speedAdjustment: -10, upgradeSlots: 2, bulk: 3 },
  { id: "kyokor_plating_ii", name: "Kyokor Plating II", level: 7, price: 6250, type: "heavy", eacBonus: 9, kacBonus: 11, maxDexBonus: 4, armorCheckPenalty: -1, speedAdjustment: -5, upgradeSlots: 2, bulk: 1 },
  { id: "ceremonial_plate_commander", name: "Ceremonial Plate, Commander", level: 7, price: 6300, type: "heavy", eacBonus: 11, kacBonus: 13, maxDexBonus: 3, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 2, bulk: 2 },
  { id: "iridishell_advanced", name: "Iridishell, Advanced", level: 7, price: 6500, type: "heavy", eacBonus: 10, kacBonus: 13, maxDexBonus: 3, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 1, bulk: 2 },
  { id: "lashunta_ringwear_iii", name: "Lashunta Ringwear III", level: 8, price: 9000, type: "heavy", eacBonus: 12, kacBonus: 15, maxDexBonus: 3, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 2, bulk: 2 },
  { id: "dendron_armor_cinder", name: "Dendron Armor, Cinder", level: 8, price: 9100, type: "heavy", eacBonus: 11, kacBonus: 14, maxDexBonus: 4, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 1, bulk: 2 },
  { id: "abadarcorp_celpro_interstellar", name: "AbadarCorp CelPro, Interstellar", level: 8, price: 9200, type: "heavy", eacBonus: 10, kacBonus: 12, maxDexBonus: 4, armorCheckPenalty: -1, speedAdjustment: -5, upgradeSlots: 1, bulk: 1 },
  { id: "kalo_encounter_suit_ii", name: "Kalo Encounter Suit II", level: 8, price: 9500, type: "heavy", eacBonus: 13, kacBonus: 14, maxDexBonus: 3, armorCheckPenalty: -3, speedAdjustment: -10, upgradeSlots: 2, bulk: 3 },
  { id: "formian_hide_advanced", name: "Formian Hide, Advanced", level: 8, price: 9750, type: "heavy", eacBonus: 13, kacBonus: 14, maxDexBonus: 3, armorCheckPenalty: -3, speedAdjustment: -5, upgradeSlots: 3, bulk: 2 },
  { id: "mining_jack_iii", name: "Mining Jack III", level: 9, price: 12500, type: "heavy", eacBonus: 14, kacBonus: 18, maxDexBonus: 2, armorCheckPenalty: -3, speedAdjustment: -10, upgradeSlots: 3, bulk: 3 },
  { id: "moraine_mantle_alluvion", name: "Moraine Mantle, Alluvion", level: 9, price: 13000, type: "heavy", eacBonus: 15, kacBonus: 17, maxDexBonus: 2, armorCheckPenalty: -4, speedAdjustment: -10, upgradeSlots: 2, bulk: 3 },
  { id: "drift_shell_ii", name: "Drift Shell II", level: 9, price: 13100, type: "heavy", eacBonus: 15, kacBonus: 17, maxDexBonus: 2, armorCheckPenalty: -3, speedAdjustment: -10, upgradeSlots: 2, bulk: 3 },
  { id: "defiance_series_elite", name: "Defiance Series, Elite", level: 9, price: 13200, type: "heavy", eacBonus: 15, kacBonus: 18, maxDexBonus: 2, armorCheckPenalty: -4, speedAdjustment: -10, upgradeSlots: 2, bulk: 3 },
  { id: "aeon_guard_battle_dress_specialist", name: "Aeon Guard, Battle Dress (Specialist)", level: 9, price: 13300, type: "heavy", eacBonus: 15, kacBonus: 17, maxDexBonus: 3, armorCheckPenalty: -3, speedAdjustment: -10, upgradeSlots: 3, bulk: 3 },
  { id: "reinforced_eva_suit_iv", name: "Reinforced EVA Suit IV", level: 10, price: 16500, type: "heavy", eacBonus: 15, kacBonus: 19, maxDexBonus: 3, armorCheckPenalty: -3, speedAdjustment: -5, upgradeSlots: 3, bulk: 3 },
  { id: "formian_plate_myrmidarch", name: "Formian Plate, Myrmidarch", level: 10, price: 16900, type: "heavy", eacBonus: 15, kacBonus: 19, maxDexBonus: 2, armorCheckPenalty: -3, speedAdjustment: -5, upgradeSlots: 1, bulk: 3 },
  { id: "enforcer_armor_ii", name: "Enforcer Armor II", level: 10, price: 17000, type: "heavy", eacBonus: 16, kacBonus: 17, maxDexBonus: 3, armorCheckPenalty: -4, speedAdjustment: -10, upgradeSlots: 3, bulk: 3 },
  { id: "mageplate_wizard", name: "Mageplate, Wizard", level: 10, price: 17200, type: "heavy", eacBonus: 15, kacBonus: 16, maxDexBonus: 3, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 1, bulk: 3 },
  { id: "fossilwrap_ii", name: "Fossilwrap II", level: 10, price: 18000, type: "heavy", eacBonus: 16, kacBonus: 16, maxDexBonus: 3, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 2, bulk: 2 },
  { id: "vesk_overplate_ii", name: "Vesk Overplate II", level: 11, price: 23500, type: "heavy", eacBonus: 16, kacBonus: 18, maxDexBonus: 4, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 2, bulk: 2 },
  { id: "hardplate_advanced", name: "Hardplate, Advanced", level: 11, price: 24500, type: "heavy", eacBonus: 17, kacBonus: 18, maxDexBonus: 4, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 1, bulk: 2 },
  { id: "hellknight_plate_paralictor", name: "Hellknight Plate, Paralictor", level: 11, price: 25000, type: "heavy", eacBonus: 16, kacBonus: 17, maxDexBonus: 3, armorCheckPenalty: -2, speedAdjustment: -10, upgradeSlots: 3, bulk: 3 },
  { id: "golemforged_plating_iv", name: "Golemforged Plating IV", level: 12, price: 34000, type: "heavy", eacBonus: 18, kacBonus: 20, maxDexBonus: 4, armorCheckPenalty: -2, speedAdjustment: -10, upgradeSlots: 3, bulk: 3 },
  { id: "inheritors_grace_ii", name: "Inheritor's Grace II", level: 12, price: 36000, type: "heavy", eacBonus: 19, kacBonus: 20, maxDexBonus: 4, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 3, bulk: 2 },
  { id: "dendron_armor_blaze", name: "Dendron Armor, Blaze", level: 12, price: 36500, type: "heavy", eacBonus: 17, kacBonus: 20, maxDexBonus: 5, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 2, bulk: 2 },
  { id: "kyokor_plating_iii", name: "Kyokor Plating III", level: 13, price: 45500, type: "heavy", eacBonus: 17, kacBonus: 19, maxDexBonus: 5, armorCheckPenalty: -1, speedAdjustment: -5, upgradeSlots: 3, bulk: 1 },
  { id: "iridishell_superior", name: "Iridishell, Superior", level: 13, price: 46000, type: "heavy", eacBonus: 18, kacBonus: 21, maxDexBonus: 4, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 2, bulk: 2 },
  { id: "lashunta_ringwear_iv", name: "Lashunta Ringwear IV", level: 13, price: 48000, type: "heavy", eacBonus: 19, kacBonus: 22, maxDexBonus: 4, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 3, bulk: 2 },
  { id: "ceremonial_plate_general", name: "Ceremonial Plate, General", level: 13, price: 49000, type: "heavy", eacBonus: 19, kacBonus: 21, maxDexBonus: 4, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 3, bulk: 2 },
  { id: "kalo_encounter_suit_iii", name: "Kalo Encounter Suit III", level: 14, price: 60500, type: "heavy", eacBonus: 20, kacBonus: 21, maxDexBonus: 4, armorCheckPenalty: -3, speedAdjustment: -10, upgradeSlots: 3, bulk: 3 },
  { id: "defiance_series_specialist", name: "Defiance Series, Specialist", level: 14, price: 62000, type: "heavy", eacBonus: 21, kacBonus: 24, maxDexBonus: 3, armorCheckPenalty: -4, speedAdjustment: -10, upgradeSlots: 3, bulk: 3 },
  { id: "abadarcorp_celpro_universal", name: "AbadarCorp CelPro, Universal", level: 14, price: 62500, type: "heavy", eacBonus: 19, kacBonus: 21, maxDexBonus: 5, armorCheckPenalty: -1, speedAdjustment: -5, upgradeSlots: 2, bulk: 1 },
  { id: "formian_hide_elite", name: "Formian Hide, Elite", level: 14, price: 63000, type: "heavy", eacBonus: 20, kacBonus: 21, maxDexBonus: 4, armorCheckPenalty: -3, speedAdjustment: -5, upgradeSlots: 4, bulk: 2 },
  { id: "mining_jack_iv", name: "Mining Jack IV", level: 15, price: 95000, type: "heavy", eacBonus: 22, kacBonus: 26, maxDexBonus: 3, armorCheckPenalty: -3, speedAdjustment: -10, upgradeSlots: 4, bulk: 3 },
  { id: "reinforced_eva_suit_v", name: "Reinforced EVA Suit V", level: 15, price: 97000, type: "heavy", eacBonus: 22, kacBonus: 26, maxDexBonus: 4, armorCheckPenalty: -3, speedAdjustment: -5, upgradeSlots: 4, bulk: 3 },
  { id: "drift_shell_iii", name: "Drift Shell III", level: 15, price: 100000, type: "heavy", eacBonus: 23, kacBonus: 25, maxDexBonus: 3, armorCheckPenalty: -3, speedAdjustment: -10, upgradeSlots: 3, bulk: 3 },
  { id: "moraine_mantle_continental", name: "Moraine Mantle, Continental", level: 15, price: 103000, type: "heavy", eacBonus: 23, kacBonus: 25, maxDexBonus: 3, armorCheckPenalty: -4, speedAdjustment: -10, upgradeSlots: 3, bulk: 3 },
  { id: "aeon_guard_battle_dress_elite", name: "Aeon Guard, Battle Dress (Elite)", level: 15, price: 105000, type: "heavy", eacBonus: 23, kacBonus: 25, maxDexBonus: 4, armorCheckPenalty: -3, speedAdjustment: -10, upgradeSlots: 4, bulk: 3 },
  { id: "vesk_overplate_iii", name: "Vesk Overplate III", level: 16, price: 145000, type: "heavy", eacBonus: 23, kacBonus: 25, maxDexBonus: 5, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 3, bulk: 2 },
  { id: "enforcer_armor_iii", name: "Enforcer Armor III", level: 16, price: 155000, type: "heavy", eacBonus: 24, kacBonus: 25, maxDexBonus: 4, armorCheckPenalty: -4, speedAdjustment: -10, upgradeSlots: 4, bulk: 3 },
  { id: "fossilwrap_iii", name: "Fossilwrap III", level: 16, price: 160000, type: "heavy", eacBonus: 24, kacBonus: 24, maxDexBonus: 4, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 3, bulk: 2 },
  { id: "hardplate_superior", name: "Hardplate, Superior", level: 17, price: 230000, type: "heavy", eacBonus: 25, kacBonus: 26, maxDexBonus: 5, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 2, bulk: 2 },
  { id: "golemforged_plating_v", name: "Golemforged Plating V", level: 17, price: 240000, type: "heavy", eacBonus: 25, kacBonus: 27, maxDexBonus: 5, armorCheckPenalty: -2, speedAdjustment: -10, upgradeSlots: 4, bulk: 3 },
  { id: "mageplate_archmage", name: "Mageplate, Archmage", level: 17, price: 248000, type: "heavy", eacBonus: 24, kacBonus: 25, maxDexBonus: 4, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 2, bulk: 3 },
  { id: "hellknight_plate_master", name: "Hellknight Plate, Master", level: 17, price: 250000, type: "heavy", eacBonus: 24, kacBonus: 25, maxDexBonus: 4, armorCheckPenalty: -2, speedAdjustment: -10, upgradeSlots: 4, bulk: 3 },
  { id: "dendron_armor_inferno", name: "Dendron Armor, Inferno", level: 18, price: 325000, type: "heavy", eacBonus: 24, kacBonus: 27, maxDexBonus: 6, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 3, bulk: 2 },
  { id: "lashunta_ringwear_v", name: "Lashunta Ringwear V", level: 18, price: 350000, type: "heavy", eacBonus: 26, kacBonus: 29, maxDexBonus: 5, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 4, bulk: 2 },
  { id: "inheritors_grace_iii", name: "Inheritor's Grace III", level: 18, price: 360000, type: "heavy", eacBonus: 27, kacBonus: 28, maxDexBonus: 5, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 4, bulk: 2 },
  { id: "ceremonial_plate_marshal", name: "Ceremonial Plate, Marshal", level: 19, price: 525000, type: "heavy", eacBonus: 27, kacBonus: 29, maxDexBonus: 5, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 4, bulk: 2 },
  { id: "kyokor_plating_iv", name: "Kyokor Plating IV", level: 19, price: 545000, type: "heavy", eacBonus: 26, kacBonus: 28, maxDexBonus: 6, armorCheckPenalty: -1, speedAdjustment: -5, upgradeSlots: 4, bulk: 1 },
  { id: "kalo_encounter_suit_iv", name: "Kalo Encounter Suit IV", level: 19, price: 550000, type: "heavy", eacBonus: 28, kacBonus: 29, maxDexBonus: 5, armorCheckPenalty: -3, speedAdjustment: -10, upgradeSlots: 4, bulk: 3 },
  { id: "iridishell_pinnacle", name: "Iridishell, Pinnacle", level: 19, price: 560000, type: "heavy", eacBonus: 27, kacBonus: 30, maxDexBonus: 5, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 3, bulk: 2 },
  { id: "formian_hide_paragon", name: "Formian Hide, Paragon", level: 19, price: 565000, type: "heavy", eacBonus: 28, kacBonus: 29, maxDexBonus: 5, armorCheckPenalty: -3, speedAdjustment: -5, upgradeSlots: 5, bulk: 2 },
  { id: "defiance_series_commander", name: "Defiance Series, Commander", level: 20, price: 825000, type: "heavy", eacBonus: 29, kacBonus: 32, maxDexBonus: 4, armorCheckPenalty: -4, speedAdjustment: -10, upgradeSlots: 4, bulk: 3 },
  { id: "vesk_overplate_iv", name: "Vesk Overplate IV", level: 20, price: 825000, type: "heavy", eacBonus: 30, kacBonus: 32, maxDexBonus: 6, armorCheckPenalty: -2, speedAdjustment: -5, upgradeSlots: 4, bulk: 2 },
  { id: "golemforged_plating_vi", name: "Golemforged Plating VI", level: 20, price: 845000, type: "heavy", eacBonus: 32, kacBonus: 34, maxDexBonus: 6, armorCheckPenalty: -2, speedAdjustment: -10, upgradeSlots: 5, bulk: 3 },
  
  // Powered Armor - Level 2-20
  { id: "salvage_chassis", name: "Salvage Chassis", level: 2, price: 850, type: "powered", eacBonus: 4, kacBonus: 7, maxDexBonus: 2, armorCheckPenalty: -2, speedAdjustment: 0, upgradeSlots: 1, bulk: 20 },
  { id: "goblin_battle_jack", name: "Goblin Battle Jack", level: 2, price: 950, type: "powered", eacBonus: 5, kacBonus: 8, maxDexBonus: 2, armorCheckPenalty: -3, speedAdjustment: 0, upgradeSlots: 2, bulk: 20 },
  { id: "cargo_lifter", name: "Cargo Lifter", level: 4, price: 2150, type: "powered", eacBonus: 7, kacBonus: 10, maxDexBonus: 2, armorCheckPenalty: -2, speedAdjustment: 0, upgradeSlots: 2, bulk: 25 },
  { id: "encounter_suit", name: "Encounter Suit", level: 4, price: 2800, type: "powered", eacBonus: 8, kacBonus: 11, maxDexBonus: 3, armorCheckPenalty: -1, speedAdjustment: 0, upgradeSlots: 2, bulk: 20 },
  { id: "scrappers_rig", name: "Scrapper's Rig", level: 4, price: 2150, type: "powered", eacBonus: 7, kacBonus: 10, maxDexBonus: 2, armorCheckPenalty: -2, speedAdjustment: 0, upgradeSlots: 3, bulk: 25 },
  { id: "absorptive_shell", name: "Absorptive Shell", level: 5, price: 3375, type: "powered", eacBonus: 9, kacBonus: 12, maxDexBonus: 3, armorCheckPenalty: -1, speedAdjustment: 0, upgradeSlots: 2, bulk: 20 },
  { id: "battle_harness", name: "Battle Harness", level: 5, price: 3450, type: "powered", eacBonus: 9, kacBonus: 12, maxDexBonus: 3, armorCheckPenalty: -2, speedAdjustment: 0, upgradeSlots: 3, bulk: 25 },
  { id: "empire_aggressor", name: "Empire Aggressor", level: 5, price: 3025, type: "powered", eacBonus: 8, kacBonus: 11, maxDexBonus: 2, armorCheckPenalty: -2, speedAdjustment: 0, upgradeSlots: 2, bulk: 25 },
  { id: "sci_shield_unit", name: "Sci-shield Unit", level: 5, price: 3450, type: "powered", eacBonus: 10, kacBonus: 13, maxDexBonus: 3, armorCheckPenalty: -1, speedAdjustment: 0, upgradeSlots: 3, bulk: 20 }
];

export const WEAPONS = {
  melee: [
    // Basic Melee - Level 1-5
    { id: "club", name: "Club", level: 0, price: 0, damage: "1d6 B", critical: "—", bulk: "L", proficiency: "basic_melee", special: ["Analog", "Archaic", "Thrown (10 ft.)"] },
    { id: "baton_tactical", name: "Baton, Tactical", level: 1, price: 90, damage: "1d4 B", critical: "—", bulk: "L", proficiency: "basic_melee", special: ["Analog", "Operative", "Thrown (20 ft.)"] },
    { id: "battleglove_cestus", name: "Battleglove, Cestus", level: 1, price: 100, damage: "1d4 B", critical: "—", bulk: "L", proficiency: "basic_melee", special: ["Analog"] },
    { id: "handaxe_basic", name: "Handaxe, Basic", level: 1, price: 90, damage: "1d4 S", critical: "—", bulk: "L", proficiency: "basic_melee", special: ["Analog", "Thrown (20 ft.)"] },
    { id: "knife_survival", name: "Knife, Survival", level: 1, price: 95, damage: "1d4 S", critical: "—", bulk: "L", proficiency: "basic_melee", special: ["Analog", "Operative", "Thrown (20 ft.)"] },
    { id: "shillelagh_destroyer", name: "Shillelagh, Destroyer", level: 1, price: 200, damage: "1d4 B", critical: "—", bulk: 1, proficiency: "basic_melee", special: ["Analog", "Reposition"] },
    { id: "sword_cane_tactical", name: "Sword Cane, Tactical", level: 1, price: 250, damage: "1d4 P", critical: "Bleed 1d3", bulk: "L", proficiency: "basic_melee", special: ["Analog", "Operative"] },
    { id: "syringe_stick_standard", name: "Syringe Stick, Standard", level: 1, price: 125, damage: "1d3 P", critical: "—", bulk: "L", proficiency: "basic_melee", special: ["Conceal", "Injection", "Operative"] },
    { id: "bone_cestus_austere", name: "Bone Cestus, Austere", level: 2, price: 600, damage: "1d6 P", critical: "Bleed 1d4", bulk: "L", proficiency: "basic_melee", special: ["Analog"] },
    { id: "dueling_sword_tactical", name: "Dueling Sword, Tactical", level: 2, price: 475, damage: "1d6 S", critical: "—", bulk: "L", proficiency: "basic_melee", special: ["Analog"] },
    { id: "electric_prod_jolt", name: "Electric Prod, Jolt", level: 2, price: 900, damage: "1d4 E", critical: "Stunned", bulk: 1, proficiency: "basic_melee", special: ["Nonlethal", "Powered (capacity 20, usage 1)"] },
    { id: "sap_light", name: "Sap, Light", level: 2, price: 450, damage: "1d4 B", critical: "—", bulk: "L", proficiency: "basic_melee", special: ["Analog", "Nonlethal", "Operative"] },
    { id: "sledge", name: "Sledge", level: 3, price: 1050, damage: "1d8 B", critical: "—", bulk: 1, proficiency: "basic_melee", special: ["Analog", "Unwieldy"] },
    { id: "switchblade_tactical", name: "Switchblade, Tactical", level: 3, price: 1300, damage: "1d4 S", critical: "—", bulk: "L", proficiency: "basic_melee", special: ["Analog", "Conceal", "Operative"] },
    { id: "inferno_knife", name: "Inferno Knife", level: 4, price: 2100, damage: "1d4 S", critical: "Burn 1d6", bulk: "L", proficiency: "basic_melee", special: ["Analog", "Operative"] },
    { id: "knife_tactical", name: "Knife, Tactical", level: 1, price: 300, damage: "1d4 S", critical: "—", bulk: "L", proficiency: "basic_melee", special: ["Operative"] },

    // Advanced Melee - Level 1-5
    { id: "disposal_blade_tactical", name: "Disposal Blade, Tactical", level: 1, price: 300, damage: "1d6 S", critical: "Wound", bulk: 1, proficiency: "advanced_melee", special: ["Powered (capacity 20, usage 1)"] },
    { id: "hammer_assault", name: "Hammer, Assault", level: 1, price: 95, damage: "1d6 B", critical: "—", bulk: 1, proficiency: "advanced_melee", special: ["Analog"] },
    { id: "longsword_standard", name: "Longsword, Standard", level: 1, price: 375, damage: "1d8 S", critical: "—", bulk: 1, proficiency: "advanced_melee", special: ["Analog"] },
    { id: "manica_tactical", name: "Manica, Tactical", level: 1, price: 360, damage: "1d8 B", critical: "Push (5 ft.)", bulk: 1, proficiency: "advanced_melee", special: ["Analog", "Block", "Unwieldy"] },
    { id: "starknife_tactical", name: "Starknife, Tactical", level: 1, price: 110, damage: "1d4 P", critical: "—", bulk: "L", proficiency: "advanced_melee", special: ["Analog", "Thrown (20 ft.)"] },
    { id: "taclash_standard", name: "Taclash, Standard", level: 1, price: 240, damage: "1d4 S", critical: "—", bulk: "L", proficiency: "advanced_melee", special: ["Analog", "Disarm", "Nonlethal", "Reach", "Trip"] },
    { id: "injection_glove", name: "Injection Glove", level: 2, price: 490, damage: "1d4 P", critical: "Injection DC +2", bulk: "L", proficiency: "advanced_melee", special: ["Analog", "Injection"] },
    { id: "gnome_flickmace_chert", name: "Gnome Flickmace, Chert", level: 2, price: 700, damage: "1d6 P", critical: "—", bulk: "L", proficiency: "advanced_melee", special: ["Powered (capacity 20, usage 1)", "Reach"] },
    { id: "needler_estoc_standard", name: "Needler Estoc, Standard", level: 2, price: 175, damage: "1d6 P", critical: "Injection DC +2", bulk: "L", proficiency: "advanced_melee", special: ["Injection"] },
    { id: "hook_sword", name: "Hook Sword", level: 3, price: 1420, damage: "1d8 S", critical: "Bleed 1d4", bulk: "L", proficiency: "advanced_melee", special: ["Analog", "Trip"] },
    { id: "snap_whip_thunderstrike", name: "Snap Whip, Thunderstrike", level: 3, price: 1600, damage: "1d6 So", critical: "Staggered", bulk: 1, proficiency: "advanced_melee", special: ["Analog", "Penetrating", "Reach", "Sunder"] },
    { id: "spectra_blade_iridia", name: "Spectra Blade, Iridia", level: 3, price: 1500, damage: "1d6 S", critical: "—", bulk: 1, proficiency: "advanced_melee", special: ["Hybrid", "Operative", "Penetrating"] },
    { id: "talon_drone", name: "Talon, Drone", level: 4, price: 2400, damage: "1d6 A or S", critical: "Corrode 1d6", bulk: "L", proficiency: "advanced_melee", special: ["Modal", "Powered (capacity 20, usage 1)"] },
    { id: "warfan", name: "Warfan", level: 5, price: 3070, damage: "1d8 S", critical: "—", bulk: "L", proficiency: "advanced_melee", special: ["Analog", "Block"] },
    { id: "battleaxe_tactical", name: "Battleaxe, Tactical", level: 5, price: 2650, damage: "1d8 S", critical: "Wound", bulk: 1, proficiency: "advanced_melee", special: ["Analog"] }
  ],
  ranged: [
    // Small Arms - Level 1-5
    { id: "needler_pistol", name: "Needler Pistol", level: 1, price: 105, damage: "1d4 P", range: 30, critical: "Injection DC +2", capacity: "6 darts", usage: 1, bulk: "L", proficiency: "small_arms", special: ["Analog", "Injection"] },
    { id: "singing_stinger", name: "Singing Stinger", level: 1, price: 200, damage: "—", range: 20, critical: "Injection +2", capacity: "1 dart", usage: 1, bulk: 1, proficiency: "small_arms", special: ["Analog", "Breakdown", "Injection", "Professional (musician)", "Subtle"] },
    { id: "caustoject_liquidator", name: "Caustoject, Liquidator", level: 1, price: 225, damage: "1d4 A", range: 30, critical: "Injection DC +2", capacity: "20 charges", usage: 2, bulk: "L", proficiency: "small_arms", special: ["Injection"] },
    { id: "cestus_pistol_tactical", name: "Cestus Pistol, Tactical", level: 1, price: 250, damage: "1d4 P", range: "Reach", critical: "—", capacity: "1 round", usage: 1, bulk: "—", proficiency: "small_arms", special: ["Conceal", "Punch Gun"] },
    { id: "gnome_scout_gun_tactical", name: "Gnome Scout Gun, Tactical", level: 1, price: 300, damage: "1d4 F or C", range: 30, critical: "—", capacity: "20 charges", usage: 1, bulk: "L", proficiency: "small_arms", special: ["Modal (Cryo)"] },
    { id: "needler_pistol_tactical", name: "Needler Pistol, Tactical", level: 1, price: 175, damage: "1d4 P", range: 40, critical: "Injection DC +2", capacity: "8 darts", usage: 1, bulk: 1, proficiency: "small_arms", special: ["Analog", "Injection"] },
    { id: "azimuth_laser_pistol", name: "Azimuth Laser Pistol", level: 1, price: 350, damage: "1d4 F", range: 80, critical: "Burn 1d4", capacity: "20 charges", usage: 1, bulk: "L", proficiency: "small_arms", special: [], ammoCapacity: 20, reload: "1 battery" },
    { id: "pulsecaster_pistol", name: "Pulsecaster Pistol", level: 1, price: 250, damage: "1d4 E", range: 30, critical: "—", capacity: "20 charges", usage: 2, bulk: "L", proficiency: "small_arms", special: ["Nonlethal"] },
    { id: "tactical_semi_auto_pistol", name: "Tactical Semi-Auto Pistol", level: 1, price: 260, damage: "1d6 P", range: 30, critical: "—", capacity: "9 rounds", usage: 1, bulk: "L", proficiency: "small_arms", special: ["Analog"], ammoCapacity: 9, reload: "1 magazine" },
    { id: "arc_pistol_static", name: "Arc Pistol, Static", level: 2, price: 750, damage: "1d6 E", range: 50, critical: "Arc 2", capacity: "20 charges", usage: 2, bulk: "L", proficiency: "small_arms", special: [] },
    { id: "glove_needler_tactical", name: "Glove Needler, Tactical", level: 2, price: 560, damage: "1d4 A", range: "Reach", critical: "Injection DC +2", capacity: "1 round", usage: 1, bulk: "—", proficiency: "small_arms", special: ["Conceal", "Injection", "Punch Gun"] },
    { id: "spelldarter_standard", name: "Spelldarter, Standard", level: 2, price: 800, damage: "1d4 P", range: 40, critical: "—", capacity: "6 darts", usage: 1, bulk: "L", proficiency: "small_arms", special: ["Force", "Hybrid"] },
    { id: "graviton_pistol_linear", name: "Graviton Pistol, Linear", level: 3, price: 1450, damage: "—", range: 60, critical: "Knockdown", capacity: "20 charges", usage: 4, bulk: 2, proficiency: "small_arms", special: ["Gravitation (10 ft.)"] },
    { id: "infernian_ifrit_class", name: "Infernian, Ifrit-Class", level: 3, price: 1400, damage: "1d6 F", range: 50, critical: "Arc 1d4", capacity: "4 flares", usage: 1, bulk: "L", proficiency: "small_arms", special: [] },

    // Longarms - Level 1-5
    { id: "needler_rifle", name: "Needler Rifle", level: 1, price: 110, damage: "1d6 P", range: 60, critical: "Injection DC +2", capacity: "12 darts", usage: 1, bulk: 1, proficiency: "longarms", special: ["Analog", "Injection"] },
    { id: "caustolance_liquidator", name: "Caustolance, Liquidator", level: 1, price: 400, damage: "1d6 A", range: 60, critical: "Injection DC +2", capacity: "20 charges", usage: 1, bulk: 1, proficiency: "longarms", special: ["Injection"] },
    { id: "needler_rifle_tactical", name: "Needler Rifle, Tactical", level: 1, price: 200, damage: "1d6 P", range: 70, critical: "Injection DC +2", capacity: "14 darts", usage: 1, bulk: 1, proficiency: "longarms", special: ["Analog", "Injection"] },
    { id: "rackarack_pulse", name: "Rackarack, Pulse", level: 1, price: 205, damage: "1d6 So", range: 60, critical: "Nuisance", capacity: "20 charges", usage: 2, bulk: 1, proficiency: "longarms", special: [] },
    { id: "laser_rifle_azimuth", name: "Laser Rifle, Azimuth", level: 1, price: 425, damage: "1d8 F", range: 120, critical: "Burn 1d6", capacity: "20 charges", usage: 1, bulk: 1, proficiency: "longarms", special: [], ammoCapacity: 20, reload: "1 battery" },
    { id: "autotarget_rifle", name: "Autotarget Rifle", level: 2, price: 755, damage: "1d6 P", range: 60, critical: "—", capacity: "10 rounds", usage: 1, bulk: 2, proficiency: "longarms", special: ["Analog", "Automatic"] },
    { id: "meduza_rifle_stinger", name: "Meduza Rifle, Stinger", level: 2, price: 720, damage: "1d8 A & S", range: 40, critical: "Bind", capacity: "20 charges", usage: 2, bulk: 1, proficiency: "longarms", special: ["Analog", "Living"] },
    { id: "formian_venomcaster_tactical", name: "Formian Venomcaster, Tactical", level: 3, price: 1325, damage: "1d8 P", range: 40, critical: "Injection DC +2", capacity: "6 darts", usage: 1, bulk: 1, proficiency: "longarms", special: ["Analog", "Injection", "Unwieldy"] },

    // Heavy Weapons - Level 1-5
    { id: "nil_grenade_launcher_merc", name: "NIL Grenade Launcher, Merc", level: 1, price: 280, damage: "By grenade", range: 60, critical: "—", capacity: "6 grenades", usage: 1, bulk: 2, proficiency: "heavy", special: [] },
    { id: "molecular_borer_utility", name: "Molecular Borer, Utility", level: 2, price: 800, damage: "2d4 C or F", range: 40, critical: "—", capacity: "20 charges", usage: 2, bulk: 2, proficiency: "heavy", special: ["Modal (Cryo)", "Professional (miner)", "Shatter", "Unwieldy"] },
    { id: "psychic_wave_cannon_i", name: "Psychic-Wave Cannon I", level: 2, price: 1100, damage: "1d6", range: 30, critical: "Demoralize", capacity: "20 charges", usage: 4, bulk: 2, proficiency: "heavy", special: ["Blast", "Living", "Mind-Affecting", "Unwieldy"] },
    { id: "rubbish_cannon_light", name: "Rubbish Cannon, Light", level: 2, price: 750, damage: "1d8 B", range: 30, critical: "Knockdown", capacity: "Special", usage: "—", bulk: 2, proficiency: "heavy", special: ["Blast"] },
    { id: "minelayer_merc", name: "Minelayer, Merc", level: 3, price: 1470, damage: "—", range: "—", critical: "—", capacity: "8 grenades", usage: 1, bulk: 2, proficiency: "heavy", special: ["Mine"] },
    { id: "acid_lancer_corroder", name: "Acid Lancer, Corroder-Class", level: 4, price: 2000, damage: "2d4 A", range: 30, critical: "Corrode 1d4", capacity: "20 caustrol", usage: 4, bulk: 2, proficiency: "heavy", special: ["Analog", "Boost 1d4", "Line", "Unwieldy"] },
    { id: "desperation_cannon_rage", name: "Desperation Cannon, Rage-Bringer", level: 4, price: 2250, damage: "1d12 E & F", range: 100, critical: "Nuisance", capacity: "40 charges", usage: 5, bulk: 2, proficiency: "heavy", special: ["Bright", "Penetrating", "Unwieldy"] },
    { id: "electrogel_jet_sheet", name: "Electrogel Jet, Sheet", level: 4, price: 1880, damage: "1d8 A & E", range: 30, critical: "Staggered", capacity: "20 caustrol", usage: 4, bulk: 2, proficiency: "heavy", special: ["Line", "Living", "Mire 1 round", "Regrowth", "Stun", "Unwieldy"] },
    { id: "sclerite_harpooner_lure", name: "Sclerite Harpooner, Lure", level: 4, price: 2000, damage: "2d6 P", range: 90, critical: "Embed 1d6", capacity: "25 sclerites", usage: 5, bulk: 2, proficiency: "heavy", special: ["Unwieldy"] },
    { id: "psychic_wave_cannon_ii", name: "Psychic-Wave Cannon II", level: 5, price: 3520, damage: "1d12", range: 40, critical: "Demoralize", capacity: "20 charges", usage: 4, bulk: 2, proficiency: "heavy", special: ["Blast", "Living", "Mind-Affecting", "Unwieldy"] },

    // Sniper Weapons - Level 1-5
    { id: "wraith_sting_rifle_yellow_jacket", name: "Wraith-Sting Rifle, Yellow Jacket", level: 1, price: 375, damage: "—", range: 40, critical: "Injection DC +2", capacity: "1 dart", usage: 1, bulk: 1, proficiency: "sniper", special: ["Injection", "Sniper (250 ft.)", "Subtle", "Unwieldy"] },
    { id: "philosophers_sting_lead", name: "Philosopher's Sting, Lead", level: 2, price: 950, damage: "2d6 B", range: 80, critical: "Staggered", capacity: "20 charges", usage: 5, bulk: 1, proficiency: "sniper", special: ["Force", "Penetrating", "Sniper (500 ft.)", "Unwieldy"] },
    { id: "rift_rifle_pinhole", name: "Rift Rifle, Pinhole", level: 4, price: 2180, damage: "1d10 S", range: 60, critical: "Corrode 1d6", capacity: "20 charges", usage: 4, bulk: 2, proficiency: "sniper", special: ["Force", "Sniper (250 ft.)", "Unwieldy"] },
    { id: "kin_killer_tactical", name: "Kin-Killer, Tactical", level: 5, price: 3010, damage: "1d10 P", range: 80, critical: "Enfeeble", capacity: "3 rounds", usage: 1, bulk: 2, proficiency: "sniper", special: ["Sniper (250 ft.)", "Unwieldy"] },
    { id: "wraith_sting_rifle_wasp", name: "Wraith-Sting Rifle, Wasp", level: 5, price: 2980, damage: "—", range: 60, critical: "Injection DC +2", capacity: "1 dart", usage: 1, bulk: 1, proficiency: "sniper", special: ["Injection", "Sniper (500 ft.)", "Subtle", "Unwieldy"] }
  ]
};

export const GEAR = [];

export function getArmorById(id) {
  return ARMOR.find(a => a.id === id);
}

export function getWeaponById(id) {
  return [...WEAPONS.melee, ...WEAPONS.ranged].find(w => w.id === id);
}

export function formatWeaponDamage(weapon, weaponType, character) {
  const abilityScores = character.abilityScores || {};
  const classes = character.classes || [];
  
  const isMelee = weaponType === 'melee';
  const abilityMod = isMelee 
    ? Math.floor((abilityScores.strength - 10) / 2)
    : Math.floor((abilityScores.dexterity - 10) / 2);
  
  let bab = 0;
  classes.forEach(cls => {
    const classData = getClassById(cls.classId);
    if (classData?.bab === 'Full') {
      bab += cls.level;
    } else {
      bab += Math.floor(cls.level * 3 / 4);
    }
  });
  
  const toHit = bab + abilityMod;
  const damageBonus = isMelee ? abilityMod : 0;
  
  return {
    toHit: toHit >= 0 ? `+${toHit}` : `${toHit}`,
    damage: weapon.damage,
    damageBonus: damageBonus !== 0 ? (damageBonus >= 0 ? `+${damageBonus}` : `${damageBonus}`) : null
  };
}