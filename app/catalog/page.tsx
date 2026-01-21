"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { fetchCampers } from "@/lib/api/camper";
import CamperCard from "@/components/CamperCard/CamperCard";
import FiltersSidebar from "@/components/FiltersSidebar/FiltersSidebar";

import type { Camper } from "@/types/camper";
import type { Filters } from "@/types/filters";

const LIMIT = 4;

// =======================
// INITIAL FILTERS
// =======================
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

// =======================
// FILTERS → URL (vehicleType excluded)
// =======================
function buildSearchParams(filters: Filters, page: number) {
  const params = new URLSearchParams();

  params.set("page", String(page));

  if (filters.location.trim()) {
    params.set("location", filters.location.trim());
  }

  Object.entries(filters.equipment).forEach(([key, value]) => {
    if (value) params.set(key, "true");
  });

  if (filters.transmission) {
    params.set("transmission", filters.transmission);
  }

  // NOTE: vehicleType is filtered on the client side (MockAPI limitation)
  return params.toString();
}

// =======================
// PAGE
// =======================
export default function CatalogPage() {
  const router = useRouter();

  const [campers, setCampers] = useState<Camper[]>([]);
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS);
  const [page, setPage] = useState(1);

  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  // =======================
  // LOAD CAMPERS
  // =======================
  const loadCampers = async (
    pageToLoad: number,
    currentFilters: Filters,
    reset = false
  ) => {
    try {
      setLoading(true);

      const data = await fetchCampers({
        page: pageToLoad,
        limit: LIMIT,
        filters: currentFilters,
      });

      // FINAL DATA = what UI will render
      let finalData = data;

      // frontend filter for vehicleType
      if (currentFilters.vehicleType) {
        finalData = finalData.filter(
          (camper) =>
            camper.details.form === currentFilters.vehicleType
        );
      }

      setCampers((prev) =>
        reset ? finalData : [...prev, ...finalData]
      );

      setHasMore(finalData.length === LIMIT);
      setHasLoadedOnce(true);
    } catch {
      // ❗ не показуємо error замість empty state
      setCampers([]);
      setHasLoadedOnce(true);
    } finally {
      setLoading(false);
    }
  };

  // =======================
  // INITIAL LOAD
  // =======================
  useEffect(() => {
    loadCampers(1, filters, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // =======================
  // SEARCH
  // =======================
  const handleSearch = () => {
    const newPage = 1;

    setPage(newPage);
    setHasMore(true);

    const query = buildSearchParams(filters, newPage);
    router.push(`/catalog?${query}`);

    loadCampers(newPage, filters, true);
  };

  // =======================
  // LOAD MORE
  // =======================
  const handleLoadMore = () => {
    const nextPage = page + 1;

    setPage(nextPage);

    const query = buildSearchParams(filters, nextPage);
    router.push(`/catalog?${query}`, { scroll: false });

    loadCampers(nextPage, filters);
  };

  // =======================
  // RENDER
  // =======================
  return (
    <main className="container">
      <div className="catalogLayout">
        {/* LEFT */}
        <FiltersSidebar
          filters={filters}
          onChange={setFilters}
          onSearch={handleSearch}
        />

        {/* RIGHT */}
        <div className="catalogContent">
          <ul className="campersList">
            {/* CAMPERS */}
            {campers.map((camper) => (
              <li key={camper.id}>
                <CamperCard camper={camper} />
              </li>
            ))}

            {/* LOADING */}
            {loading && (
              <li className="loadMoreWrapper">
                <span>Loading...</span>
              </li>
            )}

            {/* EMPTY STATE */}
            {!loading && hasLoadedOnce && campers.length === 0 && (
              <li className="emptyState">
                <p className="emptyTitle">Nothing found</p>
                <p className="emptyText">
                  Try adjusting your filters or clear them to see all campers.
                </p>

                <button
                  className="clearFilters"
                  onClick={() => {
                    setFilters(INITIAL_FILTERS);
                    setPage(1);
                    setHasMore(true);
                    router.push("/catalog");
                    loadCampers(1, INITIAL_FILTERS, true);
                  }}
                >
                  Clear filters
                </button>
              </li>
            )}

            {/* LOAD MORE */}
            {!loading && hasMore && campers.length > 0 && (
              <li className="loadMoreWrapper">
                <button
                  className="loadMore"
                  onClick={handleLoadMore}
                >
                  Load more
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </main>
  );
}