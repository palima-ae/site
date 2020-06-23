<template>
  <div>
    <!-- SYSTEM BAR -->
    <v-system-bar
        app
        :id="sysbarID"
        :dark="darkMode"
        :color="systemBgColor"
        height="40"
        fixed
        >
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-icon>mdi-map-marker-outline</v-icon>
        <span class="caption font-weight-thin">{{ timezone }}</span>
        <!-- <v-icon>mdi-wifi-strength-4</v-icon>
        <v-icon>mdi-signal-cellular-outline</v-icon>
        <v-icon>mdi-battery</v-icon> -->
        <v-spacer></v-spacer>
        <v-icon>mdi-clock-outline</v-icon>
        <span class="caption font-weight-thin">{{ timestamp }}</span>
      </v-system-bar>

    <v-app-bar
        :id="navbarID"
        app
        scroll-target="scrolling-techniques-4"
        :color="navBarColor"
        :dark="darkMode"
    >

      <router-link to="/">
        <v-img
          alt="Palima Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo_with_text.png"
          transition="scale-transition"
          width="40"
        />
      </router-link>

        <v-spacer></v-spacer>

        <span class="overline font-weight-thin" align="start">Data Driven Marketing
        </span>


        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-menu
        offset-y
        transition="slide-y-transition"
        bottom
        >
            <template v-slot:activator="{ on }">
              <v-btn
                  active-class="purple-text text--accent-4"
                  class = "hidden-xs-only"
                  text
                  v-on="on"
                  link to='/who'
              >

              <span class='body-2 font-weight-thin'>Who We Are</span>
            </v-btn>
            </template>
        </v-menu>


        <v-spacer></v-spacer>


        <v-menu
        offset-y
        transition="slide-y-transition"
        bottom
        >
            <template v-slot:activator="{ on }">
              <v-btn
                  active-class="text--accent-4"
                  class = "hidden-xs-only"
                  text
                  v-on="on"
                  link to="/what"
              >
              <span class="body-2 font-weight-thin">What We Do</span>
            </v-btn>
            </template>

            <!-- <v-list>
              <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
              >
                <v-list-item
                  v-for="item in items"
                  :key="item.title"
                  link :to="item.route"
                >
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list> -->

        </v-menu>


        <v-spacer></v-spacer>



        <v-btn text @click.stop="updateDarkMode">
          <v-icon :color="bulbIconColor"> {{ bulbIcon }} </v-icon>
        </v-btn>

        <v-app-bar-nav-icon
          class="hidden-sm-and-up"
          @click.native.stop="updateDrawer"
          >
        </v-app-bar-nav-icon>



      </v-app-bar>
</div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'NavBar',

    data () {
        return {
            // List items
            items : [
            { title: 'Data Mining', icon: 'mdi-home', route: 'whatwedo' },
            { title: 'Performance Advertisting', icon: 'mdi-account', route: '/who' },
            { title: 'Web Technologies Consulting', icon: 'mdi-view-dashboard', route: '/dashboard' },
            { title: 'Contact', icon: 'mdi-file-table', route: '/tradeshistory' },
            ],
            timestamp: '',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        }
    },
    // end DATA


    created() {
      setInterval(() => {
        this.getNow();
      }, 1000)
    },
    // end CREATED


    computed: {
      ...mapGetters(['mainColor', 'drawerState', 'darkMode', "isMobile"]),

      setDarkMode: {
        get () {
          return this.$store.state.darkmode
        },
        set (value) {
          this.$store.commit('setDarkMode', value)
        }
      },

      bulbIconColor () {return (this.darkMode ? "yellow" : "grey")},
      bulbIcon () {return (this.darkMode ? "mdi-lightbulb-on" : "mdi-lightbulb")},
      navbarBgColor () {return (this.darkMode ? "black" : "white")},
      navbarTextColor () {return (this.darkMode ? "light" : "dark")},

      currentTime () {
        let currentDate = new Date()
        let hours = currentDate.getHours()
        let minutes = currentDate.getMinutes()
        return (hours + ":" + minutes)
      },

      systemBgColor () {return (this.darkMode ? "rbg(0,0,0)" : "rgb(248, 248, 255)")},

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

      navbarID () {

        var width = this.dw_getWindowDims.width;
        var id_value = (width<960 ? "mobNavBar" : "deskNavBar")
        return id_value
      },
      sysbarID () {

        var width = this.dw_getWindowDims.width;
        var id_value = (width<960 ? "mobSysBar" : "deskSysBar")
        return id_value
      },
    },
    // end COMPUTED


    methods: {
      ...mapActions(['updateDrawer', 'updateDarkMode']),
      getNow () {
      const today = new Date();
      const Hours = today.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
      const Minutes = today.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
      this.timestamp = Hours + ":" + Minutes;
      },
    },

}
// end EXPORT

</script>

<style lang="scss" scoped>

#mobNavBar {
  border-radius: 5px;
  margin: auto;
  width: 100%
}

#deskNavBar {
  border-radius: 80px;
  margin: auto;
  width:85%
}

#mobSysBar {
  margin: auto;
  text-align: center;
  left: 0%;
  right: 0%;
  width: 100%;
}

#deskSysBar {
  margin: auto;
  text-align: center;
  right: 0px;
  width: 80%;
}

</style>
