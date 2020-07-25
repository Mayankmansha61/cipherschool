function vowelconv(str) {
    return str.replace(/[aeiou]/gi, (vowel, offset) => offset + 1);
  }
  console.log(vowelconv('java script is a good language'));