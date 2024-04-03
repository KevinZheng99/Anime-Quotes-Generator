import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import QuoteCard from "./components/QuoteCard";

function App() {
  const [animeQuotes, setAnimeQuotes] = useState();

  function handleGenerateQuote() {
    fetch("https://animechan.xyz/api/quotes")
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
      }}
    >
      <Button
        sx={{ width: "275px" }}
        variant="contained"
        onClick={handleGenerateQuote}
      >
        Generate Quote
      </Button>
      {animeQuotes?.map((quote) => {
        return <QuoteCard key={quote.quote} quote={quote} />;
      })}
    </Box>
  );
}

export default App;
