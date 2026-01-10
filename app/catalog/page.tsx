"use client";

import { useEffect, useState } from "react";
import { fetchCampers } from "@/lib/api/camper";
import CamperCard from "@/components/CamperCard/CamperCard";
import type { Camper } from "@/types/camper";

export default function CatalogPage() {
  const [campers, setCampers] = useState<Camper[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCampers() {
      const data = await fetchCampers();
      setCampers(data);
      setLoading(false);
    }

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

  return (
    <main className="container">
      <h1>Catalog</h1>

      {campers.length === 0 ? (
        <p>No campers available.</p>
      ) : (
        <ul style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
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