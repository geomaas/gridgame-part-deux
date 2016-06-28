module.exports = Backbone.Model.extend({
    // Initial value for data that the model is responsible for.
    defaults: {
        xStart: 0, //horizontal

        yStart: 0, //vertical

        player: "default",

        moves: 0,

        largeEnergy: 150,

        smallEngergy: 100,

    },

    up: function() {
        if (this.get('yStart') < 10) {
            this.set('yStart', this.get('yStart') + 1);
            this.set('moves', this.get('moves') + 1);
        }

        // if (this.get('moves') > 0) {
        //     this.set('largeEnergy', this.get('largeEnergy') - 20);
        //
        // }
    },

    down: function() {
        if (this.get('yStart') > 0) {
            this.set('yStart', this.get('yStart') - 1);
            this.set('moves', this.get('moves') + 1);
        }

    },

    left: function() {
        if (this.get('xStart') > 0) {
            this.set('xStart', this.get('xStart') - 1);
        }
        if (this.get('xStart') > 0) {
            this.set('moves', this.get('moves') + 1);
        }

    },

    right: function() {
        if (this.get('xStart') < 10) {
            this.set('xStart', this.get('xStart') + 1);
        }
        if (this.get('xStart') < 10) {
            this.set('moves', this.get('moves') + 1);
        }
    },

    currentPlayer: function() {
        this.set('player');
    }

});
