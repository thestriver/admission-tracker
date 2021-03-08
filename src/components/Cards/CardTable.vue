<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    :class="[color === 'light' ? 'bg-white' : 'bg-green-900 text-white']"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg"
            :class="[color === 'light' ? 'text-gray-800' : 'text-white']"
          >
            Admission Tracker
          </h3>

        </div>
      </div>
    </div>

    <!-- <div v-if="getAdmissions.length" class="block w-full overflow-x-auto">
      <div v-for="getAdmission in getAdmissions" :key="getAdmission.id">
      <div v-if="getAdmission.userName === userProfile.name">
        </div>
      </div>
    </div> -->

      <!-- Projects table -->
       <table   class=" d items-center w-full bg-transparent border-collapse">

        <thead>
          <tr>
            <th
              class="px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]"
            >
              UNIVERSITY NAME
            </th>
            <th
              class="px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]"
            >
              Program
            </th>
            <th
              class="px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]"
            >
              Info Link
            </th>
            <th
              class="px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]"
            >
              Funding Details
            </th>
            <!-- <th
              class="px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]"
            >
              Other Details
            </th> -->
            <th
              class="px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]"
            >
              Deadline
            </th>
            <th
              class="px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]"
            >
              Status
            </th>
            <th
              class="px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]"
            >
              School's Decision
            </th>
            <!-- <th
              class="px-2 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]"
            ></th> -->
          </tr>
        </thead>
        <tbody v-for="getAdmission in getAdmissions" :key="getAdmission.id">
          
            <tr  v-if="getAdmission.userName === userProfile.name" >
            <th
              class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center"
            >
            
              <span
                class="ml-3 font-bold"
                :class="[color === 'light' ? 'text-gray-700' : 'text-white']"
              >
                {{ getAdmission.university }}
              </span>
            </th>
            <td
              class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              {{ getAdmission.program }}
            </td>
            <td
              class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              {{ getAdmission.link }}
            </td>
            <td
              class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
             {{ getAdmission.funding }}
            </td>
            <!-- <td
              class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              {{ getAdmission.details }}
            </td> -->
             <td
              class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              {{ getAdmission.deadline }}
            </td>
             <td
              class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              {{ getAdmission.status }}
            </td>
             <td
              class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              {{ getAdmission.decision }}
            </td>
            <!-- <td
              class="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right"
            >
              <table-dropdown />
            </td> -->
          </tr>
       
          
          
        </tbody>
      </table>

  </div>
</template>
<script>
import TableDropdown from "@/components/Dropdowns/TableDropdown.vue";
import { mapState } from 'vuex'


export default {
  data() {
    return {
      filteredList: []
    };
  },
  computed: {
    ...mapState(['userProfile' , 'getAdmissions']), //helps pull the userprofile (and getAdmissions(which is an array)) from state to the dashboard 
    // // filteredArray() {
    // //   // let filters = this.$store.state.userProfile.name
    // //   let filteredList =  this.$store.state.getAdmissions.filter(function(getAdmission){
    // //     return getAdmission.userName === store.userProfile.name
    // //   })
    // //   return filteredList
    // }
     
  },
  components: {
    TableDropdown,
  },
  methods: {
    // filteredArray() {
    //   this.getAdmissions.filter(function(getAdmission){
    //     return this.$data.filteredList.pus(getAdmission.userName === this.userProfile.name)
    //    })
      
    //   console.log(this.$data.filteredList)
    // }
    // getAdmissions: function () {
    //     return this.getAdmissions.filter(getAdmission => getAdmission.userName === this.userProfile.name )
    //   }
  },

  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
};
</script>
