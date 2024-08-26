// let a = un * 5
// console.log('后续代码执行了吗？')
// ReferenceError: un is not defined



// 抛出错误

// var miles, fmiles,km
// miles = prompt('请输入英里数:')
// fmiles = parseFloat(miles)
// if (isNaN(fmiles))
//     throw new Error('输入的必须是数字')
//
// km = fmiles * 1.609344
// console.log(`${miles} 英里等于 ${km} 公里`)

// 利用throw抛出错误
// 直接使用 Error 构造函数创建。


// var miles, fmiles, km
// miles = prompt('请输入英里数:')
// fmiles = parseFloat(miles)
// if (isNaN(fmiles))
//     throw new TypeError('输入的必须是数字')
//
// km = fmiles * 1.609344
// console.log(`${miles} 英里等于 ${km} 公里`)

// 当然我们也可以抛出更有针对性意义的 Error 子类型 ，比如 TypeError

// if (isNaN(fmiles))
//   throw {code : 401,info : '输入的必须是数字'}

// 我们甚至可以抛出非Error类型的对象




// 捕获错误

// 类似python中try - except

// try - catch

// function level_3(){
//     console.log ('进入 level_3')
//     throw {info : '自定义错误对象'}
//     console.log ('离开 level_3')
// }
//
// function level_2(){
//     console.log ('进入 level_2')
//     level_3()
//     console.log ('离开 level_2')
// }
//
// function level_1(){
//     console.log ('进入 level_1')
//     level_2()
//     console.log ('离开 level_1')
// }
//
//
// try{
//     level_1()
// }
// catch (err) {
//     console.log('错误处理')
// }
//
// console.log('程序正常退出')




//finally

// finally 代码块的代码， 不管try 里面有无错误抛出，都要执行的

// var inNum = 401
// try {
//     if (inNum === 401)
//         throw {code : 401,info : '输入的必须是数字'}
// }
// catch (e) {
//     console.log('错误处理')
// }
// finally {
//     console.log('不管有无错误，都要做的处理')
// }
// console.log('后续代码')