<template>
  <div class="row">
    <div class="column">
      <div class="accordion">
        <div class="accordion__title" @click="expand">Help</div>
        <div class="accordion__body" v-bind:class="{ 'accordion__body--open': open }">
          <div class="accordion__copy">
            <div class="media">
              <p class="media__left image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png">
              </p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin ante malesuada massa condimentum, quis pellentesque nisl ullamcorper. Morbi elementum elit non leo molestie tempus. Mauris vel mauris viverra turpis gravida vestibulum et vitae elit. Phasellus ornare nunc at enim vulputate malesuada. Nam imperdiet pellentesque lectus et pellentesque. Fusce eget gravida diam, ut porta tellus. Vivamus quis risus arcu. Vestibulum lobortis lobortis justo ut accumsan. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    expand() {
      this.open = !this.open
    }
  }
}
</script>

<style>

</style>
