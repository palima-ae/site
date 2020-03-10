<template>
<v-container>

  <v-row>

    <v-col lg=2 align="center">
      <h2>Our Team</h2>
        <v-divider></v-divider>
    </v-col>




    <v-col lg="6">
      <v-card raised :dark="darkMode">
      <v-row no-gutters>

        <v-col lg="4">
          <v-card flat tile height=300 :dark="darkMode">
            <v-img src="@/assets/max.jpg" height=210></v-img>
            <v-card-title>Max Mansour</v-card-title>
            <v-card-subtitle>Founder</v-card-subtitle>
          </v-card>
        </v-col>
        
        <v-col lg="8" align="start">
          <v-card flat tile height=300 :dark="darkMode" class="px-4 pb-5">
          <v-card-subtitle>Background</v-card-subtitle>
          <v-divider></v-divider>
          <v-card-text>
            <span>ESSEC Business School</span>
            <br>
            <span class="ml-10 font-weight-light">Ranked 8th best in Europe</span>
            <br>
            <span>Nanyang Business School (Singapore)</span>
            <br>
            <span class="ml-10 font-weight-light">Ranked 5th best in Asia</span>
            <br><br>
            <p>Strong Experience in Luxury Marketing</p>
            <span>Passionate about Web Technologies</span>
          </v-card-text>

          <v-card-actions> 
            <v-spacer></v-spacer>
            <v-btn text>Download CV</v-btn>
          </v-card-actions>
          </v-card>
        </v-col>

      </v-row>
      </v-card>
    </v-col>



<!-- <v-col lg="6">
<v-card
      class="mx-auto"
      tile
    >
        <v-row
          align="end"
          class="fill-height"
        >
          <v-col
            align-self="start"
            class="pa-0"
            cols="12"
          >
            <v-avatar
              color="grey"
              size="164"
              tile
            >
              <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
            </v-avatar>
          </v-col>
          <v-col class="py-0">
            <v-list-item
              color="rgba(0, 0, 0, .4)"
              dark
            >
              <v-list-item-content>
                <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
                <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
    </v-card>
</v-col> -->




    <!-- <v-col
            lg="6"
          >
            <v-card
              :dark="darkMode"
            >
              <div class="d-flex flex-no-wrap" align="center">
                <v-avatar
                  height=200
                  width=140
                  left
                  tile
                >
                  <v-img src="@/assets/max.jpg"></v-img>
                </v-avatar>
                <div>
                  <v-card-title>Maxime Mansour</v-card-title>
                  <v-card-subtitle class='my--2'><span class="ml-3">Founder</span></v-card-subtitle>
                  <v-divider></v-divider>
                  <v-card-text class="pb-3 mb-5">
                    <span>ESSEC Business School (France)</span>
                    <br>
                    <span>Nanyang Business School (Singapore)</span>
                    <br><br>
                    <span>Strong Experience in Luxury Marketing</span>
                    <br>
                    <span>Passionate about Web Technologies</span>
                  </v-card-text>
                </div>
  
              </div>
            </v-card>
          </v-col> -->


    <v-col>
      <v-card :dark="darkMode">
        <v-card-subtitle align="center">
          Technical Skills
        </v-card-subtitle>
        <v-divider class='mx-4'></v-divider>
        <v-container>
        
          <v-row v-for="(skill, index) in skills" :key="index" align="center">
            <v-col cols="4" align="center">
              <v-icon>{{ skill.icon }}</v-icon>
            </v-col>
            <v-col cols="8">
              <v-progress-linear
                :value="skill.value"
                color="deep-purple accent-4"
                rounded
                :dark="darkMode"
              ></v-progress-linear>
            <span class="font-weight-light">
              {{skill.name}}
            </span>
            </v-col>
          </v-row>

        </v-container>
      </v-card>
    </v-col>
  
  </v-row>


</v-container>
</template>



<script>

import { mapGetters } from 'vuex';

export default {
    name: 'Who',

    data () {
        return {

          skills : [
            {name: "python", icon:"mdi-language-python", value: 90},
            {name: "javascript", icon:"mdi-language-javascript", value:40},
            {name: 'vue js', icon:'mdi-vuejs', value:70},
            {name: "google analytics", icon:'mdi-google-analytics', value:90},
            {name: 'google adwords', icon:"mdi-google-ads", value:80},
            {name: "google firebase", icon:"mdi-firebase", value:60},
            {name: 'email campaigns', icon:"mdi-email-edit", value:90},
            {name: "backend development", icon:"mdi-database", value:100},
            {name: "apache kafka", icon:"mdi-apache-kafka", value:70},
            {name: "api design", icon:"mdi-api", value:85},
            {name: "desktop apps", icon: 'mdi-desktop-mac', value:80},
            {name: "data visualization", icon: 'mdi-desktop-mac-dashboard', value:70},


            
          ]

        }        
    },
    // end DATA
    
    computed: {
      ...mapGetters(['darkMode'])

    }
}

</script>