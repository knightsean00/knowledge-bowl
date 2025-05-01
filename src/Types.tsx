import { DateTime } from "luxon";

export type Event = {
  name: string;
  date: DateTime;
  description: string;
  url: string;
  image: string;
};

export type EventArray = Array<Event>;

export type HeaderItem = {
  name: string;
  url: string;
};

export type HeaderItemArray = Array<HeaderItem>;