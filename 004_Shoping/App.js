import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    View
} from "react-native";
import Header from "./components/Header";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6BEAC4",
    },
});

const App = () => (
    <SafeAreaView style={styles.container}>
        <Header />
    </SafeAreaView>
);

export default App;
