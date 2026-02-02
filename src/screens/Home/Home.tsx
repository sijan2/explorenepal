import { View, Text, StyleSheet, FlatList } from "react-native"
import React from "react"
import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../components/Home/Header"
import Search from "../../components/Home/Search"
import { Pill } from "../../components/Home/Pill"
import { cards } from "../../data/card"
import { Card } from "../../components/CardSwiper/Card"
import { useSharedValue } from "react-native-reanimated"
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

const Home = () => {
  const totalCards = cards.length
  const shuffleBack = useSharedValue(false)
  return (
    <GestureHandlerRootView style={styles.flex1}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerSection}>
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

        <View style={styles.flex1}>
          <View style={styles.destinationsHeader}>
            <Text style={styles.destinationsTitle}>
              Destinations
            </Text>
            <Text style={styles.seeAllText}>
              See All
            </Text>
          </View>
          <View style={styles.flex1}>
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

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#cbd5e1',
  },
  headerSection: {
    flexDirection: 'column',
  },
  destinationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginHorizontal: 16,
  },
  destinationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ec4899',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
})

export default Home
