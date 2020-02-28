<template>
  <v-app-bar color="primary darken-2" fixed dense app>
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
      <v-btn icon @click="handleGithub()">
        <v-icon class="white--text">fa-2x fa-github</v-icon>
      </v-btn>
      <v-btn icon @click="handleFullScreen()">
        <v-icon class="white--text">mdi-fullscreen</v-icon>
      </v-btn>
      <v-menu offset-y class="elelvation-1" transition="scale-transition">
        <template #activator="{on}">
          <v-btn icon v-on="on">
            <v-badge color="red" overlap content="6">
              <v-icon>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>
      </v-menu>
      <v-menu offset-y transition="scale-transition">
          <template #activator="{on}">
            <v-btn icon v-on="on">
                <v-icon>mdi-account-multiple</v-icon>
            </v-btn>
            
          </template>
      </v-menu>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'
import { State, Mutation, namespace } from 'vuex-class'

const drawerModule = namespace('DrawerModule')

@Component
export default class AppToolbar extends Vue {
  @drawerModule.State('drawer')
  drawerState!: boolean

  @drawerModule.Mutation('toggleDrawer')
  mutationsToggleDrawer!: any

  @Emit()
  toggleDrawer() {
    this.mutationsToggleDrawer()
  }

  @Emit()
  handleGithub() {
    window.open('https://github.com/junyunga','')
  }

  @Emit()
  handleFullScreen() {
    alert('full screen')
  }
}
</script>