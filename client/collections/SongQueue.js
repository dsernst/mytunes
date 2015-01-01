// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  playFirst: function () {
    this.at(0).play();
  },

  dequeue: function(){
    this.shift();
    if (this.length > 0) {
      this.playFirst();
    }
  },

  initialize: function(){
    this.on('add',function(){
      if (this.length===1){
        this.playFirst();
      }
    },this);

    this.on('dequeue',function() {
      this.dequeue();
    }, this);

    this.on('ended',function(){
      this.dequeue();
    },this);

  }

});
