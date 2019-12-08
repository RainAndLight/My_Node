<template>
    <div>
      <input @click="sendMsg" type="button" value="给父组件传递值">
      我是子组件{{abc}}
    </div>
</template>

<script>
export default {
  props: ['abc'],
  data () {
    return {
      msg: '我是子组件的值'
    }
  },
  methods: {
    sendMsg () {
      this.$emit('pushMsg', this.msg)
    }

  }

}
</script>

<style>

</style>
