"use client";
import { useState } from "react";
import Card from "./Card";
import Link from "next/link";

export default function CardPanel() {
  const [ratings, setRatings] = useState<{ [key: string]: number }>({
    "The Bloom Pavilion": 0,
    "Spark Space": 0,
    "The Grand Table": 0,
  });

  const mockVenue = new Map();
  mockVenue.set("001", { name: "The Bloom Pavilion", imgSrc: "/bloom.jpg" });
  mockVenue.set("002", { name: "Spark Space", imgSrc: "/sparkspace.jpg" });
  mockVenue.set("003", { name: "The Grand Table", imgSrc: "/grandtable.jpg" });

  const [hiddenVenues, setHiddenVenues] = useState<{ [key: string]: boolean }>({});

  const handleRatingChange = (venueName: string, newValue: number | null) => {
    if (newValue !== null) {
      setRatings((prevRatings) => ({
        ...prevRatings,
        [venueName]: newValue,
      }));

      setHiddenVenues((prev) => ({
        ...prev,
        [venueName]: false,
      }));
    }
  };

  const handleVenueClick = (event: React.MouseEvent, venueName: string) => {
    event.preventDefault();
    event.stopPropagation();
    setHiddenVenues((prev) => ({
      ...prev,
      [venueName]: true,
    }));
  };

  const visibleVenueCount =
    Object.keys(ratings).length -
    Object.values(hiddenVenues).filter(Boolean).length;

  return (
    <div className="flex flex-col m-5">
      {/* Card Grid */}
      <div className="flex flex-wrap justify-around">
        {Array.from(mockVenue, ([vid, venue]) => (
          <Link href={`/venue/${vid}`} key={vid}>
            <div className="flex flex-col items-center">
              <Card
                venueName={venue.name}
                imgSrc={venue.imgSrc}
                rating={ratings[venue.name] || 0}
                onRatingChange={handleRatingChange}
              />
              <p className="text-center font-semibold mt-2">{venue.name}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Venue List */}
      <div className="mt-5 p-3 border rounded-lg bg-white w-1/2 text-black">
        <h3 className="text-lg font-bold">
          Venue List with Ratings: {visibleVenueCount}
        </h3>
        <ul>
          {Object.entries(ratings).map(([venue, rating]) => {
            if (!hiddenVenues[venue]) {
              return (
                <li key={venue} className="cursor-pointer p-1 hover:text-red-500">
                  <button onClick={(event) => handleVenueClick(event, venue)}>
                    {venue} Rating: {rating}
                  </button>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
}
