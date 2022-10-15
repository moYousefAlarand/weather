import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "../theme"
import { Text } from "./Text"
import { City } from "../models/City"
import { Icon } from "./Icon"
import { RectButton, TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"
import { ScreenStackProps } from "react-native-screens"
import { AppStackParamList } from "../navigators"
import { StackNavigationProp } from "@react-navigation/stack"
import Swipeable from "react-native-gesture-handler/Swipeable"
import Animated from "react-native-reanimated"

export interface CityCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  city: City
}

/**
 * Describe your component here
 */
export const CityCard = observer(function CityCard(props: CityCardProps) {
  const { style, city } = props
  const $styles = [$container, style]
  const { navigate } = useNavigation<StackNavigationProp<AppStackParamList>>()

  return (
    <TouchableOpacity onPress={() => navigate("Historical", { id: city.id })}>
      <View style={$styles}>
        <Icon icon="cityPlacholder" />
        <Text style={$text} preset="subheading" size="md">
          {city.name}
        </Text>

        <TouchableOpacity
          onPress={() => navigate("Details", { id: city.id })}
          style={{ paddingHorizontal: spacing.tiny }}
        >
          <Icon icon="info" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
})

const $container: ViewStyle = {
  justifyContent: "space-between",
  margin: spacing.medium,
  flexDirection: "row",
}

const $text: TextStyle = {
  textAlign: "center",
}
