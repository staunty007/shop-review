<template>
  <header class="header-area clearfix">

    <div class="nav-close" @click="closeSidebar">
      <i class="fa fa-close" aria-hidden="true"></i>
    </div>

    <div class="logo">
      <nuxt-link to="/"><img src="/guest/img/core-img/logo.png" alt=""></nuxt-link>
    </div>

    <nav class="amado-nav">
      <ul>
        <li class="active">
          <nuxt-link to="/" class="font-weight-bold">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/shop" class="font-weight-bold">Shop</nuxt-link>
        </li>
        <div v-if="user==null">
          <li>
            <nuxt-link to="/login" class="font-weight-bold">Login</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/register" class="font-weight-bold">Register</nuxt-link>
          </li>
        </div>
        <div v-else>
          <li>
            <nuxt-link to="/product" class="font-weight-bold">Add Product</nuxt-link>
          </li>
          <li><nuxt-link to="/store" class="font-weight-bold">{{ user.profile.name ? user.profile.name : user.email }}</nuxt-link></li>
          <li><a href="#" @click="logoutUser" class="font-weight-bold">LOGOUT</a></li>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    methods: {
      logoutUser() {
        this.$store.dispatch("signOut");
      },
      closeSidebar() {
        $('.header-area').removeClass('bp-xs-on');
      }
    },
    computed: {
      user() {
        return this.$store.getters.activeUser
      }
    },
  }

</script>

<style scoped>
  .amado-nav ul li {
    font-weight: bold;
  }

</style>
