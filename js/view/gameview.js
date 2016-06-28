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
        console.log(document.getElementById('playerName').value);
    },

    // How to update the DOM when things change
    render: function () {


      let name = this.el.querySelector('#name')
      name.textContent = this.model.get()


        // let song = this.el.querySelector('#current-song');
        // // song.textContent = this.model.currentSong();
        // song.innerHTML = `The song is ${this.model.currentSong()}`;
    },
});
