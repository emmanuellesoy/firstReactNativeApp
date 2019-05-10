import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        height: 100,
        width: 100,
    },
});

const Blue = () => (
    <View style={styles.container} />
);

export default Blue;
