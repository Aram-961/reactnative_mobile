import { Image } from "expo-image";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./popularjobcard.style";

import { checkImageUrl } from "../../../../utils";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}>
      <View style={styles.logoContainer(selectedJob, item)}>
        <Image
          style={styles.logoImage} // You may need to define a style for the Image component
          source={{ uri: checkImageUrl(item?.employer_logo) ? item.employer_logo :  'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg' }}
          resizeMode='contain'
        />
      </View>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
