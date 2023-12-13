import { useState } from "react";
import { TouchableOpacity, View, Image, ScrollView, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { colors, fontSizes } from "../../constants";
import FiveStars from "./FiveStars";

const GridItem = (props) => {
  const { item, index, onPress } = props;

  return (
    <View
      style={{
        flex: 0.5,
        //height: 200,
        marginLeft: index % 2 === 0 ? 10 : 0,
        marginTop: 5,
        marginRight: 10,
        marginBottom: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.inactive,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <Image
          style={{
            height: 90,
            width: 85,
            resizeMode: "cover",
            borderRadius: 20,
            marginRight: 15,
          }}
          source={{
            uri: item.url,
          }}
        />
        <Text
          style={{
            flex: 1,
            alignSelf: "center",
            fontSize: fontSizes.h3,
            fontWeight: "bold",
          }}
        >
          $ {item.price}
        </Text>
      </View>
      <Text
        style={{
          marginHorizontal: 10,
          fontSize: fontSizes.h5,
          fontWeight: "bold",
          color: colors.primary,
        }}
      >
        {item.productName}
      </Text>
      {item.specifications.map((specification, index) => (
        <Text
          key={index}
          style={{
            fontSize: 10,
            paddingBottom: 10,
            paddingHorizontal: 10,
          }}
        >
          * {specification}
        </Text>
      ))}
      {/* Role */}
      <View style={{ flexDirection: "row", padding: 10 }}>
        <TouchableOpacity onPress={onPress} style={{ flexDirection: "row" }}>
          {item.isSaved == undefined || item.isSaved == false ? (
            <AntDesign name="hearto" size={23} color="red" />
          ) : (
            <AntDesign name="heart" size={23} color="red" />
          )}
          <Text
            style={{
              color: "red",
              fontSize: fontSizes.h6 * 0.8,
              width: 50,
              marginLeft: 5,
            }}
          >
            Saved for later
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
          }}
        >
          <FiveStars numberOfStars={item.stars} />
          <Text
            style={{
              color: "blue",
              fontSize: 10,
              paddingTop: 5,
              textAlign: "right",
            }}
          >
            {item.reviews} reviews
          </Text>
        </View>
      </View>
    </View>
  );
};

export default GridItem;
