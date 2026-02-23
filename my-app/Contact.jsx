import React from "react";
import { Text, Button } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";

const Contact = () => {
    const navigation = useNavigation();
    const routes = useRoute();

    console.log(routes.params);

    return (
        <>
            <Text>Hello, I am Contact screen!!!!</Text>
            <Button
                mode="contained"
                onPress={() => navigation.navigate('Home')}
            >
                Move to home page
            </Button>
        </>
    );
};

export default Contact;