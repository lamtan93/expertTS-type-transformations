import { Equal, Expect } from "../helpers/type-utils";

type Route =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
      
    }
  | { route: "/about"; search: {} }
  | { route: "/admin"; search: {} }
  | { route: "/admin/users"; search: {} };

/* Demandé:
/* key: type de la propriété route
/* value: type de la propriété search
*/

//---------------------1ère solution: useful but less powerful:--------------------
type RoutesObject_way1 = {
  // R là clé tương ứng với mỗi Route["route"] = "/" hoặc /about" hoặc "/admin" hoặc "/admin/users"
  // Extract<Route, {route: R}: Lấy ra object tương ứng với clé R(disriminated), sau đó lấy giá trị bằng ["search"]
  [R in Route["route"]]: Extract<Route, {route: R}>["search"];
};

//---------------------2ère solution: powerful:-------------------------------------
type RoutesObject_way2 = {  
  [R in Route as R["route"]]: R["search"]
};

type tests = [
  Expect<
    Equal<
      RoutesObject_way2,
      {
        "/": {
          page: string;
          perPage: string;
        };
        "/about": {};
        "/admin": {};
        "/admin/users": {};
      }
    >
  >,
];
