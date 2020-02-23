<template>
  <v-layout row class="align-center layout px-4 pt-4 app--page-header">
    <div class="page-header-left">
      <h3 class="pr-3">{{title}}</h3>
    </div>
    <v-icon>mdi-home</v-icon>

  </v-layout>
</template>
<script>
export default {
  name: 'PageHeader',
  data() {
    return {
      title: ''
    }
  }
}
</script>