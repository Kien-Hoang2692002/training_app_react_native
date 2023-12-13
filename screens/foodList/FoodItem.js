import { TouchableOpacity, Text, View, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors, fontSizes } from "../../constants";

function _getColorFromStatus(status) {
  if (status.toLowerCase().trim() === "opening now") {
    return colors.success;
  } else if (status.toLowerCase().trim() === "closing soon") {
    return colors.alert;
  } else if (status.toLowerCase().trim() === "coming soon") {
    return colors.warning;
  } else {
    return colors.success;
  }
}

const FoodItem = (props) => {
  let { name, price, socialNetworks, status, url, website } = props.food;

  const { onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 150,
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: "row",
      }}
    >
      <Image
        style={{
          height: 100,
          width: 100,
          resizeMode: "cover",
          borderRadius: 10,
          marginRight: 15,
        }}
        source={{
          uri: url,
        }}
      ></Image>
      <View
        style={{
          flex: 1,
          marginRight: 10,
        }}
      >
        <Text
          style={{
            fontSize: fontSizes.h5,
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: "black",
          }}
        />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: fontSizes.h5,
              color: colors.inactive,
            }}
          >
            Status:
          </Text>
          <Text
            style={{
              fontSize: fontSizes.h5,
              color: _getColorFromStatus(status),
            }}
          >
            {" "}
            {status.toUpperCase()}
          </Text>
        </View>
        <Text
          style={{
            fontSize: fontSizes.h5,
            color: colors.inactive,
          }}
        >
          Price: {price}$
        </Text>
        <Text
          style={{
            fontSize: fontSizes.h5,
            color: colors.inactive,
          }}
        >
          Foodtype: Bún
        </Text>
        <Text
          style={{
            fontSize: fontSizes.h5,
            color: colors.inactive,
          }}
        >
          Website: {website}
        </Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          {socialNetworks["facebook"] != undefined && (
            <FontAwesome5
              style={{ paddingEnd: 5 }}
              name="facebook"
              size={22}
              color={colors.inactive}
            />
          )}
          {socialNetworks["twitter"] != undefined && (
            <FontAwesome5
              style={{ paddingEnd: 5 }}
              name="twitter"
              size={22}
              color={colors.inactive}
            />
          )}
          {socialNetworks["instagram"] != undefined && (
            <FontAwesome5 name="instagram" size={22} color={colors.inactive} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodItem;
