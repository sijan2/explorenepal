import { View, Text, ScrollView, FlatList } from "react-native"
import React from "react"
import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native-safe-area-context"
import { UserIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid"
import Header from "../../components/Home/Header"
import Search from "../../components/Home/Search"
import { Pill } from "../../components/Home/Pill"
import { cards } from "../../data/card"
import { Card } from "../../components/CardSwiper/Card"
import Animated, { useSharedValue } from "react-native-reanimated"
import { GestureHandlerRootView } from "react-native-gesture-handler"

const data = [
  {
    id: 1,
    title: "Hiking ",
    image:
      "https://images.unsplash.com/photo-1623492701902-47dc207df5dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    title: "Adventure",
    image:
      "https://images.unsplash.com/photo-1623492701902-47dc207df5dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    title: "Kathmandu",
    image:
      "https://images.unsplash.com/photo-1623492701902-47dc207df5dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    title: "Pokhara",
    image:
      "https://images.unsplash.com/photo-1623492701902-47dc207df5dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
]

const data2 = [
  {
    id: 1,
    title: "Hiking ",
  },
  {
    id: 2,
    title: "Historical",
  },
]

const Home = () => {
  const totalCards = cards.length
  const shuffleBack = useSharedValue(false)
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="flex-1 bg-slate-300">
        <View className="flex flex-col">
          {/* Header */}
          <Header />
          {/* Search */}
          <Search />
          {/* Pill FIlter */}
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            renderItem={({ item }) => (
              <Pill title={item.title} image={item.image} />
            )}
          />
        </View>

        <View className="flex-1">
          <View className="flex flex-row justify-between p-4 mx-4 ">
            <Text className="text-lg font-bold text-black px-4 py-2">
              Destinations
            </Text>
            <Text className="text-sm font-bold text-pink-500 px-4 py-2">
              See All
            </Text>
          </View>
          <View className="flex-1">
            {cards.map((card, index) => (
              <Card
                card={card}
                key={index}
                index={index}
                totalCards={totalCards}
                shuffleBack={shuffleBack}
              />
            ))}
          </View>
        </View>

        <StatusBar style="dark" />
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Home
