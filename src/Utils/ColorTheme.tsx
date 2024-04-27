import { createTheme, PaletteOptions } from "@mui/material";
import { blue, red } from "@mui/material/colors";

// Extend the PaletteOptions interface to include isPrimary property
declare module "@mui/material/styles" {
  interface PaletteOptions {
    isPrimary?: Record<string, string>;
    isSecondary: Record<string, string>;
  }
}

const theme = createTheme({
  palette: {
    isPrimary: {
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
    },
    isSecondary :{
      'dark': 'black', 
    }
  },
});

export default theme;
