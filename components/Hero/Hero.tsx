"use client";

import styles from "./Hero.module.css";
import { useState } from "react";
//import { useRouter } from "next/router";

export const Hero = () => {
    const [query, setQuery] = useState("");
   // const router = useRouter();
    return(
        <section className={styles.hero}>
            <div className={styles.inner}>
            <h1 className={styles.title}>Campers of your dreams</h1>
            <p className={styles.text}>You can find everything you want in our catalog</p>
                <button className={styles.heroButton}>View Now</button>
                </div>
            </section>
    )
}