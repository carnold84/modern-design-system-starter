const colors = {
  primary1: '#7f226b',
  primary2: '#973381',
  primary3: '#ae4398',
  primary4: '#c654ae',
  theme1: '#ffffff',
  theme2: '#f3f3f3',
  theme3: '#e7e7e7',
  theme4: '#dbdbdb',
  theme5: '#cecece',
  theme6: '#c2c2c2',
  theme7: '#b6b6b6',
  theme8: '#aaaaaa',
};

const fontFamily = '"Open Sans", Helvetica, Arial, sans-serif';

const text = {
  theme1: '#222222',
  theme2: '#444444',
  theme3: '#666666',
  theme4: '#888888',
  themeAlt1: '#ffffff',
};

const theme = {
  name: 'default',

  components: {
    button: {
      _focus: {
        bgColor: colors.theme1,
        borderColor: colors.theme5,
        color: text.theme1,
        outlineColor: colors.theme5,
      },
      _hover: {
        bgColor: colors.theme2,
        borderColor: colors.theme5,
        color: text.theme1,
      },
      bgColor: colors.theme1,
      borderColor: colors.theme4,
      color: text.theme3,
      fontFamily,
      primary: {
        _focus: {
          bgColor: colors.primary1,
          borderColor: colors.primary2,
          color: text.themeAlt1,
          outlineColor: colors.primary2,
        },
        _hover: {
          bgColor: colors.primary2,
          borderColor: colors.primary1,
          color: text.themeAlt1,
        },
        bgColor: colors.primary1,
        borderColor: colors.primary1,
        color: text.themeAlt1,
      },
    },
  },
};

export default theme;
