import styles from "./BookingForm.module.css";

export default function BookingForm() {
  return (
    <aside className={styles.booking}>
      <h3 className={styles.bookingTitle}>
        Book your campervan now
      </h3>

      <p className={styles.bookingText}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={styles.bookingForm}>
        <input
          className={styles.bookingFormName}
          placeholder="Name*"
        />

        <input
          className={styles.bookingFormEmail}
          placeholder="Email*"
        />

        <input
          className={styles.bookingFormDate}
          placeholder="Booking date*"
        />

        <textarea
          className={styles.bookingFormComment}
          placeholder="Comment"
        />

        <button
          className={styles.bookingFormButton}
          type="submit"
        >
          Send
        </button>
      </form>
    </aside>
  );
}