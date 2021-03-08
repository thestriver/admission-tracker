<template>
<footer class="text-gray-600 body-font bg-gray-900">
        <!-- <div class="border-t border-gray-200">
          <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div class="container px-5 mx-auto">
              <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
                <div class="lg:w-1/6 md:w-1/2 w-full px-20">
                  <img :src="logo"  alt="">
                </div>
                <div>
                  
                </div>
                <div class="lg:w-1/6 md:w-1/2 w-full px-4 pl-20 ml-20">
            
                </div>
                <div class="lg:w-1/6 md:w-1/2 w-full px-4">
                  <h2 class="title-font font-medium  tracking-widest text-sm mb-3 text-white">ADMISSION</h2>
                  <nav class="list-none mb-10">
                    <li>
                      <a class="text-gray-600 hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                      <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                      <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                    </li>
                  </nav>
                </div>
                <div class="lg:w-1/6 md:w-1/2 w-full px-4">
                  <h2 class="title-font font-medium  tracking-widest text-sm mb-3 text-white">INTERNATIONAL STUDENT</h2>
                  <nav class="list-none mb-10">
                    <li>
                      <a class="text-gray-600 hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                      <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                      <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                    </li>
                    
                  </nav>
                </div>
                <div class="lg:w-1/6 md:w-1/2 w-full px-4">
                  <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">AFTER SCHOOL</h2>
                  <nav class="list-none mb-10">
                    <li>
                      <a class="text-gray-600 hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                      <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                      <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                    </li>
                  </nav>
                </div>
                <div class="lg:w-1/6 md:w-1/2 w-full px-4">
                  <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">IMMIGRATION</h2>
                  <nav class="list-none mb-10">
                    <li>
                      <a class="text-gray-600 hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                      <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                      <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                    </li>
                  </nav>
                </div>
              </div>
            </div>    
          </div>
        </div> -->

        <div class="">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">© 2021 The Guide — Your Personal Guide To Success
            </p>
            <span class="inline-flex cursor-pointer lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <!-- <a class="ml-3 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a> -->
            </span>
          </div>
        </div>
</footer>
</template>
<script>
import logo from "@/assets/img/Logo(2).png"

export default {
  data() {
    return {
      date: new Date().getFullYear(),
      logo
    };
  },
};
</script>
