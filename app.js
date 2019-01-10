/*
// variable assign
const firstName = 'Manish'
const lastName = 'Kumar'
let val
// append
val = 'Manish '
val += lastName

// length
val = firstName.length

// concat
val = firstName.concat(' ', lastName)

// change case
val = firstName.toUpperCase()
val = lastName.toLowerCase()

// index of
val = firstName.indexOf('h')
val = firstName[2]
val = firstName.lastIndexOf('i')

// char At
val = firstName.charAt(firstName.length - 1)
val = firstName.charAt('2')

//  substring() - getting string from string like firstName[0:3] in python
val = firstName.substring(0, 4)

// slice()
val = firstName.slice(0, 3)
val = firstName.slice(-3) //  print 3 charcter from last printing will be from left to right

// split()
const tags = 'web developer,programmer,web designer'
val = tags.split(',')

// replace()
val = firstName.replace('Man', 'ash')

// print val
console.log(firstName, lastName)
console.log(val);

*/

let people = [{
        'id': 1,
        'name': 'Manish'
    },
    {
        'id': 2,
        'name': 'Shiva'
    },
    {
        'id': 3,
        'name': 'Rudra'
    }
]

console.log(people);

// Map function for returning array 
console.log(people.map((person) => person.name))

// ForEach(), for looping on list. dont use this on objects
people.forEach((person) => {
    console.log(person)
})

people.forEach((person) => {
    // for looping in object
    for (let item in person) {
        console.log(item)
    }
})