<template>
  <div>
    <user-form></user-form>
    <list></list>
  </div>
</template>

<script>
import Form from './Form.vue'
import List from './List.vue'

export default {
  components: {
    userForm: Form,
    list: List
  },
  data() {
    return {
    }
  }
}
</script>

<style>

</style>
