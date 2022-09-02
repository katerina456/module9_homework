const btn = document.querySelector('.button');


btn.addEventListener('click', () => {
  const value = document.querySelectorAll('input');
  const width = Number(value[0].value);
  const hight = Number(value[1].value);
  
  const result = document.querySelector('.result');
 
  
  if (width < 100 || width > 300 || hight < 100 || hight > 300) {
    result.innerHTML = 'одно из чисел вне диапазона от 100 до 300';
  }
  else {
    result.innerHTML = 'hello';
    
    fetch(`https://picsum.photos/${width}/${hight}`)
    .then((response) => {
      return response; 
    })
    
    .then((data) => { 
      result.innerHTML = `<img src=${data.url}>`;
      console.log(result); 
    })
    
    .catch(() => { console.log('error') });
  }
  
})

