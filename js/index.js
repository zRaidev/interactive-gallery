const body = document.querySelector("body");
const img = document.querySelectorAll(".grid-img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const blackScreen = document.querySelector(".black-screen");
const selectElement = document.querySelector(".sort-by__select");
const gridContainer = document.querySelector(".grid-container");


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


//IMG DIVS
const imgDiv1 = document.querySelector(".div-1");
const imgDiv2 = document.querySelector(".div-2");
const imgDiv3 = document.querySelector(".div-3");
const imgDiv4 = document.querySelector(".div-4");
const imgDiv5 = document.querySelector(".div-5");
const imgDiv6 = document.querySelector(".div-6");
const imgDiv7 = document.querySelector(".div-7");
const imgDiv8 = document.querySelector(".div-8");
const imgDiv9 = document.querySelector(".div-9");
const imgDiv10 = document.querySelector(".div-10");
const imgDiv11 = document.querySelector(".div-11");
const imgDiv12 = document.querySelector(".div-12");
const imgDiv13 = document.querySelector(".div-13");
const imgDiv14 = document.querySelector(".div-14");
const imgDiv15 = document.querySelector(".div-15");
const imgDiv16 = document.querySelector(".div-16");
const imgDiv17 = document.querySelector(".div-17");
const imgDiv18 = document.querySelector(".div-18");
const imgDiv19 = document.querySelector(".div-19");
const imgDiv20 = document.querySelector(".div-20");
const imgDiv21 = document.querySelector(".div-21");
const imgDiv22 = document.querySelector(".div-22");
const imgDiv23 = document.querySelector(".div-23");
const imgDiv24 = document.querySelector(".div-24");
const imgDiv25 = document.querySelector(".div-25");
const imgDiv26 = document.querySelector(".div-26");
const imgDiv27 = document.querySelector(".div-27");
const imgDiv28 = document.querySelector(".div-28");
const imgDiv29 = document.querySelector(".div-29");
const imgDiv30 = document.querySelector(".div-30");
const imgDiv31 = document.querySelector(".div-31");
const imgDiv32 = document.querySelector(".div-32");
const imgDiv33 = document.querySelector(".div-33");
const imgDiv34 = document.querySelector(".div-34");
const imgDiv35 = document.querySelector(".div-35");
const imgDiv36 = document.querySelector(".div-36");
const imgDiv = [imgDiv1,imgDiv2,imgDiv3,imgDiv4,imgDiv5,imgDiv6,imgDiv7,imgDiv8,imgDiv9,imgDiv10,imgDiv11,imgDiv12,imgDiv13,imgDiv14,imgDiv15,imgDiv16,imgDiv17,imgDiv18,imgDiv19,imgDiv20,imgDiv21,imgDiv22,imgDiv23,imgDiv24,imgDiv25,imgDiv26,imgDiv27,imgDiv28,imgDiv29,imgDiv30,imgDiv31,imgDiv32,imgDiv33,imgDiv34,imgDiv35,imgDiv36];