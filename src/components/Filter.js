import { category, cities, doctorsData } from "@/lib/content";
import SelectOption from "./SelectOption";

export default function () {
  return (
    <div className="w-10/12 mx-auto py-4 flex flex-row gap-4 justify-center">
      <div className="w-1/4 flex justify-center items-center">
        <h1 className="text-2xl font-bold text-blue-900">Find a Doctor</h1>
      </div>
      <div className="w-1/4 flex justify-center items-center">
        <SelectOption array={category} placeholder={"Find Category"} />
      </div>
      <div className="w-1/4 flex justify-center items-center">
        <SelectOption array={cities} placeholder={"Find Location"} />
      </div>
      <div className="w-1/4 flex justify-center items-center">
        <SelectOption array={doctorsData} placeholder={"Find Doctor"} />
      </div>
    </div>
  );
}
