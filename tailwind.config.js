module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          '"Yu Gothic"',
          'YuGothic',
          '"ヒラギノ角ゴ Pro W3"',
          '"Hiragino Kaku Gothic Pro"',
          'メイリオ',
          'Meiryo',
          'Osaka',
          '"ＭＳ Ｐゴシック"',
          '"MS PGothic"',
          'sans-serif',
        ],
      },
    },
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
      '2xl': '1536px',
    },
    aspectRatio: {
      9: '9',
      16: '16',
    },
  },
  plugins: [],
}
