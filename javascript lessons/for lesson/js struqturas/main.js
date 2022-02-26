const text = document.querySelector('#text')
const malumot = []

malumot.push({name:'Olimjon', surname:'Mahmudov', age: 13}) //1
malumot.push({name:'Shahzod', surname:'Mahmudov', age: 9})  //2
malumot.push ({name:'Behruz', surname:'Mahmudov', age: 7}) //3
malumot.push(({name:'Muslima',surname:'Mahmudova', age: 1})) // 4
malumot.push(({name:'Sherzod',surname:'Mahmudov', age: 35})) // 5
console.log(malumot)

const t = Number(prompt('tanlang !!'));

  console.log(malumot[t])


