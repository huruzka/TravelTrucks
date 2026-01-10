import { Camper } from "@/types/camper";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function fetchCampers(): Promise<Camper[]> {
  const response = await fetch(`${BASE_URL}/campers`);
  const data = await response.json();

  return data.items.map((item: any): Camper => ({
    id: item.id,
    name: item.name,
    price: item.price,
    rating: item.rating,
    location: item.location,
    description: item.description,

    // ⬇️ НОРМАЛІЗАЦІЯ FEATURES
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

    // ⬇️ НОРМАЛІЗАЦІЯ DETAILS
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
  }));
}