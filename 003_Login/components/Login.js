import React from "react";
import {
    Dimensions,
    Image,
    KeyboardAvoidingView,
    Text,
    StyleSheet,
    View,
} from "react-native";

import Form from "./Form";

const LOGO = require("../assets/icon.png");

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    form: {
        flex: 1,
        padding: 15,
        width: Dimensions.get("window").width,
    },
    logoContainer: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 100,
        height: 100,
    },
    text: {
        color: "#F5F5F5",
        fontSize: 16,
        fontWeight: "bold",
        margin: 16,
    },
});

const Login = () => (
    <KeyboardAvoidingView
        behavior="padding"
        style={styles.container}
    >
        <View style={styles.logoContainer}>
            <Image
                source={LOGO}
            />
            <Text style={styles.text}>A simple login screen</Text>
        </View>
        <View style={styles.form}>
            <Form />
        </View>
    </KeyboardAvoidingView>
);

export default Login;
