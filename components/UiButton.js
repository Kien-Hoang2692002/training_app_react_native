import { TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { colors } from "../constants";

function UiButton(props) {
  const { onPress, title, isSelected } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderWidth: 2,
        height: 45,
        borderRadius: 5,
        borderColor: "white",
        marginHorizontal: 15,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isSelected ? "white" : null,
      }}
    >
      {isSelected && (
        <FontAwesome
          style={{
            position: "absolute",
            left: 10,
            top: 8,
          }}
          name="check-circle"
          size={24}
          color="green"
        />
      )}

      <Text
        style={{
          color: isSelected ? colors.primary : "white",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default UiButton;
