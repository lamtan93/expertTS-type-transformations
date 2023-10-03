import { Equal, Expect } from "../helpers/type-utils";

const fruits = ["apple", "banana", "orange"] as const;

type AppleOrBanana = typeof fruits[0 | 1];
//OU: type AppleOrBanana = Extract<typeof fruits[number], "apple" | "banana">;
//OU: type AppleOrBanana2 = Exclude<typeof fruits[number], "orange">

type Fruit = typeof fruits[number];

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>,
];
