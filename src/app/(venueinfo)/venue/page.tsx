
import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
export default  function Home() {
  const venues =  getVenues()
  return (
    <main className=" p-5">
      <h1 className="text-center text-xl font-medium text-black">Select Venue</h1>
      <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
      <VenueCatalog venuesJson={venues}/>
      </Suspense>
    </main>
  );
}

