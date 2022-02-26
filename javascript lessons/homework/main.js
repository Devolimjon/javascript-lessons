const addBtn = document.querySelector('#add')
const elements = document.querySelector('#elements')
const nameEdit = document.querySelector('#name')
const phoneEdit = document.querySelector('#phone')
const username = document.querySelector('#name');
const phone = document.querySelector('#phone');
const error = document.querySelector('.alert.alert-danger')
addBtn.onclick = () => {
  let nameEdition = nameEdit.value;
  let phoneedition = phoneEdit.value;
 
    if(nameEdition === "" && phoneedition === ""){
      error.classList.remove("d-none");
      error.innerText = "write the base";
      return
    }

    if(nameEdit === ""){
      error.classList.remove("d-none");
      error.innerText = "write the base";
      return
    }
    let card = document.createElement('div')
    card.classList.add('card')
    let header = document.createElement('div')
    header.classList.add('card-header')
    let body = document.createElement('div')
    body.classList.add('card-body')
    let footer = document.createElement('div')
    footer.classList.add('card-footer')
    let remove = document.createElement('button')
    remove.classList.add('btn', 'btn-danger', 'btn-sm')
    header.innerText = nameEdit.value
    body.innerText = phoneEdit.value
    remove.innerText = "Remove"
    remove.onclick = () => {
      elements.removeChild(card)
    }
    footer.appendChild(remove)
    card.appendChild(header)
    card.appendChild(body)
    card.appendChild(footer)
    elements.appendChild(card)
    nameEdit.value = '';
    phoneEdit.value = '';
  }

