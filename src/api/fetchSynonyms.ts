import { baseURL, endSynonyms } from "../variables";

const fetchSynonyms = async (word: string | null) => {
  return fetch(`${baseURL}${endSynonyms}=${word}`).then((response) => response.json());
};

export default fetchSynonyms;
