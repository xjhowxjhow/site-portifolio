
function getElm(elm) {
  return document.getElementById(elm);
}

function getElmQuery(elm) {
  return document.querySelector(elm);
}



const textos = [
  'Olá sou o Jhonatan Desenvolvedor Web e Desktop',
  "Hello, I'm Jhonatan Web and Desktop Developer",
  "Hola, soy Jhonatan Desarrollador web y de escritorio",
  "Bonjour, je suis Jhonatan Développeur Web et de bureau",
  "Hallo, ich bin Jhonatan Web- und Desktop-Entwickler",
  'Olá sou o Jhonatan Desenvolvedor Web e Desktop'
];

const elemento = document.getElementById("letreiro-well");

let indice = 0;
let textoAtual = 0;

function digitacao() {
  if (indice <= textos[textoAtual].length) {
    elemento.innerHTML = textos[textoAtual].slice(0, indice);
    indice++;

    setTimeout(digitacao, 100);
  } else {
    if (textoAtual < textos.length - 1) {
      indice = 0;
      textoAtual++;
    } else {
      textoAtual = 0;
    }

    setTimeout(digitacao, 1000);
  }   
}

// Inicia o intervalo de tempo
digitacao();





const botao1 = document.getElementById('sobre');
const botao2 = document.getElementById('home');
const botao3 = document.getElementById('carreira');
const botao4 = document.getElementById('projetos');
const botao5 = document.getElementById('contato');

const content = document.getElementById('c-sobre');
const content2 = document.getElementById('c-home');
const content3 = document.getElementById('c-carreira');
const content4 = document.getElementById('c-projetos');
const content5 = document.getElementById('c-contato');

botao1.addEventListener('click', function() {
    content.scrollIntoView({ behavior: 'smooth' });
    botao1.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
    botao2.style.backgroundColor = 'transparent';
    botao3.style.backgroundColor = 'transparent';
    botao4.style.backgroundColor = 'transparent';
    botao5.style.backgroundColor = 'transparent';
  });

botao2.addEventListener('click', function() {
    content2.scrollIntoView({ behavior: 'smooth' });
    botao2.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
    botao1.style.backgroundColor = 'transparent';
    botao3.style.backgroundColor = 'transparent';
    botao4.style.backgroundColor = 'transparent';
    botao5.style.backgroundColor = 'transparent';
  }
);

botao3.addEventListener('click', function() {
    content3.scrollIntoView({ behavior: 'smooth' });
    botao3.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
    botao1.style.backgroundColor = 'transparent';
    botao2.style.backgroundColor = 'transparent';
    botao4.style.backgroundColor = 'transparent';
    botao5.style.backgroundColor = 'transparent';

  }
);

botao4.addEventListener('click', function() {
    content4.scrollIntoView({ behavior: 'smooth' });
    botao4.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
    botao1.style.backgroundColor = 'transparent';
    botao2.style.backgroundColor = 'transparent';
    botao3.style.backgroundColor = 'transparent';
    botao5.style.backgroundColor = 'transparent';
  }
);

botao5.addEventListener('click', function() {
    content5.scrollIntoView({ behavior: 'smooth' });
    botao5.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
    botao1.style.backgroundColor = 'transparent';
    botao2.style.backgroundColor = 'transparent';
    botao3.style.backgroundColor = 'transparent';
    botao4.style.backgroundColor = 'transparent';
  }
);

// headers itens
let home = document.getElementById('home');
let sobre = document.getElementById('sobre');
let carreira = document.getElementById('carreira');
let projetos = document.getElementById('projetos');
let contato = document.getElementById('contato');

function currentsectionheader(item){
  if (item == 'c-home'){
    home.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    sobre.style.backgroundColor = 'transparent';
    carreira.style.backgroundColor = 'transparent';
    projetos.style.backgroundColor = 'transparent';
    contato.style.backgroundColor = 'transparent';
  }else if (item == 'c-sobre'){
    home.style.backgroundColor = 'transparent';
    sobre.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    carreira.style.backgroundColor = 'transparent';
    projetos.style.backgroundColor = 'transparent';
    contato.style.backgroundColor = 'transparent';
  }else if (item == 'c-carreira'){
    home.style.backgroundColor = 'transparent';
    sobre.style.backgroundColor = 'transparent';
    carreira.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    projetos.style.backgroundColor = 'transparent';
    contato.style.backgroundColor = 'transparent';
  }else if (item == 'c-projetos'){
    home.style.backgroundColor = 'transparent';
    sobre.style.backgroundColor = 'transparent';
    carreira.style.backgroundColor = 'transparent';
    projetos.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    contato.style.backgroundColor = 'transparent';
  }
  else if (item == 'c-contato'){
    home.style.backgroundColor = 'transparent';
    sobre.style.backgroundColor = 'transparent';
    carreira.style.backgroundColor = 'transparent';
    projetos.style.backgroundColor = 'transparent';
    contato.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
  }
}

// TIME LINE


const animatedElements = document.querySelectorAll('.menu-item, .txt-glosary-body, .timeline__event, .txt-glosary-footer, .title-page-project, .img-2');

animatedElements.forEach(animatedElement => {

const observer = new IntersectionObserver(entries => {

    if (entries[0].intersectionRatio > 0) {

      if (animatedElement.classList.contains('timeline__event')) {

        let delay = 0;
        let elementos = document.querySelectorAll('.timeline__event');
        let effects = ['fadeInLeft', 'fadeInRight','fadeinTopLeft', 'fadeInUp','fadeInDown'];
        

        elementos.forEach(elemento => {
          let randomIndex = Math.floor(Math.random() * effects.length);

          let randomElement = effects[randomIndex];
          elemento.classList.add('animated',randomElement , 'delay-' + delay + 's');
          delay += 1;
        });


      }
      if (animatedElement.classList.contains('menu-item')) {


        let elementos = document.querySelectorAll('.menu-item');
        let delay = 0;

        elementos.forEach(elemento => {
          elemento.classList.add('animated', 'fadeInUp', 'delay-' + delay + 's');
          delay += 1;
        });
      }
      if (animatedElement.classList.contains('txt-glosary-body')) {


        animatedElement.classList.add('animated', 'fadeInLeft', 'delay-1s');
        // muda o item no header

      }
      if (animatedElement.classList.contains('txt-glosary-footer')) {


        animatedElement.classList.add('animated', 'fadeInRight', 'delay-1s');
      }
      if (animatedElement.classList.contains('title-page-project')) {

        
        animatedElement.classList.add('animated', 'fadeInLeft', 'delay-1s');

      }
      
      if (animatedElement.classList.contains('img-2')) {

        
        animatedElement.classList.add('animated', 'fadeInRight', 'delay-1s');
      }
      

      observer.disconnect();
    }
  });


  observer.observe(animatedElement);
});



const sections = document.querySelectorAll("#c-home, #c-sobre, #c-carreira, #c-projetos, #c-contato");

window.addEventListener("scroll", function() {
  sections.forEach(function(section) {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    if (sectionTop <= 0.5 && sectionBottom > 0.5) {
      console.log('-------- ')
      console.log(sectionTop)
      console.log(sectionBottom)
      console.log(section.id);
      currentsectionheader(section.id);
    }
  });
});





let default_slide = 0;
let qt_slide = 5;

//SLIDE PROJECTS
function slides_n_p(click_id) {
  // #function left: calc(var(--selected-item) * -100%);
      if (click_id == 'next') {
          if (default_slide ==0 ) {
  
              document.documentElement.style.setProperty('--selected-item', default_slide + 1);
              default_slide += 1;
              }
          else if (default_slide == qt_slide){
              default_slide = 0;
              document.documentElement.style.setProperty('--selected-item', default_slide);
              }
          else {
              document.documentElement.style.setProperty('--selected-item', default_slide + 1);
              
              default_slide += 1;
              }
      }
      else if (click_id == 'previus') {
          if (default_slide == 0) {
              default_slide = qt_slide;
              document.documentElement.style.setProperty('--selected-item', default_slide);
              }
          else {
              document.documentElement.style.setProperty('--selected-item', default_slide - 1);
              default_slide -= 1;
              }
          
      }
      else {
          alert('error');
      }
  
  }
  
var nome_variavel = setInterval(slide_timer, 5000);
  
function slide_timer() {
      const value = default_slide;
      if (value == 0) {
          document.documentElement.style.setProperty('--selected-item', 1);
          default_slide = 1;
          }
      else if (value == qt_slide) {
          document.documentElement.style.setProperty('--selected-item', 0);
          default_slide = 0;
  
          }
      else {
          document.documentElement.style.setProperty('--selected-item', value + 1);
          default_slide += 1;
  
          }
}
  
  
// evento pause timer

const targetCircle = getElm('c-projetos');

targetCircle.onmouseover = function() {
    clearInterval(nome_variavel);

}

targetCircle.onmouseout = function() {
    nome_variavel = setInterval(slide_timer, 5000);

}




// toggle menu mobile
// togle menu mobile
const togle_menu = getElmQuery('.togle-menu'),
      header = getElmQuery('.header'),
      group_menu = getElmQuery('.menu'),
      logo_text = getElmQuery('.logo-text'),
      menu_item = getElmQuery('.menu-item')
      
    
let togle_s = 0;

getElmQuery('.togle-menu').onclick = function() {
  // expand menu
  if (togle_s == 0) {
    header.style = 'height:100vh; background-color: rgb(40, 42, 54);'
    group_menu.style = 'display: flex; flex-direction: column; justify-content: center; align-items: center;';
    togle_s = 1;
    togle_menu.style.transform = 'rotate(180deg)';
    console.log('togle expand')
    logo_text.style = 'width: 20%;'
    menu_item.style= 'font-size: 2rem;'
    for (let i = 0; i < group_menu.children.length; i++) {
      group_menu.children[i].style = 'font-size: 1.2rem;';
    } 
    
  }

  // close menu
  else {

    header.style = '20px ;background-color: rgba(92, 29, 165, 0.2);';
    togle_menu.style.transform = 'rotate(0deg)';
    group_menu.style = 'display: flex; flex-direction: row; justify-content: space-between; align-items: center;';
    togle_s = 0;
    group_menu.style= 'display: none;'
  }
}



window.onresize = function() {
  if (window.innerWidth > 768) {
      togle_menu.style.height = '20px';
      togle_menu.style.transform = 'rotate(180deg)';
      togle_s = 0;
      group_menu.style= 'display: flex; flex-direction: row; justify-content: space-between; align-items: center; margin: 0; padding: 0; gap: 10px; margin-right: 20px;'
      header.style = 'width: 100%; position: fixed; justify-content: space-between; align-items: center; padding: 20px 0px; z-index: 100; transition: 0.2s;';
      logo_text.style = 'width: 100%;'
      menu_item.style= 'font-size: 1rem;'
      for (let i = 0; i < group_menu.children.length; i++) {
        group_menu.children[i].style = 'font-size: 1rem;';
      }
      
      
  }
  else {
      togle_menu.style.height = '50px';
      togle_menu.style.transform = 'rotate(0deg)';
      togle_s = 0;
      group_menu.style= 'display: none;'
      logo_text.style = 'width: 100%;'
      menu_item.style= 'font-size: 1rem;'
      for (let i = 0; i < group_menu.children.length; i++) {
        group_menu.children[i].style = 'font-size: 1rem;';
      }

  }
}
