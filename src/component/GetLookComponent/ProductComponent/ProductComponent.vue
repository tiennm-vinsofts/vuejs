<style src="./ProductComponent.scss" scope lang="scss"></style>

<script src="./ProductComponent.js"></script>

<template>
<div>
  <div class="img-product">
    <router-link :to="{name:RouteNames.HOME, params:{slug:product.slug }}">
      <img class="product-images product-item-randoms" v-if="product.image" :src="product.image.full_path" alt="">
      <img class="product-images product-item-randoms" v-else src="~asset/image/download.png">
    </router-link>
    <!-- <i class="far fa-heart love"></i> -->
    <div v-if="product.todaySale" class="special-entry1">
      <p class="text-special">-{{ product.percent}}% </p>
    </div>
  </div>
  <div class="product-info product-slider5">
    <router-link :to="{name:RouteNames.HOME, params:{slug:product.slug }}">
      <h4>{{ product.product_name}}</h4>
    </router-link>
    <div v-if="product.perCent">
      <div v-if="product.promotion_price > 0" class="price price-promotion-product">{{ formatCurency(product.promotion_price) }} đ</div>
        <div class="root_price price-sale-product price-sale-product-rp">{{ formatCurency(product.sale_price) }} đ</div>
      </div>
      <div v-else>
        <div class="price price-no-promotion">{{ formatCurency(product.sale_price) }} đ</div>
      </div>
      <div class="card-text" v-if="product.properties && product.properties.length >0" >
        <div v-for="item2 in product.properties"  class="item-color-ct">
          <button class="" v-if="item2.color !=null" :style="{background:'#'+item2.color.value}" class="pink" v-bind:class="{'white' : item2.color.value=='FFFFFF'}"></button>
        </div>
      </div>
    </div>
  </div>

</template>
