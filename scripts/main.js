
const btns = document.querySelectorAll(".btn"); 
const overlay = document.querySelector(".overlay");
const form = document.querySelector(".callback-form"); 
const btnsInfo = document.querySelectorAll(".more__info"); 

// btn.addEventListener('click', function(){
//     overlay.style.display = 'flex';
//     body.style.overflow = 'hidden';
// });

const body = document.querySelector('body');

btns.forEach(function(btn) {
    btn.addEventListener('click', function () {
        overlay.style.display = 'flex';
        body.style.overflow = 'hidden';
    })
});

btnsInfo.forEach(function(btnInfo) {
    btnInfo.addEventListener('click', function () {
        overlay.style.display = 'flex';
        body.style.overflow = 'hidden';
    })
});

form.addEventListener('click', function(e){
    e.stopPropagation();
});

overlay.addEventListener('click', function(){
    overlay.style.display = 'none';
    body.style.overflow = 'auto';
});
