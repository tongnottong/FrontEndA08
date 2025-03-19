"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const images = [
  "/cover.jpg",
  "/cover2.jpg",
  "/cover3.jpg",
  "/cover4.jpg",
];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter();

  const handleImageClick = () => {
    setCurrentImage((prev) => (prev + 1) % images.length); // Loop through images
  };

  const navigateToVenue = () => {
    router.push("/venue"); // Navigate to /venue
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={images[currentImage]}
          alt="Banner Image"
          fill
          className="object-cover object-center h-full w-full cursor-pointer"
          onClick={handleImageClick} // Change image on click
        />
      </div>

      {/* Banner Content */}
      <div className="relative z-10 max-w-2xl p-5">
        <h1 className="text-4xl font-bold">Where Every Event Finds Its Venue</h1>
        <p className="text-lg leading-relaxed mt-4">
          Finding the perfect venue has never been easier. Whether it's a wedding, 
          corporate event, or private party, we connect people to the perfect place.
        </p>
      </div>

      {/* Select Venue Button (Fixed at Bottom Right) */}
      <button
        onClick={navigateToVenue}
        className="fixed bottom-5 right-5 bg-white text-black px-6 py-3 rounded-lg text-lg font-bold hover:bg-gray-300 transition shadow-lg"
      >
        Select Venue
      </button>
    </div>
  );
};

export default Banner;
