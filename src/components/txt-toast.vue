<template>
  <transition name='fade'>
    <div v-show='visible' :class='position' class='toast'>
      <span>{{message}}</span>
    </div>
  </transition>
</template>

<script type="es6">
  export default {
    data() {
      return {
        visible: false,
        message : '',
        position : ''
      };
    }
  }
</script>


<style scoped>
  .toast {
    position: fixed;
    left:50%;
    transform:translate(-50%,-50%) scale(1);
    -webkit-transform:translate(-50%,-50%) scale(1);
    word-wrap:break-word;
    padding:10px;
    text-align: center;
    z-index:9999;
    font-size:1rem;
    line-height: 2rem;
    width:80%;
    height:2rem;
    color: #fff;
    border-radius: 10px;
    background: rgba(0,0,0,0.7);
    overflow: hidden;
  }
  .toast.middle{
    top:50%;
  }
  .toast.top{
    top:10%;
  }
  .toast.bottom{
    top:90%;
  }
  .fade-enter-active, .fade-leave-active {
    transition: transform .5s
  }
  .fade-enter, .fade-leave-active {
    transform:translate(-50%,-50%) scale(0);
  }
</style>
