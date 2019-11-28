<template>
  <header class="header-area clearfix">

    <div class="nav-close">
      <i class="fa fa-close" aria-hidden="true"></i>
    </div>

    <div class="logo">
      <nuxt-link to="/"><img src="/guest/img/core-img/logo.png" alt=""></nuxt-link>
    </div>

    <nav class="amado-nav">
      <ul>
        <li class="active"><nuxt-link to="/" class="font-weight-bold">Home</nuxt-link></li>
        <li><nuxt-link to="/shop" class="font-weight-bold">Shop</nuxt-link></li>
        <li><nuxt-link to="/product" class="font-weight-bold">Product</nuxt-link></li>
        <li><a href="cart.html" class="font-weight-bold">Cart</a></li>
        <li><a href="checkout.html" class="font-weight-bold">Checkout</a></li>
      </ul>
    </nav>

    <div class="amado-btn-group mt-30 mb-100">
      <a href="#" class="btn amado-btn mb-15">%Discount%</a>
      <a href="#" class="btn amado-btn active">New this week</a>
    </div>

    <div class="cart-fav-search mb-100">
      <a href="cart.html" class="cart-nav"><img src="/guest/img/core-img/cart.png" alt=""> Cart <span>(0)</span></a>
      <a href="#" class="fav-nav"><img src="/guest/img/core-img/favorites.png" alt=""> Favourite</a>
      <a href="#" class="search-nav"><img src="/guest/img/core-img/search.png" alt=""> Search</a>
    </div>

    <div class="social-info d-flex justify-content-between">
      <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
      <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
      <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
      <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
    </div>
  </header>
</template>

<script>
  export default {

  }

</script>

<style scoped>
.amado-nav ul  li {
    font-weight: bold;
}
</style>
