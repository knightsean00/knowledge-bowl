import { DateTime } from "luxon";
import { EventArray } from "./Types";

interface UpcomingEventsProps {
  eventItems: EventArray;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ eventItems }) => {
  return (
    <div id="events" className="container">
      <h1 style={{ textAlign: "center" }}>{eventItems.length === 0 ? "No upcoming events :(" : "Upcoming Events"}</h1>
      {eventItems.map((val, idx) => {
        return (
          <a key={idx} className="image-block" href={val.url}>
            <div
              className="image-background"
              style={{ backgroundImage: `url(${val.image})` }}
            />
            <div className="text-overlay" style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
              <h1>{val.name}</h1>
              <h2>{val.date.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}</h2>
              <p>{val.description}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};
export default UpcomingEvents;
