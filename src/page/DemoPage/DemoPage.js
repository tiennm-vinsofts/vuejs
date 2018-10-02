// @vue/component
import axios from 'axios';
export default {
  name: 'DemoPage',
  data() {
    return {
      hotline: null,
    };
  },

  created() {
    // axios.get('http://cazacrm.yez.vn/api/cz_info').then(data => {
    //   console.log(data)
    // }),
  
    // this.$http.get('http://cazacrm.yez.vn/api/cz_info').then(data => {
    //   console.log(data)
    // }),

    // this.$gateway.get('http://cazacrm.yez.vn/api/cz_info').then(data => {
    //   console.log(data)
    // }),

    this.$api.getInfo().then(data => {
      // console.log(data)
      this.$store.dispatch('setInfo',data);
      this.hotline = data.info.hotline
      console.log(this.hotline)
    }),

    // this.$api.getNewsDetail(this.$route.params.slug)
    this.$api.getNewsDetail('phong-cach-thiet-ke-noi-that-dep')
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log(err));

  },
};
