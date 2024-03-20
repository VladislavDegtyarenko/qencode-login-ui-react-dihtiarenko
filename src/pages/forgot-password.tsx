// Form imports
import { useForgotPassword } from "../hooks/useForgotPassword";
import { emailValudationRules } from "../lib/validationRules";

// UI
import Button from "../components/Button";
import EmailInput from "../components/EmailInput";
import LoginWrapper from "../components/LoginWrapper";

const ForgotPassword = () => {
  const { register, onSubmit, errors, isLoading } = useForgotPassword();

  return (
    <LoginWrapper title="Forgot password?">
      <form onSubmit={onSubmit} className="flex flex-col" noValidate>
        <EmailInput
          placeholder="Enter your email"
          autoComplete="email"
          errorMessage={errors.email?.message}
          {...register("email", emailValudationRules)}
        />
        <Button variant="primary" className="mt-[25px]" disabled={isLoading}>
          Send
        </Button>
        <Button variant="secondary" className="mt-5" to="/">
          Cancel
        </Button>
      </form>
    </LoginWrapper>
  );
};

export default ForgotPassword;
