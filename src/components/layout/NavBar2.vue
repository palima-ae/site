<template>
<div width=90%>
<v-app-bar
        color="deep-purple"
        dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
  
        <v-toolbar-title>Title</v-toolbar-title>
      </v-app-bar>
  
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >
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
        </v-list>
      </v-navigation-drawer>
</div>
</template>


<script>

export default {
    name: 'NavBar2',

    data () {
        return {
            drawer: false,
            // List items
            items : [
            { title: 'Home', icon: 'mdi-home', route: '/' },
            { title: 'Who We Are', icon: 'mdi-account', route: '/account' },
            { title: 'What We Do', icon: 'mdi-view-dashboard', route: '/dashboard' },
            { title: 'Contact', icon: 'mdi-file-table', route: '/tradeshistory' },
            ]
        }        
    },
    // end DATA

}
// end EXPORT

</script>