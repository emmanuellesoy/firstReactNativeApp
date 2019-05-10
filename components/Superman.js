import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text } from "react-native";

const Superman = (props) => {
    const {
        children,
        style,
    } = props;
    const styles = StyleSheet.create(style);
    return (
        <Text style={styles.text}>{children}</Text>
    );
};

Superman.propTypes = {
    children: PropTypes.node,
    style: PropTypes.shape({}),
};

Superman.defaultProps = {
    children: [],
    style: {},
};

export default Superman;
