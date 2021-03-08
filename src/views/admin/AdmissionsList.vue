<template>
  <div class="flex flex-wrap" style="padding-bottom: 330px" >
    <div class="w-full mb-12 px-4 pt-10 mt-20">
      <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">	
              <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-coolGray-300">
                <details>
              <summary class="py-3 px-4  outline-none cursor-pointer focus:underline bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                <i class="fas fa-plus"></i> Add A New School
              </summary>
              <div class="px-4 pb-4">
                <div class="w-full px-4 ">
                <!-- <CardSettings /> -->
                
                <form @submit.prevent class="p-5" >
                  <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    School Information
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                          University Name
                        </label>
                        <input
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          v-model.trim="admissions.university"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="program"
                        >
                          Program
                        </label>
                        <input
                          type="email"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          v-model.trim="admissions.program"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="info"
                        >
                          Information Link
                        </label>
                        <input
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          v-model.trim="admissions.link"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Funding Details
                        </label>
                        <input
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          v-model.trim="admissions.funding"
                        />
                      </div>
                      
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="other"
                        >
                          Other Details
                        </label>
                        <input
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          v-model.trim="admissions.details"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="deadline"
                        >
                          Deadline
                        </label>
                        <input
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          v-model.trim="admissions.deadline"
                        />
                      </div>
                      
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="status"
                        >
                          Status
                        </label>
                        <input
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          v-model.trim="admissions.status"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="decision"
                        >
                          School's Decision
                        </label>
                        <input
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          v-model.trim="admissions.decision"
                        />
                      </div>
                      
                    </div>
                  </div>
                  <button
                    class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    @click="createAdmissions()" :disabled="admissions.university === ''"
                  >
                    Submit
                  </button>
                  </form>
                
              </div>
              </div>
            </details>
        
          </div>
      </div>
      
    </div>
    <div class="w-full mb-12 px-4">
      <card-table />
      <!-- School Name , Program, Info Link, Funding Details, Other Details, Deadline, Status, Decisiom  -->

      <!-- <card-table color="dark" /> -->
    </div>
  </div>
</template>
<script>
import CardTable from "@/components/Cards/CardTable.vue";
import { mapState } from 'vuex'

export default {
  components: {
    CardTable
  },
  data() {
    return {
      admissions: {
        university: '',
        program: '',
        link: '',
        funding: '',
        details: '',
        deadline: '',
        status: '',
        decision: ''
      }
    }
  },
  computed: {
    ...mapState(['userProfile'])
  },
  methods: {
    createAdmissions() {
      this.$store.dispatch('createAdmissions', { 
        university: this.admissions.university, program: this.admissions.program, link: this.admissions.link, funding: this.admissions.funding,
        details: this.admissions.details, deadline: this.admissions.deadline, status: this.admissions.status, decision: this.admissions.decision 
      })
      this.admissions.university = '', this.admissions.program = '', this.admissions.link = '', this.admissions.funding = '',
      this.admissions.details = '', this.admissions.deadline = '', this.admissions.status = '', this.admissions.decision = ''

    },

  }
};
</script>
