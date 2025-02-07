import Colors from "../../consts/Colors";
import {Text, TextInput, View, StyleSheet, Alert, Dimensions} from "react-native";

function Card({children})
{
    return <View style={styles.card}>{children}</View>

    }



export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 16 : 20,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary700,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },

})
