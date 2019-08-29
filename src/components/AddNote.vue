<template>
  <div class="add-page">
    <div class="header">
      <div class="nav">
        <router-link to="/">
          <chevron-left-icon size="1.5x" class="back-arrow"></chevron-left-icon>
        </router-link>
      </div>
    </div>
    <div class="container">
      <div class="title">
        <input v-model="title" type="text" name placeholder="Title" id />
      </div>

      <div class="body">
        <textarea v-model="body" name id cols="30" rows="10" placeholder="Note"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon } from "vue-feather-icons";
import { uuid } from 'vue-uuid';

export default {
  name: "AddNote",
  components: {
    ChevronLeftIcon
  },
  data: () => {
    return {
      title: "",
      body: ""
    };
  },
  methods: {},
  destroyed() {
      console.log(uuid.v1());
      
      if(this.title !== '' || this.body !== ''){
    this.$store.state.lists.push({
      id: uuid.v1(),
      title: this.title,
      body: this.body
    });
    }
  }
};
</script>

<style scoped>
.add-page {
  width: 100%;
}
.nav {
  display: flex;
  align-items: center;
  height: 100%;
}
.back-arrow {
  margin: auto 10px auto 22px;
  color: #303030;
  cursor: pointer;
}
.header {
  height: 58px;
  position: fixed;
  background: white;
  width: 100%;
  top: 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.09);
}
.container {
  padding: 10px;
  box-sizing: border-box;
  margin: 80px 15px;
}
.title {
  margin-bottom: 15px;
}
input {
  height: 50px;
  font-size: 20px;
}
textarea {
  font-size: 1.5rem;
  height: 70vh;
}

input,
textarea {
  width: 100%;
  border: none;
  outline: none;
  font-family: monospace;
}
</style>