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
          <input type="radio" value="Always" v-model="user.rideInGroup">        
          Always
        </label>  
        <label class="label-inline">
          <input type="radio" value="Sometimes" v-model="user.rideInGroup">
          Sometimes
        </label>  
        <label class="label-inline">
          <input type="radio" value="Never" v-model="user.rideInGroup">
          Never
        </label>  

        <label>Days of the week</label>
        <label class="label-inline">
          <input type="checkbox" value="Sun" v-model="daysOfTheWeek">
          Sun
        </label>  
        <label class="label-inline">
          <input type="checkbox" value="Mon" v-model="daysOfTheWeek">
          Mon
        </label>  
        <label class="label-inline">
          <input type="checkbox" value="Tue" v-model="daysOfTheWeek">
          Tue
        </label>  
        <label class="label-inline">
          <input type="checkbox" value="Wed" v-model="daysOfTheWeek">
          Wed
        </label>  
        <label class="label-inline">
          <input type="checkbox" value="Thu" v-model="daysOfTheWeek">
          Thu
        </label>  
        <label class="label-inline">
          <input type="checkbox" value="Fri" v-model="daysOfTheWeek">
          Fri
        </label>  
        <label class="label-inline">
          <input type="checkbox" value="Sat" v-model="daysOfTheWeek">
          Sat
        </label>  
        <div class="buttons pull-right">
          <button class="button" @click="cancel">Cancel</button>
          <button class="button" @click="createUser">Save</button>   
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      daysOfTheWeek: [],
      user: {}
    }
  },
  methods: {
    createUser() {
      this.user.daysOfTheWeek = this.daysOfTheWeek.join(', ')
      if(this._.intersection(['Sat', 'Sun'], this.daysOfTheWeek).length == Math.max(2, this.daysOfTheWeek.length)) {
        this.user.daysOfTheWeek = 'Weekends'
      } 
      if(this._.intersection(['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], this.daysOfTheWeek).length == Math.max(5, this.daysOfTheWeek.length)) {
        this.user.daysOfTheWeek = 'Weekdays'
      } 
      this.user.id = Date.now()
      this.user.registration = Date.now()
      this.$store.dispatch('createUser', Object.assign({}, this.user))
      this.cancel()
    },
    cancel() {
      this.user = {}
      this.daysOfTheWeek = []
    }
  }
}
</script>

<style>

</style>
