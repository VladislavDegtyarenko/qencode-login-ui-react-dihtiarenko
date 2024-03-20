import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLocation } from "react-router-dom";

// TS
type FormInputs = {
  token: string;
  secret: string;
  password: string;
  password_confirm: string;
};

export const usePasswordSet = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onTouched",
  });
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const token = urlParams.get("token");
  const secret = urlParams.get("secret") || "";

  const passwordSet: SubmitHandler<FormInputs> = async (data) => {
    const apiEndpoint = "https://auth-qa.qencode.com/v1/auth/password-reset";
    console.log("data: ", data);

    setIsLoading(true);

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          token,
          secret,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail);
      }

      const responseData = await response.json();
      console.log("responseData: ", responseData);
      alert("Password changed!");

      // We can redirect here to another route with useNavigate hook
    } catch (error) {
      console.error(`Error while making a request: ${error}`);
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = handleSubmit(passwordSet);

  return {
    register,
    isLoading,
    errors,
    onSubmit,
  };
};
