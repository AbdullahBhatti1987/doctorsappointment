"use client";
import { category, cities, doctorsData } from "@/lib/content";
import SelectOption from "./SelectOption";
import { useEffect, useState } from "react";

export default function DoctorFinder() {
  const [selectCategory, setSelectCategory] = useState("All");
  const [selectLocation, setSelectLocation] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState("All");

  useEffect(()=>{
    console.log("selectCategory =>", selectCategory)
    console.log("selectLocation =>", selectLocation)
    console.log("selectedDoctors =>", selectedDoctor)
  },[selectCategory, selectLocation])

  const HandleCategory = (value) => {
    setSelectCategory(value);

    const doctors = doctorsData.filter((data) => data.category === value);
    setSelectedDoctor(doctors);

    let uniqueCities = [...new Set(doctors.map((doctor) => doctor.city))];
    let uniqueCitiesObject = uniqueCities.map((city) => {
      const doctorInCity = doctors.find((doctor) => doctor.city === city);
      return {
        id: doctorInCity ? doctorInCity.id : null,
        name: city,
      };
    });

    setSelectLocation(uniqueCitiesObject);
  };

  const HandleLocation = (value) => {
    setSelectLocation(value);
      
    const doctors = selectCategory === "All" ? doctorsData.filter((data) => data.city === value): 
      selectedDoctor.filter((data) => data.city === value)
    
    setSelectedDoctor(doctors);

    let uniqueCities = [...new Set(doctors.map((doctor) => doctor.city))];
    let uniqueCitiesObject = uniqueCities.map((city) => {
      const doctorInCity = doctors.find((doctor) => doctor.city === city);
      return {
        id: doctorInCity ? doctorInCity.id : null,
        name: city,
      };
    });

    setSelectLocation(uniqueCitiesObject);


    
  };

  return (
    <div className="w-10/12 mx-auto py-4 flex flex-row gap-4 justify-center">
      <div className="w-1/4 flex justify-center items-center">
        <h1 className="text-2xl font-bold text-blue-900">Find a Doctor</h1>
      </div>
      <div className="w-1/4 flex justify-center items-center">
        <SelectOption
          array={category}
          placeholder="Find Category"
          onChange={HandleCategory}
        />
      </div>
      <div className="w-1/4 flex justify-center items-center">
        <SelectOption
          array={selectLocation === "All" ? cities : selectLocation}
          placeholder="Find Location"
          onChange={HandleLocation}
        />
      </div>
      <div className="w-1/4 flex justify-center items-center">
        <SelectOption
          array={selectCategory === "All" ? doctorsData : selectedDoctor}
          placeholder="Find Doctor"
          onChange={(value) => setSelectedDoctor(value)}
        />
      </div>
    </div>
  );
}
