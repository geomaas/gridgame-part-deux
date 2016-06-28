(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let GridModel = require('./model/gridmodel');
let GridView = require('./view/gridview');

///// login page
let GameModel = require('./model/gamemodel');
let GameView = require('./view/gameview');

window.addEventListener('load', function() {
    // Models roll on their own.
    let grmodel = new GridModel();

    // Views like company. They need to know two things:
    //    1. What data do I care about?
    //    2. What DOM elements should I be updating when things change?
    let grid = new GridView({
        model: grmodel,
        el: document.getElementById('position'),
    });
    // let login = new GameModel();

    let player = new GameView({
            model: grmodel,
            el: document.getElementById('player-login'),
        });
        console.log();
});

},{"./model/gamemodel":2,"./model/gridmodel":3,"./view/gameview":4,"./view/gridview":5}],2:[function(require,module,exports){


module.exports = Backbone.Model.extend({
    // Initial value for data that the model is responsible for.
    defaults: {
        player: "default",

    },

    currentPlayer: function () {
       this.set('player', this.get('#playerName.value'));
   },

});

},{}],3:[function(require,module,exports){


module.exports = Backbone.Model.extend({
    // Initial value for data that the model is responsible for.
    defaults: {
        xStart: 0, //horizontal

        yStart: 0, //vertical

        player: "default",

    },

    up: function() {
        if (this.get('yStart') < 10) {
            this.set('yStart', this.get('yStart') + 1);
        }
    },

    // keyUp: function (){
    //   if(e.keyCode == 38){
    //     this.set('yStart', this.get('yStart') + 1);
    //   }
    // },

    down: function() {
        if (this.get('yStart') > 0) {
            this.set('yStart', this.get('yStart') - 1);
        }
    },

    left: function() {
      if (this.get('xStart') > 0) {
          this.set('xStart', this.get('xStart') - 1);
      }
    },

    right: function() {
      if (this.get('xStart') < 10) {
          this.set('xStart', this.get('xStart') + 1);
      }
    },

    currentPlayer: function () {
       this.get('player');
   }

});

},{}],4:[function(require,module,exports){
module.exports = Backbone.View.extend({
    // 'Constructor' function - what to do at the beginning
    initialize: function () {
        this.model.on('change', this.render, this); // this as third arg
    },

    // Event listeners to set up
    events: {
        // 'event-name selector': 'function-to-call'

        'click #playerInput': 'enterPlayer'
    },

    enterPlayer: function () {
        this.model.currentPlayer();
        console.log(currentPlayer);
    },

    // How to update the DOM when things change
    render: function () {


        let playerName = this.el.querySelector('#playerName');
        playerName.html = this.model.get('player');


        // let song = this.el.querySelector('#current-song');
        // // song.textContent = this.model.currentSong();
        // song.innerHTML = `The song is ${this.model.currentSong()}`;
    },
});

},{}],5:[function(require,module,exports){
module.exports = Backbone.View.extend({
    // 'Constructor' function - what to do at the beginning
    initialize: function () {
        this.model.on('change', this.render, this); // this as third arg
    },

    // Event listeners to set up
    events: {
        // 'event-name selector': 'function-to-call'
        'click #up': 'clickUp',
        // 'keypress #up': 'keyUp',
        'click #down': 'clickDown',
        'click #left': 'clickLeft',
        'click #right': 'clickRight',
        // 'click #playerInput': 'enterPlayer'
    },

    clickUp: function () {
        this.model.up();
    },
    // keyUp: function () {
    //   this.model.keyUp();
    // },

    clickDown: function () {
        this.model.down();
    },

    clickLeft: function () {
        this.model.left();
    },

    clickRight: function () {
        this.model.right();
    },

    // enterPlayer: function () {
    //     this.model.currentPlayer();
    // },

    // How to update the DOM when things change
    render: function () {
        let xMove = this.el.querySelector('#horizontal');
        xMove.textContent = this.model.get('xStart');

        let yMove = this.el.querySelector('#vertical');
        yMove.textContent = this.model.get('yStart');

        // let playerName = this.el.querySelector('#playerName');
        // playerName.value = this.model.get('player');
        // console.log(player);

        // let song = this.el.querySelector('#current-song');
        // // song.textContent = this.model.currentSong();
        // song.innerHTML = `The song is ${this.model.currentSong()}`;
    },
});

},{}]},{},[1])