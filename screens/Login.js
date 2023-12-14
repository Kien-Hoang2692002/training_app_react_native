import { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { isValidPassword, isValidEmail } from "../utils/Validations";
import { images, colors, icons, fontSizes } from "../constants";

const Login = (props) => {
  //state for validating
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("123456");

  //state to store email/password
  const [email, setEmail] = useState("kien@gmail.com");
  const [password, setPassword] = useState("123456");

  const isValidationOK = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;

  //navigation
  const { navigation, route } = props;
  //functions of navigate to/back
  const { navigate, goBack } = navigation;

  return (
    <KeyboardAvoidingView
      style={{
        flex: 100,
      }}
    >
      {/* Header */}
      <View
        style={{
          flex: 30,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: fontSizes.h1,
            fontWeight: "bold",
            width: "50%",
          }}
        >
          Already have an Account?
        </Text>
        <Image
          tintColor={colors.primary}
          source={images.computer}
          style={{
            width: 100,
            height: 100,
          }}
        />
      </View>

      {/* Email-password */}
      <View
        style={{
          flex: 20,
        }}
      >
        <View
          style={{
            marginHorizontal: 15,
          }}
        >
          <Text
            style={{
              color: colors.primary,
              fontSize: fontSizes.h5,
            }}
          >
            Email:
          </Text>
          <TextInput
            onChangeText={(text) => {
              setErrorEmail(
                isValidEmail(text) == true ? "" : "Email not in correct format"
              );
              setEmail(text);
            }}
            value={email}
            placeholder="Enter your email address"
            placeholderTextColor={colors.placeholder}
          />
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.primary,
              marginBottom: 5,
            }}
          />
          <Text
            style={{
              color: "red",
              fontSize: fontSizes.h6,
              marginBottom: 15,
            }}
          >
            {errorEmail}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 15,
          }}
        >
          <Text
            style={{
              color: colors.primary,
              fontSize: fontSizes.h5,
            }}
          >
            Password:
          </Text>
          <TextInput
            onChangeText={(text) => {
              setErrorPassword(
                isValidPassword(text) == true
                  ? ""
                  : "Password must be at least 3 characters"
              );
              setPassword(text);
            }}
            secureTextEntry={true}
            value={password}
            placeholder="Enter your password"
            placeholderTextColor={colors.placeholder}
          />
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.primary,
              marginBottom: 5,
            }}
          />
          <Text
            style={{
              color: "red",
              fontSize: fontSizes.h6,
              marginBottom: 15,
            }}
          >
            {errorPassword}
          </Text>
        </View>
      </View>

      {/* Button login */}
      <View
        style={{
          flex: 15,
        }}
      >
        <TouchableOpacity
          disabled={isValidationOK() == false}
          onPress={() =>
            // alert(`Email = ${email}, password = ${password}`)
            navigate("UiTab")
          }
          style={{
            backgroundColor:
              isValidationOK() == true ? colors.primary : colors.inactive,
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
            alignSelf: "center",
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              padding: 10,
              fontSize: fontSizes.h5,
              color: "white",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert("press register")}
          style={{
            padding: 5,
          }}
        >
          <Text
            style={{
              padding: 10,
              fontSize: fontSizes.h6,
              color: colors.primary,
              alignSelf: "center",
            }}
          >
            New user? Register now
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View
        style={{
          flex: 25,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 40,
            alignItems: "center",
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              height: 1,
              flex: 1,
              backgroundColor: "black",
            }}
          ></View>
          <Text
            style={{
              padding: 10,
              fontSize: fontSizes.h6,
              color: "black",
              alignSelf: "center",
              marginHorizontal: 5,
            }}
          >
            User other methods ?
          </Text>
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "black",
              flex: 1,
            }}
          ></View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <FontAwesome5 name="facebook" size={30} color={colors.facebook} />
          <View style={{ width: 15 }}></View>
          <FontAwesome5 name="google-plus" size={30} color={colors.google} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({});
