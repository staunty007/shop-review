<template>
  <div class="main-content-wrapper d-flex clearfix">

    <div class="mobile-nav">

      <div class="amado-navbar-brand">
        <a href="index.html"><img src="/guest/img/core-img/logo.png" alt=""></a>
      </div>

      <div class="amado-navbar-toggler">
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
    }
  }

</script>