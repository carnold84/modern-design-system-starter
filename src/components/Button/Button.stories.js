import React from 'react';

import Button from './Button';

export default {
  component: Button,
  title: 'Components|Button',
};

export const allButtons = () => {
  return (
    <div>
      <Button onClick={() => alert('Click!')} style={{ margin: '0 10px 0 0' }}>
        Button
      </Button>

      <Button isPrimary={true} onClick={() => alert('Click!')} style={{ margin: '0 10px 0 0' }}>
        Primary Button
      </Button>

      <Button isDisabled={true} onClick={() => alert('Click!')}>
        Button
      </Button>
    </div>
  );
};
