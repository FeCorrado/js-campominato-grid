// Funzione creazione quadrato e click
function containerGriglia (container) {
    let quadrato = document.createElement('div');
    quadrato.className ='quadrato';
    container.append(quadrato);

    quadrato.addEventListener('click', function(){
    this.classList.add('blu');   
    })
}

const lv1Button = document.querySelector(".lv1");
const lv2Button = document.querySelector(".lv2");
const lv3Button = document.querySelector(".lv3");
const bigContainer = document.querySelector('.container-caselle');


// L1
lv1Button.addEventListener('click', function (){
    bigContainer.innerHTML = '';
    for (let i = 0; i < 100; i++) {
        containerGriglia(bigContainer); 

        bigContainer.classList.add('lv1-box');
        bigContainer.classList.remove('lv2-box', 'lv3-box');
    }
});

// L2
lv2Button.addEventListener('click', function (){
    bigContainer.innerHTML = '';
    for (let i = 0; i <= 80; i++) {
        containerGriglia(bigContainer); 

        bigContainer.classList.add('lv2-box');
        bigContainer.classList.remove('lv1-box', 'lv3-box');
    }
});

// L3
lv3Button.addEventListener('click', function (){
    bigContainer.innerHTML = '';
    for (let i = 0; i <= 48; i++) {
        containerGriglia(bigContainer); 

        bigContainer.classList.add('lv3-box');
        bigContainer.classList.remove('lv1-box', 'lv2-box');
    }
});