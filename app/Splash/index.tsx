import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import styles from "./styles";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

// import splash from "../../assets/images/splash.png";
// import splash from './splash.png';
import splash from "@/assets/images/splash.png";

const Splash = () => {
  const router = useRouter();
  return (
    <ImageBackground style={styles.background} source={splash}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.png")}
        />
        <Text style={styles.title}>100k+ Premium recepie</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.bigTitle}>Get </Text>
        <Text style={styles.bigTitle}>Cooking</Text>
        <Text style={styles.subTitle}>Simple way to find tasty recepie</Text>
        <Button onPress={()=>router.push('./Home')}>Start Cooking</Button>
      </View>
    </ImageBackground>
  );
};
export default React.memo(Splash);
