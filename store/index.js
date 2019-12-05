import {auth,StoreDB} from '@/services/fireinit.js'
export const strict = false
 export const state = () => ({
   user: null,
   profile: null,
   products: '',
   reviews:'',
   sellers:'',
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
   setSellers (state, payload) {
     state.sellers = payload
   }
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
   async getSellers ({commit})  {
     await StoreDB.collection('users').get().then(res => {
       const allSellers = [];
       res.forEach(doc => {
         let seller = doc.data()
         seller.id = doc.id
         allSellers.push(seller);
       })
       commit('setSellers', allSellers);
     });
   },

   async calculateRate({dispatch, getters}, payload) {
    const initRev = getters.allReviews
    initRev.push(payload);
    const getRev = initRev.filter(e => e.p_id == payload.p_id);
    const noOfRev = getRev.length;
    const newAverage = [];
    getRev.forEach(e => newAverage.push(e.rating/5));
    const getTotalRating = newAverage.reduce((a, b) => a + b, 0);
    const avgRating = Math.round((getTotalRating/noOfRev) * 5);
    console.log(avgRating);
    const data = {id: payload.p_id, rating: avgRating};
    dispatch('updateProductRating', data)
   },

   async updateProductRating({ dispatch }, data) {
    await StoreDB.collection("products").doc(data.id).update({
        "rating": data.rating
    }).then(() => dispatch('getReviews'));
   }

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
   },
   allSellers: (state) => {
     return state.sellers
   }
 };