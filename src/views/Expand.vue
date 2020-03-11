<template>
<v-container fluid>

    <v-tabs
      v-model="tabs"
      height=100
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
      
  <!-- ========================================  -->
  <!-- SEO & ADS TAB -->
  <!-- ========================================  -->
  
  <v-tab-item>
  <v-card flat tile height="100%" :color="appBgColor">
  <v-row class="d-flex flex-row">

      <v-col cols="12" lg="8" xs="12" sm="12" md="12">
        <v-row class="pb-5 px-5">
          <v-card shaped hover :dark="darkMode" width=100%>
            <v-card-title>
              <v-icon class="pl-2" large>mdi-chart-areaspline</v-icon>
              <span class="pl-8">Traffic Growth</span>
              <v-spacer></v-spacer>
              <v-icon large @click.stop="displaySEOelem1 = !displaySEOelem1">
                {{ displaySEOelem1===false ? downIcon : upIcon }}
              </v-icon>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text :style="showSEOelem1" class="px-8">
              <p>If you are looking for serious business growth, SEO is the 
                strategy for you.
                <br>
                It targets the users that are most likely to convert on your website, and takes them there.</p>
              <p>A custom SEO campaign targets on-page and off-page SEO, and can include things like keyword research 
                and content implementation to your audience find you online.</p>
              <p>We also analyze the results of your business’s SEO strategy to ensure that your campaign is 
                performing at its best.</p>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row class="pb-5 px-5">
          <v-card shaped hover :dark="darkMode" width=100%>
            <v-card-title>
              <v-icon class="pl-2" large>mdi-google-maps</v-icon>
              <span class="pl-8">Local SEO</span>
              <v-spacer></v-spacer>
              <v-icon large @click.stop="displaySEOelem2 = !displaySEOelem2">
                {{ displaySEOelem2===false ? downIcon : upIcon }}
              </v-icon>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text :style="showSEOelem2" class="px-8"> 
              <p>Local SEO services can ensure that your customers find you locally, and that you are always top of 
                mind when customers are in your neighborhood.</p>
              <p>When potential customers search businesses like yours in their area, you want to appear at 
                the top of results.</p>
              <p>Ultimately, local SEO helps achieve top rankings so more people can find and contact you — 
                and visit your local business.</p>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row class="pb-5 px-5">
          <v-card shaped hover :dark="darkMode" width=100%>
            <v-card-title>
              <v-icon class="pl-2" large>mdi-amazon</v-icon>
              <span class="pl-8">Amazon SEO</span>
              <v-spacer></v-spacer>
              <v-icon large @click.stop="displaySEOelem4 = !displaySEOelem4">
                {{ displaySEOelem4===false ? downIcon : upIcon }}
              </v-icon>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text :style="showSEOelem4" class="px-8"> 
              <p>We research high-volume, low-competition search queries on Amazon and incorporating them 
                  into your product page to increase its ranking.
              </p>
              <p>We prioritize user experience, which is why we create content that emphasizes 
                  readability and quality, as well as your brand voice. It’s natural and connects with 
                  shoppers, encouraging them to choose your company and product.
              </p>
              <p>With pay-per-click (PPC) services on Amazon, we can also help your product gain immediate 
                  exposure to complement your SEO strategy. Like traditional PPC ads, you only pay when a 
                  shopper clicks on your listing.
              </p>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row class="pb-5 px-5">
          <v-card shaped hover :dark="darkMode" width=100%>
            <v-card-title>
              <v-icon class="pl-2" large>mdi-google-ads</v-icon>
              <span class="pl-8">Online Advertising</span>
              <v-spacer></v-spacer>
              <v-icon large @click.stop="displaySEOelem3 = !displaySEOelem3">
                {{ displaySEOelem3===false ? downIcon : upIcon }}
              </v-icon>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text :style="showSEOelem3" class="px-8"> 
              <p>PPC, or pay-per-click advertising, is one of the best ways to target your 
                most qualified audience. It allows you to reach them where they’re already looking, 
                and gain a leg up against competitors.</p>
              <p>We deliver custom PPC campaigns to help you increase both conversions and revenue for your company.</p>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>

      <v-col cols="12" lg="4" sm="12" md="12">
        <v-row class="pb-5 px-5">
        <v-card raised hover :dark=darkMode width=100% id="servicesCard">
          <v-card-title>
              <v-icon class="pl-2" large>mdi-book-open-page-variant</v-icon>
              <span class="pl-8">Services</span>
              <v-spacer></v-spacer>
              <v-icon large @click.stop="displaySEOservices = !displaySEOservices">
                {{ displaySEOservices===false ? downIcon : upIcon }}
              </v-icon>
          </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text :style="showSEOservices">
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

  <!-- ========================================  -->
  <!-- EMAIL CAMPAIGN TAB -->
  <!-- ========================================  -->
  
  <v-tab-item>
  <v-card flat tile height="100%" :color="appBgColor">
  <v-row class="flex-row">

      <v-col cols="12" lg="8" sm="12">
        <v-row class="pb-5 px-5">
          <v-card shaped hover :dark="darkMode" width=100%>
            <v-card-title>
              <v-icon class="pl-2" large>mdi-target-account</v-icon>
              <span class="pl-8">Tailored Campaigns</span>
              <v-spacer></v-spacer>
              <v-icon large @click.stop="displayEmailelem1 = !displayEmailelem1">
                {{ displayEmailelem1===false ? downIcon : upIcon }}
              </v-icon>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text :style="showEmailelem1" class="px-8">
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
          <v-card shaped hover :dark="darkMode" width=100%>
            <v-card-title>
              <v-icon class="pl-2" large>mdi-account-convert</v-icon>
              <span class="pl-8">Lead Nurturing</span>
              <v-spacer></v-spacer>
              <v-icon large @click.stop="displayEmailelem2 = !displayEmailelem2">
                {{ displayEmailelem2===false ? downIcon : upIcon }}
              </v-icon>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text :style="showEmailelem2" class="px-8"> 
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
          <v-card shaped hover :dark="darkMode" width=100%>
            <v-card-title>
              <v-icon class="pl-2" large>mdi-account-arrow-right</v-icon>
              <span class="pl-8">Email Retargeting</span>
              <v-spacer></v-spacer>
              <v-icon large @click.stop="displayEmailelem4 = !displayEmailelem4">
                {{ displayEmailelem4===false ? downIcon : upIcon }}
              </v-icon>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text :style="showEmailelem4" class="px-8"> 
              <p>A proper ecommerce retargeting strategy minimizes abandoned carts and maximizes the 
                  chances that your customers will make a purchase on your site.
              </p>
              <p>Retargeting helps companies reach website visitors who don’t immediately convert. 
                  In other words, retargeting can help your business connect with potential customers after 
                  they leave your website and encourage them to return.
              </p>
              <p>It requires using cookies to track user activities on the Internet. You can place small 
                pieces of code on your website, and every time a visitor enters your site, the code will 
                release an anonymous browser cookie. If someone enters their email address on your site and 
                leaves before making a purchase, you can trigger a personalized email with the products they 
                viewed or placed in their cart.
              </p>
              <p>Retargeting helps you get the most out of your advertising budget, because 
                it allows you to focus your attention on people who have demonstrated interested in your 
                brand. You can use clear calls to action and promotional offers to encourage them to come 
                back to your website and convert.
              </p>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row class="pb-5 px-5">
          <v-card shaped hover :dark="darkMode" width=100%>
            <v-card-title>
              <v-icon class="pl-2" large>mdi-monitor-dashboard</v-icon>
              <span class="pl-8">Monitoring</span>
              <v-spacer></v-spacer>
              <v-icon large @click.stop="displayEmailelem3 = !displayEmailelem3">
                {{ displayEmailelem3===false ? downIcon : upIcon }}
              </v-icon>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text :style="showEmailelem3" class="px-8"> 
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

      <v-col cols="auto" lg="4" xs="12">
        <v-row class="pb-5 px-5">
        <v-card raised hover :dark=darkMode id="servicesCard" width=100%>
          <v-card-title>
              <v-icon class="pl-2" large>mdi-book-open-page-variant</v-icon>
              <span class="pl-8">Services</span>
              <v-spacer></v-spacer>
              <v-icon large @click.stop="displayEmailservices = !displayEmailservices">
                {{ displayEmailservices===false ? downIcon : upIcon }}
              </v-icon>
          </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text :style="showEmailservices">
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
  
  
  <!-- ========================================  -->
  <!-- ANALYTICS TAB-->
  <!-- ========================================  -->
  
  
  <v-tab-item>
  <v-card flat tile height="100%" :color="appBgColor">
  <v-row class="flex-row">

      <v-col cols="12" lg="8" sm="12">
        <v-row class="pb-5 px-5">
          <v-card shaped hover :dark="darkMode" width=100%>
            <v-card-title>
              <v-icon class="pl-2" large>mdi-database</v-icon>
              <span class="pl-8">Data Platform</span>
              <v-spacer></v-spacer>
              <v-icon large @click.stop="displayAnalelem1 = !displayAnalelem1">
                {{ displayAnalelem1===false ? downIcon : upIcon }}
              </v-icon>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text :style="showAnalelem1" class="px-8">
              <p>Often, businesses do not know how to handle all their data because of the sheer volume. 
                From user demographics to time on page, these are just two examples of the dozens of data 
                points you might encounter daily.
              </p>
              <p>You organize the data that you have access to with a customer data platform,
                 and combine it with data from other platforms. This streamlined organization can help 
                 you make the best decisions for your business.
              </p>
              <p>We can help you build pipelines to better collect customer data, store it and analyze it against
                other data and even other platforms to provide valuable strategic insights
              </p>
              <p>Here are some data types that you can store within your data platforms:</p>
              <ul>
                <li>Customer Demographics</li>
                <li>Ecommerce Transactions</li>
                <li>Email Information</li>
                <li>Social Media Interactions</li>
                <li>Website Metrics</li>
                <li>Ad Data</li>
              </ul>


            </v-card-text>
          </v-card>
        </v-row>
        <v-row class="pb-5 px-5">
          <v-card shaped hover :dark="darkMode" width=100%>
            <v-card-title>
              <v-icon class="pl-2" large>mdi-pickaxe</v-icon>
              <span class="pl-8">Data Mining</span>
              <v-spacer></v-spacer>
              <v-icon large @click.stop="displayAnalelem2 = !displayAnalelem2">
                {{ displayAnalelem2===false ? downIcon : upIcon }}
              </v-icon>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text :style="showAnalelem2" class="px-8"> 
              <p>Analyze your data. Identify trends and derive segmentation. We integrate marketplace data 
                with your own data and explore correlations, create custom 
                clusters, and do targeting on your custom clusters.
              </p>
              <p>Gain competitive insights into who your customers are, where they live, 
                as well as their lifestyle, shopping patterns and media consumption.
              </p>
              <p>Insights gathered from these profiles are often used to develop 
                  new business development and retention strategies.
              </p>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row class="pb-5 px-5">
          <v-card shaped hover :dark="darkMode" width=100%>
            <v-card-title>
              <v-icon class="pl-2" large>mdi-account-check</v-icon>
              <span class="pl-8">Conversion Audit</span>
              <v-spacer></v-spacer>
              <v-icon large @click.stop="displayAnalelem3 = !displayAnalelem3">
                {{ displayAnalelem3===false ? downIcon : upIcon }}
              </v-icon>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text :style="showAnalelem3" class="px-8"> 
              <p>Having your visitors perform a desired action once they land on your pages is the 
                driving force behind increased revenue. We understand that maximizing client 
                conversions is fundamental to your success, which is why our CRO services provide:
              </p>
              <ul>
                <li>Analysis of webpage usability, conversion rate, copy, and aesthetics to determine areas of improvement</li>
                <li>Analyzing your data to make informed decisions and recommendations</li>
                <li>Actionable steps, based on data, that you can implement to take advantage of the conversion potential of your traffic</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row class="pb-5 px-5">
          <v-card shaped hover :dark="darkMode" width=100%>
            <v-card-title>
              <v-icon class="pl-2" large>mdi-filter</v-icon>
              <span class="pl-8">Website Funnel</span>
              <v-spacer></v-spacer>
              <v-icon large @click.stop="displayAnalelem4 = !displayAnalelem4">
                {{ displayAnalelem4===false ? downIcon : upIcon }}
              </v-icon>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text :style="showAnalelem4" class="px-8"> 
              <p>Even if your site is extremely easy to navigate, your traffic quality may be too poor to 
                  encourage conversions.
              </p>
              <p>Conversion funnels are the paths through your site that visitors follow before converting.
              </p>
              <p>Each page between an entrance page and a conversion page is an opportunity for your visitor 
                  to become distracted and leave. If your conversion funnels are too intricate, potential 
                  conversions will leave the path and that conversion will be lost.
              </p>
              <p>Conversion funnel analysis ensures that qualified visitors stay on the right track to 
                conversions
              </p>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>

      <v-col cols="auto" lg="4" xs="12">
        <v-row class="pb-5 px-5">
        <v-card hover :dark=darkMode width=100% id="servicesCard">
          <v-card-title>
              <v-icon class="pl-2" large>mdi-book-open-page-variant</v-icon>
              <span class="pl-8">Services</span>
              <v-spacer></v-spacer>
              <v-icon large @click.stop="displayAnalservices = !displayAnalservices">
                {{ displayAnalservices===false ? downIcon : upIcon }}
              </v-icon>
          </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text :style="showAnalservices">
            <ul id="example-1">
              <li v-for="(service, index) in analytics_services" :key="index">  
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
      upIcon: "mdi-chevron-up",
      downIcon: "mdi-chevron-down",

      displaySEOelem1: false,
      displaySEOelem2: false,
      displaySEOelem3: false, 
      displaySEOelem4: false, 
      displaySEOservices: true,

      displayEmailelem1: false,
      displayEmailelem2: false,
      displayEmailelem3: false,
      displayEmailelem4: false,
      displayEmailservices: true,

      displayAnalelem1: false,
      displayAnalelem2: false,
      displayAnalelem3: false,
      displayAnalelem4: false,
      displayAnalservices: true,

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
      ],

      analytics_services: [
        "Audit of current server configuration",
        "Setup and/or configuration of a CDN",
        "Caching setup and/or configuration", 
        "Setup of browser caching", 
        "Minify JavaScript",
        "Conversion tracking code setup", 
        "Goal Funnels Setup - Initial Analytics + Reporting", 
        "Initial Conversion Audit - What Portions of Site to Test/Optimize for Conversions + Optimization Suggestions", 
        "Use of Google Optimize for A/B testing (Client Google Analytics access is required)", 
        "Initial heatmap and click stream testing and analysis", 
        "ROI & split test reporting schedule", 
        "Conversion strategy", 
        "Conversion best practices documentation", 
        "Static calls to action design", 
        "Navigational modifications", 
        "Multivariate conversion testing", 
        "Setup of auto responders", 
        "Incoming traffic reporting and recommendations", 
        "Incoming traffic analysis", 
        "Conversion path implementation", 
        "Shopping cart abandonment testing"


      ]
    }
  },


  computed: {
    ...mapGetters(['darkMode']),
    appBgColor () {return (this.darkMode ? "black" : "#F8F8FF")},
    tabBarClass () {return (this.dw_getWindowDims.width<960 ? "mobTabBar" : "deskTabBar")},
    showSEOelem1() {
      var displayValue = (this.displaySEOelem1===false ? "none" : "")
      return ('display:' + displayValue)
      },
    showSEOelem2() {
      var displayValue = (this.displaySEOelem2===false ? "none" : "")
      return ('display:' + displayValue)
      },
    showSEOelem3() {
      var displayValue = (this.displaySEOelem3===false ? "none" : "")
      return ('display:' + displayValue)
      },
    showSEOelem4() {
      var displayValue = (this.displaySEOelem4===false ? "none" : "")
      return ('display:' + displayValue)
      },
    showSEOservices() {
      var displayValue = (this.displaySEOservices===false ? "none" : "")
      return ('display:' + displayValue)
      },
    showEmailelem1() {
      var displayValue = (this.displayEmailelem1===false ? "none" : "")
      return ('display:' + displayValue)
      },
    showEmailelem2() {
      var displayValue = (this.displayEmailelem2===false ? "none" : "")
      return ('display:' + displayValue)
      },
    showEmailelem3() {
      var displayValue = (this.displayEmailelem3===false ? "none" : "")
      return ('display:' + displayValue)
      },
    showEmailelem4() {
      var displayValue = (this.displayEmailelem4===false ? "none" : "")
      return ('display:' + displayValue)
      },
    showEmailservices() {
      var displayValue = (this.displayEmailservices===false ? "none" : "")
      return ('display:' + displayValue)
      },
    showAnalelem1() {
      var displayValue = (this.displayAnalelem1===false ? "none" : "")
      return ('display:' + displayValue)
      },
    showAnalelem2() {
      var displayValue = (this.displayAnalelem2===false ? "none" : "")
      return ('display:' + displayValue)
      },
    showAnalelem3() {
      var displayValue = (this.displayAnalelem3===false ? "none" : "")
      return ('display:' + displayValue)
      },
    showAnalelem4() {
      var displayValue = (this.displayAnalelem4===false ? "none" : "")
      return ('display:' + displayValue)
      },
    showAnalservices() {
      var displayValue = (this.displayAnalservices===false ? "none" : "")
      return ('display:' + displayValue)
      },

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

#servicesCard {
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px
}

</style>
