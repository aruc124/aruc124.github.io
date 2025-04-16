"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import "../globals.css";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Welcome!" },
    { href: "/projects", label: "Projects" },
    { href: "/gallery", label: "Gallery" },
    
    
  ];

  return (
    <nav className="navbar">
      <ul>
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`nav-link ${pathname === href ? "active" : ""}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
