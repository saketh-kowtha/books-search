import React from "react";
import { equals, length } from "ramda";

//Types
import { BooksList } from "@/types";

//Components
import Book from "./book";


interface BooksListProps {
    booksList: BooksList,
    currentPage: number,
    countPerPage: number
}
function BooksContainer({ booksList, currentPage, countPerPage }: BooksListProps) {
    if (equals(length(booksList), 0)) return <div className="text-center mt-12">
        <h2>No books found</h2>
    </div>
    return <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-8 grid-cols-auto-fit">
        {booksList.slice(currentPage * countPerPage - countPerPage, currentPage * countPerPage)?.map((record, index) => {
            return <Book key={index} {...record} />;
        })}
    </div>
}

export default React.memo(BooksContainer)