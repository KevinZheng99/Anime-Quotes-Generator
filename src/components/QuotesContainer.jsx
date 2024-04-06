import Box from "@mui/material/Box";

function QuotesContainer({ children }) {
  return (
    <Box
      sx={{
        backgroundColor: "gray",
        borderRadius: "12px",
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        justifyContent: "space-between",
        padding: "12px",
        width: "70vw",
      }}
    >
      {children}
    </Box>
  );
}

export default QuotesContainer;
