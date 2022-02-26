let name = ['Harry', 'Ross', 'Bruce', 'Cook', 'Carolyn', 'Morgan', 'Albert', 'Walker', 'Randy', 'Reed']
const add = ['Frontend Developer', 'React Developer','Javascript Backend Developer', 'Java Developer', 'DevOps', 'Go Developer', 'Android Developer', 'Flutter Developer','Graphic Designer', 'Team Lead'];
const button = document.querySelector('#find');
const input = document.querySelector('#id');
const text = document.querySelector('#text')
const ul = document.querySelector('.list-group.list-group-numbered');
const alert = document.querySelector('.alert.alert-primary')

for ( let i = 0; i < 10; i++){
  const li = document.createElement('li')
  li.classList.add('list-group-item');
  li.innerText = name[i];
  ul.appendChild(li)
}

button.onclick = () => {
  let n = Number(input.value)
  text.innerText = name[n - 1] + " " + add[n - 1];
  if(n > 9){
    alert.classList.remove('d-none')
    alert.innerText('your number error')
    text.innerText = 'your number error'
    text.classList.add('text')
 }
 else if (n < 1 ){
  alert.classList.remove('d-none')
    alert.innerText('your number error')
 }
}

