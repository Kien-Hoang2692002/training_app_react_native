import { View } from "react-native";
import { colors } from "../../constants";
import { FontAwesome } from "@expo/vector-icons";

function FiveStars(props) {
  const { numberOfStars } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      {[0, 1, 2, 3, 4].map((item) => (
        <FontAwesome
          key={`${item}`}
          name="star"
          style={{ marginEnd: 2 }}
          size={10}
          color={item <= numberOfStars - 1 ? colors.warning : colors.inactive}
        />
      ))}
    </View>
  );
}
export default FiveStars;
