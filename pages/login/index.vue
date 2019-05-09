<style>
@import "./login.css";
</style>
<template>
  <v-form>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3>
          <p class="title">Masuk untuk Beli Kebutuhan Anda</p>
          <v-text-field v-model="email" :rules="emailRules" label="No. Handphone" required></v-text-field>
          <v-text-field v-model="email" :rules="emailRules" label="Password" required></v-text-field>
          <v-layout align-end justify-end>
            <p class="forget">Lupa password?</p>
          </v-layout>
          <nuxt-link class="link" to="/home">
            <v-btn block dark color="grey">Masuk Sebagai Seller</v-btn>
          </nuxt-link>
          <v-layout align-center justify-center class="not-registered-text">
            <p class="sk not-register">
              <span>Belum terdaftar di GudangAda?</span>
            </p>
          </v-layout>
          <nuxt-link class="link" to="/register">
            <v-btn block outline color="red">Daftar Sekarang</v-btn>
          </nuxt-link>
        </v-flex>
        <div class="text-xs-center">
          <p
            class="sk"
          >Dengan masuk ke aplikasi, Anda telah menyetujui Syarat & Ketentuan yang berlaku.</p>
        </div>
      </v-layout>
    </v-container>
  </v-form>
</template>
<script>
export default {
  layout: "log_in",
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "Password is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  })
};
</script>