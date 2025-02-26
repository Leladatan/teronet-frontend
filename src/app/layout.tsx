import type React from "react";
import type {Metadata} from "next";
import type {NextFont} from "next/dist/compiled/@next/font";

import "./style/globals.css";
import {Inter} from "next/font/google";

import Header from "../widgets/header";

const inter: NextFont = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "TeRoNet",
    description: "Свяжитесь с работодателями и соискателями",
};

const RootLayout = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="ru">
        <body className={inter.className}>
        <Header/>
        {children}
        </body>
        </html>
    );
};

export default RootLayout;
