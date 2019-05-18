import React from "react";
import {
    View,
    StyleSheet,
    Text,
} from "react-native";

const styles = StyleSheet.create({
    text: {
        shadowColor: "#f5f5f5",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        borderRadius: 10,

        elevation: 1,
        alignSelf: "center",
        fontSize: 24,
        color: "#464c53",
        textAlign: "center",
        backgroundColor: "rgba(245, 245, 245, 0.7)",
        padding: 10,
        fontWeight: "bold",
    },
});

const HeroText = () => (
    <View>
        <Text style={styles.text}>Laptops</Text>
    </View>
);

export default HeroText;
