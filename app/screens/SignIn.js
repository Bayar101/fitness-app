import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
const { width, height } = Dimensions.get("screen");

const SignIn = () => {
  const [text, onChangeText] = useState("Email");
  const [pass, onChangePass] = useState("Password");
  const [passConfirm, onChangePassConfirm] = useState("Confirm password");

  const [tab, setTab] = useState("logIn");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.tabs}>
          <TouchableOpacity
            style={{ position: "relative" }}
            onPress={() => {
              setTab("logIn");
            }}
          >
            <Text style={styles.tab}>Log in</Text>
            {tab === "logIn" && <View style={styles.underline}></View>}
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity
            style={{ position: "relative" }}
            onPress={() => {
              setTab("signUp");
            }}
          >
            <Text style={styles.tab}>Sign up</Text>
            {tab === "signUp" && <View style={styles.underline}></View>}
          </TouchableOpacity>
        </View>
        <View style={styles.avatar}>
          <Image
            source={require("../assets/avatar.png")}
            style={styles.avatarImage}
          />
        </View>
      </View>
      <View style={styles.background}>
        <ImageBackground
          source={
            tab === "logIn"
              ? require("../assets/signIn/signIn-backgorund.png")
              : require("../assets/signIn/signUp-backgorund.png")
          }
          style={tab === "logIn" ? styles.image : styles.image1}
        />
        <View style={{ position: "absolute" }}>
          <Text style={tab === "logIn" ? styles.title : styles.title1}>
            {tab === "logIn" ? "CROSSFIT HABIT" : "It’s game for Home Workout"}
          </Text>
        </View>
      </View>
      <View style={tab === "logIn" ? styles.bottom : styles.bottom1}>
        <View style={{ flexDirection: "column", gap: 12 }}>
          <View style={{ flexDirection: "column", gap: 20 }}>
            <TextInput
              onChangeText={onChangeText}
              value={text}
              style={styles.input}
            />
            <TextInput
              onChangeText={onChangePass}
              value={pass}
              style={styles.input}
            />
            {tab === "signUp" && (
              <TextInput
                onChangeText={onChangePassConfirm}
                value={passConfirm}
                style={styles.input}
              />
            )}
          </View>
          <TouchableOpacity>
            <Text
              style={{
                color: "#F1471D",
                alignSelf: "flex-end",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <TouchableOpacity
              style={{
                width: 54,
                height: 54,
                borderRadius: "100%",
                backgroundColor: "#3A3A3C",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 24, height: 24 }}
                source={require("../assets/signIn/Apple.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 54,
                height: 54,
                borderRadius: "100%",
                backgroundColor: "#3A3A3C",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 24, height: 24 }}
                source={require("../assets/signIn/Google.png")}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              paddingLeft: 28,
              paddingRight: 20,
              paddingVertical: 13,
              borderRadius: "100%",
              backgroundColor: "#F1471D",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: 600 }}>
              {tab === "logIn" ? "Log in" : "Sign up"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: { flex: 1 },
  nav: {
    position: "relative",
    width,
    paddingHorizontal: 23,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  tabs: {
    gap: 14,
    flexDirection: "row",
  },
  tab: {
    color: "#fff",
    fontWeight: "600",
  },
  underline: {
    position: "absolute",
    left: 0,
    bottom: -8,
    height: 3,
    width: "100%",
    backgroundColor: "#F1471D",
    zIndex: 50,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: "100%",
    padding: 3,
    border: 1,
    borderColor: "rgba(255, 255, 255, 0.35)",
    borderWidth: 1,
  },
  avatarImage: { width: "100%", height: "100%", borderRadius: "100%" },
  background: { position: "absolute", flex: 0.6, height, width, zIndex: -1 },
  image: {
    width,
    flexGrow: 0.6,
  },
  image1: {
    width,
    flexGrow: 0.5,
  },
  title: {
    fontSize: 38,
    position: "absolute",
    left: 36,
    top: 350,
    zIndex: 50,
    color: "#fff",
    width: 180,
  },
  title1: {
    fontSize: 38,
    position: "absolute",
    left: 36,
    top: 250,
    zIndex: 50,
    color: "#fff",
    width: 250,
  },
  bottom: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingHorizontal: 32,
    gap: 64,
  },
  bottom1: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingHorizontal: 32,
    gap: 100,
  },
  input: {
    padding: 16,
    color: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#2C2C2E",
  },
});
