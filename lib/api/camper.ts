import { Camper } from "@/types/camper";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function fetchCampers(): Promise<Camper[]> {
  try {
    const response = await fetch(`${BASE_URL}/campers`);

    if (!response.ok) {
      console.error("Fetch campers failed:", response.status);
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch campers error:", error);
    return [];
  }
}

export async function fetchCamperById(
  id: string
): Promise<Camper | null> {
  try {
    const response = await fetch(`${BASE_URL}/campers/${id}`);

    if (!response.ok) {
      console.error("Fetch camper failed:", response.status);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch camper error:", error);
    return null;
  }
}