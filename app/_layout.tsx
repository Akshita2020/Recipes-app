import React, { createContext } from "react";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { MD3LightTheme as DefaultTheme } from "react-native-paper";
import { BackHandler, Image, Pressable, StyleSheet, View } from "react-native";
import fetchRecipes from "../http";

interface RecipesContextType {
  recipes: any[];
  setRecipes: (recipes: any[]) => void;
}
interface HealthyRecipesContextType {
  healthyRecipes: any[];
  setHealthyRecipes: (healthyRecipes: any[]) => void;
}

export const RecipesContext = createContext<RecipesContextType | null>(null);
export const HealthyRecipesContext =
  createContext<HealthyRecipesContextType | null>(null);

export default function Layout() {
  const [recipes, setRecipes] = React.useState<any[]>([]);
  const [healthyRecipes, setHealthyRecipes] = React.useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const rec = await handleRecipesFetch(null, 15);
      if (rec) setRecipes(rec);
      const healthyRec = await handleRecipesFetch("healthy", 5);
      setHealthyRecipes(healthyRec);
    };
    fetchData();
  }, []);
  const handleRecipesFetch = async (tags = "", size = 5) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const recipes = await fetchRecipes(tags, size);
      console.log(recipes.data.results);
      return recipes?.data?.results;
    } catch (error) {
      console.log("error fetching recipes", error);
      return [];
    }
  };

  useEffect(() => {
    // Disable Android Hardware Back Button
    const preventBack = () => true;
    BackHandler.addEventListener("hardwareBackPress", preventBack);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", preventBack);
    };
  }, []);

  const BackButton = (props: any) => (
    <Pressable onPress={props.onPress}>
      <Image
        style={styles.backButton}
        source={require("../assets/images/back.png")}
      />
    </Pressable>
  );

  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#ffffff",
    },
  };

  return (
    <HealthyRecipesContext.Provider
      value={{ healthyRecipes, setHealthyRecipes }}
    >
      <RecipesContext.Provider value={{ recipes, setRecipes }}>
        <View style={{ flex: 1, backgroundColor: Theme.colors.background }}>
          <Stack
            screenOptions={{
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerStyle: { backgroundColor: Theme.colors.background }, // Apply to header
              headerTitleStyle: { fontWeight: "bold" },
              contentStyle: { backgroundColor: Theme.colors.background }, // Apply to screens
            }}
          >
            <Stack.Screen
              name="Splash/index"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home/index"
              options={{
                headerTitle: "Home",
                headerBackVisible: false,
              }}
            />
            <Stack.Screen
              name="RecipeDetails/index"
              options={{
                headerTitle: "RecipeDetails",
                headerLeft: (props) => <BackButton {...props} />,
              }}
            />
          </Stack>
        </View>
      </RecipesContext.Provider>
    </HealthyRecipesContext.Provider>
  );
}

const styles = StyleSheet.create({
  backButton: {
    width: 24,
    height: 24,
    margin: 16,
  },
});
