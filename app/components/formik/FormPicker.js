import React from "react";
import { useFormikContext } from "formik";
import { View } from "react-native";

import AppPicker from "../inputs/AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
  itemIcon,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <View>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        itemIcon={itemIcon}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default AppFormPicker;
