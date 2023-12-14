import { Text, View } from "react-native";

import { colors, fontSizes } from "../constants";

function UiHeader(props) {
  const { title } = props;
  return (
    <View
      style={{
        height: 90,
        backgroundColor: colors.primary,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: fontSizes.h3,
          alignSelf: "center",
          lineHeight: 120,
        }}
      >
        {title}
      </Text>
    </View>
  );
}

export default UiHeader;
