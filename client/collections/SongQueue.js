// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  playFirst: function () {
    this.at(0).play();
  },

  initialize: function(){
    this.on('add',function(){
      if (this.length===1){
        this.playFirst();
      }
    },this);

    this.on('dequeue',function(){
      this.shift();
    },this);

    this.on('ended',function() {
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

  }

});
