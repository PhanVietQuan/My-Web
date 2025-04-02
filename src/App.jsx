import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import Header from "./Header";
import SearchBar from "./SearchBar";
import BookList from "./BookList";

const books = [
  {
    title: "Erasure",
    author: "Percival Everett",
    image: "https://example.com/erasure.jpg",
  },
  {
    title: "Harlem Shuffle",
    author: "Colson Whitehead",
    image: "https://example.com/harlem-shuffle.jpg",
  },
  {
    title: "Native Nations",
    author: "Kathleen Duval",
    image: "https://example.com/native-nations.jpg",
  },
  {
    title: "This Motherless Land",
    author: "Nikki May",
    image: "https://example.com/motherless-land.jpg",
  },
];

function App() {
  return (
    <Container>
      <Header />
      <SearchBar />
      <Typography variant="h5" gutterBottom>
        Thiếu Nhi
      </Typography>
      <Grid container spacing={2}>
        <BookList books={books} />
      </Grid>
    </Container>
  );
}

export default App;