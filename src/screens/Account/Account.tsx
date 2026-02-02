import { Text, StyleSheet } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"

const Account = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Account</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cbd5e1',
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
})

export default Account
