import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Alert,
    Dimensions,
    keyboardAvoidingView,
    ScrollView, KeyboardAvoidingView
} from "react-native";
import Game_Button from "../Components/ui/Game_Button";
import React, {useState} from "react";
import Colors from "../consts/Colors";
import Title from "../Components/ui/Title";
import Card from "../Components/ui/Card";
import InstructionText from "../Components/ui/InstructionText";

function StartScreenGame({onPickNumber})
{

    const [enteredNumberOfGame, setEnteredNumberOfGame] = useState('');

    function numberInputHandler(enteredText)
    {
        setEnteredNumberOfGame(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumberOfGame('');
    }

    function confirmInputHandler(enteredText){
       const numberOfGame = parseInt(enteredNumberOfGame);

       if(isNaN(numberOfGame) || numberOfGame <= 0 || numberOfGame > 99){
           Alert.alert("Invalid number!", "Number has to be a number between 1 and 99", [
               {text: 'Okay', style: 'destructive', onPress: resetInputHandler}
           ]);
           return;
       }

       onPickNumber(numberOfGame);
    }

    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position"  >
        <View>
        <Title>Guess My Number</Title>
        <Card>
            <InstructionText style={styles.instructionsContainer}>Enter a Number </InstructionText>
        <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} value={enteredNumberOfGame} onChangeText={numberInputHandler}/>
              <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <Game_Button onPress={confirmInputHandler}>Confirm</Game_Button>
                    </View>
                  <View style={styles.buttonContainer}>
                        <Game_Button onPress={resetInputHandler}>Reset</Game_Button>
                  </View>
              </View>
         </Card>
    </View>
    </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartScreenGame;

const deviceheight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    // inputContainer: {
    //     justifyContent: "center",
    //     alignItems: "center",
    //     padding: 16,
    //     marginTop: 36,
    //     marginHorizontal: 24,
    //     borderRadius: 8,
    //     elevation: 8,
    //     backgroundColor: Colors.primary700
    // },

    screen:
    {
        flex: 1,
    },

    screenContainer:{
        flex: 1,
        marginTop: deviceheight < 320 ? 10 : 90,
        alignItems: 'center',
        color: Colors.primary800,
    },


    numberInput: {
        height: 50,
        fontSize: 34,
        width: 50,
        borderBottomColor: Colors.primary800,
        borderBottomWidth: 2,
        color: Colors.primary800,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    buttonsContainer:{
        flexDirection: 'row',
    },
    buttonContainer:{
        flex: 1,
    }
})