<template>
  <div class="container">
    <h1 class="title">Bikers</h1>
    <div class="row">
      <div class="column">
      <table>
        <thead>
          <tr>
            <th>Full name</th> 
            <th>E-mail</th> 
            <th>City</th> 
            <th>Ride in group</th> 
            <th>Days of the week</th> 
            <th>Registration day</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.city}}</td>
            <td>{{user.rideInGroup}}</td>
            <td>{{user.daysOfTheWeek}}</td>
            <td>{{user.registration}}</td>
            <td><span class="actions"><i class="fa fa-trash"></i></span></td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 computed: {
    users() {
      return this.$store.getters.users
    }
 }
}
</script>

<style>

</style>
