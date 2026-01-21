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
  const isAutomatic = filters.transmission === "automatic";

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

      {/* Filters */}
      <div className={styles.block}>
        <p className={styles.filter}>Filters</p>
        <p className={styles.title}>Vehicle equipment</p>

        <div className={styles.grid}>
          {/* AC */}
          <button
            className={filters.equipment.AC ? styles.active : ""}
            onClick={() =>
              onChange({
                ...filters,
                equipment: {
                  ...filters.equipment,
                  AC: !filters.equipment.AC,
                },
              })
            }
          >
            <svg className={styles.filterIcon} width={32} height={32}>
              <use href="/symbol-defs.svg#icon-wind" />
            </svg>
            AC
          </button>

          {/* AUTOMATIC (maps to transmission) */}
          <button
            className={isAutomatic ? styles.active : ""}
            onClick={() =>
              onChange({
                ...filters,
                transmission: isAutomatic ? null : "automatic",
              })
            }
          >
            <svg className={styles.filterIcon} width={32} height={32}>
              <use href="/symbol-defs.svg#icon-diagram" />
            </svg>
            Automatic
          </button>

          {/* KITCHEN */}
          <button
            className={filters.equipment.kitchen ? styles.active : ""}
            onClick={() =>
              onChange({
                ...filters,
                equipment: {
                  ...filters.equipment,
                  kitchen: !filters.equipment.kitchen,
                },
              })
            }
          >
            <svg className={styles.filterIcon} width={32} height={32}>
              <use href="/symbol-defs.svg#icon-cup-hot" />
            </svg>
            Kitchen
          </button>

          {/* TV */}
          <button
            className={filters.equipment.TV ? styles.active : ""}
            onClick={() =>
              onChange({
                ...filters,
                equipment: {
                  ...filters.equipment,
                  TV: !filters.equipment.TV,
                },
              })
            }
          >
            <svg className={styles.filterIcon} width={32} height={32}>
              <use href="/symbol-defs.svg#icon-tv" />
            </svg>
            TV
          </button>

          {/* BATHROOM */}
          <button
            className={filters.equipment.bathroom ? styles.active : ""}
            onClick={() =>
              onChange({
                ...filters,
                equipment: {
                  ...filters.equipment,
                  bathroom: !filters.equipment.bathroom,
                },
              })
            }
          >
            <svg className={styles.filterIcon} width={32} height={32}>
              <use href="/symbol-defs.svg#icon-ph_shower" />
            </svg>
            Bathroom
          </button>
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
            <svg className={styles.filterIcon} width={32} height={32}>
              <use href="/symbol-defs.svg#icon-bi_grid-1x2" />
            </svg>
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
            <svg className={styles.filterIcon} width={32} height={32}>
              <use href="/symbol-defs.svg#icon-bi_grid" />
            </svg>
            <span className={styles.multiline}>
              Fully
              <br />
              Integrated
            </span>
          </button>

          <button
            className={filters.vehicleType === "alcove" ? styles.active : ""}
            onClick={() =>
              onChange({
                ...filters,
                vehicleType:
                  filters.vehicleType === "alcove" ? null : "alcove",
              })
            }
          >
            <svg className={styles.filterIcon} width={32} height={32}>
              <use href="/symbol-defs.svg#icon-bi_grid-3x3-gap" />
            </svg>
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