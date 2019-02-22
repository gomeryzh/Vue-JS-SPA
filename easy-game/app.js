const INITIAL_DATA = {
  playerHealth: 100,
  monsterHealth: 100,
  isGameRunning: false,
  turns: []
};

new Vue({
  el: "#app",
  data: { ...INITIAL_DATA },
  methods: {
    startGame: function() {
      this.isGameRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function() {
      let damage = this.calculateDmg(3, 10);
      this.monsterHealth -= damage;
      this.monsterAttack();
      this.turns.unshift({
        isPlayer: true,
        text: "Player hits Monster for " + damage + " damage"
      });
      if (this.checkwin()) {
        return;
      }
    },
    specialAttack: function() {
      let damage = this.calculateDmg(10, 20);
      this.monsterHealth -= damage;
      this.monsterAttack();
      this.turns.unshift({
        isPlayer: true,
        text: "Player hits Monster for " + damage + " damage"
      });
      if (this.checkwin()) {
        return;
      }
    },
    calculateDmg: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    monsterAttack: function() {
      let damage = this.calculateDmg(4, 11);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: "Monster hits Player for " + damage + " damage"
      });
      this.checkwin();
    },
    playerHeal: function() {
      if (this.playerHealth <= 90) {
        let damage = this.calculateDmg(6, 10);
        this.playerHealth += damage;
        this.monsterAttack();
        this.turns.unshift({
          isPlayer: true,
          text: "Player heals for " + damage + " hp"
        });
      } else {
        this.playerHealth = 100;
      }
    },
    giveUp: function() {
      this.isGameRunning = false;
    },
    checkwin: function() {
      if (this.playerHealth <= 0) {
        if (confirm("You lose, start new Game?")) {
          this.startGame();
        } else {
          this.isGameRunning = false;
        }
        return true;
      } else if (this.monsterHealth <= 0) {
        if (confirm("You win, start new Game?")) {
          this.startGame();
        } else {
          this.isGameRunning = false;
        }
        return true;
      }
      return false;
    }
  }
});
