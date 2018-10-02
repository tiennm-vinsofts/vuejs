<style src="./GetLookComponent.scss" module lang="scss" scope></style>

<script src="./GetLookComponent.js"></script>

<template>
  <div class="get_look">
    <h3>Slide</h3>
    <div id="product2" class="owl-carousel owl-theme">
      <div class="item1" v-if="product.length>0" v-for="item in product">
          <ProductComponent v-bind:product="item" />
      </div>
    </div>
  </div>
</template>
