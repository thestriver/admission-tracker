<template>

    <div class="flex flex-wrap mx-20 px-20" style="padding-top: 250px; padding-bottom: 400px">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          
              <a class="cursor-pointer text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-green-600 bg-white': openTab !== 1, 'text-white bg-green-600': openTab === 1}">
            To Do
          </a>
          
        </li>
        <li class="cursor-pointer -mb-px mr-2 last:mr-0 flex-auto text-center">
          <router-link to="/recycle-bin" >
              <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-green-600 bg-white': openTab !== 2, 'text-white bg-green-600': openTab === 2}">
            Completed
          </a>
          </router-link>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <div>
                  <to-do></to-do>
              </div>
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <div>
                  <RecycleBin />
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="bg-gray-100 pt-20 ">
    <div class="container">
      <div class="app-content">
        <TheNav class="mx-auto" />
        <router-view />
        
      </div>
    </div>
  </div> -->
</template>



<script>
import RecycleBin from "@/views/RecycleBin.vue"
import ToDo from "@/views/ToDo.vue"

export default {
  components: { 
      RecycleBin,
      ToDo
     },
  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}
</script>