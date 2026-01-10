"use client";

import { useEffect, useState } from "react";
import { fetchCampers } from "@/lib/api/camper";
import CamperCard from "@/components/CamperCard/CamperCard";
import type { Camper } from "@/types/camper";

export default function CatalogPage() {
  const [campers, setCampers] = useState<Camper[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCampers = async () => {
      try {
        const data = await fetchCampers();
        setCampers(data);
      } catch (err) {
        setError("Failed to load campers");
      } finally {
        setLoading(false);
      }
    };

    loadCampers();
  }, []);

  if (loading) {
    return (
      <main className="container">
        <h1>Catalog</h1>
        <p>Loading campers...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container">
        <h1>Catalog</h1>
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main className="container">
      <h1>Catalog</h1>

      {campers.length === 0 ? (
        <p>No campers available.</p>
      ) : (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            listStyle: "none",
            padding: 0,
          }}
        >
          {campers.map((camper) => (
            <li key={camper.id}>
              <CamperCard camper={camper} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}