<template>
  <!-- <div>
    这是父组件
    <Son :abc="xxx"></Son>
    <Son @pushMsg='getMsg'></Son>
    <p>{{zuzijian}}</p>
  </div> -->
  <div>
    <!-- 引入子组件 -->
    <son></son>
  </div>
</template>

<script>
import Son from './Son'
export default {
  data () {
    return {
      xxx: '|我是父组件的值'
      //       zuzijian: 'hahah'
    }
  },
  components: { Son }
//   methods: {
//     getMsg (data) {
//       this.zuzijian = data
//     }
//   }
}
</script>

<style>
</style>
