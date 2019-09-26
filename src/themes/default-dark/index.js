const colors = {
  primary1: '#7f226b',
  primary2: '#973381',
  primary3: '#ae4398',
  primary4: '#c654ae',
  theme1: '#111111',
  theme2: '#202020',
  theme3: '#2e2e2e',
  theme4: '#3d3d3d',
  theme5: '#4b4b4b',
  theme6: '#5a5a5a',
  theme7: '#686868',
  theme8: '#777777',
};

const text = {
  theme1: '#ffffff',
  theme2: '#cccccc',
  theme3: '#eeeeee',
  theme4: '#999999',
  themeAlt1: '#ffffff',
};

const theme = {
  name: 'default-dark',

  components: {
    button: {
      _focus: {
        bgColor: colors.theme1,
        borderColor: colors.theme5,
        color: text.theme1,
        outlineColor: colors.theme5,
      },
      _hover: {
        bgColor: colors.theme3,
        borderColor: colors.theme5,
        color: text.theme1,
      },
      bgColor: colors.theme2,
      borderColor: colors.theme4,
      color: text.theme3,
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
