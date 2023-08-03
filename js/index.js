const body = document.querySelector("body");
const img = document.querySelectorAll(".grid-img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const blackScreen = document.querySelector(".black-screen");


img.forEach(img => {
  img.addEventListener("click", e => {
    console.log(e);
    modalCondition = true;
    modal.style.display = "block";
    blackScreen.style.opacity = "1";
    body.style.overflow = "hidden";
    let clickedImg = e.target;
    let imgSrc = clickedImg.src;
    modalImg.style.opacity = "1";
    modalImg.src = imgSrc;
  });
});
blackScreen.addEventListener("click",()=>{
  console.log('imagen deseleccionada');
  modalCondition = false;
  modal.style.display = "none";
  blackScreen.style.opacity = "0";
  body.style.overflow = "visible"
  modalImg.src = ""
})