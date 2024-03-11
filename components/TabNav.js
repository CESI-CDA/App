import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../config/color";
import IndexScreen from "../screens/index.screen";
import RessourceScreen from "../screens/ressource.screen";
const Tab = createMaterialBottomTabNavigator();

export default function tabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Ressource"
      barStyle={{ backgroundColor: colors.backgroundSecondary }}
      activeColor={colors.primary}
      inactiveColor={colors.secondary}
    >
      <Tab.Screen
        name="Index"
        component={IndexScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="account"
              color={colors.primary}
              size={32}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ressource"
        component={RessourceScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="home"
              color={colors.primary}
              size={32}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
