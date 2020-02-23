<template>
  <v-toolbar color="primary" fixed dense>
    <v-toolbar-title class="ml-0 pl-3">
      <v-app-bar-nav-icon @click.stop="toggleDrawer()"></v-app-bar-nav-icon>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'app-toolbar',
  data: function() {
    return {}
  },
  methods: {
    toggleDrawer() {
      alert('22')
    }
  }
}
</script>