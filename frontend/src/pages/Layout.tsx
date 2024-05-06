import React, { ReactNode } from "react";
import Navigation from "../components/Navigation/Navigation";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen pt-20 pl-6 pr-6 max-w-screen-lg mx-auto">
      <Navigation />
      <main className="flex-grow">{children}</main>
    </div>
  );
};
