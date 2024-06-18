(function (window) {
  var speakWord1 = "Good Bye";
  var byeSpeaker = {
    speak: function (name) {
      console.log(speakWord1 + " " + name);
    }
  };
  window.byeSpeaker = byeSpeaker;
})(window);
