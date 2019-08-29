<template>
  <div class="item image-item"  @click="editNote" >
    <h3 v-html="listitem.title.substring(0, 40)"></h3>
    <p v-html="listitem.body.substring(0, 40)"  class="card-body"></p>
  </div>
</template>

<script>
export default {
  name: "KeepItem",
  props: ['listitem', 'index'],
  methods:{
    editNote(){
      console.log(this.index);
      
      this.$router.push(`/edit-note/${this.index}`)
    }
  }
};
</script>

<style scoped >
h3{
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-variant-ligatures: none;
    outline: none;
    white-space: pre-wrap;
    word-wrap: break-word;
    margin: 0;
}
.item {
  margin-bottom: 10px;
  display: inline-block;
  -webkit-transition: 1s ease all;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 1px solid #e0e0e0;
  border-radius: 9px;
  padding: 5px 16px;
  color: #202124;
    font-family: 'Google Sans',Roboto,Arial,sans-serif;
  width: 100%;
}

p{
  margin: 11px 0;
      letter-spacing: .01428571em;
    font-family: Roboto,Arial,sans-serif;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.25rem;
}

.card-body{
    font-variant-ligatures: none;
    outline: none;
    white-space: pre-wrap;
    word-wrap: break-word;
}
</style>