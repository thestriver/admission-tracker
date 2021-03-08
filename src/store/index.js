import { createStore } from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'

// realtime firebase connection - necessary to update in real time as changes are made to the postsCollection in the database.
//orderBy helps make the newest admissions come by first
fb.admissionsCollection.orderBy('createdOn', 'desc').onSnapshot(snapshot => {
  let admissionsArray = []
  //we then take that data and atach an id that will make the lookup in the future easy.
  snapshot.forEach(doc => {
    let admissions = doc.data()
    // console.log(2, admissions)
    admissions.id = doc.id
    
    admissionsArray.push(admissions)

    
  })
  //then a mutation to commit that to state
  store.commit('setAdmissions', admissionsArray)
})


const store = createStore({
  state: {
    userProfile: {},
    getAdmissions: []
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setAdmissions(state, val) {
      state.getAdmissions = val
      // console.log(3, state.getAdmissions)
    }
  },
  actions: {
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
  
      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get()
  
      // set user profile in state
      commit('setUserProfile', userProfile.data())
      
      // change route to admin dashboard
      router.push('/admin/dashboard')
      //below replaces above
      // //ensuring when a user reloads on /settings for example it doesnt take them dashboard i.e '/'
      // if (router.currentRoute.path === '/login') {
      //   router.push('/admin/dashboard')
      // }
    },
    // SiGNUP
    async signup({ dispatch }, form) {
      // 1. You first create a user for sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
    
      //2. create user profile object in userCollections that you can thereafter manipulate
      await fb.usersCollection.doc(user.uid).set({
        name: form.name,
        title: form.title
      })
    
      //3. fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    // logout the user
    async logout({ commit }) {
      await fb.auth.signOut()
    
      // clear userProfile and redirect to /login
      commit('setUserProfile', {})
      router.push('/login')
    },
    // 
    //creating admission in firebase
    // eslint-disable-next-line no-unused-vars
    async createAdmissions({ state, commit }, admissions) {
      await fb.admissionsCollection.add({
        createdOn: new Date(),
        university: admissions.university, program: admissions.program, link: admissions.link, funding: admissions.funding,
        details: admissions.details, deadline: admissions.deadline, status: admissions.status, decision: admissions.decision,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.name,
        todos: 0
      })
    },
  },
  modules: {
  }
})


export default store;