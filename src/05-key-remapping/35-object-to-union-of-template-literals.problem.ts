import { Equal, Expect } from "../helpers/type-utils";

interface FruitMap {
  apple: "red";
  banana: "yellow";
  orange: "orange";
}

type TransformedFruit = {
  [K in keyof FruitMap]: `${K}:${FruitMap[K]}`
}[keyof FruitMap];


//OU:
//type TupleFromValue<T extends keyof FruitMap> = `${T}:${FruitMap[T]}`;

// type TransformedFruit = {
//   [K in keyof FruitMap]: TupleFromValue<FruitMap>
// }[keyof FruitMap];

type tests = [
  Expect<
    Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >,
];
