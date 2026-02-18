import React from "react";
import { useState } from "react";
import { View ,StyleSheet,StatusBar, FlatList} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TextInput, Button, Text, Chip } from "react-native-paper";
const ReactPaperTask = () =>{
    const Results = useSafeAreaInsets();
    console.log(Results)

    const [text, setText] = useState("");
    const [items, setItems] = useState([]);
    // const [status, setStatus] = useState(false);
    const add = () => {
        if(text.trim() != "") {
            setItems([...items, text])
            setText("")
        }
    }
    
    return(
        <>
            <StatusBar barStyle="light-content" />
            <View style={[Mystyles.MystatusBar,{paddingTop:Results.top}]}>
            </View>
            <Text style = {Mystyles.heading}>React-native-paper</Text>
            <TextInput 
                style = {Mystyles.MytextBox}
                mode="flat"
                label = {"Enter the text"}
                value = {text}
                onChangeText={(text) => setText(text)}
                
            />
            <Button
                width = "50%"
                mode="contained"
                disabled = {items.length == 5}
                onPress={add}
            >Add the text</Button>

            <FlatList
                data={items}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={{ marginTop: 5 }}>
                            <Chip
                                closeIcon="close"
                                width = "50%"
                                onClose={() => {
                                    const updatedItems = items.filter((item, i) => i !== index);
                                    setItems(updatedItems);
                                }}
                            >{item}</Chip>
                        </View>
                    )}
                />

        </>

    )
}
export default ReactPaperTask;

const Mystyles = StyleSheet.create({
    MystatusBar:{
        backgroundColor:"#7a01644f"
    },
    heading : {
        textAlign : "center",
        fontSize : 24,
        fontWeight : 600,
        color : "purple"
    },
    MytextBox : {
        marginTop : 5,
        marginBottom : 10
    },
    
})