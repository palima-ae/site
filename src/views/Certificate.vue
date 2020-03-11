<template>
    <!-- <v-img :src="`@/assets/certificates/${id}.jpg`"> -->
    <v-img :src="require('@/assets/certificates/' + id + '.jpg')">
    <!-- <v-img src="@/assets/certificates/beginner-analytics.jpg"> -->
    </v-img>
</template>

<script>
export default {
  props: ["id"]

}
</script>

<style>

</style>