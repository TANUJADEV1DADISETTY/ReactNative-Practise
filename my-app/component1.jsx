import react from "react";
import { View ,StyleSheet,StatusBar,Text, Image,FlatList} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Person_1 from "./assets/Person_1.jpg";
import Person_2 from "./assets/Person_2.jpg";
import Person_3 from "./assets/Person_3.jpg";
import Person_4 from "./assets/Person_4.jpg";
import Person_5 from "./assets/Person_5.jpg";

const Component1 = () =>{
    const Results = useSafeAreaInsets();
    const Mydata = [
        {
            id : 1,
            contactImg : Person_1,
            contactName : "Alice",
            contactMsg : "How are you ??.."
        },
        {
            id : 2,
            contactImg : Person_2,
            contactName : "Bob",
            contactMsg : "What are you doing ??..."
        },
        {
            id : 3,
            contactImg : Person_3,
            contactName : "Charlie",
            contactMsg : "I am charlie !!"
        },
        {
            id : 4,
            contactImg : Person_4,
            contactName : "Emma",
            contactMsg : "Are you coming ??.."
        },
        {
            id : 5,
            contactImg : Person_5,
            contactName : "Ferrik",
            contactMsg : "I am laughing!!.."
        },
        {
            id : 6,
            contactImg : Person_1,
            contactName : "Alice",
            contactMsg : "How are you ??.."
        },
        {
            id : 7,
            contactImg : Person_2,
            contactName : "Bob",
            contactMsg : "What are you doing ??..."
        },
        {
            id : 8,
            contactImg : Person_3,
            contactName : "Charlie",
            contactMsg : "I am charlie !!"
        },
        {
            id : 9,
            contactImg : Person_4,
            contactName : "Emma",
            contactMsg : "Are you coming ??.."
        },
        {
            id : 10,
            contactImg : Person_5,
            contactName : "Ferrik",
            contactMsg : "I am laughing!!.."
        }
    ]
    return(
        <>
            {/* <StatusBar barStyle="light-content" />
            <View style={[Mystyles.MystatusBar,{paddingTop:Results.top}]}>
            </View>
            <Text>Aditya university</Text> */}

            <FlatList 
                data = {Mydata}
                renderItem={({item}) => 
                    <View style = {Mystyles.parent_view}>
                        <View style = {Mystyles.image_view}>
                            <Image source={item.contactImg} style = {Mystyles.img}/>
                        </View>
                        <View style = {Mystyles.info_view}>
                            <Text style = {Mystyles.contact}>{item.contactName}</Text>
                            <Text>{item.contactMsg}</Text>
                        </View>
                    </View>
                }
                // keyExtractor={({item}) => item.id}
            />
        </>
    )
}
export default Component1;

const Mystyles = StyleSheet.create({
    MystatusBar:{
        backgroundColor:"green"
    },
    parent_view : {
        width : "100%",
        marginVertical : 5,
        flexDirection : "row",
        backgroundColor : "#D9D9D9"
    },
    image_view : {
        height : 100,
        width : 100
    },
    img : {
        height : "100%",
        width : "100%",
        borderRadius : 50
    },
    info_view : {
        justifyContent : "center",
        paddingLeft : 10
    },
    contact : {
        fontSize : 20,
        fontWeight : 600
    }
})