import { useState } from "react";
import { SafeAreaView, StyleSheet, Switch, Text } from "react-native";
import { myColors } from "./src/styles/Colors";
import Calculator from "./src/components/Calculator";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
