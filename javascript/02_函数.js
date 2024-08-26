// function interview(){
//     console.log("Welcome to the interview");
//     console.log('Are you ready?');
//     console.log('Let\'s begin');
//     console.log('Good luck');
// }
//
//
// // interview()
// console.log(interview)

/*
参数
 */


// function add(a,b){
//     let c
//     c = a + b
//     console.log(c)
// }
//
// add(1,9)
// add(78,'nihao')
// add(745,'ihhio', 589)



/*
返回值
 */

// function square(num){
//     return num**2
//     // console.log('不会执行')
// }
//
// let result
// result = square(5)
// console.log(result)




/*
缺省值
 */


// function interview(member='freedom'){
//     console.log("Hi," + member + ",welcome to the interview");
//     console.log(member + ',are you ready?');
//     console.log('Let\'s begin');
//     console.log('Good luck,' + member);
// }
//
//
// interview('fu')
// interview()



/*
函数变量的范围
 */



// function square(num){
//     {
//         var result
//         result = num**2
//         return result
//     }
// }
//
//
// // console.log(result)
// let result = 10
// let num, num1
// num = square(5)
// num1 = num + result
// console.log(num1)

/*
代码块
 */

// {
//     let a = 10
// }
//
// console.log(a)



/*
var vs let
 */



// function run() {
//     var aaa = "aaa";
//     let bbb = "bbb";
//
//     console.log(aaa, bbb); // aaa bbb
//
//     {
//         var ccc = "ccc"
//         let ddd = "ddd";
//         console.log(ccc, ddd); // ccc ddd
//     }
//
//     console.log(ccc); // ccc
//     console.log(ddd); // ddd is not defined
// }
//
// run()



/*
变量优先级
 */

// 函数里面可以直接使用外部的全局变量
// let upChars = '零壹贰叁肆伍陆柒捌玖'
// function getZh(){
//     console.log(upChars)
// }
//
// getZh()



// var upChars = '零壹贰叁肆伍陆柒捌玖'
// function change(){
//     upChars = '零一二三四五六七八九'
// }
//
// change()
// console.log(upChars)



//在函数内部，如果 局部变量 和 全局变量同名，使用的是 局部变量
// var upChars = '零壹贰叁肆伍陆柒捌玖'
// function getZh(){
//     var upChars = '零一二三四五六七八九'
//     console.log(upChars)
// }
//
// getZh()


// var upChars = '零壹贰叁肆伍陆柒捌玖'
// function getZh(){
//     var upChars = '零一二三四五六七八九'
//     {
//         var upChars = '0123456789'
//         console.log(upChars)
//     }
// }
//
// getZh()




/*
内置函数
 */


// prompt 输入框
// 第一个为提示语，第二个为缺省值

// let phone = prompt('请输入手机号','00000000000')
// console.log(phone)



// alert 弹窗

// alert('输入必须为数字')




// confirm 确认框
// ok为true，cancel为false

// let ok = confirm('你确定要删除吗？')
// console.log(ok)


// parseInt 将字符串转换为整数

// let num1 = parseInt('123')
// let num2 = parseInt('123.456')
// console.log(num1, num2)



//parseFloat 将字符串转换为浮点数

// let num1 = parseFloat('123')
// let num2 = parseFloat('123.456')
// console.log(num1, num2)


