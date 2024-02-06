<template>
  <header>
    <div class="header-container">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/pampam-logo.png" width="130px" height="80px" alt="">
        </router-link>
      </div>
      <div class="center">
      </div>
      <div class="right">
        <div class="right-cart">
          <router-link to="/cart">
            <i style="padding-top: 11px;" class="fa-solid fa-cart-shopping"></i>
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

        <div v-show="token.authority === 'SELLER'" class="right-postWrite">
          <router-link to="/product/register">
            <button class="mybutton" style="background-color:rgb(24, 204, 60); border-color: rgb(30, 199, 64); border-width: 1px; width: 91px; height: 45px;">상품 등록</button>
          </router-link>
        </div>
      </div>
    </div>
    <div style="align-content: center" class="header-sub">
      <div class="header-shoppingHome">
        <p class="basic" style="font-size: 14px;">쇼핑홈</p>
      </div>
      <div class="header-category">
        <p class="basic" style="font-size: 14px;">카테고리</p>
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
  width : 700px;
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
  padding-left: 45%;
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

</style>