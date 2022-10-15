import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "../theme"
import { Text } from "./Text"
import { Weather } from "../models/Weather"
import { City } from "../models/City"
import { kelvinToCelsius } from "../utils/formatDate"
import dayjs from "dayjs"
import { AutoImage } from "./AutoImage"
const utc = require("dayjs/plugin/utc")
const timezone = require("dayjs/plugin/timezone") // dependent on utc plugin

dayjs.extend(utc)
dayjs.extend(timezone)

export interface WeathercardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  city?: City
}

/**
 * Describe your component here
 */
export const Weathercard = observer(function Weathercard(props: WeathercardProps) {
  const { style, city } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <AutoImage source={{ uri: `https://openweathermap.org/img/w/${city.weather[0].icon}.png` }} />
      <View style={{ marginHorizontal: spacing.extraLarge }}>
        <Text size="xxs" preset="formHelper" style={{ color: "#3D4548" }}>
          {dayjs.unix(city.dt).format("DD . MM . YYYY - HH:mm")}
        </Text>
        {/* <View style={{ flexDirection: "row" }}>
          <Text size="xxs" style={{ color: "#3D4548" }}>
            {city?.main.humidity},
          </Text>
          <Text size="xxs" style={{ color: "#3D4548" }}>
            {city?.wind?.speed}
          </Text>
        </View> */}
        <View style={{ flexDirection: "row" }}>
          <Text size="lg" style={$text} preset="bold">
            {city?.weather[0]?.description},
          </Text>
          <Text size="lg" style={$text} preset="bold">
            {kelvinToCelsius(city.main.temp)}
          </Text>
        </View>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  margin: spacing.medium,
  flexDirection: "row",
}

const $text: TextStyle = {}
