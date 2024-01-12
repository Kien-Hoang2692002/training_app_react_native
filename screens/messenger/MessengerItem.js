import { TouchableOpacity, Text, View, Image } from "react-native";

import { colors, fontSizes } from "../../constants";
import { screenWidth } from "../../utils/Device";
const MessengerItem = (props) => {
  const { onPress } = props;
  const { url, isSender, messenger, timestamp, showUrl } = props.item;
  return isSender == false ? (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {showUrl == true ? (
        <Image
          style={{
            height: 50,
            width: 50,
            resizeMode: "cover",
            borderRadius: 25,
            marginRight: 15,
            marginStart: 10,
          }}
          source={{
            uri: url,
          }}
        />
      ) : (
        <View
          style={{ width: 50, height: 50, marginRight: 15, marginStart: 10 }}
        ></View>
      )}
      <View
        style={{
          width: screenWidth * 0.7,
          flexDirection: "row",
        }}
      >
        <View>
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h6,
              paddingVertical: 12,
              paddingHorizontal: 8,
              backgroundColor: colors.messenger,
              borderRadius: 10,
            }}
          >
            {messenger}
          </Text>
        </View>
        <View style={{ width: 20 }}></View>
      </View>
    </TouchableOpacity>
  ) : (
    // isSender == true
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: screenWidth * 0.7,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <View style={{ width: 40 }}></View>
        <View>
          <Text
            style={{
              color: "black",
              fontSize: fontSizes.h6,
              paddingVertical: 12,
              paddingHorizontal: 8,
              backgroundColor: colors.messenger,
              borderRadius: 10,
            }}
          >
            {messenger}
          </Text>
        </View>
      </View>
      {showUrl == true ? (
        <Image
          style={{
            height: 50,
            width: 50,
            resizeMode: "cover",
            borderRadius: 25,
            marginRight: 15,
            marginStart: 10,
          }}
          source={{
            uri: url,
          }}
        />
      ) : (
        <View
          style={{ width: 50, height: 50, marginRight: 15, marginStart: 10 }}
        ></View>
      )}
    </TouchableOpacity>
  );
};

export default MessengerItem;
