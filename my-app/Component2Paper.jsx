import react from "react";
import { useState } from "react";
import { View ,StyleSheet,StatusBar} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import myImage from "./assets/Person_1.jpg"
import { ActivityIndicator, Badge, Button, Icon, TextInput, Dialog, Text, Card } from "react-native-paper";
const Component2Paper = () =>{
    const Results = useSafeAreaInsets();
    console.log(Results)

    const [status, setStatus] = useState(false);
    return(
        <>
            <StatusBar barStyle="light-content" />
            <View style={[Mystyles.MystatusBar,{paddingTop:Results.top}]}>
            </View>
            {/* <ActivityIndicator 
                size={60}
                color="red"
                // animating = {false}
            /> */}

            {/* <Badge 
                size = {40} 
                style = {Mystyles.badgeStyle}>24
            </Badge> */}

            {/* <Button
                mode="contained"
                // mode = "outlined"
                icon={"home"}
                buttonColor="purple"
                textColor="white"
                style = {Mystyles.buttonStyle}
                loading = {state}
                onPress = {() => setState(!state)}
                // disabled = {true}
            >
                Click me!!
            </Button>


            <Icon source="home" size={50} color="black" /> */}

            {/* <TextInput
                mode="flat" 
                label={"Email"}
                secureTextEntry
                error={true}
            /> */}
            {/* <Button mode = "contained" onPress = {() => setStatus(!status)}>Show dialog box</Button>

            <Dialog visible = {status} onDismiss={() => setStatus(!status)}>
                <Dialog.Title>Welcoming</Dialog.Title>
                <Dialog.Content>
                    <Text>Hello!!! How are you??..</Text>
                </Dialog.Content>
                <Dialog.Icon icon={"home"} /> */}
                {/* <Dialog.Actions>
                    <Button onPress = {() => setStatus(!status)} mode = "outlined">I am fine</Button>
                    <Button onPress = {() => setStatus(!status)} mode = "outlined">I am bad</Button>
                </Dialog.Actions>
            </Dialog> */}
            <Card mode = "outlined">
                <Card.Cover source = {myImage} />
                <Card.Content>
                    <Text>Helloooooooooooooooooooooooooooooooooooo</Text>
                </Card.Content>
                <Card.Actions>
                    <Button>Know more</Button>
                    <Button>Know about</Button>
                </Card.Actions>
            </Card>
        </>
    )
}
export default Component2Paper;

const Mystyles = StyleSheet.create({
    MystatusBar:{
        backgroundColor:"green"
    },
    badgeStyle : {
        size : 30,
        backgroundColor : "purple"
    },

    buttonStyle : {
        width : "50%"
    }
})