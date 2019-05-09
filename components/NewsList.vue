<template>
  <div class="text-xs-center" v-if="isLoading">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
  <v-layout v-else>
    <v-flex xs12>
      <v-card
        color="blue-grey darken-2"
        class="white--text"
        v-for="(datum, key) in data"
        :key="key"
      >
        <v-card-title primary-title>
          <div>
            <div class="headline">{{datum.title}}</div>
            <span>{{ datum.description }}</span>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapMutations, mapState, mapActions, mapGetters } from "vuex";

export default {
  created() {
    //async
    this.$store.dispatch('news/getNews');
  },
  computed: {
    data() {
      return this.$store.getters.data;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
    ...mapGetters({
      data: "news/data",
      isLoading: "news/isLoading"
    })
  },
  methods: {
    
  }
};
</script>