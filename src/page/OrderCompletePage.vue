<template>
  <div class="order-container">
    <div class="content-container">
      <div class="text-with-image">
        <a href="/">
          <img src="../assets/pampam-logo.png" alt="pampam Logo">
        </a>
        <h2>주문이 완료되었습니다!</h2>
      </div>
      <hr class="line">
      <div class="order-details">
        <p>주문번호: {{order.impUid}}</p>
        <p>주문일시: {{order.orderDate}}</p>
        <p>상품 이름: {{order.productName}}</p>
        <p>총 결제금액: </p>
      </div>
      <div class="confirmation-message">
        <p>주문이 성공적으로 완료되었습니다. 감사합니다!</p>
      </div>
      <div class="additional-actions">
        <router-link to="/">
          홈으로 돌아가기
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
let backend = "http://www.localfoodpam.kro.kr/api"


export default {
  name: "OrderCompletePage",
  data() {
    return {
      order: {
        impUid: "",
        orderDate: "",
        productName: "",
        amount: 0
      }
    }
  }, methods: {
    async getOrderList() {
      let token = localStorage.getItem("accessToken");
      let response = await axios.get(backend + "/order/list", {
        headers: {
          Authorization: token
        }
      })

      let result = response.data.result;
      console.log(result[0].impUid);
      this.order.impUid = result[0].impUid;
      this.order.orderDate = result[0].orderDate;
      this.order.productName = result[0].productName;
      this.order.amount = result[0].amount;
    }
  },
  mounted() {
    this.getOrderList();
  }
}
</script>

<style>

body {
  background-color: #F9F9F9;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-bottom: 50px;
  width: 100%;
}
.order-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
  margin-right: -15px;
  margin-left: -30px;
  border-radius: 20%;
}
.order-container h2 {
  color: #333;
}
.order-container input {
  width: 100%;
  padding: 10px;
  margin-bottom: 0px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}



.content-container {
  max-width: 400px;
  width: 100%;
  text-align: center;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
}
.content-container a {
  color: #333;
  text-decoration: none;
  margin: 0 10px;
  font-size: 12px;
}

.line {
  margin-top: 20px;
  border: 1px solid #ccc;
  height: 0px;
  background-color: #C2C8CC;
}

a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s; /* 컬러 전환에 대한 트랜지션 효과 추가 */
}
a:hover {
  color: #00AB03; /* 호버 시의 컬러 변경 */
}
.order-details {
  text-align: left;
  margin-bottom: 20px;
  margin-top: 20px;
}
.order-details p {
  margin: 10px 0;
}
.confirmation-message {
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}
.additional-actions a {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 10px;
}
.additional-actions a:hover {
  background-color: #45A049;
}
</style>