import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
} from "react-native";

const LOGO = require("../assets/icon.png");

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 80,
        backgroundColor: "#f5f5f5",
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 4,
        borderColor: "#464c53",
    },
    logo: {
        width: 32,
        height: 32,
    },
    text: {
        marginLeft: 10,
        color: "#464c53",
        fontWeight: "bold",
        fontSize: 16,
        fontStyle: "italic",
    },
});

const Header = () => (
    <View style={styles.header}>
        <Image
            source={LOGO}
            style={styles.logo}
        />
        <Text style={styles.text}>
            sh4nn0nb1t Shopping Cart
        </Text>
    </View>
);

export default Header;
