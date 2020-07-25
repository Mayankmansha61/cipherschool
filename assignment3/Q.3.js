function count(string,word) 
{
 var wordcount = 0;
 for (var position = 0; position < string.length; position++) 
 {
    if (string.charAt(position) ==word) 
      {
      wordcount+= 1;
      }
  }
  return wordcount;
}

console.log(wordcount('kaaaras', 'a'));
