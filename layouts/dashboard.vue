<template>
  <div id="appRoot">
    <template>
      <v-app id="inspire" class="app">
        <!-- <app-drawer class="app--drawer"></app-drawer> -->
        <app-toolbar class="app--toolbar"></app-toolbar>
        <v-content>
          <!-- page header -->
          <page-header></page-header>
          <div class="page-wrapper">
            <!-- <nuxt /> -->
          </div>
        </v-content>
      </v-app>
    </template>
  </div>
</template>
<script>
import PageHeader from '@/components/PageHeader.vue'
import AppToolbar from '@/components/AppToolbar.vue'
export default {
  components: {
    PageHeader,
    AppToolbar
  }
}
</script>
<style  scoped>
.page-wrapper {
  min-height: calc(100vh - 64px - 50px - 81px);
  border: 1px solid red;
}
</style>