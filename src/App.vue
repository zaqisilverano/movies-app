<template>
  <div id="app">
    <topHeader />

    <router-view/>
  </div>
</template>

<script>
import topHeader from "@/components/topHeader";

export default {
  components: {
    topHeader
  }
};
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #F6F6F6;
  min-height: 100vh;
}

body {
  margin: 0;
  padding: 0;
}
</style>
