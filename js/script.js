let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
    computerMove = 'kamień';
}

printMessage('Mój ruch to: ' + computerMove);

if (randomNumber == 2) {
    computerMove = 'papier';
}

printMessage('Mój ruch to: ' + computerMove);
if (randomNumber == 3) {
    computerMove = 'nożyce ';
}
printMessage('Mój ruch to: ' + computerMove);




if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
}

else if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
}

else if (computerMove == 'kamień' && playerMove == 'kamień') {
    printMessage('Mamy remis!');
}

else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
}

else {
    printMessage("Ty przegrywasz")
}

}

if (computerMove == 'nieznany ruch') {
    printMessage("błąd")
}