import React from "react";
import {
    StyleSheet,
    View,
} from "react-native";

import ImageCart from "./ImageCart";

const IMAGE_ONE = require("../assets/images/cam_002.jpg");
const IMAGE_TWO = require("../assets/images/cam_003.jpg");
const IMAGE_THREE = require("../assets/images/cam_004.jpg");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 5,
        backgroundColor: "#f5f5f5",
    },
    columnOne: {
        flex: 1,
        padding: 5,
    },
    columnTwo: {
        flex: 2,
        padding: 5,
    },
    columnFull: {
        width: "100%",
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
    },
});

const HeroImage = () => (
    <View style={styles.container}>
        <View style={styles.columnOne}>
            <ImageCart source={IMAGE_TWO} />
        </View>
        <View style={styles.columnTwo}>
            <ImageCart source={IMAGE_ONE} />
        </View>
        <View style={styles.columnFull}>
            <ImageCart source={IMAGE_THREE} />
        </View>
        <View style={styles.columnOne}>
            <ImageCart source={IMAGE_TWO} />
        </View>
        <View style={styles.columnTwo}>
            <ImageCart source={IMAGE_ONE} />
        </View>
        <View style={styles.columnFull}>
            <ImageCart source={IMAGE_THREE} />
        </View>
        <View style={styles.columnOne}>
            <ImageCart source={IMAGE_TWO} />
        </View>
        <View style={styles.columnTwo}>
            <ImageCart source={IMAGE_ONE} />
        </View>
        <View style={styles.columnFull}>
            <ImageCart source={IMAGE_THREE} />
        </View>
        <View style={styles.columnOne}>
            <ImageCart source={IMAGE_TWO} />
        </View>
        <View style={styles.columnTwo}>
            <ImageCart source={IMAGE_ONE} />
        </View>
        <View style={styles.columnFull}>
            <ImageCart source={IMAGE_THREE} />
        </View>
    </View>
);

export default HeroImage;
