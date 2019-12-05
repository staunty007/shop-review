<template>
  <div class="amado_product_area">
    <div class="container-fluid">
      <div class="row mt-1">

        <div class="col-md-12">
          <div class="d-flex mt-5">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">S/N</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Modify</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(product,index) in products" :key="product.id">
                  <th scope="row">{{ index + 1}}</th>
                  <td>{{ product.name }}</td>
                  <td>{{ product.price.toLocaleString() }}</td>
                  <td>{{ product.quantity }}</td>
                  <td>
                      <nuxt-link :to="`/store/${product.id}`" class="btn btn-info">Edit</nuxt-link>
                      <button class="btn btn-danger">Delete</button>
                </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {
    auth,
    StoreDB
  } from '@/services/fireinit.js'
  export default {
    middleware: 'authenticated',
    data() {
      return {
        loading: false,
        form: {
          email: '',
          password: ''
        },
        error: [],
        success: '',
        products: [],
      }
    },
    methods: {
      getProduct() {
        setTimeout(() => {
          this.products = this.getAllProducts.filter(e => e.seller == this.user.uid);
        }, 1000);
      }
    },
    mounted() {
        this.getProduct();
    },
    computed: {
      user() {
        return this.$store.getters.activeUser
      },
      getAllProducts() {
        return this.$store.getters.allProducts;
      }
    },
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
