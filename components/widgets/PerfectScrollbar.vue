<template>
  <div class="ps">
    <div class="ps">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class PerfectScrollbar extends Vue {}
</script>
<style lang="scss">
/*
 * Container style
 */
.ps {
  position:relative;
  height: 200px;
  position: relative;
  overflow: hidden !important;
  overflow-anchor: none;
  -ms-overflow-style: none;
  touch-action: auto;
  -ms-touch-action: auto;
}

/* MS supports */
@supports (-ms-overflow-style: none) {
  .ps {
    overflow: auto !important;
  }
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .ps {
    overflow: auto !important;
  }
}
</style>