<template>
  <div class="home">
    <img class="edulogo" alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Education App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.img {
  width: 30px;
  height: 30px;
  object-fit: cover;
}
</style>
