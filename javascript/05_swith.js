// switch (表达式) {
//     case 值1:
//         // 代码块1
//         break
//     case 值2:
//         // 代码块2
//         break
//     case 值3:
//         // 代码块3
//         break
//     default:
//         // 默认代码块
//         break
// }

let num
num = 3
switch (num) {
    case 1:
        console.log('星期一')
        break
    case 2:
        console.log('星期二')
        break
    case 3:
        console.log('星期三')
        break
    case 4:
        console.log('星期四')
        break
    case 5:
        console.log('星期五')
        break
    case 6:
        console.log('星期六')
        break
    case 7:
        console.log('星期日')
        break
    default:
        console.log('输入有误')
        break
}



// 执行到 break 时，程序会跳出最内层的 switch 或循环语句，并继续执行其后的下一条语句。
// 如果没有 break，程序会继续执行下一个 case 语句，直到遇到 break 或 switch 语句结束。
// default 语句是可选的，用于处理所有不在 case 语句中列出的值。


