/**
 * Barrel re-export. Mantiene compatibilidad con los imports actuales
 * de `@/lib/site-data` mientras los datos viven separados por dominio
 * en `lib/data/*` para que cada archivo siga siendo legible.
 */

export * from "./data/services";
export * from "./data/copilot";
export * from "./data/experience";
export * from "./data/industries";
export * from "./data/technology";
export * from "./data/home";
