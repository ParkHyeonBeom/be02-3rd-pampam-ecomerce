<template>
  <div class="login-content">
    <div class="signup-container">
      <div class="login-content-container">
        <div class="text-with-image">
          <router-link to="/">
            <img src="../../public/icon/pampam-logo.png" alt="Pampam 로고">
          </router-link>
        </div>
        <form id="loginForm" @submit.prevent>
          <input v-model="member.email" type="text" placeholder="판매자 이메일" id="이메일" required>
          <input v-model="member.password" type="password" placeholder="판매자 비밀번호" id="비밀번호" required>
          <br>
          <br>
          <button @click="login(member)">판매자 로그인</button>
        </form>
        <br>
        <div>
          <a>비밀번호 재설정</a>
          <router-link to="/member/signup">
            <a>일반 회원가입</a>
          </router-link>
          <router-link to="/seller/signup">
            <a>판매자 회원가입</a>
          </router-link>
        </div>

        <br>
        <div class="sns-buttons">
          <a href="/users/auth/facebook" class="facebook"><img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxOTAzMjlfNSAg%2FMDAxNTUzODM2ODA4MTky.-gS3ZoRn6NftLL0GUjuFUaDNRgoG9vAnH--zyNQIF1Ag.7tgGDNfnJlPGxaTGqye0f5cD0_HKnU6GNQ7wf1FbgZAg.JPEG.btf0c6dsc%2FDFGJSDF%253BLGJ%253BKJSF%253BGKLJR%253BKLDFG.gif&type=sc960_832_gif" alt="Facebook 로고"></a>
          <a href="/users/auth/kakao" class="kakao"><img src="../../public/icon/kakao.png" alt="Kakao 로고"></a>
          <a href="/users/auth/naver" class="naver"><img src="../../public/icon/naver.png" alt="Naver 로고"></a>
        </div>
        <div class="loginError">로그인에 문제가 있으신가요?</div>
        <hr class="line">
        <div class="serchOrder">저희 pampam 공동구메 서비스는 엄선된 제품만 취급합니다.</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {toRaw} from "vue";

const backend = "http://www.localfoodpam.kro.kr/se"

export default {
  name: 'LoginPage',
  data() {
    return {
      member: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    async login(member) {
      member = toRaw(member);

      const data = {
        email: member.email,
        password: member.password,
      }

      let response = await axios.post(backend + "/seller/login", data);
      console.log(response);

      localStorage.setItem("accessToken", "Bearer " + response.data.result);

      window.location.href = "http://www.localfoodpam.kro.kr"


    }
  }
}
</script>

<style>
*{
  font-family: 'GmarketSans';
}

.login-content {
  justify-content: center;
  display: flex;
}

.signup-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  width: 30%;
  text-align: center;
}

.text-with-image {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: -10px;
  color: #494949;
  font-size: 13px;
}

.text-with-image img {
  width: 130px;
  height: auto;
  margin-right: 5px;
  border-radius: 20%;
}

.signup-container input {
  width: 100%;
  padding: 10px;
  margin-bottom: 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.signup-container button {
  width: 100%;
  padding: 10px;
  background-color: #18cc3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.signup-container button:hover {
  background-color: #00ab03;
}

.login-content-container {
  text-align: center;
  margin-top: 20px;
}

.login-content-container a {
  color: #333;
  text-decoration: none;
  margin: 0 10px;
  font-size: 12px;
}

.sellerLogin{
  padding-top: 20px;
  font-size: 16px;
  color: #9E9E9E;
}
.sellerLoginA{
  text-decoration: none;
}
.sns-buttons {
  margin-top: 20px;
}

.sns-buttons a {
  display: inline-block;
  margin: 0 10px;
  padding: 10px;
  text-decoration: none;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
}

.sns-buttons .facebook {
  background-color: #3b5998;
}

.sns-buttons .kakao {
  background-color: #ffeb00;
}

.sns-buttons .naver {
  background-color: #00c63b;
}

.confortLogin {
  font-size: 11px;
  color: #696969;
  margin-top: 10px;
}

.sns-buttons img {
  width: 15px;
  height: 15px;
  margin-right: 3px;
}

.line {
  margin-top: 25px;
  border: none;
  height: 1px;
  background-color: #c2c8cc;
}

.loginError {
  font-size: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #c2c8cc;
}

.serchOrder {
  font-size: 11px;
  color: #696969;
  margin-top: 10px;
  cursor: pointer;
}

.order-search-container {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
  margin-top: 10px;
}

.order-search-container input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

</style>