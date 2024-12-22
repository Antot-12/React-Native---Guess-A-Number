import {Text, StyleSheet, View, Image} from "react-native";
import Title from "../Components/ui/Title";
import Colors from "../consts/Colors";
import Game_Button from "../Components/ui/Game_Button";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame})
{
    return <View style={styles.screenContainer}>
        <Title>GAME OVER!!! </Title>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/success.png')} />
        </View>
        <Text style={styles.summaryText}> Your Phone Needed <Text style={styles.hightlight}>{roundsNumber}</Text> Rounds To Guess The Number <Text style={styles.hightlight}>{userNumber}</Text>!</Text>
          <Game_Button onPress={onStartNewGame}>Start New Game</Game_Button>
    </View>
}

export default GameOverScreen;

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 150,
        height: 300,
        width: 300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,

    },
    image:
    {
        width: '100%',
        height: '100%',
    },
    screenContainer:
    {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    summaryText:
    {
        fontFamily: "open-sans",
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24,
    },
    hightlight:
    {
        fontFamily: "open-sans-bold",
        color: Colors.primary700,
    }
})