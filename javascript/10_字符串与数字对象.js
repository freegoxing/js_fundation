// primitive 数据

// 一个对象（Object）实例数据，比如 {name:'白月黑羽'} ，就是一个对象类型的实例，简称一个对象
// 一个数组（Array）实例数据，比如 [1,2,3] ，就是一个数组类型的实例，简称一个数组
// Array.prototype 的原型就是 Object.prototype
// 一个数组数据，它的原型的原型就是 Object.prototype，也可以说是一个对象类型，也可以说是一个对象
// 实际上，几乎所有的js数据类型，原型链最终都是 Object.prototype ，所以几乎所有的js数据类型的实例，都可以说是一个 对象

// 字符串对象与数字对象它们没有原型，它们是 primitive 数据，无方法

// 但字符串可以有 length 属性，表示长度，还有切片slice方法
// js引擎看到这样的代码，会自动创建一个字符串 封装对象： String
// let s1 = '你好'
// let len = (new String(s1)).length





// 字符串对象 String 有如下常用的属性方法



// length 属性可以返回字符串对象的长度，也就是包含了多少个字符



// 字符串的 indexOf 方法 和 数组的 indexOf 方法类似，
// 它用来在字符串中查找参数字符串，并返回该参数字符串 在其中第一个出现的位置索引



// 切片 slice



// js 中的 split 方法 和 Python 中的 字符串 split 方法类似，
// 它用来将字符串按照指定的分隔符拆分成数组

// let str = '我们今天不去上学，我们去踢足球'
// let str2 = str.split('我们')
// console.log(str2)



// trim 方法可以 删除 字符串前面和后面的空白字符
// 但是不会删除字符串中间的空白字符。

// let str = `     sdaggr         rgrds    rg   `
// let str2 = str.trim()
// console.log(str2)



// trimStart 方法 将 字符串前面 (左边) 的空格删除，但是不会删除字符串中间和右边的空格
// trimEnd 方法 将 字符符串后面 (右边) 的空格删除，但是不会删除字符串中间和左边的空格




// replace 也是常用的方法，用来 替换 字符串里面 第一个 指定的 子字符串 为另一个 字符串
// replace 方法只 替换第一个 匹配

// let str = '我们今天不去上学，我们去踢足球'
// let str2 = str.replace('我们','你们')
// console.log(str2)

//  替换所有匹配

// let str = '我们今天不去上学，我们去踢足球'
// let str2 = str.split('我们').join('你们')
// console.log(str2)



// replaceAll 方法，用来替换字符串里面所有指定的子字符串为另一个 字符串

// let str = '我们今天不去上学，我们去踢足球'
// let str2 = str.replaceAll('我们','你们')
// console.log(str2)



//startsWith 和 endsWith 方法用来判断字符串是否以指定的子字符串开头或者结尾



// 字符串模板 操作(类似python中格式化)
// 就是在字符串使用 反引号 ，然后占位符使用 ${} ,里面直接放入对应的数据对象。
// let salary = 10000
// let name = 'freedom'
// let sentence = `你好，${name}，你的工资是${salary}元`
// console.log(sentence)



// 转义
// 在字符串中，反斜杠 \ 被称为 转义字符，用来表示一些 特殊的字符
// \n 表示换行
// \t 表示制表符
// \r 表示回车
// \b 表示退格
// \u 后面跟一个 四位的 Unicode 编码，表示一个 Unicode 字符
// \x 后面跟一个两位的十六进制编码，表示一个十六进制字符

// 如果字符串中本身需要有反斜杠，并非转义，比如Windows下面的路径

// 不能正常显示
// let path = 'C:\windows\temp'
// console.log(path)

// 可用\\表示一个反斜杠
// let path = 'c:\\windows\\temp'
// console.log(path)

// 使用反引号 ，在字符前面加上一个 String.raw ，表示字符串内容是raw string
// let path = String.raw`c:\windows\temp`
// console.log(path)











// 数字对象

// 可以使用 Number 的 parseInt 方法，把字符串表示的数字转化为 整数，
//
// 可以使用 Number 的 parseFloat 方法，把字符串表示的数字转化为 数字（整数或小数），

//toString 方法，把字符串表示的数字转化为 整数，

// let num = 1234
// console.log(num.toString())
// let str = num.toString()
// console.log(str === num)
// console.log(str == num)