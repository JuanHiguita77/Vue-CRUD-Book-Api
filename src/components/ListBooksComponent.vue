<template>
  <div>
    <table class="table table-hover text-center">
      <thead>
        <tr>
          <th>N°</th>   
          <th>Title</th>
          <th>Author</th>
          <th>Publication Year</th>
          <th>Genre</th>
          <th>ISBN</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody class="list-books-container">
        <tr v-for="book in bookStore.books" :key="book.id" >
          <td class="border-2 border-light">{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.publicationYear }}</td>
          <td>{{ book.genre }}</td>
          <td>{{ book.isbn }}</td>
          <td class="d-flex justify-content-around border-2 border-light">
              <router-link :to="{ name: 'EditBook', params: { id: book.id } }" class="btn btn-primary"><i class="bi bi-pencil"></i></router-link><!-- Pasamos el id por medio de la ruta -->  
              
            <button @click="deleteBook(book.id!)" class="btn btn-danger">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination d-flex justify-content-between">
      <button @click="goToPage(bookStore.currentPage - 1)" 
        :disabled="bookStore.currentPage <= 1" class="btn">
        <i class="bi bi-caret-left"></i>
      </button>

      <span class="border border-black rounded-1 p-2">{{ bookStore.currentPage }} of {{ bookStore.totalPages }}</span>

      <button @click="goToPage(bookStore.currentPage + 1)" 
        :disabled="bookStore.currentPage >= bookStore.totalPages" class="btn">
        <i class="bi bi-caret-right"></i>
      </button>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { BookService } from '@/services/BookService';
import { useBookStore } from '@/stores/bookStore'

const bookService = new BookService();
const bookStore = useBookStore();

const fetchBooks = async (page: number) => {
  try {
    const result = await bookService.get(page);
    bookStore.setBooks(result.content)
    bookStore.setTotalPages(result.totalPages)
    
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}

const goToPage = (page: number) => {
  if (page >= 1 && page <= bookStore.totalPages) { // Cambiar las condiciones
    bookStore.setCurrentPage(page)
    fetchBooks(page);
  }
}

const deleteBook = async (id: number) => {
  try {
    await bookService.delete(id);
    alert('Book deleted successfully');
    // Volver a cargar los libros desde la página actual
    const newPage = bookStore.currentPage > 1 ? bookStore.currentPage : 1;

    await fetchBooks(newPage)
  } catch (error) {
    console.error('Error deleting book:', error);
  }
}

// Llamada al cargar el componente
onMounted(async () => {
  await fetchBooks(bookStore.currentPage)
})

</script>

<style lang='scss' scoped>
  .list-books-container td{
    vertical-align: middle;
  }

  .pagination button{
    border: 1.5px solid $primary-color;
    transition: 0.25s all ease-in-out;

    &:hover{
      color: $primary-color;
      background-color:  $third-color;
      border-color: $secondary-color;

      i{
        transition: 0.2s all ease-in-out;
        color: $secondary-color;
      }
    }
  }
</style>
