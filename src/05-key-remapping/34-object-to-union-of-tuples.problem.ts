import { Equal, Expect } from "../helpers/type-utils";

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}
//keyof Values] => Transformer toutes les valeurs en un seul union type
type ValuesAsUnionOfTuples = {
  [K in keyof Values]: [K, Values[K]];
}[keyof Values];

//2ème solution avec ChatGPT, Créer un type qui prend en charge la transformation chaque clé en une tuple
//[clé, type de clé], puis l'utiliser

// type TupleFromValue<K extends keyof Values, V = Values[K]> = [K, V];

// type ValuesAsUnionOfTuples = {
//   [K in keyof Values]: TupleFromValue<K>;
// }[keyof Values];

type tests = [
  Expect<
    Equal<
      ValuesAsUnionOfTuples,
      ["email", string] | ["firstName", string] | ["lastName", string]
    >
  >
];
