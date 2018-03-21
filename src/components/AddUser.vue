<template>
    <v-container>
        <v-layout>
        <v-flex>
            <v-card class="card">
            <h1 class="headcontact">
                <v-icon class="plus" color="white">add</v-icon>Contact
            </h1>
            <p class="paragraph">Contact ID <span style="color:red">*</span></p>
           
                <v-text-field  
                  name="input-3-4"
                  placeholder="Contact ID"
                  class="fieldtext"
                  solo="false"
                  color="black"
                  v-model="User.contactID"

                ></v-text-field>
           
            <p class="paragraph">First name <span style="color:red">*</span></p>
                <v-text-field  
                  name="input-3-4"
                  placeholder="First name"
                  class="fieldtext"
                  solo-inverted="false"
                  color="black"
                  v-model="User.firstName"

                ></v-text-field>
            <p class="paragraph">Last name <span style="color:red">*</span></p>
                <v-text-field  
                  name="input-3-4"
                  placeholder="Last name"
                  class="fieldtext"
                  solo-inverted="false"
                  color="black"
                  v-model="User.lastName"

                ></v-text-field>
            <p class="paragraph">Mobile No <span style="color:red">*</span></p>
                <v-text-field  
                  name="input-3-4"
                  placeholder="Mobile No"
                  class="fieldtext"
                  solo-inverted="false"
                  color="black"
                  v-model="User.mobileNo"

                ></v-text-field>
            <p class="paragraph">Email</p>
                <v-text-field  
                  name="input-3-4"
                  placeholder="Email"
                  class="fieldtext"
                  solo-inverted="false"
                  color="black"
                  v-model="User.email"

                ></v-text-field>
            <p class="paragraph">Facebook</p>
                <v-text-field  
                  name="input-3-4"
                  placeholder="Facebook"
                  class="fieldtext"
                  solo-inverted="false"
                  color="black"
                  v-model="User.facebook"
                  
                ></v-text-field>
            <p class="paragraph">Image Url</p>
                <v-text-field  
                  name="input-3-4"
                  placeholder="Image Url"
                  class="fieldtext"
                  solo-inverted="false"
                  color="black"
                  v-model="User.imageUrl"

                ></v-text-field>
                <v-btn style="margin-bottom: 10px" class="savebutton" @click="addToAPI">SAVE</v-btn>
                <v-btn style="margin-bottom: 10px" class="closebutton" href="/#/index">CLOSE</v-btn>


            </v-card>
        </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'adduser',
  data(){
      return{
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
  methods: {
      addToAPI (){
          let newUser = {
              contactID: this.User.contactID,
              firstName: this.User.firstName,
              lastName: this.User.lastName,
              mobileNo: this.User.mobileNo,
              email: this.User.email,
              facebook: this.User.facebook,
              imageUrl: this.User.imageUrl
          }
          console.log(newUser)
          Vue.$http.post('http://localhost:3000/users', newUser)
          .then((response) => {
              alert("Added")
              console.log(response)
              this.$router.push('index')
          })
          .catch((error) => {
              console.log(error)
          })
      }
  }
}
</script>
<style>
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