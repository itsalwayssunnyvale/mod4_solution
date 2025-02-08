(function (window) {
  var goodbyeSpeaker = {};  
  var speakWord = "Good bye";
    
  
  goodbyeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

window.goodbyeSpeaker = goodbyeSpeaker;
  
})(window);
