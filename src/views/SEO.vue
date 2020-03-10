<template>
<v-container fluid>
  <v-row flex>

      <v-col lg="8" sm="12">
        <v-row class="pb-5 px-5">
          <v-card shaped hover :dark="darkMode">
            <v-card-title>
              <v-icon class="pl-2" large>mdi-chart-areaspline</v-icon>
              <span class="pl-8">Traffic Growth</span>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <p>If you're looking for serious business growth, SEO, or search engine optimization is the strategy for you: It targets the users that are most likely to convert on your website, and takes them there.</p>
              <p>A custom SEO campaign targets on-page and off-page SEO includes things like keyword research and content implementation, which helps your audience find you online.</p>
              <p>We also analyze the results of your business’s SEO strategy to ensure that your campaign is performing at its best.</p>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row class="pb-5 px-5">
          <v-card shaped hover :dark="darkMode">
            <v-card-title>
              <v-icon class="pl-2" large>mdi-google-maps</v-icon>
              <span class="pl-8">Local SEO</span>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text> 
              <p>Local SEO services can ensure that your customers find you locally, and that you’re always top of mind when customers are in your neighborhood.</p>
              <p>When potential customers search businesses like yours in their area, you want to appear at the top of results.</p>
              <p>Ultimately, local SEO helps achieve top rankings so more people can find and contact you — and visit your local business.</p>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row class="pb-5 px-5">
          <v-card shaped hover :dark="darkMode" min-height=240>
            <v-card-title>
              <v-icon class="pl-2" large>mdi-google-ads</v-icon>
              <span class="pl-8">Online Advertising</span>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text> 
              <p>PPC, or pay-per-click advertising, is one of the best ways to target your most qualified audience. It allows you to reach them where they’re already looking, and gain a leg up against competitors.</p>
              <p>We deliver custom PPC campaigns to help you increase both conversions and revenue for your company.</p>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>

      <v-col lg="4" xs="12">
        <v-row class="pb-5 px-5">
        <v-card raised hover :dark=darkMode>
          <v-card-title>
              <v-icon class="pl-2" large>mdi-book-open-page-variant</v-icon>
              <span class="pl-8">Services</span>
          </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            <ul id="example-1">
              <li v-for="(service, index) in services" :key="index">  
                <span class="pl-2">{{ service }}</span>
              </li>
            </ul>
          </v-card-text>
        </v-card>
        </v-row>
      </v-col>
  </v-row>
</v-container>
</template>


<script>

import { mapGetters} from 'vuex';

export default {
  name: "SEO",

  props: ["item","id"],
  data: () => {
    return {
      
      services : [
        "Web server analysis & reporting", 
        "Keyphrase research & selection", 
        "Predictive keyword analysis", 
        "Meta tags (Title & description)", 
        "Optimization of robots.txt & GoogleBot crawls", 
        "Creation & registrations of sitemap.xml", 
        "Video and image XML sitemaps", 
        "Google My Business optimization (if needed)", 
        "Mobile site optimization (if applicable)", 
        "Information architecture audit", 
        "Google Analytics setup w/ conversion tracking", 
        "Google Analytics traffic analysis", 
        "Custom Dashboards/Data Views", 
        "Local search optimization", 
        "Image optimization", 
        "Link redirect audit", 
        "Schema HTML tags", 
        "Canonicalization analysis & domain unification",
        "Google data highlights", 
        "Internal linking restructuring & optimization", 
        "Linkable content promotion", 
        "Duplicate content analysis", 
        "Website usability analysis", 
        "Searcher experience analysis long-clicks, pogo-sticking, bounce rate, etc.)", 
        "Monitor competitors' search rankings on a monthly basis", 
        "Monitor competitors' content and link additions on a monthly basis"
      ]
    }
  },


  computed: {
    ...mapGetters(['darkMode']),
    

  },

  methods: {
    handleView(el) {
      this.item.open = !this.item.open;
      let viewportOffset = el.target.getBoundingClientRect();
      if(this.item.open) {
        document.body.style.top = '-' + window.scrollY + 'px';
        document.body.style.position = 'fixed';
        this.styleObject.transform = 
          'translate('+ viewportOffset.left * -1 +'px, '+ viewportOffset.top * -1 +'px)';
      }
      else {
        this.styleObject = {
          transform: 'translate(0px,0px)'
        };
        let scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY) * -1);
      }
    }
  }
};
</script>