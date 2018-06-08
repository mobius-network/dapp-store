import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import { camelCase } from 'lodash';

import Tab from './Tab';
import { Container, TabButtons, TabButton } from './styles';

class Tabs extends Component {
  static propTypes = {
    className: PropTypes.string,
    defaultTabIndex: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTabIndex: props.defaultTabIndex || 0,
    };
  }

  handleTabSwitch = index => () => this.setState({ activeTabIndex: index });

  renderTabs = () => {
    const { children } = this.props;
    const { activeTabIndex } = this.state;

    return (
      <TabButtons>
        {Children.map(children, (child, i) => (
          <TabButton
            key={camelCase(child.props.title)}
            type="button"
            disabled={i === activeTabIndex}
            onClick={this.handleTabSwitch(i)}
            {...child.props}
          >
            {child.props.title}
          </TabButton>
        ))}
      </TabButtons>
    );
  };

  renderTabContent = () => {
    const { children } = this.props;
    const { activeTabIndex } = this.state;

    return Children.map(
      children,
      (child, i) => (i === activeTabIndex ? child : null)
    );
  };

  render() {
    const { className } = this.props;

    return (
      <Container className={className}>
        {this.renderTabs()}

        {this.renderTabContent()}
      </Container>
    );
  }
}

Tabs.Tab = Tab;

export default Tabs;
