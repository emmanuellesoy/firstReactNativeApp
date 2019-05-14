import React from "react";
import { StyleSheet, View } from "react-native";
import Horizontal from "./components/Horizontal";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

const App = () => (
    <View style={styles.container}>
        <Horizontal />
    </View>
);

export default App;
