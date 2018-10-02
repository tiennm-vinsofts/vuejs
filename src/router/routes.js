
import RoutePaths from '../data/enum/RoutePaths';
import RouteNames from '../data/enum/RouteNames';
import {
  HomePage,
  DemoPage,
  ErrorPage
} from '../page';


export default [
  {
    path: RoutePaths.HOME,
    component: HomePage,
    name: RouteNames.HOME,
  },
  {
    path: RoutePaths.DEMO,
    component: DemoPage,
    name: RouteNames.DEMO,
  },
  {
    path: RoutePaths.ERRORPAGE,
    component: ErrorPage,
    name: RouteNames.ERRORPAGE,
  }
];
