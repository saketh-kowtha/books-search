export type BookDetails = {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  price: number;
};

export type BooksList = BookDetails[];

export type BooksResponse = {
  books: BooksList;
  totalCount: number;
};
