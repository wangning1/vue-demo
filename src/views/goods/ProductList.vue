<template>
 <div class="app-container">

  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button type="primary" @click="handleClick()">点击</el-button>
  </div>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '商品列表'
    }
  },
  methods:{
    handleClick(){
      alert("点击了我")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
