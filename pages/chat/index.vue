<template>
  <v-container>
    <div class="text-xs-center" v-if="isLoading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <v-layout v-else>
        <v-flex xs12>
          <v-card color="blue-grey darken-2" class="white--text" v-for="(datum, key) in data" :key="key">
            <v-card-title primary-title>
              <div>
                <div class="headline">{{datum.title}}</div>
                 <span>{{ datum.description }}</span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  layout: "logged_in",
  data: function() {
    return {
      isLoading: true,
      data: []
    };
  },
  beforeMount() {
    this.getNews();
  },
  methods: {
    async getNews() {
      const data = await axios.get(
        "https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-09&sortBy=publishedAt&apiKey=b757618966584c1ca5605a5498f9a179"
      );
      this.isLoading = false;
      this.data = data.data.articles;
      console.log(this.data);
    }
  }
};
</script>