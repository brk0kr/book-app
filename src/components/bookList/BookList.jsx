import React, { useEffect, useState } from "react";
import "./bookList.css";
import BooksCard from "./BooksCard";
const { forwardRef, useImperativeHandle } = React;

const BookList = forwardRef((props, ref) => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("author");

  useEffect(() => {
    const sortArray = (type) => {
      const sorted = [...props.bookData].sort(function (a, b) {
        const textA = a[type].toUpperCase();
        const textB = b[type].toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      setData(sorted);
    };
    sortArray(sortType);
  }, [sortType]);

  useImperativeHandle(ref, () => ({
    handleSearch(query) {
      if (query === "") {
        setData(props.bookData);
      } else {
        const filteredResults = [...props.bookData].filter((item) => {
          const lowerCaseQuery = query.toLowerCase();
          const titleMatch = item.title.toLowerCase().includes(lowerCaseQuery);
          const authorMatch = item.author
            .toLowerCase()
            .includes(lowerCaseQuery);
          const genreMatch = item.genre.toLowerCase().includes(lowerCaseQuery);
          return titleMatch || authorMatch || genreMatch;
        });
        setData(filteredResults);
      }
    },
  }));

  return (
    <>
      <div className="wrapper">
        <div className="sorting">
          <label className="sorting__label" htmlFor="sort">
            Sort by:
          </label>
          <select
            className="sorting__select"
            id="sort"
            onChange={(e) => {
              setSortType(e.target.value);
            }}
          >
              <option className="sorting__option__default" value="title" >
              Alphabetically by Title
            </option>
            <option className="sorting__option" value="title" >
              Alphabetically by Title
            </option>
            <option className="sorting__option" value="author">
              Alphabetically by Author Name
            </option>
            <option className="sorting__option" value="genre">
              Alphabetically by Genre
            </option>
          </select>
        </div>
        <div className="cards">
          {data.length === 0 ? (
            <div className="search-results">
              <div className="search-results__content">
                <p className="search-results__no-results">No results found</p>
              </div>
            </div>
          ) : (
            data.map((book, index) => (
              <div className="card" key={index}>
                <BooksCard book={book} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
});
export default BookList;
