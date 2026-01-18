// src/storage/characterStorage.js

const STORAGE_KEY = "sfcc:characters:v1";

function safeParse(json, fallback) {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}

function getAllRaw() {
  return safeParse(localStorage.getItem(STORAGE_KEY) || "[]", []);
}

function setAllRaw(records) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function uuid() {
  // crypto.randomUUID is supported in modern browsers
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  // fallback: good enough for local saves
  return `id_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

/**
 * Record shape:
 * {
 *   id: string,
 *   name: string,
 *   updatedAt: string (ISO),
 *   character: object
 * }
 */

export function listSavedCharacters() {
  // newest first, but return a shape that the UI can safely render
  return getAllRaw()
    .sort((a, b) => (b.updatedAt || "").localeCompare(a.updatedAt || ""))
    .map((r) => {
      const c = r.character || {};

      const raceStr =
        typeof c.race === "string"
          ? c.race
          : (c.race?.name
              ? c.race.name + (c.subrace?.name ? ` (${c.subrace.name})` : "")
              : "");

      const classStr =
        typeof c.class === "string"
          ? c.class
          : (c.selectedClass?.name || c.class?.name || "");

      const themeStr =
        typeof c.theme === "string"
          ? c.theme
          : (c.theme?.name || "");

      const levelNum =
        typeof c.level === "number"
          ? c.level
          : (Array.isArray(c.classes) && c.classes.length > 0
              ? c.classes.reduce((sum, cl) => sum + (cl.level || 0), 0)
              : 1);

      return {
        id: r.id,
        name: r.name,
        updatedAt: r.updatedAt,

        // These are what your Saved Characters list renders:
        level: levelNum,
        race: raceStr,
        class: classStr,
        theme: themeStr,

        // Keep the real full payload for loading:
        character: c,
      };
    });
}

export function loadSavedCharacter(id) {
  return getAllRaw().find(r => r.id === id) || null;
}

export function upsertSavedCharacter(character, opts = {}) {
  const records = getAllRaw();

  const id = opts.id || character.id || uuid();
  const name =
    opts.name ||
    character.name ||
    character.characterName || // in case your state uses a different key
    "Unnamed Character";

  const record = {
    id,
    name,
    updatedAt: new Date().toISOString(),
    character: { ...character, id }, // ensure id is present in saved payload
  };

  const idx = records.findIndex(r => r.id === id);
  if (idx >= 0) records[idx] = record;
  else records.unshift(record);

  setAllRaw(records);
  return record;
}

export function deleteSavedCharacter(id) {
  const records = getAllRaw().filter(r => r.id !== id);
  setAllRaw(records);
}
