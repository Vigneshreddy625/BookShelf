import React from 'react';

function Bookshelf({ bookshelf }) {
  return (
    <div className="w-full max-w-screen-lg mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4">Bookshelf</h2>
      {bookshelf.length > 0 ? (
        <div className="flex flex-wrap">
          {bookshelf.map((book, index) => (
            <div
              key={index}
              className="w-60 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Book: {book.title}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Edition: {book.edition_count || 'Not Available'}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-700 dark:text-gray-400">
          No books in the bookshelf.
        </p>
      )}
    </div>
  );
}

export default Bookshelf;
