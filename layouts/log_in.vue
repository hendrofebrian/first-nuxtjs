<template>
  <v-app>
    <v-content>
      <nuxt-link class="link" to="/">
        <v-btn flat icon color="grey" class="arrow-back">
          <v-icon large>keyboard_arrow_left</v-icon>
        </v-btn>
      </nuxt-link>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<style>
.arrow-back {
  margin-left: 20px;
  margin-top: 15px;
  margin-bottom: -50px;
}
</style>
