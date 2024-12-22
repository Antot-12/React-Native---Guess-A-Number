import { Button, View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../consts/Colors";

function Game_Button({ children, onPress }) {

    return (

        <View style={styles.buttonOuterContainer}>
            <Pressable android_ripple={{color: Colors.primary600}} style={({pressed}) => [styles.buttonInnerContainer, pressed && {backgroundColor: Colors.primary700}]} onPress={onPress}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>

    );
}

export default Game_Button;

const styles = StyleSheet.create({

    buttonOuterContainer: {
        borderRadius: 29,
        margin: 4,
        overflow: 'hidden',
    },

    buttonInnerContainer: {
        backgroundColor: Colors.primary600,

        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 6,

    },

    buttonText: {
     color: 'white',
     textAlign: 'center'
    },




})
