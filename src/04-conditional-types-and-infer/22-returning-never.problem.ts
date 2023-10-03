import { Equal, Expect } from "../helpers/type-utils";

type YouSayGoodbyeAndISayHello<T> = T extends infer Something ? 
  Something extends "hello" | "goodbye" ? Something extends "hello" ? "goodbye" : "hello" : never
  :
  never

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"alright pal">, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<1>, never>>,
];
