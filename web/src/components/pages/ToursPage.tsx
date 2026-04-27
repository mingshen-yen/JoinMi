import { useEffect, useState } from "react";
import { EventCard } from "../layout/EventCard";
import { TourApi } from "../../data/toursApi";
import type { TourResponse } from "../../types/Tour";

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

  return (
    <div className="container">
      <section id="upcoming-tours">
        <div className="py-8">
          <h2 className="text-white">Upcoming Guided tours</h2>
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
      </section>
      <section id="archiv-tours" className="pt-10">
        <div className="py-8">
          <h2 className="text-white">Archived Guided tours</h2>
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
      </section>
    </div>
  );
};
