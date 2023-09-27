// cons
// switch (ziua) {
//   case 'luni':
//     console.log(`Astazi este ${ ziua }`)
//     break;
//   case 'marti':
//     console.log(`Astazi este${ziua}`)
//     break;
//     case 'miercuri':
//     console.log(`Astazi este${ziua}`)
//     break;
//   case 'joi':
//     console.log(`Astazi este ${ziua}`)
//     break;
//   case 'vineri':
//     console.log(`Astazi este ${ziua}`)
//     break;
//   case 'sambata':
//     console.log(`Astazi este ${ziua}`)
//     break;
//   case 'duminica':
//     console.log(`Astazi este ${ziua}`)
//     break;
//     default:
//       console.log('Nu este zi a saptaminii')
// }


// const str = 'un carevaa'
// const lungimeaStr = str.length > 10 ? 'lungimea str este mai mare de 10'
//   : str.length === 10 ? 'lungimea este exact 10' : 'lungimea str este mai mica de 10'
// console.log(lungimeaStr)


// const str = 'un car'
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())


// const str = 'cateva cuvinte la rand pentru a alege doar unul'
// const firstIndex = str.indexOf('la')
// const lastIndex = str.indexOf('rand')
// console.log(firstIndex, 'first')
// console.log(lastIndex, 'last')
// console.log(str.slice(firstIndex, lastIndex - 1))
// console.log(str.substring(firstIndex, lastIndex - 1))


// const ERROR_CODE_001 = 'ERROR_CODE_001'
// const ERROR_CODE_002 = 'ERROR_CODE_002'
// const ERROR_CODE_003 = 'ERROR_CODE_003'
// const ERROR_CODE_004 = 'ERROR_CODE_004'
// const ERROR_CODE_005 = 'ERROR_CODE_005'

// const errorFromBE = ERROR_CODE_001
// if (errorFromBE === ERROR_CODE_001) console.log('Please introduce the username.')
// switch (errorFromBE) {
//   case ERROR_CODE_001:
//     console.log('Please introduce the username.')
//     break;
//   case ERROR_CODE_002:
//     console.log('User name lenght shoud be at least 10')
//     break;
//   case ERROR_CODE_003:
//     console.log('Email address should contain ')
//     break;
//   case ERROR_CODE_004:
//     console.log('Please select a country')
//     break;
//   case ERROR_CODE_005:
//     console.log('Password is too week')
//     break;
//   default:
//     console.log('Somthing when wrong')
// }


// const obj = {
//   name: 'un Nume'
// }
// console.log(obj.name)

// const obj = {
//   name: 'un Nume'
// }
// console.log(obj['name'])



// const ERROR_CODE_001 = 'ERROR_CODE_001'
// const ERROR_CODE_002 = 'ERROR_CODE_002'
// const ERROR_CODE_003 = 'ERROR_CODE_003'
// const ERROR_CODE_004 = 'ERROR_CODE_004'
// const ERROR_CODE_005 = 'ERROR_CODE_005'

// const errorFromBE = ERROR_CODE_001

// const errorCods = {
//   ERROR_CODE_001: 'Please introduce the username.',
//   ERROR_CODE_002: 'User name lenght shoud be at least 10',
//   ERROR_CODE_003: 'Email address should contain',
//   ERROR_CODE_004: 'Please select a country',
//   ERROR_CODE_005: 'Password is too week'
// }
// console.log(errorCods[errorFromBE])


// const obj = {
//   a: 5,
//   b: 6
// }
// obj['c'] = 7-
// console.log(obj)



// class Car {
//   constructor(options) {
//     this.weels = options.weels
//     this.doors = options.doors
//     this.fuelType = options.fuelType
//   }
//   whatfuelType() {
//     console.log(`the fuel type is ${this.fuelType}`)
//   }
// }
// const car = new Car({ weels: 4, doors: 5, fuelType: 'gasoline' })
// class Toyota extends Car {
//   constructor(options) {
//     super(options)
//     this.model = options.model
//   }
//   dreamCar() {
//     console.log(`My dream car is ${this.model}`)
//   }

// }
// const supra = new Toyota({ weels: 4, doors: 5, fuelType: 'diesel', model: 'super' })
// console.log(car)
// console.log(supra)
// supra.whatfuelType()
// supra.dreamCar()


// const obj = {
//   a: 5,
//   b: 6
// }
// console.log(Object.values(obj))


// const obj = {
//   a: 5,
//   b: 6
// }
// console.log(Object.keys(obj))


// const obj = {
//   a: 5,
//   b: 6
// }
// const obj1 = {
//   c: 7
// }
// const obj2 = {
//   d: 8,
//   c: 5
// }
// const obj3 = Object.assign(obj, obj1, obj2)
// console.log(obj3)


// const obj = {
//   a: 5,
//   b: 6
// }
// const obj1 = {
//   c: 7
// }
// const obj2 = {
//   d: 8,
//   c: 5
// }
// const obj3 = obj2
// obj2.d = '10'
// console.log(obj3, obj2)


// const obj = {
//   a: 5,
//   b: 6
// }
// const obj1 = {
//   c: 7
// }
// const obj2 = {
//   d: 8,
//   c: 5
// }
// const obj4 = obj2
// const obj3 = { ...obj2 }
// obj3.c = 10
// console.log(obj3, obj2)


// const obj = {
//   a: 5,
//   b: 6
// }
// const obj1 = {
//   c: 7
// }
// const obj2 = {
//   d: 8,
//   c: 5
// }
// const obj4 = obj2
// const obj3 = { d: 8, c: 5, c: 10 }

// console.log(obj3, obj2)


// {
//   nume: '',
//     city: '',
//       country: '',
//         zipCode: '',
//           email: '',
//             age: ''
// }
// const user1 = {
//   nume: 'Andrei',
//   city: 'Orhei',
//   country: 'Moldova',
//   zipCode: 2020,
//   email: 'andrei@gmail.com',
//   age: 33
// }
// class User {
//   constructor(date) {
//     this.nume = date.nume
//     this.city = date.city
//     this.country = date.country
//     this.zipCode = date.zipCode
//     this.email = date.email
//     this.age = date.age
//   }
// }
// class Administrator extends User {
//   constructor(options) {
//     super(options)
//     this.drepturi = 'administrator'
//   }
// }
// class Manager extends User {
//   constructor(options) {
//     super(options)
//     this.drepturi = 'manager'
//   }
// }
// const user2 = new Administrator({ nume: 'Ion', city: 'Cahul', country: 'Moldova', zipCode: 3040, email: 'ion@gmail.com', age: 54 })
// const user3 = new Manager({ nume: 'vasile', city: 'Cahul', country: 'Moldova', zipCode: 3040, email: 'vasile@gmail.com', age: 54 })
// console.log(user2)
// console.log(user3)


const obj1 = {
  a: 5,
  b: 6
}
const obj2 = {
  d: 6,
  b: 8
}
const obj3 = { ...obj1, ...obj2, g: 10 }
console.log(obj3)