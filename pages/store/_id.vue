<template>
  <div class="single-product-area clearfix">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mt-50">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">ADD NEW PRODUCT</a></li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-7">
          <div class="card rounded-0">
            <h5 class="card-header bg-secondary text-light">NEW PRODUCT</h5>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <div class="form-group">
                    <label for="">Product Name</label>
                    <input type="text" v-model.trim="product.name" class="form-control col-md-10" id="" placeholder="">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-3">
                    <label for="">Price</label>
                    <input type="number" v-model.number="product.price" class="form-control" id="">
                  </div>
                  <div class="form-group col-md-3">
                    <label for="">Qty</label>
                    <input type="number" v-model.number="product.quantity" class="form-control" id="" placeholder="">
                  </div>
                </div>
                <div class="form-group">
                  <label for="">Description</label>
                  <textarea class="form-control" v-model.trim="product.description" id="" rows="3"></textarea>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="inputState">Category</label>
                    <select class="form-control" v-model.number="product.category">
                      <option value="1">Food</option>
                      <option value="2">Clothes</option>
                      <option value="3">Accessories</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6 d-none">
                    <label for="">Image</label>
                    <input type="file" class="form-control" id="photo">
                  </div>
                </div>
                <button :disabled="product.category == ''" @click.prevent="addProduct" type="button"
                  class="btn btn-secondary col-xs-12 col-md-3">
                  {{ loading ? 'Adding...' : 'Add Product' }}
                </button>
                <button class="btn btn-primary"><nuxt-link class="text-light" to="/store">Back</nuxt-link></button>
              </form>
              <h5 v-if="success" class="text-success mt-3">{{ success }}</h5>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-5">
          <div class="single_product_desc">

            <div class="product-meta-data">
              <div class="line"></div>
              <p class="product-price">₦{{ product.price }}</p>
              <a href="product-details.html">
                <h6>{{ product.name }}</h6>
              </a>

              <div class="ratings-review mb-15 d-flex align-items-center justify-content-between">
                <div class="ratings">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>

              <p class="avaibility"><i class="fa fa-circle"></i> In Stock</p>
            </div>
            <div class="short_overview my-5">
              <p>{{ product.description }}</p>
            </div>

            <form class="cart clearfix" method="post">
              <div class="cart-btn d-flex mb-50">
                <p>Qty</p>
                <div class="quantity">
                  <span class="qty-minus"
                    onclick="if (!window.__cfRLUnblockHandlers) return false; var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"
                    data-cf-modified-47c3f6dddb242e2969fe1b0f-=""><i class="fa fa-caret-down"
                      aria-hidden="true"></i></span>
                  <input type="number" class="qty-text" id="qty" step="1" min="1" max="300" name="quantity"
                    :value="product.quantity">
                  <span class="qty-plus"
                    onclick="if (!window.__cfRLUnblockHandlers) return false; var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"
                    data-cf-modified-47c3f6dddb242e2969fe1b0f-=""><i class="fa fa-caret-up"
                      aria-hidden="true"></i></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    StoreDB,
    Storage
  } from '@/services/fireinit.js'
  export default {
    //middleware: 'authenticated',
    data() {
      return {
        loading: false,
        product: {},
        error: '',
        success:''
      }
    },
    methods: {
      async addProduct() {
        if (this.product.category == "") {
          this.error = "Fields Not Complete";
          return;
        }
        this.loading = true
        this.product.seller = this.user.uid;
        const productId = this.product.id;
        this.product.rating = this.product.rating ? this.product.rating : 5 ;
        delete this.product.id;
        StoreDB.collection("products").doc(productId).update(this.product).then(() => {
            console.log("Product Updated Successfully");
            this.success = "Product Updated Successfully";
            this.loading = false;
            this.$store.dispatch('getProducts');
        }).catch((err) => console.log(err))

      },
      getProduct() {
        setTimeout(() => {
          this.product = this.getProducts.filter(e => e.id == this.$route.params.id)[0];
        }, 1000);
      }
    },
    mounted() {
      this.getProduct()
    },
    computed: {
      user() {
        return this.$store.getters.activeUser
      },
      getProducts() {
        return this.$store.getters.allProducts;
      },
    },
  }

</script>

<style>

</style>
