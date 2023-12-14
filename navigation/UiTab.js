import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { fontSizes, colors } from "../constants";
import { Settings, ProductGridView, FoodList } from "../screens";

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarActiveTintColor: "white",
  tabBarInactiveTintColor: colors.inactive,
  tabBarActiveBackgroundColor: colors.primary,
  tabBarInactiveBackgroundColor: colors.primary,
  tabBarBackground: () => (
    <View style={{ backgroundColor: colors.primary, flex: 1 }}></View>
  ),
  tabBarIcon: ({ focused, color, size }) => {
    let screenName = route.name;
    let iconName = "";
    if (screenName == "ProductGridView") {
      iconName = "product-hunt";
    } else if (screenName == "FoodList") {
      iconName = "list-ol";
    } else if (screenName == "Settings") {
      iconName = "cogs";
    }
    return (
      <FontAwesome
        style={{
          paddingTop: 5,
        }}
        name={iconName}
        size={24}
        color={focused ? "white" : colors.inactive}
      />
    );
  },
});

const UiTab = (props) => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="ProductGridView"
        component={ProductGridView}
        options={{
          tabBarLabel: "Products",
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
          },
        }}
      />
      <Tab.Screen
        name="FoodList"
        component={FoodList}
        options={{
          tabBarLabel: "Foods",
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default UiTab;
