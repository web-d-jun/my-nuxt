<template>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  mounted() {
    this.$router.push('/dashboard')
  }
}
</script>
<style scoped>
</style>