import Card from "@mui/material/Card";

function QuoteCard({ quote }) {
  return (
    <Card sx={{ width: "275px", padding: "12px" }}>
      {quote.quote} - {quote.character}
    </Card>
  );
}

export default QuoteCard;
