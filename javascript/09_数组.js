// 类似python列表

// 创建
// let arr = [1, 2, 3, 4, 5];
// let arr2 = new Array(1,3,'t',{'a':1,'c':2},[1,4,4])

// console.log(arr)
// console.log(arr2)





// 索引(不能用负数）

// console.log(arr[1])
//
// console.log(arr2[4][0])
// console.log(arr2[4, 0])
//
// console.log(arr2[3]['a'])
// console.log(arr2[3].a)





// 切片（能用负数）
// string 与 array 类似

// let name = 'helloworld'
// // console.log(name.slice(1,3))
// console.log(name.slice(-3,-1))
// console.log(name.slice(-8,8))
// console.log(name.slice(2)) // 从2开始到末尾
// console.log(name.slice()) // 从0开始到末尾

// let arr3 = [1, 2, 3, 4, [13, 3, 2, 5, 56, 6]]
// let res
// res = arr3.slice(-1)[0].slice(-2)
// console.log(res)





// 末尾添加 push

// let a = [1, 2, 3, [1, 4, 6, 89 ,0], 4, 5]
// a.push('hello')
// console.log(a)





// 末尾取出 pop

// let b
// b = a.pop()
// console.log(a,b)





// 开头取出 shift（添加为unshift）

// let c
// c = a.shift()
// console.log(a,c)





// 改变单个元素
// 把对应索引找到再赋值





// splice 1，指定位置删除

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 只有一个参数
// 把从索引3开始，后面的元素全部删除
// a.splice(3)
// console.log(a)

// 传入2个参数
// 把从索引2开始，连续删除 3 个 元素
// a.splice(2,3)
// console.log(a)


// splice 2，指定位置替换
//这种写法称之为 切片赋值

// 三个参数
// 把从索引2开始，连续删除 3 个 元素，并添加(可多可少）
// a.splice(2,3,'freedom', 'random', 'python')
// a.splice(2,3,'freedom', 'random')
// a.splice(2,3,90,90,90,90,90)
// console.log(a)

// 如第二个参数为0，则为插入元素
// 把从索引2前插入
// a.splice(2,0,'feedom')
// console.log(a)





// 数组元素倒过来 reverse
// console.log(a.reverse())





// 获取元素索引 indexOf
// 如果参数指定数据 不在数组中， indexOf 返回 -1
// 所以， indexOf 也可以用来检查数组中是否有某个元素

// // 一个参数
// //  在数组 中的位置，也就是索引,第一个符合条件的索引位置
// let a = [1,3,5,7,5,90]
// let pos = a.indexOf(5)
// console.log(pos)
//
// // 两个参数
// // 第2个参数 3， 表示从 索引 3 的位置开始往后查找
// pos = a.indexOf(90,3)
// console.log(pos)





// 检查是否包含 includes

// 一个参数

// let array1 = [1, 2, 3]
// array1.includes(2) // 结果为 true

// let pets = ['cat', 'dog', 'bat']
// pets.includes('cat') // 结果为 true
// pets.includes('at')  // 结果为 false

// 两个参数
// 第二个参数，用来指定 查找起始位置

// let pets = ['cat', 'dog', 'bat']
// pets.includes('cat',1 ) // 结果为 false





// length

// let a = [1,43,45,876,4,56,456,7,47,7]
// a.length = 3
// console.log(a)





//join

// let salary = [
//     'Mike : 12900',
//     'John : 22900',
//     'Jerry : 16900',
//     'Jack : 32900'
// ]
//
// console.log(salary.join(('\n')))





// 多变量赋值

// let a, b, c, d
// [a,b,c,d] = [12,34,56,87]
// console.log(a,b,c,d)





// 基于数组的可变性
// const 声明变量
// const 定义的变量，必须在定义时就赋值，后续不能重新赋值
// const a = 'pi'
// // a = 'hello' 会报错
// console.log(a)
//
// // 但数组的可变可以解决
// const arr = [1,2,3,4,5]
// console.log(arr.reverse())





// map
// 对数组中的每个元素进行同样的处理，产生另外一个数组

// const arr = [1,2,3,4,5]
//
// function square(num){
//     return num **2
// }
//
//
// const map1 = arr.map(square)
// console.log(map1)
//
