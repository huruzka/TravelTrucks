import { CamperImage } from "./gallery";
import { CamperReview } from "./review";


export type CamperDetails = {
  form?: "alcove" | "panelTruck" | "fullyIntegrated";
  length?: string;
  width?: string;
  height?: string;
  tank?: string;
  consumption?: string;
};

export type CamperFeatures = {
  transmission?: "automatic" | "manual";
  engine?: "diesel" | "petrol" | "hybrid";

  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
};

export type Camper = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;

  features: CamperFeatures;
  details: CamperDetails;

  gallery: CamperImage[];
  reviews: CamperReview[];
};


export type FavoriteCamper = {
  camperId: string;
};