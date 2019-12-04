import {auth,StoreDB} from '@/services/fireinit.js'
export const strict = false
 export const state = () => ({
   user: null,
   profile: null,
   products: '',
   reviews:'',
 });
 
 export const mutations = {
   setUser (state, payload) {
     state.user = payload
   },
   setProfile (state, payload) {
     state.profile = payload
   },
   setProducts (state, payload) {
     state.products = payload
   },
   setReviews (state, payload) {
     state.reviews = payload
   },
 };
 
 export const actions = {
   autoSignIn ({commit, dispatch}, user) {
     StoreDB.collection('users').doc(user.uid).get().then(doc => {
       console.log(doc.data())
      commit('setProfile', doc.data());
     })
     commit('setUser', JSON.parse(JSON.stringify(user)))
     console.log(JSON.parse(JSON.stringify(user)))
   },
   
   signUpWithEmail({dispatch}, payload) {
     dispatch('autoSignIn', payload.user)
     console.log(payload.user);
     //$nuxt.$router.push('/app');
   },
 
   signInWithEmail({dispatch}, payload) {
     dispatch('autoSignIn', payload.user)
      console.log(payload.user);
      $nuxt.$router.push('/product');
   },
 
   signOut ({commit}) {
     auth.signOut().then(() => {
       commit('setUser', null)
       commit('setProfile', null)
       $nuxt.$router.push('/login');
     }).catch(err => console.log(error))
   },
 
   async getProducts ({commit})  {
     await StoreDB.collection('products').get().then(res => {
       const allProducts = [];
       res.forEach(doc => {
         let product = doc.data()
         product.id = doc.id
         allProducts.push(product);
       })
       commit('setProducts', allProducts);
     });
   },
   async getReviews ({commit})  {
     await StoreDB.collection('reviews').get().then(res => {
       const allReviews = [];
       res.forEach(doc => {
         let review = doc.data()
         review.id = doc.id
         allReviews.push(review);
       })
       commit('setReviews', allReviews);
     });
   },

 };
 
 export const getters = {
   activeUser: (state) => {
     const nUser = state.user
     nUser != null ?  nUser.profile = state.profile : state.user
     return nUser
   },
   allProducts: (state) => {
     return state.products
   },
   allReviews: (state) => {
       return state.reviews
   }
 };