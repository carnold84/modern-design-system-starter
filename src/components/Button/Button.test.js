import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

test('Renders Button', () => {
  const component = renderer.create(<Button>Test</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders Primary Button', () => {
  const component = renderer.create(<Button isPrimary={true}>Test</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders Disabled Button', () => {
  const component = renderer.create(<Button isDisabled={true}>Test</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
