<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="(tile, index) in tiles_row_1"
        :key="tile.title"
        :cols="tile.flex"
        >
          <GridTile :key="index" :item="tile" :id="tile.id"></GridTile>
        
      </v-col>
    </v-row>
    
    <v-row>
      <v-col
        v-for="(tile, index) in tiles_row_2"
        :key="tile.title"
        :cols="tile.flex"
        >
          <GridTile :key="index" :item="tile" :id="tile.id"></GridTile>
        
      </v-col>
    </v-row>
    
    <v-row dense>
      <v-col
        v-for="(tile, index) in tiles_row_3"
        :key="tile.title"
        :cols="tile.flex"
        >
          <GridTile :key="index" :item="tile" :id="tile.id"></GridTile>
        
      </v-col>
    </v-row>
  
  </v-container>
</template>


<script>
  import GridTile from "@/components/cards/GridTile2.vue";

  export default {
    name:"Grid",

    props: [
      'id' 
    ],
    data: () => {
      return {
        tiles_row_1: [
          {
            id: 1,
            title: "How To Take Good Pictures",
            description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            img: "/appstore_01.jpg",
            open: false,
            flex: 12
          }],

        tiles_row_2:[
          {
            id: 2,
            title: "Cherries Are Delicious",
            description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            img: "/appstore_02.jpg",
            open: false,
            flex: 6
          },
          {
            id: 3,
            title: "Have You Seen The Movie?",
            description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            img: "/appstore_03.jpg",
            open: false,
            flex: 6

          }],
        
        tiles_row_3:[
          {
            id: 4,
            title: "Time For Something New",
            description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            img: "/appstore_04.jpg",
            open: false,
            flex: 12
          }
        ]
      };
    },
    components: {
      GridTile
    },
    methods: {
      triggerEvent(el, event) {
        el.style.transition = 'none';
        let clickEvent = new Event(event);
        el.dispatchEvent(clickEvent);
        setTimeout(() => {
          el.style.transition = 'all .5s cubic-bezier(.6,0,.45,1.3)';
        }, 500);
      }
    },
    mounted() {
      if(this.id && (this.cards.findIndex(item => item.id === this.id) !== -1)) {
        let elem = document.getElementById(`tile-${this.id}`);
        elem.scrollIntoView();
        this.triggerEvent(elem, 'click');
      }      
    }
  }
</script>

<style>
</style>