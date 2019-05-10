import React from "react";
import { StyleSheet, View } from "react-native";
import Superman from "./components/Superman";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#efefef",
        fontSize: 16,
    },
});

const App = () => (
    <View style={styles.container}>
        <Superman style={styles}>sh4nn0nb1t</Superman>
    </View>
);

export default App;
