let winningCombinations = [ '123', '456', '789', '147', '258', '369', '159', '357' ];

let playedString = '';
let playedString2 = '';

let playerTurn = true;

let btns = document.getElementsByClassName('keypad');

const btnReset = document.getElementById('reset');
btnReset.addEventListener('click', function() {
	reset();
});

const one = document.getElementById('1');
one.addEventListener('click', function() {
	one.disabled = true;
	playedNum('1');
});
const two = document.getElementById('2');
two.addEventListener('click', function() {
	two.disabled = true;
	playedNum('2');
});
const three = document.getElementById('3');
three.addEventListener('click', function() {
	three.disabled = true;
	playedNum('3');
});
const four = document.getElementById('4');
four.addEventListener('click', function() {
	four.disabled = true;
	playedNum('4');
});
const five = document.getElementById('5');
five.addEventListener('click', function() {
	five.disabled = true;
	playedNum('5');
});
const six = document.getElementById('6');
six.addEventListener('click', function() {
	six.disabled = true;
	playedNum('6');
});
const seven = document.getElementById('7');
seven.addEventListener('click', function() {
	seven.disabled = true;
	playedNum('7');
});
const eight = document.getElementById('8');
eight.addEventListener('click', function() {
	eight.disabled = true;
	playedNum('8');
});
const nine = document.getElementById('9');
nine.addEventListener('click', function() {
	nine.disabled = true;
	playedNum('9');
});

function play() {
	for (let i = 0; i < winningCombinations.length; i++) {
		if (
			playedString.includes(winningCombinations[i].charAt(0)) &&
			playedString.includes(winningCombinations[i].charAt(1)) &&
			playedString.includes(winningCombinations[i].charAt(2))
		) {
			setTimeout(() => {
				reset();
				alert('PLAYER 1 GANHOU!');
			}, 500);

			break;
		}
	}
	console.log('PLAYED1: ' + playedString);
	playerTurn = !playerTurn;
}

function play2() {
	for (let i = 0; i < winningCombinations.length; i++) {
		if (
			playedString2.includes(winningCombinations[i].charAt(0)) &&
			playedString2.includes(winningCombinations[i].charAt(1)) &&
			playedString2.includes(winningCombinations[i].charAt(2))
		) {
			setTimeout(() => {
				reset();
				alert('PLAYER 2 GANHOU!');
			}, 500);

			break;
		}
	}
	console.log('PLAYED2: ' + playedString2);
	playerTurn = !playerTurn;
}

function playedNum(num) {
	if (playerTurn) {
		playedString += num;
		play();

		let butao = document.getElementById(`${num}`);
		for (let i = 0; i < btns.length; i++) {
			if (btns[i] === butao) {
				btns[i].style.background = 'red';
				butao.innerText = 'X';
			}
		}
	} else {
		playedString2 += num;
		play2();

		let butao = document.getElementById(`${num}`);
		for (let i = 0; i < btns.length; i++) {
			if (btns[i] === butao) {
				btns[i].style.background = 'green';
				butao.innerText = 'O';
			}
		}
	}
}

function reset() {
	playerTurn = false;

	let btns = document.getElementsByClassName('keypad');
	for (let i = 0; i < btns.length; i++) {
		btns[i].disabled = false;
		btns[i].style.background = 'white';
	}
	playedString = '';
	playedString2 = '';
	playerTurn = !playerTurn;
}
