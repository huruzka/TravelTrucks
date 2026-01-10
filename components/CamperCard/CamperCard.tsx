"use client";

import Link from "next/link";
import styles from "./CamperCard.module.css";
import type { Camper } from "@/types/camper";

type Props = {
  camper: Camper;
};

export default function CamperCard({ camper }: Props) {
  const { features, gallery, reviews } = camper;

  return (
    <article className={styles.card}>
      {/* IMAGE */}
      <div className={styles.imageWrapper}>
        <img
          src={gallery[0]?.thumb}
          alt={camper.name}
          className={styles.image}
        />
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        {/* HEADER */}
        <div className={styles.header}>
          <h3 className={styles.title}>{camper.name}</h3>

          <div className={styles.priceWrapper}>
            <span className={styles.price}>
              €{camper.price.toFixed(2)}
            </span>
            <button
              className={styles.favorite}
              aria-label="Add to favorites"
            >
              ♡
            </button>
          </div>
        </div>

        {/* META */}
        <div className={styles.meta}>
          <span>
            ⭐ {camper.rating} ({reviews.length} Reviews)
          </span>
          <span>{camper.location}</span>
        </div>

        {/* DESCRIPTION */}
        <p className={styles.description}>
          {camper.description}
        </p>

        {/* FEATURES */}
        <ul className={styles.features}>
          {features.transmission && (
            <li>
              {features.transmission === "automatic"
                ? "Automatic"
                : "Manual"}
            </li>
          )}

          {features.engine && (
            <li>
              {features.engine === "petrol"
                ? "Petrol"
                : features.engine === "diesel"
                ? "Diesel"
                : "Hybrid"}
            </li>
          )}

          {features.kitchen && <li>Kitchen</li>}
          {features.AC && <li>AC</li>}
          {features.bathroom && <li>Bathroom</li>}
          {features.TV && <li>TV</li>}
        </ul>

        {/* BUTTON */}
        <Link
          href={`/campers/${camper.id}`}
          className={styles.button}
        >
          Show more
        </Link>
      </div>
    </article>
  );
}