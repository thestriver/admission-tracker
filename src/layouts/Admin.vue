<template>
  
  <div>
   <div  >
     <side-nav></side-nav>
      <!-- <sidebar /> -->
   </div>
    <div class="relative md:ml-64 bg-gray-200" style="margin-top: 89px" >
      <admin-navbar v-if="showNav" class="bg-green-600" ></admin-navbar>
      <!-- <header-stats /> -->
      <div class="px-4 md:px-10  mx-auto w-full -m-24" style="background-color: #f1f1f1;">
        <router-view />
        <!-- <footer-admin /> -->
      </div>
    </div>
  </div>
</template>
<script>
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import { mapState } from 'vuex'
// import Sidebar from "@/components/Sidebar/Sidebar.vue";
import SideNav from "@/components/Sidebar/SideNav.vue";
// import HeaderStats from "@/components/Headers/HeaderStats.vue";
// import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
export default {
  name: "admin-layout",
  components: {
    AdminNavbar,
    // Sidebar,
    SideNav
    // HeaderStats,
    // FooterAdmin,
  },
  computed: {
    ...mapState(['userProfile']),
    showNav() {
      return Object.keys(this.userProfile).length > 1
    }
  }
};
</script>
