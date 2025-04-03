import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import styles from "./style";

const Categories = ({ categories, selectedCategory, onCategoryPress }) => {
  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={(item) => String(item)}
      style={{ marginRight: -32, maxWidth: "100%", marginTop: 24 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        const selected = selectedCategory === item;
        const displayName = item?.replace('_',' ')
        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
            ]}
          >
            <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
              {displayName}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Categories;
