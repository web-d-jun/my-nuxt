<template>
  <v-app-bar  color="primary darken-2" fixed dense app>
    <v-toolbar-title class="ml-0 pl-3">
      <v-app-bar-nav-icon @click.stop="toggleDrawer()"></v-app-bar-nav-icon>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-row align="center" style="max-width: 650px;">
      <v-text-field
        flat
        solo-inverted
        prepend-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
        hide-details
      ></v-text-field>
    </v-row>
    <v-spacer></v-spacer>
    <v-row>
      <v-btn icon>
        <v-icon>fa-2x fa-github</v-icon>
      </v-btn>
      <v-btn icon @click="handleFullScreen()">
        <v-icon>mdi-fullscreen</v-icon>
      </v-btn>
    </v-row>
  </v-app-bar>
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
    },
    handleFullScreen() {
      alert('full screen')
    }
  }
}
</script>