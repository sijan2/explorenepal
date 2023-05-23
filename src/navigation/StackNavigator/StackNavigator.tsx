import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import BottomTab from "../BottomTabNavigator/BottomTab"

const StackNavigator = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bottom"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
