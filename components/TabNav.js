// NavBar.js
import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/ressources_list.screen";
import UserScreen from "../screens/userAccount.screen";
import OtherScreen from "../screens/index.screen";

const NavBar = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "user", title: "User", icon: "account" },
    { key: "other", title: "Other", icon: "dots-horizontal" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    user: UserScreen,
    other: OtherScreen,
  });

  const renderIcon = ({ route, color }) => (
    <MaterialCommunityIcons name={route.icon} color={color} size={26} />
  );

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderIcon={renderIcon}
    />
  );
};

export default NavBar;
