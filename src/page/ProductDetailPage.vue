<template>
  <HeaderComponent/>
  <div class="production-selling">
    <div class="production-selling-overview container">
      <nav class="commerce-category-breadcrumb-wrap production-selling-overview__category">
        <ol class="commerce-category-breadcrumb">
          <li class="commerce-category-breadcrumb__entry">
            <a class="link" href="/store/category?category_id=28000000&amp;affect_type= ProductSaleDetail&amp;affect_id=672428">카테고리</a>
            <svg class="icon" width="8" height="8" viewBox="0 0 8 8" fill="currentColor" preserveAspectRatio="xMidYMid meet">
              <path d="M4.95 4L2.12 1.19l.7-.71 3.54 3.54-3.53 3.53-.7-.7z">
              </path>
            </svg>
          </li>
          <li class="commerce-category-breadcrumb__entry">
            <a class="link" href="/store/category?category_id=28050000&amp;affect_type= ProductSaleDetail&amp;affect_id=672428">{{ product.productName }}</a>
          </li>
        </ol>
      </nav>
      <div class="production-selling-overview__container row">
        <div class="production-selling-overview__cover-image-wrap col-12 col-md-6 col-lg-7">
          <div class="production-selling-cover-image-container">
            <div class="carousel production-selling-cover-image production-selling-overview__cover-image" role="region" aria-roledescription="carousel">
              <div class="carousel__list-wrap production-selling-cover-image__carousel-wrap">
                <img class="production-selling-cover-image__entry__image" :src="product.filename" alt="">
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="production-selling-overview__content col-12 col-md-6 col-lg-5">
        <div class="production-selling-header">
          <h1 class="production-selling-header__title">
            <p class="production-selling-header__title__brand-wrap">
              <a class="production-selling-header__title__brand" href="/brands/home?query=%EC%95%84%EC%9A%B0%EC%96%B4%EB%A3%B8&amp;affect_type=ProductSaleDetail&amp;affect_id=672428"></a>
            </p>
            <div class="production-selling-header__title__name-wrap">
              <span class="production-selling-header__title__name">{{ product.productName }}</span>
              <div class="production-selling-header__action">
                <button class="production-selling-header__action__button production-selling-header__action__button-scrap" type="button">
                  <svg class="icon--stroke" aria-label="스크랩" width="24" height="24" fill="currentColor" stroke="currentColor" stroke-width="0.5" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                    <path d="M11.53 18.54l-8.06 4.31A1 1 0 0 1 2 21.97V3.5A1.5 1.5 0 0 1 3.5 2h17A1.5 1.5 0 0 1 22 3.5v18.47a1 1 0 0 1-1.47.88l-8.06-4.31a1 1 0 0 0-.94 0z"></path>
                  </svg>
                  <span class="count">122,170</span>
                </button>
                <div class="drop-down">
                  <button class="production-selling-header__action__button" type="button">
                    <svg class="icon" aria-label="공유하기" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" preserveAspectRatio="xMidYMid meet">
                      <path d="M9.64 14.646a4.5 4.5 0 1 1 0-5.292l4.54-2.476a4.5 4.5 0 1 1 .63.795l-4.675 2.55c.235.545.365 1.146.365 1.777s-.13 1.232-.365 1.777l4.675 2.55a4.5 4.5 0 1 1-.63.795l-4.54-2.476zM18 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM6 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM18 23a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z">
                      </path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </h1>

          <div class="production-selling-header__content">
            <div class="production-selling-header__price">
              <span class="production-selling-header__price__price-wrap">
                <span class="production-selling-header__price__discount">
                  <span class="number"></span><span class="percent">{{Math.floor((product.price - product.salePrice ) / product.price  * 100)}} %  &nbsp;</span>
                 </span>

                <del class="production-selling-header__price__original">
                  <span class="number">{{ product.price }}</span>
                  <span class="won">원</span>
                </del>
                  <span class="production-selling-header__price__separator"></span>
                    <div class="production-selling-header__price__price-value-wrap">
                      <div class="production-selling-header__price__price">
                        <span class="number">{{ product.salePrice }}</span>
                        <span class="won">원</span>
                      </div>
                    </div>
                  </span>
            </div>
          </div>
        </div>
        <div class="production-selling-header__info-wrap">
          <div class="production-selling-header__delivery">
            <div class="production-selling-header__delivery__title-wrap">
              <span>배송</span>
            </div>
            <div class="production-selling-header__delivery__content-wrap">
              <span class="production-selling-header__delivery__fee">
                <b>무료배송</b>
              </span>
              <div class="_2SUYq production-selling-header__delivery__today-departure__dropdown">
                <div class="production-selling-header__delivery__today-departure__header">
                  <span class="text">지금 주문시
                    <span class="active">내일 출발</span>
                  </span>
                </div>
              </div>
              <span class="production-selling-header__delivery__type">
                <span>일반택배</span>
              </span>
              <span class="production-selling-header__delivery__disclaimer-wrap">
                <span class="production-selling-header__delivery__disclaimer">
                  <svg class="check-icon" width="10" height="9" fill="none" preserveAspectRatio="xMidYMid meet">
                    <path d="M1 3.83l2.153 3.03a1 1 0 001.627.005L9 1" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span>제주도/도서산간 지역 20,000원</span>
                </span>
            </span>
              <span class="production-selling-header__delivery__expectation-section">
                <span class="production-selling-header__delivery__expectation-wrap">
                  <span class="production-selling-header__delivery__expectation__header">
                    <svg class="delivery-time-icon" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.303 5.04l.394.92L7 8.83V12a.5.5 0 01-1 0V8.17l7.303-3.13z" fill="#00B8F0"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.197 4.628a.5.5 0 00-.394 0L4.269 7 10 9.456 15.73 7l-2.427-1.04-3.106-1.332zM3.5 14.341V7.758l6 2.572v6.912L3.803 14.8a.5.5 0 01-.303-.46zm7 2.9l1.534-.657a5 5 0 014.466-5.56V7.759l-6 2.572v6.912zm.09 1.05l1.664-.713A5.002 5.002 0 0022 16a5 5 0 00-4.5-4.975V7.659a1.5 1.5 0 00-.91-1.378l-2.893-1.24-3.106-1.332a1.5 1.5 0 00-1.182 0l-6 2.572A1.5 1.5 0 002.5 7.659v6.682c0 .6.358 1.142.91 1.378l6 2.572a1.5 1.5 0 001.18 0zM17 20a4 4 0 100-8 4 4 0 000 8zm.5-6.5a.5.5 0 00-1 0v2H15a.5.5 0 000 1h2a.5.5 0 00.5-.5v-2.5z" fill="#3F474D"></path>
                      </svg>
                        <span class="text">
                        <span class="date">1/29(월)<!-- --> </span>
                          도착 예정 <b>87<!-- -->%</b></span>
                        <svg class="arrow-icon" width="16" height="16" fill="none" preserveAspectRatio="xMidYMid meet">
                          <path d="M13 11.333L8 6.501l-5 4.832-1-.917 6-5.75 6 5.75-1 .917z" fill="#828C94"></path>
                      </svg>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div class="production-selling-option-form production-selling-overview__option-form">
          <p class="css-49v6aj ejhg2ki2">
            <span class="css-7c0zb9 ejhg2ki1">주문금액</span>
            <span class="css-q02jxk ejhg2ki0">
              <span>{{ product.salePrice }}</span>원</span>
          </p>
          <div class="production-selling-option-form__footer">
              <button class="button button--color-blue-inverted button--size-55 button--shape-4" type="button" @click="productCartIn">장바구니</button>
            <router-link to="/cart">
              <button class="button button--color-blue button--size-55 button--shape-4" type="button" @click="productCartIn">바로구매</button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="product-details">
        <section class="production-selling-section">
          <header class="production-selling-section__header production-selling-section__header__hidden">
            <h1 class="production-selling-section__title">상품정보</h1>
          </header>
          <div class="production-selling-description production-selling-description--notice">
            <div class="production-selling-description__expand-wrap">
              <p style="text-align: center;"><span style="font-size: 10pt;"><img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/167593439951524856.png" alt="상품의 상세 설명 이미지" width="165" height="165"></span></p>
              <p style="text-align: center;"><a href="https://ohou.se/productions/905929/selling?affect_id=27&amp;affect_type=StoreSearchResult"><img src="https://prs.ohou.se/apne2/any/uploads/productions/descriptions/url/v1-197078276358208.jpg" alt="상품의 상세 설명 이미지" width="1440" height="400"></a></p>
              <p style="text-align: center;"><a href="https://ohou.se/productions/1658834/selling?affect_id=2&amp;affect_type=StoreSearchResult"><img src="https://prs.ohou.se/apne2/any/uploads/productions/descriptions/url/v1-197078428340352.jpg" alt="상품의 상세 설명 이미지"></a></p>

              <p class="descriptions" style="text-align: center;"><strong>*제작 공정 시 생길 수 있는 제품의 표면의 미세한 기포,요철,흠집,얼룩 등은 불량 교환/반품의 사유가 되지 않는 점, 참고해주세요.</strong></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {useRoute} from "vue-router";
import axios from "axios";

const backend = "http://www.localfoodpam.kro.kr/api"

export default {
  name: 'ProductDetailPage',

  data() {
    return {
      product: "" ,
      productIdx: ""
    }
  },

  components: {HeaderComponent, FooterComponent},

  methods: {
    async productCartIn() {
      let response = await axios.get(backend + "/cart/in/" + this.productIdx, {
        headers: {
          Authorization: localStorage.getItem("accessToken")
        },
      })

      if (response.data.code === 1000) {
        alert("상품이 장바구니에 담겼습니다!");
      }
    },
    async readProductDetail() {
      const route = useRoute()
      console.log(route.params.productIdx);
      this.productIdx = route.params.productIdx;

      let response = await axios.get(backend + "/product/read/" + this.productIdx, {
        headers: {
          Authorization: localStorage.getItem("accessToken")
        },
      })

      this.product = response.data.result;

      if (response.data.code === 3000) {
        alert(response.data.message);
      }
    }
  },
  mounted() {
    this.readProductDetail();
  }
}
</script>

<style>
*{
  font-family: 'GmarketSans';
}
p{
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #2F3438;
}
a{
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #2F3438;
  text-decoration-line: none;
}

p.basic:hover{
  color:rgb(24, 204, 60);
}

.production-selling {
  position: relative;
  min-height: 1px;
}

.container {
  margin-right: auto;
  margin-left: auto;
  width: calc(100% - 30px);
  max-width: 100%;
  box-sizing: border-box;
  min-height: 1px;
}

div {
  display: block;
}

.production-selling-overview__category {
  display: block;
  margin: 0 -15px;
  padding: 12px 15px;
  border-bottom: 1px solid #ededed;
}

ol, ul {
  list-style: none;
}

ol {
  display: block;
  list-style-type: decimal;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.commerce-category-breadcrumb__entry {
  display: inline-block;
  margin-right: 2px;
  color: #757575;
  font-size: 13px;
  line-height: 1.2;
}

a {
  color: inherit;
  text-decoration: none;
}

.commerce-category-breadcrumb__entry>.link {
  transition: opacity .1s;
}

.commerce-category-breadcrumb__entry>.icon {
  margin-left: 2px;
  width: 10px;
  height: 10px;
  color: #bdbdbd;
  vertical-align: -1px;
}

.production-selling-overview__container {
  margin-top: 0;
  display:flex;
  width: 90%;
  padding-left: 30%;
  margin-bottom: 30px;
}

.col-12 {
  position: relative;
  width: 100%;
  min-height: 1px;
  box-sizing: border-box;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 100%;
  -moz-box-flex: 0;
  -moz-flex: 0 0 100%;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  padding-right: 5px;
  padding-left: 5px;
  margin: 0 auto;
}

.production-selling-cover-image-container {
  position: relative;
}

.carousel {
  position: relative;
}

.production-selling-overview__cover-image {
  margin: 0 -15px;
}

.production-selling-cover-image__carousel-wrap {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 0px;
  -moz-box-flex: 1;
  -moz-flex: 1 0 0px;
  -ms-flex: 1 0 0px;
  flex: 1 0 0px;
  overflow: hidden;
}

.carousel__list-wrap {
  overflow: hidden;
}

.production-selling-cover-image__carousel-wrap {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 0px;
  -moz-box-flex: 1;
  -moz-flex: 1 0 0px;
  -ms-flex: 1 0 0px;
  flex: 1 0 0px;
  overflow: hidden;
}


.carousel__list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -moz-flex-wrap: nowrap;
  -ms-flex-wrap: none;
  flex-wrap: nowrap;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  -webkit-align-items: stretch;
  -moz-align-items: stretch;
  align-items: stretch;
  min-height: 100%;
}

.production-selling-cover-image__entry {
  position: relative;
  padding-bottom: 100%;
  /* background-color: #ededed; */
}

img {
  overflow-clip-margin: content-box;
  overflow: clip;
}

.production-selling-cover-image__entry__image{
  border-radius: 10px;
}

.production-selling-overview__content{
  width: 70%;
  /* padding-right:10%; */
  padding: 30px;
  height: auto;
  /* flex:right; */
}

.production-selling-header {
  position: relative;
}

h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

.production-selling-header__title__brand-wrap {
  display: block;
  margin: 19px 0 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  color: #757575;
  margin-bottom: 25px;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.production-selling-header__title__brand {
  color: #828c94;
  font-weight: 700;
  transition: opacity .1s;
}

a {
  color: inherit;
  text-decoration: none;
}

.production-selling-header__title__name-wrap {
  position: relative;
}

.production-selling-header__title__name {
  display: block;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
  overflow-wrap: break-all;
  margin-right: 36px;
}

.production-selling-header__action {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0 -6px;
}

.production-selling-header__action {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0 -6px;
}

.production-selling-header__action__button-scrap {
  display: none;
}
.production-selling-header__action__button {
  display: inline-block;
  margin: 0 3px;
  padding: 5px 4px 0;
  background: none;
  border: none;
  text-align: center;
  transition: opacity .1s;
  line-height: 0;
  z-index: 2;
  vertical-align: top;
}

div {
  display: block;
}

.production-selling-header__content {
  min-height: 26px;
}

.production-selling-header__price__discount {
  display: inline-block;
  color: #757575;
  font-size: 20px;
  line-height: 17px;
  padding-right: 2px;
}

.production-selling-header__price__original {
  font-size: 20px;
  line-height: 17px;
  color: #bdbdbd;
  text-decoration: strike-through;
}

.production-selling-header__price__price-value-wrap {
  margin-top: 5px;
  color: #424242;
}

.production-selling-header__price__price {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  line-height: 1;
  font-size: 40px;
  font-weight: 700;
  margin: -4px 0 0 -6px;
}

.production-selling-header__price__price>* {
  margin: 4px 0 0 6px;
}

.production-selling-header__price__price>.won {
  margin-left: 0;
}

.production-selling-header__info-wrap {
  padding: 16px 0;
  border-bottom: 1px solid #ededed;
}

.production-selling-header__info-wrap>div {
  padding-top: 14px;
}
.production-selling-header__delivery {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 14px;
  line-height: 21px;
}

.production-selling-header__delivery__title-wrap {
  -webkit-flex-basis: 42px;
  -moz-flex-basis: 42px;
  -ms-flex-preferred-size: 42px;
  flex-basis: 42px;
}

.production-selling-header__delivery__content-wrap {
  -webkit-flex-basis: auto;
  -moz-flex-basis: auto;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  width: 42px;
}

.production-selling-header__delivery__fee {
  display: block;
  margin-bottom: 4px;
  color: #292929;
}

.production-selling-header__delivery__today-departure__dropdown {
  display: block;
  margin-bottom: 4px;
}

._2SUYq {
  position: relative;
  display: inline-block
}

.production-selling-header__delivery__today-departure__header {
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
}

.production-selling-header__delivery__today-departure__header .text {
  color: #2f3438;
}

.production-selling-header__delivery__today-departure__header .text .active {
  color: rgb(24, 204, 60);
  font-weight: 700;
}

.production-selling-header__delivery__type {
  display: block;
  margin-bottom: 4px;
  color: #292929;
}

.production-selling-header__delivery__type>span:first-of-type:before {
  margin: 0;
  border-left: 0;
}
.production-selling-header__delivery__type>span:before {
  content: "";
  height: 15px;
  display: inline-block;
  margin: 0 6px;
  border-left: 1px solid #292929;
  vertical-align: -2px;
}
.production-selling-header__delivery__expectation-wrap {
  display: block;
  border-radius: 4px;
  background-color: #f7f8fa;
  height: 40px;
  padding-top: 5px;
}

.production-selling-header__delivery__expectation-section {
  display: block;
  margin-top: 12px;
}

.production-selling-header__delivery {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 14px;
  line-height: 21px;
}

.production-selling-overview__option-form.production-selling-option-form {
  margin-top: 10px;
}

.production-selling-option-form, .production-selling-option-form__form {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -moz-box-flex: 1;
  -moz-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}
.production-selling-option-form {
  /* display: flex; */
  flex-direction: column;
  clear:both;
}

.css-49v6aj {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  margin-top: 16px;
  color: #2F3438;
  font-weight: 700;
  margin-top: 40px;
}

.css-7c0zb9 {
  font-size: 14px;
  line-height: 20px;
}
.css-q02jxk {
  font-size: 20px;
  line-height: 28px;
}

.production-selling-option-form__footer {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -moz-box-flex: 0;
  -moz-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 20px -3px 0;
}

.production-selling-option-form__footer>.button, .production-selling-option-form__footer__sold-out {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 0px;
  -moz-box-flex: 1;
  -moz-flex: 1 0 0px;
  -ms-flex: 1 0 0px;
  flex: 1 0 0px;
  margin: 0 3px;
}

.button--size-55 {
  padding: 13px 10px 14px;
  font-size: 17px;
  line-height: 26px;
}
.button--color-blue-inverted {
  background-color: #fff;
  border-color:rgb(24, 204, 60);
  color: rgb(24, 204, 60);
  height: 30px;
}
.button {
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline-block;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 1px solid transparent;
  background: none;
  font-family: inherit;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  transition: color .1s,background-color .1s,border-color .1s;
  border-radius: 4px;
  cursor: pointer;
}

.button--color-blue {
  background-color: rgb(24, 204, 60);
  border-color: rgb(30, 199, 64);
  color: black;
  height: 45px;
}

.product-details{
  width: 80%;
  padding-left:10%;
  margin-top: 60px;
}

.production-selling-section__title {
  font-size: 20px;
  font-weight: 700;
  color: #000;
  line-height: 23px;
}

/* footer */
* {
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
.footer{
  padding: 40px 40px;
  background-color: #F7F9FA;

  box-sizing: border-box;
  font-size: 12px;
  line-height: 16px;
  display: grid;
  grid-template-columns: 1fr 1px 1fr 1px 2fr;
  grid-column-gap: 30px;
}
/* .footer-left{
    padding: 0 40px;
} */

.customer-service-btn{
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  text-decoration: none;
  margin-bottom: 20px;
}
.customer-service-btn:visited{
  color: purple;
}
.customer-service-btn:active{
  color: blue;
}
.customer-service-btn:hover{
  text-decoration: underline;
}

.footer-left-top-1{
  margin-top: 10px;
}
.phone-number{
  display: flex;
  font-size: 16px;
  line-height: 20px;
  font-weight: 800;
  white-space: nowrap;
  margin-right: 6px;
  text-decoration: none;
  display: inline;

}
.phone-number:visited{
  color: purple;
}
.phone-number:active{
  color: blue;
}
.phone-number:hover{
  text-decoration: underline;
}

.time{
  /* display: flex; */
}
.footer-left-middle{
  font-size: 10px;
  line-height: 5px;
  white-space: pre-wrap;
  margin-bottom: 12px;

}

.footer-left-middle-1{
  margin-top: 5px;
  position: relative;

  padding-left: 10px;

}
.footer-left-middle-2{
  margin-top: 5px;
  position: relative;
  line-height: 15px;
  padding-left: 10px;

}
.footer-left-middle-3{
  margin-top: 5px;
  position: relative;

  padding-left: 10px;

}
.footer-left-middle-1:before {
  content: '•';
  position: absolute;
  font-size: 10px;
  left: 0px;
}
.footer-left-middle-2:before {
  content: '•';
  position: absolute;
  font-size: 10px;
  left: 0px;
}
.footer-left-middle-3:before {
  content: '•';
  position: absolute;
  font-size: 10px;
  left: 0px;
}
.footer-left-bottom{
  display: flex;
  gap: 12px;
  flex-direction: column;
  margin-top: 12px\y;
}
.footer-left-bottom-counseling-btn{
  display: flex;
  cursor: pointer;
  touch-action: manipulation;

  height: 30px;
  width: 200px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color:  #F7F9FA;
  display: inline-block;

  margin: 0;
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  font-size: 14px;
  line-height: 20px;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: auto;
  height: 32px;
  border-radius: 4px;
  padding: 0 8px;
  font-weight: 400;
  box-sizing: border-box;
  text-align: center;
  color: #2F3438;
  border: 1px solid #DADDE0;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  white-space: nowrap;
  text-decoration: none;
}
.footer-middle-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, min-content);
  grid-auto-flow: column;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
}
.footer-middle-element{
  text-decoration: none;
}
.footer-middle-element:visited{
  color: purple;
}
.footer-middle-element:link{
  color: black;
}
.footer-middle-element:active{
  color: blue;
}
.footer-middle-element:hover{
  text-decoration: underline;
}
.footer-middle-personal-infomation{
  text-decoration: none;
  font-weight: 700;
}
.footer-middle-personal-infomation:link{
  color:black;
}
.footer-middle-personal-infomation:visited{
  color: purple;
}
.footer-middle-personal-infomation:active{
  color: blue;
}
.footer-middle-personal-infomation:hover{
  text-decoration: underline;

}
.footer-right{


  font-size: 10px;
  line-height: 14px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 12px;
  color: #828C94;
  overflow-x: hidden;
}
.footer-right-1{
  overflow-x: hidden;
  text-decoration-line: none;
}
.footer-right-1-1{
  overflow-x: hidden;
}
.footer-right-1-1-element-infomation{
  font-size: 12px;
  line-height: 20px;
  display: inline-block;
  white-space: nowrap;
}
.footer-right-3{
  display: grid;
  grid-column-gap: 6px;
  grid-template-columns: max-content min-content min-content;
}
.footer-right-3-icon{
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-width: 102px;
  height: 38px;
  padding: 0 6px;
  gap: 6px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.08);

}
.css-1a5klid {
  display: inline-block;
  margin-right: 14px;
}
.css-8n6bc3 {
  vertical-align: top;
  color: #828C94;
}

.percent {
  color: rgb(24, 204, 60);;
  font-weight: 900;
}
</style>