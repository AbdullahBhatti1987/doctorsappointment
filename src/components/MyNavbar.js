import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MyNavbar() {
  return (
    <div
      className={
        "flex flex-col mx-auto justify-center items-center  bg-yellow-200 shadow-md"
      }
    >
      <div className="w-10/12 flex py-4 flex-row justify-between items-center">
        <div className="w-1/4 flex justify-center items-center ">
          <Link className="" href={"/"}>
            <Image
              width={100}
              height={50}
              src={
                "https://lh4.googleusercontent.com/proxy/R7IGk7lFTakK6zBNghOG83Qj5_OC32ZtL4oViQaqW42cUd_L8N1i4fzl0R34sxiLJM5p_SBYEsbpOTaWvgdGHhSCvGm1dg0gtQjiPH7rcK_bVHt0zw"
              }
              alt={"The Portland Clinic Logo"}
            />
          </Link>
        </div>
        <div className="w-2/4 flex justify-evenly items-center gap-12">
          <Link
            className="p-4 rounded-lg hover:shadow-md text-nowrap hover:bg-gray-100"
            href={"/doctors"}
          >
            Doctors
          </Link>
          <Link
            className="p-4 rounded-lg hover:shadow-md text-nowrap hover:bg-gray-100"
            href={"/specialties"}
          >
            Specialties
          </Link>
          <Link
            className="p-4 rounded-lg hover:shadow-md text-nowrap hover:bg-gray-100"
            href={"/locations"}
          >
            Locations
          </Link>
          <Link
            className="p-4 rounded-lg hover:shadow-md text-nowrap hover:bg-gray-100"
            href={"/resources"}
          >
            Resources
          </Link>
          <Link
            className="p-4 rounded-lg hover:shadow-md text-nowrap hover:bg-gray-100"
            href={"/healthblog"}
          >
            Health Blog
          </Link>
        </div>
        <div className="w-1/4 flex justify-evenly items-center gap-12">
          <Link
            className="p-4 rounded-lg hover:shadow-md text-nowrap hover:bg-gray-100"
            href={"/contactus"}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
