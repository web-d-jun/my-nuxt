<template>
  <v-navigation-drawer
    id="appDrawer"
    :mini-variant.sync="mini"
    app
    :dark="$vuetify.dark"
    width="260"
    fixed
  >
    <v-toolbar color="primary darken-3" dense fixed>
      <v-toolbar-title class="ml-0 pl3">
        <span class="hidden-sm-and-down">Vue.js X Nuxt.js</span>
      </v-toolbar-title>
    </v-toolbar>
    <perfect-scrollbar>
      <v-list dense expand>
        <template v-for="item in menus">
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
              <v-list-item v-else :key="i" :to="subItem.href ? subItem.href : null">
                <v-list-item-contnet>
                  <v-list-item-title>{{subItem.title}}</v-list-item-title>
                </v-list-item-contnet>
              </v-list-item>
            </template>
          </v-list-group>
        </template>
      </v-list>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>
<script>
import menu from '@/api/menu'

export default {
  name: 'app-drawer',
  data: () => ({
    mini: false,
    menus: menu
  }),
  created() {}
}
</script>