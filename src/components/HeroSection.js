import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full min-h-96 py-4 flex flex-row gap-6 justify-between items-center">
    <div className="w-1/2 p-6 border rounded-2xl shadow-md flex flex-col gap-4 justify-start items-start">
      <h1 className="text-4xl text-blue-900 font-semibold">
        Find <span className="font-bold">Doctor</span> you need
      </h1>
      <h3 className="text-2xl text-gray-500">Batch-11</h3>
      <p className="text-lg text-justify">
        Good health is complicated—a delicate balance of body, mind and spirit. But great health care is simple: be trustworthy, kind and considerate. Treat everyone like family. And build relationships that last.
      </p>
      <p className="text-lg text-justify">
        At The Portland Clinic, we embrace diversity and provide culturally competent care, addressing health care disparities in the Portland-Metro area. We offer a welcoming, inclusive environment for our patients, employees and the communities we serve.
      </p>
      <div className="flex flex-row gap-2">
        <Button>Find a Doctor</Button>
        <Button variant="outline">Apply as Doctor</Button>
      </div>
    </div>
    <div className="w-1/2 border max-h-fit rounded-2xl overflow-hidden shadow-md flex justify-center items-center">
      <div className="relative w-full h-[420px] bg-orange-300 overflow-hidden">
        <Image
          src="https://img.freepik.com/free-vector/cartoon-doctors-nurses_52683-59918.jpg"
          alt="Doctor Cartoon"
          fill
          className="object-cover"
          sizes="(max-width: 800px) 100vw, 800px"
        />
      </div>
    </div>
  </div>
  
  );
}

// src="https://img.freepik.com/premium-photo/doctor-with-stethoscope-around-his-neck3d-rendering-doctor-treating-disease-illustration-profes_432516-25444.jpg"
