import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

const Rating = ({ rating }) => {
  const arr = [1, 2, 3, 4, 5];
  //0-1.4 = 1 star
  //1.5-2.4 = 2 stars
  //2.5-3.4 = 3 stars
  //3.5-4.4 = 4 stars
  //4.5-5 = 5 stars

  const renderStatus = () => {
    return arr?.map((star) => {
      if (Math.floor(rating) >= star) {
        return (
          <Image
            key={star}
            source={require("../../assets/images/star.png")}
            style={styles.star}
          />
        );
      }
      return (
        <Image
          key={star}
          style={styles.star}
          source={require("../../assets/images/emptyStar.png")}
        />
      );
    });
  };

  return <View style={styles.row}>{renderStatus()}</View>;
};

export default React.memo(Rating);
