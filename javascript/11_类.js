// 其本质与构建函数形成对象一致


class Car{
    type = '汽车'
    isTire = true

    constructor(price, owner){
        this.price = price
        this.owner = owner
    }

    showInfo(){
        console.log(`价格：${this.price}，拥有者：${this.owner}`)
    }
}


let myCar1 = new Car(price='10万', owner='张')

console.log(myCar1.type, myCar1.price, myCar1.owner, myCar1.isTire)
myCar1.shoeInfo()







// 继承

class ElectricCar extends Car{
    static type = '电动车'
    static isTire = true

    constructor(price, owner, battery){
        super(price, owner)
        this.battery = battery
    }

    showInfo(){
        super.showInfo()
        console.log(`电池容量：${this.battery}`)
    }
}

let myCar2 = new ElectricCar(price='100万', owner='张三', battery='100度')
myCar2.showInfo()
console.log(myCar2.type)
