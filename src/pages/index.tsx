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

export default function Home() {
  const { isLoading, data } = useFetch<BooksList>('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json');
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [countPerPage, setCountPerPage] = useState(BOOKS_PAGE_SIZE)

  if (isLoading) return 'Loading...';
  if (!data) return 'Error..';

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = debounce((query: string) => {
    setQuery(query);
  }, 500)

  const filteredBooks = data?.filter(filterBooks.bind(null, query)) || [];

  return (
    <main className="min-h-screen px-24 py-12 h-[100vh]">
      <SearchBar onChange={handleSearch} />
      <ItemsPerPageSelect onChange={setCountPerPage} />
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