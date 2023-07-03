window.addEventListener("load",function(){
    console.log("El script se cargó correctamente");
    var imagenes = [];
    imagenes[0] = "./img/images.jpeg";
    imagenes[1] = "./img/carrusel_hombre1.jpg";
    imagenes[2] = "./img/carrusel_hombre2.jpg";
    var indiceImagenes = 0;
    var tiempo = 1000;

    function cambiarImagenes(){
        document.getElementsByName("slider")[0].src = imagenes[indiceImagenes];
     
        if (indiceImagenes < 2){
            indiceImagenes++;
        } else {
            indiceImagenes = 0;

        }
    }
    this.setInterval(cambiarImagenes, tiempo)
});