"use client";

import * as React from "react";
import Link from "next/link";

import Logo from "@/layout/header/logo";
import { usePathname } from "next/navigation";
import Burger from "@/components/SVGR/Burger";
import Search from "@/components/SVGR/Search";
import User from "@/components/SVGR/User";

interface LinkType {
  id: number;
  label: string;
  url: string;
}
const links: LinkType[] = [
  { id: 1, label: "خانه", url: "#" },
  { id: 2, label: "طراحی سایت", url: "#" },
  { id: 3, label: "کمپین‌های بازاریابی و تبلیغاتی", url: "/campaigns" },
  { id: 4, label: "اتوماسیون و بازاریابی", url: "#" },
  { id: 5, label: "تولید محتوا", url: "#" },
  { id: 6, label: "سئو", url: "#" },
  { id: 7, label: "تماس با ما", url: "#" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="shadow-sm bg-white px-6">
      <div className="max-w-[1200px] mx-auto">
        <nav
          className="mx-auto flex items-center justify-start md:justify-between py-3 md:py-4"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="open-menu"
              className="w-8 h-8 rounded-lg border border-mercury flex items-center justify-center"
            >
              <Burger />
            </button>
          </div>

          <div className="mr-4 md:mr-0 ml-auto md:ml-0">
            <Logo />
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center justify-center md:gap-4 lg:gap-5 xl:gap-6 text-sm font-medium grow">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className={`hover:text-cod-gray ${
                    pathname === link.url
                      ? "text-cod-gray font-bold"
                      : "text-silver-chalice text-[14px] font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="open-menu"
              className="w-8 h-8 rounded-lg border border-mercury flex items-center justify-center"
            >
              <Search />
            </button>
            <button
              aria-label="open-menu"
              className="w-8 h-8 rounded-lg border border-mercury flex items-center justify-center"
            >
              <User color="#141414" />
            </button>
          </div>
        </nav>

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile-Menu"
        >
          <div className="flex justify-between items-center p-4 border-b border-mercury">
            <span className="text-lg font-semibold">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
              className="text-xl"
            >
              ×
            </button>
          </div>
          <ul className="flex flex-col gap-4 p-4 text-sm font-medium">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className={`hover:text-cod-gray ${
                    pathname === link.url
                      ? "text-cod-gray font-bold"
                      : "text-silver-chalice text-[14px] font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay when menu is open */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/80 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
}

export default Header;
