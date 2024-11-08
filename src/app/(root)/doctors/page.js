import MyCard from "@/components/MyCard";
import { doctorsData } from "@/lib/content";
// import { useSearchParams } from "next/navigation";

export default function Page() {
  // const searchParams = useSearchParams();
  const searchCategory = searchParams.get(selectCategory);
  const searchLocation = searchParams.get(selectLocation);
  const searchDoctor = searchParams.get(selectedDoctor);

  return (
    <div className="w-10/12 mx-auto py-6">
      <MyCard array={searchLocation} />
    </div>
  );
}
