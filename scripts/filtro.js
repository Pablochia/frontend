
let hide_btn= document.getElementById('hide_btn');

let hidediv = document.getElementById('hidediv');


hide_btn.addEventListener('click', dropdown);

function dropdown(){
   hidediv.classList.toggle('show');
}
