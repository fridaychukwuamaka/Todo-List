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
export default {
  name: "EditNote",
  components: {
    ChevronLeftIcon
  },
  data: () => {
    return {
      tempList: [],
      title: "",
      body: "",
      id: ""
    };
  },
  methods: {},
  destroyed() {
      /* if(this.title !== '' || this.body !== ''){
    this.$store.state.lists.push({
      title: this.title,
      body: this.body
    });
    
    } */
    this.$store.state.lists.forEach((res) =>{
        if (res.id === this.id) {
            console.log(`res` , res);
            res.body = this.body;
            res.title = this.title;
            
        }
    })
  },
  created() {
    this.id = this.$router.app._route.params.id;
    console.log(this.id);

    this.tempList = this.$store.state.lists.filter(res => {
      if (res.id === this.id) {
        console.log(res);

        return res;
      }
    });

    this.tempList.forEach(elemet => {
      this.title = elemet.title;
      this.body = elemet.body;
    });
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