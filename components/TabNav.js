import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../config/color";
import IndexScreen from "../screens/index.screen";
import RessourceScreen from "../screens/ressource.screen";
import UserAccountScreen from "../screens/userAccount.screen";
import RessourcesList from "../screens/ressources_list.screen";
const Tab = createMaterialBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Ressource"
      barStyle={{ backgroundColor: colors.backgroundSecondary }}
      activeColor={colors.primary}
      inactiveColor={colors.secondary}
    >
      <Tab.Screen
        name="UserAccount"
        component={UserAccountScreen}
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
        component={RessourcesList}
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
