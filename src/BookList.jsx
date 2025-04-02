// components/BookList.js
import React from "react";
import { Grid } from "@mui/material";
import BookItem from "./BookItem";

function BookList({ books }) {
  return (
    <Grid container spacing={2}>
      {books.map((book, index) => (
        <BookItem key={index} book={book} />
      ))}
    </Grid>
  );
}

export default BookList;