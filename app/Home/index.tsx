import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import { useRouter } from "expo-router";
import Input from "../../components/Input/index";
import Title from "../../components/Title/index";
import Categories from "@/components/Categories";
import RecipeCard from "@/components/RecipeCard";
import Card from "@/components/Card";
import { HealthyRecipesContext, RecipesContext } from "../_layout";
import { validatePathConfig } from "expo-router/build/fork/getPathFromState-forks";

const Home = () => {
  const router = useRouter();
  const [showList, setShowList] = React.useState(false);
  const { recipes } = useContext(RecipesContext);
  const { healthyRecipes } = useContext(HealthyRecipesContext);
  console.log("healthyRecipes", healthyRecipes);
  console.log("recipes", recipes);

  return (
    <View style={styles.container}>
      <Input pressable onPress={() => router.push("/Search")} />
      <Title text="Healthy Recipes" />
      <FlatList
        horizontal
        data={healthyRecipes}
        style={{ marginHorizontal: -24, maxWidth: "100%" }}
        keyExtractor={(item) => String(item?.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <RecipeCard
            style={index === 0 ? { marginLeft: 24 } : {}}
            time={item?.cook_time_minutes}
            title={item?.name}
            author={
              item?.credits?.length
                ? {
                    name: item.credits[0]?.name,
                    image: item.credits[0]?.image_url,
                  }
                : null
            }
            image={item?.thumbnail_url}
            servings={0}
            rating={item?.user_ratings?.score}
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
          data={recipes}
          style={{ marginHorizontal: -24, maxWidth: "100%" }}
          keyExtractor={(item) => String(item?.id)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Card
              style={index === 0 ? { marginLeft: 24 } : {}}
              servings={item?.num_servings}
              title={item?.name}
              author={
                item?.credits?.length
                  ? {
                      name: item.credits[0]?.name,
                      image: item.credits[0]?.image_url,
                    }
                  : null
              }
              image={item?.thumbnail_url}
              rating={item?.user_ratings?.score}
            />
          )}
        />
      )}
    </View>
  );
};
export default React.memo(Home);
