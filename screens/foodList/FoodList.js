import { useState } from "react";
import {
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
  Text,
  TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { images, colors, icons, fontSizes } from "../../constants";
import FoodItem from "./FoodItem";

// Xây dựng listview từ danh sách các đối tượng, bao ngoài bằng ScrollView
// Xây dựng FlatList từ danh sách các đối tượng

const FoodList = () => {
  // list of food = state
  const [foods, setFoods] = useState([
    {
      name: "Mỳ xào bò sốt chiên nước mắm",
      status: "Opening soon",
      price: 123.56,
      website: "https://edition.cnn.com",
      socialNetworks: {
        facebook: "https://www.facebook.com/kien2609/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com",
      },
      url: "https://i-giadinh.vnecdn.net/2022/07/30/Thanh-pham-1-1-2409-1659167237.jpg",
    },
    {
      name: "Phở bò",
      status: "Opening soon",
      price: 123.56,
      website: "https://edition.cnn.com",
      socialNetworks: {
        facebook: "https://www.facebook.com/kien2609/",
        instagram: "https://instagram.com",
      },
      url: "https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250230038502.jpg",
    },
    {
      name: "Bánh cuốn",
      status: "Coming soon",
      price: 3.56,
      website: "https://edition.cnn.com",
      socialNetworks: {
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com",
      },
      url: "https://img-global.cpcdn.com/recipes/b235f5db0142062d/1200x630cq70/photo.jpg",
    },
    {
      name: "Bánh mì",
      status: "Opening now",
      price: 1203.56,
      website: "https://edition.cnn.com",
      socialNetworks: {
        instagram: "https://instagram.com",
      },
      url: "https://saltcoffee.vn/wp-content/uploads/2023/02/banh-mi-bi.jpg",
    },
    {
      name: "Bún bò Huế",
      status: "Closing soon",
      price: 123.56,
      website: "http://github.com/",
      socialNetworks: {
        facebook: "https://www.facebook.com/kien2609/",
        twitter: "https://twitter.com/",
      },
      url: "https://cdn.tgdd.vn/Files/2018/04/01/1078873/nau-bun-bo-hue-cuc-de-tai-nha-tu-vien-gia-vi-co-san-202109161718049940.jpg",
    },
    {
      name: "Cơm rang dưa bò",
      status: "Coming soon",
      price: 1288.56,
      website: "http://google.com",
      socialNetworks: {
        facebook: "https://www.facebook.com/kien2609/",
      },
      url: "https://static.vinwonders.com/production/com-rang-dua-bo-ha-noi-1.jpg",
    },
    {
      name: "Mỳ tương đen",
      status: "Coming soon",
      price: 18.56,
      website: "http://google.com",
      socialNetworks: {
        facebook: "https://www.facebook.com/kien2609/",
        instagram: "https://instagram.com",
      },
      url: "https://image-us.eva.vn/upload/2-2021/images/2021-04-29/image1-1619690564-154-width594height392.png",
    },
    {
      name: "Mỳ tương đen 2",
      status: "Coming soon",
      price: 18.56,
      website: "http://google.com",
      socialNetworks: {
        facebook: "https://www.facebook.com/kien2609/",
        instagram: "https://instagram.com",
      },
      url: "https://image-us.eva.vn/upload/2-2021/images/2021-04-29/image1-1619690564-154-width594height392.png",
    },
    {
      name: "Mỳ tương đen 3",
      status: "Coming soon",
      price: 18.56,
      website: "http://google.com",
      socialNetworks: {
        facebook: "https://www.facebook.com/kien2609/",
        instagram: "https://instagram.com",
      },
      url: "https://image-us.eva.vn/upload/2-2021/images/2021-04-29/image1-1619690564-154-width594height392.png",
    },
  ]);
  const [categories, setCategories] = useState([
    {
      name: "Phở",
      url: "https://posapp.vn/wp-content/uploads/2020/12/Noodle-Restaurant-Logo.jpg",
    },
    {
      name: "Bún",
      url: "https://media-cdn.tripadvisor.com/media/photo-s/19/3c/32/d7/bat-ph-truy-n-th-ng.jpg",
    },
    {
      name: "Bánh mì",
      url: "https://png.pngtree.com/png-clipart/20230814/original/pngtree-vector-logo-for-bakery-picture-image_7924695.png",
    },
    {
      name: "Mì",
      url: "https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-noodle-logo-design-inspiration-png-image_539828.jpg",
    },
    {
      name: "Hot dog",
      url: "https://img.freepik.com/premium-vector/hot-dog-logo-design_9845-317.jpg",
    },
    {
      name: "Cơm rang",
      url: "https://png.pngtree.com/png-vector/20210221/ourmid/pngtree-happy-sahur-with-fried-rice-and-egg-png-image_2929564.png",
    },
    {
      name: "Đồ uống",
      url: "https://medlatec.vn/media/2091/content/20230315_do-uong-tot-cho-suc-khoe-1.jpg",
    },
    {
      name: "Mỳ tương",
      url: "https://image-us.eva.vn/upload/2-2021/images/2021-04-29/image1-1619690564-154-width594height392.png",
    },
    {
      name: "Rượu vang",
      url: "https://product.hstatic.net/200000311961/product/ruou-vang-do-aromo-carmenere_da6e1c4302a94f17a8eb5a873fd75eab.jpg",
    },
    {
      name: "Bún bò Huế",
      url: "https://cdn.tgdd.vn/Files/2018/04/01/1078873/nau-bun-bo-hue-cuc-de-tai-nha-tu-vien-gia-vi-co-san-202109161718049940.jpg",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const filteredFoods = () => {
    return foods.filter((food) =>
      food.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <View>
        {/* <ScrollView>
          {foods.map((food, index) => (
            <FoodItem food={food} key={index} />
          ))}
        </ScrollView> */}
        <View
          style={{
            height: 50,
            marginHorizontal: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            style={{ position: "absolute", top: 12, left: 8 }}
            name="search"
            size={22}
            color="black"
          />
          <TextInput
            autoCorrect={false}
            onChangeText={(text) => setSearchText(text)}
            style={{
              marginEnd: 10,
              flex: 1,
              height: 40,
              backgroundColor: colors.inactive,
              opacity: 0.6,
              borderRadius: 5,
              paddingStart: 40,
            }}
          />
          <AntDesign name="menuunfold" size={30} color="black" />
        </View>
        <View
          style={{
            height: 100,
          }}
        >
          <View
            style={{
              height: 1,
              backgroundColor: colors.inactive,
            }}
          />
          <FlatList
            horizontal={true}
            keyExtractor={(item) => item.name}
            data={categories}
            style={{ flex: 1 }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => alert(`press category ${item.name}`)}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      height: 40,
                      width: 40,
                      resizeMode: "cover",
                      borderRadius: 25,
                      margin: 10,
                    }}
                    source={{
                      uri: item.url,
                    }}
                  />
                  <Text style={{ fontSize: fontSizes.h6 }}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
          <View
            style={{
              height: 1,
              backgroundColor: colors.inactive,
            }}
          />
        </View>

        {filteredFoods().length > 0 ? (
          <FlatList
            renderItem={({ item }) => (
              <FoodItem
                food={item}
                key={item.name}
                onPress={() => alert(`you press item: ${item.name}`)}
              />
            )}
            data={filteredFoods()}
            keyExtractor={(food) => food.name}
          />
        ) : (
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ fontSize: fontSizes.h3 }}>No food found</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default FoodList;
