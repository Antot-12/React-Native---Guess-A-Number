import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, ImageBackground, SafeAreaView} from 'react-native';
import StartScreenGame from "./Screens/StartScreenGameOpener";
import { LinearGradient } from "expo-linear-gradient";
import {useState} from "react";
import startScreenGameOpener from "./Screens/StartScreenGameOpener";
import GameScreen from "./Screens/GameScreen";
import gameScreen from "./Screens/GameScreen";
import Colors from "./consts/Colors";
import GameOverScreen from "./Screens/GameOverScreen";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {

    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });

    if(!fontsLoaded)
    {
        return <AppLoading/>;
    }

    function pickedNumberOfGame(pickedNumberOfGame) {
        setUserNumber(pickedNumberOfGame);
        setGameIsOver(false);
    }

    function gameOverHandler(numberOfRounds)
    {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds);
    }

    function startNewGameHandler(){
        setUserNumber(null);
        setGuessRounds(0);
    }
    let screen = null;

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler} />;
    }
    else if (userNumber)
    {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
    }
    else
    {
        screen = <StartScreenGame onPickNumber={pickedNumberOfGame} />;
    }


    // if (gameIsOver && userNumber) {
    //     screen = <GameOverScreen />
    // }
    //
    //
    // let screen = <StartScreenGame onPickNumber={pickedNumberOfGame} />;
    //
    // if (userNumber) {
    //     screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
    // }


    return (
        <>
            <StatusBar style='dark'/>
            <LinearGradient colors={[Colors.primary700, Colors.primary800]} style={styles.screenColor}>
                <ImageBackground source={require('./assets/dices.jpg')} resizeMode="cover" style={styles.screenColor} imageStyle={styles.backgroudImage}>
                    <SafeAreaView style={styles.screenColor}>{screen}</SafeAreaView>
                </ImageBackground>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    screenColor: {
        flex: 1,
    },

    backgroudImage:{
        opacity: 0.15,
    }
});
