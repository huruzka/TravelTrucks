export type EquipmentFilters = {
  AC: boolean;
  kitchen: boolean;
  bathroom: boolean;
  TV: boolean;
};

export type Filters = {
  location: string;
  equipment: EquipmentFilters;
  transmission: "automatic" | "manual" | null;
  vehicleType: "van" | "fullyIntegrated" | "alcove" | null;
};