<template>
  <div>
    <header class="header-container">
      <Menu /> 
    </header>
    
    <router-view />
  </div>
</template>

<script lang="ts" setup>
  import Menu from './components/MenuComponent.vue'

</script>

<style lang="scss" scoped>
.header-container{
  background-color: $third-color;
}
</style>
