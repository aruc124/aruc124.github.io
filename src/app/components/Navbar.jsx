"use client";

import Link from "next/link";
import "../globals.css"; // Updated relative path

export default function Navbar() {
  const navItems = [
    { href: "/aruc124.github.io/", label: "Welcome!" },
    { href: "/aruc124.github.io/projects", label: "Projects" },
    { href: "/aruc124.github.io/gallery", label: "Gallery" },
  ];

  return (
    <nav className="navbar">
      <ul>
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
