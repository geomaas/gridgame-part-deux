

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
