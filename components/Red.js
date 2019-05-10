import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        height: 100,
        width: 100,
    },
});

const Red = () => (
    <View style={styles.container} />
);

export default Red;
