import React from 'react';
import {addDecorator, configure} from '@storybook/react';
import {withThemes} from 'storybook-styled-components';

import defaultTheme from '../src/themes/default';
import defaultDarkTheme from '../src/themes/default-dark';
import {GlobalStyle} from '../src/shared/global';

const themes = {
  'Default Theme': defaultTheme,
  'Default Dark Theme': defaultDarkTheme,
};

// now add the decorator
addDecorator(withThemes(themes));
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

configure(
  [require.context('../src', true, /\.stories\.mdx$/), require.context('../src', true, /\.stories\.js$/)],
  module,
);
