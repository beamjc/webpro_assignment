<template>
  <div id="app">
    <v-toolbar color="grey darken-4" class="white--text">
          <img src="@/assets/logo.png" id="headLogo">
          <v-toolbar-title>Contact</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn href="/#/index" class="white--text">
                <v-icon>person</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
  <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#headLogo{
      width: auto;
      height: 50%;
}
</style>
