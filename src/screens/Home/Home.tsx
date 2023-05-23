import { View, Text, ScrollView, FlatList } from "react-native"
import React from "react"
import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native-safe-area-context"
import { UserIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid"
import Header from "../../components/Home/Header"
import Search from "../../components/Home/Search"
import { Pill } from "../../components/Home/Pill"

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

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-300 ">
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-red-600"
      ></ScrollView>

      <StatusBar style="dark" />
    </SafeAreaView>
  )
}

export default Home
