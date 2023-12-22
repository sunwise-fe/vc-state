<template>
  <nav class="box">
    <router-link to="/">base</router-link> | <router-link to="/nest">nest</router-link> |
    <router-link to="/override">override</router-link>
  </nav>
  <router-view />
</template>
<style>
  .box {
    margin: 20px 0;
  }
</style>
