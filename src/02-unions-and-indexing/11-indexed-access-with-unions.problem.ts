import { Equal, Expect } from "../helpers/type-utils";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const ;

//Solution 1:
//export type IndividualProgram = typeof programModeEnumMap["ONE_ON_ONE" | "SELF_DIRECTED" | "PLANNED_ONE_ON_ONE" | "PLANNED_SELF_DIRECTED"];


//Solution 2:

//1. Prendre une valeur dans cet objet:
//typeof programModeEnumMap["KEY"] avec KEY = "GROUP" ou "ANNOUNCEMENT" => "group" ou "announcement"

//2. L'idée est de passé tous les "KEY" sauf "GROUP" et "ANNOUNCEMENT", on utilise Exclude<Tous les KEYS, sauf KEYS>
// donc  pour avoir tous les KEYS => keyof typeof programModeEnumMap

// Cela donne : Exclude<keyof typeof programModeEnumMap, "GROUP" | "ANNOUNCEMENT">; => "ONE_ON_ONE" | "SELF_DIRECTED" | "PLANNED_ONE_ON_ONE" | "PLANNED_SELF_DIRECTED"


//3. Combiner l'étape 1 & 2, on aura:
//typeof programModeEnumMap[Exclude<keyof typeof programModeEnumMap, "GROUP | ANNOUNCEMENT">]

type IndividualProgram = typeof programModeEnumMap[Exclude<keyof typeof programModeEnumMap, "GROUP" | "ANNOUNCEMENT">];


type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >,
];
