import React from "react";
import {
    ImageBackground,
    StyleSheet,
} from "react-native";

import HeroText from "./HeroText";

const IMAGE = require("../assets/images/cam_001.jpg");

const styles = StyleSheet.create({
    image: {
        height: 220,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});

const HeroImage = () => (
    <ImageBackground
        source={IMAGE}
        style={styles.image}
    >
        <HeroText />
    </ImageBackground>
);

export default HeroImage;
