import { useEffect, useState } from "react";
import { EventCard } from "../layout/EventCard";
import { TourApi } from "../../data/toursApi";
import type { TourResponse } from "../../types/tour";

export const ToursPage = () => {
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

  if (loading) return <p>Loading...</p>;
  if (!tours) return <p>Tour not found.</p>;

  return (
    <div className="container">
      <div className="py-8">
        <h2 className="text-white">Upcoming tours</h2>
      </div>
      <div className="grid grid-cols-1">
        {loading && (
          <div className="py-12 text-center font-display text-lg text-white">
            Loading events...
          </div>
        )}
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
      </div>
    </div>
  );
};
