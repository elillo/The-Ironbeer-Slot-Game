$(document).ready(function () {
  //Creo las instancias de cada slot con los argumento que se alojarán en el constructor,en this.id y this.fase
  var slot1 = new Slot(1, "One")
  var slot2 = new Slot(2, "One")
  var slot3 = new Slot(3, "One")
  var slot4 = new Slot(1, "Two")
  var slot5 = new Slot(2, "Two")
  var slot6 = new Slot(3, "Two")
  //Con esta varible indico la fase por defecto(slots);
  var fase = "Two"

  //oculto los elementos de pantalla de bonus.
  $(".timeBeer").hide();


  //Al pulsar el botón llamamos a la función start e iniciamos el flujo.
  $("#play").click(function () {
    //si estamos en la fase One se ejecutan los slots del 1 al 3
    if (fase == "One") {

      slot1.start();
      //Las llamo con diferentes intervalos de tiempo para que no rueden a la vez.
      setTimeout(function () {
        slot2.start()
      }, 400);

      setTimeout(function () {
        slot3.start()
      }, 800);
      ////si estamos en la fase Two se ejecutan los slots del 4 al 6

    } else {

      slot4.start();
      //Las llamo con diferentes intervalos de tiempo para que no rueden a la vez.
      setTimeout(function () {
        slot5.start()
      }, 500);

      setTimeout(function () {
        slot6.start()
      }, 1000);
    }

  });
  //Aqui organizo todos los eventos que se tienen q dar cuando cambia la fase,para eso creo este evento personalizado.  
  $(document).on("cambioFase", function () {
    //  console.log("cambioFase",fase);
    fase = (fase == "One") ? "Two" : "One";

    if (fase == "One") {

      $("#CubrirSlotArriba").slideUp(2000);
      $(".timeBeer").fadeIn(2500);

    }

  });
  // if(".Two1" == ".Two3"){ 

  //   $(".twoBeerUp").css("height","300px");

  // }

});