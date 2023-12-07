import { StyleSheet, Text, View } from "react-native";
import { Welcome, Login, Register, FoodList } from "./screens";

export default function App() {
  return (
    <View style={styles.container}>
      <FoodList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

// let fakedProducts = [
//   {
//     productName: "iphone 3",
//     year: "2013",
//   },
//   {
//     productName: "iphone 4",
//     year: "2014",
//   },
//   {
//     productName: "iphone 5",
//     year: "2015",
//   },
// ];

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello!</Text>
//       <Welcome
//       // x={5}
//       // y={10}
//       // person={{
//       //   name: "Hoàng Văn Kiên",
//       //   age: 18,
//       //   email: "kien@gmail.com",
//       // }}
//       // products={fakedProducts}
//       />
//     </View>
//   );
// }
