import react from "react";
import Home from "./Home";
import Contact from "./Contact";
import { Icon } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const toptab = createMaterialTopTabNavigator();
const ToptabNavigation = () => {
    const data = useSafeAreaInsets();
    console.log(data);
    return (
        <NavigationContainer>
            <toptab.Navigator
                screenOptions={({route})=>({
                    tabBarIcon:({focused, color})=>{
                        let IconName;
                        if(route.name == 'Home') {
                            IconName = focused ? "home" : "home-outline"
                        }
                        if(route.name == 'Contact') {
                            IconName = focused ? "cog" : "cog-outline"
                        }
                        return <Icon source = {IconName} size = {26} color = {color}/>
                    },
                    tabBarStyle: {
                        paddingTop : data.top
                    },
                    tabBarItemStyle : {
                        flexDirection : "row"
                    },
                    tabBarActiveTintColor:"purple",
                    tabBarInactiveTintColor:"pink"
                })}  
            >
                <toptab.Screen name = "Home" component={Home}/>
                <toptab.Screen name = "Contact" component={Contact}/>
            </toptab.Navigator>
        </NavigationContainer>
    )
}

export default ToptabNavigation