<template>
  <div id="app">
    <routerView></routerView>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    Home
  },
  data: () => {
    return {
      edit: false,
      name: "",
      editName: '',
      index: 0
    }
}
}
</script>

<style>
#app{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
