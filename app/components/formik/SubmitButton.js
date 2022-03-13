import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../utils/AppButton";

function SubmitButton({ title, disabled }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} disabled={disabled} />;
}

export default SubmitButton;
