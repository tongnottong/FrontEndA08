import Link from "next/link";
import { VenueItem, VenueJson } from "../../interface";
import Card from "./Card";

export default async function VenueCatalog({ venuesJson }: { venuesJson: Promise<VenueJson> }) {
  const venueJsonReady = await venuesJson; // Await the promise to get actual data

  return (
    <div className="flex flex-wrap justify-around">
      {venueJsonReady.data.map((venue:VenueItem) => (
        <div key={venue.id} className="flex flex-col items-center">
          <Link href={`/venue/${venue.id}`}>
            <Card venueName={venue.name} imgSrc={venue.picture} />
          </Link>
          <p className="text-center font-semibold mt-2">{venue.name}</p>
        </div>
      ))}
    </div>
  );
}
