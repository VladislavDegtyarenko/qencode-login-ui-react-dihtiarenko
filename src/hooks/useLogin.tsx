import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// TS
type FormInputs = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onTouched",
  });

  const [isLoading, setIsLoading] = useState(false);

  const login: SubmitHandler<FormInputs> = async (data) => {
    const apiEndpoint = "https://auth-qa.qencode.com/v1/auth/login";
    console.log("data: ", data);

    setIsLoading(true);

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail);
      }

      const responseData = await response.json();
      console.log("Login successful:", responseData);

      alert("Login successful!");
    } catch (error) {
      console.error(`Error while sending a message: ${error}`);
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = handleSubmit(login);

  return {
    register,
    isLoading,
    errors,
    onSubmit,
  };
};
