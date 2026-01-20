"use client";

import { useState } from "react";
import styles from "./BookingForm.module.css";
import Calendar from "../Calendar/Calendar";
import toast from "react-hot-toast";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    date?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!date.trim()) {
      newErrors.date = "Booking date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) return;

  console.log({ name, email, date, comment });

  toast.success("Successfully booked");

  setName("");
  setEmail("");
  setDate("");
  setComment("");
  setErrors({});
};

  return (
    <aside className={styles.booking}>
      <h3 className={styles.bookingTitle}>
        Book your campervan now
      </h3>

      <p className={styles.bookingText}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={styles.bookingForm} onSubmit={handleSubmit}>
        <input
          className={styles.bookingFormName}
          placeholder="Name*"
          value={name}
           onChange={(e) => {
    setName(e.target.value);
    setErrors((prev) => ({ ...prev, email: undefined }));
  }}
        />
        {errors.name && (
          <span className={styles.error}>{errors.name}</span>
        )}

        <input
          className={styles.bookingFormEmail}
          placeholder="Email*"
          value={email}
           onChange={(e) => {
    setEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: undefined }));
  }}
        />
        {errors.email && (
          <span className={styles.error}>{errors.email}</span>
        )}

        <input
    className={styles.bookingFormDate}
    placeholder="Booking date*"
    value={date}
    readOnly
    onClick={() => setIsCalendarOpen(true)}
  />

  {isCalendarOpen && (
    <Calendar
      onSelect={(selectedDate) => {
        setDate(selectedDate);
        setErrors((prev) => ({ ...prev, date: undefined }));
        setIsCalendarOpen(false);
      }}
    />
  )}
        {errors.date && (
          <span className={styles.error}>{errors.date}</span>
        )}

        <textarea
          className={styles.bookingFormComment}
          placeholder="Comment"
          value={comment}
           onChange={(e) => {
    setComment(e.target.value);
    setErrors((prev) => ({ ...prev, email: undefined }));
  }}
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