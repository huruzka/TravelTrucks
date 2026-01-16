"use client";

import { useEffect, useState } from "react";
import { fetchCampers } from "@/lib/api/camper";
import CamperCard from "@/components/CamperCard/CamperCard";
import FiltersSidebar from "@/components/FiltersSidebar/FiltersSidebar";
import type { Camper } from "@/types/camper";
import type { Filters } from "@/types/filters";

const LIMIT = 4;

const INITIAL_FILTERS: Filters = {
  location: "",
  equipment: {
    AC: false,
    kitchen: false,
    bathroom: false,
    TV: false,
  },
  transmission: null,
  vehicleType: null,
};

export default function CatalogPage() {
  const [campers, setCampers] = useState<Camper[]>([]);
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ===== LOAD CAMPERS =====
  const loadCampers = async (
    pageToLoad: number,
    currentFilters: Filters,
    reset = false
  ) => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchCampers({
        page: pageToLoad,
        limit: LIMIT,
        filters: currentFilters,
      });

      setCampers((prev) =>
        reset ? data : [...prev, ...data]
      );

      if (data.length < LIMIT) {
        setHasMore(false);
      }
    } catch {
      setError("Failed to load campers");
    } finally {
      setLoading(false);
    }
  };

  // ===== INITIAL LOAD =====
  useEffect(() => {
    loadCampers(1, filters, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ===== SEARCH =====
  const handleSearch = () => {
    setPage(1);
    setHasMore(true);
    loadCampers(1, filters, true);
  };

  // ===== LOAD MORE =====
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadCampers(nextPage, filters);
  };

  // ===== ERROR =====
  if (error) {
    return (
      <main className="container">
        <p>{error}</p>
      </main>
    );
  }

  // ===== RENDER =====
  return (
    <main className="container">
      <div className="catalogLayout">
        {/* LEFT SIDEBAR */}
        <FiltersSidebar
          filters={filters}
          onChange={setFilters}
          onSearch={handleSearch}
        />

        {/* RIGHT CONTENT */}
        <ul className="campersList">
          {campers.map((camper) => (
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