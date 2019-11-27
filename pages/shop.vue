<template>
  <Fragment>
    <div class="shop_sidebar_area">

      <div class="widget catagory mb-50">

        <h6 class="widget-title mb-30">Catagories</h6>

        <div class="catagories-menu">
          <ul>
            <li class="active"><a href="#">Chairs</a></li>
            <li><a href="#">Beds</a></li>
            <li><a href="#">Accesories</a></li>
            <li><a href="#">Furniture</a></li>
            <li><a href="#">Home Deco</a></li>
            <li><a href="#">Dressings</a></li>
            <li><a href="#">Tables</a></li>
          </ul>
        </div>
      </div>

      <div class="widget brands mb-50">

        <h6 class="widget-title mb-30">Brands</h6>
        <div class="widget-desc">

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="amado">
            <label class="form-check-label" for="amado">Amado</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="ikea">
            <label class="form-check-label" for="ikea">Ikea</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="furniture">
            <label class="form-check-label" for="furniture">Furniture Inc</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="factory">
            <label class="form-check-label" for="factory">The factory</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="artdeco">
            <label class="form-check-label" for="artdeco">Artdeco</label>
          </div>
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

              <div class="product-img">
                <img :src="product.image" alt="">

                <img class="hover-img" :src="product.image1" alt="">
              </div>

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
    computed: {
      products() {
        return [{
            "id": "5dde8c8f0290604503cb92c1",
            "category": 1,
            "name": "New Jersey - Curry",
            "description": "Aute laborum velit exercitation veniam exercitation ullamco pariatur dolore exercitation minim sit. Labore adipisicing voluptate voluptate dolor dolor nulla dolore et.",
            "status": false,
            "quantity": 6,
            "price": "2,245.15",
            "image": "https://picsum.photos/id/50/220/250",
            "image1": "https://picsum.photos/id/62/220/250"
          },
          {
            "id": "5dde8c8ff9afe709330c7827",
            "category": 1,
            "name": "Maryland - Todd",
            "description": "Commodo elit officia deserunt Lorem. Tempor nostrud Lorem laborum aute eu incididunt velit magna proident fugiat occaecat reprehenderit.",
            "status": false,
            "quantity": 5,
            "price": "2,661.84",
            "image": "https://picsum.photos/id/20/220/250",
            "image1": "https://picsum.photos/id/74/220/250"
          },
          {
            "id": "5dde8c8f56e6e3170bb9c73b",
            "category": 5,
            "name": "Palau - Hensley",
            "description": "Deserunt do velit adipisicing sit magna exercitation sint. Sint esse culpa ut amet laboris occaecat minim.",
            "status": false,
            "quantity": 8,
            "price": "2,272.45",
            "image": "https://picsum.photos/id/31/220/250",
            "image1": "https://picsum.photos/id/72/220/250"
          },
          {
            "id": "5dde8c8f75b2fb6bea232037",
            "category": 5,
            "name": "Ohio - Sparks",
            "description": "Laboris eiusmod culpa ex duis proident nostrud excepteur elit voluptate deserunt adipisicing. Non deserunt esse elit pariatur et.",
            "status": false,
            "quantity": 6,
            "price": "2,021.10",
            "image": "https://picsum.photos/id/23/220/250",
            "image1": "https://picsum.photos/id/61/220/250"
          },
          {
            "id": "5dde8c8f7da67c35def61363",
            "category": 5,
            "name": "Louisiana - Cain",
            "description": "Voluptate enim commodo minim cupidatat dolor sit culpa ea eu sit ullamco. Ex mollit magna cupidatat occaecat voluptate consectetur amet commodo fugiat.",
            "status": true,
            "quantity": 6,
            "price": "2,817.76",
            "image": "https://picsum.photos/id/17/220/250",
            "image1": "https://picsum.photos/id/67/220/250"
          },
          {
            "id": "5dde8c8f0d193b6c9731584b",
            "category": 1,
            "name": "Washington - Singleton",
            "description": "Exercitation velit velit officia dolor irure laboris nostrud exercitation. Esse Lorem quis nulla minim voluptate pariatur exercitation ea amet mollit tempor enim ex.",
            "status": true,
            "quantity": 7,
            "price": "2,365.39",
            "image": "https://picsum.photos/id/32/220/250",
            "image1": "https://picsum.photos/id/70/220/250"
          }
        ]
      }
    }
  }

</script>

<style>

</style>
