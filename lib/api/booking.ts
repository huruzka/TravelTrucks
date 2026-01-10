const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export type BookingRequest = {
  name: string;
  email: string;
  dateFrom: string;
  dateTo: string;
  camperId: string;
};

export async function bookCamper(data: BookingRequest) {
  const response = await fetch(`${API_URL}/booking`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Booking failed");
  }

  return response.json();
}
