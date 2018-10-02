<style src="./HomePage.scss" lang="scss">
  
</style>

<script src="./HomePage.js">
  
</script>

<template>
  <b-container>
    <h2>HomePage</h2>
    <img 
      v-if="!abc" 
      :src="`${$versionRoot}/image/favicon.png`" 
    />
    <img 
      :src="abc"
      alt="" 
    />
    <router-link :to="{name:RouteNames.DEMO}">
      <!-- <button class="abc">Demo</button> -->
      <b-button :size="'lg'" :variant="'primary'">DEMO ->>></b-button>
    </router-link>
  </b-container>
</template>
