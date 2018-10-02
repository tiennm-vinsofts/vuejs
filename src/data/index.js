import axios from 'axios';
import API from './enum/API';

const successAPI = data => {
  if (data.status_code === 200) return true;
  return false;
};

const getData = data => {
  const { status_code, ...value } = data;
  return value;
};

export const getAPI = async (key, payload) => {
  let value = null;
  try {
    const params = {
      ...payload,
    };
    const data = await axios.get(key, {
      params,
    });
    if (successAPI(data.data)) {
      value = getData(data.data);
    }
  } catch (error) {
    console.log('Lỗi API');
  }
  return value;
};


export const postAPI = async (key, payload) => {
  let value = null;
  try {
    const data = await axios.post(key, {
      ...payload,
    });
    if (successAPI(data.data)) {
      value = getData(data.data);
    } else {
      value = { message: data.data.message };
    }
  } catch (error) {
    console.log('Lỗi API');
  }
  return value;
};

//Thông tin chung cho website
export const getInfo = () => {
  return getAPI(API.INFO);
};
//Danh sach Menu
export const getMenu = () => {
  return getAPI(API.MENU);
};

//Sản phẩm giảm giá
export const getPromotionProduct = () => {
  return getAPI(API.PROMOTION_PRODUCT);
};

//Sản phẩm ngẫu nhiên( limit default =6)
export const getRandomProduct = (limit = 6) => {
  return getAPI(API.RANDOM_PRODUCT, {
    limit,
  });
};
//Banner
export const getBanner = () => {
  return getAPI(API.BANNER);
};

//Sản phẩm nổi bật
export const getFeatureProduct = () => {
  return getAPI(API.FEATURE_PRODUCT);
};

//Danh sách bài viết mới nhất
export const getLastestNews = page => {
  return getAPI(API.LASTEST_NEWS, { page });
};

//Sản phẩm theo danh mục
// export const getProductCategory = (code, property, price_from, price_to) => {
// return getAPI(API.PRODUCT_CATEGORY, { code, property, price_from, price_to });
// let value = null;
// const params = {
//     code,
//     property,
//     price_from,
//     price_to
// }
// try {
//     const data = await axios.get(API.PRODUCT_CATEGORY, { params });
//     if (successAPI(data)) {
//         value = getData(data);
//     }
// } catch (error) {
//     console.log("Lỗi API Sản phẩm theo danh mục");
// }
// return value;
// }

//Danh sách các thuộc tính
export const getProductProperty = () => {
  return getAPI(API.PRODUCT_PROPERTY);
};

//Chi tiết bài viết
export const getNewsDetail = slug => {
  return getAPI(API.NEWS_DETAIL, {
    slug,
  });
};

//Chi tiết trang landing page
export const getLandingPage = slug => {
  return getAPI(API.LADINGPAGE, {
    slug,
  });
};

//Chi tiết sản phẩm
export const getProductDetail = slug => {
  return getAPI(API.PRODUCT_DETAIL, {
    slug,
  });
};

//Tạo đơn hàng
export const postCreateOrder = order => {
  return postAPI(API.CREATE_ORDER, {
    ...order,
  });
};

//Danh sách tỉnh thành phố
export const getCity = () => {
  return getAPI(API.GET_ALL_CITY);
};

//Danh sách quận/  huyện theo tỉnh/ thành phố
export const getDistrictByCity = async city => {
  return getAPI(API.GET_DISTRICT_BY_CITY, {
    city,
  });
};

//Tăng lượt xem bài viết
export const postIncreaseView = id => {
  return postAPI(API.INCREASE_VIEW, {
    id,
  });
};

//Bài viết nổi bật
export const getPopularView = type => {
  return getAPI(API.POPULAR_VIEW, {
    type,
  });
};

//Danh sách lời khuyên ngẫu nhiên (default = 6)
export const getRandomAdvice = (limit = 6) => {
  return getAPI(API.RANDOM_ADVICE, {
    limit,
  });
};
//Danh sách danh mục bài viết
export const getNewsCategory = () => {
  return getAPI(API.NEWS_CATEGORY);
};

//Đăng ký người dùng
export const postRegisterUser = register => {
  return postAPI(API.REGISTER_USER, {
    ...register,
  });
};

//Đăng nhập người dùng
export const postLoginUser = login => {
  return postAPI(API.LOGIN_USER, {
    ...login,
  });
};

//Đăng xuất người dùng
export const postLogoutUser = () => {
  return postAPI(API.LOGIN_USER);
};

//Lấy thông tin người dùng
export const getProfileUser = api_token => {
  return getAPI(API.GET_PROFILE, {
    api_token,
  });
};

//Sửa thông tin người dùng
export const getUpdateProfile = profile => {
  return postAPI(API.UPDATE_PROFILE, {
    ...profile,
  });
};

//Đổi mật khẩu người dùng
export const getChanglePassword = profile => {
  return postAPI(API.CHANGLE_PASSWORD, {
    ...profile,
  });
};

//Danh sách tin tức thuộc danh mục
export const getListNewsCategory = slug => {
  return getAPI(API.LIST_NEWS_CATEGORY, {
    slug,
  });
};

//Danh sách sản phẩm yêu thích,
export const getWishList = api_token => {
  return postAPI(API.WISHLIST, {
    api_token,
  });
};

// Đánh dấu/Bỏ đánh dấu sản phẩm yêu thích
export const postWishList = wishlist => {
  return postAPI(API.WISHLIST, {
    ...wishlist,
  });
};

//Gửi email xác nhận đổi mật khẩu
export const postRequestPawword = password => {
  return postAPI(API.REQUEST_PASSWORD, {
    ...password,
  });
};

//Thay đổi mật khẩu
export const postResetPassword = password => {
  return postAPI(API.RESET_PASSWORD, {
    ...password,
  });
};

//Dữ liệu cho block kéo thả
export const getBlock = block => {
  return getAPI(API.BLOCK, {
    ...block,
  });
};

//Đăng kí bản tin
export const postNewsLetter = email => {
  return postAPI(API.NEWSLETTER, {
    email,
  });
};

//Danh sách sản phẩm
export const getListProduct = product => {
  return getAPI(API.LIST_PRODUCT, {
    ...product,
  });
};

//Đăng nhập người dùng voi mang xa hoi
export const postLoginWithSocial = login => {
  return postAPI(API.LOGIN_SOCIAL, {
    ...login,
  });
};

//Danh sách tin tức thuộc danh mục
export const getTagNews = slug => {
  return getAPI(API.TAG_NEWS, {
    slug,
  });
};

export default {
  getBanner,
  getBlock,
  getChanglePassword,
  getCity,
  getDistrictByCity,
  getFeatureProduct,
  getFeatureProduct,
  getInfo,
  getLandingPage,
  getLastestNews,
  getListNewsCategory,
  getListProduct,
  getMenu,
  getNewsCategory,
  getNewsDetail,
  getPopularView,
  getProductDetail,
  getProductProperty,
  getProfileUser,
  getPromotionProduct,
  getPromotionProduct,
  getRandomAdvice,
  getRandomProduct,
  getTagNews,
  getUpdateProfile,
  getWishList,
  postCreateOrder,
  postIncreaseView,
  postLoginUser,
  postLogoutUser,
  postLoginWithSocial,
  postNewsLetter,
  postRegisterUser,
  postRequestPawword,
  postResetPassword,
  postWishList,
};
