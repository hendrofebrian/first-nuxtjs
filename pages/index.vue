<template>
  <v-layout justify-end column fill-height>
    <v-img
      class="pic-placeholder"
      src="https://www.gudangada.com/4893e1e388f702d45fd3292adc8f4559.png"
      aspect-ratio="1"
    ></v-img>
    <p class="title text-xs-center">Penuhi Persediaan Gudang Anda Bersama GudangAda</p>
    <nuxt-link class="link link2" to="/login">
      <v-btn block bottom color="red" dark>Masuk Sebagai Buyer</v-btn>
    </nuxt-link>
    <nuxt-link class="link" to="/login">
      <v-btn block outline bottom color="red">Masuk Sebagai Seller</v-btn>
    </nuxt-link>
    <div class="text-xs-center">
      <p class="sk">Dengan masuk ke aplikasi, Anda telah menyetujui Syarat & Ketentuan yang berlaku.</p>
    </div>
  </v-layout>
</template>

<style>
.sk {
  color: "red";
}
.link {
  text-decoration: none;
}
.link2 {
  margin-top: 10%;
}
.title {
  font-size: 30;
  color: teal;
  font-weight: bold;
  margin-top: 10%
}
</style>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  data() {
    return {
      noBottomNav: true
    };
  },
  components: {
    Logo,
    VuetifyLogo
  }
};
</script>