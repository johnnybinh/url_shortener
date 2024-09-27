import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Button } from "@nextui-org/button";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/gdsc.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen w-screen">
            <Navbar />
            <main className="  h-full w-full">{children}</main>
            <footer className="max-sm:text-md flex justify-center items-center p-4 max-sm:gap-0 gap-2">
              <p className="max-sm:text-sm ">by</p>
              <Button variant="light" color="primary">
                <a
                  className="max-sm:text-sm "
                  href="https://github.com/johnnybinh"
                >
                  Nguyen The Binh
                </a>
              </Button>
              <p className="max-sm:text-sm ">From</p>
              <Button variant="light" color="primary">
                <a
                  className="max-sm:text-sm "
                  href="https://www.facebook.com/dsc.hcmiu"
                >
                  GDSC-HCMIU
                </a>
              </Button>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
