import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from "react-native";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import Body from "./components/Body";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6BEAC4",
    },
});

const App = () => (
    <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView>
            <HeroImage />
            <Body />
        </ScrollView>
    </SafeAreaView>
);

export default App;
