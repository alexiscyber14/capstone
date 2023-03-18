const popper =() =>{
    const popar = document.querySelectorAll(".popup");
    const buttons =document.querySelectorAll(".open-popup");
    const closePopa = document.querySelectorAll('.close-popup')
    const pNav = (nava) => {
     popar.forEach(()=>{
      popar[nava].classList.add('popup-show')
     })
    };
  
    const aNav = (nava) => {
      popar.forEach(()=>{
       popar[nava].classList.remove('popup-show')
      })
   
     };
    buttons.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        pNav(i);
      });
    });
    closePopa.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        aNav(i);
      });
    });
  }

  module.exports = popper;