<template>
  <!-- Header -->
  <div class="relative bg-green-600 md:pt-10 rounded-lg pb-20 pt-8">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-1/2 mt-10 pl-10 md:w-6/12">
          <div class="flex  ">
            <div class="w-full rounded-lg shadow-xl overflow-hidden relative px-8 pt-16 pb-32 text-black bg-cover bg-no-repeat bg-left " style="max-width:550px; background-image: url('https://svgshare.com/i/UH8.svg'); ">
              <h3 class="text-3xl font-semibold text-white leading-tight mb-10 border rounded  bg-green-600 pt-14 px-3 py-3 relative z-10">The Guide - Your Personal Guide To Success</h3>
              <p class="relative z-10 mt-5">
                <router-link to="/admin/admissions" >
                  <a href="#" class="py-3 px-6 rounded shadow hover:shadow-lg text-white text-lg bg-green-600 hover:bg-black focus:outline-none transition-all duration-300 ease-in-out">Track Your Applications Today</a>
              
                </router-link>
                </p> 
            </div>
          </div>
        </div>

    <div class="w-1/2 mt-24  md:w-6/12">
        <div class="md:px-10 mx-auto w-full">
          <div>
            <!-- Card stats -->
            <div class="flex flex-wrap">
              <div class="w-full lg:w-6/12 px-4">
                <card-stats
                  statSubtitle="ADMISSION COMPLETED"
                  statTitle="12"
                  
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <card-stats
                  statSubtitle="ADMISSION IN PROGRESS"
                  statTitle="2"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div class="w-full mt-4"></div>
              <div class="w-full lg:w-6/12 px-4">
                <card-stats
                  statSubtitle="UPCOMING DEADLINES"
                  statTitle="4"
                  
                  statIconName="fas fa-percent"
                  statIconColor="bg-green-500"
                />
              </div>
              <div class="w-full lg:w-6/12  px-4">
                <card-stats
                  statSubtitle="Unfinished Tasks"
                  statTitle="9"
                  
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
            </div>
          </div>
    </div>
    </div>
  </div>
</div>

  
  </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";

export default {
  components: {
    CardStats,
  },
};
</script>
