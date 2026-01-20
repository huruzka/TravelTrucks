import { Camper } from "@/types/camper";
import type { Filters } from "@/types/filters";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

type FetchCampersParams = {
  page: number;
  limit: number;
  filters: Filters;
};

type FetchCampersResult = {
  items: Camper[];
  total: number;
};

export async function fetchCampers({
  page,
  limit,
  filters,
}: FetchCampersParams): Promise<Camper[]> {
  const params = new URLSearchParams();

  // pagination
  params.set("page", String(page));
  params.set("limit", String(limit));

  // location
  if (filters.location.trim()) {
    params.set("location", filters.location.trim());
  }

  // equipment (boolean)
  Object.entries(filters.equipment).forEach(([key, value]) => {
    if (value) {
      params.set(key, "true");
    }
  });

  // transmission
  if (filters.transmission) {
    params.set("transmission", filters.transmission);
  }

  // vehicle type
  if (filters.vehicleType) {
    params.set("form", filters.vehicleType);
  }

  const response = await fetch(
    `${BASE_URL}/campers?${params.toString()}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch campers");
  }

  const data = await response.json();

  // ⬇️ якщо бекенд повертає { items, total }
  if (Array.isArray(data.items)) {
    return data.items.map(mapCamper);
  }

  // ⬇️ якщо бекенд повертає просто масив
  return data.map(mapCamper);
}

  function mapCamper(item: any): Camper {
    return {
    id: item.id,
    name: item.name,
    price: item.price,
    rating: item.rating,
    location: item.location,
    description: item.description,

    features: {
      transmission: item.transmission,
      engine: item.engine,
      AC: item.AC,
      bathroom: item.bathroom,
      kitchen: item.kitchen,
      TV: item.TV,
      radio: item.radio,
      refrigerator: item.refrigerator,
      microwave: item.microwave,
      gas: item.gas,
      water: item.water,
    },

    details: {
      form: item.form,
      length: item.length,
      width: item.width,
      height: item.height,
      tank: item.tank,
      consumption: item.consumption,
    },

    gallery: item.gallery,
    reviews: item.reviews,
  };
}


export async function fetchCamperById(id: string) {
  const res = await fetch(`${BASE_URL}/campers/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const item = await res.json();

  return {
    id: item.id,
    name: item.name,
    price: item.price,
    rating: item.rating,
    location: item.location,
    description: item.description,

    features: {
      transmission: item.transmission,
      engine: item.engine,
      AC: item.AC,
      bathroom: item.bathroom,
      kitchen: item.kitchen,
      TV: item.TV,
      radio: item.radio,
      refrigerator: item.refrigerator,
      microwave: item.microwave,
      gas: item.gas,
      water: item.water,
    },

    details: {
      form: item.form,
      length: item.length,
      width: item.width,
      height: item.height,
      tank: item.tank,
      consumption: item.consumption,
    },

    gallery: item.gallery,
    reviews: item.reviews,
  };
}