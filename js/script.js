
// Funzione associata ad buttone
var priceBtn = document.getElementById('calculate');
priceBtn.addEventListener('click', function() {

  function numberRandom(min, max){

    var rndArray = [];

    // Randomizare 16 numeri
    for(var i = 0; i < 16; i++){
      var rndMin = min;
      var rndMax = max - min + 1;
      var rnd = Math.floor(Math.random() * rndMax) + rndMin;
      var nuovo = true;

      // Ciclo per distinguere numeri presenti dentro arrei
      for(var x = 0; x < i; x++){

        if(rndArray[x] == rnd) nuovo = false;

      }
      // Se un numero non presente gia dentro arrei lo aggiunge
      if(nuovo){

        rndArray[i] = rnd;

      }
      // Se un numero presente gia dentro arrei lo toglie
      else{

        i--;

      }

    }

    console.log(rndArray);
    // Arrei dei numeri scelti dall'utente
    var numbersUserArr = [];

    // Diverse Difficoltà del gioco
    var round = max - 16;

    for (var i = 0; i < round; i++) {

      var numberUser = parseInt(prompt('Inserisci un numero tra 1 e ' + max));

      // Se numero uguale agli primi mi compare errore alert
      if (numbersUserArr.includes(numberUser)) {
        alert('Avete inserito un numero identico a uno dei precedenti')
      }
      // Se numero diverso dagli primi mi aggiunge in arrei
      else {
        numbersUserArr.push(numberUser);
        console.log(numbersUserArr);
      }

      // Quando utente sbaglia finisce il ciclo
      if (rndArray.includes(numberUser)) {
        var numberLost = numbersUserArr[numbersUserArr.length - 1];
        numbersUserArr.pop();
        console.log( 'Numero sbagliato: ' + numberLost);
        console.log('Hai Perso, ma avete inserito numeri giusti per: ' + numbersUserArr.length + ' volte.');
        var gameLose = document.getElementById('gameLose').innerHTML = 'Hai Perso, ma avete inserito numeri giusti per: ' + numbersUserArr.length + ' volte.';
        break;
      }
      // Se per caso riesce ad indovinare tutti numeri Vince
      else if(numbersUserArr.length == round){
        var gameWin = document.getElementById('gameWin').innerHTML = 'Hai Vinto';
        console.log('Hai Vinto');
      }

    }

    var numbersPc = document.getElementById('numbersPc').innerHTML = 'Il computer ha generato 16 numeri : ' + rndArray;
    var numbersUser = document.getElementById('numbersUser').innerHTML = 'I tuoi numeri giusti sono: ' + numbersUserArr;
    var numberLost = document.getElementById('numberLost').innerHTML = 'Numero perso: ' + numberLost;
  }

  var difficulty = prompt(' Scegli la difficolta \n 1 = (facile da 1-50) \n 2 = (medio da 1-80) \n 3 = (difficile da 1-100)')

  // Diverse Difficolta del gioco che partono se utente inserisce da 1-3
  if (difficulty == 1) {
    numberRandom(1, 50);
    var lvl = document.getElementById('lvl').innerHTML = 'Hai scelto dificolta: 1 (1-50)';
  }
  else if (difficulty == 2) {
    numberRandom(1, 80);
    var lvl = document.getElementById('lvl').innerHTML = 'Hai scelto dificolta: 2 (1-80)';
  }
  else if(difficulty == 3) {
    numberRandom(1, 100);
    var lvl = document.getElementById('lvl').innerHTML = 'Hai scelto dificolta: 3 (1-100)';
  }
  else {
    alert('Avete inserito difficoltà sbagliata del gioco.')
  }

});
