import { View, Text, Image, StyleSheet } from "react-native"
import React from "react"

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Nepal</Text>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://avatars.githubusercontent.com/u/48212803?v=4",
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  avatarContainer: {
    backgroundColor: '#f1f5f9',
    padding: 2,
    borderRadius: 9999,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
})

export default Header
