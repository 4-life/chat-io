import { createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };

    gradient: {
      main: React.CSSProperties['background'];
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
    gradient: {
      main: React.CSSProperties['background'];
    };
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'Josefin Sans, sans-serif',
  },
  status: {
    danger: '#e53e3e',
  },
  gradient: {
    main: 'linear-gradient(0deg, #202543 0%, #525c8b 80%)',
  },
  palette: {
    text: {
      primary: '#f0f3ff',
      secondary: '#8f99cc',
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ffffff',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: orange[500],
      main: '#8f99cc',
      dark: '#4f5a8f',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    border: {
      light: '#5e6ba9',
      main: '#525d93',
      dark: '#363e62',
    },
    success: {
      main: '#18e122',
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
