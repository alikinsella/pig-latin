// back end logic
var vowels = ["a", "e", "i", "o", "u", "y"]
var pigLatin = function(word) {
    if (vowels.includes(word.slice(0)) && word.length === 1) {
      return word.concat("way");
    } else if (vowels.includes(word.slice(0,1)) && word.length >= 2) {
      return word.concat("ay");
    } else if (!(vowels.includes(word.slice(0,1))) && vowels.includes(word.slice(1,2))) {
      return word.slice(1).concat(word.slice(0,1) + "ay");
    } else if (!(vowels.includes(word.slice(0,2))) && vowels.includes(word.slice(2,3))) {
        return word.slice(2).concat(word.slice(0,2) + "ay");
    } else if (!(vowels.includes(word.slice(0,3))) && vowels.includes(word.slice(3,4))) {
      return word.slice(3).concat(word.slice(0,3) + "ay");
    } else {
      return word
    }
  };




// front end logic

$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    var word = $("input#input").val();
    var result = pigLatin(word);
    $("#results").text(result);
  });
});
