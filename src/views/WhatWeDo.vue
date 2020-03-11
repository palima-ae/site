<template>
  <v-layout row wrap>
    <v-flex xs12 md6>
      <v-card shaped 
              hover 
              class="pa-5 ma-5" 
              :dark="darkMode"
              min-height=300>
        <v-row align="center">
          <v-col cols="2" align="center">
            <v-icon large class="my-2">mdi-magnify
            </v-icon>
            <br>
            <v-icon large color="teal lighten-1" class="my-2">mdi-bing 
            </v-icon>
            <br>
            <v-icon large class="my-2">mdi-google-adwords
            </v-icon>
          </v-col>
          <v-col cols="10">
            <v-card-title>Search</v-card-title>
            <v-card-text>
                <p>There is an existing demand for products and services like 
                  yours and Search is the right channel to capture it.</p>
                <p>We design and execute tailor-made search strategies to 
                  drive optimal account performance, reach maximize your ROI on the channel which is the closest to conversion.</p>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>


    <v-flex align-center xs12 md6>
      <v-card shaped 
              hover 
              class="pa-5 ma-5" 
              :dark="darkMode"
              min-height=300
              >
        <v-row align="center">
          <v-col cols="2" align="center">
            <v-icon large color="blue darken-4" class="my-5">mdi-facebook
            </v-icon>
            <br>
            <v-icon large color="yellow darken-3" class="my-2">mdi-instagram
            </v-icon>
            <br>
            <v-icon large color="blue" class="my-5">mdi-twitter 
            </v-icon>
          </v-col>
          <v-col cols="10">
            <v-card-title>Social</v-card-title>
            <v-card-text>
              <p>Facebook, Instagram or Snapchat are key marketing levers in the GCC region. Combining accurate targeting features, highly immersive formats opportunities and powerful to leverage your first party audience, they enable you engage with the right audience at every stage of the funnel and feed your customer acquisition strategy.</p>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>

    <v-flex align-center xs12 md6>
      <v-card shaped 
              hover 
              class="pa-5 ma-5" 
              :dark="darkMode"
              min-height=300
              >
        <v-row align="center">
          <v-col cols="2" align="center">
            <v-icon large color="red darken-1" class="my-2">mdi-youtube
            </v-icon>
            <br>
            <font-awesome-icon :icon="['fab', 'app-store-ios']" />
            <br>
            <v-icon large color="blue" class="my-2">mdi-snapchat
            </v-icon>
          </v-col>
          <v-col cols="10">
            <v-card-title>Video & Display</v-card-title>
            <v-card-text>
              <p>Unlike traditional media being used for push advertising (radio, TV, etc.), display networks allow you to reach a massive audience with very accurate targeting features and tailored messages on banners or videos.</p>
              <p>We help you to make the best of a high potential but complex tool to grow your business.</p>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>

    <v-flex xs12 md6>
      <v-card shaped 
              hover 
              class="pa-5 ma-5" 
              :dark="darkMode"
              min-height=300
              >
        <v-row align="center">
          <v-col cols="2" align="center">
            <v-icon large color="blue darken-4" class="my-2">mdi-google-play
            </v-icon>
            <br>
            <v-icon large class="my-2">mdi-google-controller
            </v-icon>
            <br>
            <v-icon large color="blue" class="my-2"> 
            </v-icon>
          </v-col>
          <v-col cols="10">
            <v-card-title>Apps</v-card-title>
            <v-card-text>
              <p>A tailor-made acquisition and engagement app strategy will enable you to reach the right people at scale.</p>
              <p>We help define, activate and optimize the right channels, the most efficient targeting features and monitoring tools to generate downloads and increase the number of active users, as well as the monetization of your app.</p>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-flex> 
    
    <v-flex xs12 md6>
      <v-card shaped 
              hover 
              class="pa-5 ma-5" 
              :dark="darkMode"
              min-height=300
              >
        <v-row align="center">
          <v-col cols="2" align="center">
            <v-icon large color="yellow darken-2" class="my-2">mdi-amazon
            </v-icon>
            <br>
            <v-icon large class="my-5">mdi-google-my-business
            </v-icon>
            <br>
            <v-icon large color="blue" class="my-2">
            </v-icon>
          </v-col>
          <v-col cols="10">
            <v-card-title>Shopping</v-card-title>
            <v-card-text>
              <p>Shopping channels are very efficient but highly technical. They enable you to showcase your whole product catalog with images and prices directly on the ad.</p>
              <p>This increases the level of information for the user before he clicks, and hence leads to a much higher conversion rate. The share of clicks captured by Shopping drastically increases in every industry. We help you to manage feeds and optimize product categorization to maximize the potential of this channel.</p>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-flex> 

    <v-flex xs12 md6>
      <v-card shaped 
              hover 
              class="pa-5 ma-5" 
              :dark="darkMode"
              min-height=300
              >
        <v-row align="center">
          <v-col cols="2" align="center">
            <v-icon large color="blue darken-4" class="my-2">mdi-google-play
            </v-icon>
            <br>
            <v-icon class="my-2">fab-app-store
            </v-icon>
            <br>
            <v-icon large color="blue" class="my-2">
            </v-icon>
          </v-col>
          <v-col cols="10">
            <v-card-title>SEO</v-card-title>
            <v-card-text>
              <p>We help increase your website's visibility on search engines such as Google, Bing and Yahoo. We have a holistic approach of SEO, with a very strong focus on the technical SEO aiming at  enabling Google to find your website’s pages, You tube pages, understand them and consider them as relevant to rank on the first page.</p>
              <p>A content strategy can then be deployed at scale to deliver its full potential and maximize your organic traffic and conversions.</p>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-flex> 

  </v-layout>
</template>


<script>

import { mapGetters} from 'vuex';

export default {
    name: 'WhatWeDo',

    data () {
        return {
        }        
    },
    // end DATA

    computed: {
      ...mapGetters(['darkMode']),
    },
    // end COMPUTED
}
// end EXPORT

</script>