import Header from "./components/header/Header";
import bookData from "../src/local/listofbooks.json";
import BookList from "./components/bookList/BookList";
import { useRef } from "react";

function App() {
  const booksRef = useRef()
  const booksByDefault = bookData.sort(function (a, b) {
    const textA = a.author.toUpperCase();
    const textB = b.author.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

 const onSubmitHandler = (query) => {
    booksRef.current.handleSearch(query)
  }
  
  return (
    <>
      <Header onSubmitHandler={onSubmitHandler} />
      <BookList bookData={booksByDefault} ref={booksRef}/>
    </>
  );
}

export default App;
