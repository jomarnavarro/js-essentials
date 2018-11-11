function pigLatin(phrase) {
  var words, pigged;
  words = phrase.split(" ");
  pigged = words.map(function(word) {
    var first_letter, rest;

    first = word.substring(0, 1);
    rest = word.substring(1);

    return rest + first + "ay";
  });

  return pigged.join(" ");
}

var p1 = "Happy birthday to you";
console.log(pigLatin(p1));

