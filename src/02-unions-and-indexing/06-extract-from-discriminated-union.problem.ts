import { type } from "os";
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

type ClickEvent = Extract<MyEvent, {type: "click"}>

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
