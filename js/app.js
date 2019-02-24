var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
console.log(w, h);
var sd = document.getElementById('pl');
if (w < 660) {
  document.querySelector('.container').textContent = 'BEST VIEW IN LANDSCAPE MODE. PLEASE, TILT THE PHONE OR CHANGE FROM PORTRAIT TO LANDSCAPE AND THEN REFRESH THE PAGE.';
}
else {
  sd.style.display = 'none';
  var scores, roundScore, activePlayer, gamePlaying;
  initialize();
  document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
      var dice = Math.floor(Math.random() * 6) + 1;
      var diceDom = document.querySelector('.dice');
      diceDom.style.display = 'block';
      diceDom.src = 'images/dice-' + dice + '.png';
      if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
      }
      else {
        nextPlayer();
      }
    }
  });
  document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
      scores[activePlayer] += roundScore;
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      var input = document.querySelector('.final-score').value;
      var winningScore;
      if(input) {
        winningScore = input;
      }
      else {
        winningScore = 100;
      }
      if (scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
      }
      else {
        nextPlayer();
      }
    }
  });
  function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
  }
  document.querySelector('.btn-new').addEventListener('click', initialize);
  function initialize() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
  }
}
