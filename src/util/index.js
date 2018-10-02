import moment from 'moment';
const urlCaza = 'http://newcaza.yez.vn';
export function truncateString(str, count) {
  if (str.split(' ').length > count) {
    return (
      str
        .split(' ')
        .splice(0, count)
        .join(' ') + '...'
    );
  }
  return str;
}

export function formatCurency(curency, number = 1) {
  if (number) curency = Math.round(curency / number);
  if (isNaN(curency)) return curency.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  return curency.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export function formatDate(val) {
  return moment(val, 'DD/MM/YYYY').format('MM/DD/YYYY');
}

export function parseListProduct(list) {
  let min = 0;
  let max = 0;
  if (list.length > 0) {
    list = list.map(item => {
      let sale_price = 0;
      item = parseProduct(item);
      if (item.todaySale) sale_price = parseInt(item.promotion_price);
      else sale_price = parseInt(item.sale_price);
      if (min === 0 && max === 0) {
        min = sale_price;
        max = sale_price;
      } else {
        if (min > sale_price) min = sale_price;
        if (max < sale_price) max = sale_price;
      }
      return item;
    });
  }
  return { product: list, min, max };
}

export function parseProduct(product) {
  if (product.promotion_from && product.promotion_to) {
    let date_from = formatDate(product.promotion_from);
    date_from = Date.parse(date_from);
    let date_to = formatDate(product.promotion_to);
    date_to = Date.parse(date_to);
    let day = moment(new Date()).format('MM/DD/YYYY');
    day = Date.parse(day);
    if (day >= date_from && day <= date_to) {
      product.todaySale = true;
      product.percent = Math.round(100 - (product.promotion_price * 100) / product.sale_price);
    } else {
      product.todaySale = false;
    }
  } else {
    product.todaySale = false;
  }
  if (product.sub_product) {
    product.properties.map(obj => {
      if (obj.color && obj.color.value) {
        let sub_product = product.sub_product.filter(sub => {
          if (sub.main_sku !== '' && sub.color.length > 0 && obj.color.id === sub.color[0].id) {
            return sub;
          }
        });
        // console.log(sub_product, "sdjfsdjkfsd");
        obj.sub_product = {};
        if (sub_product.length > 0) {
          obj.sub_product = sub_product[0];
        }
      }
      return obj;
    });
  }
  return product;
}

export function parseSource(key, str) {
  let _source = null;
  let _cut = null;
  _source = str.slice(str.indexOf(`[${key}`), str.length);
  _source = _source.slice(0, _source.indexOf(']'));
  _cut = _source;
  _source = _source.replace(`[${key}`, `"block":"${key}"`);
  if (_source.search(' promotion') > 0) _source = _source.replace('promotion', `"promotion"`);
  if (_source.search(' category') > 0) _source = _source.replace('category', `"category"`);
  if (_source.search(' sku') > 0) _source = _source.replace('sku', `"sku"`);
  if (_source.search(' lastest') > 0) _source = _source.replace('lastest', `"lastest"`);
  if (_source.search(' id') > 0) _source = _source.replace('id', `"id"`);
  if (_source.search(' count') > 0) _source = _source.replace('count', `"count"`);
  if (_source.search(' total') > 0) _source = _source.replace('total', `"total"`);
  if (_source.search(' grid') > 0) _source = _source.replace('grid', `"grid"`);
  _source = _source.trim();
  _source = _source.replace(/=/gi, ':');
  _source = _source.replace(/ /gi, ',');
  _source = `{${_source}}`;
  _source = JSON.parse(_source);
  return { param: _source, source: _cut };
}

export function removeUrl(str) {
  return str.replace(urlCaza, '');
}

export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
