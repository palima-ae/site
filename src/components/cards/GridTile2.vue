<template>
  <div class="tile-wrapper">
  <div :id="`tile-${item.id}`"
    class="tile" 
    @click="handleView($event, item.id)"
    :class="{'open': item.open}"
    :style="styleObject"
    >
    <v-card :dark='darkMode'> 
      <div class="tile-top">
      <v-img :src="require(`@/assets${item.img}`)"
             class="img"
             height="200px"
             >

        <v-card-title class="title">{{ item.title }}</v-card-title>
        <v-card-text class="description">{{ item.description }}</v-card-text>
      </v-img>
      </div>

    </v-card>
  </div>
  </div>
</template>

<script>

import { mapGetters} from 'vuex';

export default {
  name: "GridTile",

  props: ["item","id"],

  data: () => {
    return {
      styleObject: {
        transform: 'translate(0px,0px)'
      }
    };
  },


  computed: {
    ...mapGetters(['darkMode']),
    imgSrc () {return ("@/assets" + this.item.img )}
    

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
.tile-wrapper {
  margin-bottom: 5px;
  width: 100%;
  height: 200px;
  .tile {
    position: relative;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
    background-color: #efefef;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
    transition: all .5s cubic-bezier(.6,0,.45,1.3);
    &.open {
      z-index: 100;
      border-radius: 0;
      border: 0;
      width: 100vw;
      height: 100vh;
    }
    .tile-top, .title, .description, .img {
      pointer-events: none;
    }
    .tile-top {
      position: relative;
      background-color: #fff;
      .img {
        width: 100%;
        height: 200px;
        background-position: center;
        background-size: cover;
      }
      .title {
        position: absolute;
        bottom: 0;
        padding: 5px 20px;
        width: calc(100%);
        height: 40px;
        color: #fff;
        background-color: #222;
        font-size: 1.6rem;
      }
    }
    .description {
      padding: 5px;
    }
  }
}
</style>