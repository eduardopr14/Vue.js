// Random Value Function -> For attack and defense values

function getRandomValue(min, max) {
    value = Math.floor(Math.random() * (max - min)) + min;
    if(value < 0) {
        value = 0;
    }
    return value;
}

const app = Vue.createApp({
    
    // Data -> Receive the basic values of the players
    
    data() {
        return {
            player1overall: 0,
            player2overall: 0,
            player1random: 0,
            player2random: 0,
            currentRound: 0,
            player1wins: 0,
            player2wins: 0,
            draws: 0,
            logMessages: [],
            overallWinner: null,
            game: 0,
        };
    },
    
    computed: {
        player1BarStyles() {
            if(this.player1random < 0) {
                return { width: '0%' };
            } else {
                return { width: this.player1random + '%' };
            }
        },
        player2BarStyles() {
            if(this.player2random < 0) {
                return { width: '0%' };
            } else {
                return { width: this.player2random + '%' };
            }
        },
    },
    
    watch: {
        currentRound() {
            if(this.currentRound >= 10) {
                if(this.draws >= this.player1wins && this.draws >= this.player2wins || this.player1wins === this.player2wins) {
                    this.overallWinner = 'Draw!';
                } else if (this.player1wins > this.player2wins) {
                    this.overallWinner = 'Player 1 won!';
                } else if (this.player2wins > this.player1wins) {
                    this.overallWinner = 'Player 2 won!';
                }
            }
        },
    },
    
    methods: {
        addPlayer1Overall() {
            if(event.target.value >= 0 && event.target.value <= 100) {
                this.player1overall = event.target.value;
            }
            if(event.target.value.length > 3) {
                event.target.value = '';
                this.player1overall = '';
            }
        },
        addPlayer2Overall() {
            if(event.target.value >= 0 && event.target.value <= 100) {
                this.player2overall = event.target.value;
            }
            if(event.target.value.length > 3) {
                event.target.value = '';
                this.player2overall = '';
            }
        },
        startGame() {
            this.currentRound = 0;
            this.player1random = 0;
            this.player2random = 0;
            this.player1wins = 0;
            this.player2wins = 0;
            this.draws = 0;
            this.logMessages = [],
            this.overallWinner = null;
            this.game = 1;
        },
        restartGame() {
            this.currentRound = 0;
            this.player1random = 0;
            this.player2random = 0;
            this.player1wins = 0;
            this.player2wins = 0;
            this.draws = 0;
            this.logMessages = [],
            this.overallWinner = null;
            this.game = 0;
        },
        playGame() {
            this.currentRound++;
            const player1random = getRandomValue(this.player1overall - 25, this.player1overall);
            const player2random = getRandomValue(this.player2overall - 25, this.player2overall);
            
            this.player1random = player1random;
            this.player2random = player2random;
            
            this.addLogMessage('Player 2', player2random);
            this.addLogMessage('Player 1', player1random);
            
            this.setRoundWinner(player1random, player2random);
        },
        setRoundWinner(player1random, player2random) {
            if(player1random > player2random){
                this.player1wins++;
            } else if (player2random > player1random) {
                this.player2wins++;
            } else {
                this.draws++;
            }
        },
        addLogMessage(who, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionValue: value
            });
        },
    },
    
});

app.mount('#game');