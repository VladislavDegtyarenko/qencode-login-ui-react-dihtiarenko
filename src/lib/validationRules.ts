import { RegisterOptions } from "react-hook-form";

export const emailValudationRules: RegisterOptions = {
  required: {
    value: true,
    message: "Email is required",
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Incorrect email. Example: your@email.com",
  },
};

export const passwordValidationRules: RegisterOptions = {
  required: {
    value: true,
    message: "Password is required",
  },
  minLength: {
    value: 8,
    message: "Password length should be at least 8 characters",
  },
};
