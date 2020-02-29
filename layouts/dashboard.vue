<template>
  <div id="appRoot">
    <template>
      <v-app id="inspire" class="app">
        <app-drawer class="app--drawer"></app-drawer>
        <app-toolbar class="app--toolbar"></app-toolbar>
        <v-content>
          <!-- page header -->
          <page-header></page-header>
          <div class="page-wrapper">
            <nuxt />
          </div>
          <!-- footer -->
          <v-footer height="auto" class="white pa-3 app--footer">
            <span class="caption">{{new Date().getFullYear()}}</span>
            <v-spacer></v-spacer>
            <span class="caption mr-1">made width who</span>
            <v-icon color="red" small>mdi-star</v-icon>
          </v-footer>
        </v-content>
      </v-app>
    </template>
  </div>
</template>
<script>
import PageHeader from '@/components/PageHeader.vue'
import AppToolbar from '@/components/AppToolbar.vue'
import AppDrawer from '@/components/AppDrawer.vue'
export default {
  components: {
    PageHeader,
    AppToolbar,
    AppDrawer
  }
}
</script>
<style  scoped>
.page-wrapper {
  min-height: calc(100vh - 64px - 50px - 81px);
  border: 1px solid red;
}

.app--footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>