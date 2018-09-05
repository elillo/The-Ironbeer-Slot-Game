$(document).ready(function(){
  var slot1=new Slot(1)
  var slot2=new Slot(2)
  var slot3=new Slot(3)
  // var slot4=new Slot(4)
  // var slot5=new Slot(5)
  // var slot6=new Slot(6)
  $("#sectOneId").removeClass("sectOne").addClass("sectOneDefault");
  $(".timeBeer").hide();
//Al pulsar el boton llamamos a la función start e iniciamos el flujo.
  $("#play").click(function(){
    slot1.start();
  
   setTimeout (function(){
    
    slot2.start()
    
    }, 500);
    
   setTimeout (function(){
  
    slot3.start()
        
    }, 1000);
        
  });

  // $("#play").click(function(){
  //   slot4.start();
    
  //    setTimeout (function(){
      
  //   slot5.start()
      
  //     }, 500);
      
  //   setTimeout (function(){
    
  //   slot6.start()
          
  //     }, 1000);
          
          
    // });
  
});