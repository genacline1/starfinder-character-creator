// rules/character.js
import { babAtLevel, saveAtLevel, abilityMod } from "./progressions.js";

/**
 * CharacterState (MVP)
 * {
 *   level: number,
 *   classId: string,
 *   abilities: { str,dex,con,int,wis,cha: number },
 *   // Phase 1 keeps things simple. We'll add race/theme/skills/feats/gear next.
 * }
 */

export function computeDerivedStats(state, data) {
  const level = Number(state?.level ?? 1);
  if (!Number.isFinite(level) || level < 1 || level > 20) {
    throw new Error(`Level must be 1-20. Got: ${state?.level}`);
  }

  const classes = data?.classes?.classes ?? data?.classes ?? [];
  const cls = classes.find(c => c.id === state.classId);
  if (!cls) throw new Error(`Unknown classId: ${state.classId}`);

  const abilities = state.abilities ?? {};
  const mods = {
    str: abilityMod(abilities.str),
    dex: abilityMod(abilities.dex),
    con: abilityMod(abilities.con),
    int: abilityMod(abilities.int),
    wis: abilityMod(abilities.wis),
    cha: abilityMod(abilities.cha),
  };

  const bab = babAtLevel(cls.progressions.bab, level);

  const savesBase = {
    fort: saveAtLevel(cls.progressions.fort, level),
    ref: saveAtLevel(cls.progressions.ref, level),
    will: saveAtLevel(cls.progressions.will, level),
  };

  // MVP: no misc bonuses yet
  const saves = {
    fort: savesBase.fort + mods.con,
    ref: savesBase.ref + mods.dex,
    will: savesBase.will + mods.wis,
  };

  const hp = cls.hp_per_level + mods.con + (level - 1) * (cls.hp_per_level + mods.con); // simplistic: per-level includes Con each level
  // Note: Starfinder HP at level 1 is race HP + class HP; later levels add class HP only.
  // We'll correct once races are wired in. This is just a placeholder.

  const sp = (cls.sp_per_level + mods.con) * level;

  return {
    class: { id: cls.id, name: cls.name },
    level,
    abilityMods: mods,
    bab,
    savesBase,
    saves,
    hp,
    sp,
    classSkills: cls.class_skills,
    features: cls.features.filter(f => f.level <= level),
  };
}
