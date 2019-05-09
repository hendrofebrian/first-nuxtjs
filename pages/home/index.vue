<style>
  @import './home.css';
</style>

<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3>
        <p class="title text-xs-center">Selamat Datang di GudangAda Seller App</p>
        <v-img
          class="pic-placeholder"
          src="http://clipart-library.com/images/6TpoEd68c.png"
          aspect-ratio="1.7"
        ></v-img>
        <p class="desc text-xs-center bolder">Belum ada aktivitas transaksi</p>
        <p
          class="desc text-xs-center"
        >Anda belum memiliki produk untuk dipantau. Segera tambah produk petama anda</p>
        <nuxt-link class="link" to="/login">
          <v-btn block bottom color="red" class="button-tambah" dark>Tambah Produk</v-btn>
        </nuxt-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'logged_in',
};
</script>