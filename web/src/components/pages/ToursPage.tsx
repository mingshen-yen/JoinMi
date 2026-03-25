import { EventCard } from "../layout/EventCard";

export const ToursPage = () => {
  return (
    <div className="container">
      <div className="py-8">
        <h2 className="text-white">Upcoming tours</h2>
      </div>
      <EventCard />
    </div>
  );
};
