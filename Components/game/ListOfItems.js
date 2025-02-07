import {View, Text, StyleSheet} from "react-native";
import Colors from "../../consts/Colors";

function listOfItems({roundNumber, guess}) {
    return <View style={styles.listOfItemss}>
        <Text style={styles.itemText}>{roundNumber}</Text>
        <Text style={styles.itemText}># My Guess: {guess}</Text>
    </View>
}

export default listOfItems;

const styles = StyleSheet.create({
    listOfItemss:
        {
            borderColor: Colors.primary700,
            borderWidth: 1,
            borderRadius: 40,
            padding: 12,
            marginVertical: 8,
            backgroundColor: Colors.primary800,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            elevation: 4,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.25,
        },
    itemText:
        {
            fontFamily: 'open-sans'
        }
})