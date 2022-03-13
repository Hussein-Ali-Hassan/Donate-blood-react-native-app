import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";

import defaultStyles from "../../constants/styles";
import AppText from "../utils/AppText";

function PhoneInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.flagContainer}>
        <Image
          // @ts-ignore
          source={require("../../assets/lebanon.png")}
          style={styles.flag}
        />
        {/* @ts-ignore */}
        <AppText>+961</AppText>
      </View>
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 13,
    marginVertical: 10,
  },
  flagContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  flag: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});

export default PhoneInput;
