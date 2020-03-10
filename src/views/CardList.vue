<template>
<v-container fluid>

  <v-row>
    <v-col lg="6" sm="12">
      <div id="card-list">
        <Card :item="cards[0]"
              :id="cards[0].id">
        </Card>
      </div>
    </v-col>

    <v-col lg="6" sm="12">
      <div id="card-list">
        <Card :item="cards[1]"
              :id="cards[1].id">
        </Card>
      </div>
    </v-col>
  </v-row>
  
  <v-row>
    <v-col cols="12"> 
      <div id="card-list">
        <Card :item="cards[2]"
              :id="cards[2].id">
        </Card>
      </div>
    </v-col>
  </v-row>  
  
  
  </v-container>
</template>

<script>
  import Card from "@/components/cards/Card.vue";

  export default {
    name: "CardList",

    props: [
      'id'
    ],

    data: () => {
      return {
        cards: [
          {
            id: 1,
            title: "How To Take Good Pictures",
            description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            img: "/appstore_01.jpg",
            open: false
          },
          {
            id: 2,
            title: "Cherries Are Delicious",
            description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            img: "/appstore_02.jpg",
            open: false
          },
          {
            id: 3,
            title: "Have You Seen The Movie?",
            description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            img: "/appstore_03.jpg",
            open: false
          },
          {
            id: 4,
            title: "Time For Something New",
            description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            img: "/appstore_04.jpg",
            open: false
          }
        ]
      };
    },
    components: {
      Card,
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
        let elem = document.getElementById(`card-${this.id}`);
        elem.scrollIntoView();
        this.triggerEvent(elem, 'click');
      }      
    }
  }
</script>

<style>
</style>