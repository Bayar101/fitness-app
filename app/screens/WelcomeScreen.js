import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Dimensions,
  Animated,
  Button,
  TouchableOpacity,
} from "react-native";
import { useRef, useState } from "react";
import Pagination from "../components/Pagination";

const { width, height } = Dimensions.get("screen");

export default function WelcomeScreen({ onPress }) {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    // console.log('viewableItems', viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;
  return (
    <View style={styles.container}>
      <FlatList
        data={[{ id: 1 }, { id: 2 }]}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        renderItem={({ item }) => (
          <View style={styles.slide} key={item.id}>
            <ImageBackground
              source={
                item.id === 1
                  ? require("../assets/welcome/background.png")
                  : require("../assets/welcome/background1.png")
              }
              style={styles.image}
            />
            <View style={styles.bottomSection}>
              <Text style={styles.titleText}>
                {item.id === 1
                  ? "Create a workout plan to stay fit"
                  : "Action is thekey to all success"}
              </Text>
              {item.id === 2 && (
                <TouchableOpacity onPress={onPress}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>{`Start now >`}</Text>
                  </View>
                </TouchableOpacity>
              )}
              {/* {item.id === 2 && <Button>Start Now</Button>}/ */}
            </View>
          </View>
        )}
      />
      <Pagination
        data={[{ id: 1 }, { id: 2 }]}
        scrollX={scrollX}
        index={index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  slide: { flex: 1, flexDirection: "column", height, width },
  image: {
    flex: 0.5,
    flexGrow: 1,
  },
  bottomSection: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    paddingVertical: 64,
  },
  titleText: {
    color: "#fff",
    fontSize: 24,
    maxWidth: 235,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#F1471D",
    color: "#000",
    paddingLeft: 28,
    paddingRight: 20,
    paddingVertical: 13,
    borderRadius: 48,
  },
  buttonText: {
    fontWeight: "700",
  },
});
