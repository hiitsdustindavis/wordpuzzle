// var vowelDash = function(words) {
//   var words = "cats";
//   var count = 0
//
//   var pos = words.indexOf("a", "e", "i", "o", "u");

//   var vowelDash = function(word) {
//   var word = "smiley";
//   var vowels = ["a","e","i","o","u","y"];
//
//   var letters = word.split("");
//   for (var i = 0; i < letters.length; i++) {
//     var letter = letters[i];
//     for (var j = 0; j < vowels.length; j++) {
//       var vowel = vowels[j];
//
//       if (letter === vowel) {
//        vowel = "-";
//
//
//         console.log(i);
//       }
//     }
//   }
// };
var vowelDash = function(word) {
  var vowels = /[aeiouy]/gi;
  // var word = "boots";
  var newWord = word.replace(vowels, '-');

  console.log(newWord);
  return newWord;
};
// for (var i = 0; i <= vowels.length; i ++) {
// }
// var vowel = vowels[i];
