import Link from "next/link";
import styles from "./Header.module.css";


export const Header =() => {
    return(
        <header className = { styles.header }>
            <div className="container">
                <div className={styles.logoWrapper}>
                    <Link href="/">
                        <svg width={136} height={16} aria-label="Company logo">
                            <use href="/symbol-defs.svg#icon-Logo"/>
                        </svg>
                    </Link>
                    <nav className={styles.navigation}>
                        <Link href="/home" className={styles.headerlink}>Home</Link>
                        <Link href="/catalog" className={styles.headerlink}>Catalog</Link>
                    </nav>
                </div>
            </div>
        </header >
    )
}