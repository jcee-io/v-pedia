import Vue from 'vue'
import App from './App'
import Home from './Home';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home}
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
