<template>
  <div>
    <el-from :model="dataFrom" :rules='demoRules'>
      <el-from-item prop='userName'>
        <el-input v-model='dataFrom.userName' />
      </el-from-item>
      <el-from-item prop='passWord'>
        <el-input type ='password' v-model='dataFrom.passWord' />
      </el-from-item>
      <el-from-item>
        <el-checkbox v-model="dataFrom.agree">我已经阅读</el-checkbox>
      </el-from-item>
    </el-from>
    <el-button>默认按钮</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'demo',
      dataFrom: {
        userName: '枫叶',
        passWord: '12345',
        agree: true
      },
      demoRules: {
        //   决定着校验规则  key(字段名):value(对象数组) => 一个对象就是一个校验规则
        // required 为true 就表示该字段必填 如果不填 就会提示消息
        passWord: [{ required: true, message: '请输入您的密码' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入11位密码' }]
        // code: [{ required: true, message: '请输入您的验证码' },
        //   { pattern: /^\d{6}$/, message: '验证码为6位数字' }],
        // agree: [{ validator }]
      } // 登录规则集合对象
      // 自定义形式去校验
    }
  }
}
</script>

<style>

</style>
