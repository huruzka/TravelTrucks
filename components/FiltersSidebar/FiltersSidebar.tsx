"use client";

import styles from "./FiltersSidebar.module.css";
import type { Filters } from "@/types/filters";

type Props = {
  filters: Filters;
  onChange: (filters: Filters) => void;
  onSearch: () => void;
};

export default function FiltersSidebar({
  filters,
  onChange,
  onSearch,
}: Props) {
  return (
    <aside className={styles.sidebar}>
      {/* Location */}
      <div className={styles.block}>
        <p className={styles.label}>Location</p>
        <div className={styles.location}>
          <svg className={styles.filterIconLocation} width={18} height={18}>
            <use href="/symbol-defs.svg#icon-Map" />
          </svg>
          <input
            value={filters.location}
            onChange={(e) =>
              onChange({ ...filters, location: e.target.value })
            }
            placeholder="Kyiv, Ukraine"
          />
        </div>
      </div>

      {/* Vehicle equipment */}
      <div className={styles.block}>
        <p className={styles.filter}>Filters</p>
        <p className={styles.title}>Vehicle equipment</p>

        <div className={styles.grid}>
          {(["AC", "kitchen", "TV", "bathroom"] as const).map((key) => (
            <button
              key={key}
              className={filters.equipment[key] ? styles.active : ""}
              onClick={() =>
                onChange({
                  ...filters,
                  equipment: {
                    ...filters.equipment,
                    [key]: !filters.equipment[key],
                  },
                })
              }
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle type */}
      <div className={styles.block}>
        <p className={styles.title}>Vehicle type</p>

        <div className={styles.grid}>
          <button
            className={filters.vehicleType === "van" ? styles.active : ""}
            onClick={() =>
              onChange({
                ...filters,
                vehicleType:
                  filters.vehicleType === "van" ? null : "van",
              })
            }
          >
            Van
          </button>

          <button
            className={
              filters.vehicleType === "fullyIntegrated"
                ? styles.active
                : ""
            }
            onClick={() =>
              onChange({
                ...filters,
                vehicleType:
                  filters.vehicleType === "fullyIntegrated"
                    ? null
                    : "fullyIntegrated",
              })
            }
          >
            <span className={styles.multiline}>
              Fully
              <br />
              Integrated
            </span>
          </button>

          <button
            className={
              filters.vehicleType === "alcove" ? styles.active : ""
            }
            onClick={() =>
              onChange({
                ...filters,
                vehicleType:
                  filters.vehicleType === "alcove" ? null : "alcove",
              })
            }
          >
            Alcove
          </button>
        </div>
      </div>

      <button className={styles.search} onClick={onSearch}>
        Search
      </button>
    </aside>
  );
}