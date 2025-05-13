import React from "react";
import { View, StyleSheet } from "react-native";
import ReminidersNotifications from "@/components/ReminidersNotifications";

const HomePage = () => (
  <View style={styles.container}>
    <ReminidersNotifications />
  </View>
);

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f7",
  },
});
