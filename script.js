'use strict';

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
const theAge = document.querySelector('#age');
               
myForm.addEventListener('submit',onsubmit);

myForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (nameInput.value === ''|| emailInput.value ==='' )
    {
      msg.classList.add('error');
      msg.innerHTML = 'Please enter all fields';
      //time out to delete error message after 3s     
      setTimeout(() => {msg.remove();}, 3000);
      
    }
    else{
     const li = document.createElement('li');
     li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
     userList.appendChild(li);
  
     //clear fields
     nameInput.value ='';
     emailInput.value = '';
    }
  });
