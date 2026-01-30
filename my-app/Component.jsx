import react from "react";
import { View ,StyleSheet,StatusBar,Text} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const Component = () =>{
    const Results = useSafeAreaInsets();
    console.log(Results)
    return(
        <>
            <StatusBar barStyle="light-content" />
            <View style={[Mystyles.MystatusBar,{paddingTop:Results.top}]}>
            </View>
            <Text>Aditya university</Text>
        </>
    )
}
export default Component;

const Mystyles = StyleSheet.create({
    MystatusBar:{
        backgroundColor:"green"
    }
})