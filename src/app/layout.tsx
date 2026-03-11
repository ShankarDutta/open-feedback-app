import { ReactNode } from "react";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


type RootLayoutProp = {
	children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProp>) => {
	return (
		<html lang="en" className={cn("font-sans", geist.variable)}>
			<body>
				<main className="mx-auto max-w-7xl px-6 py-3">{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
