<template>
<div class="relative w-full h-full py-40 min-h-screen">
  
  <div class="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full">
    <PasswordReset v-if="showPasswordReset" @close="togglePasswordReset()"></PasswordReset>
     <!-- LOGIN -->
    <div v-if="showLoginForm" class="container mx-auto px-4 h-full"
    :class="{ 'animate-pulse': !showLoginForm }"
    >
    <div class="flex content-center items-center justify-center h-full">    
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
        >
          <!-- <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-gray-600 text-sm font-bold">
                Sign in with
              </h6>
            </div>
            <div class="btn-wrapper text-center">
              <button
                class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="github" />
                Github
              </button>
              <button
                class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="google" />
                Google
              </button>
            </div>
            <hr class="mt-6 border-b-1 border-gray-400" />
          </div> -->
          <div class="flex-auto px-4 lg:px-10 py-10 pt-5">
            <img :src="logo" alt="logo" class="rounded w-1/2 py-4">
            <div class="text-gray-500 text-center mb-3 font-bold">
              <small>Sign in with your credentials</small>
            </div>
            <form @click.prevent>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                  v-model.trim="loginForm.email"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                  v-model.trim="loginForm.password"
                />
              </div>
              <!-- <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span class="ml-2 text-sm font-semibold text-gray-700">
                    Remember me
                  </span>
                </label>
              </div> -->

              <div class="text-center mt-6">
                <button
                  class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  @click="login()"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative cursor-pointer ">
          <!-- <button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="this.toggleModal()">
            Password Reset
          </button> -->
          <div class="w-1/2">
            <a @click="togglePasswordReset()" class="text-gray-300">
              <h7 class="hover:text-gray-600 text-md">Forgot password?</h7>
            </a>
          </div>
          <div class="w-1/2 text-right cursor-pointer">
            <a @click="toggleForm()" class="text-gray-300">
              <h7 class="hover:text-green-600 text-md " >Create new account</h7>
            </a>
          </div>
          <div class="pt-6 w-full cursor-pointer text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
            <router-link
        to="/"
        class="text-sm py-2 px-4 underline font-normal block w-full whitespace-no-wrap bg-transparent text-white"
            >Or Homepage?</router-link>
          </div>
        </div>
      </div>
    </div>
    </div>

   <!-- SIGN UP -->
   <div v-else class="container mx-auto w-1/2 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-6/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
        >
          <!-- <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-gray-600 text-sm font-bold">
                Sign up with
              </h6>
            </div>
            <div class="btn-wrapper text-center">
              <button
                class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="github" />
                Github
              </button>
              <button
                class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="google" />
                Google
              </button>
            </div>
            <hr class="mt-6 border-b-1 border-gray-400" />
          </div> -->
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <img :src="logo" alt="logo" class="rounded py-6 h-20 ">
            <div class="text-gray-500 text-center pt-4 mb-3 font-bold">
              
              <h2>Please Sign up with credentials</h2>
            </div>
            <form>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Name
                </label>
                <input
                  type="email"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Name"
                  v-model.trim="signupForm.name"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                  v-model.trim="signupForm.email"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                  v-model.trim="signupForm.password"
                />
              </div>

              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span class="ml-2 text-sm font-semibold text-gray-700">
                    I agree with the
                    <a href="javascript:void(0)" class="text-green-500">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>

              <div class="text-center mt-6">
                <button
                  class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  @click="signup()"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
         <div class="flex flex-wrap mt-6 relative">
          <div class="w-1/2 text-xl underline text-right text-gray-300 cursor-pointer">
            <a @click="toggleForm()">
              <small>Back to Login</small>
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
// import github from "@/assets/img/github.svg";
// import google from "@/assets/img/google.svg";
// import registerBg2 from "@/assets/img/register_bg_2.png";
import logo from "@/assets/img/Logo(1).png";
import PasswordReset from '@/components/PasswordReset'

export default {
  components: {
    PasswordReset
  },
  data() {
    return {
      // github,
      // google,
      // registerBg2
      logo,
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        title: '',
        email: '',
        password: ''
      },
      showLoginForm: true,
      showPasswordReset: false
    };
  },
  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset
    },
    login() {
    this.$store.dispatch('login', {
      email: this.loginForm.email,
      password: this.loginForm.password
      })
    },
    signup() {
      this.$store.dispatch('signup', {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        title: this.signupForm.title
      })  
    }
  }
};
</script>
