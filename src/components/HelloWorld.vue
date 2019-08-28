<template>
  <div>
    <p>Todos</p>
    <form @submit="submit">
      <input type="text" v-model="name" />
      <div></div>
      <button type="submit">Submit</button>
      </form>
      <div v-for="list in lists " v-bind:key="list.id" style="display: inline" >
        <div > 
         <p @click="remove(list)" >{{list}}</p> 
          <button @click="editTodo(list)" >edit</button>
          </div>
      </div>
    <br>
    <br>
    <br>
    <br>
    <form  v-on:submit.prevent="submitEdit()" v-show="edit === true">
      <input type="text" v-model="editName" >
      <button type="submit" >Edit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => {
    return {
      edit: false,
      name: "",
      lists: [],
      editName: '',
      index: 0
    };
  },
  methods: {
    submitEdit(){     
      
      this.lists[this.index] = this.editName
      console.log(this.editName);
      this.editName = ""
      
    },

    editTodo(edit){
       this.index = this.lists.indexOf(edit);
      console.log(this.edit);
      console.log(this.index);
      
      this.edit = true
      this.editName = edit
      console.log(  edit);
      
    },

    submit(e) {
      e.preventDefault();

      this.lists.push(this.name);
      this.name = "";
    },

    remove(send) {
      console.log(typeof send);

      var index = this.lists.indexOf(send);
      console.log(index);
      this.lists = this.lists.filter(filt => {
        if (this.lists.indexOf(filt) !== index) {
          return filt;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
