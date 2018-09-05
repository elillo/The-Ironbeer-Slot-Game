var Slot = function (id) {
    this.contador = 0;
    this.tiempo;
    this.images = [];
    this.id=id;
    for (var i = 0; i < 9; i++) {
        this.images.push("images/imagenesSlotPrincipal/cerveza(" + i + ").jpeg")
    }
   
    $("#contenido").append("<div class='slot' id='slot_" + id + "'></div>");
    this.create();   
}

//SEGUNDA llamada del flujo. Creamos el prototype move y le damos como valor una función.
Slot.prototype.move = function () {
//en esta funcion movemos la ultima imagen del slot y la la colocamos al comienzo de las imágenes. 

//evitamos problemas con el scope del constructor alojando this en la variable self.       
    var self = this;
//apuntamos al  ultimo div de un slot + su Id y la alojamos en la variable ultimaImg.
    var ultimaImg = $("#slot_" + self.id + " div:last")
     var slot= $("#slot_" + self.id)                                                 //DUDA

//aplicamos el metodo detach a  ultimaImg,que elimina el elemento,conservando sus datos y eventos asociados y guarda una copia para reutilizarlos.
//en este caso insertarlo en la posición anterior al primero del slot.
    ultimaImg.detach().prependTo(slot);
 }

 
 // TERCERA llamada del flujo.Función create,encargada de introducir en el dom los divs de las imagenes.
Slot.prototype.create = function (cb) {
    var self = this
    for (var i = 0; i < 9; i++) {
        $("#slot_" + self.id).append(
            "<div id='image_" + i + "'><img src='" + self.images[i] + "'</div>"
        );
    }
    if (cb)                                                                                 //DUDA
        cb();
    }


//PRIMERA llamada del flujo. Creamos el prototype start y le damos como valor una función.
Slot.prototype.start = function () {
    var self = this
    self.tiempo = 0;
//guardo en numVueltas el random de entre 9 posiciones,estas se refiren al numero de imagenes de cada slot. 
    var numVueltas = Math.floor(Math.random() * (34 - 25)) + 25;
    
    console.log('numVueltas', numVueltas)
//incio un bucle for partiendo desde contador que vale 0, y que itere mientras numVueltas sea mayor que contador,
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
            console.log(vuelta)
//porque le pasamos aqui tres argumentos?
        }, self.tiempo, self.contador, numVueltas);

    }
}
