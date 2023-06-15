window.addEventListener("load", function(){
    console.log("el script se ha cargado correctamente");
    
    var imagenes = [];
    imagenes[0] = "img/carrusel2.jpg";
    imagenes[1] = "img/carrusel1.jpg";
    var indiceImagenes = 0;

    function cambiarImagenes(){
        document.getElementsByName("slider")[0].src = imagenes[indiceImagenes];   

        if (indiceImagenes < 1){
            indiceImagenes++;
        } else{
                indiceImagenes = 0;
        }
    }
    this.setInterval(cambiarImagenes, 2000);
});
