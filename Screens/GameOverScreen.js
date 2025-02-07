// // // import {Text, StyleSheet, View, Image, Dimensions, useWindowDimensions, ScrollView} from "react-native";
// // // import Title from "../Components/ui/Title";
// // // import Colors from "../consts/Colors";
// // // import Game_Button from "../Components/ui/Game_Button";
// // //
// // // function GameOverScreen({roundsNumber, userNumber, onStartNewGame})
// // // {
// // //     const {width, height} = useWindowDimensions();
// // //
// // //     let imgsize = 300;
// // //
// // //     if(width < 300){
// // //         imgsize = 150;
// // //     }
// // //
// // //     if(height < 400){
// // //         imgsize = 80;
// // //     }
// // //
// // //     const imgStyle =
// // //         {
// // //           width: imgsize,
// // //           height: imgsize,
// // //           borderRadius: imgsize / 2,
// // //         };
// // //
// // //
// // //
// // //     return  <ScrollView style={styles.screen}>
// // //
// // //             <View style={styles.screenContainer}>
// // //                 <Title>GAME OVER!!! </Title>
// // //                 <View style={[styles.imageContainer, imgStyle]}>
// // //                     <Image style={styles.image} source={require('../assets/success.png')} />
// // //                 </View>
// // //                 <Text style={styles.summaryText}> Your Phone Needed <Text style={styles.hightlight}>{roundsNumber}</Text> Rounds To Guess The Number <Text style={styles.hightlight}>{userNumber}</Text>!</Text>
// // //                   <Game_Button onPress={onStartNewGame}>Start New Game</Game_Button>
// // //             </View>
// // //          </ScrollView>
// // // }
// // //
// // // export default GameOverScreen;
// // //
// // // // const deviceWidth = Dimensions.get("window").width;
// // //
// // // const styles = StyleSheet.create({
// // //     screen: {
// // //         flex: 1
// // //     },
// // //
// // //     imageContainer: {
// // //         // width: deviceWidth < 380 ? 150 : 300,
// // //         // height: deviceWidth < 380 ? 150 : 300,
// // //         // borderRadius: deviceWidth < 380 ? 75 : 150,
// // //         // //
// // //         // borderRadius: 150,
// // //         // height: 300,
// // //         // width: 300,
// // //         borderWidth: 3,
// // //         borderColor: Colors.primary800,
// // //         overflow: 'hidden',
// // //         margin: 36,
// // //
// // //     },
// // //     image:
// // //     {
// // //         // width: deviceWidth < 380 ? 150 : 300,
// // //         // height: deviceWidth < 380 ? 150 : 300,
// // //         // borderRadius: deviceWidth < 380 ? 75 : 150,
// // //         //
// // //
// // //         width: '100%',
// // //         height: '100%',
// // //
// // //
// // //     },
// // //     screenContainer:
// // //     {
// // //         flex: 1,
// // //         padding: 24,
// // //         justifyContent: 'center',
// // //         alignItems: 'center',
// // //     },
// // //     summaryText:
// // //     {
// // //         fontFamily: "open-sans",
// // //         fontSize: 24,
// // //         textAlign: "center",
// // //         marginBottom: 24,
// // //     },
// // //     hightlight:
// // //     {
// // //         fontFamily: "open-sans-bold",
// // //         color: Colors.primary700,
// // //     }
// // // })
// // import { Text, StyleSheet, View, Image, useWindowDimensions } from "react-native";
// // import Title from "../Components/ui/Title";
// // import Colors from "../consts/Colors";
// // import Game_Button from "../Components/ui/Game_Button";
// //
// // function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
// //     const { width, height } = useWindowDimensions();
// //
// //     let imgSize = width * 0.5;
// //     if (height < 600) imgSize = width * 0.3;
// //
// //     const imgStyle = {
// //         width: imgSize,
// //         height: imgSize,
// //         borderRadius: imgSize / 2,
// //     };
// //
// //     return (
// //         <View style={styles.screen}>
// //             <Title>GAME OVER!!!</Title>
// //             <View style={[styles.imageContainer, imgStyle]}>
// //                 <Image style={styles.image} source={require("../assets/success.png")} />
// //             </View>
// //             <Text style={styles.summaryText}>
// //                 Your Phone Needed <Text style={styles.highlight}>{roundsNumber}</Text> Rounds To Guess The Number{" "}
// //                 <Text style={styles.highlight}>{userNumber}</Text>!
// //             </Text>
// //             <View style={styles.buttonContainer}>
// //                 <Game_Button style={styles.button} onPress={onStartNewGame}>Start New Game</Game_Button>
// //             </View>
// //         </View>
// //     );
// // }
// //
// // export default GameOverScreen;
// //
// // const styles = StyleSheet.create({
// //     screen: {
// //         flex: 1,
// //         justifyContent: "center",
// //         alignItems: "center",
// //         padding: 20,
// //     },
// //     imageContainer: {
// //         borderWidth: 3,
// //         borderColor: Colors.primary800,
// //         overflow: "hidden",
// //         marginVertical: 20,
// //     },
// //     image: {
// //         width: "100%",
// //         height: "100%",
// //     },
// //     summaryText: {
// //         fontFamily: "open-sans",
// //         fontSize: 20,
// //         textAlign: "center",
// //         marginBottom: 24,
// //     },
// //     highlight: {
// //         fontFamily: "open-sans-bold",
// //         color: Colors.primary700,
// //     },
// //     buttonContainer: {
// //         marginTop: 20,
// //     },
// //     button: {
// //         backgroundColor: "#5c0029",
// //         borderRadius: 20,
// //         paddingVertical: 10,
// //         paddingHorizontal: 30,
// //     },
// // });
//
// import React from "react";
// import {Text, StyleSheet, View, Image, useWindowDimensions} from "react-native";
// import Title from "../Components/ui/Title";
// import Colors from "../consts/Colors";
// import Game_Button from "../Components/ui/Game_Button";
//
// function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
//     const {width, height} = useWindowDimensions();
//     let imgSize = 300;
//     if(width < 300) {
//         imgSize = 150;
//     }
//     if(height < 400) {
//         imgSize = 80;
//     }
//     const imgStyle = {
//         width: imgSize,
//         height: imgSize,
//         borderRadius: imgSize / 2
//     };
//
//     return (
//         <View style={styles.screen}>
//             <Title>GAME OVER!!!</Title>
//             <View style={[styles.imageContainer, imgStyle]}>
//                 <Image style={styles.image} source={require('../assets/success.png')} />
//             </View>
//             <Text style={styles.summaryText}>
//                 Your Phone Needed <Text style={styles.hightlight}>{roundsNumber}</Text> Rounds To Guess The Number <Text style={styles.hightlight}>{userNumber}</Text>!
//             </Text>
//             <Game_Button onPress={onStartNewGame}>Start New Game</Game_Button>
//         </View>
//     );
// }
//
// export default GameOverScreen;
//
// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         padding: 24,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     imageContainer: {
//         borderWidth: 3,
//         borderColor: Colors.primary800,
//         overflow: 'hidden',
//         margin: 36
//     },
//     image: {
//         width: '100%',
//         height: '100%'
//     },
//     summaryText: {
//         fontFamily: "open-sans",
//         fontSize: 24,
//         textAlign: "center",
//         marginBottom: 24
//     },
//     hightlight: {
//         fontFamily: "open-sans-bold",
//         color: Colors.primary700
//     }
// });

// GameOverScreen.js
import React from "react";
import {Text, StyleSheet, View, Image, ScrollView, useWindowDimensions} from "react-native";
import Title from "../Components/ui/Title";
import Colors from "../consts/Colors";
import Game_Button from "../Components/ui/Game_Button";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    const {width, height} = useWindowDimensions();
    const imageSize = Math.min(width * 0.7, height * 0.3);
    const finalImageSize = imageSize < 80 ? 80 : imageSize;
    const imageStyle = {
        width: finalImageSize,
        height: finalImageSize,
        borderRadius: finalImageSize / 2
    };

    return (
        <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContainer}>
            <View style={styles.screenContainer}>
                <Title>GAME OVER!!!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image style={styles.image} source={require('../assets/success.png')} />
                </View>
                <Text style={styles.summaryText}>
                    Your Phone Needed <Text style={styles.hightlight}>{roundsNumber}</Text> Rounds To Guess The Number <Text style={styles.hightlight}>{userNumber}</Text>!
                </Text>
                <Game_Button onPress={onStartNewGame}>Start New Game</Game_Button>
            </View>
        </ScrollView>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    screenContainer: {
        padding: 24,
        alignItems: 'center'
    },
    imageContainer: {
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: "open-sans",
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24
    },
    hightlight: {
        fontFamily: "open-sans-bold",
        color: Colors.primary700
    }
});
