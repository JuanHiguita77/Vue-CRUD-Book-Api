<template>
    <div class="container mt-4">
      <h2>{{ isEdit ? 'Edit Book' : 'Add New Book' }}</h2>
      <form @submit.prevent="submitBook">
  
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" id="title" v-model="book.title" required />
        </div>
  
        <div class="mb-3">
          <label for="author" class="form-label">Author</label>
          <input type="text" class="form-control" id="author" v-model="book.author" required />
        </div>
  
        <div class="mb-3">
          <label for="publicationYear" class="form-label">Publication Year</label>
          <input type="number" class="form-control" id="publicationYear" v-model="book.publicationYear" required />
        </div>
  
        <div class="mb-3">
          <label for="genre" class="form-label">Genre</label>
          <input type="text" class="form-control" id="genre" v-model="book.genre" required />
        </div>
  
        <div class="mb-3">
          <label for="isbn" class="form-label">ISBN</label>
          <input type="number" minlength="10" maxlength="20" class="form-control" id="isbn" v-model="book.isbn" required />
        </div>
  
        <button type="submit" class="btn btn-primary">{{ isEdit ? 'Update' : 'Submit' }}</button>
      </form>
    </div>
  </template>
  
  
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { BookService } from '@/services/BookService';
import type IBook from '@/interfaces/IBook';

const book = ref<IBook>({
  title: '',
  author: '',
  publicationYear: 0,
  genre: '',
  isbn: 0
});

const bookService = new BookService();
const route = useRoute();
const router = useRouter();

const isEdit = ref(false);

// Función para cargar los datos del libro en caso de estar editando
const loadBook = async (id: number) => {
  try {
    const bookData = await bookService.getOne(id);
    book.value = bookData;
  } catch (error) {
    console.error('Error fetching book:', error);
  }
};

// Función para enviar los datos del formulario
const submitBook = async () => {
  try {
    if (isEdit.value) {
      // Actualizar libro existente
      await bookService.update(book.value, Number(route.params.id));//Extraer el id de la ruta
      alert('Book updated successfully');
      // Redirigir a la página de libros
      router.push(`/books`);
    } else {
      // Crear nuevo libro
      const newBook = await bookService.create(book.value);
      alert('Book added successfully');
      // Redirigir a la página de edición con el ID del libro recién creado
    }

    // Limpiar el formulario
    book.value = {
      title: '',
      author: '',
      publicationYear: 0,
      genre: '',
      isbn: 0
    };
  } catch (error) {
    console.error('Error submitting book:', error);
  }
};


// Verificar si es edición y cargar los datos si corresponde
onMounted(() => {
  const id = route.params.id;
  if (id) {
    isEdit.value = true
    loadBook(Number(id))
  }
})


</script>
  
<style lang="scss" scoped>
  .container {
    background-color: $background-color;
    padding: 2rem;
    border-radius: 8px;
  }
  
  h2 {
    color: $primary-color;
    margin-bottom: 1.5rem;
  }
  
  .form-label {
    color: $primary-color;
  }
  
  .btn-primary {
    background-color: $third-color;
    border-color: $third-color;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    &:hover {
      background-color: $four-color;
      border-color: $four-color;
    }
  }
  </style>
  