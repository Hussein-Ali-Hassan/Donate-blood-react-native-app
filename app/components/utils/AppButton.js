import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../constants/colors";

function AppButton({
  title,
  onPress,
  color = "primary",
  style,
  icon,
  disabled,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: disabled ? "grey" : colors[color] },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.textContainer}>
        {icon && (
          <MaterialCommunityIcons
            style={styles.icon}
            name={icon.name}
            color={icon.color}
            size={25}
          />
        )}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 13,
    width: "100%",
    marginVertical: 8,
  },
  textContainer: {
    flexDirection: "row",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    marginRight: 8,
  },
});

export default AppButton;
