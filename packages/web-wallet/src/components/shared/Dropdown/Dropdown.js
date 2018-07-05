import React, { Component, Children, cloneElement, createRef } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { colors } from 'components/shared/Styleguide';
import Toggle from './Toggle';
import Menu from './Menu';
import Item from './Item';
import { Container } from './styles';

const themes = {
  default: {
    background: colors.bgWhite,
    borderColor: colors.border,
    color: colors.textPrimary,
  },
  dark: {
    background: 'rgb(61, 153, 236)',
    borderColor: 'rgb(98, 171, 240)',
    color: colors.textWhite,
  },
  secondary: {
    background: 'transparent',
    borderColor: '#C9CDDF',
    color: '#587894',
  },
};

class Dropdown extends Component {
  static propTypes = {
    children: PropTypes.any,
    theme: PropTypes.oneOf(['default', 'dark', 'secondary']),
  };

  static defaultProps = {
    theme: 'default',
  };

  constructor(props) {
    super(props);

    this.dropdownRef = createRef();
  }

  state = {
    isOpen: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  open = () => this.setState({ isOpen: true });

  close = () => this.setState({ isOpen: false });

  handleOutsideClick = e => {
    if (!this.state.isOpen) {
      return;
    }

    if (!this.dropdownRef) {
      return;
    }

    if (!this.dropdownRef.current.contains(e.target)) {
      this.close();
    }
  };

  render() {
    const { className, children, theme } = this.props;
    const { isOpen } = this.state;

    return (
      <ThemeProvider theme={themes[theme]}>
        <Container className={className}>
          <div ref={this.dropdownRef}>
            {Children.map(children, child =>
              cloneElement(child, {
                close: this.close,
                isOpen,
                open: this.open,
                toggle: this.toggle,
              }))}
          </div>
        </Container>
      </ThemeProvider>
    );
  }
}

Dropdown.Toggle = Toggle;

Dropdown.Menu = Menu;

Dropdown.Item = Item;

export default Dropdown;
