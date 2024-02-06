<template>
  <ul class="commerce-cart__group__item-list">
    <li class="commerce-cart__delivery-group__product-item">
      <article class="carted-product">
        <div class="carted-product__select">
          <div class="_3zqA8"><input type="checkbox" class="_3UImz" value="" checked="">
            <span class="_2mDYR">
              <svg
                width="1em" height="1em" viewBox="0 0 16 16" class="_2UftR">
                <path fill="currentColor" d="M6.185 10.247l7.079-7.297 1.435 1.393-8.443 8.703L1.3 8.432l1.363-1.464z">
                </path>
              </svg>
            </span>
          </div>
        </div>
        <span class="css-17x2thm elsmzm01">오늘출발 마감<span class="afterDeadLine css-1xskdmv elsmzm00">1/26 (금) 발송
            예정</span></span>
        <a class="product-small-item product-small-item--clickable" href="/productions/1803860/selling">
          <div class="product-small-item__image">
            <picture>
              <img alt="상품 이미지" :src="image">

            </picture>
          </div>
          <div class="product-small-item__content">
            <h1 class="product-small-item__title">{{ productName }}</h1>
            <p class="css-w0e4y9 e1xep4wb1">무료배송&nbsp;|&nbsp;일반택배</p>
          </div>
        </a>
        <button class="carted-product__delete" type="button" aria-label="삭제"><svg width="12" height="12"
            viewBox="0 0 12 12" fill="currentColor" preserveAspectRatio="xMidYMid meet">
            <path fill-rule="nonzero"
              d="M6 4.6L10.3.3l1.4 1.4L7.4 6l4.3 4.3-1.4 1.4L6 7.4l-4.3 4.3-1.4-1.4L4.6 6 .3 1.7 1.7.3 6 4.6z">
            </path>
          </svg></button>
        <!-- cart-footer -->
        <div class="carted-product__footer">
          <span class="carted-product__footer__left">
            <button class="carted-product__edit-btn" type="button">옵션변경</button><button class="carted-product__order-btn"
              type="button">바로구매</button></span><span class="carted-product__subtotal"><span
              class="carted-product__subtotal__number">{{ salePrice }}</span>원</span>
        </div>
      </article>
    </li>
    <footer class="commerce-cart__delivery-group__footer">
      <p class="commerce-cart__delivery-group__total">배송비 무료</p>
    </footer>
  </ul>
</template>

<script>
export default {
  name: 'CartCardComponent',
  props: [
    "productName",
    "salePrice",
      "image"
  ]
}
</script>

<style>


.commerce-cart__group__item-list {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  /* padding-inline-start: 40px; */
  list-style: none;
  background-color: #fff;
}

.commerce-cart__delivery-group__product-item {
  border-bottom: 1px solid #ededed;
}

.carted-product {
  display: block;
  position: relative;
  padding: 10px 15px 20px 49px;
}

.carted-product__select {
  position: absolute;
  margin: -9px;
  top: 20px;
  left: 15px;
}

.product-small-item__image {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -moz-box-flex: 0;
  -moz-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  position: relative;
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 6px;
  background-color: #ededed;
  overflow: hidden;
}

.product-small-item__content {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 0px;
  -moz-box-flex: 1;
  -moz-flex: 1 0 0px;
  -ms-flex: 1 0 0px;
  flex: 1 0 0px;
  padding-left: 12px;
}

.carted-product__delete {
  position: absolute;
  display: inline-block;
  top: 15px;
  right: 10px;
  padding: 5px;
  background: none;
  border: none;
  font-size: 0;
  transition: opacity 0.1s;
  color: #424242;
}

.carted-product__footer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  -moz-justify-content: space-between;
  justify-content: space-between;
  margin-top: 16px;
}

.carted-product__footer__left {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -moz-box-flex: 0;
  -moz-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.carted-product__edit-btn,
.carted-product__order-btn {
  position: relative;
  display: inline-block;
  margin: 2px 0 0 -3px;
  padding: 3px;
  background: none;
  border: none;
  color: #424242;
  font-family: inherit;
  font-weight: 400;
  font-size: 12px;
  line-height: 1;
  transition: opacity 0.1s;
}

.carted-product__edit-btn:nth-child(n + 2),
.carted-product__order-btn:nth-child(n + 2) {
  margin-left: 14px;
}

.carted-product__order-btn:nth-child(n + 2):before {
  content: "";
  position: absolute;
  display: block;
  left: -7px;
  top: 4px;
  height: 12px;
  border-left: 1px solid #dbdbdb;
}

.commerce-cart__delivery-group__footer {
  padding: 3px;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #424242;
}

.css-17x2thm {
  display: inline-flex;
  color: rgb(47, 52, 56);
  background-color: rgb(247, 249, 250);
  padding: 6px 10px;
  border-radius: 4px;
  margin-bottom: 12px;
  font-size: 12px;
  line-height: 16px;
}
</style>