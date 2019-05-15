import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#ba88ef",
        marginTop: 10,
        paddingVertical: 15,
    },
    buttonText: {
        color: "#f5f5f5",
        fontWeight: "bold",
        textAlign: "center",
    },
    container: {
        flex: 1,
    },
    input: {
        backgroundColor: "rgba(239, 239, 239, 0.8)",
        color: "#464c53",
        height: 40,
        marginTop: 10,
        padding: 5,
    },
});

const Login = () => (
    <View style={styles.container}>
        <TextInput
            placeholder="username"
            style={styles.input}
        />
        <TextInput
            placeholder="password"
            style={styles.input}
        />
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </View>
);

export default Login;
