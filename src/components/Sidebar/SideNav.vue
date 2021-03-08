<template>
<!-- eslint-disable -->
  <nav class="">
    <div class="sidebar">
        <img :src="adminLogo" alt="logo">
        <!-- <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a> -->
        <ul class="list-none">
          <li class="items-center">
            <router-link
              to="/admin/dashboard"
              v-slot="{ href, route, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xl  py-3 font-semibold block"
                :class="[
                  isActive
                    ? 'text-green-500 hover:text-green-600'
                    : 'text-gray-800 hover:text-gray-600',
                ]"
              >
                <i
                  class="fas fa-tv mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-gray-400']"
                ></i>
                Home
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              to="/admin/admissions"
              v-slot="{ href, route, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xl py-3 font-semibold block"
                :class="[
                  isActive
                    ? 'text-green-500 hover:text-green-600'
                    : 'text-gray-800 hover:text-gray-600',
                ]"
              >
                <i
                  class="fas fa-table mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-gray-400']"
                ></i>
                Admission Track
              </a>
            </router-link>
          </li>

          <!-- <li class="items-center">
            <router-link
              to="/admin/tasks"
              v-slot="{ href, route, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xl py-3 font-semibold block"
                :class="[
                  isActive
                    ? 'text-green-500 hover:text-green-600'
                    : 'text-gray-800 hover:text-gray-600',
                ]"
              >
                <i
                  class="fas fa-tasks mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-gray-400']"
                ></i>
                Tasks
              </a>
            </router-link>
          </li> -->

          <!-- <li class="items-center" >
            <router-link
              to="/admin/resources"
              v-slot="{ href, route, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xl py-3 font-semibold block"
                :class="[
                  isActive
                    ? 'text-green-500 hover:text-green-600'
                    : 'text-gray-800 hover:text-gray-600',
                ]"
              >
                <i
                  class="fas fa-gifts mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-gray-400']"
                ></i>
                Resources
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              to="/admin/services"
              v-slot="{ href, route, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xl py-3 font-semibold block"
                :class="[
                  isActive
                    ? 'text-green-500 hover:text-green-600'
                    : 'text-gray-800 hover:text-gray-600',
                ]"
              >
                <i
                  class="fas fa-concierge-bell mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-gray-400']"
                ></i>
                Services
              </a>
            </router-link>
          </li> -->
          <li class="items-center xl:hidden md:hidden">
            <a
                :href="href"
                @click="logout()"
                class=" text-xl py-3 font-semibold block cursor-pointer"
                :class="[
                  isActive
                    ? 'text-green-500 hover:text-green-600'
                    : 'text-gray-800 hover:text-gray-600',
                ]"
              >
                <i
                  class="fas fa-sign-out-alt mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-gray-400']"
                ></i>
                Log out
              </a>
          </li>

       
        </ul>
    </div>
  </nav>
</template>

<script>
import adminLogo from "@/assets/img/Logo(2).png"

export default {
  name: 'SideNav',
  data() {
    return {
      adminLogo: adminLogo,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  components: {
   
  }
}
</script>

<style scoped>
nav {
  margin: 0;
}

img {
    width:100%;
    padding: 40px ;
}

.sidebar {
  margin: 0;
  padding: 0;
  width: 256px;
  border-right: 2px solid #059669;
  background-color: #f1f1f1;
  position: fixed;
  height: 105%;
  overflow: auto;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}
 
.sidebar a.active {
  background-color: #059669;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #059669;
  color: white;
}

div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
</style>
