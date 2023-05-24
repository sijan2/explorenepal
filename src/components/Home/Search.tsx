import { View, Text } from "react-native"
import React from "react"
import { MagnifyingGlassIcon } from "react-native-heroicons/solid"

const Search = () => {
  return (
    <View className="p-4 px-6 mx-4">
      <View className="flex-row py-3 px-1 rounded-full realtive justify-start bg-white">
        <View className="absolute left-0 bg-black rounded-full p-2.5">
          <MagnifyingGlassIcon size={32} color="white" />
        </View>
        <Text className="mx-auto text-lg text font-bold text-gray-500">
          Search Destinations
        </Text>
      </View>
    </View>
  )
}

export default Search
