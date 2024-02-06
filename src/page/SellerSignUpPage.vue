<template>
  <div class="signup-content">
    <div class="signup-container">
      <div class="signup-content-container">
        <div class="text-with-image">
          <router-link to="/">
            <img src="../../public/icon/pampam-logo.png" alt="Pampam 로고">
          </router-link>
        </div>
        <br>
        <div>
          <div class="signupfont"><h3>판매자 회원가입</h3></div>
        </div>
        <br>
        <div class="confortLogin">
          SNS계정으로 간편 회원가입 <br>
          현재는 운영상 카카오톡 회원가입만 가능합니다.
        </div>
        <div class="sns-buttons">
          <a href="/users/auth/kakao" class="kakao"><img src="../../public/icon/kakao.png" alt="Kakao 로고"></a>
        </div>
        <hr class="line">
      </div>
      <div class="insertImg">
        <h5>회원 사진</h5>
        <div class="seller-img">
          <div>
            <span class="seller-img-input-info">
              버튼을 클릭하여 사진을 업로드 해주세요. <br>
              (프로필 사진은 한 장만 가능합니다.)
            </span>
            <div class="file-input-btn">
              <v-file-input v-model="file" base-color="white" bg-color="#18cc3c" clearable label="PC에서 불러오기" variant="solo-filled"></v-file-input>
            </div>
          </div>
        </div>
      </div>
      <br>
      <form id="signupForm">
        <div class="insertEmail"><h5>이메일</h5></div>
        <input v-model="member.email" type="email" placeholder="이메일" id="이메일" autofocus required>
        <br>
        <div class="emailAuth">
          <button class="emailAuth" name="emailAuth" type="button">이메일 중복검사</button>
        </div>

        <div class="insertpassword"><h5>비밀번호</h5></div>
        <div class="insertpassword2">영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</div>
        <input v-model="member.sellerPW" type="password" placeholder="비밀번호 입력" required>
        <br>

        <div class="insertcheck"><h5>전화번호</h5></div>
        <input v-model="member.sellerPhoneNum" type="tel" placeholder="전화번호 입력('-'도 포함해서 입력해주세요.)" pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}" required>
        <br>

        <div class="insertnick"><h5>회원 이름</h5></div>
        <div class="insertnick2">최소 2자에서 최대 20자까지 가능합니다.</div>
        <input v-model="member.sellerName" type="text" placeholder="이름 (2~20자)" required>
        <br>

        <div class="insertnick"><h5>사업자 등록 번호</h5></div>
        <div class="insertnick2">사업자 번호를 정확하게 기입해주세요. (10자)</div>
        <input v-model="member.sellerBusinessNumber" type="text" placeholder="사업자 등록 번호 ('-'를 포함하여 10자를 입력해주세요.)" id="사업자 등록 번호" pattern="[0-9]{3}-{2}-{5}" required>
        <br>

        <div class="consent-container">
          <label class="consent-label"><h5>약관동의</h5></label>
          <div class="consent-options">
            <div class="consent-option">
              <label class="checkbox-label">
                <div class="checkbox-wrapper">
                  <div class="check-icon"><span class="_check_12"></span></div>
                  <input type="checkbox" value="false" field="[object Object]" name="agreeAll" class="checkbox-input">
                </div>
                <span class="consent-text">
                    <h4>전체동의<span class="additional-consent"> &nbsp; 선택항목에 대한 동의 포함</span></h4>
                </span>
              </label>
            </div>
            <hr class="consent-divider">
            <div class="consent-option">
              <label class="checkbox-label">
                <div class="checkbox-wrapper">
                  <div class="check-icon"><span class="_check_12"></span></div>
                  <input type="checkbox" value="false" field="[object Object]" name="agree1" class="checkbox-input">
                </div>
                <span class="consent-text" required>만 14세 이상입니다 (필수)</span>
              </label>
            </div>
            <div class="consent-option">
              <label class="checkbox-label">
                <div class="checkbox-wrapper">
                  <div class="check-icon"><span class="_check_12"></span></div>
                  <input type="checkbox" value="false" field="[object Object]" name="agree2" class="checkbox-input">
                </div>
                <span class="consent-text" required>이용약관 (필수)</span>
                <a target="_blank" href="/usepolicy" class="external-link"><span class="_chevron_right_18"></span></a>
              </label>
            </div>
            <div class="consent-option">
              <label class="checkbox-label">
                <div class="checkbox-wrapper">
                  <div class="check-icon"><span class="_check_12"></span></div>
                  <input type="checkbox" value="false" field="[object Object]" name="agree3" class="checkbox-input">
                </div>
                <span class="consent-text" required>개인정보수집 및 이용동의 (필수)</span>
                <a target="_blank" href="/privacy?type=register" class="external-link"><span class="_chevron_right_18"></span></a>
              </label>
            </div>
            <div class="consent-option">
              <label class="checkbox-label">
                <div class="checkbox-wrapper">
                  <div class="check-icon"><span class="_check_12"></span></div>
                  <input type="checkbox" value="false" field="[object Object]" name="agreeMarketUsage" class="checkbox-input">
                </div>
                <span class="consent-text">개인정보 마케팅 활용 동의 (선택)</span>
                <a target="_blank" href="/privacy?type=register_marketing" class="external-link"><span class="_chevron_right_18"></span></a>
              </label>
            </div>
            <div class="consent-option">
              <label class="checkbox-label">
                <div class="checkbox-wrapper">
                  <div class="check-icon"><span class="_check_12"></span></div>
                  <input type="checkbox" value="false" field="[object Object]" name="agreePromotion" class="checkbox-input">
                </div>
                <span class="consent-text">이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신 (선택)
                    <div class="selection"></div></span>
              </label>
            </div>
          </div>
        </div>
        <br>
        <router-link to="/verify">
          <button @click="signUp" type="submit">회원 가입하기</button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>

import axios from "axios";

const backend = "http://www.localfoodpam.kro.kr/se"

export default {
  name: 'SignUpPage',
  data() {
    return {
      member: {
        email: "",
        sellerPW: "",
        sellerName:"",
        sellerPhoneNum: "",
        sellerBusinessNumber: ""
      },
      file: ""
    }
  },
  methods: {
    async signUp() {
      console.log(this.member);

      const formData = new FormData();
      formData.append("request", new Blob([JSON.stringify(this.member)], {type: "application/json"}));
      formData.append("file", this.file[0]);
      let response = await axios.post(backend + "/seller/signup", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(response);

      if (response.data.code === 1000) {
        alert(response.data.message);
      }

      if (response.data.code === 3000) {
        alert(response.data.message);
      }
    },
  },
  components: {},
}
</script>

<style>
@font-face {
  font-family: 'GmarketSans';
  font-weight: 300;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansLight.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansLight.eot?#iefix') format('embedded-opentype'),
  url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansLight.woff2') format('woff2'),
  url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansLight.woff') format('woff'),
  url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansLight.ttf') format("truetype");
  font-display: swap;
}
@font-face {
  font-family: 'GmarketSans';
  font-weight: 500;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.eot?#iefix') format('embedded-opentype'),
  url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.woff2') format('woff2'),
  url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.woff') format('woff'),
  url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.ttf') format("truetype");
  font-display: swap;
}
@font-face {
  font-family: 'GmarketSans';
  font-weight: 700;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.eot?#iefix') format('embedded-opentype'),
  url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.woff2') format('woff2'),
  url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.woff') format('woff'),
  url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.ttf') format("truetype");
  font-display: swap;
}

*{
  font-family: 'GmarketSans';
}

body {
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-bottom: 50px;
  width: 100%;
}

.insertImg{
  text-align: left;
  margin-top: 0;
  margin-bottom: -15px;
  font-size: 15px;
  color: #494949;
}

.seller-img{
  height: 300px;
  background-color: rgb(227, 228, 228);
  border-radius: 10px;
  margin-bottom: 50px;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
}

.product-container-button {
  width: inherit;
  padding: 10px;
  background-color: #18cc3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.signup-content {
  justify-content: center;
  display: flex;
}

.signup-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  width: 40%;
  text-align: center;
  margin-top: 20px; /* 이미지와 로고에 겹치지 않도록 여백 추가 */
}

.text-with-image {
  display: flex;
  align-items: center;
  margin-bottom: 0px;
  text-align: center;
  top: 15px; /* 화면 상단에 정렬 */
  left: 10px; /* 화면 왼쪽에 정렬 */
  padding: 0px; /* 간격 조절 */
  z-index: 1000; /* 다른 요소들보다 위에 표시되도록 설정 */
  color: #494949;
  font-size: 14px;
  justify-content: center;
}

.text-with-image img {
  width: 130px;
  height: auto;
  margin-right: 5px;
  border-radius: 20%;
}

.signup-container h2 {
  color: #333;
}

.signup-container input {
  width: 100%;
  padding: 10px;
  margin-bottom: 0px;
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

.signup-content-container{
  text-align: center;
  margin-top: 20px;
}

.signup-content-container a {
  color: #333;
  text-decoration: none;
  margin: 0 10px;
  font-size: 12px;
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
  margin-top: 0px;
  margin-bottom: -7px;
}

.sns-buttons img {
  width: 15px;
  height: 15px;
  margin-right: 3px;
}

.insertEmail {
  text-align: left;
  margin-top: -30px;
  margin-bottom: -15px;
  font-size: 15px;
  color: #494949;
}

.insertpassword {
  text-align: left;
  margin-bottom: -15px;
  font-size: 15px;
  color: #494949;
}

.insertpassword2 {
  text-align: left;
  margin-bottom: 5px;
  font-size: 10px;
  color: #494949;
}
.insertcheck {
  text-align: left;
  margin-bottom: -15px;
  font-size: 15px;
  color: #494949;
}

.insertnick {
  text-align: left;
  margin-bottom: -15px;
  font-size: 15px;
  color: #494949;
}

.insertnick2 {
  text-align: left;
  margin-bottom: 5px;
  font-size: 10px;
  color: #494949;
}

.signupfont {
  text-align: center;
  font-size: 14px;
  color: #494949;
}

.line {
  margin-top: 20px;
  border: none;
  height: 1px;
  background-color: #c2c8cc;
}

.emailAuth {
  margin-top: 4px;
  padding: 0px;
}

.emailAuth button {
  width: 100%;
  padding: 10px;
  background-color: rgb(247, 248, 250);
  color: rgb(194, 200, 204);
  border-color: rgb(218, 220, 224);
  border: solid 1px;
  border-radius: 4px;
  cursor: pointer;
}

.emailAuth button:hover {
  background-color: #00ab03;
}

.consent-label {
  display: flex;
  align-items: center;
  text-align: left;
  margin-bottom: -10px;
  font-size: 15px;
  color: #494949;
}

.consent-options {
  border: 1px solid #ccc; /* Add border to wrap the consent options */
  padding: 10px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  text-align: left;
}

.checkbox-wrapper {
  width: 20px; /* Set the width of the checkbox wrapper */
  height: 20px; /* Set the height of the checkbox wrapper */
  border: 1px solid #ccc; /* Add border to create a box */
  margin-right: 10px; /* Add margin to separate the box from text */
  display: flex;
  align-items: center;
  justify-content: center;
}

.consent-text {
  font-size: 11px;
  color: #494949;
}

.additional-consent {
  font-size: 9px;
  opacity: 0.7; /* 연하게 만들기 위한 투명도 조절 */
}

.file-input-btn {
  margin-top: 15px;
  width: 200px;
  text-align: center;
}

.seller-img-input-info {
  text-align: center;
}

</style>