import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import React from "react";
import { HeroProviderWrapper } from "./components/HeroProviderWrapper"; // путь укажи свой

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "SmartBudget",
    description: "Financial accounting website",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <HeroProviderWrapper>
            {children}
        </HeroProviderWrapper>
        </body>
        </html>
    );
}
