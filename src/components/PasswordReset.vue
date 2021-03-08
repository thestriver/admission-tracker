<template>
  <div class="modal ">
    <div class="modal-content">
      <div @click="$emit('close')" class="close">close</div>
      <!-- <button @click="$emit('close')" class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button> -->
      <h3 class="text-gray-900 font-bold">Reset Password</h3>
      <hr>
      <div v-if="!showSuccess">
        <p>Enter your email to reset your password</p>
        <form @submit.prevent>
          <input  v-model.trim="email" type="email" placeholder="you@email.com"
          class=" mb-5 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
           />
        </form>
        <p v-if="errorMsg !== ''" class="error">{{ errorMsg }}</p>
        <button  @click="resetPassword()" class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Reset Password
            </button>
        <!-- <button @click="resetPassword()" class="button">Reset</button> -->
      </div>
      <p v-else>Success! Check your email for a reset link.</p>
    </div>
  </div>
</template>
<script>
import { auth } from '@/firebase'

export default {
  data() {
    return {
      email: '',
      showSuccess: false,
      errorMsg: ''
    }
  },
  methods: {
    async resetPassword() {
      // reset logic
      this.errorMsg = ''

      try {
        await auth.sendPasswordResetEmail(this.email)
        this.showSuccess = true
    } catch (err) {
        this.errorMsg = err.message
    }
    }
  }
}
</script>
<style>
.modal {
  /* display: flex;
  top: 80px;
  right: 80px;
  width: 500px;
  height: 100px;
  background: rgba(#333, 0.5);
  transition: opacity 0.3s ease; */
  display: flex;
  position: absolute;
  z-index:1;
  top: 120px;
  right: 100px;
  bottom: 0;
  left: 200px;
  width: 500px;
  height: 100px;
  background: rgba(#333, 0.5);
  transition: opacity 0.3s ease;

}
.modal-content {
position: relative;
margin: auto;
width: 100%;
max-width: 400px;
background: #fff;
padding: 40px;
border-radius: 5px;
box-shadow: 0 0 5px 0 rgba(#333, 0.5);
z-index: 999;
}
.close {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px;
    cursor: pointer;
    transition: 0.15s;

    
}
.modal:hover {
        color: #000;
}
h3 {
    margin: 0;
}

p {
    margin: 15px 0;
}

.error {
    color: tomato;
    font-size: 12px;
}

.button {
    width: 100%;
}

</style>