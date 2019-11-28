<template>
  <div class="products-catagories-area clearfix">
    <div class="amado-pro-catagory clearfix" style="position: relative; height: 1258.47px;">
      <div class="single-products-catagory clearfix" style="position: absolute; left: 0%; top: 0px;"><a
          href="shop.html"><img src="/guest/img/bg-img/1.jpg" alt="">
          <div class="hover-content">
            <div class="line"></div>
            <p>From $180</p>
            <h4>Modern Chair</h4>
          </div>
        </a></div>
      <div class="single-products-catagory clearfix" style="position: absolute; left: 33.2516%; top: 0px;"><a
          href="shop.html"><img src="/guest/img/bg-img/2.jpg" alt="">
          <div class="hover-content">
            <div class="line"></div>
            <p>From $180</p>
            <h4>Minimalistic Plant Pot</h4>
          </div>
        </a></div>
      <div class="single-products-catagory clearfix" style="position: absolute; left: 66.5881%; top: 0px;"><a
          href="shop.html"><img src="/guest/img/bg-img/3.jpg" alt="">
          <div class="hover-content">
            <div class="line"></div>
            <p>From $180</p>
            <h4>Modern Chair</h4>
          </div>
        </a></div>
      <div class="single-products-catagory clearfix" style="position: absolute; left: 66.5881%; top: 349px;"><a
          href="shop.html"><img src="/guest/img/bg-img/4.jpg" alt="">
          <div class="hover-content">
            <div class="line"></div>
            <p>From $180</p>
            <h4>Night Stand</h4>
          </div>
        </a></div>
      <div class="single-products-catagory clearfix" style="position: absolute; left: 0%; top: 392px;"><a
          href="shop.html"><img src="/guest/img/bg-img/5.jpg" alt="">
          <div class="hover-content">
            <div class="line"></div>
            <p>From $18</p>
            <h4>Plant Pot</h4>
          </div>
        </a></div>
      <div class="single-products-catagory clearfix" style="position: absolute; left: 33.2516%; top: 558px;"><a
          href="shop.html"><img src="/guest/img/bg-img/6.jpg" alt="">
          <div class="hover-content">
            <div class="line"></div>
            <p>From $320</p>
            <h4>Small Table</h4>
          </div>
        </a></div>
      <div class="single-products-catagory clearfix" style="position: absolute; left: 66.5881%; top: 699px;"><a
          href="shop.html"><img src="/guest/img/bg-img/7.jpg" alt="">
          <div class="hover-content">
            <div class="line"></div>
            <p>From $318</p>
            <h4>Metallic Chair</h4>
          </div>
        </a></div>
      <div class="single-products-catagory clearfix" style="position: absolute; left: 0%; top: 785px;"><a
          href="shop.html"><img src="/guest/img/bg-img/8.jpg" alt="">
          <div class="hover-content">
            <div class="line"></div>
            <p>From $318</p>
            <h4>Modern Rocking Chair</h4>
          </div>
        </a></div>
      <div class="single-products-catagory clearfix" style="position: absolute; left: 33.2516%; top: 908px;"><a
          href="shop.html"><img src="/guest/img/bg-img/9.jpg" alt="">
          <div class="hover-content">
            <div class="line"></div>
            <p>From $318</p>
            <h4>Home Deco</h4>
          </div>
        </a></div>
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
      this.$store.dispatch('getProducts')
      this.$store.dispatch('getReviews')
    },
    computed: {

    }
  }

</script>
