import { last } from "../helpers";
import { buildRecords } from "../helpers";

export const getRecordsByYear = async (year) => {
  const URL = `http://localhost:3001/${year}`;
  return fetch(URL)
    .then((resp) => resp.json())
    .then((data) =>
      buildRecords(last(data).partidas).sort((a, b) => b.points - a.points)
    );
};
