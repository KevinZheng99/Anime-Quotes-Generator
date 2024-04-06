import { useState } from "react";
import { Box } from "@mui/material";

import QuoteCard from "./components/QuoteCard";
import QuoteGenerator from "./components/QuoteGenerator";
import QuotesContainer from "./components/QuotesContainer";
import PaginationBar from "./components/PaginationBar";

function App() {
  const [animeQuotes, setAnimeQuotes] = useState();
  const [selectedAnime, setSelectedAnime] = useState("");

  async function handleGenerateQuote() {
    await fetch(
      `https://animechan.xyz/api/quotes${
        selectedAnime ? "/anime?title=" + selectedAnime : ""
      }`
    )
      .then((response) => response.json())
      .then((quote) => setAnimeQuotes(quote));
  }

  function handleChangeAnime(event) {
    setSelectedAnime(event.target.value);
  }

  async function handleChangePage(event, value) {
    await fetch(
      `https://animechan.xyz/api/quotes${
        selectedAnime ? "/anime?title=" + selectedAnime : ""
      }${selectedAnime ? "&page=" + value : "?page=" + value}`
    )
      .then((response) => response.json())
      .then((quote) => setAnimeQuotes(quote));
  }

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
        onSelect={handleChangeAnime}
        onGenerateQuote={handleGenerateQuote}
      />
      {animeQuotes && <PaginationBar onChange={handleChangePage} />}
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
