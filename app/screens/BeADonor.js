import React, { useState, useEffect } from "react";
import { StyleSheet, Platform, View } from "react-native";
import * as Yup from "yup";
import * as Notifications from "expo-notifications";

import Screen from "../components/utils/Screen";
import { locations, bloodTypes } from "../constants/data";
import {
  ErrorMessage,
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/formik";
import AppText from "../components/utils/AppText";
import Loader from "../components/utils/Loader";

const validationSchema = Yup.object().shape({
  bloodType: Yup.object().required("Blood type is required").nullable(),
  location: Yup.object().required("Location is required").nullable(),
});

function BeADonor() {
  const [expoPushToken, setExpoPushToken] = useState("");

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
  }, []);

  const handleFormSubmit = ({ bloodType, location }) => {
    // handleSubmit(bloodType, location, expoPushToken);
  };

  return (
    <>
      <Loader visible={false} />
      <Screen style={styles.container}>
        <Form
          initialValues={{
            bloodType: null,
            location: null,
          }}
          onSubmit={handleFormSubmit}
          validationSchema={validationSchema}
        >
          <View style={styles.inputContainer}>
            <AppText style={styles.label}>Choose your blood type:</AppText>
            <Picker
              items={bloodTypes}
              numberOfColumns={4}
              name="bloodType"
              placeholder="Blood type"
              width="50%"
              itemIcon="blood-drop"
            />
          </View>

          <View style={styles.inputContainer}>
            <AppText style={styles.label}>Choose your location:</AppText>
            <Picker
              items={locations}
              numberOfColumns={3}
              name="location"
              placeholder="Location"
              width="50%"
              itemIcon="home"
            />
          </View>

          <SubmitButton title="Submit" />

          {/* {isDone && (
            <AppText style={styles.feedback}>
              Thank You! You will recieve a notification once blood is needed.
            </AppText>
          )} */}
        </Form>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  inputContainer: {
    marginVertical: 5,
  },
  label: {
    marginRight: 10,
  },
  feedback: {
    color: "green",
    marginTop: 10,
    textAlign: "center",
  },
});
export default BeADonor;

async function registerForPushNotificationsAsync() {
  let token;

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== "granted") {
    alert("Failed to get push token for push notification!");
    return;
  }

  token = (await Notifications.getExpoPushTokenAsync()).data;

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
