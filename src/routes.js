import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';

const Routes = createAppContainer(createStackNavigator({ Main: { screen: Main,
  navigationOptions: () => ({ header: null })
},
}));

export default Routes;
