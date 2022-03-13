import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

import colors from "../../constants/colors";

function MyActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
    justifyContent: "center",
  },
});

export default MyActivityIndicator;
