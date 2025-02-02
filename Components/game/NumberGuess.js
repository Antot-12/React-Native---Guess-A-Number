import {View, Text, StyleSheet, Dimensions } from "react-native";
import Color from "../../consts/Colors";


function NumberGuess({children}) {
        return <View style={styles.container}>
            <Text style={styles.numberText}>
                {children}
            </Text>
        </View>
}

export default NumberGuess;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        color: Color.primary800,
        padding: deviceWidth < 380 ? 12 : 20,
        borderRadius: 8,
        margin: deviceWidth < 380 ? 12 : 24,
        alignItems: "center",
        justifyContent: "center",
        borderColor: Color.primary800,
    },

    numberText: {
        fontSize: deviceWidth < 380 ? 28 : 36,
        color: Color.primary800,
        fontWeight: "bold",
    }
})