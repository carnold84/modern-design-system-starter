import { bool, string } from 'prop-types';
import React from 'react';

import { Wrapper } from './Button.styles';

/**
 * Use `Button` to trigger actions and link to pages / new urls. Use `as` prop to change from the default `button`.
 */
const Button = ({ as, children, isDisabled, isPrimary, type, ...rest }) => {
  return (
    <Wrapper as={as} className={isPrimary ? 'is-primary' : null} disabled={isDisabled} type={type} {...rest}>
      {children}
    </Wrapper>
  );
};

Button.propTypes = {
  as: string,
  isDisabled: bool,
  isPrimary: bool,
  type: string,
};

Button.defaultProps = {
  as: 'button',
  isDisabled: false,
  isPrimary: false,
};

export default Button;
