<template>
  <div id="LoginContainer">
    LoginContainer
    <button type="button" @click="login">네이버 로그인</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'nuxt-property-decorator'


@Component
export default class Login extends Vue {
  layout(context: any) {
    return 'dashboard'
  }

}
</script>
<style lang="scss">
#LoginContainer {
}
</style>