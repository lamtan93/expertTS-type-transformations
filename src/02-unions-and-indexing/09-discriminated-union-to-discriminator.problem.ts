import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };



//1ère solution:
// type EventType = Event["type"]

//2ème solution:
type EventType = {
  [K in Event["type"]]: K
}[Event["type"]];


type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];
