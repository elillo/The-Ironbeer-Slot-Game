var Slot = function (id, fase) {
    this.contador = 0;
    this.tiempo;
    this.images = [];
    this.id = id;
    this.fase = fase;
    this.numImage = (fase == "One") ? 3 : 9;

    //introduzco las imagenes en las arrays del constructor con su fase asociada y su id(0,1,2...)

    for (var i = 0; i < this.numImage; i++) {
        this.images.push("../images/Slot/" + fase + i + ".jpeg")
    }

    //Introduzco en las secciones del html los divs coincidentes con la fase en la que estemos y llamo a la funcion create.
    $("#" + fase).append("<div class='slot' id='" + fase + id + "'></div>");
    this.create(this.images);

}


//SEGUNDA llamada del flujo. Creamos el prototype move y le damos como valor una función.
Slot.prototype.move = function () {
    //en esta funcion movemos la ultima imagen del slot y la colocamos al comienzo de las imágenes. 
    //evitamos problemas con el scope del constructor alojando this en la variable self.       
    var self = this;
    //apuntamos al  ultimo div de un slot con su Id y la alojamos en la variable ultimaImg y lo mismo para ultimaImg2.
    var ultimaImg = $("#" + self.fase + self.id + " div:last");
    var slot = $("#" + self.fase + self.id);

    //aplicamos el metodo detach a  ultimaImg y a ultimaImg2.Este método elimina el elemento,conservando sus datos y eventos asociados y guarda una copia para reutilizarlos.
    //en este caso insertarlo en la posición anterior al primero del slot.
    ultimaImg.detach().prependTo(slot);
}


// TERCERA llamada del flujo.Función create,encargada de introducir en el dom los divs de las imagenes.
Slot.prototype.create = function () {
    var self = this

    for (var i = 0; i < self.numImage; i++) {
        //Este bucle introducen las imagenes en sus slots correspondiestes.
        $("#" + self.fase + self.id).append("<div id='image_" + i + "'><img src='" + this.images[i] + "'</div>");

    }

}

//PRIMERA llamada del flujo. Creamos el prototype start y le damos como valor una función.
Slot.prototype.start = function () {
    var self = this
    self.tiempo = 0;

    //guardo en numVueltas el random de entre 9 o 3 posiciones depende de la fase,estas se refiren al numero de imagenes de cada slot. 

   
      //var numVueltas = Math.floor(Math.random() * (34 - 25)) + 15;                                                                             //RANDOM
         var numVueltas = 16;
    console.log('numVueltas', numVueltas)

    //incio un bucle for partiendo desde contador que vale 0, y que itere mientras numVueltas sea mayor que contador(numero de iteraciones a realizar),
    //este numero de vueltas me lo da el random.
    for (self.contador = 0; self.contador < numVueltas; self.contador++) {
        //en esta variable rasigno el valor de tiempo que es contador(numero de iteraciones) * 10.
        self.tiempo = self.tiempo + self.contador * 10;

        console.log(self.tiempo, self.contador);
        //aplico un setTimeout pasandole como parametro vuelta para ver en consola el numero de vuelta en el que está el slot
        // y la variable numVueltas,donde se aloja el numero de vueltas resultante para tener acceso a dicho valor.
        setTimeout(function (vuelta, numVueltas) {
            //pasado el tiempo alojado en la propiedad tiempo llamo a la función move().
            self.move();

            // Si ya ha terminado de dar las vueltas,es lo que dice esta condición,apunto a cada uno de los slots y saco el atributo que es la fas
            //y su id.
            if (vuelta == numVueltas - 1 && self.id == 3) {
                var slot1 = $("#" + self.fase + " #" + self.fase + "1 div:first").attr("id"); //#Two #Two1 div:first
                var slot2 = $("#" + self.fase + " #" + self.fase + "2 div:first").attr("id");
                var slot3 = $("#" + self.fase + " #" + self.fase + "3 div:first").attr("id");

                //Con esto llamamos a nuestro propio evento que es cambio fase
                if (slot1 == slot2 && slot2 == slot3) {

                    $(document).trigger("cambioFase");

                }

            };

        }, self.tiempo, self.contador, numVueltas);

    }
}