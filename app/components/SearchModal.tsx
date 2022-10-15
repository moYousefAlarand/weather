import * as React from "react"
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "../theme"
import { Text } from "./Text"
import BottomSheet from "@gorhom/bottom-sheet"
import { mvs } from "../utils/scaling-utils"
import Modal, { ModalProps } from "react-native-modal"
import { Icon } from "./Icon"
import { TextField } from "./TextField"
import { useStores } from "../models"

export interface SearchModalProps extends Partial<ModalProps> {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  onClose: () => void
}

/**
 * Describe your component here
 */
export const SearchModal = observer(
  React.forwardRef<BottomSheet, SearchModalProps>(function SearchModal(
    props: SearchModalProps,
    ref,
  ) {
    const { style, onClose, ...rest } = props
    const $styles = [$container, style]
    const { citiesStore } = useStores()
    const { searchCity } = citiesStore
    const [loading, setloading] = React.useState(false)
    const [noResult, setNoResult] = React.useState(false)
    const [searchCityText, setsearchCityText] = React.useState("")

    const _onSearch = async () => {
      setloading(true)
      const result = await searchCity(searchCityText)
      setloading(false)

      if (result) onClose()
      else setNoResult(!result)
    }

    return (
      <Modal
        onBackButtonPress={onClose}
        onBackdropPress={onClose}
        style={{ justifyContent: "flex-end", margin: 0 }}
        {...rest}
      >
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "position" : undefined}>
          <View style={$styles}>
            <View style={{ borderBottomColor: colors.border, borderBottomWidth: 1 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: spacing.medium,
                  paddingVertical: spacing.tiny,
                }}
              >
                <TouchableOpacity onPress={_onSearch}>
                  <Icon icon="search" size={mvs(24)} />
                </TouchableOpacity>
                <TextField
                  value={searchCityText}
                  onChangeText={setsearchCityText}
                  placeholderTx="cities.Search_for_cities"
                  containerStyle={{
                    flex: 1,
                  }}
                />
              </View>
            </View>
            {loading && <ActivityIndicator style={{ margin: spacing.huge }} />}
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
              {!loading && noResult && <Text tx="common.no_result" preset="default" />}
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    )
  }),
)

const $container: ViewStyle = {
  height: mvs(300),
  backgroundColor: colors.palette.neutral100,
}
