// // import React from "react";
// // import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from "react-native";
// // import { SafeAreaView } from "react-native-safe-area-context";
// // import myIamge from "./assets/favicon.png";
// // const App = () => {
// //   return (
// //     <SafeAreaView>
// //       <Text style = {{"color" : "red"}}>Aditya University</Text>
// //       <Button title="click" />
// //       <TouchableOpacity><Text style = {myStyles.myText}>Aditya University</Text></TouchableOpacity>

// //       <Image
// //         source={{
// //           uri : "https://adityauniversity.in/static/media/Cotton.2078733bcec7c2c9e80c.webp"
// //         }}
// //         style = {{width : 300, height : 200}}
// //       />
// //     </SafeAreaView>
// //   );
// // };

// // export default App;


// // const myStyles = StyleSheet.create({
// //   myText : {
// //     color : "yellow",
// //     fontSize : 40,
// //     fontWeight : "900"
// //   }
// // })



// import react from "react";
// import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from "react-native";
// import MyImage from "./assets/favicon.png"
// import { StatusBar } from "react-native";
// import Component from "./Component";
// import Component1 from "./component1";
// import Component2Paper from "./Component2Paper";
// import ReactPaperTask from "./ReactPaperTask";
// import { SafeAreaProvider } from "react-native-safe-area-context";

// import Home from "./Home";
// import Contact from "./Contact";
// import { NavigationContainer } from "@react-navigation/native";
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Icon } from "react-native-paper";
// import { BottomTabBarHeightContext, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// // import ToptabNavigation from "./ToptabNavigation";
// import { createDrawerNavigator } from "@react-navigation/drawer";

// // const Drawer = createDrawerNavigator()
// const App = () => {
//   const Drawer = createDrawerNavigator()
//   // const stack = createNativeStackNavigator()
//   // const bottomtab = createBottomTabNavigator();
//   return (
//     <>
//       {/* <SafeAreaProvider> */}
//         {/* <NavigationContainer>
//           <stack.Navigator 
//               screenOptions={{
//                 title : "Hello",
//                 headerShown : false,
//                 headerStyle : {backgroundColor : "pink"},
//                 headerTintColor : "red",
//                 headerTitleStyle : {fontSize : 30, fontFamily : "Italic"},
//                 headerTitleAlign : "center",
//                 headerRight : () => <Icon source={"bell"} size={30}/>,
//                 animation:"fade"             
//               }}
//           >
//             <stack.Screen name = "Home" component={Home} />
//             <stack.Screen name = "Contact" component={Contact} />
//           </stack.Navigator>
//         </NavigationContainer> */}



//         {/* <NavigationContainer>
//             <bottomtab.Navigator
//                     screenOptions={({route})=>({
//                       tabBarIcon:({focused,color})=>{
//                         let IconName;
//                         if(route.name == 'Home'){
//                            IconName = focused ? 'home' : "home-outline"
//                         }
//                         if(route.name == "Contact"){
//                           IconName = focused ? "cog" : "cog-outline"
//                         }
//                         return <Icon source={IconName} size={30} color={color}/>
//                       },
//                       tabBarActiveTintColor:"green",
//                       tabBarInactiveTintColor:"black",
//                       headerShown:false,
//                       headerStyle:{
                        
//                       }
//                     })}
//                   >
//             <bottomtab.Screen name = "Home" component={Home} />
//             <bottomtab.Screen name = "Contact" component={Contact} />
//           </bottomtab.Navigator>
//         </NavigationContainer>
//       </SafeAreaProvider> */}

//       {/* <SafeAreaProvider>
//         <ToptabNavigation />
//       </SafeAreaProvider> */}

//       <NavigationContainer>
//         <Drawer.Navigator>
//           <Drawer.Screen name = "Home" component={Home} />
//           <Drawer.Screen name = "Contact" component = {Contact} />
//         </Drawer.Navigator>

//       </NavigationContainer>
      
      
//     </>
//   )
// }

// export default App;



// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";

// import Home from "./Home";
// import Contact from "./Contact";

// const Drawer = createDrawerNavigator();

// const App = () => {
//   return (
//     // <NavigationContainer>
//     //   <Drawer.Navigator>
//     //     <Drawer.Screen name="Home" component={Home} />
//     //     <Drawer.Screen name="Contact" component={Contact} />
//     //   </Drawer.Navigator>
//     // </NavigationContainer>
//     <>
//       <Home />
//     </>
//   );
// };

// export default App;


import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { Audio } from "expo-av"
export default function App() {
  const [MyRecording, setMyRecording] = useState(null)
  const [Uri, setUri] = useState(null)
  const Start = async () => {
    try {

      const permission = await Audio.requestPermissionsAsync();
      console.log(permission);

      if (!permission.granted) {
        alert("Microphone permission is required");
        return;
      }
      
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true
      })

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      )
      setMyRecording(recording);
    }
    catch (err) {
      console.log(err)
    }
  }
  const Stop = async () => {
    console.log(MyRecording)
    await MyRecording.stopAndUnloadAsync();
    console.log(MyRecording.getURI())
    setUri(MyRecording.getURI())
  }

  const Play = async () => {
    
    try {
      console.log(Uri)
      const { sound } = await Audio.Sound.createAsync({ uri : Uri })
      await sound.playAsync()
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <View style={{ marginTop: 100 }}>
      <Button onPress={Start}>Start Recording</Button>
      <Button onPress={Stop}>Stop Recording</Button>
      <Button onPress={Play}>Play Recording</Button>
    </View>
  );
}

