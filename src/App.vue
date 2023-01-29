<template>
  <div id="app">
    <div class="layout-sidebar bg-blue-100">
      <AppSideMenu />
    </div>
    <div class="layout-main-container">
      <div class="layout-main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import AppSideMenu from './AppSideMenu.vue';
export default {
  name: 'App',
  components: {
    AppSideMenu,
  },
};
</script>

<style></style>
