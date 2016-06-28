

module.exports = Backbone.Model.extend({
    // Initial value for data that the model is responsible for.
    defaults: {
        player: "default",

    },

    currentPlayer: function () {
       this.set('player', this.get('#playerName.value'));
   },

});
