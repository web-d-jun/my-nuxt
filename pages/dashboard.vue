<template>
    <div id="pageDashboard">
        <v-container grid-listxl fluid>
            <v-layout row wrap>
                    <v-flex lg3 sm6 xs12>
                        <mini-statistic
                            icon="fa fa-facebook"
                            title="100+"
                            sub-title="Likes"
                            color="indigo"
                        >
                        </mini-statistic>
                    </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import MiniStatistic from '@/components/widgets/MiniStatistic.vue'
export default {
  layout: 'dashboard', 
  components: {
    MiniStatistic
  }
}
</script>