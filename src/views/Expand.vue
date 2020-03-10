<template>
<v-container fluid>

    <v-tabs
      v-model="tabs"
      height=100
      width="100vw"
      centered
      :background-color="appBgColor"
      :dark="darkMode"
      :class="tabBarClass"
      active-class="text-accent-6"
    >
      <v-tab>SEO & ADs</v-tab>
      <v-tab>EMAIL</v-tab>
      <v-tab>ANALYTICS</v-tab>
    </v-tabs>


  <v-tabs-items v-model="tabs">
      
  <v-tab-item>
  <v-card flat tile height="100%" :color="appBgColor">
  <v-row>

      <v-col lg="8" sm="12">
        <v-row class="pb-5 px-5">
          <v-card shaped hover :dark="darkMode">
            <v-card-title>
              <v-icon class="pl-2" large>mdi-chart-areaspline</v-icon>
              <span class="pl-8">Traffic Growth</span>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text class="px-8">
              <p>If you're looking for serious business growth, SEO, or search engine optimization is the 
                strategy for you: It targets the users that are most likely to convert on your website, and takes them there.</p>
              <p>A custom SEO campaign targets on-page and off-page SEO includes things like keyword research 
                and content implementation, which helps your audience find you online.</p>
              <p>We also analyze the results of your business’s SEO strategy to ensure that your campaign is 
                performing at its best.</p>
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
            <v-card-text class="px-8"> 
              <p>Local SEO services can ensure that your customers find you locally, and that you’re always top of 
                mind when customers are in your neighborhood.</p>
              <p>When potential customers search businesses like yours in their area, you want to appear at 
                the top of results.</p>
              <p>Ultimately, local SEO helps achieve top rankings so more people can find and contact you — 
                and visit your local business.</p>
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
            <v-card-text class="px-8"> 
              <p>PPC, or pay-per-click advertising, is one of the best ways to target your 
                most qualified audience. It allows you to reach them where they’re already looking, 
                and gain a leg up against competitors.</p>
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
              <li v-for="(service, index) in seo_services" :key="index">  
                <span class="pl-2">{{ service }}</span>
              </li>
            </ul>
          </v-card-text>
        </v-card>
        </v-row>
      </v-col>
  </v-row>
  </v-card>
  </v-tab-item>



  <v-tab-item>
  <v-card flat tile height="100%" :color="appBgColor">
  <v-row>

      <v-col lg="8" sm="12">
        <v-row class="pb-5 px-5">
          <v-card shaped hover :dark="darkMode">
            <v-card-title>
              <v-icon class="pl-2" large>mdi-target-account</v-icon>
              <span class="pl-8">Tailored Campaigns</span>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <p>Email marketing is one of the best web marketing strategies for your business to increase brand awareness, 
                remind people of your business, and keep shoppers coming back for more.</p>
              <p>To get the most out of your email marketing strategy, you have to build a strong campaign 
                that ensures your subscribers get the right information at the right time.</p>
              <p>We offer many different email marketing management services to help your business succeed 
                by placing you in your target audience's inbox.</p>


            </v-card-text>
          </v-card>
        </v-row>
        <v-row class="pb-5 px-5">
          <v-card shaped hover :dark="darkMode">
            <v-card-title>
              <v-icon class="pl-2" large>mdi-account-convert</v-icon>
              <span class="pl-8">Lead Nurturing</span>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text> 
              <p>Your customers' purchasing decisions can take weeks (or months!), 
               so it's essential that you nurture your leads over time to turn them into paying customers. 
               Intelligent email is one of the most effective forms of lead nurturing on the market.</p>
              <p>With our marketing campaigns, you can:
                <ul>
                  <li>Send intelligent emails on a strategic distribution schedule.</li>
                  <li>Tailor your intelligent email content to individual customers.</li>
                  <li>Set up intelligent emails to trigger when users visit pages or submit forms.</li>
                </ul>
              </p>
              <p>Intelligent email marketing is one of the most effective channels for reaching customers because it allows 
                you to directly communicate with those who have already expressed interest in your business. 
                A message delivered to a lead’s inbox is a powerful tool — but only if it’s the right message.
              </p>
              <p>We create campaigns that are tailored to individual leads. Instead of sending the same emails to 
                all of your subscribers, you can send targeted and relevant messages that will keep both current 
                and potential customers engaged no matter where they are in the buying process.
              </p>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row class="pb-5 px-5">
          <v-card shaped hover :dark="darkMode" min-height=240>
            <v-card-title>
              <v-icon class="pl-2" large>mdi-monitor-dashboard</v-icon>
              <span class="pl-8">Monitoring</span>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text> 
              <p>As with any marketing strategy, it’s important to monitor how well your email strategy is 
                performing so can make sure you're nurturing your leads well. With our reports, you can view sends, opens, and 
                clicks right as they happen.
              </p>
              <p>As your campaigns progress, you’ll begin to see patterns in customer behavior. 
                This will not only show you how well your strategy is performing, but also help you identify areas 
                that you can improve so you can nurture your leads better. You can edit existing emails and even add 
                additional stages to your process to boost your email marketing success.
              </p>
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
              <li v-for="(service, index) in email_services" :key="index">  
                <span class="pl-2">{{ service }}</span>
              </li>
            </ul>
          </v-card-text>
        </v-card>
        </v-row>
      </v-col>

  </v-row>
  </v-card>
  </v-tab-item>


  <v-tab-item>
  <v-card flat tile height="100%" :color="appBgColor">
    <v-container fluid>
    <v-row align-content="center">
      <v-col lg="4" xs="12"> 
        <v-card tile flat hover :height="cardHeight" color="purple lighten-2">
        </v-card>
      </v-col>
      <v-col lg="4" xs="12">
        <v-card tile flat hover :height="cardHeight" color="yellow lighten-2">
        </v-card>
      </v-col>
      <v-col lg="4" xs="12">
        <v-card tile flat hover :height="cardHeight" color="blue lighten-2">
        </v-card>
      </v-col>
    </v-row>  
    <v-row align-content="center">
      <v-col lg="4" xs="12"> 
        <v-card tile flat hover :height="cardHeight" color="red lighten-2">
        </v-card>
      </v-col>
      <v-col lg="4" xs="12">
        <v-card tile flat hover :height="cardHeight" color="green lighten-2">
        </v-card>
      </v-col>
      <v-col lg="4" xs="12">
        <v-card tile flat hover :height="cardHeight" color="orange lighten-2">
        </v-card>
      </v-col>
    </v-row> 
    </v-container> 
  </v-card>
  </v-tab-item>


  </v-tabs-items>
</v-container>
</template>


<script>

import { mapGetters} from 'vuex';

export default {
  name: "Expand",

  props: ["item","id"],
  data: () => {
    return {
      tabs: null,  
      cardHeight: 300,
      seo_services : [
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
      ],

      email_services: [
        "Campaign and target strategy", 
        "Lead nurture workflow development", 
        "Creative theme development", 
        "Coding of lifecycle emails", 
        "Testing of emails on 24 clients", 
        "CAN-SPAM Act checkup",
        "Lifecycle email strategic distribution schedule", 
        "Custom segmented lists", 
        "Web form signup implementation", 
        "Web form signup tagging coding", 
        "Manual form subscription to lifecycle email campaign",
        "Built-in unsubscribe functionality", 
        "Reports for open rate per lifecycle campaign stage", 
        "Reports for individual subscribers", 
        "Clickthrough rate reports per drip stage", 
        "Complete visitor/lead lifecycle \t\n view (website visits, pages viewed, emails viewed, emails opened, etc.)",
        "Triggered emails based on web visitor behavior"
]
    }
  },


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


<style lang="scss" scoped>

.mobTabBar {
  margin: auto;
  width: 90vw;
}

.deskTabBar {
  padding-bottom: 5px;
}


</style>
