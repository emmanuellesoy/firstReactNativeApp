import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
        height: 100,
        width: 100,
    },
});

const Green = () => (
    <View style={styles.container} />
);

export default Green;
