import React, { useRef } from "react";
import { useGetSynonyms } from "./hooks/useGetSynonyms";
import "./App.css";

function App() {
  const wordInput = useRef<HTMLInputElement>(null);
  const { synonyms, isLoading, getSynonyms } = useGetSynonyms();

  //Get synonyms on submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (wordInput.current?.value) {
      getSynonyms(wordInput.current?.value);
    } else {
      getSynonyms("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Find synonyms</h2>
        <input ref={wordInput} type="text" placeholder="Enter a word" />
        <button type="submit">SEARCH</button>
      </form>
      <div className="word-list-container">
        {isLoading ? (
          "Loading..."
        ) : (
          <div className="word-list">
            {synonyms && synonyms.map((synonym, i) => <span key={i}>{synonym.word}</span>)}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
