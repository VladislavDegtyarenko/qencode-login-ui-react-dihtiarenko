// import { ButtonProps } from "../types/types";

import { ButtonHTMLAttributes } from "react";
import { Link, LinkProps } from "react-router-dom";

enum ButtonVariant {
  primary = "bg-accent text-white hover:bg-accent-hovered transition-colors",
  secondary = "bg-transparent border-gray border-[1.2px] hover:bg-gray/25 transition-colors",
}

type CommonButtonProps = {
  variant: keyof typeof ButtonVariant;
  icon?: string;
  iconPosition?: "before" | "after";
  disabled?: boolean;
};

type ButtonProps = CommonButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

type LinkButtonProps = CommonButtonProps & LinkProps;

const Button = ({
  variant,
  icon,
  iconPosition,
  children,
  disabled,
  className,

  ...props
}: ButtonProps | LinkButtonProps) => {
  const isLink = "to" in props;

  const content = (
    <>
      {icon && (
        <img src={icon} alt="" className="h-[18px] w-[18px] object-cover" />
      )}
      {children}
    </>
  );

  if (isLink) {
    const linkProps = props as LinkButtonProps;
    const { to, ...buttonProps } = linkProps;

    return (
      <Link
        to={to!}
        className={`
          flex grow items-center justify-center rounded-lg p-[14px] text-base font-medium leading-tight
          ${ButtonVariant[variant]}
          ${icon ? "gap-[10px]" : ""}
          ${iconPosition === "after" ? "flex-row-reverse" : ""}
          ${disabled ? "pointer-events-none bg-slate-500" : ""}
          ${className}
        `}
        {...buttonProps}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`
        flex grow items-center justify-center rounded-lg p-[14px] text-base font-medium leading-tight
        ${ButtonVariant[variant]}
        ${icon ? "gap-[10px]" : ""}
        ${iconPosition === "after" ? "flex-row-reverse" : ""}
        ${disabled ? "pointer-events-none bg-slate-500" : ""}
        ${className}
      `}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
