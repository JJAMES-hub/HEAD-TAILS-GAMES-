const score = JSON.parse(localStorage.getItem('score')) || {
            win: 0,
            lose: 0
        };


        function gamePlay(playerChoice) {
            document.getElementById('choiceText').innerHTML='Game started'

            let computerChoice = '';
            let randomNumber = Math.random();

            if (randomNumber < 1 / 2) {
                computerChoice = 'heads';
            } else {
                computerChoice = 'tails';
            }

            let results = '';

            if (playerChoice === computerChoice) {
                results = 'you win';
            } else {
                results = 'you lose';
            }
            if (results === 'you win') {
                score.win += 1
            } else {
                score.lose += 1
            }
            localStorage.setItem('score', JSON.stringify(score))
            updateScoreElement();
            document.querySelector('.js-result').innerHTML = 'Make a move';
            document.querySelector('.js-result').innerHTML = ` ${results}`
            document.querySelector('.js-challenge').innerHTML = `computer:${computerChoice}`
            document.querySelector('.js-choice').innerHTML = `You:${playerChoice}`

        }
        function updateScoreElement() {
            document.querySelector('.js-score')
                .innerHTML = ` wins=${score.win} lose=${score.lose}`;
        }
