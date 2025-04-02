// components/BookItem.js
import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

function BookItem({ book }) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardMedia component="img" height="200" image={book.image} alt={book.title} />
        <CardContent>
          <Typography variant="h6">{book.title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {book.author}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default BookItem;