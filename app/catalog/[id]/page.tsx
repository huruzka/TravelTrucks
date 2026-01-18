import { fetchCamperById } from "@/lib/api/camper";
import { notFound } from "next/navigation";
import styles from "./deatils.module.css";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CamperDetailsPage({
  params,
}: Props) {
  const { id } = await params; 

  const camper = await fetchCamperById(id);

  if (!camper) {
    notFound();
  }

  return (
   <main className="container">
      {/* TOP INFO */}
          <section className={styles.camperHeader}>
        <h2 className="styles.title">{camper.name}</h2>

        <div className={styles.meta}>
          <svg className={styles.iconStar} width={16} height={16}>
        <use href="/symbol-defs.svg#icon-Property-1Pressed" />
              </svg>
          <span className={styles.rating}>
           {camper.rating } ({camper.reviews.length} Reviews)
          </span>
          <svg className={styles.iconMap} width={16} height={16}>
        <use href="/symbol-defs.svg#icon-Map" />
              </svg>
          <span className={styles.location}>{camper.location}</span>
        </div>

        <p className={styles.price}>€{camper.price.toFixed(2)}</p>
      </section>

      {/* GALLERY */}
          <section className={styles.gallery}>
        {camper.gallery.map((img, idx) => (
          <img key={idx} src={img.original} alt={camper.name} />
        ))}
      </section>

      {/* DESCRIPTION */}
          <p className={styles.description}>{camper.description}</p>

      {/* MAIN CONTENT */}
          <section className={styles.detailsLayout}>
        {/* LEFT */}
              <div className={styles.detailsContent}>
          {/* TABS */}
                  <div className={styles.tabs}>
            <button className={`${styles.tab} ${styles.active}`}>Features</button>
            <button className={styles.tab}>Reviews</button>
          </div>

          {/* FEATURES (default) */}
              <div className={styles.features}>
            {/* badges */}
                  <ul className={styles.featuresList}>
              {camper.features.transmission &&
                <li>
                  <svg className={styles.icon} width={20} height={20}>
        <use href="/symbol-defs.svg#icon-diagram" />
              </svg>
                  Automatic</li>}
              {camper.features.AC &&
                <li>
                   <svg className={styles.icon} width={20} height={20}>
        <use href="/symbol-defs.svg#icon-wind" />
              </svg>
                  AC</li>}
              {camper.features.engine &&
                <li>
                  <svg className={styles.icon} width={20} height={20}>
        <use href="/symbol-defs.svg#icon-fuel-pump-1" /></svg>
                  {camper.features.engine}</li>}
              {camper.features.kitchen &&
                <li>
                  <svg className={styles.icon} width={20} height={20}>
        <use href="/symbol-defs.svg#icon-cup-hot" />
                  </svg>
                  Kitchen</li>}
              {camper.features.radio &&
                <li>
                  <svg className={styles.icon} width={20} height={20}>
        <use href="/symbol-defs.svg#icon-ui-radios" />
                  </svg>
                  Radio</li>}
            </ul>

            {/* vehicle details */}
                  <div className={styles.vehicleDetails}>
              <h3 className={styles.vehicleTitle}>Vehicle details</h3>
              <ul className={styles.vehicleList}>
  <li>
    <span>Form</span>
    <span>{camper.details.form}</span>
  </li>
  <li>
    <span>Length</span>
    <span>{camper.details.length}</span>
  </li>
  <li>
    <span>Width</span>
    <span>{camper.details.width}</span>
  </li>
  <li>
    <span>Height</span>
    <span>{camper.details.height}</span>
  </li>
  <li>
    <span>Tank</span>
    <span>{camper.details.tank}</span>
  </li>
  <li>
    <span>Consumption</span>
    <span>{camper.details.consumption}</span>
  </li>
</ul>
            </div>
          </div>
        </div>

        {/* RIGHT */}
          <aside className={styles.booking}>
          <h3>Book your campervan now</h3>
          <p>Stay connected! We are always ready to help you.</p>

          <form>
            <input placeholder="Name*" />
            <input placeholder="Email*" />
            <input placeholder="Booking date*" />
            <textarea placeholder="Comment" />
            <button type="submit">Send</button>
          </form>
        </aside>
      </section>
    </main>
  );
}