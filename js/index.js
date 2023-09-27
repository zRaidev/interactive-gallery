const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const blackScreen = document.querySelector(".black-screen");
const selectElement = document.querySelector(".sort-by__select");
const gridContainer = document.querySelector(".grid-container");
const img = document.querySelectorAll(".grid-img");








//PHONES
function phoneResponsive(phone) {
  if (phone.matches) { // If media query matches
    gridContainer.innerHTML = `
        <section class="flex-grid-1">
          <div class="div-1"><img src="./img/1.jpeg" class="grid-img" alt="friends feet photo"></div>
          <div class="div-3"><img src="./img/3.jpeg" class="grid-img" alt="black landscape"></div>
          <div class="div-5"><img src="./img/5.jpeg" class="grid-img" alt="neighborhood vintage picture"></div>
          <div class="div-7"><img src="./img/7.jpeg" class="grid-img" alt="random"></div>
          <div class="div-9"><img src="./img/9.jpeg" class="grid-img" alt="backroom"></div>
          <div class="div-11"><img src="./img/11.jpeg" class="grid-img" alt="vintage"></div>
          <div class="div-13"><img src="./img/5.jpeg" class="grid-img" alt="neighborhood vintage picture"></div>
          <div class="div-15"><img src="./img/6.jpeg" class="grid-img" alt="vintage flowers"></div>
          <div class="div-17"><img src="./img/30.jpeg" class="grid-img" alt="vintage flowers"></div>
          <div class="div-19"><img src="./img/4.jpeg" class="grid-img" alt="palm vintage landscape"></div>
          <div class="div-21"><img src="./img/17.jpeg" class="grid-img" alt="old ship"></div>
          <div class="div-23"><img src="./img/24.jpeg" class="grid-img" alt="trees landscape"></div>
          <div class="div-25"><img src="./img/27.jpeg" class="grid-img" alt="vintage landscape"></div>
          <div class="div-27"><img src="./img/34.jpeg" class="grid-img" alt="sea"></div>
          <div class="div-29"><img src="./img/23.jpeg" class="grid-img" alt="day moon"></div>
          <div class="div-31"><img src="./img/31.jpeg" class="grid-img" alt="moon"></div>
          <div class="div-33"><img src="./img/35.jpeg" class="grid-img" alt="la chorrera at night"></div>
          <div class="div-35"><img src="./img/38.jpeg" class="grid-img" alt="cat"></div>
        </section>
        <section class="flex-grid-2">
          <div class="div-2"><img src="./img/2.jpeg" class="grid-img" alt="backroom"></div>
          <div class="div-4"><img src="./img/4.jpeg" class="grid-img" alt="palm vintage landscape"></div>
          <div class="div-6"><img src="./img/6.jpeg" class="grid-img" alt="vintage flowers"></div>
          <div class="div-8"><img src="./img/8.jpeg" class="grid-img" alt="backroom"></div>
          <div class="div-10"><img src="./img/10.jpeg" class="grid-img" alt="going down stairs"></div>
          <div class="div-12"><img src="./img/21.jpeg" class="grid-img" alt="path"></div>
          <div class="div-14"><img src="./img/18.jpeg" class="grid-img" alt="random"></div>
          <div class="div-16"><img src="./img/29.jpeg" class="grid-img" alt="vintage flowers"></div>
          <div class="div-18"><img src="./img/3.jpeg" class="grid-img" alt="black landscape"></div>
          <div class="div-20"><img src="./img/15.jpeg" class="grid-img" alt="sunset"></div>
          <div class="div-22"><img src="./img/19.jpeg" class="grid-img" alt="vintage landscape"></div>
          <div class="div-24"><img src="./img/25.jpeg" class="grid-img" alt="river"></div>
          <div class="div-26"><img src="./img/32.jpeg" class="grid-img" alt="sky"></div>
          <div class="div-28"><img src="./img/39.jpeg" class="grid-img" alt="city sunset"></div>
          <div class="div-30"><img src="./img/26.jpeg" class="grid-img" alt="morning moon"></div>
          <div class="div-32"><img src="./img/33.jpeg" class="grid-img" alt="park"></div>
          <div class="div-34"><img src="./img/37.jpeg" class="grid-img" alt="black landscape"></div>
          <div class="div-36"><img src="./img/40.jpeg" class="grid-img" alt="park"></div>
        </section>
    `
  } else { //TABLETS
    function tabletResponsive(tablet) {
      if (tablet.matches) { // If media query matches
        gridContainer.innerHTML = `
          <section class="flex-grid-1">
            <div class="div-1"><img src="./img/1.jpeg" class="grid-img" alt="friends feet photo"></div>
            <div class="div-4"><img src="./img/4.jpeg" class="grid-img" alt="palm vintage landscape"></div>
            <div class="div-7"><img src="./img/7.jpeg" class="grid-img" alt="random"></div>
            <div class="div-10"><img src="./img/10.jpeg" class="grid-img" alt="going down stairs"></div>
            <div class="div-13"><img src="./img/5.jpeg" class="grid-img" alt="neighborhood vintage picture"></div>
            <div class="div-16"><img src="./img/29.jpeg" class="grid-img" alt="vintage flowers"></div>
            <div class="div-19"><img src="./img/4.jpeg" class="grid-img" alt="palm vintage landscape"></div>
            <div class="div-22"><img src="./img/19.jpeg" class="grid-img" alt="vintage landscape"></div>
            <div class="div-25"><img src="./img/27.jpeg" class="grid-img" alt="vintage landscape"></div>
            <div class="div-28"><img src="./img/39.jpeg" class="grid-img" alt="city sunset"></div>
            <div class="div-31"><img src="./img/31.jpeg" class="grid-img" alt="moon"></div>
            <div class="div-34"><img src="./img/37.jpeg" class="grid-img" alt="black landscape"></div>
            </section>
          <section class="flex-grid-2">
            <div class="div-2"><img src="./img/2.jpeg" class="grid-img" alt="backroom"></div>
            <div class="div-5"><img src="./img/5.jpeg" class="grid-img" alt="neighborhood vintage picture"></div>
            <div class="div-8"><img src="./img/8.jpeg" class="grid-img" alt="backroom"></div>
            <div class="div-11"><img src="./img/11.jpeg" class="grid-img" alt="vintage"></div>
            <div class="div-14"><img src="./img/18.jpeg" class="grid-img" alt="random"></div>
            <div class="div-17"><img src="./img/30.jpeg" class="grid-img" alt="vintage flowers"></div>
            <div class="div-20"><img src="./img/15.jpeg" class="grid-img" alt="sunset"></div>
            <div class="div-23"><img src="./img/24.jpeg" class="grid-img" alt="trees landscape"></div>
            <div class="div-26"><img src="./img/32.jpeg" class="grid-img" alt="sky"></div>
            <div class="div-29"><img src="./img/23.jpeg" class="grid-img" alt="day moon"></div>
            <div class="div-32"><img src="./img/33.jpeg" class="grid-img" alt="park"></div>
            <div class="div-35"><img src="./img/38.jpeg" class="grid-img" alt="cat"></div>
            </section>
          <section class="flex-grid-3">
            <div class="div-3"><img src="./img/3.jpeg" class="grid-img" alt="black landscape"></div>
            <div class="div-6"><img src="./img/6.jpeg" class="grid-img" alt="vintage flowers"></div>
            <div class="div-9"><img src="./img/9.jpeg" class="grid-img" alt="backroom"></div>
            <div class="div-12"><img src="./img/21.jpeg" class="grid-img" alt="path"></div>
            <div class="div-15"><img src="./img/6.jpeg" class="grid-img" alt="vintage flowers"></div>
            <div class="div-18"><img src="./img/3.jpeg" class="grid-img" alt="black landscape"></div>
            <div class="div-21"><img src="./img/17.jpeg" class="grid-img" alt="old ship"></div>
            <div class="div-24"><img src="./img/25.jpeg" class="grid-img" alt="river"></div>
            <div class="div-27"><img src="./img/34.jpeg" class="grid-img" alt="sea"></div>
            <div class="div-30"><img src="./img/26.jpeg" class="grid-img" alt="morning moon"></div>
            <div class="div-33"><img src="./img/35.jpeg" class="grid-img" alt="la chorrera at night"></div>
            <div class="div-36"><img src="./img/40.jpeg" class="grid-img" alt="park"></div>
          </section>
        `
      }
    }
    
    let tablet = window.matchMedia("(min-width: 768px) and (max-width: 1024px)")
    tabletResponsive(tablet) // Call listener function at run time
    tablet.addEventListener("change", tablet) // Attach listener function on state changes
  }
}

let phone = window.matchMedia("(max-width: 767px)")
phoneResponsive(phone) // Call listener function at run time
phone.addEventListener("change", phone) // Attach listener function on state changes


//TABLETS












function modalFunc() {
  document.addEventListener("DOMContentLoaded", () => {
    gridContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("grid-img")) {
        console.log(e);
        modalCondition = true;
        modal.style.display = "block";
        blackScreen.style.opacity = "1";
        body.style.overflow = "hidden";
        let clickedImg = e.target;
        let imgSrc = clickedImg.src;
        modalImg.style.opacity = "1";
        modalImg.src = imgSrc;
      }
    });

    blackScreen.addEventListener("click", () => {
      console.log('imagen deseleccionada');
      modalCondition = false;
      modal.style.display = "none";
      blackScreen.style.opacity = "0";
      body.style.overflow = "visible";
      modalImg.src = "";
    });
  });
}

modalFunc();



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

