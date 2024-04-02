import { useState } from "react";

function App() {
  const [animeQuotes, setAnimeQuotes] = useState();

  function handleGenerateQuote() {
    fetch("https://animechan.xyz/api/random")
      .then((response) => response.json())
      .then((quote) => setAnimeQuotes(quote));
  }

  return (
    <div>
      <button onClick={handleGenerateQuote}>Generate Quote</button>
      <div>
        {animeQuotes
          ? `${animeQuotes.quote} - ${animeQuotes.character}`
          : undefined}
      </div>
    </div>
  );
}

export default App;
