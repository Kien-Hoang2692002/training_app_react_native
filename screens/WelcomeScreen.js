import { StyleSheet, Text, View } from "react-native";

const WelcomeScreen = (props) => {
  let { x, y } = props;

  return (
    <View>
      <Text>
        x = {x}, y = {y}
      </Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
