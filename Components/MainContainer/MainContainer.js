import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../Home/Home";
import About from "../About/About";
import ComicsList from "../ComicsList/ComicsList";
import ComicsItem from "../ComicsItem/ComicsItem";

const RootStack = createStackNavigator(
  {
    Home: { screen: Home },
    About: { screen: About },
    ComicsList: { screen: ComicsList },
    ComicsItem: { screen: ComicsItem }
  },
  {
    initialRouteName: "Home"
  }
);

const MainContainer = createAppContainer(RootStack);

export default MainContainer;
