const navigation = () =>{
    const pev = document.querySelectorAll('.window');
    const btx = document.querySelectorAll('.switch');
    
    const palNav = (nual) => {
      pev.forEach((slide) => {
        slide.classList.remove('active-window');
    
        btx.forEach((btn) => {
          btn.classList.remove('active');
        });
      });
    
      pev[nual].classList.add('active-window');
      btx[nual].classList.add('active');
    };
    btx.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        palNav(i);
      });
    });
    }
    navigation()

module.exports=navigation;