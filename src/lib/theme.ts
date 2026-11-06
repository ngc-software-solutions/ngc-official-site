export type ThemePreference = "light" | "dark" | "system";

export const THEME_STORAGE_KEY = "ngc-theme";

/**
 * Runs before first paint (inlined in <head>) so the page never flashes
 * the wrong theme. Light is the default when nothing is stored.
 */
export const themeInitScript = `(function(){try{var p=localStorage.getItem("${THEME_STORAGE_KEY}");var d=p==="dark"||(p==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

export function applyTheme(preference: ThemePreference) {
  const dark =
    preference === "dark" ||
    (preference === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}
