import Button from "../components/Button";
import LoginWrapper from "../components/LoginWrapper";
import PasswordInput from "../components/PasswordInput";
import { usePasswordSet } from "../hooks/usePasswordSet";
import { passwordValidationRules } from "../lib/validationRules";

const PasswordSet = () => {
  const { register, onSubmit, errors, isLoading } = usePasswordSet();

  return (
    <LoginWrapper title="Create new Password?">
      <form onSubmit={onSubmit}>
        <PasswordInput
          label="Password"
          placeholder="Password"
          autoComplete="new-password"
          errorMessage={errors.password?.message}
          {...register("password", passwordValidationRules)}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Password"
          labelClassName="mt-[25px]"
          autoComplete="new-password"
          errorMessage={errors.password?.message}
          {...register("password_confirm", passwordValidationRules)}
        />
        <Button variant="primary" className="mt-[30px]" disabled={isLoading}>
          Reset Password
        </Button>
      </form>
    </LoginWrapper>
  );
};

export default PasswordSet;
