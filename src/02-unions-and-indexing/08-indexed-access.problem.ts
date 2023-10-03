import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

type getTypeGeneric<K extends keyof typeof fakeDataDefaults> = typeof fakeDataDefaults[K];

export type StringType = getTypeGeneric<"String">;
export type IntType = getTypeGeneric<"Int">;
export type FloatType = getTypeGeneric<"Float">;
export type BooleanType = getTypeGeneric<"Boolean">;
export type IDType = getTypeGeneric<"ID">;

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>,
];
