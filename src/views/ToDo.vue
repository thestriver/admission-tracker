<template>
  <div class="ToDo">
     <div class="flex pb-8 w-full md:justify-start justify-center items-end">
          <div class="relative mr-4 md:w-full lg:w-full xl:w-2/3 w-3/4">
          <label for="hero-field" class="leading-7 text-sm text-gray-600"></label>
          <input v-model.trim="newTodoContent"
          name="new_todo" @keyup.enter.prevent="saveTodo"
          type="text"  placeholder="Add a new task" class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-900 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <button @click="saveTodo" class="inline-flex text-white bg-green-500 border-0 py-3 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Add Task</button>
      </div>
    <!-- <div class="pt-5">
      <input
        v-model.trim="newTodoContent"
        class="focus:border-green-600 focus:ring-1 focus:ring-green-600 focus:outline-none w-1/2 text-sm text-black placeholder-green-500 border border-green-600 rounded-md py-2 pl-10 "
        type="text"
        name="new_todo"
        placeholder="Add a new task"
        @keyup.enter.prevent="saveTodo"
      >
    </div> -->
    <div class="ToDo__items">
        <todo-item
          v-for="item in todoItems"
          :key="item.key"
          :item="item"
          @change="handleItemChange"
        />
      
    </div>
  </div>
  
</template>

<script>

import { random } from '@/utils'
import TodoItem from '@/components/TodoItem'
import { ToDoService } from '@/services/ToDoService'

/**
 * @module ToDo
 */
export default {
  name: 'ToDo',
  components: { TodoItem },
  data () {
    return {
      newTodoContent: '',
      todoItems: []
    }
  },
  mounted () {
    this.fetchToDos()
  },
  methods: {
    /**
     * Fetches all the todo items
     */
    fetchToDos () {
      this.todoItems = ToDoService.fetchAll()
    },
    /**
     * Saves a new todo item
     */
    saveTodo () {
      // do nothing if we have no content
      if (!this.newTodoContent) return

      // push a new item to the list
      this.todoItems.push({
        id: random(),
        content: this.newTodoContent,
        createdAt: Date.now(),
        completedAt: null,
        deletedAt: null
      })
      // clear the form input
      this.newTodoContent = ''
      // store the items
      this.storeItems()
    },
    /**
     * Saves the todo item, on each change
     * @param {TodoItem} item
     */
    handleItemChange (item) {
      ToDoService.updateItem(item.id, item)
      this.fetchToDos()
    },
    /**
     * Persists the list of todo items
     */
    storeItems () {
      ToDoService.storeAll(this.todoItems)
    }
  }
}
</script>

