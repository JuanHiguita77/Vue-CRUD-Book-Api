import IBook from '@/interfaces/IBook';
import { defineStore } from 'pinia';

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    currentPage: 1,
    books: [] as Array<IBook>,
    totalPages: 0,
  }),
  actions: {
    setCurrentPage(page: number) {
      this.currentPage = page;
    },
    setBooks(books: Array<IBook>) {
      this.books = books;
    },
    setTotalPages(total: number) {
      this.totalPages = total;
    },
  },
});
