import { StyleSheet } from "react-native"
import { formatTime } from "../../utils/functions"
import { COLORS } from "../../variables/styles"
import { FlowHighlightView, FlowRow, FlowText } from "../overrides"

export const ActivityTimer = ({ time }) => {
  return (
    <FlowHighlightView style={styles.timerContainer}>
      <FlowRow style={styles.row}>
        <FlowText>No Activity</FlowText>
      </FlowRow>
      <FlowRow style={styles.row}>
        <FlowText style={{ ...styles.time, fontVariant: ["tabular-nums"] }}>
          {formatTime(time)}
        </FlowText>
      </FlowRow>
    </FlowHighlightView>
  )
}

const styles = StyleSheet.create({
  timerContainer: {
    marginVertical: 10,
  },
  row: {
    justifyContent: "center",
  },
  time: {
    color: COLORS.brightGreen,
  },
})
