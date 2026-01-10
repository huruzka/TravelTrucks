"use client";

import styles from "./Hero.module.css";
import { useState } from "react";
import Link from "next/link";


export const Hero = () => {
    const [query, setQuery] = useState("");

    return(
        <section className={styles.hero}>
            <div className={styles.inner}>
            <h1 className={styles.title}>Campers of your dreams</h1>
            <p className={styles.text}>You can find everything you want in our catalog</p>
                <Link href="/catalog" className={styles.heroButton}>View Now</Link>
                </div>
            </section>
    )
}