<template>
  <div class="single-product-area section-padding-100 clearfix">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mt-50">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">PRODUCT</a></li>
              <li class="breadcrumb-item active text-uppercase" aria-current="page" v-if="product">{{ product.name }}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row" v-if="product">
        <div class="col-12 col-lg-7">
          <div class="single_product_thumb">
            <div id="product_details_slider" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li class="active" data-target="#product_details_slider" data-slide-to="0"
                  style="background-image: url(/guest/img/product-img/pro-big-1.jpg);">
                </li>
                <li data-target="#product_details_slider" data-slide-to="1"
                  style="background-image: url(/guest/img/product-img/pro-big-2.jpg);">
                </li>
                <li data-target="#product_details_slider" data-slide-to="2"
                  style="background-image: url(/guest/img/product-img/pro-big-3.jpg);">
                </li>
                <li data-target="#product_details_slider" data-slide-to="3"
                  style="background-image: url(/guest/img/product-img/pro-big-4.jpg);">
                </li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <a class="gallery_img" href="/guest/img/product-img/pro-big-1.jpg">
                    <img class="d-block w-100" src="/guest/img/product-img/pro-big-1.jpg" alt="First slide">
                  </a>
                </div>
                <div class="carousel-item">
                  <a class="gallery_img" href="/guest/img/product-img/pro-big-2.jpg">
                    <img class="d-block w-100" src="/guest/img/product-img/pro-big-2.jpg" alt="Second slide">
                  </a>
                </div>
                <div class="carousel-item">
                  <a class="gallery_img" href="/guest/img/product-img/pro-big-3.jpg">
                    <img class="d-block w-100" src="/guest/img/product-img/pro-big-3.jpg" alt="Third slide">
                  </a>
                </div>
                <div class="carousel-item">
                  <a class="gallery_img" href="/guest/img/product-img/pro-big-4.jpg">
                    <img class="d-block w-100" src="/guest/img/product-img/pro-big-4.jpg" alt="Fourth slide">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-5">
          <div class="single_product_desc">

            <div class="product-meta-data">
              <div class="line"></div>
              <div class="d-flex justify-content-between">
                <p class="product-price">₦{{ product.price }}</p>
                <button @click="listReviews = !listReviews" class="btn btn-gold text-dark btn-sm rounded-0">All Reviews
                  <i class="fa fa-caret-right"></i></button>
              </div>

              <a href="product-details.html">
                <h6>{{ product.name }}</h6>
              </a>

              <div v-if="!listReviews">
                <div class="ratings-review mb-15 d-flex align-items-center justify-content-between">
                  <div class="ratings">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div class="review">
                    <button @click="toggleReviewForm = !toggleReviewForm" type="button"
                      class="btn btn-secondary btn-sm rounded-0">
                      {{ toggleReviewForm ? 'Close Review' : 'Write A Review' }}
                    </button>
                  </div>
                </div>

                <p class="avaibility"><i class="fa fa-circle"></i> In Stock</p>
              </div>
            </div>
            <div v-if="!listReviews">
              <div v-if="!toggleReviewForm">
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
                  <button type="button" name="addtocart" value="5" class="btn btn-gold rounded-0">Add to
                    cart</button>
                </form>
              </div>
              <div v-if="toggleReviewForm">
                <div class="mt-3">
                  <div class="card">
                    <div class="card-header bg-gold text-dark font-weight-bold">
                      ADD REVIEW
                    </div>
                    <div class="card-body">

                      <form>
                        <div class="form-group">
                          <label for="">Full Name</label>
                          <input type="text" class="form-control" v-model.trim="review.name">
                        </div>
                        <div class="form-group">
                          <label for="inputAddress2">Content</label>
                          <textarea class="form-control" v-model.trim="review.content" rows="3"></textarea>
                        </div>
                        <div class="form-group d-flex">
                          <label for="inputAddress2" class="mr-2">Rating</label>
                          <div class="wrapper-review">
                            <input type="radio" v-model.number="review.rating" value="5" id="r1" name="rg1">
                            <label for="r1">&#10038;</label>
                            <input type="radio" v-model.number="review.rating" value="4" id="r2" name="rg1">
                            <label for="r2">&#10038;</label>
                            <input type="radio" v-model.number="review.rating" value="3" id="r3" name="rg1">
                            <label for="r3">&#10038;</label>
                            <input type="radio" v-model.number="review.rating" value="2" id="r4" name="rg1">
                            <label for="r4">&#10038;</label>
                            <input type="radio" v-model.number="review.rating" value="1" id="r5" name="rg1">
                            <label for="r5">&#10038;</label>
                          </div>
                        </div>
                        <button @click="addReview" type="button" class="btn btn-dark">
                          {{ loading ? 'Submitting..' : 'Submit' }}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="listReviews">
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action" v-for="rev in selReview" :key="rev.id">
                  <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1 font-weight-bold">{{ rev.name }}</h6>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-1">{{ rev.content }}.</p>
                 <div class="ratings">
                    <i class="fa fa-star text-gold" aria-hidden="true" v-for="index in rev.rating" :key="index"></i>
                  </div>
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
        loading: false,
        toggleReviewForm: false,
        listReviews: false,
        product: null,
        selReview: [],
        review: {
          p_id: '',
          name: '',
          content: '',
          rating: ''
        },
        error: [],

      }
    },
    methods: {
      async addReview() {
        this.review.p_id = this.product.id;
        this.loading = true;
        if (this.review.name == '' || this.review.content == '' || this.review.rating == '') {
          this.error = "Incomplete Form Fields";
          this.loading = false;
          return;
        }
        await StoreDB.collection("reviews").add(this.review).then((res) => {
            this.loading = false;
            console.log(res.id);
            console.log(res.doc);
            this.toggleReviewForm = false;
            this.$store.dispatch('getReviews')
          })
          .catch((err) => {
            this.loading = false;
            console.log(err.message);
          })

      },
      getProduct() {
        setTimeout(() => {
          this.product = this.getProducts.filter(e => e.id == this.$route.params.id)[0];
          this.selReview = this.getReviews.filter(e => e.p_id == this.$route.params.id);
        }, 1000);
      }

    },
    mounted() {
      this.getProduct()
    },
    computed: {
      getProducts() {
        return this.$store.getters.allProducts;
      },
      getReviews() {
        return this.$store.getters.allReviews;
      }
    }
  }

</script>

<style scoped>
  .wrapper-review {
    display: inline-block;
  }

  .wrapper-review * {
    float: right;
  }

  .wrapper-review [type="radio"] {
    display: none;
  }

  .wrapper-review label {
    font-size: 20px;
  }

  .wrapper-review input[type="radio"]:checked~label {
    color: #fbb710;
  }

</style>
