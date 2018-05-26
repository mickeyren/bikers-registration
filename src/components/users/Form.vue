<template>
  <div class="row">
    <div class="column">
      <form>
        <fieldset>
          <label for="nameField">Full name</label>
          <input id="nameField" type="text">
          <div class="input__hint">Please enter both your first and last name</div>
          <label for="nameField">Email</label>
          <input id="nameField" type="email">
          <div class="input__hint">Please enter your email so we can get in touch with you</div>
          <label for="nameField">City</label>
          <input id="nameField" type="text">        
          <div class="input__hint">Please enter the city where you live</div>
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

      <button class="button">Cancel</button>
      <button class="button">Save</button>   
    </div>
  </div>  
</template>

<script>
export default {

}
</script>

<style>

</style>
