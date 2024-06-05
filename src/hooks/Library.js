import { useState } from 'react';

function useLibrary() {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      return;
    }
    fetchBookData();
  };

  const fetchBookData = () => {
    setIsLoading(true);
    setError(null);
    fetch(`https://openlibrary.org/search.json?q=${input}&limit=10&page=1`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResult(data.docs);
        setInput("");
      })
      .catch((error) => {
        setError('Error searching for books: ' + error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    input,
    setInput,
    handleSubmit,
    searchResult,
    isLoading,
    error,
  };
}

export default useLibrary;