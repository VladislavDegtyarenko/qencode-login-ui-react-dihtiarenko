import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// TS
type FormInputs = {
  email: string;
};

const BASE_URL = import.meta.env.VITE_BASE_URL || "https://auth-qa.qencode.com";

export const useForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onTouched",
  });
  const [isLoading, setIsLoading] = useState(false);

  const forgotPassword: SubmitHandler<FormInputs> = async (data) => {
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
          email: data.email,
          redirect_url: BASE_URL + "/password-set",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail);
      }

      const responseData = await response.json();
      console.log("Password reset:", responseData);

      alert("Check your email!");
    } catch (error) {
      console.error(`Error while making a request: ${error}`);
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = handleSubmit(forgotPassword);

  return {
    register,
    isLoading,
    errors,
    onSubmit,
  };
};
