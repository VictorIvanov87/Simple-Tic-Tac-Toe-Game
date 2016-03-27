function startGame() {
	'use strict';
	var board = document.getElementById('board'),
		message = document.getElementById('message'),
		p1wins = document.getElementById('p1wins'),
		p2wins = document.getElementById('p2wins'),
		e,
		turn = 'PlayerX',
		finish = false,
		xCount = 0,
		oCount = 0,
		cell1 = document.getElementById('1'),
		cell2 = document.getElementById('2'),
		cell3 = document.getElementById('3'),
		cell4 = document.getElementById('4'),
		cell5 = document.getElementById('5'),
		cell6 = document.getElementById('6'),
		cell7 = document.getElementById('7'),
		cell8 = document.getElementById('8'),
		cell9 = document.getElementById('9');

	board.addEventListener('click', function(e) {

		function checkBusy() {
			if (e.target.innerHTML === 'X' || e.target.innerHTML === 'O') {
				message.innerHTML = 'This cell is busy!';
			} else {
				nextTurn();
			}
		}
		checkBusy();

		function nextTurn() {
			if(turn == 'PlayerX') {
				e.target.innerHTML = 'X';
				turn = "PlayerO";
				message.innerHTML = 'It\`s player O turn!';
				e.target.setAttribute('data', "busy");
			} else {
				e.target.innerHTML = 'O';
				turn = 'PlayerX';
				message.innerHTML = 'It\`s player X turn!';
				e.target.setAttribute('data', "busy");
			}
		}	

		function checkWinner() {
			if( ((cell1.innerHTML === 'X') && (cell2.innerHTML === 'X') && (cell3.innerHTML === 'X')) ||
				((cell4.innerHTML === 'X') && (cell5.innerHTML === 'X') && (cell6.innerHTML === 'X')) ||
				((cell7.innerHTML === 'X') && (cell8.innerHTML === 'X') && (cell9.innerHTML === 'X')) ||
				((cell1.innerHTML === 'X') && (cell4.innerHTML === 'X') && (cell7.innerHTML === 'X')) ||
				((cell2.innerHTML === 'X') && (cell5.innerHTML === 'X') && (cell8.innerHTML === 'X')) ||
				((cell3.innerHTML === 'X') && (cell6.innerHTML === 'X') && (cell9.innerHTML === 'X')) ||
				((cell1.innerHTML === 'X') && (cell5.innerHTML === 'X') && (cell9.innerHTML === 'X')) ||
				((cell3.innerHTML === 'X') && (cell5.innerHTML === 'X') && (cell7.innerHTML === 'X')) ) {
					message.innerHTML = 'Player X wins! <br> Start new game, Player O turn...';
					xCount += 1;
					p1wins.innerHTML = 'Player X wins: ' + xCount;
					finish = true;
			} else if (
				((cell1.innerHTML === 'O') && (cell2.innerHTML === 'O') && (cell3.innerHTML === 'O')) ||
				((cell4.innerHTML === 'O') && (cell5.innerHTML === 'O') && (cell6.innerHTML === 'O')) ||
				((cell7.innerHTML === 'O') && (cell8.innerHTML === 'O') && (cell9.innerHTML === 'O')) ||
				((cell1.innerHTML === 'O') && (cell4.innerHTML === 'O') && (cell7.innerHTML === 'O')) ||
				((cell2.innerHTML === 'O') && (cell5.innerHTML === 'O') && (cell8.innerHTML === 'O')) ||
				((cell3.innerHTML === 'O') && (cell6.innerHTML === 'O') && (cell9.innerHTML === 'O')) ||
				((cell1.innerHTML === 'O') && (cell5.innerHTML === 'O') && (cell9.innerHTML === 'O')) ||
				((cell3.innerHTML === 'O') && (cell5.innerHTML === 'O') && (cell7.innerHTML === 'O')) ) {
					message.innerHTML = 'Player O wins! Start new game, Player X turn...';
					oCount += 1;
					p2wins.innerHTML = 'Player O wins: ' + oCount;
					finish = true;
			}
		}
		checkWinner();

		if(finish) {
			cell1.innerHTML = '';
			cell2.innerHTML = '';
			cell3.innerHTML = '';
			cell4.innerHTML = '';
			cell5.innerHTML = '';
			cell6.innerHTML = '';
			cell7.innerHTML = '';
			cell8.innerHTML = '';
			cell9.innerHTML = '';
			finish = false;
		}
	});
}
