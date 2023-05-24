import { View, Text } from "react-native"
import React from "react"
import { UserIcon } from "react-native-heroicons/solid"

const Header = () => {
  return (
    <View className="flex-row justify-between p-4 px-6 mx-4">
      <Text className="text-2xl text font-bold text-black">Explore Nepal</Text>
      <View className="bg-slate-100 p-1 rounded-full">
        <UserIcon size={32} color="black" />
      </View>
    </View>
  )
}

export default Header
