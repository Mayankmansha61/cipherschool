function tc(num)
 { 
  var min = Math.floor(num / 60);  
  var sec = num - min * 60;
  return min + ":" + sec;         
}

