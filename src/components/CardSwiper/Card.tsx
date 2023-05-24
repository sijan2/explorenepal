import React, { useEffect } from "react"
import { View, StyleSheet, Dimensions, Image } from "react-native"
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler"
import { snapPoint } from "./Math"
import Animated, {
  Easing,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated"

const { width: width, height } = Dimensions.get("screen")

const aspectRatio = 722 / 368
const CARD_WIDTH = width / 2
const CARD_HEIGHT = 330
const IMAGE_WIDTH = CARD_WIDTH
const DURATION = 250
const side = (width + CARD_WIDTH + 100) / 2
const SNAP_POINTS = [-side, 0, side]
const ROTATION_ANGLE = 20
const TRANSFORM_X = 70
const TRANSFORM_Y = -15

interface CardProps {
  card: {
    source: ReturnType<typeof require>
    title: string
    trip: number
  }
  index: number
  totalCards: number

  shuffleBack: Animated.SharedValue<boolean>
}

export const Card = ({
  card: { source, title, trip },
  index,
  totalCards,
  shuffleBack,
}: CardProps) => {
  const theta = useSharedValue(
    index === totalCards - 1
      ? 0
      : index === totalCards - 2
      ? ROTATION_ANGLE
      : index === totalCards - 3
      ? -ROTATION_ANGLE
      : Math.random() * 20 - 10
  )
  const rotateZ = useSharedValue(theta.value)
  const scale = useSharedValue(1)

  const initialX = useSharedValue(
    index === totalCards - 1
      ? 0
      : index === totalCards - 2
      ? TRANSFORM_X
      : index === totalCards - 3
      ? -TRANSFORM_X
      : 0
  )

  const initialY = useSharedValue(
    index === totalCards - 1
      ? TRANSFORM_Y
      : index === totalCards - 2
      ? TRANSFORM_Y
      : index === totalCards - 3
      ? TRANSFORM_Y
      : 0
  )

  const x = useSharedValue(initialX.value)
  const y = useSharedValue(initialY.value)

  useAnimatedReaction(
    () => {
      shuffleBack.value
    },
    () => {
      if (shuffleBack.value) {
        const delay = index * 150
        x.value = withDelay(delay, withSpring(initialX.value, {}))
        y.value = withDelay(delay, withSpring(initialY.value, {}))
        rotateZ.value = withDelay(
          delay,
          withSpring(theta.value, {}, () => {
            shuffleBack.value = false
          })
        )
      }
    }
  )

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number; y: number }
  >({
    onStart: (_, ctx) => {
      ctx.x = x.value
      ctx.y = y.value
    },

    onActive: ({ translationX, translationY }, ctx) => {
      x.value = ctx.x + translationX
      y.value = ctx.y + translationY
      scale.value = withTiming(1.1, {
        easing: Easing.inOut(Easing.ease),
      })
      rotateZ.value = withTiming(0, {
        easing: Easing.inOut(Easing.ease),
      })
    },

    onEnd: ({ velocityX, velocityY }) => {
      const dest = snapPoint(x.value, velocityX, SNAP_POINTS)
      x.value = withSpring(dest, { velocity: velocityX })
      y.value = withSpring(0, { velocity: velocityY })
      scale.value = withTiming(1, { easing: Easing.inOut(Easing.ease) }, () => {
        if (index === 0 && dest !== 0) {
          shuffleBack.value = true
        }
      })
    },
  })

  const style = useAnimatedStyle(() => ({
    transform: [
      { rotateZ: `${rotateZ.value}deg` },
      { translateX: x.value },
      { translateY: y.value },
      { scale: scale.value },
    ],
  }))

  return (
    <View style={styles.container} pointerEvents="box-none">
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.card, style]}>
          <Image
            source={source}
            style={{
              width: IMAGE_WIDTH,
              height: CARD_HEIGHT,
              borderRadius: 15,
            }}
            resizeMode="cover"
          />
          <View
            style={{
              position: "absolute",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              paddingVertical: 5,
              bottom: 10,
              flexDirection: "row",
              width: CARD_WIDTH,
              minHeight: 30,
            }}
          >
            <View
              style={{
                backgroundColor: "black",
                borderRadius: 15,
                paddingHorizontal: 10,
                paddingVertical: 5,
                shadowColor: "#fff",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 10,
              }}
            >
              <Animated.Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                style={{
                  maxWidth: 90,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {title}
              </Animated.Text>
            </View>
            <View
              style={{
                backgroundColor: "orange",
                borderRadius: 15,
                paddingHorizontal: 10,
                paddingVertical: 5,
                shadowColor: "#fff",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 10,
              }}
            >
              <Animated.Text style={{ fontWeight: "bold", color: "white" }}>
                {trip} Trips
              </Animated.Text>
            </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    top: -120,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    width: CARD_WIDTH + 10,
    height: CARD_HEIGHT + 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
})
