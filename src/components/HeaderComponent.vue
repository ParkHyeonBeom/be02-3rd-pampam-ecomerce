<template>
  <header>
  <div class="header-container">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/pampam-logo.png" width="130px" height="80px" alt="">
      </router-link>
    </div>
    <div class="center">
      <div class="center-first">
        <p style="font-size:17px;">커뮤니티</p>
      </div>
      <div class="center-second">
        <p style="font-size:17px; color:rgb(24, 204, 60) ;">쇼핑</p>
      </div>
      <div class="center-third">
        <p style="font-size:17px;">인테리어/생활</p>
      </div>
    </div>
    <div class="right">
      <div class="right-search">
        <div class="right-search-left">
          <img src="../assets/search.png" width="30px" height="30px">
        </div>
        <div class="right-search-right">
          <p style="font-size: 15px; color:gainsboro">쇼핑검색</p>
        </div>
      </div>
      <div class="right-cart">
        <router-link to="/cart">
          <img src="../assets/cart.jpeg" width="45px" height="45px">
<!--          <font-awesome-icon icon="cart-shopping" />-->
        </router-link>
      </div>
      <div class="right-login">
        <router-link to="/member/login">
          <a v-show="token.authority === undefined" href="/member/login">로그인</a>
        </router-link>
        <a v-show="token.authority !== undefined" href="/" @click="logOut"> 로그아웃 </a>
      </div><br>
      <div class="right-signup">
        <router-link to="/member/signup">회원가입</router-link>
      </div>
      <div class="right-customercenter">
        <a href="https://www.naver.com/">고객센터</a>
      </div>
      <div v-show="token.authority === 'SELLER'" class="right-postWrite">
        <router-link to="/product/register">
          <button class="mybutton" style="background-color:rgb(24, 204, 60); border-color: rgb(30, 199, 64); border-width: 1px; width: 91px; height: 45px;">상품 등록</button>
        </router-link>
      </div>
    </div>
  </div>
  <div class="header-sub">
    <div class="header-shoppingHome">
      <p class="basic" style="font-size: 14px;">쇼핑홈</p>
    </div>
    <div class="header-category">
      <p class="basic" style="font-size: 14px;">카테고리</p>
    </div>
    <div class="header-best">
      <p class="basic" style="font-size: 14px;">베스트</p>
    </div>
    <div class="header-todayDeal">
      <p class="basic" style="font-size: 14px;">오늘의딜</p>
    </div>
    <div class="header-market">
      <p class="basic" style="font-size: 14px;">리퍼마켓</p>
    </div>
    <div class="header-good">
      <p class="basic" style="font-size: 14px;">오!굿즈</p>
    </div>
    <div class="header-delivery">
      <p class="basic" style="font-size: 14px;">빠른배송</p>
    </div>
    <div class="header-room">
      <p class="basic" style="font-size: 14px;">오!쇼룸</p>
    </div>
    <div class="header-premium">
      <p class="basic" style="font-size: 14px;">프리미엄</p>
    </div>
    <div class="header-event">
      <p class="basic" style="font-size: 14px;">기획전</p>
    </div>
  </div>
  </header>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: 'HeaderComponent',
  data() {
    return {
      token: {}
    }
  },
  methods: {
    async showData() {
      let token = localStorage.getItem("accessToken")
      token = VueJwtDecode.decode(token.split(" ")[1]);
      console.log(token);
      if (token.authority === 'SELLER') {
        console.log("ok");
      }
      return this.token = token;

    },
    logOut() {
      localStorage.clear();
    }
  },
  mounted() {
    this.showData();
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

.header-container{
  height: 80.75px;
  flex-direction: row;
  display: flex;
  margin-left: 105px;
}

.logo{
  width: 100px;
  height: 90px;
  margin-left: 30px;
  margin-right:30px;
}

.center{

  display: flex;
  flex-direction: row;
  width : 450px;
  height: 80.75px;
}

.center-first{
  width : 100px;
  height : 80.75px;;
  margin-left: -10px;
  margin-top: 15px;
}

.center-second{
  width : 100px;
  height : 80.75px;;
  margin-left: -18px;
  margin-top: 15px;
}

.center-third{
  width : 120px;
  height : 80.75px;;
  margin-left: -15px;
  margin-top: 15px;
}


.right{
  display: flex;
  flex-direction: row;
  width : 1350px;
  height: 80.75px;
}

.right-search{
  width : 300px;
  height : 45px   ;
  margin-left: 73px;
  margin-top: 18px;
  border: 1px solid #DADDE0;
}

.right-search-left{
  margin-left: 5px;
  margin-top: 8px;
}

.right-search-right{
  margin-top: -42px;
  margin-left: -75px;
}

.right-cart{
  width : 30px;
  height : 30px;
  margin-left: 15px;
  margin-top: 18px;
}

.right-login{
  width : 70px;
  height : 30px;
  margin-left: 25px;
  margin-top: 28px;
  padding-left: 8px;
}

.right-logout{
  width : 60px;
  height : 30px;
  margin-left: 15px;
  margin-top: 28px;
}

.right-signup{
  width : 60px;
  height : 30px;
  margin-left: 15px;
  margin-top: 28px;
}

.right-customercenter{
  width : 60px;
  height : 30px;
  margin-left: 15px;
  margin-top: 28px;
}

.right-postWrite{
  margin-left: 30px;
  margin-top: 17px;
}

.mybutton{
  color:white; /* 원하는 색상으로 설정 */
  text-align: center;
  border-radius: 5px 5px 5px 5px;
  margin-left: -15px;
}

.mybutton:hover{
  background-color: #00ab03;
}

.header-sub{
  border-top:1px solid gainsboro;
  height: 80.75px;
  flex-direction: row;
  display: flex;
  font-weight: 200;
}

.header-shoppingHome{
  width : 100px;
  height : 80.75px;;
  margin-left: 145px;
  margin-top: 15px;
}
.header-category{
  width : 100px;
  height : 80.75px;;
  margin-left: -33px;
  margin-top: 15px;
}
.header-best{
  width : 100px;
  height : 80.75px;;
  margin-left: -33px;
  margin-top: 15px;
}
.header-todayDeal{
  width : 100px;
  height : 80.75px;;
  margin-left: -33px;
  margin-top: 15px;
}
.header-market{
  width : 100px;
  height : 80.75px;;
  margin-left: -22px;
  margin-top: 15px;
}
.header-good{
  width : 100px;
  height : 80.75px;
  margin-left: -25px;
  margin-top: 15px;
}
.header-delivery{
  width : 100px;
  height : 80.75px;;
  margin-left: -25px;
  margin-top: 15px;
}
.header-room{
  width : 100px;
  height : 80.75px;;
  margin-left: -25px;
  margin-top: 15px;
}
.header-premium{
  width : 100px;
  height : 80.75px;;
  margin-left: -25px;
  margin-top: 15px;
}
.header-event{
  width : 100px;
  height : 80.75px;;
  margin-left: -25px;
  margin-top: 15px;
}
</style>