(function (window) {
  var speakWord1 = "Hello";
  var helloSpeaker = {
    speak: function (name) {
      console.log(speakWord1 + " " + name);
    }
  };
  window.helloSpeaker = helloSpeaker;
})(window);
