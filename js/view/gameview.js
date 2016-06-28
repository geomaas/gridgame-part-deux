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
