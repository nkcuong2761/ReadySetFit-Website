import { createTheme } from "@mui/material";
import { palette } from "@mui/system";

export const rsfTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#292929",
      dark: "#000000",
      light: "#F6F6F6"
    },
    secondary: {
      main: "#FFFFFF",
      dark: "#F6F6F6"
    },
    error: {
      main: "#D4380D",
      light: "#FFE7E0"
    },
    warning: {
      main: "#FAAD14",
      light: "#FFF0D3"
    },
    info: {
      main: "#006DCC",
      dark: "#004B8D",
      light: "#99CFFF"
    },
    success: {
      main: "#389E0D",
      light: "#E2F1DC"
    }
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: 40
    },
    h2: {
      fontWeight: 700,
      fontSize: 28
    },
    h3: {
      fontWeight: 700,
      fontSize: 22
    },
    h4: {
      fontWeight: 600,
      fontSize: 18
    },
    h5: {
      fontWeight: 600,
      fontSize: 16
    },
    h6: {
      fontWeight: 600,
      fontSize: 14
    },
    button: {
      fontWeight: 600
    },
    caption: {
      fontSize: 11
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: 13
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "text" && {
            color: palette.primary,
          }),
          ...(ownerState.variant === "outlined" && {
            border: 'solid 2px',
            ":hover" : {
              border: 'solid 2px',
            }
          }),
          ...(ownerState.size === 'small' && {
            padding: 0
          }),
          paddingTop: '8px',
          paddingBottom: '8px',
        })
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: 48,
          height: 48,
          borderRadius: 8
        }
      },
      variants: [
        {
          props: {variant: 'outlined'},
          style: {
            border: 'solid 2px #292929',
            color: '#292929',
          }
        },
        {
          props: {variant: 'contained'},
          style: {
            backgroundColor: '#292929',
            color: 'white',
          }
        }
      ]
    },
    MuiStack: {
      variants: [
        {
          props: {variant: 'text-frame'},
          style: {
            flexDirection: 'column',
            gap: '12px'
          }
        }
      ]
    },
    MuiGrid2: {
      defaultProps: {
        // all grids under this theme will apply
        // negative margin on the top and left sides.
        disableEqualOverflow: false,
      },
    },
  }
})