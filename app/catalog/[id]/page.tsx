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
  const { id } = await params; // ⬅️ КЛЮЧОВИЙ РЯДОК

  const camper = await fetchCamperById(id);

  if (!camper) {
    notFound();
  }

  return (
   <main className="container">
      {/* TOP INFO */}
          <section className={styles.camperHeader}>
        <h1>{camper.name}</h1>

        <div className={styles.meta}>
          ⭐ {camper.rating} ({camper.reviews.length} Reviews)
          <span>{camper.location}</span>
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
              {camper.features.transmission && <li>Automatic</li>}
              {camper.features.AC && <li>AC</li>}
              {camper.features.engine && <li>{camper.features.engine}</li>}
              {camper.features.kitchen && <li>Kitchen</li>}
              {camper.features.radio && <li>Radio</li>}
            </ul>

            {/* vehicle details */}
                  <div className={styles.vehicleDetails}>
              <h3>Vehicle details</h3>
              <ul>
                <li>Form: {camper.details.form}</li>
                <li>Length: {camper.details.length}</li>
                <li>Width: {camper.details.width}</li>
                <li>Height: {camper.details.height}</li>
                <li>Tank: {camper.details.tank}</li>
                <li>Consumption: {camper.details.consumption}</li>
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