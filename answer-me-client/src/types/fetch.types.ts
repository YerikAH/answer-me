import { Error } from "./error.types";

export type FetchResult = {
  loader: boolean;
  error: Error;
  data: unknown;
};
