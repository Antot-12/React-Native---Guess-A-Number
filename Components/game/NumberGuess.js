import {View, Text, StyleSheet} from "react-native";
import Color from "../../consts/Colors";


function NumberGuess({children}) {
        return <View style={styles.container}>
            <Text style={styles.numberText}>
                {children}
            </Text>
        </View>
}

export default NumberGuess;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        color: Color.primary800,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: "center",
        justifyContent: "center",
        borderColor: Color.primary800,
    },

    numberText: {
        fontSize: 36,
        color: Color.primary800,
        fontWeight: "bold",
    }
})