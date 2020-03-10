<template>
<div>
  <v-row>
    <v-col> 
        <v-img contain height="500" src="@/assets/iconstackblue.png"></v-img>
    </v-col>
  </v-row>

  <v-row>
    <v-col> 
      <v-card :dark="darkMode" color="transparent" disabled flat> 
        <v-card-text>
        <h3>We leverage data to empower online advertising campaigns</h3>
        <span>
          Acquisit is a data-driven advertising agency. We stand between brands and online advertising platforms such as Google, Facebook, Snapchat. We analyse brand’s business model and leverage their data to make the most of online ads technologies and inventories. Our actions result in significant impact for our clients and a deep level of understanding of their key growth drivers.
        </span>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

  <v-row>
    <v-col>
      <v-card :dark="darkMode" color="transparent" disabled flat>
        <v-card-text>
          <h3>PERFORMANCE ADVERTISING</h3>
          <span>
            Find out about our unique methodology and the technologies we use to increase sales for your company.
          </span>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

</div>
</template>

<script>

import { mapGetters} from 'vuex';

export default {
    name: 'Home',

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
