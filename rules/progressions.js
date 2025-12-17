// rules/progressions.js
// Starfinder 1e core progressions.

export function babAtLevel(prog, level) {
  const L = Number(level);
  if (!Number.isFinite(L) || L < 1) throw new Error(`Invalid level: ${level}`);
  if (prog === "full") return L;
  if (prog === "medium") return Math.floor((3 * L) / 4);
  if (prog === "poor") return Math.floor(L / 2);
  throw new Error(`Unknown BAB progression: ${prog}`);
}

export function saveAtLevel(prog, level) {
  const L = Number(level);
  if (!Number.isFinite(L) || L < 1) throw new Error(`Invalid level: ${level}`);
  if (prog === "good") return 2 + Math.floor(L / 2);
  if (prog === "poor") return Math.floor(L / 3);
  throw new Error(`Unknown save progression: ${prog}`);
}

export function abilityMod(score) {
  const s = Number(score);
  if (!Number.isFinite(s)) return 0;
  return Math.floor((s - 10) / 2);
}
