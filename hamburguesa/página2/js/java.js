window.addEventListener("load", function(){
    console.log("el script se ha cargado correctamente");
    
    var imagenes = [];
    imagenes[0] = "img/ropa_hombre2.jpeg";
    imagenes[1] = "img/ropa_hombre3.jpeg";
    imagenes[2] = "img/ropa_hombre2.jpeg";
    var indiceImagenes = 0;

    function cambiarImagenes(){
        document.getElementsByName("carrusel")[0].src = imagenes[indiceImagenes];   

        if (indiceImagenes < 2){
            indiceImagenes++;
        } else{
                indiceImagenes = 0;
        }
    }
    this.setInterval(cambiarImagenes, 2000);
});
