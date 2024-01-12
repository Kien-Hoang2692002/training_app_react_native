import { useState, useEffect } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, colors, icons, fontSizes } from "../constants";
import { convertDateTimeToString } from "../utils/DateTime";
import {
  user as UserRepository,
  population as PopulationRepository,
} from "../repositories";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

function Profile(props) {
  const [user, setUser] = useState({});
  const [populations, setPopulations] = useState([]);
  //call when component loaded => componentDidMount
  useEffect(() => {
    UserRepository.getUserDetail().then((responseUser) =>
      setUser(responseUser)
    );
    PopulationRepository.getPopulation({
      drilldowns: "Nation",
      measures: "Population",
    }).then((responsePopulations) => setPopulations(responsePopulations));
  }, []);
  //UserRepository.getUserDetail()
  const {
    email,
    dateOfBirth,
    gender,
    userId,
    address,
    username,
    url,
    phone,
    registeredDate,
  } = user;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
        paddingStart: 20,
      }}
    >
      <Image
        style={{
          width: 160,
          height: 160,
          resizeMode: "cover",
          borderRadius: 80,
          alignSelf: "center",
          marginBottom: 20,
        }}
        source={{
          uri: url,
        }}
      />
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: fontSizes.h5,
          }}
        >
          Username:{" "}
        </Text>
        <Text>{username}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold", fontSize: fontSizes.h5 }}>
          Email:{" "}
        </Text>
        <Text>{email}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold", fontSize: fontSizes.h5 }}>
          DOB:{" "}
        </Text>
        <Text>{convertDateTimeToString(dateOfBirth)}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold", fontSize: fontSizes.h5 }}>
          Gender:{" "}
        </Text>
        <Text>{gender}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold", fontSize: fontSizes.h5 }}>
          Address:{" "}
        </Text>
        <Text>{address}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold", fontSize: fontSizes.h5 }}>
          Phone:{" "}
        </Text>
        <Text>{phone}</Text>
      </View>
      <View>
        <Text>{JSON.stringify(populations)}</Text>
        {/* <LineChart
          data={{
            labels: populations.map((item) => item.year),
            datasets: [
              {
                data: populations
                  .sort((a, b) => parseInt(a.year) - parseInt(b.year))
                  .map((item) => Math.floor(item.population / 1000_000, 0)),
                color: (opacity = 1) => `rgba(134, 65, 255, ${opacity})`, // optional
                strokeWidth: 2, // optional
              },
            ],
            legend: ["Population/Year"],
          }}
          width={screenWidth}
          height={220}
          chartConfig={{
            backgroundGradientFrom: "white",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "white",
            backgroundGradientToOpacity: 1.0,
            //color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            color: (opacity) => colors.primary,
            strokeWidth: 1, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: true, // optional
          }}
        /> */}
      </View>
    </SafeAreaView>
  );
}
export default Profile;
