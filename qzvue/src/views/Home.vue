<template>
  <div class="all-body">
    <div class="main">
      <div class="main-content"></div>
    </div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  .all-body{
    width: 100%;
    box-sizing: border-box;
    min-height: 800px;
    height: 800px;
  }
  .main{
    float: left;
    width: 100%;
    height: 100%;
    background: coral;
  }
  .left{
    float: left;
    width: 200px;
    height: 100%;
    margin-left: -100%;
    background: aqua;
  }
  .right{
     float: left;
     width:  200px;
     height: 100%;
     margin-left: -200px;
     background: beige;
   }
  .main-content{
    margin-left: 200px;
    margin-right: 200px;
    height: 100%;
  }
</style>
