"use client";

import styles from "./FiltersSidebar.module.css";

export default function FiltersSidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* Location */}
      <div className={styles.block}>
        <p className={styles.label}>Location</p>
        <input placeholder="Kyiv, Ukraine" />
      </div>

      {/* Vehicle equipment */}
      <div className={styles.block}>
        <p className={styles.title}>Vehicle equipment</p>
        <div className={styles.grid}>
          <button>AC</button>
          <button>Automatic</button>
          <button>Kitchen</button>
          <button>TV</button>
          <button>Bathroom</button>
        </div>
      </div>

      {/* Vehicle type */}
      <div className={styles.block}>
        <p className={styles.title}>Vehicle type</p>
        <div className={styles.grid}>
          <button>Van</button>
          <button>Fully Integrated</button>
          <button>Alcove</button>
        </div>
      </div>

      <button className={styles.search}>Search</button>
    </aside>
  );
}