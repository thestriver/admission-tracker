<template>
  <base-todo-item
    class="RecycledTodoItem font-semibold mb-10 mr-20 text-green-600 text-xl "
    :item="item"
  >
    <template #actions>
      <div class="buttons">
         
        <button
          class="mr-10"
          title="Restore from Trash"
          data-testid="restoreTrigger"
          @click="$emit('restore', item)"
        >
          <span class="icon">
            <span class="px-1 fa fa-history fa-lg" /> Redo
          </span>
        </button>
        <button
          class="button ml-10 is-small is-inverted is-danger"
          title="Remove from Recycle Bin"
          data-testid="removeTrigger"
          @click="$emit('remove', item)"
        >
          <span class="icon">
            <span class="px-1 fa fa-trash fa-lg" /> Delete
          </span>
        </button>
      </div>
    </template>
  </base-todo-item>
</template>

<script>
import BaseTodoItem from '@/components/BaseTodoItem'

/**
 * @module RecycledTodoItem
 */
export default {
  name: 'RecycledTodoItem',
  components: { BaseTodoItem },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.RecycledTodoItem {
  flex-wrap: nowrap;
  margin: 20px
}
</style>
