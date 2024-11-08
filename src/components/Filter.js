"use client";
import { category, doctorsData } from "@/lib/content";
import SelectOption from "./SelectOption";
import { useEffect, useState } from "react";

export default function DoctorFinder() {
  const [selectCategory, setSelectCategory] = useState("All");
  const [selectLocation, setSelectLocation] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState("All");

  useEffect(() => {
    console.log("selectCategory =>", selectCategory);
    console.log("selectLocation =>", selectLocation);
    console.log("selectedDoctors =>", selectedDoctor);
  }, [selectCategory, selectLocation]);

  const HandleCategory = (value) => {
    setSelectCategory(value);
    if (value === "All") {
      setSelectLocation("All");
      setSelectedDoctor("All");
    } else {
      const locations = doctorsData.filter((data) => data.category === value);
      setSelectLocation(locations);
      setSelectedDoctor(locations);
    }
  };

  //   const locations =
  //     selectCategory === "All"
  //       ? doctorsData.filter((data) => data.category === value)
  //       : selectedDoctor.filter((data) => data.category === value);

  //   setSelectLocation(locations);

  //   const doctors = doctorsData.filter((data) => data.category === value);
  //   setSelectedDoctor(doctors);

  //   let uniqueCities = [...new Set(doctors.map((doctor) => doctor.city))];
  //   let uniqueCitiesObject = uniqueCities.map((city) => {
  //     const doctorInCity = doctors.find((doctor) => doctor.city === city);
  //     return {
  //       id: doctorInCity ? doctorInCity.id : null,
  //       name: city,
  //     };
  //   });

  //   setSelectLocation(uniqueCitiesObject);

  const HandleLocation = (value) => {
    setSelectCategory(value);
    if (value === "All" && selectCategory === "All") {    
      setSelectedDoctor("All");
    } else {
      const locations = selectLocation.filter((data) => data.city === value);

      setSelectedDoctor(locations);
    }
  };
  //   const doctors =
  //     value === "All"
  //       ? doctorsData.filter((data) => data.category === selectCategory)
  //       : selectedDoctor.filter((data) => data.city === value);

  //   setSelectedDoctor(doctors);

  //   let uniqueCities = [...new Set(doctors.map((doctor) => doctor.city))];
  //   let uniqueCitiesObject = uniqueCities.map((city) => {
  //     const doctorInCity = doctors.find((doctor) => doctor.city === city);
  //     return {
  //       id: doctorInCity ? doctorInCity.id : null,
  //       name: city,
  //     };
  //   });

  //   setSelectLocation(uniqueCitiesObject);
  // };

  // const handleDoctor = (value) => {
  // //   if (value === "All") {
  // //     return; // Don't do anything if "All" is selected
  // //   }
  // //   // Redirect to the doctor's details page when a value is selected
  // //   router.push(`/doctors/${value.id}`); // `value` will be the doctor's id
  // };

  return (
    <div className="w-10/12 mx-auto py-4 flex flex-row gap-4 justify-center">
      <div className="w-1/4 flex justify-center items-center">
        <h1 className="text-2xl font-bold text-blue-900">Find a Doctor</h1>
      </div>
      <div className="w-1/4 flex justify-center items-center">
        <SelectOption
          array={doctorsData}
          placeholder="Find Category"
          value="category"
          onChange={HandleCategory}
        />
      </div>
      <div className="w-1/4 flex justify-center items-center">
        <SelectOption
          array={selectCategory === "All" ? doctorsData : selectLocation}
          placeholder="Find Category"
          value="city"
          onChange={HandleLocation}
        />
      </div>
      <div className="w-1/4 flex justify-center items-center">
        <SelectOption
          array={
            selectCategory === "All"
              ? doctorsData
              : selectedDoctor
          }
          placeholder="Find Category"
          value="name"
          // onChange={handleDoctor}
        />
      </div>
    </div>
  );
}
