<template>
<v-container>


    <!-- <v-col lg=2 align="center">
      <h2>Our Team</h2>
        <v-divider></v-divider>
    </v-col> -->


    <v-tabs
      v-model="tabs"
      height=100
      centered
      :background-color="appBgColor"
      :dark="darkMode"
      :class="tabBarClass"
      active-class="text-accent-6"
    >
      <v-tab>TEAM</v-tab>
      <v-tab>CONTACT</v-tab>
    </v-tabs>


  <v-tabs-items v-model="tabs">


  <!-- ========================================  -->
  <!-- TEAM TAB -->
  <!-- ========================================  -->
  
  
  <v-tab-item>
  <v-card flat tile height="100%" :color="appBgColor">

  <v-row class="d-flex flex-sm-row">

    <v-col lg="2">
    </v-col>

    <v-col lg="6">

      <v-card raised :dark="darkMode" class="mb-5">
      <v-row no-gutters>

        <v-col lg="4">
          <v-card flat tile :dark="darkMode">
            <v-img src="@/assets/max.jpg" height=210 style="border-right: 0.5px ridge lightgray"></v-img>
            <div style="border-right: 0.5px ridge lightgray">
            <v-card-title>Maxime</v-card-title>
            <v-card-subtitle>Founder</v-card-subtitle>
            </div>
          </v-card>
        </v-col>
        
        <v-col lg="8" align="start">
          <v-card flat tile :dark="darkMode" class="px-4">
          <v-card-subtitle>
            <v-row align="center">
            <span>Background</span>
            <v-spacer></v-spacer>
            <v-btn text>CV</v-btn>
            </v-row>
          </v-card-subtitle>
          <v-divider></v-divider>
          <v-card-text>
            <span>ESSEC Business School</span>
            <br>
            <span class="ml-10 font-weight-light overline">Ranked 7th best in Europe</span>
            <br>
            <span>Nanyang Business School (Singapore)</span>
            <br>
            <span class="ml-10 font-weight-light overline">Ranked 5th best in Asia</span>
            <br><br>
            <p>Strong Experience in Luxury Marketing</p>
            <span>Passionate about Web Technologies</span>
          </v-card-text>

          <!-- <v-card-actions> 
            <v-spacer></v-spacer>
            <v-btn text>CV</v-btn>
          </v-card-actions> -->
          </v-card>
        </v-col>

      </v-row>
      </v-card>


      <v-card raised :dark="darkMode" class="mt-5">
        <v-card-subtitle>Certified</v-card-subtitle>
        <v-divider class="mx-4"></v-divider>
        <v-expansion-panels>

          <!-- FIRST PANNEL -->
          <v-expansion-panel>
            <v-expansion-panel-header>Google Analytics</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row class='mx-5 font-weight-light'>
                  Analytics for Beginners
                  <v-spacer></v-spacer>
                  <v-btn text 
                         class='font-weight-light'
                         link to='/certificate/beginner-analytics'
                         >
                         View
                  </v-btn>
                </v-row>
              </v-expansion-panel-content>
            <v-expansion-panel-content>
                <v-row class='mx-5 font-weight-light'>
                  Advanced Analytics
                  <v-spacer></v-spacer>
                  <v-btn text 
                         class='font-weight-light'
                         link to='/certificate/advanced-analytics'
                         >
                         View
                  </v-btn>
                </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <!-- SECOND PANNEL  -->
          <v-expansion-panel>
            <v-expansion-panel-header>IBM Data Science</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row class='mx-5 font-weight-light'>
                  Open Source Tools for Data Science
                  <v-spacer></v-spacer>
                  <v-btn text 
                         class='font-weight-light'
                         link to="/certificate/open-source-tools-for-data-science"
                         >
                         View
                  </v-btn>
                </v-row>
              </v-expansion-panel-content>
            <v-expansion-panel-content>
                <v-row class='mx-5 font-weight-light'>
                  Data Science Methodology
                  <v-spacer></v-spacer>
                  <v-btn text 
                         class='font-weight-light'
                         link to="/certificate/data-science-methodology"
                         >
                         View
                  </v-btn>
                </v-row>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
                <v-row class='mx-5 font-weight-light'>
                  Python for Data Science and AI
                  <v-spacer></v-spacer>
                  <v-btn text 
                         class='font-weight-light'
                         link to="/certificate/python-for-data-science"
                         >
                         View
                  </v-btn>
                </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <!-- THIRD PANNEL  -->
          <v-expansion-panel>
            <v-expansion-panel-header>DataQuest Data Analyst</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row class='mx-5 font-weight-light'>
                  SQL Fundamentals
                  <v-spacer></v-spacer>
                  <v-btn text 
                         class='font-weight-light'
                         link to="/certificate/sql-fundamentals"
                         >
                         View
                  </v-btn>
                </v-row>
              </v-expansion-panel-content>
            <v-expansion-panel-content>
                <v-row class='mx-5 font-weight-light'>
                  Data Cleaning and Analysis
                  <v-spacer></v-spacer>
                  <v-btn text  
                         class='font-weight-light'
                         link to="/certificate/python-data-cleaning"
                         >
                         View
                  </v-btn>
                </v-row>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
                <v-row class='mx-5 font-weight-light'>
                  Python Data Cleaning - Advanced
                  <v-spacer></v-spacer>
                  <v-btn text 
                         class='font-weight-light'
                         link to='/certificate/python-data-cleaning-advanced'
                         >
                         View
                  </v-btn>
                </v-row>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
                <v-row class='mx-5 font-weight-light'>
                  Exploratory Data Visualization
                  <v-spacer></v-spacer>
                  <v-btn text 
                         class='font-weight-light'
                         link to="/certificate/exploratory-data-viz"
                         >
                         View
                  </v-btn>
                </v-row>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
                <v-row class='mx-5 font-weight-light'>
                  Storytelling Data Visualization
                  <v-spacer></v-spacer>
                  <v-btn text 
                         class='font-weight-light'
                         link to="/certificate/storytelling-data-viz"
                         >
                         View
                  </v-btn>
                </v-row>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
                <v-row class='mx-5 font-weight-light'>
                  Pandas and Numpy Fundamentals
                  <v-spacer></v-spacer>
                  <v-btn text 
                         class='font-weight-light'
                         link to="/certificate/pandas-fundamentals"
                         >
                         View
                  </v-btn>
                </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>


        </v-expansion-panels>
      </v-card>

    </v-col>





    <v-col lg="4">
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
  </v-card>
  
  
  <!-- ========================================  -->
  <!-- CONTACT TAB -->
  <!-- ========================================  -->
  </v-tab-item>
  
    <v-card tile flat :color="appBgColor" class="pt-10">
      <v-card-text large class="font-weight-medium text-center">palima.ae@protonmail.com</v-card-text>
    </v-card>
  
  </v-tabs-items>



</v-container>
</template>



<script>

import { mapGetters } from 'vuex';

export default {
    name: 'Who',

    data () {
        return {
          tabs: null, 

          skills : [
            {name: "python", icon:"mdi-language-python", value: 100},
            {name: "javascript", icon:"mdi-language-javascript", value:40},
            {name: 'vue js', icon:'mdi-vuejs', value:70},
            {name: "google analytics", icon:'mdi-google-analytics', value:90},
            {name: 'google adwords', icon:"mdi-google-ads", value:80},
            {name: "google firebase", icon:"mdi-firebase", value:60},
            {name: 'email campaigns', icon:"mdi-email-edit", value:90},
            {name: "backend development", icon:"mdi-database", value:100},
            {name: "data visualization", icon: 'mdi-desktop-mac-dashboard', value:70},
            {name: "desktop apps", icon: 'mdi-desktop-mac', value:80},
            {name: "mobile apps", icon:'mdi-cellphone-iphone', value:50},
            {name: "apache kafka", icon:"mdi-apache-kafka", value:70},
            {name: "api design", icon:"mdi-api", value:85},


            
          ]

        }        
    },
    // end DATA
    
    computed: {
      ...mapGetters(['darkMode']),
    appBgColor () {return (this.darkMode ? "black" : "#F8F8FF")},
    tabBarClass () {return (this.dw_getWindowDims.width<960 ? "mobTabBar" : "deskTabBar")},
    dw_getWindowDims() {
      var doc = document, w = window;
      var docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
              doc.documentElement: doc.body;
      
      var width = docEl.clientWidth;
      var height = docEl.clientHeight;
      
      // mobile zoomed in?
      if ( w.innerWidth && width > w.innerWidth ) {
          width = w.innerWidth;
          height = w.innerHeight;
      }
      return {width: width, height: height};
    },

    }
}

</script>


<style lang="scss" scoped>

.mobTabBar {
  margin: auto;
  width: 90vw;
}

.deskTabBar {
  padding-bottom: 5px;
}


</style>
