import { ReactNode } from "react";
import LogoLink from "./LogoLink";

type LoginWrapperProps = {
  title: string;
  children: ReactNode;
};

const LoginWrapper = ({ title, children }: LoginWrapperProps) => {
  return (
    <div className="py-12 lg:py-24">
      <div className="ml-auto mr-auto max-w-[400px]">
        <div className="flex flex-col items-center gap-20">
          <LogoLink />
          <div className="grid w-full gap-10">
            <h2 className="text-gray-900 text-3xl font-bold">{title}</h2>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginWrapper;
