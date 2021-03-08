<template>
  <base-todo-item
    class="flex-container"
    :item="item"
  >
    <!-- <template #checkbox>
      <input
        v-model="completedLocal"
        type="checkbox"
        class="checkbox"
        data-testid="completeCheckbox"
      >
    </template> -->
    
    <template #content class="pl-10">
      <div
        v-if="!isEditing"
        class="taskcss pb-10"
        data-testid="contentEditTrigger"
        @dblclick="enableEdit"
      >
        {{ item.content }}
      </div>
      <input
        v-if="isEditing"
        ref="editInput"
        v-model="contentLocal"
        type="text"
        class="input"
        data-testid="editInput"
        @keyup.enter="saveEdit"
        @blur="saveEdit"
        @keyup.esc="stopEdit"
      >
    </template>
    <template #actions>
      <button
        class="inline-flex bg-green-600 text-white"
        data-testid="deleteTrigger"
        @click.prevent="deleteItem"
      > 
        <span class="icon px-5"><i class="fa fa-check fa-lg" /></span> Done
      </button>
    </template>
  </base-todo-item>
</template>

<script>
import BaseTodoItem from '@/components/BaseTodoItem'

/**
 * @module TodoItem
 */
export default {
  name: 'TodoItem',
  components: { BaseTodoItem },
  props: {
    /**
     *  @type TodoItem
     */
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isEditing: false,
      contentLocal: ''
    }
  },
  computed: {
    completedLocal: {
      /**
       * Transforms the completedAt timestamp to boolean
       */
      get () {
        return !!this.item.completedAt
      },
      /**
       * Converts the completedAt boolean to a timestamp
       * Emits the entire changed item
       * @param {Boolean} value
       */
      set (value) {
        this.emitChange({
          completedAt: value ? Date.now() : null
        })
      }
    }
  },
  methods: {
    /**
     * Deletes a todo item
     */
    deleteItem () {
      this.emitChange({
        deletedAt: Date.now()
      })
    },
    /**
     * Emits the changes to the TODO item up to the parent.
     * @param {Object} updatedItem - the todo item
     */
    emitChange (updatedItem) {
      this.$emit('change', {
        ...this.item,
        ...updatedItem
      })
    },
    /**
     * Starts the editing of a todo item.
     * Focuses the input item immediately
     * @return {Promise<void>}
     */
    async enableEdit () {
      this.contentLocal = this.item.content
      this.isEditing = true
      await this.$nextTick()
      this.$refs.editInput.focus()
    },
    /**
     * Saves the editing changes.
     * If no content is provided, just closes
     */
    saveEdit () {
      if (this.contentLocal) {
        this.emitChange({
          content: this.contentLocal
        })
      }
      this.stopEdit()
    },
    /**
     * Stops the editing, without saving anything
     */
    stopEdit () {
      this.isEditing = false
      this.contentLocal = ''
    }
  }
}
</script>

<style scoped>
.flex-container {
  display: flex;
  
}

.flex-container > template {
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
