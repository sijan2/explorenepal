import { View, Text, Image, Dimensions, StyleSheet } from "react-native"
import React from "react"

interface PillProps {
  title: string
  image: string
}

const widthPadding = Dimensions.get("window").width - 24

export const Pill = ({ title, image }: PillProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.pill, { minWidth: widthPadding / 2.5 }]}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: image }}
          />
        </View>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    padding: 16,
    paddingRight: 0,
    marginHorizontal: 16,
    marginRight: 8,
  },
  pill: {
    height: 48,
    flexDirection: 'row',
    padding: 8,
    borderRadius: 9999,
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'absolute',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  title: {
    marginLeft: 48,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6b7280',
  },
})
