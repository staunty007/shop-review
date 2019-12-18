<template>
  <div class="amado_product_area">
    <div class="container-fluid">
      <div class="row mt-1">

        <div class="col-md-12">
          <div class="d-flex mt-5">
            <div class="card">
              <div class="card-header bg-secondary text-light">
                LOGIN
              </div>
              <div class="card-body">
                <p class="text-danger text-center" v-if="error">{{ error }}</p>
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label for="inputEmail4">Email</label>
                      <input type="text" name="email" v-model="form.email" class="form-control">
                    </div>
                    <div class="form-group col-md-12">
                      <label for="inputPassword4">Password</label>
                      <input type="password" v-model="form.password" class="form-control">
                    </div>
                  </div>

                  <button type="button" @click="emailLogin" class="btn btn-secondary">
                      {{ loading ? 'LOGIN IN...' : 'LOGIN' }}
                  </button>
                </form>
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
        error: '',
        success: ''
      }
    },
    methods: {
      async emailLogin() {
        this.loading = true
        this.error = []
        try {
          const user = await auth.signInWithEmailAndPassword(this.form.email, this.form.password);
          this.loading = false
          this.$store.dispatch('signInWithEmail', user);
          //console.log('Login Successfull');
        } catch (error) {
          this.loading = false
          this.error = error.message
        }
      }
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
