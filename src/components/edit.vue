<template>
    <v-container>
        <v-layout>
        <v-flex>
            <v-card class="card">
            <h1 class="headcontact">
                <v-icon>edit</v-icon>  Contact
            </h1>
            <p class="paragraph">Contact ID <span style="color:red">*</span></p>
           
                <v-text-field 
                  name="input-3-4"
                  class="fieldtext"
                  solo="false"
                  color="black"
                  v-model="User.contactID"

                ></v-text-field>
           
            <p class="paragraph">First name <span style="color:red">*</span></p>
                <v-text-field  
                  name="input-3-4"
                  class="fieldtext"
                  solo-inverted="false"
                  color="black"
                  v-model="User.firstName"

                ></v-text-field>
            <p class="paragraph">Last name <span style="color:red">*</span></p>
                <v-text-field  
                  name="input-3-4"
                  class="fieldtext"
                  solo-inverted="false"
                  color="black"
                  v-model="User.lastName"

                ></v-text-field>
            <p class="paragraph">Mobile No <span style="color:red">*</span></p>
                <v-text-field  
                  name="input-3-4"
                  class="fieldtext"
                  solo-inverted="false"
                  color="black"
                  v-model="User.mobileNo"

                ></v-text-field>
            <p class="paragraph">Email</p>
                <v-text-field  
                  name="input-3-4"
                  class="fieldtext"
                  solo-inverted="false"
                  color="black"
                  v-model="User.email"

                ></v-text-field>
            <p class="paragraph">Facebook</p>
                <v-text-field  
                  name="input-3-4"
                  class="fieldtext"
                  solo-inverted="false"
                  color="black"
                  v-model="User.facebook"

                ></v-text-field>
            <p class="paragraph">Image Url</p>
                <v-text-field  
                  name="input-3-4"
                  class="fieldtext"
                  solo-inverted="false"
                  color="black"
                  v-model="User.imageUrl"

                ></v-text-field>
                <router-link to="/index" style="text-decoration: none">
                    <v-btn style="margin-bottom: 10px" class="savebutton" @click="updateToAPI">SAVE</v-btn>
                    <v-btn style="margin-bottom: 10px" class="closebutton">CLOSE</v-btn>
                </router-link>   


            </v-card>
        </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'edituser',
  data (){
      return {
          User: {
              contactID: '',
              firstName: '',
              lastName: '',
              mobileNo: '',
              email: '',
              facebook: '',
              imageUrl: ''
          }
      }
  },
  mounted (){
    Vue.$http.get('http://localhost:3000/users/' + this.$route.params.userID)
    .then((response) => {
        this.User = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
      updateToAPI (){
          let updateUser = {
              contactID: this.User.contactID,
              firstName: this.User.firstName,
              lastName: this.User.lastName,
              mobileNo: this.User.mobileNo,
              email: this.User.email,
              facebook: this.User.facebook,
              imageUrl: this.User.imageUrl
          }
        Vue.$http.post('http://localhost:3000/users/' + this.$route.params.userID, updateUser)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      window.location.reload()
      }
  }
}
</script>

<style scoped>
    .headcontact{
        text-align: left;
        margin: 25px;
    }
    .plus{
        margin-bottom: 4px;
        margin-right: 10px;
        border-style: hidden;
        border-radius: 10px;
        background-color: rgb(86, 172, 114);
    }
    .paragraph{
        font-weight: bold;
        text-align: left;
        margin-left: 25px;
        margin-bottom: 5px;

    }
    .fieldtext{
        margin-left: 20px;
        width: 96%;
        margin-bottom: 10px;
    
        
    }
    .card{
        padding-top: 2px;
        padding-bottom: 10px;
    }
    .savebutton{
        color: darkgreen;
        border: 1px solid;
    }
    .closebutton{
        color:darkred;
        border: 1px solid;

    }
    
</style>
