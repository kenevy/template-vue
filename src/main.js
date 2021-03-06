import Vue from 'vue';
import App from './App.vue';
import router from './router/index'
import store from './store/index'

new Vue({
    el: "#app",
    router: router,
    store,
    render: h => h(App)
})