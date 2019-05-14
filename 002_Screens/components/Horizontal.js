import React from "react";
import {
    Dimensions,
    View,
    ScrollView,
    StyleSheet,
    Text,
} from "react-native";

const styles = StyleSheet.create({
    container: {
        
    },
    outer: {
        backgroundColor: "#007bb8",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    outerRed: {
        backgroundColor: "#e01931",
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
        <View style={[styles.outer, styles.outerRed]}>
            <Text style={styles.innerText}>Welcome to sh4app</Text>
        </View>
        <View style={styles.outer}>
            <Text style={styles.innerText}>Best quality videos</Text>
        </View>
        <View style={[styles.outer, styles.outerRed]}>
            <Text style={styles.innerText}>Aviable on iOS and Android</Text>
        </View>
        <View style={styles.outer}>
            <Text style={styles.innerText}>Best quality videos</Text>
        </View>
    </ScrollView>
);

export default Horizontal;
