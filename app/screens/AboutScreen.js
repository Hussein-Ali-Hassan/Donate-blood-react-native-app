// @ts-nocheck
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../components/utils/AppText";

import Screen from "../components/utils/Screen";

const AboutScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <AppText style={styles.heading}>Donate Life</AppText>
          <AppText>
            Our goal with this app to help people who need blood find blood
            easily by sending us their request and we will notify all donors who
            registered through this app.
          </AppText>
        </View>
        <View style={styles.infoContainer}>
          <AppText>Version: 1.0.0</AppText>
          <AppText>Developed by Hussein Hassan</AppText>
        </View>
      </View>
    </Screen>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 10,
    justifyContent: "space-between",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: "center",
  },
  copyrights: {
    color: "blue",
    marginTop: 5,
  },
});
