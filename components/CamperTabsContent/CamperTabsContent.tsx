"use client";

import styles from "./CamperTabsContent.module.css";
import type { Camper } from "@/types/camper";

type Props = {
  camper: Camper;
  activeTab: "features" | "reviews";
};

export default function CamperTabsContent({
  camper,
  activeTab,
}: Props) {
  if (activeTab === "reviews") {
    return (
    <ul className={styles.reviews}>
  {camper.reviews.map((review, index) => (
    <li key={index} className={styles.reviewItem}>
      {/* LEFT: avatar */}
      <div className={styles.avatar}>
        {review.reviewer_name.charAt(0)}
      </div>

      {/* RIGHT: content */}
      <div className={styles.reviewContent}>
        <div className={styles.reviewHeader}>
          <p className={styles.reviewerName}>
            {review.reviewer_name}
          </p>

          <div className={styles.stars}>
            {Array.from({ length: review.reviewer_rating }).map((_, i) => (
  <svg key={i} width={16} height={16} className={styles.starActive}>
    <use href="/symbol-defs.svg#icon-Property-1Pressed" />
  </svg>
))}
          </div>
        </div>

        <p className={styles.comment}>{review.comment}</p>
      </div>
    </li>
  ))}
</ul>
    );
  }

  return (
    <div className={styles.features}>
      {/* FEATURES */}
      <ul className={styles.featuresList}>
        {camper.features.transmission && (
          <li>
            <svg width={20} height={20}>
              <use href="/symbol-defs.svg#icon-diagram" />
            </svg>
            Automatic
          </li>
        )}

        {camper.features.AC && (
          <li>
            <svg width={20} height={20}>
              <use href="/symbol-defs.svg#icon-wind" />
            </svg>
            AC
          </li>
        )}

        {camper.features.engine && (
          <li>
            <svg width={20} height={20}>
              <use href="/symbol-defs.svg#icon-fuel-pump-1" />
            </svg>
            {camper.features.engine}
          </li>
        )}

        {camper.features.kitchen && (
          <li>
            <svg width={20} height={20}>
              <use href="/symbol-defs.svg#icon-cup-hot" />
            </svg>
            Kitchen
          </li>
        )}

        {camper.features.radio && (
          <li>
            <svg width={20} height={20}>
              <use href="/symbol-defs.svg#icon-ui-radios" />
            </svg>
            Radio
          </li>
        )}
      </ul>

      {/* VEHICLE DETAILS */}
      <div className={styles.vehicleDetails}>
        <h3 className={styles.vehicleTitle}>Vehicle details</h3>
        <ul className={styles.vehicleList}>
          <li><span>Form</span><span>{camper.details.form}</span></li>
          <li><span>Length</span><span>{camper.details.length}</span></li>
          <li><span>Width</span><span>{camper.details.width}</span></li>
          <li><span>Height</span><span>{camper.details.height}</span></li>
          <li><span>Tank</span><span>{camper.details.tank}</span></li>
          <li><span>Consumption</span><span>{camper.details.consumption}</span></li>
        </ul>
      </div>
    </div>
  );
}