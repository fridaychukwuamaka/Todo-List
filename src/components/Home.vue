<template>
  <div class="home">
    <div class="header">
      <div class="search-bar">
        <input type="text" name id placeholder="Search your notes" />
      </div>
    </div>

    <div class="container">
      <div class="masonry wrapper">
        <KeepItem :listitem="item" v-for="item of lists" :key="item.id" :index="item.id" />
      </div>
    </div>

    <div class="footer">
      <div class="foot-contain">
        <router-link 
          class="next-link"
          to="/add-note"
          >
        <p style="margin-left: 10px" >Take a note..</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import KeepItem from "./KeepItem";
export default {
  name: "Home",
  computed:{
    lists(){
      return this.$store.state.lists
    }
  },
  components: {
    KeepItem
  }
};
</script>

<style  scoped>
.home {
  width: 100%;
}
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
}
.search-bar {
  padding: 7px;
  display: flex;
  box-shadow: -1px 2px 11px rgba(0, 0, 0, 0.11);
  height: 45px;
  border-radius: 7px;
  margin: 10px 15px;
  justify-content: center;
  background: white;
}

.next-link{
  text-decoration: none;
  color: inherit;
}
.search-bar input {
  border: none;
  background: white;
}
.search-bar input::placeholder {
  font-size: 17px;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  height: 58px;
  box-shadow: 0 3px 13px rgba(0, 0, 0, 0.16);
}
.foot-contain {
  display: flex;
  padding: 5px;
}

.container {
  margin: 95px 10px;
}
.masonry {
  /* Masonry container */
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  -webkit-column-gap: 10px;
  -moz-column-gap: 10px;
  column-gap: 10px;
  margin: 10px;
  padding: 0;
  -moz-column-gap: 10px;
  -webkit-column-gap: 10px;
  column-gap: 10px;
  font-size: 0.85em;
}
</style>