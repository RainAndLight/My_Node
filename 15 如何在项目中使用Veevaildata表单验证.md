源码参考：[veevaildata](https://logaretm.github.io/vee-validate/)



### 安装配置

1.  npm i vee-validate

2. main.js中配置

   ``` js
   import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
   import zhCN from 'vee-validate/dist/locale/zh_CN' // 加载验证插件的语言包
   import * as rules from 'vee-validate/dist/rules'
   
   // 配置使用中文语言
   for (let rule in rules) {
     extend(rule, {
       ...rules[rule], // add the rule
       message: zhCN.messages[rule] // add its message
     })
   }
   
   // 注册为全局组件
   Vue.component('ValidationProvider', ValidationProvider)
   Vue.component('ValidationObserver', ValidationObserver)
   ```



### 基本使用

``` vue
<!-- 登录表单 -->
+ <ValidationObserver ref="loginForm">
  <van-cell-group>
    <!--
      name 提示的文本
      rules 验证规则
        required 必填项
        email
        max
        ....
        参考文档：https://logaretm.github.io/vee-validate/api/rules.html#alpha

      v-slot="{ errors }" 获取校验结果数据
        errors[0] 读取校验结果的失败信息
      -->
    <!-- <ValidationProvider name="手机号" rules="required|email|max:5" v-slot="{ errors }"> -->
+    <ValidationProvider name="手机号" rules="required" v-slot="{ errors }">
      <van-field
        v-model="user.mobile"
        required
        clearable
        label="手机号"
        placeholder="请输入手机号"
+        :error-message="errors[0]"
      />
+    </ValidationProvider>

+    <ValidationProvider name="验证码" rules="required|max:6" v-slot="{ errors }">
      <van-field
        v-model="user.code"
        type="password"
        label="验证码"
        placeholder="请输入验证码"
        required
+        :error-message="errors[0]"
      />
+    </ValidationProvider>
   </van-cell-group>
+ </ValidationObserver>
<!-- /登录表单 -->
```



表单提交时 ， 用js验证

``` js
const isValid = await this.$refs.loginForm.validate()

// 如果验证失败则return
if(!isValid){ return }
```



### 自定义扩展校验规则

main.js中

``` js
// 扩展自定义校验规则
// extend('规则名称', 配置对象)
extend('phone', {
  // 验证方法，value 是需要校验的数据，返回一个布尔值，表示验证成功与否
  validate: function (value) {
    return /^1\d{10}$/.test(value)
  },
  // 错误提示消息
  message: '请输入有效的手机号码'
})
```

然后就可以在 rules中使用了

