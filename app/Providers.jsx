"use client";
import { SessionProvider, sessionProvider } from "next-auth/react";

const Providers = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
