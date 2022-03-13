// @ts-nocheck
import React from "react";
import { StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
  FormPhoneInput,
} from "../components/formik";
import Screen from "../components/utils/Screen";
import { locations, bloodTypes } from "../constants/data";
import AppText from "../components/utils/AppText";

const validationSchema = Yup.object().shape({
  bloodType: Yup.object().required("Blood type is required").nullable(),
  location: Yup.object().required("Location is required").nullable(),
  contactNumber: Yup.string().required("Contact Number is required"),
  message: Yup.string().required("Message is required"),
});

const RequestBlood = () => {
  const handleSubmit = ({ bloodType, location, contactNumber, message }) => {};

  return (
    <>
      <Screen>
        <ScrollView>
          <KeyboardAvoidingView behavior="position" style={styles.container}>
            <AppText style={styles.heading}>
              Send us your request details and we will notify all donors within
              your area.
            </AppText>
            <Form
              initialValues={{
                bloodType: null,
                location: null,
                contactNumber: "",
                message: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <Picker
                items={bloodTypes}
                numberOfColumns={4}
                name="bloodType"
                placeholder="Blood type"
                width="50%"
                itemIcon="blood-drop"
              />
              <Picker
                items={locations}
                numberOfColumns={3}
                name="location"
                placeholder="Location"
                width="50%"
                itemIcon="home"
              />
              <FormPhoneInput
                placeholder="Contact number"
                name="contactNumber"
                keyboardType="phone-pad"
                autoCompleteType="tel"
                maxLength={8}
              />
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="message-bulleted"
                name="message"
                placeholder="Message"
                multiline
              />
              <SubmitButton title="Send Request via Whatsapp" />
            </Form>
          </KeyboardAvoidingView>
        </ScrollView>
      </Screen>
    </>
  );
};

export default RequestBlood;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
