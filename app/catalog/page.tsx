"use client";

import { useEffect, useState } from "react";
import { fetchCampers } from "@/lib/api/camper";
import CamperCard from "@/components/CamperCard/CamperCard";
import FiltersSidebar from "@/components/FiltersSidebar/FiltersSidebar";
import type { Camper } from "@/types/camper";

const LIMIT = 4;

export default function CatalogPage() {
  const [campers, setCampers] = useState<Camper[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadCampers = async (pageToLoad: number) => {
    try {
      setLoading(true);
      const data = await fetchCampers(pageToLoad, LIMIT);

      if (data.length < LIMIT) {
        setHasMore(false);
      }

      setCampers(prev => [...prev, ...data]);
    } catch {
      setError("Failed to load campers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCampers(1);
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadCampers(nextPage);
  };

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
          {campers.map(camper => (
            <li key={camper.id}>
              <CamperCard camper={camper} />
            </li>
          ))}

          {hasMore && (
            <li className="loadMoreWrapper">
              <button
                className="loadMore"
                onClick={handleLoadMore}
                disabled={loading}
              >
                {loading ? "Loading..." : "Load more"}
              </button>
            </li>
          )}
        </ul>
      </div>
    </main>
  );
}