<template>
  <div class="card-wrapper">
    <div :id="`card-${item.id}`" class="card" @click="handleView($event, item.id)"
      :class="{'open': item.open}"
      :style="styleObject">
      <div class="card-top">
        <div class="img"
        :style="{'background-image': 'url('+ require('@/assets'+ item.img)+')'}"></div>
        <div class="title">{{ item.title }}</div>
      </div>
      <div class="description">{{ item.description }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Card",

  props: ["item","id"],

  data: () => {
    return {
      styleObject: {
        transform: 'translate(0px,0px)'
      }
    };
  },

  methods: {
    handleView(el, cardId) {
      this.item.open = !this.item.open;
      let viewportOffset = el.target.getBoundingClientRect();
      if(this.item.open) {
        document.body.style.top = '-' + window.scrollY + 'px';
        document.body.style.position = 'fixed';
        this.styleObject.transform =
          'translate('+ viewportOffset.left * -1 +'px, '+ viewportOffset.top * -1 +'px)';
        if(cardId !== this.id)
          this.$router.push({ name: 'card', params: {id: cardId}});
      }
      else {
        this.styleObject = {
          transform: 'translate(0px,0px)'
        };
        let scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY) * -1);
        this.$router.push({ name: 'cardlist'});
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  margin-bottom: 10px;
  width: 100%;
  height: 450px;
  .card {
    position: relative;
    border-radius: 20px;
    width: 100%;
    height: 450px;
    border: 1px solid #fff;
    background-color: #efefef;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
    transition: all 0.6s cubic-bezier(.3, .1, .4, .8);
    &.open {
      // margin: auto;
      right: 15vw;
      left: 15vw;
      z-index: 100;
      border-radius: 0;
      border: 0;
      width: 70vw;
      height: 100vh;
    }
    .card-top, .title, .description, .img {
      pointer-events: none;
    }
    .card-top {
      position: relative;
      background-color: #fff;
      .img {
        width: 100%;
        height: 450px;
        background-position: center;
        background-size: cover;
      }
      .title {
        text-align: center;
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
      padding: 30px;
    }
  }
}
</style>