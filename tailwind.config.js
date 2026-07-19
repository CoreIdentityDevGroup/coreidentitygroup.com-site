/** @type {import('tailwindcss').Config} */

// ── Institutional Carbon — "Heritage Gold" palette (Step 1) ─────────────
// Single source of truth for design tokens consumed via Tailwind utilities
// (e.g. bg-carbon, text-ink-secondary, border-line, text-accent).
// These hex values are mirrored as CSS custom properties in src/styles.css
// for the raw-CSS layer (.cidg-* rules) — keep the two in sync.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Carbon surfaces (warm near-black)
        carbon: {
          DEFAULT: '#0B0B0C', // page background
          panel:   '#16161A', // cards / panels
          raised:  '#1F2024', // raised / hover surfaces
        },
        // Ink (text)
        ink: {
          DEFAULT:   '#ECEBE8', // primary
          secondary: '#9C9A95', // secondary
          muted:     '#6E6C66', // muted / captions
        },
        // Hairline borders
        line: 'rgba(255,255,255,0.09)',
        // Platinum (quiet label accent — token defined for future use)
        platinum: '#C5CAD6',
        // Primary brand accent (blue) — replaces the retired Heritage Gold accent
        accent: {
          DEFAULT: '#6E84A3',
          strong:  '#4b5e79',
          purple: {
            DEFAULT: '#A78BDA',
            strong:  '#6d3cc5',
          },
        },
      },
      fontFamily: {
        // Inter becomes the default UI/body face; Source Serif 4 for display.
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['"Source Serif 4"', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      // Major-third (1.250) display scale for headings — additive, does not
      // override Tailwind's default text-* sizes used inline across pages.
      fontSize: {
        'display-md':  ['1.563rem', { lineHeight: '1.2',  letterSpacing: '-0.005em' }], // ~25px
        'display-lg':  ['1.953rem', { lineHeight: '1.15', letterSpacing: '-0.01em'  }], // ~31px
        'display-xl':  ['2.441rem', { lineHeight: '1.1',  letterSpacing: '-0.015em' }], // ~39px
        'display-2xl': ['3.052rem', { lineHeight: '1.08', letterSpacing: '-0.02em'  }], // ~49px
        'display-3xl': ['3.815rem', { lineHeight: '1.04', letterSpacing: '-0.02em'  }], // ~61px
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
