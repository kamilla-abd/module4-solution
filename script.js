(function (window) {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    // Function to handle name-based greeting
    function processNames(names) {
      names.forEach(function(name) {
        var firstLetter = name.charAt(0).toLowerCase();
        if (firstLetter === 'j') {
          window.byeSpeaker.speak(name);
        } else {
          window.helloSpeaker.speak(name);
        }
      });
    }
  
    // Process the names array
    processNames(names);
  })(window);
  
