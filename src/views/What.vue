<template>
    
<v-tabs vertical dark>


        <v-tab v-for="item in items" :key="item.id">
          <v-row align="center">
            <v-col cols="6">
              <v-icon large left>{{ item.icon }}</v-icon>
            </v-col>
            <v-col cols="6">
              {{ item.title }}
            </v-col>
          </v-row>
        </v-tab>
  

        <v-tab-item v-for="item in items" :key="item.id" style="border-radius: 5px">
          <v-card tile dark>
            <v-card-text>
                {{item.text}}
            </v-card-text>
          </v-card>
        </v-tab-item>

</v-tabs>
</template>


<script>

  export default {
    name: "What",


    data: () => {
      return {
        items: [
          {
            id: 1,
            title: "Search",
            text:"<p>There is an existing demand for products and services like yours and Search is the right channel to capture it.</p><p>We design and execute tailor-made search strategies to drive optimal account performance, reach maximize your ROI on the channel which is the closest to conversion.</p>",
            icon: "mdi-magnify",
            open: false
          },
          {
            id: 2,
            title: "Social",
            text:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            icon: "mdi-facebook",
            open: false
          },
          {
            id: 3,
            title: "Video & Display",
            text:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            icon: "mdi-youtube",
            open: false
          },
          {
            id: 4,
            title: "Apps",
            text:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            icon: "mdi-google-play",
            open: false
          }
        ]
      };
    },
  }
</script>

<style>
</style>