<style src="./DemoPage.scss" module lang="scss"></style>
<script src="./DemoPage.js"></script>

<template>
  <div>
    <h2> SPA</h2>
    <h2>Hotline: {{this.hotline}}</h2>
    <h2>ádfs {{$store.getters.info}}</h2>
    <!-- <img src="src/asset/image/download.png" />
    <img src="../../asset/image/download.png" /> -->
    <img src="~asset/image/download.png" />
  </div>
</template>
