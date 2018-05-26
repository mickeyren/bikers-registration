<template>
  <div class="container">
    <h1 class="title">User Registration</h1>
    <div class="row">
      <div class="column column-40">
        <form>
          <fieldset>
            <label for="nameField">Full name</label>
            <input type="text" v-model="user.name">
            <div class="input__hint">Please enter both your first and last name</div>
            <label for="nameField">Email</label>
            <input type="email" v-model="user.email">
            <div class="input__hint">Please enter your email so we can get in touch with you</div>
            <label for="nameField">City</label>
            <input type="text" v-model="user.city">        
            <div class="input__hint">Please enter the city where you live</div>
          </fieldset>
        </form>
      </div>
      <div class="column column-offset-10">
        <label>Ride in group?</label>
        <label class="label-inline">
          <input type="radio" name="ride_in_group">        
          Always
        </label>  
        <label class="label-inline">
          <input type="radio" name="ride_in_group">
          Sometimes
        </label>  
        <label class="label-inline">
          <input type="radio" name="ride_in_group">
          Never
        </label>  

        <label>Days of the week</label>
        <label class="label-inline">
          <input type="checkbox">
          Sun
        </label>  
        <label class="label-inline">
          <input type="checkbox">
          Mon
        </label>  
        <label class="label-inline">
          <input type="checkbox">
          Tue
        </label>  
        <label class="label-inline">
          <input type="checkbox">
          Wed
        </label>  
        <label class="label-inline">
          <input type="checkbox">
          Thu
        </label>  
        <label class="label-inline">
          <input type="checkbox">
          Fri
        </label>  
        <label class="label-inline">
          <input type="checkbox">
          Sat
        </label>  
        <div class="buttons pull-right">
          <button class="button">Cancel</button>
          <button class="button" @click="addUser">Save</button>   
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    }
  },
  methods: {
    addUser() {
      this.$store.dispatch('createUser', Object.assign({}, this.user))
    }
  }
}
</script>

<style>

</style>
