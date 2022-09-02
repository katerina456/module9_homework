const btn = document.querySelector('.button');
const number = document.getElementById('number');
const limit = document.getElementById('limit');
const mistakes = document.querySelectorAll('.mistake');
const result = document.querySelector('.result');

number.addEventListener('input', () => {
  if (number.value > 10 || number.value < 1) {
    mistakes[0].style.display = 'block'
  }
  else {
    mistakes[0].style.display = 'none'
  }
})

limit.addEventListener('input', () => {
  if (limit.value > 10 || limit.value < 1) {
    mistakes[1].style.display = 'block';
  }
  else {
    mistakes[1].style.display = 'none';
  }
})


btn.addEventListener('click', () => {
  let mistakeNumber = number.value > 10 || number.value < 1;
  let mistakeLimit = limit.value > 10 || limit.value < 1;
  
  if (mistakeNumber || mistakeLimit) {
    
     if (mistakeNumber && mistakeLimit) {
       mistakes[2].style.display = 'block';
     }
    else {
      mistakes[2].textContent = 'Одно из значений введено некорректно';
    } 
    
  }
  else {
    mistakes[2].style.display = 'none';
    
    localStorage.setItem("number", `${number.value}`) ;
    localStorage.setItem("limit", `${limit.value}`) ;
    
    getPictute(number.value, limit.value);
 
  }  
})



document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem("limit") && localStorage.getItem("number")) {
    
    getPictute(localStorage.getItem("number"), localStorage.getItem("limit"));
    
  }     
})



function getPictute(page, count) {
  let xhr = new XMLHttpRequest;
  xhr.open('get', `https://picsum.photos/v2/list?page=${page}&limit=${count}`, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log(`Статус ответа: ${xhr.status}`);
    }
    else {

		const data = JSON.parse(xhr.response);
        
		let cards = '';
        
		data.forEach(item => {
			let card = `<div class='card'>
            <img src = '${item.download_url}'>
            <p>${item.author}</p>
          </div>`;
          
			cards += card;
		})
         
		result.innerHTML = cards;
	}
  }
    
  xhr.onerror = function() {
    console.log('error')
  }
    
  xhr.send(); 
}
