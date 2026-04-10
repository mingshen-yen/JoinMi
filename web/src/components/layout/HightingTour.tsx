import { useEffect, useState } from "react";
import { EventCard } from "./EventCard";
import type { TourResponse } from "../../types/Tour";
import { TourApi } from "../../data/toursApi";

export const HightlightingTour = () => {
  const [tours, setTours] = useState<TourResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    TourApi.getAllTours()
      .then(setTours)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  console.log(tours);
  return (
    <>
      <div className="pb-8">
        <h2 className="text-white">Highlighting tours</h2>
      </div>
      {!loading && tours.length > 0 ? (
        <div>
          {/* Result List */}
          {tours.map((tour: TourResponse) => {
            return <EventCard key={tour.id} tour={tour} />;
          })}
        </div>
      ) : (
        <> </>
      )}
    </>
  );
};
