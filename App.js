import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import { SafeAreaView, StyleSheet, View } from "react-native"
import { ActivityHomeScreen } from "./src/screens/Home"
import { isAsyncStorageEnabled } from "./src/storage"
import { COLORS } from "./src/variables/styles"

export default function App() {
  const [isStorageEnabled, setIsStorageEnabeld] = useState(null)

  useEffect(() => {
    const checkStorage = async () => {
      const isEnabled = await isAsyncStorageEnabled()
      setIsStorageEnabeld(isEnabled)
    }

    checkStorage()
  }, [])

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {isStorageEnabled && (
          <ActivityHomeScreen isStorageEnabled={isStorageEnabled} />
        )}
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
})
