import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Fontisto } from "@expo/vector-icons";

import AppText from "../utils/AppText";

function PickerItem({ item, onPress, itemIcon }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Fontisto
        name={itemIcon}
        size={35}
        color={itemIcon === "home" ? "#333" : "red"}
      />
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    paddingVertical: 17,
    fontSize: 15,
  },
});

export default PickerItem;
