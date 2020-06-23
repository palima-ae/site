<template>
  <!-- <div class="tile-wrapper"> -->
    <v-card class="tile-wrapper" :dark='darkMode'>
    <div :id="`tile-${item.id}`" class="tile" @click="handleView($event, item.id)"
      :class="{'open': item.open}"
      :style="styleObject">
      <div class="tile-top">
        <div class="img" 
        :style="{'background-image': 'url('+ require('@/assets'+ item.img)+')'}"></div>
        <div class="title">{{ item.title }}</div>
      </div>
      <div class="description">{{ item.description }}</div>
    </div>
    </v-card>
  <!-- </div> -->
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
  margin-bottom: 20px;
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
        height: 450px;
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
      padding: 20px;
    }
  }
}
</style>