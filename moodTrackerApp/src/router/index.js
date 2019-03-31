import { createAppContainer, createStackNavigator } from 'react-navigation';

import ROUTE_NAME from './routeNames';
import { MoodLevelSelectScreen } from '../screen/MoodLevelSelectScreen';
import { FeelingSelectScreen } from '../screen/FeelingsSelectScreen';
import { CommentScreen } from '../screen/CommentScreen';
import { InsightsScreen } from '../screen/InsightsScreen';

const basicRouteConfig = screen => ({
  screen,
  navigationOptions: { header: null },

});

const router = createStackNavigator(
  {
    [ROUTE_NAME.CHECK_IN_MOOD]: basicRouteConfig(MoodLevelSelectScreen),
    [ROUTE_NAME.CHECK_IN_FEELING]: basicRouteConfig(FeelingSelectScreen),
    [ROUTE_NAME.CHECK_IN_COMMENT]: basicRouteConfig(CommentScreen),
    [ROUTE_NAME.INSIGHTS]: basicRouteConfig(InsightsScreen),
  },
  {
    initialRouteName: ROUTE_NAME.INITIAL_ROUTE,
    initialRouteKey: ROUTE_NAME.INITIAL_ROUTE,
    cardStyle: { shadowColor: 'transparent' },
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default createAppContainer(router);
export { navigationService } from './navigationService';
