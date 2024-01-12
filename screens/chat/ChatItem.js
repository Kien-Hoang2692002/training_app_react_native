import { TouchableOpacity, Text, View, Image } from "react-native";

import { colors, fontSizes } from "../../constants";

const ChatItem = (props) => {
  let { name, url, message, numberOfUnreadMessages, userId } = props.user;
  const { onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 80,
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: "row",
      }}
    >
      <View>
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
        {numberOfUnreadMessages > 0 && (
          <Text
            style={{
              backgroundColor: "red",
              fontSize: fontSizes.h6 * 0.8,
              fontWeight: "bold",
              color: "white",
              position: "absolute",
              top: 0,
              right: 10,
              borderRadius: 10,
              paddingHorizontal: numberOfUnreadMessages > 9 ? 2 : 5,
              paddingVertical: 1.5,
            }}
          >
            {numberOfUnreadMessages > 99 ? "99+" : numberOfUnreadMessages}
          </Text>
        )}
      </View>
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: fontSizes.h6,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: fontSizes.h6,
          }}
        >
          {message}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          flex: 1,
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            marginRight: 15,
            color: "gray",
            fontSize: fontSizes.h6 * 0.8,
          }}
        >
          4 minutes ago
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;
