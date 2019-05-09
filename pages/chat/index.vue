<template>
  <v-container>
    <news-list/>
  </v-container>
</template>
<script>
import axios from "axios";
import NewsList from "../../components/NewsList";
export default {
  layout: "logged_in",
  components: {
    NewsList
  }
};
</script>