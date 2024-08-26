let Car = {
    type : '汽车',
    isTire : true
}

let ElectricCar = Object.create(Car)
ElectricCar.type = '电动车'
ElectricCar.isBattery = true

let GasolineCar = Object.create(Car)
GasolineCar.type = '汽油车'
GasolineCar.isGasoline = true


let myCar1 =  Object.create(ElectricCar)
myCar1.owner = 'freedom'

// 访问对象的属性，语法是 对象.属性
console.log(myCar1.type)
// 或者 对象['属性名']
console.log(myCar1['type'])




//添加属性

myCar1.year = '2021-3-3' //myCar['year'] = '2021-3-3'
console.log(myCar1)

// or

let attrName = 'year'
let attrValue = '2021-3-3'
myCar1[attrName] =  attrValue
console.log(myCar1)


// 删除属性

delete myCar1.year //delete myCar['year']
console.log(myCar1)





// 对象的属性可以是函数


// let myCar = {
//     brand   : '奔驰',
//     country : '德国',
//     price   : 300000,
//     square     : function(num){
//         return num ** 2
//     }
// }
//
// console.log(myCar.square(4))


// 函数本身是对象

// function square(num){
//     return num ** 2
// }
//
// square.name = 'square'
// console.log(square.name)



// toString 是把对象转化为字符串表示的，对象可以自己添加该属性方法，重新实现该方法。在打印结果和字符串格式化拼接时有用。
console.log(myCar1.toString()) // [object Object]

// hasOwnProperty 是用来判断参数 是否是 对象自身的属性
console.log(myCar1.hasOwnProperty('owner')) // true

// isPrototypeOf 是用来判断参数 是否是 对象的原型
console.log(Car.isPrototypeOf(ElectricCar)) // true




function Car1(brand, country, price) {
    this.brand = brand
    this.country = country
    this.price = price
}

Car1.prototype.type = '汽车'
Car1.prototype.isTire = true

let myCar2 = new Car1('奔驰', '德国', 300000)

// instanceof 用来判定一个对象 是否是 一个类型对象 的实例

console.log(myCar2 instanceof Car1) //错误




// 获取对象的所有属性
console.log(Object.keys(myCar2))

// 获取对象的所有值
console.log(Object.values(myCar2))

// 获取对象的所有键值对
console.log(Object.entries(myCar2))
