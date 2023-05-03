import React, { useRef, useState, useEffect } from "react";
import "./App.css";

interface Word {
  word: string;
  score: number;
}

const baseURL = "https://api.datamuse.com/words";
const syn = "?rel_syn";

function App() {
  // const baseURL = "https://api.datamuse.com/words";
  // const syn = "?rel_syn";
  const [data, setData] = useState<Array<Word>>([]);
  const wordInput = useRef<HTMLInputElement>(null);

  //Get synonyms on submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await fetch(`${baseURL}${syn}=${wordInput.current?.value}`);
    const newData = await result.json();
    setData(newData);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Find synonyms</h2>
        <input ref={wordInput} type="text" placeholder="Enter a word" />
        <button type="submit">SEARCH</button>
      </form>
      <div>
        {data &&
          data.map((synonym, i) => (
            <span key={i} style={{ margin: "10px" }}>
              {synonym.word}
            </span>
          ))}
      </div>
    </>
  );
}

export default App;
