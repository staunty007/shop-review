<template>
  <div class="main-content-wrapper d-flex clearfix">

    <div class="mobile-nav">

      <div class="amado-navbar-brand">
        <a href="index.html"><img src="/guest/img/core-img/logo.jpg" style="height: 50px;" alt=""></a>
      </div>

      <div class="amado-navbar-toggler" @click="toggleSidebar">
        <span></span><span></span><span></span>
      </div>
    </div>

    <Header />

    <Nuxt />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  export default {
    components: {
      Header
    },
    methods: {
      toggleSidebar() {
        $('.header-area').toggleClass('bp-xs-on');
      }
    }
  }

</script>
<style>
  .btn-gold {
    background-color: hsl(43, 97%, 52%);
    color:#fff;
  }
  .bg-gold {
    background-color: hsl(43, 97%, 52%);
    color:#333;
  }
  .text-gold {
    color: hsl(43, 97%, 52%);
  }
</style>