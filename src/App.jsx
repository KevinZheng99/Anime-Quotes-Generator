import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import QuoteCard from "./components/QuoteCard";
import { animeSelect } from "./const";

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
      <FormControl sx={{ width: "275px", margin: "auto" }}>
        <InputLabel id="Anime">Anime</InputLabel>
        <Select
          labelId="Anime"
          id="anime"
          value={selectedAnime}
          label="Anime"
          onChange={handleChange}
        >
          {animeSelect.map((anime) => (
            <MenuItem key={anime} value={anime}>
              {anime}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
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
