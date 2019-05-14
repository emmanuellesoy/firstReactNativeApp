import React from "react";
import {
    Dimensions,
    View,
    ScrollView,
    StyleSheet,
    Text,
} from "react-native";

const styles = StyleSheet.create({
    outer: {
        backgroundColor: "#0E1C3F",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    red: {
        backgroundColor: "#EE0033",
    },
    green: {
        backgroundColor: "#02A574",
    },
    innerText: {
        color: "#eeefef",
        fontSize: 24,
        fontWeight: "bold",
    },
});

const Horizontal = () => (
    <ScrollView horizontal pagingEnabled style={styles.container}>
        <View style={styles.outer}>
            <Text style={styles.innerText}>Welcome to sh4app</Text>
        </View>
        <View style={[styles.outer, styles.red]}>
            <Text style={styles.innerText}>Welcome to sh4app</Text>
        </View>
        <View style={[styles.outer, styles.green]}>
            <Text style={styles.innerText}>Best quality videos</Text>
        </View>
    </ScrollView>
);

export default Horizontal;
