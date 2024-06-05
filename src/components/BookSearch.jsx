import React from "react";
import BookList from '../components/BookList';
import useLibrary from "../hooks/Library";
import { Link } from "react-router-dom";

function BookSearch({ addToBookshelf, bookshelf }) {
  const { input, setInput, handleSubmit, searchResult, isLoading } = useLibrary();

  return (
    <div className="flex flex-col items-center h-screen p-4">
      <h1 className="text-black text-2xl mb-4">Search by book name:</h1>
      <div className="w-full max-w-3xl my-4 flex flex-col md:flex-row items-center md:justify-between mb-8 space-y-4 md:space-y-0 md:space-x-4">
        <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
          <input
            type="text"
            placeholder="Search for Books..."
            className="w-full md:w-80 border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white py-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-r-lg px-4 py-2 bg-green-600 text-white"
            disabled={!input.trim()}
          >
            Search
          </button>
        </form>
        <Link 
          to="/bookshelf"
          className="w-full md:w-auto inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          My Book Shelf
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
      {isLoading && <p>Loading...</p>}
      {searchResult && (
        <BookList 
          searchResult={searchResult} 
          input={input} 
          addToBookshelf={addToBookshelf} 
          bookshelf={bookshelf} 
        />
      )}
    </div>
  );
}

export default BookSearch;
