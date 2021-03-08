<template>
  <div>

    <!-- Hero -->
    <section class="relative overflow-hidden mt-1">
        <img class="hidden lg:block absolute inset-0 w-full" :src="lines" alt="">
        <div class="relative  pt-12 lg:pt-20 lg:pb-40">
            <div class="container mx-auto px-4">
            <div class="flex flex-wrap ">
                <div class="w-full lg:w-1/2 px-2 mb-12 md:mb-20 lg:mb-0 flex items-center">
                    <div class="w-full md:text-center lg:text-left">
                        <div class="max-w-2xl mx-auto lg:mx-0 mb-3">
                            <h2 class="mb-3 text-4xl lg:text-6xl font-bold font-heading">
                                <span>An International Student's</span> 
                                <span class="text-green-600"> Personal <br> Guide</span>
                            </h2>
                        </div>
                        <div class="max-w-xl mx-auto lg:mx-0">
                        <p class="mb-6 mt-4 text-gray-900 leading-loose">
                            The Guide is a platform that connects international students with tools and resources that helps them achieve their educational, career and immigration goals. 
                        </p>
                        <div class="flex pb-8 w-full md:justify-start justify-center items-end">
                            <div class="relative mr-4 md:w-full lg:w-full xl:w-2/3 w-3/4">
                            <label for="hero-field" class="leading-7 text-sm text-gray-600"></label>
                            <input type="text" id="hero-field" placeholder="Join our waiting list" name="hero-field" class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-900 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                            <button class="inline-flex text-white bg-green-500 border-0 py-3 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Sign Up</button>
                        </div>
                        <!-- <div>
                            <a class="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Get Started</a>
                            <a class="inline-block w-full lg:w-auto py-2 px-6 border border-green-600 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200" href="#">How it works</a>
                        </div> -->
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 px-4 flex lg:items-center lg:justify-center lg:pl-24">
                    <div class="relative" style="z-index: 0;">
                        <img class="max-h-1/4 w-full max-w-4xl object-cover rounded-3xl md:rounded-br-none" :src="students" alt="">
                        <img class="hidden md:block absolute" style="top:-2rem; right: 3rem; z-index: -1;" :src="greendarkup" alt="">
                        <img class="hidden md:block absolute" style="bottom:-2rem; right: -2rem; z-index: -1;" :src="winggreendown" alt="">
                        <img class="hidden md:block absolute" style="top:3rem; right: -3rem; z-index: -1;" :src="grayright" alt="">
                        <img class="hidden md:block absolute" style="bottom:2.5rem; left: -4.5rem; z-index: -1;" :src="grayleft" alt="">
                    </div>
                </div>
            </div>
            </div>
        </div>
        
        </section>

  <!-- Admission -->
      <section class="lg:py-8 bg-gray-900 pb-20">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap mt-2 ">
            <div class="w-full md:w-1/2 px-3 order-1 md:order-0">
              <div class="max-w-lg">
                <h2 class="mb-6 text-3xl md:text-5xl font-bold text-green-600 font-heading">Aspiring International Student?</h2>
                <p class="mb-8 leading-10 text-lg  text-gray-300 ">
                    We understand how difficult the admission process which is 
                    why we provide you with a beautiful dashboard to track your admission process and also match you with outstanding resources and services. <br> <br>
                    Do you know anyone who's currently applying to universities? Please share our admission tracker with them. We will be adding tested resources that would ensure they secure admission with great funding. 
                </p>
                <div class="flex justify-start">
                  <router-link to="/login" >
                    <a class="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-3 px-16 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Try It Out Now</a>       
                  </router-link>
              </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-3 pt-12 order-0 md:order-1 mb-12 md:mb-0">
                <img class="sm:max-w-sm lg:max-w-full mx-auto pt-10 " :src="apphero" alt="">
            </div>
          </div>
        </div>
    </section>


   <!-- Footer -->
    <footer-component class="border-t-2 border-green-600" />
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

import lines from "@/assets/img/lines.svg"
import students from "@/assets/img/students.jpeg"
import greendarkup from "@/assets/img/elements/green-dark-up.svg"
import winggreendown from "@/assets/img/elements/wing-green-down.svg"
import grayright from "@/assets/img/elements/bullets-gray-right.svg"
import grayleft from "@/assets/img/elements/bullets-gray-left.svg"
import feature2 from "@/assets/img/feature_2.ae39d717.png"
import feature1 from "@/assets/img/feature_1.4157543f.png"
import apphero  from "@/assets/img/app_hero_1.a66466a3.png"



export default {
  data() {
    return {
      lines,
      students,
      greendarkup,
      winggreendown,
      grayright,
      grayleft,
      feature2,
      feature1,
      apphero
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
  },
};
</script>
