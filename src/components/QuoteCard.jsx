import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function QuoteCard({ quote }) {
  const [hovered, setHovered] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(quote.quote);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "275px",
        padding: "12px",
        "&:hover": {
          cursor: "pointer",
        },
      }}
      onClick={handleCopy}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <h2>{quote.anime}</h2>
        <ContentCopyIcon
          sx={{
            border: "1px solid black",
            backgroundColor: hovered ? "gray" : "",
            borderRadius: "4px",
            float: "right",
            padding: "4px",
          }}
        />
      </Box>
      <Box sx={{ marginTop: "12px" }}>
        {quote.quote} - {quote.character}
      </Box>
    </Card>
  );
}

export default QuoteCard;
