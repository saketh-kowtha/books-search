import { includes, toLower } from "ramda";

//Types
import { BookDetails } from "@/types";

export function filterBooks(query = "", book: BookDetails) {
  if (!query) return true;
  const lowerQuery = toLower(query);
  const lowerTitle = toLower(book.title);
  const lowerAuthor = toLower(book.author);
  return includes(lowerQuery, lowerTitle) || includes(lowerQuery, lowerAuthor);
}
