"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import { NAV_MENU_LIST } from "@/app/utils/config";

import CloseIcon from "@/app/assets/icons/CloseIcon";
import MenuIcon from "@/app/assets/icons/MenuIcon";

export default function Nav() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <nav className="nav">
      <button className="md:hidden" onClick={handleIsOpen}>
        {isOpen ? (
          <CloseIcon width="24" height="24" />
        ) : (
          <MenuIcon width="24" height="24" />
        )}
      </button>
      <ul className={`${isOpen ? "nav_list" : "hidden"} nav_list_md`}>
        {NAV_MENU_LIST.map((list) => (
          <li
            key={list.id}
            className={`${
              pathname === list.path
                ? "text-base-gray800 font-bold"
                : "text-base-gray300"
            }`}
          >
            <Link href={list.path}>{list.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
