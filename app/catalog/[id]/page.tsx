import { fetchCamperById } from "@/lib/api/camper";
import { notFound } from "next/navigation";
import CamperDetailsClient from "@/components/CamperDetailsClient/CamperDetailsClient";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CamperDetailsPage({ params }: Props) {
  const { id } = await params; // 🔑 КЛЮЧОВИЙ РЯДОК

  const camper = await fetchCamperById(id);

  if (!camper) {
    notFound();
  }

  return <CamperDetailsClient camper={camper} />;
}