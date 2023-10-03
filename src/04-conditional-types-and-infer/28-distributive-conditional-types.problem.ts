import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

//solution 1:

// type getAppleOrBanana<T> = T extends "apple" | "banana" ? T : never;
// type AppleOrBanana = getAppleOrBanana<Fruit>;

//solution 2:

type AppleOrBanana = Fruit extends infer T ?
T extends "apple" | "banana" ? T : never
:
never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
