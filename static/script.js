/* Carrusel - Docentes */
(function(){
    
  const sliders = [...document.querySelectorAll('.info-docentes')];
  const buttonNext = document.querySelector('#siguiente');
  const buttonBefore = document.querySelector('#antes');
  let value;   

  buttonNext.addEventListener('click', ()=>{
      changePosition(1);
  });

  buttonBefore.addEventListener('click', ()=>{
      changePosition(-1);
  });

  const changePosition = (add)=>{
      const currentTestimony = document.querySelector('.info-docentes--show').dataset.id;
      value = Number(currentTestimony);
      value+= add;


      sliders[Number(currentTestimony)-1].classList.remove('info-docentes--show');
      if(value === sliders.length+1 || value === 0){
          value = value === 0 ? sliders.length  : 1;
      }

      sliders[value-1].classList.add('info-docentes--show');

  }

})();


/*Para el menu*/ 

const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')


hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})


/*Carrusel Actividades*/ 
function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}
//para correr hacia atras
let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}
//para correr hacia adelante
let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}