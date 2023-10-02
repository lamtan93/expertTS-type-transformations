import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

// type GetParserResult_<T> = T extends {[key: string]: infer TType extends () => {}} ? 
// ReturnType<TType> : T extends () => {} ? ReturnType<T> : never ;

//Parfait
type GetParserResult<T> = T extends
{[key: string]: () => infer TType} | (() => infer TType) ? TType : never ;

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>,
];
