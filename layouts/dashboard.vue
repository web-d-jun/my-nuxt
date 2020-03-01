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
        <!-- theme setting -->
        <v-btn small fab class="setting-fab" color="red" @click="openThemeSettings">
          <v-icon>mdi-cogs</v-icon>
        </v-btn>
        <v-navigation-drawer
          class="setting-drawer"
          temporary
          hide-overlay
          fixed
          right
          v-model="rightDrawer"
        >
        <theme-settings></theme-settings>
        </v-navigation-drawer>
      </v-app>
    </template>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'
import PageHeader from '@/components/PageHeader.vue'
import AppToolbar from '@/components/AppToolbar.vue'
import AppDrawer from '@/components/AppDrawer.vue'
import ThemeSettings from '@/components/ThemeSettings.vue'
@Component({
  components: {
    PageHeader,
    AppToolbar,
    AppDrawer,
    ThemeSettings
  }
})
export default class dashboardLayout extends Vue {
  private rightDrawer: boolean = false

  @Emit()
  openThemeSettings() {
    this.rightDrawer = !this.rightDrawer
  }
}
</script>
<style lang="scss" scoped>
.page-wrapper {
  min-height: calc(100vh - 64px - 50px - 81px);
  border: 1px solid red;
}

.app--footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.setting-fab {
  position: absolute;
  top: 50%;
  right: 0;
  border-radius: 10px 0 0 10px !important;
  color: #fff;
}
</style>