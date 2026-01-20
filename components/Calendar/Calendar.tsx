"use client";

import { useState } from "react";
import styles from "./Calendar.module.css";

type Props = {
  onSelect: (date: string) => void;
};

export default function Calendar({ onSelect }: Props) {
    const [currentDate, setCurrentDate] = useState(new Date());
    
const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const isPastDate = (day: number) => {
  const dateToCheck = new Date(year, month, day);
  dateToCheck.setHours(0, 0, 0, 0);

  return dateToCheck < today;
};

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const formatDate = (day: number) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  return (
    <div className={styles.calendar}>
      {/* HEADER */}
      <div className={styles.header}>
        <button onClick={() => setCurrentDate(new Date(year, month - 1))}>
          ‹
        </button>

        <span>
          {currentDate.toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </span>

        <button onClick={() => setCurrentDate(new Date(year, month + 1))}>
          ›
        </button>
      </div>

      {/* DAYS */}
      <div className={styles.weekdays}>
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <span className={styles.underline} key={d}>{d}</span>
        ))}
      </div>

      <div className={styles.grid}>
        {Array.from({ length: (firstDay + 6) % 7 }).map((_, i) => (
          <span key={i} />
        ))}

        {days.map((day) => {
  const disabled = isPastDate(day);

  return (
    <button
      key={day}
      className={`${styles.day} ${
        disabled ? styles.dayDisabled : ""
      }`}
      disabled={disabled}
      onClick={() => {
        if (!disabled) {
          onSelect(formatDate(day));
        }
      }}
    >
      {day}
    </button>
  );
})}
      </div>
    </div>
  );
}