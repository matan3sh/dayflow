import { useEffect, useState } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { ActivityItem } from "../components/activity/ActivityItem"
import { ActivityTimer } from "../components/activity/ActivityTimer"
import { FlowRow, FlowText } from "../components/overrides"
import defaultItems from "../data/activities.json"
import { loadDayFlowItems } from "../storage"

export const ActivityHomeScreen = ({ isStorageEnabled }) => {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    const load = async () => {
      const items = await loadDayFlowItems()
      items ? setActivities(items) : setActivities(defaultItems)
    }

    load()
  }, [])

  const checkActivity = ({ id, state }) => {
    setActivities((activities) => {
      const candidateIdx = activities.findIndex(
        (activity) => activity.id === id
      )

      if (candidateIdx > -1) {
        const newActivities = activities.map((activity) =>
          activity.id === id
            ? { ...activity, isActive: state }
            : { ...activity, isActive: false }
        )

        console.log(JSON.stringify(newActivities.map((a) => a.isActive)))
        return newActivities
      }

      return activities
    })
  }

  return (
    <View style={styles.screenContainer}>
      <ActivityTimer />
      <FlowRow style={styles.listHeading}>
        <FlowText style={styles.text}>Activities</FlowText>
        <FlowText style={styles.text}>Add</FlowText>
      </FlowRow>
      <FlatList
        data={activities}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ActivityItem {...item} onActivityChange={checkActivity} />
        )}
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
