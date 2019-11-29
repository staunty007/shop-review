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
