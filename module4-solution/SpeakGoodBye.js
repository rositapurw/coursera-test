(function (window) {
  var speakWord2 = "Good Bye";
  var byeSpeaker = {
    speak: function (name) {
      console.log(speakWord2 + " " + name);
    }
  };
  window.byeSpeaker = byeSpeaker;
})(window);
