// Core
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

// UI
import Button from "../components/Button";
import EmailInput from "../components/EmailInput";
import LoginWrapper from "../components/LoginWrapper";
import PasswordInput from "../components/PasswordInput";
import {
  emailValudationRules,
  passwordValidationRules,
} from "../lib/validationRules";

const Login = () => {
  const { register, onSubmit, errors, isLoading } = useLogin();

  return (
    <LoginWrapper title="Log in to your account">
      <form className="grid gap-8" onSubmit={onSubmit} noValidate>
        <div className="flex w-full justify-between gap-4">
          <Button
            type="button"
            variant="secondary"
            icon="/google.svg"
            className="text-sm"
          >
            Google
          </Button>
          <Button
            type="button"
            variant="secondary"
            icon="/github.svg"
            className="text-sm"
          >
            Github
          </Button>
        </div>

        <div className="flex items-center gap-[5px] text-xs text-gray">
          <span className="block h-[1px] w-full bg-gray"></span>
          <span>OR</span>
          <span className="block h-[1px] w-full bg-gray"></span>
        </div>

        <EmailInput
          placeholder="Work email"
          autoComplete="email"
          errorMessage={errors.email?.message}
          {...register("email", emailValudationRules)}
        />
        <PasswordInput
          placeholder="Password"
          labelClassName="-mt-2"
          autoComplete="current-password"
          errorMessage={errors.password?.message}
          {...register("password", passwordValidationRules)}
        />
        <Link
          to="/forgot-password"
          className="-mt-4 text-right text-sm font-medium text-accent transition-colors hover:text-accent-hovered"
        >
          Forgot your password?
        </Link>

        <Button variant="primary" disabled={isLoading}>
          Log in to Qencode
        </Button>

        <div className="-mt-3 text-sm">
          Is your company new to Qencode?{" "}
          <Link
            to="/"
            className="font-medium text-accent transition-colors hover:text-accent-hovered"
          >
            Sign up
          </Link>
        </div>
      </form>
    </LoginWrapper>
  );
};

export default Login;
