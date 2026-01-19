"use client";

import { useState } from "react";
import type { Camper } from "@/types/camper";
import CamperTabsContent from "@/components/CamperTabsContent/CamperTabsContent";
import BookingForm from "@/components/BookingForm/BookingForm";
import styles from "./CamperDetailsClient.module.css";

type Props = {
  camper: Camper;
};

export default function CamperDetailsClient({ camper }: Props) {
  const [activeTab, setActiveTab] =
    useState<"features" | "reviews">("features");

  return (
    <>
      <div className="container">
      {/* HEADER */}
      <section className={styles.camperHeader}>
        <h2 className={styles.title}>{camper.name}</h2>

        <div className={styles.meta}>
          <svg className={styles.iconStar} width={16} height={16}>
            <use href="/symbol-defs.svg#icon-Property-1Pressed" />
          </svg>
          <span className={styles.rating}>
            {camper.rating} ({camper.reviews.length} Reviews)
          </span>

          <svg className={styles.iconMap} width={16} height={16}>
            <use href="/symbol-defs.svg#icon-Map" />
          </svg>
          <span>{camper.location}</span>
        </div>

        <p className={styles.price}>€{camper.price.toFixed(2)}</p>
      </section>

      {/* GALLERY */}
      <section className={styles.gallery}>
        {camper.gallery.map((img, i) => (
          <img key={i} src={img.original} alt={camper.name} />
        ))}
      </section>

      <p className={styles.description}>{camper.description}</p>

      {/* TABS */}
      <div className={styles.tabs}>
  <button
    className={activeTab === "features" ? styles.active : ""}
    onClick={() => setActiveTab("features")}
  >
    Features
  </button>

  <button
    className={activeTab === "reviews" ? styles.active : ""}
    onClick={() => setActiveTab("reviews")}
  >
    Reviews
  </button>
</div>

      {/* CONTENT */}
      <section className={styles.detailsLayout}>
        <CamperTabsContent camper={camper} activeTab={activeTab} />
        <BookingForm />
        </section>
        </div>
      </>
      
  );
}