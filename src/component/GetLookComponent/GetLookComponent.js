import Vue from 'vue';
import ProductComponent from './ProductComponent';
export default {
  name: 'GetLook',
  data() {
    return {
      product: [],
    };
  },
  methods: {
    owlCarouselRandomProduct() {
      $('#product2').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        responsiveClass: true,
        dots: false,
        responsive: {
          0: {
            items: 2,
            dots: false,
            nav: true,
            margin: 10,
            navText: [
              "<img class='nav-img-left' src='https://i.imgur.com/gSWxZhL.png' style='position:absolute;top:23%;left:-8%;width:7%;'>",
              "<img class='nav-img-right' src='https://i.imgur.com/DbIer4t.png' style='position:absolute;top:23%;right:-8%;width:7%;'>",
            ],
          },
          600: {
            items: 3,
            nav: true,
            margin: 10,
            navText: [
              "<img class='nav-img-left' src='https://i.imgur.com/gSWxZhL.png' style='position:absolute;top:23%;left:-8%;width:7%;'>",
              "<img class='nav-img-right' src='https://i.imgur.com/DbIer4t.png' style='position:absolute;top:23%;right:-8%;width:7%;'>",
            ],
          },
          1000: {
            nav: true,
            items: 4,
            dots: false,
            navText: [
              "<img src='https://i.imgur.com/gSWxZhL.png' style='position:absolute;top:21%;left:-8%;width:6%;'>",
              "<img src='https://i.imgur.com/DbIer4t.png' style='position:absolute;top:21%;right:-8%;width:6%;'>",
            ],
          },
        },
      });
    },
  },
  mounted() {
    this.$api.getPromotionProduct().then(response => {
      let product = response.product;
      if (product.length > 0) {
        product = this.parseListProduct(product);
        this.product = product.product;
      }
      Vue.nextTick(
        function() {
          this.owlCarouselRandomProduct();
        }.bind(this),
      );
    });
  },
  components: {
    ProductComponent,
  },
};
