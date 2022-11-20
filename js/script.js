

// class return element html by id
function getElm(elm) {
    return document.getElementById(elm);
}

function getElmQuery(elm) {
    return document.querySelector(elm);
}

// togle menu mobile
const togle_menu = getElmQuery('.ghc'),
      group_intems = getElmQuery('.header-item-2'),
      group_intems_ul = getElmQuery('.header-item-2 ul'),
      togle_btn = getElmQuery('.togle-menu'),
      group_main = getElmQuery('.group-h');
      
// click event 
let togle_s = 0;
getElmQuery('.togle-menu').onclick = function() {
    // expand menu
    if (togle_s == 0) {

        togle_menu.style.height = '100%';
        group_intems.style.display = 'block';
        group_intems_ul.style = 'flex-direction: column; display: flex; justify-content: center; align-items: center;';
        togle_btn.style.transform = 'rotate(180deg)';
        togle_btn.style.transition = 'all 0.5s';
        togle_s = 1;
        }
    // close menu
    else {
        togle_menu.style.height = '50px';
        group_intems_ul.style = 'flex-direction: row';
        group_intems.style.display = 'none';
        togle_btn.style.transform = 'rotate(0deg)';
        togle_s = 0;
        }
}

// event resize
window.onresize = function() {
    if (window.innerWidth > 768) {
        togle_menu.style.height = '50px';
        group_intems.style.display = 'block';
        group_intems_ul.style = 'flex-direction: row';
        togle_btn.style.transform = 'rotate(0deg)';
        togle_s = 0;
    }
    else {
        togle_menu.style.height = '50px';
        group_intems.style.display = 'none';
        group_intems_ul.style = 'flex-direction: row';
        togle_btn.style.transform = 'rotate(0deg)';
        togle_s = 0;
    }
}

let default_slide = 0;

// get button next and prev and add event listener

const next = document.querySelector('.next');

const prev = document.querySelector('.prev');
// --selected-item: 1; css variable
const value = getComputedStyle(document.documentElement).getPropertyValue('--selected-item'); 


// get all slides
const query = document.querySelectorAll('.slides-list');

// quantidade de slides
let qt_slide = 4;

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
            console.log(value);
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

const targetCircle = getElm('content-slide');

targetCircle.onmouseover = function() {
    clearInterval(nome_variavel);
    console.log('pause');
}

targetCircle.onmouseout = function() {
    nome_variavel = setInterval(slide_timer, 5000);
    console.log('play');
}