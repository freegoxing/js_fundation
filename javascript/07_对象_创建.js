// js中 对象（Object）就是包含了一组 属性（Property） 的数据，
// 属性可以是包含其它属性的对象。

// 1，使用字面标记
// let myCar = {
//     'brand'   : '奔驰',
//     'country' : '德国',
//     'price'   : 300000
// }




// 2,构建函数

// function Car(brand, country, price) {
//     this.brand = brand
//     this.country = country
//     this.price = price
// }
//
// let myCar = new Car('奔驰', '德国', 300000)
//
// console.log(myCar)



//使用原型创建对象

// 内置构造函数 Object
// var myCar = {
//     brand   : '奔驰',
//     country : '德国'
// }

// or

// var myCar = new Object()
// myCar.brand = '奔驰'
// myCar.country = '德国'

// 内置函数 Object 有个 create 方法（函数对象也可以有自己的方法属性)可以用它直接创建对象。

// let Car = {
//     type : '汽车',
//     isTire : true
// }
//
// let ElectricCar = Object.create(Car)
// ElectricCar.type = '电动车'
// ElectricCar.isBattery = true
//
// let GasolineCar = Object.create(Car)
// GasolineCar.type = '汽油车'
// GasolineCar.isGasoline = true
//
//
// let myCar1 =  Object.create(ElectricCar)
// myCar1.owner = 'freedom'


// 原型链的最后一环Object.prototype
// prototype中有许多内置函数
// 常用hasOwnProperty，isPrototypeOf，toString

// // toString 是把对象转化为字符串表示的，对象可以自己添加该属性方法，重新实现该方法。在打印结果和字符串格式化拼接时有用。
// console.log(myCar1.toString()) // [object Object]

// // hasOwnProperty 是用来判断参数 是否是 对象自身的属性
// console.log(myCar1.hasOwnProperty('owner')) // true

// // isPrototypeOf 是用来判断参数 是否是 对象的原型
// console.log(Car.isPrototypeOf(ElectricCar)) // true





// 4,构建函数创建原型链
// 利用函数内自带的树属性prototype，把属性方法添加到原型上，从而实现继承。

function Car(brand, country, price) {
    this.brand = brand
    this.country = country
    this.price = price
}

Car.prototype.type = '汽车'
Car.prototype.isTire = true

let myCar1 = new Car('奔驰', '德国', 300000)

// console.log(Car.prototype)

/*
注意
不要 这样设置prototype属性 ，这样就重新创建了一个prototype对象
Car.prototype = {type:'汽车', hasTire:true}
*/

// // instanceof 用来判定一个对象 是否是 一个类型对象 的实例
//
// console.log(myCar1 instanceof Car)


function ElectricCar(brand, country, price, color) {
    Car.call(this, brand, country, price)
    this.color = color
}

// 核心
ElectricCar.prototype = Object.create(Car.prototype)

ElectricCar.prototype.type = '电动车'
ElectricCar.prototype.isBattery = true

let myCar2 = new ElectricCar('特斯拉', '美国', 500000, 'blue')
console.log(myCar2)


