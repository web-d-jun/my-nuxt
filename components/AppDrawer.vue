<template>
  <v-navigation-drawer
    id="appDrawer"
    :mini-variant.sync="mini"
    app
    :dark="$vuetify.dark"
    width="260"
    v-model="drawer"
    fixed
  >
    <v-toolbar color="primary darken-3" dense fixed>
      <v-toolbar-title class="ml-0 pl3">
        <span class="hidden-sm-and-down">Vue.js X Nuxt.js</span>
      </v-toolbar-title>
    </v-toolbar>
    <perfect-scrollbar>
      <v-list dense expand>
        <template v-for="(item,i) in menus">
          <!-- group width subitems -->
          <v-list-group
            v-if="item.items"
            :key="item.name"
            :group="item.group"
            :prepend-icon="item.icon"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{item.title}}</v-list-item-title>
              </v-list-item-content>
            </template>
            <!-- sub group-->
            <template v-for="(subItem, i) in item.items">
              <v-list-group
                v-if="subItem.items"
                :key="subItem.name"
                sub-group
                :group="subitem.group"
              ></v-list-group>
              <!-- child item -->
              <v-list-item v-else :key="i" :to="subItem.href ? subItem.href : null">
                <v-list-item-content>
                  <v-list-item-title>{{subItem.title}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-group>
          <v-subheader v-else-if="item.header" :key="i">{{item.header}}</v-subheader>
          <v-divider v-else-if="item.divider" :key="i"></v-divider>
          <!-- top level link -->
          <v-list-item v-else :to="item.href ? item.href : null" :key="item.name">
            <v-list-item-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import menu from '@/api/menu'

@Component({
  components: {
    PerfectScrollbar
  }
})
export default class AppDrawer extends Vue {
  private mini: boolean = false
  private menus: any = menu
  private drawer: boolean = true
}
</script>
<style lang="scss">
.v-navigation-drawer__content {
  overflow: hidden;
  .ps {
    height: 100vh;
  }
}
</style>