import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: `#2196f3`,
      light: `#4dabf5`,
      dark: `#1769aa`,
      contrastText: '#fff',
    },
    secondary: {
      main: `rgb(85, 85, 85)`,
      light: `rgba(0, 0, 0, 0.54)`,
      dark: `rgba(0, 0, 0, 0.73)`,
      contrastText: '#fff',
    },
    text: {
      primary: `rgb(68, 68, 68)`,
      secondary: `rgb(68, 68, 68)`,
    },
  },
  typography: {
    button: {
      fontSize: 14,
      fontWeight: 600,
      textTransform: `none`,
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 600,
      color: `secondary.dark`,
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 600,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
    },
    body2: {
      fontSize: 13,
      fontWeight: 400,
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
    },
    fontSize: 13,
    fontFamily: `'Noto Sans JP', 'Yu Gothic', YuGothic, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif`,
  },
  components: {
    MuiList: {
      defaultProps: {
        dense: false,
      },
    },
  },
})

export default theme
