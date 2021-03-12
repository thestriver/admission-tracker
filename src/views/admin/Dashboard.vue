<template>
  <!-- <div>
    <div class="flex flex-wrap">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <card-line-chart />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <card-bar-chart />
      </div>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <card-page-visits />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <card-social-traffic />
      </div>
    </div>
  </div> -->
   <div class="flex flex-wrap">
     <div class="mt-20 pt-12 -px-8 ">
        <!-- <header-stats /> -->
     </div>
    <div class="w-full mb-16 mt-5 px-4">
      <card-home />

      <!-- <a href="" class="underline lg:text-3xl" >Download Guide</a> -->
    </div>
    

   

    <!-- <div class="mx-64">
      <card-dashboard />
    </div> -->
    <!-- <div class="w-full mb-12 px-4">
      <card-table color="dark" />
    </div> -->
  </div>
</template>
<script>
// import CardLineChart from "@/components/Cards/CardLineChart.vue";
// import CardBarChart from "@/components/Cards/CardBarChart.vue";
// import CardPageVisits from "@/components/Cards/CardPageVisits.vue";
// import CardSocialTraffic from "@/components/Cards/CardSocialTraffic.vue";
// import CardTable from "@/components/Cards/CardTable.vue";
import CardHome from "@/components/Cards/CardHome.vue";
import CardDashboard from "@/components/Cards/CardDashboard.vue";
import HeaderStats from "@/components/Headers/HeaderStats.vue";


export default {
  name: "dashboard-page",
  components: {
    // CardLineChart,
    // CardBarChart,
    // CardPageVisits,
    // CardSocialTraffic,
    CardHome,
    CardDashboard,
    HeaderStats
  },
};
</script>
