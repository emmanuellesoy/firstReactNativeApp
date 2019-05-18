import React from "react";
import {
    Image,
    StyleSheet,
} from "react-native";

const IMAGE = require("../assets/images/cam_001.jpg");

const styles = StyleSheet.create({
    image: {
        height: 220,
        width: "100%",
    },
});

const HeroImage = () => (
    <Image
        source={IMAGE}
        style={styles.image}
    />
);

export default HeroImage;
