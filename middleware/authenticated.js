export default function ({ store, redirect, route }) {
    store.state.user != null && route.name == 'login'  ? redirect('/product') : ''
    store.state.user != null && route.name == 'register'  ? redirect('/product') : ''
    store.state.user == null && isUserRoute(route) ? redirect('/login') : ''
  }
  
  function isUserRoute(route) {
    if (route.matched.some(record => record.path == '/product')) {
      return true
    }
  }