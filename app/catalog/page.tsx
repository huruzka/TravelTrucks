"use client";

import { useEffect, useState } from "react";
import { fetchCampers } from "@/lib/api/camper";
import CamperCard from "@/components/CamperCard/CamperCard";
import FiltersSidebar from "@/components/FiltersSidebar/FiltersSidebar";
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
      } catch {
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
        <p>Loading campers...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container">
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main className="container">
      <div className="catalogLayout">
        {/* LEFT */}
        <FiltersSidebar />

        {/* RIGHT */}
        <ul className="campersList">
          {campers.map((camper) => (
            <li key={camper.id}>
              <CamperCard camper={camper} />
            </li>
            
          ))}
          <li>
                <button className="loadMore">Load more</button>
            </li>
        </ul>
        
      </div>
    </main>
  );
}