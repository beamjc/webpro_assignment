<template>
    <v-app>
    <v-container grid-list-xl>
      <v-layout>
        <v-flex>
          <v-card id="headlogin"> 
            
              <h3 id="head">Login</h3>
              <p class="para">User Account</p>
                <v-text-field
                  name="input-3-4"
                  placeholder="Username"
                  single-line
                  class="text_input"
                  v-model="formData.username"
                ></v-text-field>
                <p class="para">Password</p>
                <v-text-field
                  name="input-3-4"
                  placeholder="Password"
                  single-line
                  class="text_input"
                  v-model="formData.password"
                 
                ></v-text-field>
                <v-btn color="grey lighten-1" style="margin-right: 355px; margin-bottom: 10px" @click="userlogin">LOGIN</v-btn>

          
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'login',
  data (){
    return {
      formData:{
      username: '',
      password: ''
      }
    }
  },
  methods: {
    userlogin (){
      Vue.$http.get('http://localhost:3000/login')
        .then ((response) => {
        // console.log(JSON.stringify(response.data))
        // this.formData = response.data
        if(this.formData.username == response.data[0].username && this.formData.password == response.data[0].password){
          alert("You are Login!")
          this.$router.push('index')
        }
        else
          alert("Wrong username and password!")
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
  
}
</script>
<style>
  #headlogin{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
  #head{
    text-align: center;  
    font-weight: bold;
    border-left: 6px solid rgb(59, 170, 96);
    padding: 10px;
  }
  .para{
    text-align: left;
    font-weight: bold;
    margin-top: 15px;
    margin-left: 10px;   
    margin-bottom: 10px;
  }
  .text_input{
    margin-left: 10px;
    padding-top: 0;
    width: 95%;
  }


</style>
