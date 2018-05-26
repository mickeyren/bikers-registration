<template>
  <div class="row">
    <div class="column">
    <h1>Bikers</h1><br/>
    <table>
      <thead>
        <th>Full name</th> 
        <th>E-mail</th> 
        <th>City</th> 
        <th>Ride in group</th> 
        <th>Days of the week</th> 
        <th>Registration day</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="biker in bikers" :key="biker.id">
          <td>{{biker.name}}</td>
          <td>{{biker.email}}</td>
          <td>{{biker.city}}</td>
          <td>{{biker.rideInGroup}}</td>
          <td>{{biker.daysOfTheWeek}}</td>
          <td>{{biker.registration}}</td>
          <td><span class="actions"><i class="fa fa-trash"></i></span></td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import bikersData from '../../api/bikers.json'

export default {
  data() {
    return {
      bikers: bikersData.bikers,
    } 
  }
}
</script>

<style>

</style>
