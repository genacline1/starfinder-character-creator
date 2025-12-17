// rules/race.js
// Minimal helpers for applying racial ability adjustments and level-1 HP.

import { abilityMod } from "./progressions.js";

export function applyAbilityAdjustments(baseScores, race, picks = {}) {
  // baseScores: {str,dex,con,int,wis,cha}
  // race.ability_adjustments: e.g. {dex:2,int:2,cha:-2} OR {any:2}
  // picks: for flexible races: { any: "wis" } or for future: { any1:"str", any2:"dex" }
  const out = { ...baseScores };

  const adj = race?.ability_adjustments ?? {};
  for (const [k, delta] of Object.entries(adj)) {
    if (k === "any") {
      const chosen = picks.any;
      if (chosen) out[chosen] = (out[chosen] ?? 10) + delta;
    } else {
      out[k] = (out[k] ?? 10) + Number(delta);
    }
  }
  return out;
}

export function hpAtLevel1({ race, cls, conScore }) {
  // Starfinder 1e: HP at level 1 = race HP + class HP
  // (Stamina is class SP + Con mod, then multiplied by level)
  const conMod = abilityMod(conScore);
  return Number(race?.hp ?? 0) + Number(cls?.hp_per_level ?? 0);
}

export function spAtLevel({ cls, conScore, level }) {
  const conMod = abilityMod(conScore);
  return (Number(cls?.sp_per_level ?? 0) + conMod) * Number(level ?? 1);
}
