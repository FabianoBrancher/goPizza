import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Menu from '~/pages/Menu';
import Size from '~/pages/Size';
import Type from '~/pages/Type';
import Profile from '~/pages/Profile';
import Order from '~/pages/Order';

const Routes = createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
    Menu,
    Size,
    Type,
    Profile,
    Order,
  },
    {
      initialRouteName: 'SignIn',
    }),
);

export default Routes;
