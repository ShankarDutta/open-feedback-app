import { ReactNode } from "react";
import "./globals.css";

type RootLayoutProp = {
  children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProp>) => {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto max-w-7xl px-6 py-3">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
