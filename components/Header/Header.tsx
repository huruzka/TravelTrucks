"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export const Header = () => {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isCatalog = pathname.startsWith("/catalog");

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.logoWrapper}>
          <Link href="/">
            <svg width={136} height={16} aria-label="Company logo">
              <use href="/symbol-defs.svg#icon-Logo" />
            </svg>
          </Link>

          <nav className={styles.navigation}>
            <Link
              href="/"
              className={`${styles.headerlink} ${
                isHome ? styles.active : ""
              }`}
            >
              Home
            </Link>

            <Link
              href="/catalog"
              className={`${styles.headerlink} ${
                isCatalog ? styles.active : ""
              }`}
            >
              Catalog
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};