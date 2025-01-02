const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  // Specify content paths for purging
  content: ["./src/**/*.{html,js,svelte,ts}", "./index.html"],

  // Dark mode configuration
  darkMode: "class",

  theme: {
    // Extend default theme
    extend: {
      // Custom color palette for both modern and retro themes
      colors: {
        // Modern theme colors
        modern: {
          primary: {
            DEFAULT: "#646cff",
            hover: "#535bf2",
            light: "#747bff",
          },
          background: {
            light: "#ffffff",
            dark: "#242424",
          },
          text: {
            light: "#213547",
            dark: "rgba(255, 255, 255, 0.87)",
          },
        },
        // Retro theme colors (CRT-inspired)
        retro: {
          primary: {
            DEFAULT: "#33ff00",
            hover: "#40ff00",
            light: "#4dff00",
          },
          background: {
            light: "#f0f0c9",
            dark: "#002b36",
          },
          text: {
            light: "#657b83",
            dark: "#839496",
          },
          // Phosphor effects
          phosphor: {
            green: "#33ff00",
            amber: "#ffb000",
            white: "#ffffff",
          },
        },
      },

      // Custom fonts
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
        retro: ["VT323", "monospace"],
      },

      // Animation utilities for retro effects
      animation: {
        "crt-flicker": "flicker 0.15s infinite",
        "scan-lines": "scan 8s linear infinite",
      },
      keyframes: {
        flicker: {
          "0%": { opacity: "0.97" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.98" },
        },
        scan: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
      },

      // Custom spacing for consistent layouts
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
    },
  },

  // Custom plugins
  plugins: [
    // Plugin for retro CRT effects
    function ({ addUtilities }) {
      const newUtilities = {
        ".retro-crt": {
          "text-shadow": "0 0 2px currentColor",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(transparent 50%, rgba(0, 0, 0, 0.25) 50%)",
            "background-size": "100% 4px",
            "pointer-events": "none",
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
