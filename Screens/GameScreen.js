// // import React, {useEffect, useState} from "react";
// // import {Text, View, StyleSheet, Alert, FlatList, useWindowDimensions} from "react-native";
// // import Title from "../Components/ui/Title";
// // import NumberGuess from "../Components/game/NumberGuess";
// // import Game_Button from "../Components/ui/Game_Button";
// // import Colors from "../consts/Colors";
// // import Card from "../Components/ui/Card";
// // import InstructionText from "../Components/ui/InstructionText";
// // import Ionicons from '@expo/vector-icons/Ionicons';
// // import ListOfItems from "../Components/game/ListOfItems";
// //
// //
// // function generateRandomBetween(min, max, exclude) {
// //     const rndNum = Math.floor(Math.random() * (max - min)) + min;
// //
// //     if (rndNum === exclude) {
// //         return generateRandomBetween(min, max, exclude);
// //     } else {
// //         return rndNum;
// //     }
// // }
// //
// // let minboundary = 1;
// // let maxboundary = 100;
// //
// //
// // function GameScreen({userNumber, onGameOver}) {
// //
// //     const initGuess = generateRandomBetween(1, 100, userNumber);
// //     const [currentGuess, setCurrentGuess] = useState(initGuess);
// //     const [guessRounds, setGuessRounds] = useState([initGuess]);
// //     const {width, height} = useWindowDimensions();
// //
// //     useEffect(() => {
// //         if (currentGuess === userNumber)
// //         {
// //             onGameOver(guessRounds.length);
// //        }
// //     }, [currentGuess, userNumber, onGameOver]);
// //
// //     useEffect(() => {
// //         minboundary = 1;
// //         maxboundary = 100;
// //     }, [])
// //
// //     function nextGuessHandler(direction) {
// //         if (
// //             (direction === "lower" && currentGuess < userNumber) ||
// //             (direction === "greater" && currentGuess > userNumber)
// //         ) {
// //             Alert.alert(
// //                 "Don’t lie!",
// //                 "You know this is wrong...",
// //                 [{ text: "Sorry!", style: "cancel" }]
// //             );
// //             return;
// //         }
// //
// //         if (direction === "lower")
// //         {
// //             maxboundary = currentGuess;
// //         }
// //         else
// //         {
// //             minboundary = currentGuess + 1;
// //         }
// //
// //         const newRndNumber = generateRandomBetween(minboundary, maxboundary, currentGuess);
// //         setCurrentGuess(newRndNumber);
// //         setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
// //     }
// //
// //     const guessRoundsListLength = guessRounds.length;
// //
// //     let contents =
// //     <>
// //         <NumberGuess>{currentGuess}</NumberGuess>
// //         <Card style={styles.guessContainer}>
// //             <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
// //             <View style={styles.buttonsContainer}>
// //             </View>
// //         </Card>
// //     </>
// //
// //     if(width > 500)
// //     {
// //
// //             contents =
// //         <>
// //             <View style={styles.buttonsContainerWide}>
// //                 <View style={styles.buttonContainer}>
// //                     <Game_Button onPress={nextGuessHandler.bind(this, 'greater')}>
// //                         <Ionicons name="add" size={24} color={'white'} />
// //                     </Game_Button>
// //                 </View>
// //
// //                 <NumberGuess>{currentGuess}</NumberGuess>
// //
// //                 <View style={styles.buttonContainer}>
// //                     <Game_Button onPress={nextGuessHandler.bind(this, 'lower')}>
// //                         <Ionicons name="remove" size={24} color={'white'} />
// //
// //                     </Game_Button>
// //                 </View>
// //             </View>
// //             </>
// //     }
// //
// //
// //     return (
// //         <View style={styles.screen}>
// //             <Title>Computer`s Guess </Title>
// //             {contents}
// //             <View style={styles.logContainer}>
// //                 <FlatList data={guessRounds} renderItem={(itemData) => <ListOfItems roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>} keyExtractor={(item) => item}></FlatList>
// //
// //                 {/*{guessRounds.map(guessRounds => <Text key={guessRounds}>{guessRounds}</Text>)}*/}
// //             </View>
// //         </View>
// //     );
// // }
// //
// // const styles = StyleSheet.create({
// //     screen: {
// //         flex: 1,
// //         padding: 24,
// //         alignItems: 'center',
// //         alignSelf: "center",
// //     },
// //     instructionText: {
// //         marginBottom: 24,
// //     },
// //
// //     buttonsContainer: {
// //         flexDirection: 'row',
// //     },
// //     buttonContainer: {
// //         flex: 1,
// //     },
// //     buttonsContainerWide:
// //     {
// //       flexDirection: 'row',
// //       alignItems: "center",
// //     },
// //     listContainer: {
// //         flex: 1,
// //         padding: 16,
// //     },
// //     logContainer:
// //     {
// //         flex: 1,
// //         padding: 16,
// //
// //     },
// // });
// //
// // export default GameScreen;
//
// import React, { useEffect, useState } from "react";
// import { Text, View, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
// import Title from "../Components/ui/Title";
// import NumberGuess from "../Components/game/NumberGuess";
// import Game_Button from "../Components/ui/Game_Button";
// import Colors from "../consts/Colors";
// import Card from "../Components/ui/Card";
// import InstructionText from "../Components/ui/InstructionText";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import ListOfItems from "../Components/game/ListOfItems";
//
// function generateRandomBetween(min, max, exclude) {
//     const rndNum = Math.floor(Math.random() * (max - min)) + min;
//     if (rndNum === exclude) {
//         return generateRandomBetween(min, max, exclude);
//     } else {
//         return rndNum;
//     }
// }
//
// let minboundary = 1;
// let maxboundary = 100;
//
// function GameScreen({ userNumber, onGameOver }) {
//     const initGuess = generateRandomBetween(1, 100, userNumber);
//     const [currentGuess, setCurrentGuess] = useState(initGuess);
//     const [guessRounds, setGuessRounds] = useState([initGuess]);
//     const { width, height } = useWindowDimensions();
//
//     useEffect(() => {
//         if (currentGuess === userNumber) {
//             onGameOver(guessRounds.length);
//         }
//     }, [currentGuess, userNumber, onGameOver]);
//
//     useEffect(() => {
//         minboundary = 1;
//         maxboundary = 100;
//     }, []);
//
//     function nextGuessHandler(direction) {
//         if (
//             (direction === "lower" && currentGuess < userNumber) ||
//             (direction === "greater" && currentGuess > userNumber)
//         ) {
//             Alert.alert("Don’t lie!", "You know this is wrong...", [{ text: "Sorry!", style: "cancel" }]);
//             return;
//         }
//
//         if (direction === "lower") {
//             maxboundary = currentGuess;
//         } else {
//             minboundary = currentGuess + 1;
//         }
//
//         const newRndNumber = generateRandomBetween(minboundary, maxboundary, currentGuess);
//         setCurrentGuess(newRndNumber);
//         setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
//     }
//
//     const guessRoundsListLength = guessRounds.length;
//
//     return (
//         <View style={styles.screen}>
//             <Title>Computer's Guess</Title>
//             <NumberGuess>{currentGuess}</NumberGuess>
//             <Card style={styles.guessContainer}>
//                 <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
//                 <View style={styles.buttonsContainer}>
//                     <Game_Button style={styles.button} onPress={nextGuessHandler.bind(this, "greater")}>
//                         <Ionicons name="add" size={24} color="white" />
//                     </Game_Button>
//                     <Game_Button style={styles.button} onPress={nextGuessHandler.bind(this, "lower")}>
//                         <Ionicons name="remove" size={24} color="white" />
//                     </Game_Button>
//                 </View>
//             </Card>
//             <View style={styles.logContainer}>
//                 <FlatList
//                     data={guessRounds}
//                     renderItem={(itemData) => (
//                         <ListOfItems roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />
//                     )}
//                     keyExtractor={(item) => item.toString()}
//                 />
//             </View>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         padding: 24,
//         alignItems: "center",
//     },
//     instructionText: {
//         marginBottom: 24,
//     },
//     buttonsContainer: {
//         flexDirection: "row",
//         justifyContent: "space-around",
//         width: "100%",
//     },
//     button: {
//         backgroundColor: "#5c0029",
//         borderRadius: 20,
//         paddingVertical: 10,
//         paddingHorizontal: 30,
//         marginHorizontal: 10,
//     },
//     logContainer: {
//         flex: 1,
//         padding: 16,
//     },
// });
//
// export default GameScreen;


import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, Alert, FlatList, useWindowDimensions} from "react-native";
import Title from "../Components/ui/Title";
import NumberGuess from "../Components/game/NumberGuess";
import Game_Button from "../Components/ui/Game_Button";
import Colors from "../consts/Colors";
import Card from "../Components/ui/Card";
import InstructionText from "../Components/ui/InstructionText";
import Ionicons from '@expo/vector-icons/Ionicons';
import ListOfItems from "../Components/game/ListOfItems";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minboundary = 1;
let maxboundary = 100;

function GameScreen({userNumber, onGameOver}) {
    const initGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initGuess);
    const [guessRounds, setGuessRounds] = useState([initGuess]);
    const {width, height} = useWindowDimensions();

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minboundary = 1;
        maxboundary = 100;
    }, []);

    function nextGuessHandler(direction) {
        if (
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "greater" && currentGuess > userNumber)
        ) {
            Alert.alert("Don’t lie!", "You know this is wrong...", [{ text: "Sorry!", style: "cancel" }]);
            return;
        }
        if (direction === "lower") {
            maxboundary = currentGuess;
        } else {
            minboundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minboundary, maxboundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundsListLength = guessRounds.length;

    let contents = (
        <>
            <NumberGuess>{currentGuess}</NumberGuess>
            <Card style={styles.guessContainer}>
                <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <Game_Button onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add" size={24} color={'white'} />
                        </Game_Button>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Game_Button onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size={24} color={'white'} />
                        </Game_Button>
                    </View>
                </View>
            </Card>
        </>
    );

    if(width > 500) {
        contents = (
            <View style={styles.buttonsContainerWide}>
                <View style={styles.buttonContainer}>
                    <Game_Button onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="add" size={24} color={'white'} />
                    </Game_Button>
                </View>
                <NumberGuess>{currentGuess}</NumberGuess>
                <View style={styles.buttonContainer}>
                    <Game_Button onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove" size={24} color={'white'} />
                    </Game_Button>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.screen}>
            <Title>Computer`s Guess</Title>
            {contents}
            <View style={styles.logContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => (
                        <ListOfItems
                            roundNumber={guessRoundsListLength - itemData.index}
                            guess={itemData.item}
                        />
                    )}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        alignSelf: "center"
    },
    instructionText: {
        marginBottom: 24
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    buttonsContainerWide: {
        flexDirection: 'row',
        alignItems: "center"
    },
    listContainer: {
        flex: 1,
        padding: 16
    },
    logContainer: {
        flex: 1,
        padding: 16
    },
    guessContainer: {
        alignItems: 'center'
    }
});
