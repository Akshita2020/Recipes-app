import React from "react";
import { View, Text, ImageBackground,Image } from "react-native";
import styles from "./styles";
import Button from "@/components/Button";
// import splash from "../../assets/images/splash.png";
// import splash from './splash.png';
import splash from "@/assets/images/splash.png";

const Splash = () => {
  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={splash}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
        <Text style={styles.text}>100k+ Premium recepie</Text>
        <Button>Start Cooking</Button>
      </View>
    </ImageBackground>
  );
};
export default React.memo(Splash);
