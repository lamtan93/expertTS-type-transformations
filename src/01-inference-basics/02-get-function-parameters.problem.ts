import { Equal, Expect } from "../helpers/type-utils";

const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  },
) => {};

type MakeQueryParameters = Parameters<typeof makeQuery>;

// const requestParamURL: MakeQueryParameters[0] = "https://google.com";
// const requestParamsOpts: MakeQueryParameters[1] = {
//   method: 'string | undefined',
//   headers: {
//       '[key: string]': 'string'
//   },
//   body: 'string'
// }

type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string;
          headers?: {
            [key: string]: string;
          };
          body?: string;
        },
      ]
    >
  >,
];
