// import React, { useState } from "react";
// import { View, Image, Text } from "react-native";
// import { Button } from "react-native-paper";
// import * as Imagepicker from "expo-image-picker";

// const Home = () => {

//     const [ImagePath, setImagePath] = useState(null);

//     const LaunchGallary = async () => {

//         const Response = await Imagepicker.requestMediaLibraryPermissionsAsync();

//         if (!Response.granted) {
//             alert("Please Give Access to Media");
//             return;
//         }

//         const Data = await Imagepicker.launchImageLibraryAsync({
//             mediaTypes: Imagepicker.MediaTypeOptions.Images,
//             allowsMultipleSelection: true,
//             quality: 1
//         });

//         if (!Data.canceled) {
//             setImagePath(Data.assets);
//             console.log(Data.assets);
//         }
//     };

//     return (
//         <>
//             <Button mode="contained" onPress={LaunchGallary}>
//                 Tap Me!!!
//             </Button>

//             {
//                 ImagePath
//                     ? <View>
//                         {
//                             ImagePath.map((ele, index) => {
//                                 return (
//                                     <Image
//                                         key={index}
//                                         source={{ uri: ele.uri }}
//                                         style={{ width: 200, height: 200 }}
//                                     />
//                                 );
//                             })
//                         }
//                     </View>
//                     : <Text>No Images selected</Text>
//             }
//         </>
//     );
// };

// export default Home;


import React, { useState } from "react";
import { View, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {CameraView, useCameraPermissions } from "expo-camera";
import * as Sharing from 'expo-sharing'
const Home = () => {
  const [Frames , setFrame] = useState(null)
  const [ImagePath ,setImagePath] = useState(null)
  const [permission,RequestCamAccess] = useCameraPermissions();
  if(!permission){
    return(
      <Text>Loading</Text>
    )
  }
  if(!permission.granted){
    return(
      <Button onPress={() => RequestCamAccess()}>RequestCamAccess</Button>
    )
  } 
  const Capture = async() =>{
        if(Frames){
          const Picture = await Frames.takePictureAsync()
          // console.log(Picture)
          setImagePath(Picture.uri)
        }
  }
  const Share = async() =>{
    const Permission = await Sharing.isAvailableAsync()
    if(Permission){
      await Sharing.shareAsync(ImagePath)
    }
  }
  return (
    <View>
      <View>
        <CameraView 
          style={{width:"100%",height:300}}
          facing="front"
          ref={(ref)=>setFrame(ref)}
        />
        <Button onPress={Capture}>Take Picture</Button>
        {
          ImagePath 
          ? <Image source={{uri:ImagePath}} style={{width:200,height:200}} />
          : <Text>NO Captured Image</Text>
        }
        <Button onPress={Share}>Share</Button>
      </View>
    </View>
  );
};

export default Home;