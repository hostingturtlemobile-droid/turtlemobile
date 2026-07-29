export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chus: {
          blue: "#3B7CFF",
          "blue-dark": "#2A5FD9",
          "blue-soft": "#E8F0FF",
          green: "#22C55E",
          "green-soft": "#E8F8EF",
          navy: "#0B1220",
          ink: "#111827",
          mute: "#6B7280",
          mist: "#F5F7FB",
          line: "#E5E7EB",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 8px 30px rgba(15, 23, 42, 0.06)",
        soft: "0 4px 20px rgba(59, 124, 255, 0.12)",
      },
    },
  },
  plugins: [],
}
