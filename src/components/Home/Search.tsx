import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { MagnifyingGlassIcon } from "react-native-heroicons/solid"

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <View style={styles.iconContainer}>
          <MagnifyingGlassIcon size={32} color="white" />
        </View>
        <Text style={styles.placeholder}>
          Search Destinations
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginHorizontal: 16,
  },
  searchBar: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderRadius: 9999,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  iconContainer: {
    position: 'absolute',
    left: 0,
    backgroundColor: '#000',
    borderRadius: 9999,
    padding: 10,
  },
  placeholder: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6b7280',
  },
})

export default Search
