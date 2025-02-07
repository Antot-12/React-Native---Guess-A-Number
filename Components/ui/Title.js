// // import {Text, StyleSheet, Platform} from "react-native";
// // import React from "react";
// //
// // function Title({children}) {
// //     return <Text style={styles.title}>{children}</Text>;
// // }
// // export default Title;
// //
// // const styles = StyleSheet.create({
// //     title: {
// //         fontFamily: 'open-sans-bold',
// //         fontSize: 24,
// //         marginTop: 100,
// //         // fontWeight: "bold",
// //         textAlign: "center",
// //         marginBottom: 20,
// //         color: 'white' ,
// //         // borderWidth: Platform.OS === 'android' ? 3 : 1,
// //         borderWidth: Platform.select({ios: 1 , android: 3 }) ,
// //         borderColor: 'white',
// //         padding: 12,
// //         marginLeft: '15%',
// //         maxWidth: '80%',
// //         width: 300,
// //     },
// // })
//
// import { Text, StyleSheet, View, useWindowDimensions } from "react-native";
// import React from "react";
//
// function Title({ children }) {
//     const { width, height } = useWindowDimensions();
//     const dynamicMarginTop = height * 0.05;
//
//     return (
//         <View style={[styles.container, { marginTop: dynamicMarginTop }]}>
//             <Text style={styles.title}>{children}</Text>
//         </View>
//     );
// }
//
// export default Title;
//
// const styles = StyleSheet.create({
//     container: {
//         alignItems: "center",
//         width: "100%",
//     },
//     title: {
//         fontFamily: "open-sans-bold",
//         fontSize: 24,
//         textAlign: "center",
//         color: "gold",
//         borderWidth: 2,
//         borderColor: "gold",
//         padding: 12,
//         width: "80%",
//         maxWidth: 300,
//     },
// });

import React from "react";
import {Text, StyleSheet, Platform, useWindowDimensions} from "react-native";

function Title({children}) {
    const {height} = useWindowDimensions();
    const dynamicMarginTop = Math.max(height * 0.05, 20);
    return <Text style={[styles.title, {marginTop: dynamicMarginTop}]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        textAlign: "center",
        marginBottom: 20,
        color: 'white',
        borderWidth: Platform.select({ios: 1, android: 3}),
        borderColor: 'white',
        padding: 12,
        alignSelf: 'center',
        maxWidth: '80%',
        width: 300
    }
});

