import { View, StyleSheet } from "react-native"
import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import {
  HomeIcon,
  MapIcon,
  BookmarkIcon,
  UserIcon,
} from "react-native-heroicons/solid"
import Discover from "../../screens/Discover/Discover"
import Home from "../../screens/Home/Home"
import Account from "../../screens/Account/Account"
import Bookmark from "../../screens/Bookmark/Bookmark"

const Tab = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          height: 65,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3,
          elevation: 2,
          left: 40,
          right: 50,
          shadowColor: "#36454F",
          paddingHorizontal: 20,
          borderRadius: 90,
          backgroundColor: "#000",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: focused ? "#fbde8e" : "transparent" }
              ]}
            >
              <HomeIcon size={28} color={focused ? "black" : "#f2f2f2"} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: focused ? "#fbde8e" : "transparent" }
              ]}
            >
              <MapIcon size={28} color={focused ? "black" : "#f2f2f2"} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: focused ? "#fbde8e" : "transparent" }
              ]}
            >
              <BookmarkIcon size={28} color={focused ? "black" : "#f2f2f2"} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: focused ? "#fbde8e" : "transparent" }
              ]}
            >
              <UserIcon size={28} color={focused ? "black" : "#f2f2f2"} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 9999,
    padding: 8,
  },
})

export default BottomTab
