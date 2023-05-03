import { useState } from "react";
import fetchSynonyms from "../api/fetchSynonyms";

interface Word {
  word: string;
  score: number;
}

export const useGetSynonyms = () => {
  const [synonyms, setData] = useState<Array<Word>>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const getSynonyms = (word: string) => {
    setIsLoading(true);
    fetchSynonyms(word)
      .then((response) => setData(response))
      .finally(() => setIsLoading(false));
  };

  return { synonyms, isLoading, getSynonyms };
};
