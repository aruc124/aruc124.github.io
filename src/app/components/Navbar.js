"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Welcome!" },
    { href: "/projects", label: "Projects" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <nav
      className="navbar"
      style={{
        position: "absolute",
        top: "0.65rem",           // ⬆️ Slightly higher
        right: "2rem",
        padding: "1rem 2rem",  // ⬆️ Adds space around navbar
        fontSize: "2.5rem",    // ⬆️ Larger text
        zIndex: 1000,
      }}
    >
      <ul style={{ display: "flex", gap: "3rem", listStyle: "none" }}>
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>
              <span className={pathname === href ? "active" : ""}>
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
