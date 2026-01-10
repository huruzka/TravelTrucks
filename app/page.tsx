
import { Hero } from "@/components/Hero/Hero";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Trucks",
  description: "Rent trcks for your rest",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Hero />
      </main>
    </div>
  );
}
