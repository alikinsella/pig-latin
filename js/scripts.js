// back end logic
var vowels = ["a", "e", "i", "o", "u", "y"]
var pigLatin = function(word) {
    if (word.length === 1 && vowels.includes(word.slice(0))) {
       return word.concat("way");
    } else {
      return word
    }
  };



  // for (let vowels = 0; vowels <= 2; vowels += 1) {

//   if (word.slice(0) === )
  
//   var wordSplit = input.split("");
//   if ("a", || "e", || "i", || "o", || "u")
// }; 

// front end logic

$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    var word = $("input#input").val();
    var result = pigLatin(word);
    $("#results").text(result);
  });
});
