import { Equal, Expect } from "../helpers/type-utils";

export type MyEvent =
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

//type EventType = Pick<MyEvent, 'type'>['type'];
//OU 

type EventType = MyEvent['type'];

type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];
