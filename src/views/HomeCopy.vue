<template>
  <div>
    <index-navbar />

    <!-- Hero -->
    <section class="relative overflow-hidden pt-20 mt-1">
        <img class="hidden lg:block absolute inset-0 w-full" :src="lines" alt="">
        <div class="relative  pt-12 lg:pt-20 pb-40">
            <div class="container mx-auto px-4">
            <div class="flex flex-wrap ">
                <div class="w-full lg:w-1/2 px-2 mb-12 md:mb-20 lg:mb-0 flex items-center">
                    <div class="w-full text-center lg:text-left">
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
                <div class="w-full lg:w-1/2 px-4 flex items-center justify-center pl-24">
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


<!-- Features -->
        <section class=" bg-gray-50 ">
            <div class="py-20 bg-gray-50 radius-for-skewed">
              <div class="container mx-16">
                <div class="flex flex-wrap items-center">
                  <div class="w-full lg:w-1/2 mb-12 lg:mb-0">
                    <div class="max-w-xl lg:mx-auto -mt-10">
                      <span class="text-green-600 font-bold">A COMMUNITY-FIRST PLATFORM</span>
                      <h2 class="my-2 text-4xl lg:text-5xl font-bold font-heading">We Help You Navigate Your Way To <SPAN class="text-green-600">Success</SPAN></h2>
                      <p class="mb-6 pt-4 text-gray-900 leading-9 tracking-normal max-w-xl">
                        There are over 5.5 million international students in the world  contributing $300bn to the global economy <b>(U.S.A - $45bn).</b>  <br>
                        Yet, these very important contributors to global economy, innovation and science are poorly supported, left confused by conflicting immigration policies, often treated with disdain by their hosts, required by local companies to have vague "local" experience and are often left stranded.
                        <br>
                        At The Guide, we know, firsthand, how this hurts and having successfully navigated the experience, we want to help others. 
                        We're empowering these students by bridging the gap between them and their goals.
                        </p>
                      <!-- <ul class="text-gray-500 font-bold">
                        <li class="flex mb-4">
                          <svg class="mr-2 w-6 h-6 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                          </svg>
                          <span>Vestibulum viverra ante non libero</span>
                        </li>
                        <li class="flex mb-4">
                          <svg class="mr-2 w-6 h-6 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                          </svg>
                          <span>Morbi mollis metus pretium ultrices tincidunt</span>
                        </li>
                        <li class="flex mb-4">
                          <svg class="mr-2 w-6 h-6 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                          </svg>
                          <span>Etiam lectus nunc, commodo et risus in</span>
                        </li>
                      </ul> -->
                    </div>
                  </div>
                  <!--  -->
                  <div class="w-full lg:w-1/2 flex flex-wrap pl-6">
                    <div class="mb-8 lg:mb-0 w-full md:w-1/2 px-4">
                      <div class="mb-8 py-6 pl-6 pr-4 shadow rounded bg-white">
                        <span class="mb-4 inline-block p-3 rounded-lg bg-green-100">
                          <svg class="w-10 h-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </span>
                        <h4 class="mb-2 text-2xl font-bold font-heading">Personal CRM</h4>
                        <p class="text-gray-500 leading-loose">We provide a beautiful personal dashboard that helps you keep track of your goals. We understand there is so much at stake and our tested tools will help you as ace your grades.</p>
                      </div>
                      <div class="py-6 pl-6 pr-4 shadow rounded bg-white">
                        <span class="mb-4 inline-block p-3 rounded-lg bg-green-100">
                          <svg class="w-10 h-10 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                          </svg>
                        </span>
                        <h4 class="mb-2 text-2xl font-bold font-heading">Career Hub</h4>
                        <p class="text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                    </div>
                    <div class="w-full md:w-1/2 lg:mt-16 px-4">
                      <div class="mb-8 py-6 pl-6 pr-4 shadow rounded-lg bg-white">
                        <span class="mb-4 inline-block p-3 rounded bg-green-100">
                          <svg class="w-10 h-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </span>
                        <h4 class="mb-2 text-2xl  font-bold font-heading">Community</h4>
                        <p class="text-gray-500 leading-loose">We provide an online community of like-minds helping international students get access to the specific support and resources they need </p>
                      </div>
                      <div class="py-6 pl-6 pr-4 shadow rounded-lg bg-white">
                        <span class="mb-4 inline-block p-3 rounded bg-green-100">
                          <svg class="w-10 h-10 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                          </svg>
                        </span>
                        <h4 class="mb-2 text-2xl font-bold font-heading">Immigration Hub</h4>
                        <p class="text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </section>


 <!-- Section 1 -->
      <section class="py-20">
        <h1 class="sm:text-2xl text-4xl font-medium mb-10 title-font text-center tracking-widest pb-12 uppercase font-bold text-green-600">We're With You All The Way</h1>
          
        <div class="container mx-8">
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2  order-1 md:order-0 pl-16 ">
              <div class="max-w-xl">
                <h2 class="mb-4 text-3xl md:text-5xl text-green-600 font-bold font-heading">During Your Studies</h2>
                <p class="mb-3 leading-loose text-blueGray-400 text-justify">
                    We help you optimize your trajectory matching you with resources that will help you achieve your goal 
                    i.e. We guide you as you pursue the best grades, secure your first credit card, their first car - <span class="text-green-600 font-bold"> think of us as your personal guide. A secret weapon to advance your goals.</span>  <br>
                    Plus a rich community with like-minds and a suite of resources tailored to ease your navigation through your daunting time as an internation student
                </p>
                <ul class="pb-4">
                    <li class="">
                      <span class="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-50 text-green-600 rounded">1</span>
                      <span> A Personal CMS - helping you track your academic and financial goals</span>
                    </li>
                    <li class="py-2">
                      <span class="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-50 text-green-600 rounded">2</span>
                      <span>Career Hub - Tailored for you. Filled with internships and job opportunities with partner companies who are excited to work with international students </span>
                    </li>
                    <li class="py-2">
                      <span class="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-50 text-green-600 rounded">3</span>
                      <span>An online community of international students</span>
                    </li>
                    <li class="py-2">
                      <span class="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-50 text-green-600 rounded">4</span>
                      <span>Resources Hub &amp; lots more. </span>
                    </li>
                  </ul>
                
                <div class="flex justify-start">
                  <a class="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-3 px-16 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Get Started</a>          
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-3 pl-20  order-0 md:order-1 mb-12 pt-24 md:mb-0">
              <img class="sm:max-w-sm lg:max-w-full mx-auto" :src="feature2" alt="" />
            </div>
            
          </div>
        </div>
      </section>

<!-- Section 2 -->
      <section class="py-20">
        <div class="container">
          <div class="flex flex-wrap -mx-3">
            <div class="w-full md:w-1/2 px-3 order-0 pl-24 pt-20 md:order-1 mb-12 md:mb-0">
              <img class="sm:max-w-sm lg:max-w-full mx-auto" :src="feature1" alt="">
            </div>
            <div class="w-full md:w-1/2 px-3 order-1 md:order-0 pl-32">
              <div class="max-w-2xl">
                <h2 class="mb-4 text-3xl md:text-5xl text-green-600 font-bold font-heading">After Your Studies</h2>
                <p class="mb-4 leading-loose text-blueGray-400 text-justify ">
                    We know first hand how intense the months before and after your graduation is. We provide you with the best tools & resources to help you achieve your dreams. 
                    Matching you with highly-successful and well-tested career and immigration services. 
                    Partnership with top companies who are excited to work with talented international students like you.

                </p>
                <ul class="mb-6">
                    <li class="py-2">
                      <span class="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-50 text-green-600 rounded">1</span>
                      <span>Career Hub - After studies Job Boards with a curated section for add-on career services.</span>
                    </li>
                    <li class="py-2">
                      <span class="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-50 text-green-600 rounded">2</span>
                      <span>
                        Immigration Hub - Best Immigration Pipeline/Strategy unique to each country
                        </span>
                    </li>
                    <li class="py-2">
                      <span class="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-50 text-green-600 rounded">3</span>
                      <span>Legal, HR, Finance resources + partnerships</span>
                    </li>
                  </ul>
                <div class="flex justify-start">
                  <a class="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-3 px-16 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Get Started</a>          
              </div>
              </div>
            </div>
            </div>
        </div>
    </section>

  <!-- Admission -->
      <section class="py-12 bg-gray-900">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap mt-2 ">
            <div class="w-full md:w-1/2 px-3 order-1 md:order-0">
              <div class="max-w-lg">
                <h2 class="mb-6 text-3xl md:text-5xl font-bold text-green-600 font-heading">Aspiring International Student?</h2>
                <p class="mb-8 leading-10 text-lg  text-gray-300 ">
                    We understand how difficult the admission process which is 
                    why we provide you with a beautiful dashboard to track your admission process and also match you with outstanding resources and services. <br> <br>
                    Do you know anyone who's currently applying to universities? Please share our admission tracker with them. It's full of tested resources that would ensure they secure admission with lucrative funding. 
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

<!-- CTA -->
<div class="bg-gray-50">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block text-3xl">We're excited to have you join us.</span>
      <span class="block text-green-600">Join Our Waiting List Today</span>
    </h2>
    <div class="mt-8 flex lg:mt-8 lg:flex-shrink-0 mr-24">
      <div class="flex pb-8 w-full md:justify-start items-end">
        <div class="">
        <label for="hero-field" class="leading-7 text-sm text-gray-600"></label>
        <input type="text" id="hero-field" placeholder="Join our waiting list" name="hero-field" class="w-full bg-gray-100  border-2 bg-opacity-50 border-green-600 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-900 py-3 px-24 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <button class="inline-flex text-white bg-green-600 border-0 py-4 px-6 focus:outline-none hover:bg-green-600 text-lg">Sign Up</button>
    </div>
  </div>
</div>
</div>
   
   <!-- Footer -->
    <footer-component />
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
