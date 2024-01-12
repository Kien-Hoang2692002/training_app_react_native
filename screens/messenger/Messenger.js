import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, fontSizes } from "../../constants";
import { UiHeader } from "../../components";
import { useState, useEffect } from "react";
import MessengerItem from "./MessengerItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  auth,
  onAuthStateChanged,
  firebaseDatabaseRef,
  firebaseSet,
  firebaseDatabase,
  onValue,
} from "../../firebase/firebase";
function Messenger(props) {
  const [typedText, setTypedText] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let stringUser = await AsyncStorage.getItem("user");
        let myUserId = JSON.parse(stringUser).userId;
        let myFriendUserId = props.route.params.user.userId;

        onValue(
          firebaseDatabaseRef(firebaseDatabase, `chats`),
          async (snapshot) => {
            if (snapshot.exists()) {
              let snapshotObject = snapshot.val();

              let updatedChatHistory = Object.keys(snapshotObject)
                .filter(
                  (item) =>
                    item.includes(myUserId) && item.includes(myFriendUserId)
                )
                .map((eachKey) => {
                  return {
                    ...snapshotObject[eachKey],
                    isSender: eachKey.split("-")[0] == myUserId,
                    url: "https://randomuser.me/api/portraits/men/70.jpg",
                  };
                })
                .sort((item1, item2) => item1.timestamp - item2.timestamp);
              for (let i = 0; i < updatedChatHistory.length; i++) {
                let item = updatedChatHistory[i];
                item.showUrl =
                  i == 0
                    ? true
                    : item.isSender != updatedChatHistory[i].isSender;
              }
              setChatHistory((prevChatHistory) => [
                ...prevChatHistory,
                ...updatedChatHistory,
              ]);
            } else {
              console.log("No data available");
            }
          }
        );
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    };
    fetchData();
  }, []);
  const { url, name, userId } = props.route.params.user;
  const { navigate, goBack } = props.navigation;

  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <UiHeader
        title={name}
        leftIconName="left"
        rightIconName="profile"
        onPressLeftIcon={() => goBack()}
        onPressRightIcon={() => {
          alert("press right");
        }}
      />
      <FlatList
        style={{}}
        data={chatHistory}
        keyExtractor={(item, index) => `${item.timestamp}-${index}`}
        renderItem={({ item }) => (
          <MessengerItem
            item={item}
            key={`${item.timestamp}-${item.messenger}`}
            onPress={() => alert(`you press : ${item.messenger}`)}
          />
        )}
      />
      <View
        style={{
          height: 55,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          onChangeText={(typedText) => {
            setTypedText(typedText);
          }}
          style={{
            color: "black",
            paddingStart: 12,
          }}
          placeholder="Enter your message here"
          value={typedText}
          placeholderTextColor={colors.placeholder}
        />
        <TouchableOpacity
          onPress={async () => {
            if (typedText.trim().length == 0) {
              return;
            }
            let stringUser = await AsyncStorage.getItem("user");
            let myUserId = JSON.parse(stringUser).userId;
            let myFriendUserId = props.route.params.user.userId;
            let newMessengerObject = {
              //fake
              url: "https://randomuser.me/api/portraits/men/50.jpg",
              showUrl: false,
              messenger: typedText,
              timestamp: new Date().getTime(),
            };
            Keyboard.dismiss();
            firebaseSet(
              firebaseDatabaseRef(
                firebaseDatabase,
                `chats/${myUserId}-${myFriendUserId}`
              ),
              newMessengerObject
            ).then(() => {
              setTypedText("");
            });
            //"id1-id2": {messenger object}
          }}
        >
          <MaterialCommunityIcons
            style={{
              padding: 10,
              marginEnd: 5,
            }}
            name="send"
            size={26}
            color={colors.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Messenger;
