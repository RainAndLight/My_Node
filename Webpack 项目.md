## form表单中：model

+ 作用：获取数据

## formatter

参数：row, column, cellValue，index



``` js
questionTypeFormatter(row, column, cellValue) {
      console.log(cellValue)
      return this.questionTypeList[cellValue - 1].label
    }
```

## 作用域插槽

+ slot-scope='自定义'
+ 用于filter过滤器
+ 插值表达式中 {{  自定义.row.数据 | 过滤器名称  }}

``` js
<el-table-column label="录入时间">
          <span slot-scope='stData'>{{stData.row.addDate | parseTimeByString}}</span>
        </el-table-column>
```

