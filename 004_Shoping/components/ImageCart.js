import PropTypes from "prop-types";
import React from "react";
import {
    Image,
    StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
    image: {
        height: 160,
        width: "100%",
    },
});

const ImageCart = (props) => {
    const {
        source,
    } = props;
    return (
        <Image
            source={source}
            style={styles.image}
        />
    );
};

ImageCart.propTypes = {
    source: PropTypes.number.isRequired,
};

export default ImageCart;
