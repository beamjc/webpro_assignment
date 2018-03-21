<template>
  <v-app>
    <div>  
      <v-layout row wrap>
      <v-container grid-list-xl>
        <v-flex xs12>
          <v-toolbar color="white" tabs>
            <v-text-field prepend-icon="search" label="Search" class="mx-3" v-model="search">
            </v-text-field>
            <v-btn color="orange" href="/#/adduser">+ ADD</v-btn>
          </v-toolbar>
        </v-flex>
      <v-layout columm wrap>
        <v-flex xs3 v-for="aUser in filterdUsers" v-bind:key="aUser.id">
          <v-card>
            <v-card-media  v-bind:src="aUser.imageUrl" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div class="information">
                <h3 class="listallusers">{{ aUser.firstName }} {{ aUser.lastName }}</h3>
                <div>Mobile No# {{ aUser.mobileNo }} </div>
                <div>Email: {{ aUser.email}} </div>
                <div>Facebook: {{ aUser.facebook }} </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <router-link :to="{ path: '/edituser/' + aUser._id}" class="a">
                <v-btn flat color="orange" style="margin-left: auto">
                  <v-icon>
                    edit
                  </v-icon>
                </v-btn>
              </router-link>
              <v-btn flat color="orange" @click="DELETE(aUser._id)">
                <v-icon>
                  delete
                </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>          
        </v-flex>
      </v-layout>
      </v-container>
      </v-layout>    
    </div>
  </v-app>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'index',
  data (){
    return {
      Users: [],
      search: ''
    }
  },
  methods: {
    // Delete User
    DELETE (userID) {
      var url = 'http://localhost:3000/users/' + userID
      Vue.$http.delete(url)
        .then((response) => {
          
          console.log('Delete UserId: ' + response)
        })
        .catch((error) => {
          console.log(error)
        })
      window.location.reload()
    } 
  },
  computed: {
    filterdUsers: function () {
      return this.Users.filter((user) => {
        return user.firstName.match(this.search)
      })
      
    }
  },
  mounted (){
    Vue.$http.get('http://localhost:3000/users')
    .then((response) => {
        console.log(response.data)
        this.Users = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.listallusers{
  text-align: center;
}
.information{
  margin-left: 10px;
}
.card__actions>*{
  margin-left: 24px;
}
.a{
  text-decoration: white;
}
</style>