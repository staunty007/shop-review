<template>
  <div class="amado_product_area">
    <div class="container-fluid">
      <div class="row mt-1">

        <div class="col-12 col-sm-6 col-md-6 col-xl-3">
          <div class="single-product-wrapper">

            <div class="product-img">
              <img src="/guest/img/pro-img/4.jpg" style="height: 250px;" alt="">
            </div>

            <div class="product-description d-flex align-items-center justify-content-between">

              <div class="product-meta-data">
                <a href="#">
                  <h6 class="text-dark text-uppercase">girls-striped-dress</h6>
                </a>
              </div>


            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-6 col-xl-3">
          <div class="single-product-wrapper">

            <div class="product-img">
              <img src="/guest/img/pro-img/5.jpg" style="height: 250px;" alt="">
            </div>

            <div class="product-description d-flex align-items-center justify-content-between">

              <div class="product-meta-data">
                <a href="#">
                  <h6 class="text-dark text-uppercase">necklace-detail</h6>
                </a>
              </div>


            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-6 col-xl-3">
          <div class="single-product-wrapper">

            <div class="product-img">
              <img src="/guest/img/pro-img/6.jpg" style="height: 250px;" alt="">
            </div>

            <div class="product-description d-flex align-items-center justify-content-between">

              <div class="product-meta-data">
                <a href="#">
                  <h6 class="text-dark text-uppercase">toddler-tuxedo-onesie</h6>
                </a>
              </div>


            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-6 col-xl-3">
          <div class="single-product-wrapper">

            <div class="product-img">
              <img src="/guest/img/pro-img/1.jpg" style="height: 250px;" alt="">
            </div>

            <div class="product-description d-flex align-items-center justify-content-between">

              <div class="product-meta-data">
                <a href="#">
                  <h6 class="text-dark text-uppercase">black-choker-necklace</h6>
                </a>
              </div>


            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-xl-3">
          <div class="single-product-wrapper">

            <div class="product-img">
              <img src="/guest/img/pro-img/7.jpg" style="height: 250px;" alt="">
            </div>

            <div class="product-description d-flex align-items-center justify-content-between">

              <div class="product-meta-data">
                <a href="#">
                  <h6 class="text-dark text-uppercase">lace-edge-summer-dress</h6>
                </a>
              </div>


            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-xl-3">
          <div class="single-product-wrapper">

            <div class="product-img">
              <img src="/guest/img/pro-img/8.jpg" style="height: 250px;" alt="">
            </div>

            <div class="product-description d-flex align-items-center justify-content-between">

              <div class="product-meta-data">
                <a href="#">
                  <h6 class="text-dark text-uppercase">kids-fashion-jeans</h6>
                </a>
              </div>


            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-xl-3">
          <div class="single-product-wrapper">

            <div class="product-img">
              <img src="/guest/img/pro-img/9.jpg" style="height: 250px;" alt="">
            </div>

            <div class="product-description d-flex align-items-center justify-content-between">

              <div class="product-meta-data">
                <a href="#">
                  <h6 class="text-dark text-uppercase">pocket-watch-on-black</h6>
                </a>
              </div>


            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-xl-3">
          <div class="single-product-wrapper">

            <div class="product-img">
              <img src="/guest/img/pro-img/3.jpg" style="height: 250px;" alt="">
            </div>

            <div class="product-description d-flex align-items-center justify-content-between">

              <div class="product-meta-data">
                <a href="#">
                  <h6 class="text-dark text-uppercase">gathered-summer-dress</h6>
                </a>
              </div>


            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {
    StoreDB
  } from '@/services/fireinit.js'
  export default {
    data() {
      return {
        products: ''
      }
    },
    mounted() {
      if (navigator.onLine) {
        this.$store.dispatch('getProducts')
        this.$store.dispatch('getReviews')
        this.$store.dispatch('getSellers')
      }
    },
    computed: {
      user() {
        return this.$store.getters.activeUser;
      },
    }
  }

</script>

<style scoped>
  .main-content-wrapper .amado_product_area {
    flex: 0 0 calc(95% - 280px);
    width: calc(95% - 280px);
    max-width: calc(95% - 280px);
  }

  @media only screen and (max-width: 767px) {
    .main-content-wrapper .amado_product_area {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      width: 100%;
      max-width: 100%;
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
      padding-top: 50px;
    }
  }

</style>
