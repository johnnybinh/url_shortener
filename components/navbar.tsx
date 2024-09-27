"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";
import { useState, useEffect } from "react";
import gdsc from "@/public/gdsc.png";
import Image from "next/image";

const isMobileDevice = () => {
  return window.matchMedia("(max-width: 767px)").matches;
};

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {" "}
      {isMobile ? (
        <div>
          <NextUINavbar>
            <NavbarMenuToggle></NavbarMenuToggle>
            <NavbarMenu>
              <NavbarItem>
                {" "}
                <Link className="text-2xl" color="primary" href="/">
                  Shortener
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link className="text-2xl" color="primary" href="/history">
                  History
                </Link>
              </NavbarItem>
              <NavbarItem className="flex flex-row items-center">
                <a href="github.com/johnnybinh">Github</a>
              </NavbarItem>
            </NavbarMenu>
            <NavbarBrand>
              <p className="font-bold flex justify-center items-center gap-2 text-inherit">
                <Image alt="gdsc" src={gdsc} width={50} height={50} />
                <Link color="foreground" href="/">
                  URL Shortener
                </Link>
              </p>
            </NavbarBrand>
          </NextUINavbar>
        </div>
      ) : (
        <NextUINavbar
          isBlurred={true}
          maxWidth="2xl"
          isBordered
          position="sticky"
        >
          <NavbarContent justify="end" className="">
            {" "}
            <NavbarBrand>
              <p className="font-bold flex justify-center items-center gap-2 text-inherit">
                <Image alt="gdsc" src={gdsc} width={50} height={50} />
                <Link color="foreground" href="/">
                  URL Shortener
                </Link>
              </p>
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent className=" sm:flex gap-8" justify="center">
            <NavbarItem>
              <Link className="text-2xl" color="primary" href="/">
                Shortener
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="text-2xl" color="primary" href="/history">
                History
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <a href="http://github.com/johnnybinh">
              <Button color="default">
                <GithubIcon />
              </Button>
            </a>
          </NavbarContent>
        </NextUINavbar>
      )}
    </div>
  );
};
