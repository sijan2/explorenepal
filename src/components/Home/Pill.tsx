import { View, Text, Image, Dimensions } from "react-native"
import React from "react"

interface PillProps {
  title: string
  image: string
}

const widthPadding = Dimensions.get("window").width - 24

export const Pill = ({ title, image }: PillProps) => {
  return (
    <View style={{ height: 80 }} className="py-4 px-6 pr-0  mx-4 mr-2">
      <View
        style={{ minWidth: widthPadding / 2.5, height: 48 }}
        className="flex flex-row p-2 rounded-full relative justify-start items-center bg-white"
      >
        <View className="absolute">
          <Image
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
            }}
            source={{ uri: image }}
          />
        </View>
        <Text style={{}} className="ml-12 text-sm text font-bold text-gray-500">
          {title}
        </Text>
      </View>
    </View>
  )
}
