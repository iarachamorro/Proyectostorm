window.addEventListener("load",function(){
    console.log("El script se cargó correctamente");
    var imagenes = [];
    imagenes[0] = "./img/carrusel3.jpg";
    imagenes[1] = "./img/carrusel5.jpg";
    imagenes[2] = "./img/carrusel6.jpg";
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