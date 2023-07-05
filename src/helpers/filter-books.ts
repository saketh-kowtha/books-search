import { includes, toLower } from "ramda";

import { BookDetails } from "@/types";

export const filterBooks =
  (query = "") =>
  (book: BookDetails) => {
    if (!query) return true;
    const lowerQuery = toLower(query);
    const lowerTitle = toLower(book.title);
    const lowerAuthor = toLower(book.author);
    return (
      includes(lowerQuery, lowerTitle) || includes(lowerQuery, lowerAuthor)
    );
  };
