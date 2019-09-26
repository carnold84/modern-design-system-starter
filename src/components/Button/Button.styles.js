import styled from 'styled-components';

export const Wrapper = styled.button`
  align-items: center;
  background-color: ${props => props.theme.components.button.bgColor};
  border: ${props => props.theme.components.button.borderColor} solid 1px;
  border-radius: 3px;
  color: ${props => props.theme.components.button.color};
  cursor: pointer;
  display: inline-flex;
  font-size: 1rem;
  height: 40px;
  justify-content: center;
  outline: transparent solid 2px;
  padding: 0 15px;
  transition: all 200ms ease-in-out;

  a {
    align-items: center;
    color: ${props => props.theme.components.button.color};
    display: flex;
    height: 100%;
    text-decoration: none;
  }

  &:disabled {
    opacity: 0.75;
    pointer-events: none;
  }

  &:focus {
    background-color: ${props => props.theme.components.button._focus.bgColor};
    border-color: ${props => props.theme.components.button._focus.borderColor};
    color: ${props => props.theme.components.button._focus.color};
    box-shadow: 0 0 0 2px ${props => props.theme.components.button._focus.outlineColor};

    a {
      color: ${props => props.theme.components.button._focus.color};
    }
  }

  &:hover {
    background-color: ${props => props.theme.components.button._hover.bgColor};
    border-color: ${props => props.theme.components.button._hover.borderColor};
    color: ${props => props.theme.components.button._hover.color};

    a {
      color: ${props => props.theme.components.button._hover.color};
    }
  }

  &.is-primary {
    background-color: ${props => props.theme.components.button.primary.bgColor};
    border-color: ${props => props.theme.components.button.primary.borderColor};
    color: ${props => props.theme.components.button.primary.color};

    a {
      color: ${props => props.theme.components.button.primary.color};
    }

    &:focus {
      background-color: ${props => props.theme.components.button.primary._focus.bgColor};
      border-color: ${props => props.theme.components.button.primary._focus.borderColor};
      color: ${props => props.theme.components.button.primary._focus.color};
      box-shadow: 0 0 0 2px ${props => props.theme.components.button.primary._focus.outlineColor};

      a {
        color: ${props => props.theme.components.button.primary._focus.color};
      }
    }

    &:hover {
      background-color: ${props => props.theme.components.button.primary._hover.bgColor};
      border-color: ${props => props.theme.components.button.primary._hover.borderColor};
      color: ${props => props.theme.components.button.primary._hover.color};

      a {
        color: ${props => props.theme.components.button.primary._hover.color};
      }
    }
  }
`;

Wrapper.defaultProps = {
  theme: {
    components: {
      button: {
        _focus: {
          bgColor: '#ffffff',
          borderColor: '#cecece',
          color: '#222222',
          outlineColor: '#cecece',
        },
        _hover: {
          bgColor: '#f3f3f3',
          borderColor: '#cecece',
          color: '#222222',
        },
        bgColor: '#ffffff',
        borderColor: '#dbdbdb',
        color: '#666666',
        primary: {
          _focus: {
            bgColor: '#7f226b',
            borderColor: '#973381',
            color: '#ffffff',
            outlineColor: '#973381',
          },
          _hover: {
            bgColor: '#973381',
            borderColor: '#7f226b',
            color: '#ffffff',
          },
          bgColor: '#7f226b',
          borderColor: '#7f226b',
          color: '#ffffff',
        },
      },
    },
  },
};
