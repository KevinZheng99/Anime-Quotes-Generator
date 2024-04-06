import { useState } from "react";
import { Box } from "@mui/material";

import QuoteCard from "./components/QuoteCard";
import QuoteGenerator from "./components/QuoteGenerator";
import QuotesContainer from "./components/QuotesContainer";

function App() {
  const [animeQuotes, setAnimeQuotes] = useState();
  const [selectedAnime, setSelectedAnime] = useState("");

  function handleGenerateQuote() {
    fetch(
      `https://animechan.xyz/api/quotes${
        selectedAnime ? "/anime?title=" + selectedAnime : ""
      }`
    )
      .then((response) => response.json())
      .then((quote) => setAnimeQuotes(quote));
  }

  function handleChange(event) {
    setSelectedAnime(event.target.value);
  }

  console.log(animeQuotes);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        alignItems: "center",
        marginTop: "12px",
      }}
    >
      <QuoteGenerator
        selectedAnime={selectedAnime}
        onSelect={handleChange}
        onGenerateQuote={handleGenerateQuote}
      />
      {animeQuotes && (
        <QuotesContainer>
          {animeQuotes?.map((quote) => {
            return <QuoteCard key={quote.quote} quote={quote} />;
          })}
        </QuotesContainer>
      )}
    </Box>
  );
}

export default App;
