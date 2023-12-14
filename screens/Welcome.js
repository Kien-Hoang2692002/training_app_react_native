import { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { images, icons, fontSizes, colors } from "../constants";
import { UiButton } from "../components";

const Welcome = (props) => {
  //state => when a stata is changed => UI is reloaded
  const [accountTypes, setAccountTypes] = useState([
    {
      name: "Influencer",
      isSelected: true,
    },
    {
      name: "Business",
      isSelected: false,
    },
    {
      name: "Individual",
      isSelected: false,
    },
  ]);
  //navigation
  const { navigation, route } = props;
  //functions of navigate to/back
  const { navigate, goBack } = navigation;

  return (
    <View style={{ backgroundColor: "white", flex: 100, paddingTop: 20 }}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{
          flex: 100,
        }}
      >
        {/* Header */}
        <View
          style={{
            flex: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              height: 50,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.fire}
              style={{
                width: 30,
                height: 30,
                marginStart: 10,
                marginEnd: 5,
              }}
            />
            <Text style={{ color: "white" }}>YOURCOMPANY.CO</Text>
            <View style={{ flex: 1 }}></View>
            {/* <Image
              source={icons.question}
              style={{
                width: 20,
                height: 20,
                tintColor: "white",
                marginEnd: 10,
              }}
            /> */}
            <AntDesign
              style={{
                marginEnd: 10,
              }}
              name="questioncircle"
              size={24}
              color="white"
            />
          </View>
        </View>
        {/* Welcome-session */}
        <View
          style={{
            flex: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: fontSizes.h5, marginBottom: 8, color: "white" }}
          >
            Welcome to
          </Text>
          <Text
            style={{
              fontSize: fontSizes.h4,
              fontWeight: "bold",
              marginBottom: 8,
              color: "white",
            }}
          >
            YOURCOMPANY.CO !
          </Text>
          <Text style={{ fontSize: fontSizes.h5, color: "white" }}>
            Please select your account type
          </Text>
        </View>

        {/* Button session */}
        <View
          style={{
            flex: 40,
            // backgroundColor: "purple",
          }}
        >
          {accountTypes.map((accountType, index) => (
            <UiButton
              onPress={() => {
                setAccountTypes(
                  accountTypes.map((eachAccountType) => {
                    return {
                      ...eachAccountType,
                      isSelected: eachAccountType.name === accountType.name,
                    };
                  })
                );
              }}
              title={accountType.name}
              isSelected={accountType.isSelected}
              key={index}
            />
          ))}
        </View>

        <View
          style={{
            flex: 20,
          }}
        >
          <UiButton
            onPress={() => {
              navigate("Login");
            }}
            title={"Login".toUpperCase()}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: fontSizes.h5,
              color: "white",
            }}
          >
            Want to register new Account ?
          </Text>
          <TouchableOpacity
            style={{
              padding: 5,
            }}
            onPress={() => {
              navigate("Register");
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: fontSizes.h5,
                color: colors.primary,
                textDecorationLine: "underline",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

/*
const Welcome = (props) => {
  let { x, y } = props;
  const { person } = props;
  const { products } = props;
  // debugger;
  const { name, age, email } = person;
  return (
    <View style={{ backgroundColor: "white" }}>
      <Text>
        Name: {name}
        Age: {age}
        Email: {email}
      </Text>

      <Text>
        x = {x}, y = {y}
      </Text>
      {products.map((eachProduct, index) => (
        <Text key={index}>
          {eachProduct.productName},{eachProduct.year}{" "}
        </Text>
      ))}
      <Text>{JSON.stringify(products)}</Text>
      <Text>Sum 2 and 3 = {sum2Number(2, 3)}</Text>
      <Text>Subtract 2 and 3 = {substract2Number(2, 3)}</Text>
      <Text>Pi = {PI}</Text>
    </View>
  );
};

export default Welcome;


*/
