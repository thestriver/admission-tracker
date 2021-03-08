
<template>
<!-- eslint-disable -->
  <nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 xl:overflow-y-auto md:flex-row md:flex-no-wrap xl:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
  >
  <!-- check the two md:overflow -->
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <!-- Toggler -->
      <button
        class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
        type="button"
        v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Brand -->
      <!-- Main Start Logo -->
      <router-link
        class="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
        to="/"
      >
        <img alt="logo" :src="adminLogo" />

      </router-link>
      <!-- User -->
      <ul class="md:hidden items-center flex flex-wrap list-none">
        <li class="inline-block relative">
          <notification-dropdown />
        </li>
        <li class="inline-block relative">
          <user-dropdown />
        </li>
      </ul>
      <!-- Collapse -->
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
        v-bind:class="collapseShow"
      >
        <!-- Collapse header -->
        <div
          class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <router-link
                class="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                to="/"
              >
                <!-- Mobile Logo -->
                <img alt="logo" :src="adminLogo" class="w-20" />
              </router-link>
            </div>
            <div class="w-6/12 flex justify-end">
              <button
                type="button"
                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                v-on:click="toggleCollapseShow('hidden')"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- Form -->
        <form class="mt-6 mb-4 md:hidden">
          <div class="mb-3 pt-0">
            <input
              type="text"
              placeholder="Search"
              class="px-3 py-2 h-12 border border-solid border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
            />
          </div>
        </form>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full mt-12 " />
        <!-- Heading -->
        <!-- <h6
          class="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          Admin Layout Pages
        </h6> -->
        <!-- Navigation -->
        <ul class="md:flex-col md:min-w-full flex flex-col list-none">
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
                Admission List
              </a>
            </router-link>
          </li>

          <li class="items-center">
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
          </li>

          <li class="items-center" >
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
          </li>


          <li class="items-center">
            <router-link
              to="/admin/settings"
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
                  class="fas fa-tools mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-gray-400']"
                ></i>
                Settings
              </a>
            </router-link>
          </li>

          

          
        </ul>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full mt-20" />
        <!-- Heading -->
        <!-- <h6
          class="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          Auth Layout Pages
        </h6> -->
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
          <li class="items-center">
            <router-link
              class="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
              to="/auth/login"
            >
              <i class="fas fa-fingerprint text-gray-400 mr-2 text-sm"></i>
              Login
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              class="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
              to="/auth/register"
            >
              <i class="fas fa-clipboard-list text-gray-400 mr-2 text-sm"></i>
              Register
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
); }

<script>
import NotificationDropdown from "@/components/Dropdowns/NotificationDropdown.vue";
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
import adminLogo from "@/assets/img/Logo(1).png"

export default {
  data() {
    return {
      collapseShow: "hidden",
      adminLogo: adminLogo,
    };
  },
  methods: {
    toggleCollapseShow: function (classes) {
      this.collapseShow = classes;
    },
  },
  components: {
    NotificationDropdown,
    UserDropdown,
  },
};
</script>
