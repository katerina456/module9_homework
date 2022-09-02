const btn = document.querySelector('.button');

btn.addEventListener('click', () => {
  const value = document.querySelector('input').value;
  const result = document.querySelector('.result');
  
  setContent(value, result);
})


function setContent(number, elem) {
  if (number < 11 && number > 0) {
    elem.innerHTML = '';
    
    const xhr = new XMLHttpRequest();
    
    xhr.open("get", `https://picsum.photos/v2/list?limit=${number}`, true);
     
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
            ${item.author}
          </div>`;
          
          cards += card;
        })
        //console.log(cards);
        //console.log(data);
         
        elem.innerHTML = cards;
      }
      
    }

    xhr.onerror = function() {
      console.log('Ошибка запроса');
    };
    
    xhr.send();
    
  }
  else {
    elem.innerHTML = 'число вне диапазона от 1 до 10';
  }
}

