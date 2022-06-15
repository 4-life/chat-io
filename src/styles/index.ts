import { createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface Palette {
    border: Palette['primary'];
  }
  interface PaletteOptions {
    border: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    text: {
      primary: '#f0f3ff',
      secondary: '#f0f3ff',
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ffffff',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: orange[500],
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    border: {
      main: '#525d93',
      dark: '#363e62',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

export type Theme = typeof theme;

export default theme;
