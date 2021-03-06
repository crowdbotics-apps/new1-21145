import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile128942Navigator from '../features/UserProfile128942/navigator';
import Tutorial128941Navigator from '../features/Tutorial128941/navigator';
import NotificationList128913Navigator from '../features/NotificationList128913/navigator';
import Settings128912Navigator from '../features/Settings128912/navigator';
import Settings128904Navigator from '../features/Settings128904/navigator';
import UserProfile128902Navigator from '../features/UserProfile128902/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile128942: { screen: UserProfile128942Navigator },
Tutorial128941: { screen: Tutorial128941Navigator },
NotificationList128913: { screen: NotificationList128913Navigator },
Settings128912: { screen: Settings128912Navigator },
Settings128904: { screen: Settings128904Navigator },
UserProfile128902: { screen: UserProfile128902Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
