import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "../theme"
import { Text } from "./Text"
import { ms, mvs } from "../utils/scaling-utils"

export interface ActionButtonProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  text?: string

  onPress?: () => void
}

/**
 * Describe your component here
 */
export const ActionButton = observer(function ActionButton(props: ActionButtonProps) {
  const { text, onPress, ...rest } = props
  const $styles = [$container]

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ position: "absolute", bottom: spacing.huge, right: spacing.medium }}
    >
      <View style={$styles}>
        <Text text="+" style={[$text, { paddingHorizontal: spacing.tiny }]} size="xxl" />
        <Text text={text} style={$text} preset="bold" />
      </View>
    </TouchableOpacity>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
  width: ms(130),
  height: mvs(50),
  borderRadius: 30,
  backgroundColor: colors.palette.primary100,

  flexDirection: "row",
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
}

const $text: TextStyle = {
  color: colors.palette.neutral100,
  textAlign: "center",
}
