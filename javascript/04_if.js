// if (判断){
//     语句
// }else{
//     语句
// }


// function registerUser(phone){
//     if (phone.length  !== 11)
//         console.log('输入错误！手机号码是11个字符')
//     else
//         console.log('手机号码输入正确')
//
//     console.log('函数结束')
// }
//
// let num = prompt('phone')
// registerUser(num)



// else if



// if (判断){
//     语句
// }else if (判断){
//     语句
// }else{
//     语句
// }



// function registerUser(phone){
//     if (phone.length  !== 11) {
//         console.log('输入错误！手机号码是11个字符')
//         // 还需要进一步判断 输入的是否全数字
//     }else if (isNaN(phone)) {  // isNaN是内置函数， 用来判断 输入的是否非数字
//         console.log('输入错误！手机号码必须全是数字')
//     }else if (! phone.startsWith('1')) {  // startsWith是内置函数， 用来判断 字符串是否以某个字符开头
//         console.log('输入错误！手机号码必须以数字1开头')
//     }else{
//         console.log('手机号码输入正确')
//     }
//     console.log('函数结束')
// }

// registerUser('qwertyuiop')
// registerUser('qwertyuiopa')
// registerUser('21345678910')



// 简写

// if (miles > 3)
//     var fee = miles*15
// else
//     var fee = miles*20


// var fee = miles > 3 ? miles*15 : miles*20




