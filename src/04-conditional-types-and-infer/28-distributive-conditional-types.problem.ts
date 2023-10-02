import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

//1ère façon
//type GetAppleOrBanana<T> = T extends "apple" | "banana"  ? T : never;
//type AppleOrBanana = GetAppleOrBanana<Fruit>;

//2ème façon
type AppleOrBanana = Fruit extends infer T ? T extends "apple" | "banana" ? T : never : never;


type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
