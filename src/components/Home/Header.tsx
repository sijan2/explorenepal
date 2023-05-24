import { View, Text, Image } from "react-native"
import React from "react"

const Header = () => {
  return (
    <View className="flex-row justify-between p-4 mx-4">
      <Text className="text-2xl text font-bold text-black">Explore Nepal</Text>
      <View className="bg-slate-100 p-0.5 rounded-full">
        <Image
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
          }}
          source={{
            uri: "https://avatars.githubusercontent.com/u/48212803?v=4",
          }}
        />
      </View>
    </View>
  )
}

export default Header
