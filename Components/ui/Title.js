import {Text, StyleSheet} from "react-native";
import React from "react";

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        marginTop: 80,
        // fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: 'white' ,
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,

    },
})