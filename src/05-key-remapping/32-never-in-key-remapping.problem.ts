import { Equal, Expect } from "../helpers/type-utils";

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

// type OnlyIdKeys<T> = {
//   [K in keyof T as K extends "id" | `${string}Id` ? K : never]:  T[K]
// };

//My solution:
type OnlyIdKeys<T> = 
Record<Extract<keyof T,  "id" | `${string}Id`>, string> 

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];
