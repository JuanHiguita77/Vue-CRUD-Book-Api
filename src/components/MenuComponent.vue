<template>
    <div class="container menu-container">
      <ul class="nav">
        <li class="nav-item p-2">
          <router-link :to="{ name: 'ListBooks' }" class="py-2 menu-btn text-decoration-none" active-class="active">All Books</router-link>
        </li>
        
        <li class="nav-item p-2">
          <router-link :to="{ name: 'AddBook' }" class="py-2 menu-btn text-decoration-none">Add New Book</router-link>
        </li>
        
      </ul>
    </div>
</template>
  
<script lang="ts" setup>

</script>
  
<style lang="scss" scoped>

.menu-container{
  .nav-item{

    transition: 0.25s all ease-in-out;

    .menu-btn{
      color: $secondary-color;
      cursor: pointer;
    }

    &:hover{
      background-color: $four-color;
    }
  }
}
</style>
  