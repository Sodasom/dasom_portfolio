import Link from "next/link";

import Nav from "./Nav";

export default function Header() {
  return (
    <header className="header">
      <h1 className="text-base font-bold text-base-black md:text-2xl">
        <Link href="/">🐮DASOM</Link>
      </h1>
      <Nav />
    </header>
  );
}
