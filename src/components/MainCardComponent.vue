<template>
  <div class="body-deadline-item-info">
    <div>
      <article class="deadline-item">
        <router-link v-bind:to="`/product/${product.idx}`">
          <a class="deadline-item-link"></a>
        </router-link>

        <div class="deadline-item-image">
          <div class="deadline-item-image-show">
            <div class="deadline-item-image-info">
              <img class="image" :src="product.filename[0]" width="220px" height="300px" alt=""/>
              <div class="deadline-item-image-dark-overlay"></div>
              <div class="deadline-item-timer">
                <div>{{timer}} 남음</div>
              </div>
            </div>
          </div>
        </div>
        <div class="deadline-item-content">
          <div>
            <h1 class="deadline-item-header">
              <span class="deadline-item-header-brand">{{ product.productName }}</span>
              <span class="deadline-item-header-name">{{ product.productInfo }}</span>
            </h1>
            <span class="deadline-item-price">
                <span class="deadline-item-price-rate">
                    {{Math.floor((product.price - product.salePrice ) / product.price  * 100)}}
                    <span class="percentage">%</span>
                </span>
                <span class="deadline-item-price-price">{{ product.salePrice }} 원</span>
            </span>
            <div>
              현재 참여 인원 <span style="font-weight: bold"> {{ product.peopleCount}}명</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainCardComponent',

  props: [
      "product"
  ],

  data() {
    return {
      timer:new Date().toLocaleTimeString(),
    }
  },

  methods: {
    update() {
      const now = new Date();	// 현재 날짜 및 시간
      const close = new Date(this.product.closeAt)
      const timeDifference  = new Date(close - now);

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      this.timer = days+"일 " + hours + ":" + minutes + ":" + seconds;
    }
  },

  mounted() {

    const now = new Date();	// 현재 날짜 및 시간
    const close = new Date(this.product.closeAt)
    const timeDifference  = new Date(close - now);

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    this.timer = days+"일 " + hours + ":" + minutes + ":" + seconds;
    setInterval(this.update, 1000);
  }
}
</script>

<style>
/* header start */

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

/* 배너, 카테고리 */
h1 {
  font-weight: inherit;
  margin: 0px;
  padding: 0px;
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

section {
  display: block;
}


/* 상품 메인 */
header {
  box-sizing: border-box;
  position: relative;
  display: block;
}
a {
  cursor: pointer;
  touch-action: manipulation;
  color: inherit;
  text-decoration: none;
}
div{
  margin: 0;
  padding: 0;
}


@media (min-width: 768px) {
  .container {
    margin-right: auto;
    margin-left: auto;
    width: calc(100% - 80px);
    max-width: 100%;
    box-sizing: border-box;
    min-height: 1px;
  }
}

@media (min-width: 375px) {
  .container {
    margin-right: auto;
    margin-left: auto;
    width: calc(100% - 30px);
    max-width: 100%;
    box-sizing: border-box;
    min-height: 1px;
  }
}

.button-color {
  background-color: #EDEDED;
  border-color: #EDEDED;
  color: #757575;
}
.button-size {
  padding: 11px 10px 12px;
  font-size: 17px;
  line-height: 20px;
}
.deadline-item-timer {
  position: absolute;
  z-index: 3;
  background-color: rgb(24, 204, 60);
  color: #fff;
  font-weight: 700;
  text-align: center;
  border-radius: 4px;
  top: 8px;
  left: 8px;
  padding: 4px;
  font-size: 13px;
  line-height: 12px;
  padding-top: 8px;
  height: 25px;
}
.deadline-item-image-dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  transition: background-color .2s;
}
.deadline-item-image-info {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 300px;
  background-color: #e7e5e5;
}
.deadline-item-image {
  position: relative;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 48%;
  -moz-box-flex: 0;
  -moz-flex: 0 0 48%;
  -ms-flex: 0 0 48%;
  flex: 0 0 48%;
  width: 48%;
}

@media (min-width: 768px) {
  .deadline-item-image {
    width: auto;
    margin: 0, -10px;
  }
}

.deadline-item {
  display: block;
  padding: 0 10px 15px;
}
.body-deadline-item-info {
  display: flex;
  position: relative;
}
.body-deadline-item-list {
  display: flex;
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-right: -7.5px;
  margin-left: -7.5px;
  justify-content: center;

}
.body-deadline-item-header {
  margin-bottom: 20px;
  display: flex;
  margin-left: auto;
}
.body-deadline-item {
  margin-right: auto;
  margin-left: auto;
  width: calc(100% - 80px);
  max-width: 100%;
  box-sizing: border-box;
  min-height: 1px;
  justify-content: center;
}
.body-deadline-item-title {
  color: #000;
  font-weight: 700;
  font-size: 20px;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 0px;
  -moz-box-flex: 1;
  -moz-flex: 1 0 0px;
  -ms-flex: 1 0 0px;
  flex: 1 0 0px;
  margin-left: 250px;
  display: block;
}
.body-deadline-item-link {
  margin-right: 260px;
  color: rgb(24, 204, 60);
  font-weight: 700;
  font-size: 15px;
  transition: opacity .1s;
  display: block;
}
.store-index-div {
  margin-top: 50px;
  /* justify-content: center; */
}
.deadline-item-content {
  display: flex;
  -webkit-box-flex: 1;
  flex: 1 0 0px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -moz-align-items: center;
  align-items: center;
}
.deadline-item-header {
  margin-top: 9px;
}
.deadline-item-header-brand {
  display: block;
  font-size: 11px;
  color: #828C94;
}
.deadline-item-header-name {
  margin-top: 5px;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  max-height: 34px;
  -webkit-line-clamp: 2;
}
.deadline-item-price {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 17px;
  line-height: 23px;
  font-weight: 700;
}
.deadline-item-price-rate {
  color: rgb(24, 204, 60);
  margin-right: 4px;
}
.percentage {
  color: rgb(24, 204, 60);
}
.deadline-item-price-price {
  color: #000;
  margin-right: 4px;
}

.deadline-item-link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.deadline-item-image-show {
  margin: 0;
  padding: 0;
}

.image {
  width: 200px;
}
</style>