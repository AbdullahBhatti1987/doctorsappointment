"use client";
import { category, cities, doctorsData } from "@/lib/content";
import SelectOption from "./SelectOption";
import { useEffect, useState } from "react";

export default function DoctorFinder() {
  const [selectCategory, setSelectCategory] = useState("All");
  const [selectLocation, setSelectLocation] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const HandleCategory = (e) => {
    setSelectCategory(e.target.value);
  };

  useEffect(() => {
    if (selectCategory === "All") {
      setSelectedDoctor(doctorsData); // Agar "All" select kiya gaya hai, toh sab doctors dikhayein
    } else {
      const filteredDoctors = doctorsData.filter(
        (data) => data.category === selectCategory
      );
      setSelectedDoctor(filteredDoctors); // Selected category ke according doctors ko filter karein
    }
  }, [selectCategory]);

  return (
    <div className="w-10/12 mx-auto py-4 flex flex-row gap-4 justify-center">
      <div className="w-1/4 flex justify-center items-center">
        <h1 className="text-2xl font-bold text-blue-900">Find a Doctor</h1>
      </div>
      <div className="w-1/4 flex justify-center items-center">
        <SelectOption
          array={category}
          placeholder={"Find Category"}
          onChange={HandleCategory}
        />
      </div>
      <div className="w-1/4 flex justify-center items-center">
        <SelectOption
          array={cities}
          placeholder={"Find Location"}
          onChange={(e) => setSelectLocation(e.target.value)}
        />
      </div>
      <div className="w-1/4 flex justify-center items-center">
        <SelectOption
          array={selectedDoctor} // Ab selectedDoctor ko yahan pass karein
          placeholder={"Find Doctor"}
          onChange={(e) => console.log(e.target.value)} // Yahan aap doctor selection ko handle kar sakte hain
        />
      </div>
    </div>
  );
}
