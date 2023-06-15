window.addEventListener("load", function(){
    console.log("el script se ha cargado correctamente");
    
    var imagenes = [];
    imagenes[0] = "img/2.jpg";
    imagenes[1] = "img/1.jpg";
    imagenes[2] = "img/3.jpg"
    var indiceImagenes = 0;

    function cambiarImagenes(){
        document.getElementsByName("slider")[0].src = imagenes[indiceImagenes];   

        if (indiceImagenes < 2){
            indiceImagenes++;
        } else{
                indiceImagenes = 0;
        }
    }
    this.setInterval(cambiarImagenes, 2000);
});