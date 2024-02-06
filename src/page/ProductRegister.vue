<template>
  <HeaderComponent/>
  <div class="product-container">
    <form id="product-Register-Form">
      <div class="insertImg">
        <h5>상품 사진</h5>
        <div class="seller-img">
          <div>
            <span>버튼을 클릭하여 사진을 업로드 해주세요.</span> <br>
            <span>최대 5장까지 올릴 수 있어요.</span> <br><br>
            <div class="file-input-btn">
              <v-file-input v-model="file" bg-color="#18cc3c" counter multiple label="PC에서 불러오기"></v-file-input>
            </div>
          </div>
        </div>
      </div>
      <div class="insertEmail"><h5>상품 이름</h5></div>
      <input class="product-container-input" type="text" placeholder="상품 이름" id="상품이름" required v-model="product.productName">
      <br>

      <div class="insertpassword"><h5>상품 원가</h5></div>
      <div class="insertpassword2">상품이 판매되는 원가를 입력해주세요.</div>
      <input class="product-container-input" type="text" placeholder="상품 원가" id="상품 원가" required v-model="product.price">
      <br>

      <div class="insertcheck"><h5>상품의 할인된 가격</h5></div>
      <div class="insertpassword2">공동구매를 통해 판매하게 될 상품의 할인된 가격을 입력해주세요.</div>
      <input class="product-container-input" type="text" placeholder="상품의 할인된 가격" id="상품의 할인된 가격" required v-model="product.salePrice">
      <br>

      <div class="insertcheck"><h5>상품 카테고리</h5></div>
      <div class="insertpassword2">등록하려는 상품의 카테고리를 선택해주세요.</div>
      <div class="select-category">
        <select v-model="category2">
          <option  v-for="(category, index) in categoryList" :key="index" :value="category.value">{{ category.name }}</option>
          <div> {{category2}}</div>
        </select>
      </div>
      <br>

      <div class="insertnick"><h5>상품 정보</h5></div>
      <div class="insertnick2">상품의 설명을 상세히 적어주세요.</div>
      <textarea placeholder="상품 정보" id="상품 정보" required v-model="product.productInfo"/>
      <br>

      <div class="insertnick"><h5>공동구매 마감 시간 </h5></div>
      <div class="insertnick2">공동구매 마감 시간을 설정해주세요.</div>
      <VueDatePicker :format="resultDate" v-model="deadLine" range max-range="7" placeholder="마감 시간 설정"/>
      <br>
    </form>
    <div class="insertnick"><h5>공동구매 참여 인원 수 </h5></div>
    <div class="insertnick2">모집할 공동구매 인원을 입력해주세요.</div>
    <div class="count-people">
      <input class="people-count-input" placeholder="공동구매 참여 인원 수" id="공동구매 참여 인원 수" required v-model="product.people">
      <div class="css-1qi5uc2">
        <button class="people-count-btn-base people-count-button-up" @click="countUp">UP</button>
        <button class="people-count-btn-base people-count-button-down" @click="countDown">DOWN</button>
      </div>
    </div>
    <br>
    <button type="submit" class="product-container-button" @click="register">상품 등록하기</button>
  </div>
<FooterComponent/>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import VueDatePicker from '@vuepic/vue-datepicker';

import '@vuepic/vue-datepicker/dist/main.css'
import axios from "axios";


export default {
  name: "ProductRegisterPage",
  computed: {
  },
  data() {
    return {
      categoryList: [
        { name: "카테고리를 선택해주세요", value: 0},
        { name: "채소", value: 1},
        { name: "곡류", value: 2},
        { name: "견과류", value: 3},
        { name: "버섯류", value: 4},
        { name: "과일", value: 5},
        { name: "수산", value: 6},
        { name: "건어물", value: 7},
        { name: "정육", value: 8},
        { name: "유제품", value: 9},
        { name: "주류", value: 10}
      ],
      category2: "",
      product: {
        productName: "",
        price: 0,
        salePrice: 0,
        productType: 0,
        productInfo: "",
        people: 2,
        startAt: {},
        closeAt: {},
      },
      file: [],
    }
  },
  components: {FooterComponent, HeaderComponent, VueDatePicker},
  methods: {
    async register() {
      this.product.productType = this.category2;

      console.log(this.file[0]);
      console.log(this.file[1]);

      console.log(this.product);

      const formData = new FormData();
      formData.append("productRegisterReq", new Blob([JSON.stringify(this.product)], {type: "application/json"}));
      this.file.forEach((fileInfo) => {
        formData.append("images", fileInfo);
      })
      console.log(formData.get("productRegisterReq"));
      console.log(formData.get("images"));

      let response = await axios.post("http://localhost:8080/product/register", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: localStorage.getItem("accessToken")
        }
      });

      console.log(response.data);
    },

    countUp() {
      if (this.product.people < 10) {
        this.product.people++;
      } else {
        this.product.people;
      }
    },

    countDown() {
      if (this.product.people > 2) {
        this.product.people--;
      } else {
        return 2;
      }
    },

    resultDate(date) {
      console.log(date[0]);
      console.log(date[1]);
      this.product.startAt = date[0];
      this.product.closeAt = date[1];
    }
  }
}
</script>

<style>
*{
  font-family: 'GmarketSans';
}

body {
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-bottom: 50px;
  width: 100%;
}

.product-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  width: 40%;
  text-align: center;
  margin-top: 20px; /* 이미지와 로고에 겹치지 않도록 여백 추가 */
  margin: 0 auto;
}

.text-with-image img {
  width: 130px;
  height: auto;
  margin-right: 5px;
  border-radius: 20%;
}

.product-container h2 {
  color: #333;
}

.product-container-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 0px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.product-container textarea {
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-bottom: 0px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.product-container-button {
  width: inherit;
  padding: 10px;
  background-color: #18cc3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.people-count-button-up {
  width: inherit;
  padding: 10px;
  background-color: #18cc3c;
  color: #fff;
  border: none;
  border-radius: 14px 14px 0 0;
  cursor: pointer;
}

.people-count-button-down {
  width: inherit;
  padding: 10px;
  background-color: #18cc3c;
  color: #fff;
  border: none;
  border-radius: 0 0 14px 14px;
  cursor: pointer;
}

.product-container button:hover {
  background-color: #00ab03;
}

.content-container a {
  color: #333;
  text-decoration: none;
  margin: 0 10px;
  font-size: 12px;
}


.insertImg{
  text-align: left;
  margin-top: -30px;
  margin-bottom: -15px;
  font-size: 15px;
  color: #494949;
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

.count-people {
  display: flex;

}

.people-count-btn-base {
  display: inline-block;
  width: 34px;
  height: 34px;
  -webkit-background-size: 34px 68px;
  background-size: 34px 68px;
  -webkit-background-position: 0 0;
  background-position: 0 0;
  overflow: hidden;
  line-height: 100em;
  border: 1px solid #ffffff;
}

.css-1qi5uc2 {
  z-index: 5;
  right: 10px;
  bottom: 80px;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}

.people-count-input {
  width: 26%;
  padding: 10px;
  margin-bottom: 0px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.select-category {
  margin-right: 450px;
}

.file-input-btn {
  margin-top: 15px;
  width: 200px;
  text-align: center;
}

</style>