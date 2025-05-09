import { defaultTheme } from "./defaultTheme";

export const darkTheme = {
  ...defaultTheme,
  shadows: {
    none: "none",
    sm: "0px 0px 4px rgba(0, 0, 0, 0.4)",
    md: "0px 0px 8px rgba(0, 0, 0, 0.5)",
    lg: "0px 0px 12px rgba(0, 0, 0, 0.6)",
    xl: "0px 0px 16px rgba(0, 0, 0, 0.7)"
  },
  components: {
    button: {
      default: { bg: "neutral-9", txt: "neutral-2", border: "neutral-8" },
      sub: { bg: "neutral-7", txt: "neutral-1", border: "neutral-8" },
      disabled: { bg: "neutral-9", txt: "neutral-7", border: "neutral-8" },
      primary: { bg: "blue-5", txt: "white-10", border: "blue-6" },
      secondary: { bg: "neutral-5", txt: "white-10", border: "neutral-6" },
      success: { bg: "forest-5", txt: "white-10", border: "forest-6" },
      warning: { bg: "amber-5", txt: "neutral-1", border: "amber-6" },
      danger: { bg: "red-5", txt: "white-10", border: "red-6" },
      info: { bg: "sky-5", txt: "white-10", border: "sky-6" },
      ghost: { bg: "transparent-1", txt: "neutral-3", border: "neutral-7" },
      text: { bg: "transparent-1", txt: "neutral-3", border: "transparent-1" }
    },
    etc: {
      hovered: { bg: "neutral-7", txt: "neutral-1" },
      selected: { bg: "sky-8", txt: "sky-2" }
    },
    input: {
      default: { bg: "neutral-8", txt: "neutral-1", border: "neutral-7" },
      focus: { bg: "neutral-8", txt: "neutral-1", border: "blue-7" },
      error: { bg: "neutral-8", txt: "neutral-1", border: "red-7" },
      disabled: { bg: "neutral-9", txt: "neutral-7", border: "neutral-8" }
    },
    card: {
      default: { bg: "neutral-8", border: "neutral-7" },
      hover: { bg: "neutral-8", border: "neutral-6", shadow: "md" }
    },
    breadcrumb: {
      separator: { color: "neutral-5" },
      text: { color: "neutral-3" },
      now: { color: "neutral-1" }
    },
    badge: {
      default: { bg: "neutral-7", txt: "neutral-3" },
      primary: { bg: "blue-5", txt: "blue-3" },
      success: { bg: "forest-5", txt: "forest-3" },
      warning: { bg: "amber-5", txt: "amber-3" },
      danger: { bg: "red-5", txt: "red-3" },
      info: { bg: "sky-5", txt: "sky-3" }
    },
    alert: {
      default: { bg: "neutral-8", txt: "neutral-2", border: "neutral-7" },
      primary: { bg: "blue-5", txt: "blue-2", border: "blue-6" },
      success: { bg: "forest-5", txt: "forest-2", border: "forest-6" },
      warning: { bg: "amber-5", txt: "amber-2", border: "amber-6" },
      danger: { bg: "red-5", txt: "red-2", border: "red-6" },
      info: { bg: "sky-5", txt: "sky-2", border: "sky-6" }
    },
    tag: {
      default: { bg: "neutral-7", txt: "neutral-2", border: "neutral-8" },
      red: { bg: "red-5", txt: "red-2", border: "red-6" },
      rose: { bg: "rose-5", txt: "rose-2", border: "rose-6" },
      coral: { bg: "coral-5", txt: "coral-2", border: "coral-6" },
      orange: { bg: "orange-5", txt: "orange-2", border: "orange-6" },
      volcano: { bg: "volcano-5", txt: "volcano-2", border: "volcano-6" },
      apricot: { bg: "apricot-5", txt: "apricot-2", border: "apricot-6" },
      yellow: { bg: "yellow-5", txt: "yellow-2", border: "yellow-6" },
      gold: { bg: "gold-5", txt: "gold-2", border: "gold-6" },
      amber: { bg: "amber-5", txt: "amber-2", border: "amber-6" },
      green: { bg: "forest-5", txt: "forest-2", border: "forest-6" },
      lime: { bg: "lime-5", txt: "lime-2", border: "lime-6" },
      mint: { bg: "mint-5", txt: "mint-2", border: "mint-6" },
      blue: { bg: "blue-5", txt: "blue-2", border: "blue-6" },
      sky: { bg: "sky-5", txt: "sky-2", border: "sky-6" },
      cerulean: { bg: "cerulean-5", txt: "cerulean-2", border: "cerulean-6" },
      indigo: { bg: "indigo-5", txt: "indigo-2", border: "indigo-6" },
      cobalt: { bg: "cobalt-5", txt: "cobalt-2", border: "cobalt-6" },
      navy: { bg: "navy-5", txt: "navy-2", border: "navy-6" },
      purple: { bg: "purple-5", txt: "purple-2", border: "purple-6" },
      plum: { bg: "plum-5", txt: "plum-2", border: "plum-6" },
      orchid: { bg: "orchid-5", txt: "orchid-2", border: "orchid-6" },
      forest: { bg: "forest-5", txt: "forest-2", border: "forest-6" },
      sage: { bg: "sage-5", txt: "sage-2", border: "sage-6" },
      "warm-gray": {
        bg: "warm-gray-5",
        txt: "warm-gray-2",
        border: "warm-gray-6"
      },
      "cool-gray": {
        bg: "cool-gray-5",
        txt: "cool-gray-2",
        border: "cool-gray-6"
      },
      neutral: { bg: "neutral-5", txt: "neutral-2", border: "neutral-6" }
    }
  }
};
