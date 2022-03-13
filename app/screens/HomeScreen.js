// @ts-nocheck
import React from "react";
import { StyleSheet, View, Image } from "react-native";

import Screen from "../components/utils/Screen";
import AppText from "../components/utils/AppText";
import colors from "../constants/colors";

const HomeScreen = ({ navigation }) => {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <View style={styles.container}>
        <AppText style={styles.heading}>Welcome to "Donate Life".</AppText>
        <AppText style={styles.lead}>We are very happy you are here 😍</AppText>
        <View style={{ justifyContent: "center" }}>
          <AppText style={styles.hook}>
            Register to be a blood donor, give blood and save life by filling{" "}
            <AppText
              style={styles.link}
              onPress={() => navigation.navigate("Be A Donor")}
            >
              THIS FORM
            </AppText>
          </AppText>
          <AppText>
            And if you are a recipient and need blood. Request blood{" "}
            <AppText
              style={styles.link}
              onPress={() => navigation.navigate("Request Blood")}
            >
              HERE
            </AppText>
          </AppText>
        </View>
        <AppText style={styles.footer}>
          Make sure to ALLOW notifications !
        </AppText>
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 90,
    height: 90,
    alignSelf: "center",
    marginTop: 30,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
  },
  lead: {
    fontSize: 16,
    marginBottom: 30,
  },
  hook: {
    marginBottom: 10,
  },
  link: {
    color: "blue",
  },
  footer: {
    marginTop: 20,
    color: colors.primary,
  },
});
