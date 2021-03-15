// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :wink:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve…

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
    var numberUserArr = [];

    // Diverse Difficolta del gioco
    if (difficulty == 1) {
      var ret = 34;
    }
    else if (difficulty == 2) {
       var ret = 64;
    }
    else{
      var ret = 84
    }

    for (var i = 0; i < ret; i++) {

      var numberUser = parseInt(prompt('Inserisci un numero:'));

      // Se numero uguale agli primi mi compare errore alert
      if (numberUserArr.includes(numberUser)) {
        alert('Avete inserito un numero identico a uno dei precedenti')
      }
      // Se numero diverso dagli primi mi aggiunge in arrei
      else {
        numberUserArr.push(numberUser);
        console.log(numberUserArr);
      }

      // Guando utente sbaglia finisce il ciclo
      if (rndArray.includes(numberUser)) {
        var numberLost = numberUserArr[numberUserArr.length - 1];
        numberUserArr.pop();
        console.log( 'Numero sbagliato: ' + numberLost);
        console.log('Hai Perso, ma avete inserito numeri giusti per: ' + numberUserArr.length + ' volte.');
        var gameLose = document.getElementById('gameLose').innerHTML = 'Hai Perso, ma avete inserito numeri giusti per: ' + numberUserArr.length + ' volte.';
        break;
      }
      // Se per caso riesce ad indovinare tutti numeri Vince
      else if(numberUserArr.length == ret){
        var gameWin = document.getElementById('gameWin').innerHTML = 'Hai Vinto';
        console.log('Hai Vinto');
      }

    }

    var numbersPc = document.getElementById('numbersPc').innerHTML = 'Il computer ha generato 16 numeri : ' + rndArray;
    var numbersUser = document.getElementById('numbersUser').innerHTML = 'I tuoi numeri giusti sono: ' + numberUserArr;
    var numberLost = document.getElementById('numberLost').innerHTML = 'Numero perso: ' + numberLost;
  }

  var difficulty = prompt('Scegli la difficolta tra 1 = (facile da 1-50), 2 = (medio da 1-80), 3 = (difficile da 1-100)')

  // Diverse Difficolta del gioco che partano se utente inserisce da 1-3
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
