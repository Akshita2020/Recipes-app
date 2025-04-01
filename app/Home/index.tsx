import React from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import { useRouter } from "expo-router";
import Input from "../../components/Input/index";
import Title from "../../components/Title/index";
import Categories from "@/components/Categories";
import RecipeCard from "@/components/RecipeCard";
import Card from "@/components/Card";
const Home = () => {
  const router = useRouter();
  const [showList, setShowList] = React.useState(false);
  return (
    <View style={styles.container}>
      <Input pressable onPress={() => router.push("/Search")} />
      <Title text="Featured Recipes" />
      <FlatList
        horizontal
        data={[1, 2, 3]}
        style={{ marginHorizontal: -24, maxWidth: "100%" }}
        keyExtractor={(item) => String(item)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ index }) => (
          <RecipeCard
            style={index === 0 ? { marginLeft: 24 } : {}}
            time="20 mins"
            title="Steak with tomato sauce and bulgur rice."
            author={{
              name: "James Milner",
              image:
                "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
            }}
            image={""}
            servings={0}
            rating={0}
          />
        )}
      />

      <Categories
        categories={["All", "Trending"]}
        selectedCategory="All"
        onCategoryPress={() => setShowList(true)}
      />
      {showList && (
        <FlatList
          horizontal
          data={[1, 2, 3]}
          style={{ marginHorizontal: -24, maxWidth: "100%" }}
          keyExtractor={(item) => String(item)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ index }) => (
            <Card
              style={index === 0 ? { marginLeft: 24 } : {}}
              time="20 mins"
              title="Steak with tomato sauce and bulgur rice."
              image="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8fDA%3D"
            />
          )}
        />
      )}
    </View>
  );
};
export default React.memo(Home);
