// 1，剩余参数

// 类似python 可变参数 *args

// 以单个元素传参默认为一个
// 或用数组

function print1(students){
    console.log(students)
    for (let student of students) {
        console.log(`学生：${student} , 年龄 ${studentInfo[student]}`)
    }
}


let studentInfo = {
    '张三': 18,
    '李四': 19,
    '王五': 20
}

// print1(['张三'])
// 多个
// print1(['张三', '李四', '王五'])
// print1('张三', '李四', '王五')


// 改为

function print2(...students) {
    console.log(students)
    for (let student of students) {
        console.log(`学生：${student} , 年龄 ${studentInfo[student]}`)
    }

}

// print2('张三', '李四', '王五')





// 2，展开运算符

let onebatch = ['张飞', '典韦', '关羽']
// print2(onebatch[0], onebatch[1], onebatch[2])
//等价于
// print2(...onebatch)


// 数据展开，不仅仅使用在调用函数的时候

let batch1 = ['张飞', '典韦', '关羽']
let batch2 = [...batch1, '赵云', '马超']
// console.log(batch2)





// 注意

let student1, student2

student1 = studentInfo
student2 = {...studentInfo}

console.log(student1 === studentInfo)
console.log(student2 === studentInfo)
