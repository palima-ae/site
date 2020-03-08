<template>
  <v-layout row wrap>
    <v-flex xs12 md6>
      <v-card shaped hover class="pa-5 ma-5" :dark="darkMode">
        <v-row>
          <v-col cols="2" align="center">
            <v-icon class="my-2">mdi-magnify mdi-36px
            </v-icon>
            <br>
            <v-icon large color="teal lighten-1" class="my-2">mdi-bing 
            </v-icon>
            <br>
            <v-icon class="my-2">mdi-google-adwords mdi-36px
            </v-icon>
          </v-col>
          <v-col cols="10">
            <h2>Search</h2>
            <span>There is an existing demand for products and services like yours and Search is the right channel to capture it. We design and execute tailor-made search strategies to drive optimal account performance, reach maximize your ROI on the channel which is the closest to conversion.
            </span>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>


    <v-flex align-center xs12 md6>
      <v-card shaped hover class="pa-5 ma-5" :dark="darkMode">
        <v-row>
          <v-col cols="2" align="center">
            <v-icon large color="blue darken-4" class="my-2">mdi-facebook
            </v-icon>
            <br>
            <v-icon large color="yellow darken-3" class="my-2">mdi-instagram
            </v-icon>
            <br>
            <v-icon large color="blue" class="my-2">mdi-twitter 
            </v-icon>
          </v-col>
          <v-col cols="10">
            <h2>Social</h2>
            <span>Facebook, Instagram or Snapchat are key marketing levers in the GCC region. Combining accurate targeting features, highly immersive formats opportunities and powerful to leverage your first party audience, they enable you engage with the right audience at every stage of the funnel and feed your customer acquisition strategy.
            </span>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>

    <v-flex align-center xs12 md6>
      <v-card shaped shover class="pa-5 ma-5" :dark="darkMode">
        <v-row>
          <v-col cols="2" align="center">
            <v-icon large color="red darken-1" class="my-2">mdi-youtube
            </v-icon>
            <br>
            <v-icon class="fab fa-app-store">fab-app-store
            </v-icon>
            <br>
            <v-icon large color="blue" class="my-2">mdi-snapchat
            </v-icon>
          </v-col>
          <v-col cols="10">
            <h2>Video & Display</h2>
            <span>Unlike traditional media being used for push advertising (radio, TV, etc.), display networks allow you to reach a massive audience with very accurate targeting features and tailored messages on banners or videos. We help you to make the best of a high potential but complex tool to grow your business.
            </span>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>

    <v-flex xs12 md6>
      <v-card shaped hover class="pa-5 ma-5" :dark="darkMode">
        <v-row>
          <v-col cols="2" align="center">
            <v-icon large color="blue darken-4" class="my-2">mdi-google-play
            </v-icon>
            <br>
            <v-icon class="my-2">fab-app-store
            </v-icon>
            <br>
            <v-icon large color="blue" class="my-2">mdi-twitter 
            </v-icon>
          </v-col>
          <v-col cols="10">
            <h2>Apps</h2>
            <span>A tailor-made acquisition and engagement app strategy will enable you to reach the right people at scale. We help you define, activate and optimize the right channels, the most efficient targeting features and the right monitoring tools to generate downloads and increase the number of active users, as well as the monetization of your app.
            </span>
          </v-col>
        </v-row>
      </v-card>
    </v-flex> 
    
    <v-flex xs12 md6>
      <v-card shaped hover class="pa-5 ma-5" :dark="darkMode">
        <v-row>
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
            <h2>Shopping</h2>
            <span>Shopping channels are very efficient but highly technical. They enable you to showcase your whole product catalog with images and prices directly on the ad. This increases the level of information for the user before he clicks, and hence leads to a much higher conversion rate. The share of clicks captured by Shopping drastically increases in every industry. We help you to manage feeds and optimize product categorization to maximize the potential of this channel.
            </span>
          </v-col>
        </v-row>
      </v-card>
    </v-flex> 

    <v-flex xs12 md6>
      <v-card shaped hover class="pa-5 ma-5" :dark="darkMode">
        <v-row>
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
            <h2>SEO</h2>
            <span>We help you increase your website's visibility on search engines such as Google, Bing and Yahoo. We have a holistic approach of SEO, with a very strong focus on the technical SEO aiming at  enabling Google to find your website’s pages, You tube pages, understand them and consider them as relevant to rank on the first page. A content strategy can then by deploy at scale to deliver its full potential and maximize your organic traffic and conversions.
            </span>
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