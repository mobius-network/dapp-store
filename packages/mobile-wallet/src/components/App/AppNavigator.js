import React from 'react';
import { createStackNavigator } from 'react-navigation';

import wrapNavigator, { routeKeys } from 'components/shared/wrapNavigator';

import NavHeader from 'components/shared/NavHeader';

import Dashboard from './Dashboard';
import AddFunds from './AddFunds';
import SendFunds from './SendFunds';
import AddressForm from './AddressForm';

export const AppNavigator = createStackNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: () => ({
        header: null,
      }),
    },
    SendFunds: {
      screen: SendFunds,
      navigationOptions: () => ({
        // eslint-disable-next-line
        header: props => <NavHeader {...props} title="sendFunds.headerTitle" />
      }),
    },
    AddressForm: {
      screen: AddressForm,
      mode: 'modal',
      navigationOptions: () => ({
        header: null,
      }),
    },
    AddFunds: {
      screen: AddFunds,
      navigationOptions: () => ({
        // eslint-disable-next-line
        header: props => <NavHeader {...props} title="addFunds.headerTitle" />
      }),
    },
  },
  {
    headerMode: 'screen',
  }
);

export const appRoutes = routeKeys(AppNavigator);

export default wrapNavigator('App')(AppNavigator);
