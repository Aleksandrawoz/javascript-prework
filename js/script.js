{
    const playGame = function(playerInput) {
        clearMessages()
        const getMoveName = function (argMoveId) {
            if (argMoveId == 1) {
                return 'kamień';
            } else if (argMoveId == 2) {
                return "papier";
            } else if (argMoveId == 3) {
                return "nożyce";
            }

            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
        const displayResult = function (argComputerMove, argPlayerMove) {
            console.log('moves:', argComputerMove, argPlayerMove);
            if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
                printMessage('Ty wygrywasz!');
            } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
                printMessage('Ty wygrywasz!');
            } else if (argComputerMove == argPlayerMove) {
                printMessage('Mamy remis!');
            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
                printMessage('Ty wygrywasz!');
            } else if (argComputerMove == 'nieznany ruch') {

            } else {
                printMessage("Ty przegrywasz")
            }
        }

        /*const playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

        console.log('Gracz wpisał: ' + playerInput);

        let randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);
        
        let playerMove = getMoveName(playerInput); 
        
        let computerMove = getMoveName(randomNumber); displayResult(computerMove, playerMove); { 
            console.log(computerMove);
        }
        /*
        if (randomNumber == 1) {
            computerMove = 'kamień';
        } else if (randomNumber == 2) {
            computerMove = 'papier';
        } else if (randomNumber == 3) {
            computerMove = 'nożyce ';
        }
        printMessage('Mój ruch to: ' + computerMove);
        */

        /*
        if (computerMove == 'kamień' && playerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        } else if (computerMove == 'papier' && playerMove == 'nożyce') {
            printMessage('Ty wygrywasz!');
        } else if (computerMove == playerMove) {
            printMessage('Mamy remis!');
        } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
        } else if (computerMove == 'nieznany ruch') {
        
        } else {
            printMessage("Ty przegrywasz")
        }
        */
    }
    document.getElementById('play-rock').addEventListener('click', function () {
        playGame('1');
    });
    document.getElementById('play-paper').addEventListener('click', function () {
        playGame('2');
    });
    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame('3');
    });
}