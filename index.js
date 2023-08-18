const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".open");
const closeModalBtn = document.querySelector(".btn-close");

function clsModel(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
        }
function openModel(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
openModalBtn.onclick=openModel;
closeModalBtn.onclick=clsModel;

       











       

        
        