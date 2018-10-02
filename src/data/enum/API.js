export const URL = 'http://cazacrm.yez.vn';
export const URL_IMAGE_UPLOAD = `${URL}/uploads`;
export const URL_IMAGE = {
  urlImageNews: function(name) {
    return `${URL_IMAGE_UPLOAD}/news/${name}`;
  },
  urlImageProducts: function(name) {
    return `${URL_IMAGE_UPLOAD}/products/${name}`;
  },
};
const url_api = `${URL}/api`;
const API = {
  //Thông tin chung cho website
  INFO: `${url_api}/cz_info`,
  //Danh sach mega menu
  MENU: `${url_api}/cz_menu`,
  //Sản phẩm giảm giá
  PROMOTION_PRODUCT: `${url_api}/cz_promotion_product`,
  //Sản phẩm ngẫu nhiên
  RANDOM_PRODUCT: `${url_api}/cz_random_product`,
  //Banner
  BANNER: `${url_api}/cz_banner`,
  //Sản phẩm nổi bật
  FEATURE_PRODUCT: `${url_api}/cz_feature_product`,
  //Danh sách bài viết mới nhất
  LASTEST_NEWS: `${url_api}/cz_lastest_news`,
  //Sản phẩm theo danh mục
  //PRODUCT_CATEGORY : `${url_api}/cz_category_products`,
  //Danh sách các thuộc tính
  PRODUCT_PROPERTY: `${url_api}/cz_product_property`,
  //Chi tiết bài viết
  NEWS_DETAIL: `${url_api}/cz_news_detail`,
  //Landing Page
  LADINGPAGE: `${url_api}/cz_page_detail`,
  //Chi tiết sản phẩm
  PRODUCT_DETAIL: `${url_api}/cz_product_detail`,
  //Tạo đơn hàng
  CREATE_ORDER: `${url_api}/cz_create_order`,
  //Danh sách tỉnh thành phố
  GET_ALL_CITY: `${url_api}/cz_city`,
  //Danh sach quan/ huyen
  GET_DISTRICT_BY_CITY: `${url_api}/cz_district`,
  //Tăng lượt xem bài viết
  INCREASE_VIEW: `${url_api}/cz_increase_view`,
  //Bài viết nổi bật
  POPULAR_VIEW: `${url_api}/cz_popular_news`,
  //Danh sách lời khuyên ngẫu nhiên
  RANDOM_ADVICE: `${url_api}/cz_random_advice`,
  //Danh sách danh mục bài viết
  NEWS_CATEGORY: `${url_api}/cz_news_category`,
  //Đăng ký người dùng
  REGISTER_USER: `${url_api}/cz_register`,
  //Đăng nhập người dùng
  LOGIN_USER: `${url_api}/cz_login`,
  //Đăng xuất người dùng
  LOGOUT_USER: `${url_api}/cz_logout`,
  //Lấy thông tin người dùng
  GET_PROFILE: `${url_api}/cz_profile`,
  //Sửa thông tin người dùng
  UPDATE_PROFILE: `${url_api}/cz_profile`,
  //Đổi mật khẩu người dùng
  CHANGLE_PASSWORD: `${url_api}/cz_change_password`,
  //Danh sách tin tức thuộc danh mục
  LIST_NEWS_CATEGORY: `${url_api}/cz_category_news`,
  // Lấy Danh sách sản phẩm yêu thích, Đánh dấu/Bỏ đánh dấu sản phẩm yêu thích
  WISHLIST: `${url_api}/cz_wishlist`,
  //Gửi email xác nhận đổi mật khẩu
  REQUEST_PASSWORD: `${url_api}/cz_request_password`,
  //Thay đổi mật khẩu
  RESET_PASSWORD: `${url_api}/cz_reset_password`,
  //Danh sách đơn hàng
  LIST_CUSTOMER_ORDER: `${url_api}/cz_customer_order`,
  //Dữ liệu cho block kéo thả
  BLOCK: `${url_api}/cz_block`,
  //Đăng kí bản tin
  NEWSLETTER: `${url_api}/cz_newsletter`,
  //Danh sách sản phẩm
  LIST_PRODUCT: `${url_api}/cz_product`,
  //Đăng nhập người dùng mang xa hoi
  LOGIN_SOCIAL: `${url_api}/cz_social`,
  //Danh sách tin tức thuộc danh mục
  TAG_NEWS: `${url_api}/cz_tag_news`,
};

export default API;
