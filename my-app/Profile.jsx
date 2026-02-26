import React from "react";
import { Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const Profile = () => {
    const navigation = useNavigation();
    return (
        <>
            <Text>Hello, I am Profile screen!!!!</Text>
        </>
    ) 
}

export default Profile