import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
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
    },
    other: {
      neutral5: "#61656A"
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
      fontSize: 22,
      lineHeight: 1.5
    },
    h4: {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.5
    },
    h5: {
      fontWeight: 600,
      fontSize: 14
    },
    h6: {
      fontWeight: 500,
      fontSize: 14
    },
    body1: {
      fontSize: 16
    },
    body2: {
      fontSize: 14
    },
    button: {
      fontWeight: 600
    },
    caption: {
      fontSize: 11,
      lineHeight: 1
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: 13
    }
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "h6" && {
            ":hover" : {
              color: "#004B8D"
            }
          })
        })
      }
    },
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
          ...(ownerState.variant === "plain" && {
            backgroundColor: '#F6F6F6',
            ":hover" : {
              backgroundColor: '#ECECEC',
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
        },
        {
          props: {variant: 'hero-frame'},
          style: {
            flexDirection: 'row',
            paddingTop: '64px'
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