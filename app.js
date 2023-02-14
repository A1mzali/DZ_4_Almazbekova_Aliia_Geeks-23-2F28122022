const counter = document.querySelector('#counter')

const btns = document.querySelectorAll('.btn')

let numm = 0; 

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList
    
    if(styles.contains('decrease')){
      numm--;
    } else if (styles.contains('increase')){
      numm++;
    } else {
      numm = 0
    }
     
    if( numm > 0) {
      counter.style.color ='green'
    } else if (numm < 0) {
      counter.style.color ='red'
    } else{
      counter.style.color ='grey'
    }

    counter.textContent = numm;
  })
})