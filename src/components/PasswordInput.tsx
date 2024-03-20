import TextInput from "./TextInput";
import { TextInputProps } from "./TextInput";
import { useState, forwardRef } from "react";

const PasswordInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
      <TextInput
        label={label}
        type={showPassword ? "text" : "password"}
        inputButton={
          <button
            className="absolute right-4 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center"
            onClick={togglePasswordVisibility}
            type="button"
          >
            <img
              src={
                showPassword
                  ? "/hide-password-icon.svg"
                  : "/show-password-icon.svg"
              }
              alt={showPassword ? "Hide Password" : "Show Password"}
            />
          </button>
        }
        ref={ref}
        {...props}
      />
    );
  },
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
