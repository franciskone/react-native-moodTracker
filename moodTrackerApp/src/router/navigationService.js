import { NavigationActions, StackActions } from 'react-navigation';
import ROUTE_NAMES from './routeNames';

let _navigator;

function back(key = null) {
  return _getNavigator().dispatch(NavigationActions.back({ key }));
}

function _getNavigator() {
  return _navigator;
}

function navigate(routeName, params) {
  _getNavigator().dispatch(
    NavigationActions.navigate({
      key: routeName,
      routeName,
      params,
    }),
  );
}

function replace(routeName, params, key, newKey) {
  _getNavigator().dispatch(
    StackActions.replace({
      key,
      newKey: routeName,
      routeName,
      params,
    }),
  );
}

function goToCheckInMood() {
  navigate(ROUTE_NAMES.CHECK_IN_MOOD);
}

function goToCheckInFeeling() {
  navigate(ROUTE_NAMES.CHECK_IN_FEELING);
}

function goToCheckInComment() {
  navigate(ROUTE_NAMES.CHECK_IN_COMMENT);
}

function goToInsights() {
  navigate(ROUTE_NAMES.INSIGHTS);
}


function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

export const navigationService = {
  back,
  navigate,
  replace,
  setTopLevelNavigator,
  
  goToCheckInMood,
  goToCheckInFeeling,
  goToCheckInComment,
  goToInsights,
};
