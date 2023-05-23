import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import StackNavigator from "./StackNavigator/StackNavigator"

const EntryNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default EntryNavigator
