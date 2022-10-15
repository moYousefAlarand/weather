import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, FlatList } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Header, Screen, SearchModal, Text } from "../components"
import { ActionButton } from "../components"
import { translate } from "../i18n"
import BottomSheet from "@gorhom/bottom-sheet"
import { useStores } from "../models"
import { CityCard } from "../components/CityCard"
import { spacing } from "../theme"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `Cities: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="Cities" component={CitiesScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const CitiesScreen: FC<StackScreenProps<AppStackScreenProps, "Cities">> = observer(
  function CitiesScreen() {
    // ref
    const [isVisible, setisVisible] = useState(false)
    const { citiesStore } = useStores()
    const { allCities } = citiesStore

    const _close = () => {
      setisVisible(false)
    }
    return (
      <>
        <Screen style={$root} preset="fixed">
          <Header titleTx="cities.title" titleMode="left" />
          <FlatList
            contentContainerStyle={{ paddingVertical: spacing.large }}
            data={allCities()}
            renderItem={({ item }) => <CityCard city={item} key={item.id} />}
          />
        </Screen>
        <ActionButton text={translate("cities.add_city")} onPress={() => setisVisible(true)} />
        <SearchModal onClose={_close} isVisible={isVisible} />
      </>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
