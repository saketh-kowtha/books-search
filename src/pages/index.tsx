import { useState } from "react";

//Components
import Pagination from "@/components/pagination";
import SearchBar from "@/components/search-bar";
import BooksContainer from "@/components/books-container";
import ItemsPerPageSelect from "@/components/items-per-page";

//Hooks
import useFetch from "@/hooks/useFetch";

//Types
import { BooksList } from "@/types";

//Helpers
import { filterBooks } from "@/helpers/filter-books";
import debounce from "@/helpers/debounce";

//Constants
import { BOOKS_PAGE_SIZE } from "@/constants";

const API_URL = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json';

export default function Home() {
  const { isLoading, data } = useFetch<BooksList>(API_URL);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [countPerPage, setCountPerPage] = useState(BOOKS_PAGE_SIZE);

  if (isLoading) return 'Loading...'
  if (!data) return 'Error...'
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = debounce((searchQuery: string) => {
    setQuery(searchQuery);
  }, 500);

  const filteredBooks = data.filter(filterBooks(query)) || [];
  const currentPageEndCount = Math.min(currentPage * countPerPage, data?.length || 0);

  return (
    <main className="min-h-screen px-2 md:px-24 py-6 h-[100vh]">
      <h1 className="text-center text-xl mb-4">Books search</h1>

      <SearchBar onChange={handleSearch} />

      <div className="flex justify-between mt-2">
        <ItemsPerPageSelect onChange={setCountPerPage} />
        <span className="text-xs text-gray-500">
          Showing {Math.max((currentPage - 1) * countPerPage + 1, 1)} - {currentPageEndCount} of {data?.length || 0}
        </span>
      </div>

      <BooksContainer countPerPage={countPerPage} currentPage={currentPage} booksList={filteredBooks} />

      {filteredBooks.length > countPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredBooks.length / countPerPage)}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
}

//babu.m@target.com