import { matchReducer } from "../reducers";

export const last = (arr) => {
  if (!arr.length) return undefined;
  return arr[arr.length - 1];
};

export const buildRecords = (matches) => matches.reduce(matchReducer, []);
