import { Equal, Expect } from "../helpers/type-utils";
import { S } from "ts-toolbelt";

type Names = [
  "Matt Pocock",
  "Jimi Hendrix",
  "Eric Clapton",
  "John Mayer",
  "BB King",
];


type GetSurname<T> = T extends `${string} ${infer prenom}` ? prenom : never;

//2ème méthode avec ts-toolbelt pour split

//type GetSurname<T> = T extends Names[number] ? S.Split<T, ' '>[1] : never;

type test = GetSurname<Names[1]>

type tests = [
  Expect<Equal<GetSurname<Names[0]>, "Pocock">>,
  Expect<Equal<GetSurname<Names[1]>, "Hendrix">>,
  Expect<Equal<GetSurname<Names[2]>, "Clapton">>,
  Expect<Equal<GetSurname<Names[3]>, "Mayer">>,
  Expect<Equal<GetSurname<Names[4]>, "King">>,
];