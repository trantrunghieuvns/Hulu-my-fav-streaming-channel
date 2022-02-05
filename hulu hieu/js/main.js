const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');


loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);


function openModal() {
    modal.style.display = 'block'
}

function closeModal() {
    modal.style.display = 'none'
}

function outsideClick(e) { 
    if(e.target == modal) {
        closeModal();
    }
}

let n; 
let max = 100; 
let min = 0;
let randomNumber; 
let arr=[];

for ( i=0; n => i; i++){
    let randomNumber=Math.floor(Math.random)*(max-min+1)+min;
    arr.push(randomNumber);
}
console.log(arr);