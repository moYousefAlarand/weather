import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps, goBack } from "../navigators"
import { Header, Screen, Text } from "../components"
import { useStores } from "../models"
import { translate } from "../i18n"
import { FlatList } from "react-native-gesture-handler"
import { Weathercard } from "../components/Weathercard"
import { City } from "../models/City"
import { spacing } from "../theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `Historical: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="Historical" component={HistoricalScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const HistoricalScreen: FC<StackScreenProps<AppStackScreenProps, "Historical">> = observer(
  function HistoricalScreen(props) {
    // Pull in one of our MST stores
    const { id } = props?.route?.params
    const { citiesStore } = useStores()
    const { cityHistorical } = citiesStore
    const historicalWeather = cityHistorical(id)

    // Pull in navigation via hook
    // const navigation = useNavigation()

    return (
      <Screen style={$root} preset="fixed">
        <Header
          title={
            historicalWeather?.length
              ? historicalWeather[0].name + " " + translate("cities.historical")
              : ""
          }
          leftIcon="back"
          titleMode="left"
          onLeftPress={goBack}
        />
        <FlatList
          contentContainerStyle={{ marginVertical: spacing.medium }}
          data={historicalWeather}
          renderItem={({ item, index }) => <Weathercard key={index} city={item as City} />}
        />
      </Screen>
    )
  },
)

const $root: ViewStyle = {}
