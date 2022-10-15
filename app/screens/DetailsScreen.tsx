import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps, goBack } from "../navigators"
import { AutoImage, Header, Screen, Text } from "../components"
import { colors, spacing } from "../theme"
import { mvs } from "../utils/scaling-utils"
import { useStores } from "../models"
import dayjs from "dayjs"
import { translate } from "../i18n"
import { kelvinToCelsius } from "../utils/formatDate"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `Details: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="Details" component={DetailsScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const DetailsScreen: FC<StackScreenProps<AppStackScreenProps, "Details">> = observer(
  function DetailsScreen(props) {
    // Pull in one of our MST stores
    const { id } = props.route?.params
    const { citiesStore } = useStores()
    const { cityHistorical } = citiesStore
    const currentWeather = cityHistorical(id)[0]

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <>
        <Screen style={$root} preset="fixed">
          <Header leftIcon="back" onLeftPress={goBack} />
          <View style={{ height: "70%" }} />
          <Text size="xxs" preset="formHelper" style={{ color: "#3D4548", textAlign: "center" }}>
            {translate("cities.hint", {
              name: currentWeather.name,
              dt: dayjs.unix(currentWeather.dt).format("DD . MM . YYYY - HH:mm"),
            })}
          </Text>
        </Screen>
        <View style={$Container}>
          <Text preset="subheading" style={{ textAlign: "center" }}>
            {currentWeather.name}
          </Text>

          <AutoImage
            style={{
              alignSelf: "center",
              margin: spacing.large,
            }}
            source={{
              uri: `https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`,
            }}
          />
          <View style={{}}>
            <View style={$Row}>
              <Text size="xs" preset="bold" tx="cities.Description" />
              <Text size="xs" preset="bold" style={{ color: colors.palette.primary100 }}>
                {currentWeather?.weather[0]?.description}
              </Text>
            </View>
            <View style={$Row}>
              <Text size="xs" preset="bold" tx="cities.Temperature" />
              <Text size="xs" preset="bold" style={{ color: colors.palette.primary100 }}>
                {kelvinToCelsius(currentWeather?.main.temp)}
              </Text>
            </View>
            <View style={$Row}>
              <Text size="xs" preset="bold" tx="cities.Humidity" />
              <Text size="xs" preset="bold" style={{ color: colors.palette.primary100 }}>
                {currentWeather?.main.humidity} %
              </Text>
            </View>
            <View style={$Row}>
              <Text size="xs" preset="bold" tx="cities.Windspeed" />
              <Text size="xs" preset="bold" style={{ color: colors.palette.primary100 }}>
                {currentWeather?.wind.speed} km/h
              </Text>
            </View>
          </View>
        </View>
      </>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const $Container: ViewStyle = {
  backgroundColor: colors.palette.neutral100,
  height: "50%",
  width: "85%",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  alignSelf: "center",
  position: "absolute",
  top: mvs(130),
  borderRadius: 4,
  padding: spacing.extraLarge,
}

const $Row: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: spacing.small,
}
