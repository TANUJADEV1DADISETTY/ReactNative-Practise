// import React from "react";
// import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import myIamge from "./assets/favicon.png";
// const App = () => {
//   return (
//     <SafeAreaView>
//       <Text style = {{"color" : "red"}}>Aditya University</Text>
//       <Button title="click" />
//       <TouchableOpacity><Text style = {myStyles.myText}>Aditya University</Text></TouchableOpacity>

//       <Image
//         source={{
//           uri : "https://adityauniversity.in/static/media/Cotton.2078733bcec7c2c9e80c.webp"
//         }}
//         style = {{width : 300, height : 200}}
//       />
//     </SafeAreaView>
//   );
// };

// export default App;


// const myStyles = StyleSheet.create({
//   myText : {
//     color : "yellow",
//     fontSize : 40,
//     fontWeight : "900"
//   }
// })



import react from "react";
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from "react-native";
import MyImage from "./assets/favicon.png"
import { StatusBar } from "react-native";
import Component from "./Component";
import Component1 from "./component1";
import Component2Paper from "./Component2Paper";
import ReactPaperTask from "./ReactPaperTask";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Home from "./Home";
import Contact from "./Contact";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "react-native-paper";

const App = () => {
  const stack = createNativeStackNavigator()
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <stack.Navigator 
              screenOptions={{
                // title : "Hello"
                // headerShown : false
                // headerStyle : {backgroundColor : "pink"}
                // headerTintColor : "red"
                // headerTitleStyle : {fontSize : 30, fontFamily : "Italic"}
                // headerTitleAlign : "center"
                headerRight : () => <Icon source={"bell"} size={30}/>,
                animation:"fade"             
              }}
          >
            <stack.Screen name = "Home" component={Home} />
            <stack.Screen name = "Contact" component={Contact} />
          </stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
      
      
    </>
  )
}

export default App;