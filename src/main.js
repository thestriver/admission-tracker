import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'
import './index.css'

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";


// createApp(App).use(store).use(router).mount('#app')
let app


//Add to use this because it was the only way it worked with the new Vue 3.
auth.onAuthStateChanged(user => {
    // createApp(App).use(router, store).mount('#app')
    if (!app) {
        //if you dont app.use to the below it wont work and this.$store dispatch will be undefined
        app = createApp(App)
          app.use(store)
          app.use(router)
          app.mount('#app')
    }
    // if (!app) {
    //         app = createApp({
    //           router,
    //           store,
    //           render: h => h(App)
    //         }).$mount('#app')
    
    //maintains the user logic state on reload
    if (user) {
        store.dispatch('fetchUserProfile', user)
      }
})

