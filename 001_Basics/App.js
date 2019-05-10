import React from "react";
import { StyleSheet, View } from "react-native";
import Red from "./components/Red";
import Green from "./components/Green";
import Blue from "./components/Blue";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
});

const App = () => (
    <View style={styles.container}>
        <Red />
        <Green />
        <Blue />
    </View>
);

export default App;
