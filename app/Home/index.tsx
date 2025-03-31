import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { useRouter } from "expo-router";
import Input from "../../components/input/index";
import Title from "../../components/Title/index";
import Categories from "@/components/Categories";
const Home = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Input pressable onPress={() => router.push("/Search")} />
      <Title text= "Featured Recipes"  />
      <Categories categories ={['All','Trending' ]}  selectedCategory= 'All' onCategoryPress ={()=>{}     }        />
    </View>
  );
};
export default React.memo(Home);
