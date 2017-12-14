module.exports = function() {
  /**
   * available streams 
   * the id value is considered unique (provided by socket.io)
   */
  var streamList = [];

  /**
   * Stream object
   */
  var Stream = function(id, name, lat, lng) {
    this.name = name;
    this.id = id;
    this.lat = lat;
    this.lng = lng;
  }

  return {
    addStream : function(id, name, lat, lng) {
      var stream = new Stream(id, name, lat, lng);
      streamList.push(stream);
    },

    removeStream : function(id) {
      var index = 0;
      while(index < streamList.length && streamList[index].id != id){
        index++;
      }
      streamList.splice(index, 1);
    },

    // update function
    update : function(id, name, lat, lng) {
      var stream = streamList.find(function(element, i, array) {
        return element.id == id;
      });
      stream.name = name;
      stream.lat = lat;
      stream.lng = lng;
    },

    getStreams : function() {
      return streamList;
    }
  }
};
