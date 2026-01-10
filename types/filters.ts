export type CamperFilters = {
  location?: string;
  form?: "alcove" | "panelTruck" | "fullyIntegrated";
  AC?: boolean;
  kitchen?: boolean;
  bathroom?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
};