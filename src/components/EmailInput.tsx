import TextInput, { TextInputProps } from "./TextInput";
import { forwardRef } from "react";

const EmailInput = forwardRef<HTMLInputElement, TextInputProps>(
  (inputProps, ref) => <TextInput type="email" {...inputProps} ref={ref} />,
);

EmailInput.displayName = "EmailInput";

export default EmailInput;
