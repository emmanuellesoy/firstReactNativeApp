import React from "react";
import { StyleSheet, View } from "react-native";
import Login from "./components/Login";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6BEAC4",
        alignItems: "center",
        justifyContent: "center",
    },
});

const App = () => (
    <View style={styles.container}>
        <Login />
    </View>
);

export default App;
