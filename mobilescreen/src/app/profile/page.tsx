"use client";
import React from "react";

export default function Dashboard() {
  const logoUrl = "/logomain.svg";
  const imageUrl = "/Group 19704.png";
  const vectorImageUrl = "/vector.png";
  const firstcenterImageUrl = "/1stcenter.png";
  const secondcenterImageUrl = "/2ndpage.png";
  const vectImageUrl = "/vect.png";
  const thirdcenterImageUrl = "/3rdpage.png";

  const handlearrowClick = () => {
    window.location.href = "/settings";
  };

  const handleSkipClick = () => {
    window.location.href = "/settings";
  };

  return (
    <div className="md:hidden flex flex-col justify-between h-screen bg-white">
    <div className="flex justify-start items-start mt-6">
    <div>
        <h1 className="font-bold text-2xl sm:font-normal md:font-bold mx-auto ml-4">
            Welcome!
        </h1>
        <p className="font-bold text-2xl sm:font-normal md:font-bold mx-auto ml-4">
            Let's make a profile
        </p>
        <div className="relative inline-block ml-4">
            <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="rounded-full h-12 w-12"
            />
            <button className="absolute top-0 right-0 bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
                <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21a2 2 0 01-2 2H7a2 2 0 01-2-2v-7m14-7l-3-3m0 0l-3 3m3-3V3a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2"
                    />
                </svg>
            </button>
        </div>
    </div>
</div>

    
    
  </div>
  
  );
}
