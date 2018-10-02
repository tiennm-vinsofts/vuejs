// @vue/component
export default {
  name: 'HomePage',
  data() {
    return {
      abc: null,
    };
  },
  created() {
    this.$api
      .getProductDetail(this.$route.params.slug)
      .then(data => {
        console.log(data);

        this.abc = data.product.image.full_path;
        console.log(this.abc);
      })
      .catch(err => console.log(err));
  },
};
