"use client";

import Link from "next/link";
import styles from "./CamperCard.module.css";
import type { Camper } from "@/types/camper";
import { useState, useEffect } from "react";

type Props = {
  camper: Camper;
};

export default function CamperCard({ camper }: Props) {
  const { features, gallery, reviews } = camper;
  const [isFavorite, setIsFavorite] = useState(false);

    // ⬇️ читаємо з localStorage при маунті
  useEffect(() => {
    const saved = localStorage.getItem(`favorite-${camper.id}`);
    if (saved) {
      setIsFavorite(JSON.parse(saved));
    }
  }, [camper.id]);

  // ⬇️ записуємо при зміні
  useEffect(() => {
    localStorage.setItem(
      `favorite-${camper.id}`,
      JSON.stringify(isFavorite)
    );
  }, [isFavorite, camper.id]);


  const toggleFavorite = () => {
    setIsFavorite(prev => !prev);
  };
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
              onClick={toggleFavorite}
            >
              <svg className={`${styles.icon} ${isFavorite ? styles.iconActive : ""}`}
                width={25} height={24}>
        <use href="/symbol-defs.svg#icon-heart" />
              </svg>
            </button>
          </div>
        </div>

        {/* META */}
        <div className={styles.meta}>
          <svg className={styles.iconStar} width={16} height={16}>
        <use href="/symbol-defs.svg#icon-Property-1Pressed" />
              </svg>
          <span className={styles.rating}>
           {camper.rating } ({reviews.length} Reviews)
          </span>
          <svg className={styles.iconMap} width={16} height={16}>
        <use href="/symbol-defs.svg#icon-Map" />
              </svg>
          <span className={styles.location}>{camper.location}</span>
        </div>

        {/* DESCRIPTION */}
        <p className={styles.description}>
          {camper.description}
        </p>

        {/* FEATURES */}
        <ul className={styles.features}>
          {features.transmission && (
            <li className={styles.featureItem}>
              <svg className={styles.icon} width={20} height={20}>
        <use href="/symbol-defs.svg#icon-diagram" />
              </svg>
              <span>
              {features.transmission === "automatic"
                ? "Automatic"
                  : "Manual"}
                </span>
            </li>
          )}

          {features.engine && (
            <li className={styles.featureItem}>
              <svg className={styles.icon} width={20} height={20}>
        <use href="/symbol-defs.svg#icon-fuel-pump-1" />
              </svg>
              <span>
              {features.engine === "petrol"
                ? "Petrol"
                : features.engine === "diesel"
                ? "Diesel"
                    : "Hybrid"}
                </span>
            </li>
          )}

          {features.kitchen && <li className={styles.featureItem}>
            <svg className={styles.icon} width={20} height={20}>
        <use href="/symbol-defs.svg#icon-cup-hot" />
              </svg>
              <span>Kitchen</span></li>}
          {features.AC && <li className={styles.featureItem}>
            <svg className={styles.icon} width={20} height={20}>
        <use href="/symbol-defs.svg#icon-wind" />
              </svg>
              <span>AC</span></li>}
          {features.bathroom && <li className={styles.featureItem}>
            <svg className={styles.icon} width={20} height={20}>
        <use href="/symbol-defs.svg#icon-ph_shower" />
              </svg>
              <span>Bathroom</span></li>}
          {features.TV && <li className={styles.featureItem}>
            <svg className={styles.icon} width={20} height={20}>
        <use href="/symbol-defs.svg#icon-tv" />
              </svg>
              <span>TV</span></li>}
        </ul>

        {/* BUTTON */}
        <Link
          href={`/catalog/${camper.id}`}
          className={styles.button}
        >
          Show more
        </Link>
      </div>
    </article>
  );
}