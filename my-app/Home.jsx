import React from "react";
import { Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
    const navigation = useNavigation();
    return (
        <>
            <Text>Hello, I am Home screen!!!!</Text>
            <Button mode = "contained" onPress = {() => {navigation.navigate('Contact', {userId : "123"})}}>Move to contact page</Button>
        </>
    ) 
}

export default Home