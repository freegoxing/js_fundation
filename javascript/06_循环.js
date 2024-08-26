// for

// for (循环前执行代码; 循环继续与否判定表达式; 单次循环后执行代码) {
//     循环体代码
// }

// for (let i = 0; i <= 10; i +=1){
//     console.log(i)
// }


// let num = 0
//
// for (; num <= 10;){
//     console.log(num)
//     num += 1
// }



// for of
// 每次循环，都会依次
// 取出 of 后面的数组里面的对象，赋值给 of 前面定义的变量
// 执行循环体里面的代码



// let colors =['red', 'blue', 'green', 'yellow']
// for (let color of colors){
//     console.log(color)
// }





// while (条件){
//     循环体代码
// }
// 检查一个条件表达式，只要条件表达式计算结果为 true 时， 就执行花括号中的代码。
// 如此反复，直到条件表达式计算结果为 false 时，结束 循环。

// let num = 0
// while (num <= 10){
//     console.log(num)
//     num++
// }





//do while
// do {
//     代码
// }
// while (条件):

// 先执行一次循环体代码，然后再检查条件表达式，只要条件表达式计算结果为 true 时， 就执行花括号中的代码。

// var num =0
// do {
//     num++
//     console.log(num)
// }
// while (num <= 10)





// label
// 一个 label 提供了一个让你在程序中其他位置引用它的标识符。
// 例如，你可以用 label 标识一个循环，
// 然后使用 break 或者 continue 来指出程序是否该停止循环还是继续循环。

// var num = 0;
// outPoint: for (var i = 0; i < 10; i++) {
//     for (var j = 0; j < 10; j++) {
//         if (i == 5 && j == 5) {
//             break outPoint; // 在 i = 5，j = 5 时，跳出所有循环，
//             // 返回到整个 outPoint 下方，继续执行
//         }
//         console.log(i,j)
//         num++;
//     }
// }

// alert(num); // 输出 55



// break 程序会跳出最内层的 switch 或循环语句，并继续执行其后的下一条语句。
// continue 语句可以用来继续执行（跳过代码块的剩余部分并进入下一循环）一个


