function notOrder(num) {
  axios("../json/images.json")
  .then(res => {
    //console.log(res.data[num]);
    for (let i = 0; i < res.data.length; i++) {
      if (res.data[num].status) {
        imgDiv[num].innerHTML = `<img src="${res.data[num].src}" class="grid-img" alt="${res.data[num].alt}">`;
        num++;
      }
    }
  })
}


function imageType(num) {
  axios("../json/images.json")
    .then(res => {
      const data = res.data;

      const filteredData = data.filter(item => item.status);
      const people = filteredData.filter(item => item.type === "people");
      const backroom = filteredData.filter(item => item.type === "backroom");
      const random = filteredData.filter(item => item.type === "random");
      const flower = filteredData.filter(item => item.type === "flower");
      const landscape = filteredData.filter(item => item.type === "landscape");
      const moon = filteredData.filter(item => item.type === "moon");
      const place = filteredData.filter(item => item.type === "place");
      const other = filteredData.filter(item => !["people","backroom","random","flower","landscape","moon","place"].includes(item.type));
      const allArr = people.concat(backroom, random, flower, landscape, moon, place);
      //console.log(people, backroom, random, flower, landscape, moon, place, other);
      //console.log(people);
      //console.log(backroom);
      //console.log(random);
      //console.log(flower);
      //console.log(landscape);
      //console.log(moon);
      //console.log(place);
      //console.log(other);
      //console.log(allArr[num].alt)
      imgDiv[num].innerHTML = `<img src="${allArr[num].src}" class="grid-img" alt="${allArr[num].alt}">`;
      //console.log(allArr[num].type)
      num++;
      imageType(num);
    })
}
//imageType(0);

function colors(num) {
  axios("../json/images.json")
  .then(res => {
    const data = res.data;
    //console.log(data)
    const filteredData = data.filter(item => item.status);
    const white = filteredData.filter(item => item.color === "white");
    const black = filteredData.filter(item => item.color === "black");
    const blackColors = filteredData.filter(item => item.color === "blackColors");
    const yellow = filteredData.filter(item => item.color === "yellow");
    const sepia = filteredData.filter(item => item.color === "sepia");
    const orange = filteredData.filter(item => item.color === "orange");
    const green = filteredData.filter(item => item.color === "green");
    const blue = filteredData.filter(item => item.color === "blue");
    const other = filteredData.filter(item => !["white","black","blackColors","yellow","sepia","orange","green","blue"].includes(item.type));
    const allArr = white.concat(black, blackColors, yellow, sepia, orange, green, blue);
    //console.log(people, backroom, random, flower, landscape, moon, place, other);
    //console.log(people);
    //console.log(backroom);
    //console.log(random);
    //console.log(flower);
    //console.log(landscape);
    //console.log(moon);
    //console.log(place);
    //console.log(other);
    //console.log(allArr[0])
    imgDiv[num].innerHTML = `<img src="${allArr[num].src}" class="grid-img" alt="${allArr[num].alt}">`;
    //console.log(allArr[num].color)
    num++;
    colors(num);
  })
}
//colors(0);

document.addEventListener("change", ()=>{
  let selectOption = document.querySelector(".sort-by__select").value;
  if (selectOption == "No Ordenar") notOrder(0);
  else if (selectOption == "Tipo de imagen") imageType(0);
  else if (selectOption == "Colores") colors(0);
})
