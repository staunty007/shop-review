<template>
  <Fragment>
    <div class="shop_sidebar_area">

      <div class="widget catagory mb-50">

        <h6 class="widget-title mb-30">Catagories</h6>

        <div class="catagories-menu">
          <ul>
            <li>
              <nuxt-link to="/shop/food">Food</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/shop/clothes">Clothes</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/shop/accessories">Accessories</nuxt-link>
            </li>
          </ul>
        </div>
      </div>

    </div>
    <div class="amado_product_area section-padding-100">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="product-topbar d-xl-flex align-items-end justify-content-between">

              <div class="total-products">
                <p>Showing 1-8 0f 25</p>
                <div class="view d-flex">
                  <a href="#"><i class="fa fa-th-large" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-bars" aria-hidden="true"></i></a>
                </div>
              </div>

              <div class="product-sorting d-flex">
                <div class="sort-by-date d-flex align-items-center mr-15">
                  <p>Sort by</p>
                  <form action="#" method="get">
                    <select name="select" id="sortBydate">
                      <option value="value">Date</option>
                      <option value="value">Newest</option>
                      <option value="value">Popular</option>
                    </select>
                  </form>
                </div>
                <div class="view-product d-flex align-items-center">
                  <p>View</p>
                  <form action="#" method="get">
                    <select name="select" id="viewProduct">
                      <option value="value">12</option>
                      <option value="value">24</option>
                      <option value="value">48</option>
                      <option value="value">96</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">

          <div class="col-12 col-sm-6 col-md-12 col-xl-4" v-for="product in products" :key="product.id">
            <div class="single-product-wrapper">
              <nuxt-link :to="'/product/' + product.id">
                <div class="product-img">
                  <img :src="product.image" alt="">

                  <img class="hover-img" :src="product.image1" alt="">
                </div>
              </nuxt-link>

              <div class="product-description d-flex align-items-center justify-content-between">

                <div class="product-meta-data">
                  <div class="line"></div>
                  <p class="product-price">₦{{ product.price }}</p>
                  <nuxt-link :to="'/product/' + product.id">
                    <h6>{{ product.name }}</h6>
                  </nuxt-link>
                </div>

                <div class="ratings-cart text-right">
                  <div class="ratings">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div class="cart">
                    <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img
                        src="/guest/img/core-img/cart.png" alt=""></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="row">
          <div class="col-12">

            <nav aria-label="navigation">
              <ul class="pagination justify-content-end mt-50">
                <li class="page-item active"><a class="page-link" href="#">01.</a></li>
                <li class="page-item"><a class="page-link" href="#">02.</a></li>
                <li class="page-item"><a class="page-link" href="#">03.</a></li>
                <li class="page-item"><a class="page-link" href="#">04.</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </Fragment>

</template>

<script>
  import {
    Fragment
  } from 'vue-fragment'
  export default {
    components: {
      Fragment
    },
    data() {
      return {
        productLoaded:false,
        products: [],
      }
    },
    methods: {
      getProduct(cat) {
        setTimeout(() => {
          let catId;
          switch (cat) {
            case 'food':
              catId = 1;
              break;
            case 'clothes':
              catId = 2;
              break;
            case 'accessories':
              catId = 3;
              break;
            default:
              break;
          }
         this.products = this.allProducts.filter(e => e.category == catId);
         this.productLoaded = true;
        }, 1000);

      }
    },
    mounted() {
      this.getProduct(this.$route.params.cat)
    },
    computed: {
      allProducts() {
        return this.$store.getters.allProducts;
      },
      category() {
        return this.$route.params.cat
      }
    }
  }

</script>

<style scoped>
  .nuxt-link-exact-active .nuxt-link-active {
    color: gold;
  }

</style>
