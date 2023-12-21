import { FlatList, StyleSheet, View } from "react-native"
import { ActivityItem } from "../components/activity/ActivityItem"
import { ActivityTimer } from "../components/activity/ActivityTimer"
import { FlowRow, FlowText } from "../components/overrides"
import data from "../data/activities.json"

export const ActivityHomeScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <ActivityTimer />
      <FlowRow style={styles.listHeading}>
        <FlowText style={styles.text}>Activities</FlowText>
        <FlowText style={styles.text}>Add</FlowText>
      </FlowRow>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <ActivityItem title={item.title} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: "100%",
  },
  listHeading: {
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
  },
})
