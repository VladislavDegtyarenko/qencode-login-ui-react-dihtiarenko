import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  labelClassName?: string;
  inputButton?: ReactNode;
  errorMessage?: string;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { label, labelClassName, inputButton, errorMessage, ...inputProps },
    ref,
  ) => (
    <label className={`flex flex-col ${labelClassName || ""}`}>
      {label && (
        <span className="mb-2 block text-left text-[15px] font-medium leading-none">
          {label}
        </span>
      )}
      <span className="relative block">
        <input
          className="w-full rounded-md border-[1.2px] border-gray px-3 py-[12px] text-[15px] leading-snug placeholder:text-gray"
          ref={ref}
          {...inputProps}
        />
        {inputButton}
      </span>
      {errorMessage && (
        <span className="mt-1 text-left text-sm text-red-500">
          {errorMessage}
        </span>
      )}
    </label>
  ),
);

TextInput.displayName = "TextInput";

export default TextInput;
