<template>
  <div id="ThemeSettings">
    <v-toolbar color="blue" dark>
      <v-toolbar-title>Theme Settings</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-layout column>
        <v-flex>
          <v-subheader class="px-1 my-2">Color Option</v-subheader>
          <div class="color-option">
            <v-layout wrap>
              <label
                class="color-option--label flex xs6 pa-1"
                v-for="(option,index) in themeColorOptions"
                :key="index"
              >
                <input type="radio" name="color" :value="option.key" v-model="themeColor" />
                <span class="color-option--item bg">
                  <span class="overlay">
                    <v-icon color="white">mdi-check</v-icon>
                  </span>
                  <span :class="['color-option--item--header sideNav',option.value.sideNav]"></span>
                  <span :class="['color-option--item--header mainNav',option.value.mainNav]"></span>
                  <span :class="['sideMenu',option.value.sideMenu]"></span>
                </span>
              </label>
            </v-layout>
          </div>
          <div class="theme-options">
            <v-subheader class="px-1 my-2">Sidebar Option</v-subheader>
            <v-divider></v-divider>
            <div class="my-3">
              <v-btn-toggle v-model="sideBarOption">
                <v-btn value="dark">Dark</v-btn>
                <v-btn value="light">Light</v-btn>
              </v-btn-toggle>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator'
import colorOption from '@/api/colorOption.ts'

@Component
export default class ThemeSettings extends Vue {
  private themeColor: string = '#3f51b5'
  private sideBarOption: string = 'light'

  get themeColorOptions() {
    return colorOption
  }

  @Watch('themeColor', { immediate: true, deep: true })
  themeColorhandler(val: string) {
    (this as any).$vuetify.theme.themes.light.primary = val
  }
  @Watch('sideBarOption', { immediate: true })
  sideBarOptionhandler(val: string) {
    if (val === 'dark') {
      (this as any).$vuetify.theme.dark = true
    } else if(val === 'light') {
      (this as any).$vuetify.theme.dark = false
    }
  }
}
</script>
<style lang="scss" scoped>
#ThemeSettings {
  .color-option {
    &--label {
      position: relative;
      display: block;
      cursor: pointer;
      & input[type='radio'] {
        display: none;
        & + span {
          position: relative;
          & > .overlay {
            display: none;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3);
            text-align: center;
            line-height: 30px;
            color: #fff;
          }
        }
        &:checked + span > .overlay {
          display: block;
        }
      }
      & .bg {
        background-color: #f1f1f1;
      }
    }
    &--item {
      overflow: hidden;
      display: block;
      box-shadow: 0 0 2px rgba(0, 0, 0, 1);
      &--header {
        height: 10px;
      }
      & > span {
        display: block;
        float: left;
        width: 50%;
        height: 20px;
      }
    }
  }
}
</style>