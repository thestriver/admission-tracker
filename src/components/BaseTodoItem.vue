<template>
  <div
    class="BaseTodoItem flex pb-8 w-full md:justify-start justify-center items-end"
  >
    <div class="BaseTodoItem__content relative mr-4 md:w-full lg:w-full xl:w-2/3 w-3/4">
      <slot name="content w-full">
        {{ item.content }}
      </slot>
    </div>
    <div class="BaseTodoItem__actions inline-flex">
      <slot name="actions" />
    </div>
  </div>
</template>


<script>
/**
 * @module BaseTodoItem
 */
export default {
  name: 'BaseTodoItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

