import Header from "./Header";
import UpcomingEvents from "./Events";
import { HeaderItemArray, EventArray } from "./Types";
import Footer from "./Footer";
import kb_demo from "./images/kb_demo.jpg";
import { DateTime } from "luxon";

const headerItems: HeaderItemArray = [
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Upcoming Events",
    url: "#events",
  },
  {
    name: "Open Source",
    url: "https://github.com/knightsean00/open-knowledge-bowl",
  },
];

let upcomingEvents: EventArray = [
  // {
  //   name: "Fabal Beerhall",
  //   date: DateTime.local(2025, 5, 22),
  //   description:
  //     "Second event! fwoiefjweofijweoifjwefoiwjf weojwefije iejfiejf fjiejieifeijfiej fiejf wef weif wiejfiwejfwjefjiji wefi weif wiejfi wejif wjei wiejfifjiji wefi weif wiejfi wejif wjei wiejfifjiji wefi weif wiejfi wejif wjei wiejfifjiji wefi weif wiejfi wejif wjei wiejfifjiji wefi weif wiejfi wejif wjei wiejfifjiji wefi weif wiejfi wejif wjei wiejfifjiji wefi weif wiejfi wejif wjei wiejfi",
  //   url: "www.google.com",
  //   image:
  //     "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Store_Facade_Straight-On_CROP_Fo.width-1600.format-webp.webp",
  // },
  // {
  //   name: "Fabal Beerhall",
  //   date: DateTime.local(2025, 5, 21),
  //   description: "First eent!",
  //   url: "www.google.com",
  //   image:
  //     "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Store_Facade_Straight-On_CROP_Fo.width-1600.format-webp.webp",
  // },
];

upcomingEvents.sort((a, b) => {
  if (a.date === b.date) {
    return 0;
  }
  return a.date > b.date ? 1 : -1;
});
upcomingEvents = upcomingEvents.filter(
  (val) => val.date >= DateTime.now()
);
function Home() {
  return (
    <>
      <Header headerItems={headerItems} />
      <img
        src={kb_demo}
        alt="Knowledge Bowl demo image"
        style={{ height: "100vh", objectFit: "cover", width: "100%" }}
      />
      <div
        className="container"
        id="about"
        style={{ marginTop: "3rem", marginBottom: "3rem" }}
      >
        <h2 style={{ textAlign: "center" }}>What is Knowledge Bowl?</h2>
        <p>
          Have you ever wanted to feel like you were a contestant on a game
          show? Have you ever felt like standard pub trivia was too slow or felt
          too much like taking exams again?
        </p>
        <p>
          Knowledge Bowl was created as an answer the questions above. This new
          format revolutionizes the standard pub trivia night by bringing an
          electric, fast-paced energy to a genre that has largely become stale.
        </p>
        <h2 style={{ textAlign: "center" }}>How is it actually different?</h2>
        <p>
          Knowledge Bowl pits multiple teams (usually 3) of 6-8 people against
          each other in a real-time, winner-takes-all competition. All teams are
          read a question and race against each other to buzz-in and give their
          best answer to the question. Teams are given an opportunity to answer
          in the order in which they buzzed and are given 15 seconds to discuss
          with their teams.
        </p>
        <p>
          In contrast with standard pub trivia, this live format allows for more
          engaging intra-team discussion while also creating opportunities for
          fun inter-team interactions that are largely absent from standard pub
          trivia.
        </p>
        <h2 style={{ textAlign: "center" }}>How can I get involved?</h2>
        <p>
          We are currently only operating in the London area, so if you're
          interested hosting a night, feel free to reach out to us at{" "}
          <a href="mailto:ldnknowledgebowl@gmail.com">
            ldnknowledgebowl@gmail.com
          </a>
          .
        </p>
        <p>
          Not in London or interested in building your very own Knowledge Bowl
          buzzer? Check out our guide on how to build your own{" "}
          <a href="https://github.com/knightsean00/open-knowledge-bowl">here</a>
          !
        </p>
      </div>
      <div className="container">
        <div className="divider" style={{ marginBottom: "2rem" }} />
      </div>
      <UpcomingEvents eventItems={upcomingEvents} />
      <Footer />
    </>
  );
}

export default Home;
