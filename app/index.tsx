import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (

     <View className="bg-red-300 h-full justify-center items-center">
      <Text className="text-3xl font-pblack">Open up App.js to start working on your hi!</Text>
      <StatusBar style="auto" />
      <Link href="/home" >home</Link>
      </View>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
