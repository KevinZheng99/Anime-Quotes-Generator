import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { animeSelect } from "../const";

function QuoteGenerator({ selectedAnime, onSelect, onGenerateQuote }) {
  return (
    <>
      <FormControl sx={{ width: "275px", margin: "auto" }}>
        <InputLabel id="Anime">Anime</InputLabel>
        <Select
          labelId="Anime"
          id="anime"
          value={selectedAnime}
          label="Anime"
          onChange={onSelect}
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
        onClick={onGenerateQuote}
      >
        Generate Quote
      </Button>
    </>
  );
}

export default QuoteGenerator;
