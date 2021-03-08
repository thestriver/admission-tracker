<template>
  <div class="RecycleBin px-20 bg-gray-100" style="padding-top: 250px; padding-bottom: 450px">
    <div class="text-3xl font-semibold text-center pb-10 text-green-600 ">
      Completed Tasks
    </div>
    <div class="RecycleBin__content text-center">
      <div
        v-if="deletedItems.length"
        class="RecycleBin__items taskcss"
      >
        <recycled-todo-item
          v-for="item in deletedItems"
          :key="item.id"
          :item="item"
          @remove="removeFromBin"
          @restore="restore"
        />
      </div>
      <div
        v-else
        class="text-center text-2xl py-10 text-red-600"
      >
        No Completed Tasks
      </div>
    </div>
    <div class=" mx-20 px-20 pt-20 bg-green text-gray-900 mr-2 last:mr-0 flex-auto text-center">
          <router-link to="/admin/tasks">
              <a class="cursor-pointer text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-green-600 bg-white': openTab !== 1, 'text-white bg-green-600': openTab === 1}">
           Add A New Task
          </a>
          </router-link>
        </div>
  </div>
  
</template>

<script>
import { ToDoService } from '@/services/ToDoService'
import RecycledTodoItem from '@/components/RecycledTodoItem'

/**
 * @module RecycleBin
 */
export default {
  name: 'RecycleBin',
  components: { RecycledTodoItem },
  data () {
    return {
      deletedItems: []
    }
  },
  mounted () {
    this.fetchDeletedItems()
  },
  methods: {
    /**
     * Fetches the list of deleted todo items
     */
    fetchDeletedItems () {
      this.deletedItems = ToDoService.fetchDeleted()
    },
    /**
     * Restores a todo item from the recycling bin
     * @param {TodoItem} item
     */
    restore (item) {
      item.deletedAt = null
      ToDoService.updateItem(item.id, item)
      this.fetchDeletedItems()
    },
    removeFromBin (item) {
      ToDoService.removeItem(item.id)
      this.fetchDeletedItems()
    }
  }
}
</script>

<style scoped>
.flex-container {
  display: flex;
  
}

.flex-container > div {
  color: black;
  width: 100px;
  line-height: 75px;
  font-size: 30px;
  margin: 20px;
  margin-left: 50px;
  text-align: center; 
}
.taskcss {
  margin-right: 100px;

}
</style>