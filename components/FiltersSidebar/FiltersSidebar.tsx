"use client";

import styles from "./FiltersSidebar.module.css";

export default function FiltersSidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* Location */}
      <div className={styles.block}>
        <p className={styles.label}>Location</p>
        <div className={styles.location}>
          <svg className={styles.filterIconLocation} width={18} height={18}>
            <use href="/symbol-defs.svg#icon-Map" />
          </svg>
          <input placeholder="Kyiv, Ukraine" />
        </div>
      </div>

      {/* Vehicle equipment */}
      <div className={styles.block}>
        <p className={styles.filter}>Filters</p>
        <p className={styles.title}>Vehicle equipment</p>
        <div className={styles.grid}>
          <button className={styles.active}>
            <svg className={styles.filterIcon}  width={32} height={32}>
              <use href="/symbol-defs.svg#icon-wind" />
            </svg>
            AC
          </button>
          <button>
            <svg className={styles.filterIcon} width={32} height={32}>
              <use href="/symbol-defs.svg#icon-diagram" />
            </svg>
            Automatic
          </button>
          <button>
            <svg className={styles.filterIcon} width={32} height={32}>
              <use href="/symbol-defs.svg#icon-cup-hot" />
            </svg>
            Kitchen
          </button>
          <button>
            <svg className={styles.filterIcon} width={32} height={32}>
              <use href="/symbol-defs.svg#icon-tv" />
            </svg>
            TV
          </button>
          <button>
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
          <button>
            <svg className={styles.filterIcon} width={32} height={32}>
              <use href="/symbol-defs.svg#icon-bi_grid-1x2" />
            </svg>
            Van
          </button>
          <button>
            <svg className={styles.filterIcon} width={32} height={32}>
              <use href="/symbol-defs.svg#icon-bi_grid" />
            </svg>
              <span className={styles.multiline}>
    Fully<br />
    Integrated</span>
          </button>
          <button>
            <svg className={styles.filterIcon} width={32} height={32}>
              <use href="/symbol-defs.svg#icon-bi_grid-3x3-gap" />
            </svg>
            Alcove
          </button>
        </div>
      </div>

      <button className={styles.search}>Search</button>
    </aside>
  );
}