import React from "react";
import { useFormikContext } from "formik";

import PhoneInput from "../inputs/PhoneInput";
import ErrorMessage from "./ErrorMessage";

function FormPhoneInput({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <PhoneInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormPhoneInput;
