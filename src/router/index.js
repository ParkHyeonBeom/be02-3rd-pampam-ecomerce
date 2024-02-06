import { createRouter, createWebHistory } from 'vue-router'

import VerifyPage from '@/page/VerifyPage.vue'
import LoginPage from '@/page/LoginPage.vue'
import SignUpPage from "@/page/SignUpPage.vue";
import CartPage from "@/page/CartPage.vue";
import MainPage from "@/page/MainPage.vue";
import ProductDetailPage from "@/page/ProductDetailPage.vue";
import ProductRegister from "@/page/ProductRegister.vue";
import OrderCompletePage from "@/page/OrderCompletePage.vue";
import SellerSignUpPage from "@/page/SellerSignUpPage.vue";
import SellerLoginPage from "@/page/SellerLoginPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/', component: MainPage },
        { path: '/verify', component: VerifyPage },
        { path: '/member/login', component: LoginPage },
        { path: '/seller/login', component: SellerLoginPage },
        { path: '/member/signup', component: SignUpPage },
        { path: '/seller/signup', component: SellerSignUpPage },
        { path: '/cart', component: CartPage },
        { path: '/product/:productIdx', component: ProductDetailPage },
        { path: '/product/register', component: ProductRegister },
        { path: '/order/complete', component: OrderCompletePage },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.fullPath === "/product" && sessionStorage.getItem("token") == null) {
        next("/member/login");
    } else {
        next();
    }
})

export default router;