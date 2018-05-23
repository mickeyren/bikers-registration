<template>
  <div class="row">
    <div class="column">
      <form>
        <fieldset>
          <label for="nameField">Full name</label>
          <input placeholder="CJ Patoilo" id="nameField" type="text">
          <label for="nameField">Email</label>
          <input placeholder="CJ Patoilo" id="nameField" type="email">
          <label for="nameField">City</label>
          <input placeholder="CJ Patoilo" id="nameField" type="text">        
        </fieldset>
      </form>
    </div>
    <div class="column">
      <label>Ride in group?</label>
      <input id="confirmField" type="radio">        
      <label class="label-inline">Always</label>  
      <input id="confirmField" type="radio">
      <label class="label-inline">Sometimes</label>  
      <input id="confirmField" type="radio">
      <label class="label-inline">Never</label>  

      <label>Days of the week</label>
      <input id="confirmField" type="checkbox">
      <label class="label-inline">Sun</label>  
      <input id="confirmField" type="checkbox">
      <label class="label-inline">Mon</label>  
      <input type="checkbox" />
      <label class="label-inline">Tue</label>  
      <input type="checkbox" />
      <label class="label-inline">Wed</label>  
      <input id="confirmField" type="checkbox">
      <label class="label-inline">Thu</label>  
      <input id="confirmField" type="checkbox">
      <label class="label-inline">Fri</label>  
      <input id="confirmField" type="checkbox">
      <label class="label-inline">Sat</label>          
    </div>
  </div>  
</template>

<script>
export default {

}
</script>

<style>

</style>
