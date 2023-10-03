import { S } from "ts-toolbelt";
import { Equal, Expect } from "../helpers/type-utils";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

type ExtractPathParams<T extends string> = 
//Solution déguelasse:
//Record<S.Split<Extract<S.Split<T, '/'>[number], `:${string}`>, ':'>[1], string>

//Solution correct:
{
  [K in S.Split<T, '/'>[number] as K extends `:${infer TData}` ? TData : never]: string
}

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >,
];
