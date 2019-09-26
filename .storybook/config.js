import { addDecorator, configure } from '@storybook/react';
import { withThemes } from 'storybook-styled-components';

import defaultTheme from '../src/themes/default';
import defaultDarkTheme from '../src/themes/default-dark';

const themes = {
  'Default Theme': defaultTheme,
  'Default Dark Theme': defaultDarkTheme,
};

// now add the decorator
addDecorator(withThemes(themes));

configure(
  [require.context('../src', true, /\.stories\.mdx$/), require.context('../src', true, /\.stories\.js$/)],
  module
);
