import react from "react";
import { useState } from "react";
import { View ,StyleSheet,StatusBar} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ActivityIndicator, Badge, Button, Icon, TextInput } from "react-native-paper";
const Component2Paper = () =>{
    const Results = useSafeAreaInsets();
    console.log(Results)

    const [state, setState] = useState(false);

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

            <TextInput
                mode="flat" 
                label={"Email"}
                // secureTextEntry
                error={true}
            />
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