import { EventArray } from "./Types";

interface UpcomingEventsProps {
  eventItems: EventArray;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ eventItems }) => {
  return (
    <div id="events">
      {eventItems.length > 0 ? (
        eventItems.map((val, idx) => {
          return (
            <a key={idx} className="image-block" href={val.url}>
              <div
                className="image-background"
                style={{ backgroundImage: `url(${val.image})` }}
              />
              <div className="text-overlay">
                <h1>{val.name}</h1>
                <h2>{val.date.toLocaleDateString()}</h2>
                <p>{val.description}</p>
              </div>
            </a>
          );
        })
      ) : (
        <div className="container">
          <h2>No upcoming events :(</h2>
        </div>
      )}
    </div>
  );
};
export default UpcomingEvents;
