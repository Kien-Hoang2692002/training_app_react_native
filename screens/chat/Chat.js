import { View, Text, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, fontSizes } from "../../constants";
import { UiHeader } from "../../components";
import { useState, useEffect } from "react";
import ChatItem from "./ChatItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  onAuthStateChanged,
  firebaseDatabaseRef,
  firebaseSet,
  firebaseDatabase,
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  child,
  get,
  onValue,
} from "../../firebase/firebase";

function Chat(props) {
  const [users, setUsers] = useState([
    // {
    //   url: "https://randomuser.me/api/portraits/men/70.jpg",
    //   name: "Amanda Weler",
    //   message: "Hello, how are you ?",
    //   numberOfUnreadMessages: 3,
    // },
    // {
    //   url: "https://randomuser.me/api/portraits/men/30.jpg",
    //   name: "Nguyen Van B",
    //   message: "Hello, how are you ?",
    //   numberOfUnreadMessages: 0,
    // },
    // {
    //   url: "https://randomuser.me/api/portraits/men/40.jpg",
    //   name: "Amanda Weler",
    //   message: "Hello, how are you ?",
    //   numberOfUnreadMessages: 100,
    // },
    // {
    //   url: "https://randomuser.me/api/portraits/men/50.jpg",
    //   name: "Amâ",
    //   message: "Hello, how are you ?",
    //   numberOfUnreadMessages: 10,
    // },
    // {
    //   url: "https://randomuser.me/api/portraits/men/80.jpg",
    //   name: "AAAA",
    //   message: "Hello, how are you ?",
    //   numberOfUnreadMessages: 0,
    // },
  ]);

  //navigation
  const { navigation, route } = props;
  //functions of navigate to/back
  const { navigate, goBack } = navigation;

  useEffect(() => {
    onValue(
      firebaseDatabaseRef(firebaseDatabase, "users"),
      async (snapshot) => {
        if (snapshot.exists()) {
          let snapshotObject = snapshot.val();
          let stringUser = await AsyncStorage.getItem("user");
          let myUserId = JSON.parse(stringUser).userId;
          setUsers(
            Object.keys(snapshotObject)
              .filter((item) => item != myUserId)
              .map((eachKey) => {
                let eachObject = snapshotObject[eachKey];
                return {
                  //default profile url
                  url: "https://www.w3schools.com/howto/img_avatar.png",
                  name: eachObject.email,
                  email: eachObject.email,
                  accessToken: eachObject.accessToken,
                  numberOfUnreadMessages: 0,
                  userId: eachKey,
                };
              })
          );
        } else {
          console.log("No data available");
        }
      }
    );
  }, []);

  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <UiHeader
        title="Notifications"
        leftIconName="left"
        rightIconName="search1"
        onPressLeftIcon={() => {
          goBack();
        }}
        onPressRightIcon={() => {
          alert("press right");
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 15,
        }}
      >
        <Text
          style={{
            color: "gray",
            fontSize: fontSizes.h6,
            marginStart: 10,
          }}
        >
          6 unread messages
        </Text>
        <AntDesign
          onPress={() => alert("you pressed delete")}
          style={{}}
          name="delete"
          size={20}
          color="gray"
        />
      </View>
      <FlatList
        style={{}}
        data={users}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <ChatItem
            user={item}
            key={item.name}
            onPress={() => navigate("Messenger", { user: item })}
          />
        )}
      />
    </View>
  );
}
export default Chat;
