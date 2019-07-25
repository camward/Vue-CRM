import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: 'AIzaSyBfls2MUbea1JSi940bkFyfCRpbapdPTIU',
  authDomain: 'itc-ads-fc854.firebaseapp.com',
  databaseURL: 'https://itc-ads-fc854.firebaseio.com',
  projectId: 'itc-ads-fc854',
  storageBucket: 'itc-ads-fc854.appspot.com',
  messagingSenderId: '200678472487'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
