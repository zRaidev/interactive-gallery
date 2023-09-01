



// TENGO QUE CREAR UN METODO PARA QUE SE ORDENEN DE ACUERDO A SU COLOR (PODRIA UTILIZAR UN ARRAY PARA UTILIZAR LA INFORMACION DE AHI PERO NO SE COMO COLOCAR LA INFO)

function tipoDeImagen(num) {

}
tipoDeImagen(0);







function nada(num) {
  axios("../json/images.json")
  .then(res => {
    console.log(res.data[num])
    for (let i = 0; i < res.data.length; i++) {
      if (res.data[num].status) {
        imgDiv[num].innerHTML = `<img src="${res.data[num].src}" class="grid-img" alt="${res.data[num].alt}">`
        num++
      }
    }
  })
}
nada(0);



function colores() {
  
}