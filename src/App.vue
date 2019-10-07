<template>
  <div>
      <app-main></app-main>
  </div>
</template>

<script>
import Main from './pages/Main.vue'

export default {
  name: 'app',
  components: {
    AppMain: Main
  }
}
</script>
