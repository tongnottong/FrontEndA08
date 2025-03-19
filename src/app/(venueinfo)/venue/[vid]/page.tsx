import Image from 'next/image'; // Import Image from next/image
import getVenue from '@/libs/getVenue';
export default async function VenueDetailPage({ params }: { params: { vid: string } }) {
  const venueDetail = await getVenue(params.vid)
  /**
   * Mock Data for Demonstration Only
   */
  /*
  const mockVenue = new Map();

  mockVenue.set("001", { name: "The Bloom Pavilion", imgSrc: "/bloom.jpg" });
  mockVenue.set("002", { name: "Spark Space", imgSrc: "/sparkspace.jpg" });
  mockVenue.set("003", { name: "The Grand Table", imgSrc: "/grandtable.jpg" });
  */
  return (
    <main className="text-center p-5 text-black ">
      <h1 className="text-lg font-medium">{venueDetail.data.name}</h1>
      
      <div className="flex flex-row my-5">
        <Image 
          src={venueDetail.data.picture} // Use params.vid here
          alt="Product Picture"
          width={0} 
          height={0} 
          sizes="100vw"
          className="rounded-lg w-[30%] bg-black" // Corrected className
        />
        <div className="text-md mx-5 text-left">
        <div className="text-md mx-5">Name: {venueDetail.data.name}</div>
        <div className="text-md mx-5">Address: {venueDetail.data.address}</div>
        <div className="text-md mx-5">District: {venueDetail.data.district}</div>
        <div className="text-md mx-5">Province: {venueDetail.data.province}</div>
        <div className="text-md mx-5">Postalcode: {venueDetail.data.postalcode}</div>
        <div className="text-md mx-5">Tel: {venueDetail.data.tel}</div>
        <div className="text-md mx-5">Dailyrate: {venueDetail.data.dailyrate}</div>
        
        </div>
      </div>
    </main>
  );
}

// "The Bloom Pavilion": { imgSrc: "/bloom.jpg", vid: "001" },
// "Spark Space": { imgSrc: "/sparkspace.jpg", vid: "002" },
// "The Grand Table": { imgSrc: "/grandtable.jpg", vid: "003" }