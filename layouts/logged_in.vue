<template>
  <v-app>
    <v-toolbar :clipped-left="clipped" fixed app>
      <!-- <v-img
        class="img-circle"
        src="https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/409294"
        aspect-ratio=5
      ></v-img>-->
      <p class="store-name">Toko Sumber Makmur</p>
    </v-toolbar>
    <v-card>
      <v-content>
        <v-container>
          <nuxt/>
        </v-container>
      </v-content>

      <v-bottom-nav :active.sync="bottomNav" :value="true" fixed color="white">
        <nuxt-link class="link" to="/home">
          <v-btn color="teal" flat value="home">
            <span>Home</span>
            <v-icon>home</v-icon>
          </v-btn>
        </nuxt-link>
        <nuxt-link class="link" to="/pesanan">
          <v-btn color="teal" flat value="pesanan">
            <span>Pesanan</span>
            <v-icon>shopping_basket</v-icon>
          </v-btn>
        </nuxt-link>
        <nuxt-link class="link" to="/produk">
          <v-btn color="teal" flat value="produk">
            <span>Produk</span>
            <v-icon>move_to_inbox</v-icon>
          </v-btn>
        </nuxt-link>
        <nuxt-link class="link" to="/todos">
          <v-btn color="teal" flat value="todos">
            <span>Todos</span>
            <v-icon>list</v-icon>
          </v-btn>
        </nuxt-link>
        <nuxt-link class="link" to="/chat">
          <v-btn color="teal" flat value="chat">
            <span>News</span>
            <v-icon>chat</v-icon>
          </v-btn>
        </nuxt-link>
      </v-bottom-nav>
    </v-card>
  </v-app>
</template>
<style>
.store-name {
  color: teal;
  font-size: 18px;
  font-weight: bold;
}
.store-id {
  font-size: 12px;
  color: grey;
}
.img-circle {
  border-radius: 100%;
  width: 100px;
  height: 100px;
}
.link{
  text-decoration: none
}
</style>
<script>
export default {
  data() {
    return {
      bottomNav: this.$route.path.replace(/\//g,''),
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "bubble_chart",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
