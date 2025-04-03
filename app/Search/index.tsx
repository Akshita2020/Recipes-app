import React, { useContext, useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import { RecipesContext } from "../_layout";
import Input from "../../components/Input/index";
import Card from "../../components/Card/index";
const Search = () => {
  const { recipes } = useContext(RecipesContext);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [keyword, setKeyword] = useState("");
  console.log("keyword:>>", keyword);

  useEffect(() => {
    if (keyword?.length> 2) {
      const filteredItems = recipes?.filter((rec) =>
        rec?.name?.toLowerCase()?.includes(keyword?.toLowerCase())
      );
      console.log("filteredItems:>>", filteredItems);
      setFilteredRecipes(filteredRecipes);
    } else {
      setFilteredRecipes([]);
    }
  }, [keyword]);

  return (
    <View style={styles.container}>
      <Input autoFocus onChangeText={setKeyword} value={keyword} />
      <FlatList
        data={filteredRecipes}
        keyExtractor={(item) => String(item?.id)}
        numColumns={2}
        renderItem={({ item, index }) => (
          <Card
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
    </View>
  );
};
export default React.memo(Search);
