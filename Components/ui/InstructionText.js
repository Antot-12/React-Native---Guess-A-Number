import {StyleSheet, Text} from "react-native";
import React from "react";
import Colors from "../../consts/Colors";

function instructionText({children, style}){
    return <Text style={[styles.instructionsContainer, style]}>{children} </Text>
        ;
}

export default instructionText;

const styles = StyleSheet.create({

    instructionsContainer:{
        color: Colors.primary800,
        fontSize: 32,
        fontFamily: "open-sans",

    },

});