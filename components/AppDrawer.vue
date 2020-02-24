<template>
  <v-navigation-drawer
    id="appDrawer"
    :mini-variant.sync="mini"
    app
    :dark="$vuetify.dark"
    width="260"
  >
    <v-toolbar color="primary darken-3" dense>
      <v-toolbar-title class="ml-0 pl3">
        <span class="hidden-sm-and-down">Vue.js X Nuxt.js</span>
      </v-toolbar-title>
    </v-toolbar>
    <perfect-scrollbar>
        <v-list dense expand>
            

        </v-list>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'app-drawer',
  data: () => ({
    mini: false,
    
  })
}
</script>