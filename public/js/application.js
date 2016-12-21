$(document).ready(function() {
  value1 = false;
  value2 = false;
  diference1 = 200;
  diference2 = 200;
  
  $("button").click(function() {

    var ourCountdown = setInterval(function(){
      var counter = parseInt($('.countdown').html());
      if (counter !== 0) {
        $('.countdown').html(counter - 1);
      }else{
        clearInterval(ourCountdown)
        $('.countdown').text("¡Empieza!")
       var player1 = moveCoin("Player1");
       $(document).on('keydown', stop);
       // console.log(player1);
       var player2 = moveCoin("Player2");
       // console.log(player2);
       $(document).on('keydown', stop); 
      }
    }, 500);
    
  });
});


var stop = function(event){
  var value = event.keyCode;
  if(value == 37) {
    value1 = true;
  }
  if(value == 39) {
    value2 = true;
  }
}


var moveCoin = function(player){
  counter = 0
  var currentPlayer = $("#" + player + "> .active")
  var nextPlayer = currentPlayer.next();
  
  index = currentPlayer.attr("id");
  currentPlayer.removeClass("active");
  nextPlayer.addClass("active");   

  if (value1 == true && player == "Player1"){
    winner(index, "player1");
  } else if (value2 == true && player == "Player2") {
    winner(index, "player2");
  } else {
    myTime = setTimeout(function() { 
      moveCoin(player);
    }, 7);

  }

  if (index == 95) {
  clearTimeout(myTime);
  winner(index, player);
  }
}


var winner = function(index, player=""){
  console.log(player);
  counter += 1;
  if (player == "player1" && index < 90 ) {
    diference1 = 90 - index;   
    var message = "Gana jugador 1!";
  }else if (player == "player2" && index < 90 ) {
    diference2 = 90 - index; 
    var message_2 = "Gana jugador 2!";
  }
  
  // console.log(diference1);
  // console.log(diference2);

  if (diference1 < diference2){
    $("h2").text(message);
  }else if(diference1 > diference2){
    $("h2").text(message_2);
  }else if(diference1 == diference2 && diference2 != 200 && diference1 != 200){
    $("h2").text("Esto fue un empate!");
  }else if(diference2 == 200 && diference1 == 200){
    $("h2").text("No hay ganador");
  }
}




