import React from "react";

export default function BooksCard(props) {
  return (
    <div className="card__content">
      <h2 className="card__title">{props.book.title}</h2>
      <p className="card__author">{props.book.author}</p>
      <p className="card__genre">{props.book.genre}</p>
    </div>
  );
}
